import services from "../../data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
    return (
        <div className="section-padding flex flex-col gap-6 bg-cream">
            <h1 className="text-3xl lg:text-4xl text-slate-800 font-header font-bold">
                Range of Services
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                {
                    services.map((service, index) => (
                        <ServiceCard
                            service={service}
                            index={index}
                        />
                    ))
                }
            </div>
        </div>
    );
}