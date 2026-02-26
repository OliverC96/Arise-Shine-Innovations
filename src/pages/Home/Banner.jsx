export default function Banner(props) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-[91vh] bg-teal-dark p-8 ">
            <img src="wisdom_circle_2.jpg" className="w-full rounded-3xl "/>
            <div className="grid grid-cols-2 lg:grid-cols-1 justify-items-center">
                <img src="logo.PNG" className="self-center rounded-sm" />
                <p className="text-xl sm:text-4xl text-white font-tagline tracking-wide text-center">
                    ARISE & SHINE INNOVATION INC. <br/>
                    Co-Founded by: <br/>
                    <i><b>Jessie Chen</b></i> & <i><b>Simone Homeniuk</b></i> <br/>
                    Mission: to <u>HELP SAVE the WORLD.</u> <br/>
                    🌎<br/>
                    ❤️🌻🙏🕊️☮️
                </p>
            </div>
        </div>
    );
}