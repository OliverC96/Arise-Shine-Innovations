import Banner from "./Banner";
import LandAck from "./LandAck";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
    return (
        <>
            <Banner imageFilePath="./logo.PNG"/>
            <div className="bg-teal-dark h-[5vh]"/>
            <LandAck/>
            <SpeedInsights/>
            <Analytics/>
        </>
    );
}