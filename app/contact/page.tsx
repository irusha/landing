"use client";

import React, { useMemo, useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import {
    Phone,
    MapPin,
    Clock,
    Mail,
    Send,
    CheckCircle2,
    XCircle,
    Loader2,
    MessageSquareText,
    UsersRound,
    Sparkles,
} from "lucide-react";

type FormState = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function ContactPage() {
    const subjects = useMemo(
        () => [
            { value: "general", label: "General Inquiry" },
            { value: "support", label: "Technical Support" },
            { value: "trainers", label: "Trainers & Partnerships" },
            { value: "feedback", label: "Feedback / Suggestions" },
        ],
        []
    );

    const [formData, setFormData] = useState<FormState>({
        name: "",
        email: "",
        subject: subjects[0]?.value ?? "general",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<null | { ok: boolean; text: string }>(
        null
    );

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setStatus(null);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`REPZ Contact: ${formData.subject}`);
        const body = encodeURIComponent(`Name: ${formData.name} Email: ${formData.email}  Message: ${formData.message}`);
        window.location.href = `mailto:repz-y04-05@iit.ac.lk?subject=${subject}&body=${body}`;
    };

    return (
        <main
            className="
        relative min-h-screen
        bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900
        dark:from-[#0b0f17] dark:via-[#0b0f17] dark:to-[#070a10] dark:text-white
      "
        >
            {/* Background accents */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-black/5 blur-3xl dark:bg-white/5" />
                <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-black/5 blur-3xl dark:bg-white/5" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.06),transparent_45%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />
            </div>

            <div className="relative mx-auto w-full max-w-6xl px-6 py-20">
                {/* Header */}
                <motion.div
                    className="mx-auto max-w-2xl text-center"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                >
          <span
              className="
              inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm
              border-gray-200 bg-white text-gray-700
              dark:border-white/10 dark:bg-white/5 dark:text-white/80
            "
          >
            <Sparkles className="h-4 w-4" />
            Contact REPZ
          </span>

                    <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl text-gray-900 dark:text-white">
                        Let’s help you train smarter.
                    </h1>

                    <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-white/70 md:text-lg">
                        Questions about REPZ, partnerships, or support? Send us a message and
                        we’ll respond as soon as possible.
                    </p>
                </motion.div>

                {/* Quick contact cards */}
                <motion.div
                    className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3"
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.12 } },
                    }}
                >
                    {[
                        {
                            icon: <MessageSquareText className="h-5 w-5" />,
                            title: "General Inquiries",
                            desc: "Features, availability, and product questions.",
                        },
                        {
                            icon: <UsersRound className="h-5 w-5" />,
                            title: "Trainers & Partners",
                            desc: "Coaches, gyms, and collaboration requests.",
                        },
                        {
                            icon: <Mail className="h-5 w-5" />,
                            title: "Support",
                            desc: "Issues, bugs, and help using REPZ.",
                        },
                    ].map((c, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 18 },
                                show: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.45, ease: "easeOut" }}
                            className="
                rounded-3xl border p-6
                border-gray-200 bg-white shadow-sm
                dark:border-white/10 dark:bg-white/5 dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)]
              "
                        >
                            <div
                                className="
                  mb-4 inline-flex items-center justify-center rounded-2xl border p-3
                  border-gray-200 bg-gray-50 text-gray-700
                  dark:border-white/10 dark:bg-white/5 dark:text-white/90
                "
                            >
                                {c.icon}
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {c.title}
                            </h3>

                            <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-white/70">
                                {c.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Main layout */}
                <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
                    {/* Form */}
                    <motion.section
                        className="lg:col-span-7"
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                    >
                        <div
                            className="
                rounded-3xl border p-6 md:p-8
                border-gray-200 bg-white shadow-sm
                dark:border-white/10 dark:bg-white/5 dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)]
              "
                        >
                            <h2 className="text-xl font-bold md:text-2xl text-gray-900 dark:text-white">
                                Send a message
                            </h2>

                            <p className="mt-2 text-sm text-gray-600 dark:text-white/70">
                                We usually respond within 24 hours on business days.
                            </p>

                            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <Field
                                        label="Name"
                                        name="name"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />

                                    <Field
                                        label="Email"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white/80">
                                        Subject
                                    </label>

                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="
                      w-full rounded-2xl border px-4 py-3 text-sm outline-none transition
                      border-gray-200 bg-gray-50 text-gray-900
                      focus:border-gray-300 focus:ring-2 focus:ring-gray-200
                      dark:border-white/10 dark:bg-[#0b0f17]/60 dark:text-white
                      dark:focus:border-white/20 dark:focus:ring-white/10
                    "
                                    >
                                        {subjects.map((s) => (
                                            <option
                                                key={s.value}
                                                value={s.value}
                                                className="bg-white text-gray-900 dark:bg-[#0b0f17] dark:text-white"
                                            >
                                                {s.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white/80">
                                        Message
                                    </label>

                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us what you need help with..."
                                        required
                                        rows={6}
                                        className="
                      w-full resize-none rounded-2xl border px-4 py-3 text-sm outline-none transition
                      border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400
                      focus:border-gray-300 focus:ring-2 focus:ring-gray-200
                      dark:border-white/10 dark:bg-[#0b0f17]/60 dark:text-white dark:placeholder:text-white/40
                      dark:focus:border-white/20 dark:focus:ring-white/10
                    "
                                    />
                                </div>

                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                    <p className="text-xs text-gray-500 dark:text-white/60">
                                        By submitting, you agree we can contact you back regarding
                                        your request.
                                    </p>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="
                      inline-flex items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold transition
                      border-gray-200 bg-gray-900 text-white hover:bg-gray-800
                      disabled:cursor-not-allowed disabled:opacity-60
                      dark:border-white/10 dark:bg-white dark:text-[#0b0f17] dark:hover:bg-white/90
                      dark:shadow-[0_12px_24px_rgba(0,0,0,0.35)]
                    "
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="h-4 w-4" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </div>

                                {status && (
                                    <div
                                        className={`mt-4 flex items-start gap-2 rounded-2xl border px-4 py-3 text-sm ${
                                            status.ok
                                                ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-700 dark:text-emerald-200"
                                                : "border-red-400/30 bg-red-400/10 text-red-700 dark:text-red-200"
                                        }`}
                                        role="status"
                                        aria-live="polite"
                                    >
                                        {status.ok ? (
                                            <CheckCircle2 className="mt-0.5 h-4 w-4" />
                                        ) : (
                                            <XCircle className="mt-0.5 h-4 w-4" />
                                        )}
                                        <span>{status.text}</span>
                                    </div>
                                )}
                            </form>
                        </div>
                    </motion.section>

                    {/* Details */}
                    <motion.aside
                        className="lg:col-span-5"
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
                    >
                        <div
                            className="
                rounded-3xl border p-6 md:p-8
                border-gray-200 bg-white shadow-sm
                dark:border-white/10 dark:bg-white/5 dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)]
              "
                        >
                            <h2 className="text-xl font-bold md:text-2xl text-gray-900 dark:text-white">
                                Contact details
                            </h2>

                            <p className="mt-2 text-sm text-gray-600 dark:text-white/70">
                                Prefer email or phone? Use the details below.
                            </p>

                            <div className="mt-6 space-y-4">
                                <InfoRow
                                    icon={<Phone className="h-5 w-5" />}
                                    title="Call us"
                                    value="+94 75 340 5009"
                                    hint="Mon–Fri, 8:30am–5:30pm"
                                />

                                <InfoRow
                                    icon={<Mail className="h-5 w-5" />}
                                    title="Email"
                                    value="repz-y04-05@iit.ac.lk"
                                    hint="We respond within 24 hours"
                                />

                                <InfoRow
                                    icon={<MapPin className="h-5 w-5" />}
                                    title="Location"
                                    value="Repz.lk, Bay 7, Trace Expert City, Maradana, Colombo 10"
                                />

                                <InfoRow
                                    icon={<Clock className="h-5 w-5" />}
                                    title="Business hours"
                                    value="Mon–Fri: 8:30am – 5:30pm"
                                />
                            </div>

                            <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-white/10 dark:bg-white/5">
                                <p className="text-sm font-semibold text-gray-900 dark:text-white/85">
                                    Tip for faster support
                                </p>

                                <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                                    Include your device type, OS version, and what you were doing
                                    when the issue happened.
                                </p>
                            </div>
                        </div>
                    </motion.aside>
                </div>
            </div>
        </main>
    );
}

function Field({
                   label,
                   name,
                   value,
                   onChange,
                   placeholder,
                   required,
                   type = "text",
               }: {
    label: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
    type?: string;
}) {
    return (
        <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white/80">
                {label}
            </label>

            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="
          w-full rounded-2xl border px-4 py-3 text-sm outline-none transition
          border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400
          focus:border-gray-300 focus:ring-2 focus:ring-gray-200
          dark:border-white/10 dark:bg-[#0b0f17]/60 dark:text-white dark:placeholder:text-white/40
          dark:focus:border-white/20 dark:focus:ring-white/10
        "
            />
        </div>
    );
}

function InfoRow({
                     icon,
                     title,
                     value,
                     hint,
                 }: {
    icon: React.ReactNode;
    title: string;
    value: string;
    hint?: string;
}) {
    return (
        <div className="flex gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-white/10 dark:bg-white/5">
            <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-white/90">
                {icon}
            </div>

            <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-white/85">
                    {title}
                </p>

                <p className="mt-0.5 text-sm text-gray-600 dark:text-white/70">
                    {value}
                </p>

                {hint ? (
                    <p className="mt-1 text-xs text-gray-500 dark:text-white/50">{hint}</p>
                ) : null}
            </div>
        </div>
    );
}
