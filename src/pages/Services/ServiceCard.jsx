import { FaStarOfLife } from "react-icons/fa6";

export default function ServiceCard({ service, index }) {
    return (
       <div className={`bg-orange text-white rounded-3xl flex flex-col gap-4 p-9 ${index <= 1 && "lg:col-span-2"}`}>
           <div className="flex flex-col gap-3">
               <p className="text-xl lg:text-2xl"><u> Package #{index + 1} </u></p>
               <p className="text-xl lg:text-2xl"><b> {service.title} </b></p>
               <p className="text-lg lg:text-xl"><i> {service.subtitle} </i></p>
           </div>
           <div className="flex flex-col gap-3 text-md lg:text-lg">
               {
                   service.desc && (
                       <p
                           dangerouslySetInnerHTML={{__html: service.desc}} // Needed to render <b> tags on specific words
                           className="text-md lg:text-lg whitespace-pre-line">
                       </p>
                   )
               }
               {
                   service.listItems && (
                       // <ul className="list-disc ms-8">
                       //     { service.listItems.map((item, index) => (
                       //         <li key={index}> { item } </li>
                       //     ))}
                       // </ul>
                       <p>
                           {service.listItems.map((item, index) => (
                               <div className="ms-2.5 flex gap-2 items-start" key={index}>
                                   <FaStarOfLife className="flex-none mt-1"/>
                                   <p> {item} </p>
                               </div>
                           ))}
                       </p>
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
                                   <div className="ms-2 flex gap-2 items-start" key={index}>
                                       <FaStarOfLife className="flex-none mt-1" />
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