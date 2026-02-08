import {
    RiDoubleQuotesL,
    RiDoubleQuotesR
} from "react-icons/ri";

export default function Testimonial(props) {
    return (
        <div className="border-2 border-green-xdark rounded-xl p-8 bg-gold text-slate-800">
            <h2 className="text-lg lg:text-xl flex justify-end"> <b> [ Simone ] </b> </h2>
            <p className="flex flex-col h-[60vh] lg:h-[45vh] justify-center gap-3">
                <RiDoubleQuotesL className="text-2xl sm:text-3xl" />
                <p className="max-h-[45vh] lg:max-h-[30vh] overflow-auto whitespace-pre-line lg:text-lg"> {props.content} </p>
                <RiDoubleQuotesR className="text-2xl sm:text-3xl self-end" />
            </p>
            <h2 className="text-lg lg:text-xl"> <i><b>~ {props.name}, {props.country}</b></i> </h2>
        </div>
    );
}