import services from "../../data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
    return (
        <div className="py-14 sm:py-20 px-14 sm:px-24 md:px-32 xl:px-72 flex flex-col gap-6 bg-cream">
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