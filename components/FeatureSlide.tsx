"use client";

interface FeatureSlideProps {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    reverse?: boolean;
}

export default function FeatureSlide({
                                         title,
                                         subtitle,
                                         description,
                                         image,
                                         reverse = false,
                                     }: FeatureSlideProps) {
    return (
        <section
            className={`flex flex-col md:flex-row items-center justify-between max-w-6xl w-full mx-auto mb-24 p-6 md:p-10 rounded-3xl ${
                reverse ? "md:flex-row-reverse bg-gradient-to-r from-blue-50 to-white" : "bg-gradient-to-r from-white to-blue-50"
            } shadow-sm`}
        >
            {/* Text Section */}
            <div className="md:w-1/2 px-4 md:px-8 text-left md:text-left">
                <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide mb-2">
                    {subtitle}
                </p>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4 leading-snug">
                    {title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base">{description}</p>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                <img
                    src={image}
                    alt={title}
                    className="w-[280px] md:w-[380px] lg:w-[420px] rounded-2xl shadow-lg border border-gray-100"
                />
            </div>
        </section>
    );
}
