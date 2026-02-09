import services from "../../data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
    return (
        <div className="py-14 sm:py-24 md:py-32 px-14 sm:px-24 md:px-32 xl:px-64 flex flex-col gap-6 bg-gold">
            <h1 className="text-3xl lg:text-4xl text-green-dark font-header font-bold">
                Range of Services
            </h1>
            <div className="grid grid-cols-2 gap-6">
                {
                    services.map((service, index) => (
                        <ServiceCard
                            className="text-slate-800 font-body"
                            service={service}
                            index={index}
                        />
                    ))
                }
            </div>
        </div>
    );
}