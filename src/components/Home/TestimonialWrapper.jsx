import Testimonial from "./Testimonial";

const clientTestimonials = [
    {
        name: "Natt",
        country: "USA",
        content: "Simone is an awesome coach that I would recommend to anyone. She’s great at listening, she does not judge, she meets you where you’re at. I felt very overwhelmed before seeing her. Simone helped me organize my thoughts and plans on my entrepreneurial journey. She helped me realize that I was spreading myself thin, and that I needed to prioritize and focus a few things at a time, which increased my productivity and outcomes! Most importantly, she respected my beliefs and motivated me to stay in line with my values and purpose. She challenged me in a way that my personal beliefs felt respected. I can’t thank you enough, Simone!"
    },
    {
        name: "Tracy",
        country: "Canada",
        content: "Simone is an amazing coach! From the beginning she was warm and welcoming. She had the ability to draw from her life experiences, ask powerful questions and help me on my own journey of self discovery. Thanks to Simone's coaching, after each session I felt energized and empowered to achieve my goals!"
    }
]

export default function TestimonialWrapper() {
    return (
        <div className="py-20 sm:py-24 md:py-28 px-20 md:px-32 xl:px-72 flex flex-col gap-7 bg-green-dark">
            <h1 className="text-2xl sm:text-4xl text-gold font-header font-bold">
                Testimonials
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 font-body text-sm sm:text-base">
                {
                    clientTestimonials.map(t => {
                        return <Testimonial {...t} />
                    })
                }
            </div>
        </div>
    );
}