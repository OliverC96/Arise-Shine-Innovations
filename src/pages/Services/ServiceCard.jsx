import { FaStarOfLife } from "react-icons/fa6";

export default function ServiceCard(props) {
    return (
       <div>
           <div>
               <p><u> Package #{props.index} </u></p>
               <p> {props.title} </p>
               <p> {props.subtitle && props.subtitle} </p>
           </div>
           <div>
               <div>
                   <p><u> FOCUS: </u></p>
                   <p> {props.focus} </p>
               </div>
               <div>
                   <p><u> KEY RESULTS: </u></p>
                   <p> {props.results.map((result, index) => <p key={index}> {result} </p>)} </p>
               </div>
           </div>
       </div>
    );
}