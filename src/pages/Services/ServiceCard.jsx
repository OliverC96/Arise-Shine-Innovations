import { FaStarOfLife } from "react-icons/fa6";

export default function ServiceCard({ service, index }) {
    return (
       <div className={`${service.bgColour} rounded-md flex flex-col gap-3 p-7 border border-services-grey border-[2.5px] ${index === 0 && "col-span-2"}`}>
           <div className="flex flex-col gap-3">
               <p className="text-xl lg:text-2xl"><u> Package #{index + 1} </u></p>
               <p className="text-xl lg:text-2xl"><b> {service.title} </b></p>
               <p className="text-lg lg:text-xl"><i> {service.subtitle} </i></p>
           </div>
           <div className="flex flex-col gap-3">
               {
                   service.desc && (
                       <p className="text-md lg:text-lg"> {service.desc} </p>
                   )
               }
               {
                   service.focus && (
                       <div>
                           <p><b><u> FOCUS: </u></b></p>
                           <p> {service.focus} </p>
                       </div>
                   )
               }
               {
                   service.results && (
                       <div>
                           <p><b><u> KEY RESULTS: </u></b></p>
                           <p>
                               {service.results.map((result, index) => (
                                   <div className="flex gap-2 items-center" key={index}>
                                       <FaStarOfLife />
                                       <p> {result} </p>
                                   </div>
                               ))}
                           </p>
                       </div>
                   )
               }
           </div>
       </div>
    );
}