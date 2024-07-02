import {
    RiDoubleQuotesL,
    RiDoubleQuotesR
} from "react-icons/ri";

export default function Testimonial(props) {
    return (
        <div className="border-2 border-green-dark rounded-xl p-8 flex flex-col justify-between bg-gold text-slate-800 transition duration-300 hover:border-2 hover:border-green-xdark hover:scale-105">
            <p className="pb-4 flex flex-col">
                <RiDoubleQuotesL className="text-2xl sm:text-3xl mb-3" />
                {props.content}
                <RiDoubleQuotesR className="text-2xl sm:text-3xl self-end" />
            </p>
            <h2 className="text-base sm:text-lg"> <i><b>~ {props.name}, {props.country}</b></i> </h2>
        </div>
    );
}