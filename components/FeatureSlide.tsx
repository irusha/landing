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
            className={`flex flex-col items-center justify-between max-w-6xl w-full mx-auto rounded-3xl ${
                reverse ? "flex-col-reverse bg-gradient-to-r from-blue-50 to-white" : "bg-gradient-to-r from-white to-blue-50"
            } shadow-sm`}
        >
            {/* Text Section */}
            <div className="md:w-3/4 px-4 md:px-4 text-center mt-5 md:mt-20 md:mb-20">
                <p className="text-sm text-blue-600 font-bold md:font-extrabold uppercase tracking-wide mb-2">
                    {subtitle}
                </p>
                <h4 className={`text-l md:text-4xl font-semibold leading-snug`}>
                    {title}
                </h4>
                <p className="text-sm md:text-xl text-gray-600 leading-relaxed mt-4 mb-4">{description}</p>
            </div>

            {/* Image Section */}
            <div
                className={`md:w-2/3 flex justify-center`}
            >
                <img
                    src={image}
                    alt={title}
                    className={`${reverse
                        ? "rounded-t-2xl md:rounded-b-2xl md:rounded-t-none"
                        : "rounded-b-2xl md:rounded-t-2xl md:rounded-b-none"} shadow-lg border border-gray-100`}
                />
            </div>
        </section>
    );
}
