export default function Banner(props) {
    return (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 min-h-[91vh] bg-teal-dark p-8">
            <img src="wisdom_circle_2.jpg" className="w-full rounded-full "/>
            <div className="grid grid-cols-1 gap-6 justify-items-center">
                <img src="logo.PNG" className="self-center rounded-sm" />
                <div className="flex flex-col gap-8 text-2xl sm:text-4xl text-white font-tagline tracking-wide text-center">
                    <p> ARISE & SHINE INNOVATION INC. </p>
                    <div className="flex flex-col gap-6">
                        <p><i><b>Jessie Chen</b></i> & <i><b>Simone Homeniuk</b></i></p>
                        <p>Education Innovation Consultants and Trauma Informed Coaches</p>
                        <p>We Create Scalable Service Models that Integrate Education Innovation with Trauma-Informed Coaching</p>
                    </div>
                </div>
            </div>
        </div>
    );
}