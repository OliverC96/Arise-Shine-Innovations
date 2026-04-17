export default function Banner(props) {
    return (
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 min-h-[91vh] bg-teal-dark p-8 lg:p-28">
            <div className="grid grid-cols-1 gap-10 justify-items-center">
                <img src="logo.PNG" className="self-center rounded-md"/>
                <div
                    className="flex flex-col gap-8 text-white font-tagline tracking-wide text-center">
                    <p className="text-2xl sm:text-4xl"> ARISE & SHINE INNOVATION INC. </p>
                    <div className="flex flex-col gap-6">
                        <p className="text-xl sm:text-3xl"><i><b>Jessie Chen</b></i> & <i><b>Simone Homeniuk</b></i></p>
                        <p className="text-lg sm:text-2xl">Education Innovation Consultants and Trauma Informed Coaches</p>
                        <p className="text-lg sm:text-2xl">We Create Scalable Service Models that Integrate Education Innovation with Trauma-Informed
                            Coaching</p>
                    </div>
                </div>
            </div>
            <img src="wisdom_circle_2.jpg" className="w-full rounded-[3.0rem] h-[90%] drop-shadow-md lg:drop-shadow-xl"/>
        </div>
    );
}