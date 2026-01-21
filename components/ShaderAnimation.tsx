"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { useTheme } from "next-themes"

interface ShaderAnimationProps {
    mode?: "light" | "dark"
}

export function ShaderAnimation({ mode }: ShaderAnimationProps) {
    const { resolvedTheme } = useTheme()
    const effectiveMode = mode || (resolvedTheme === "dark" ? "dark" : "light")
    const containerRef = useRef<HTMLDivElement>(null)
    const sceneRef = useRef<{
        camera: THREE.Camera
        scene: THREE.Scene
        renderer: THREE.WebGLRenderer
        uniforms: any
        animationId: number
    } | null>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const container = containerRef.current

        // Vertex shader
        const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `

        // Fragment shader with mode support
        const fragmentShader = `
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359

      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float isDark;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time*0.05;
        float lineWidth = 0.002;

        float intensity = 0.0;
        for(int i=0; i < 5; i++){
          intensity += lineWidth*float(i*i) / abs(fract(t + float(i)*0.01)*5.0 - length(uv) + mod(uv.x+uv.y, 0.2));
        }
        
        vec3 color;
        
        if(isDark > 0.5) {
          // Dark mode: Green hues (#CFF500)
          // #CFF500 = RGB(207, 245, 0) = normalized (0.812, 0.961, 0.0)
          color = vec3(
            intensity * 0.812,    // Red
            intensity * 0.961,    // Green
            intensity * 0.0       // Blue
          );
        } else {
          // Light mode: Purple hues (#A66CFF)
          // #A66CFF = RGB(166, 108, 255) = normalized (0.651, 0.424, 1.0)
          vec3 purpleColor = vec3(
            intensity * 0.651,    // Red
            intensity * 0.424,    // Green
            intensity * 1.0       // Blue
          );
          // Mix with very light background - lighter and more subtle
          color = mix(vec3(0.96, 0.96, 0.98), purpleColor, 0.6);
        }
        
        gl_FragColor = vec4(color, 1.0);
      }
    `

        // Initialize Three.js scene
        const camera = new THREE.Camera()
        camera.position.z = 1

        const scene = new THREE.Scene()
        const geometry = new THREE.PlaneGeometry(2, 2)

        const uniforms = {
            time: { type: "f", value: 1.0 },
            resolution: { type: "v2", value: new THREE.Vector2() },
            isDark: { type: "f", value: effectiveMode === "dark" ? 1.0 : 0.0 },
        }

        const material = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
        })

        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        const renderer = new THREE.WebGLRenderer({ antialias: true })
        renderer.setPixelRatio(window.devicePixelRatio)

        container.appendChild(renderer.domElement)

        // Handle window resize
        const onWindowResize = () => {
            const width = container.clientWidth
            const height = container.clientHeight
            renderer.setSize(width, height)
            uniforms.resolution.value.x = renderer.domElement.width
            uniforms.resolution.value.y = renderer.domElement.height
        }

        // Initial resize
        onWindowResize()
        window.addEventListener("resize", onWindowResize, false)

        // Animation loop
        const animate = () => {
            const animationId = requestAnimationFrame(animate)
            uniforms.time.value += 0.05
            renderer.render(scene, camera)

            if (sceneRef.current) {
                sceneRef.current.animationId = animationId
            }
        }

        // Store scene references for cleanup
        sceneRef.current = {
            camera,
            scene,
            renderer,
            uniforms,
            animationId: 0,
        }

        // Start animation
        animate()

        // Cleanup function
        return () => {
            window.removeEventListener("resize", onWindowResize)

            if (sceneRef.current) {
                cancelAnimationFrame(sceneRef.current.animationId)

                if (container && sceneRef.current.renderer.domElement) {
                    container.removeChild(sceneRef.current.renderer.domElement)
                }

                sceneRef.current.renderer.dispose()
                geometry.dispose()
                material.dispose()
            }
        }
    }, [effectiveMode, resolvedTheme])

    return (
        <div
            ref={containerRef}
            className="w-full h-screen"
            style={{
                background: effectiveMode === "dark" ? "#000" : "#fff",
                overflow: "hidden",
            }}
        />
    )
}