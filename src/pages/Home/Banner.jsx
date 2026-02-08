export default function Banner(props) {
    return (
        <div className="h-[90vh] bg-logo-primary flex flex-col justify-center items-center">
            <div className="mb-[10vh] flex flex-col md:flex-row justify-center items-center gap-7 lg:gap-4 w-4/6">
                {/*<img*/}
                {/*    src={props.imageFilePath}*/}
                {/*    alt="H6 logo banner with the H6 tagline: 'From Hitler to Homeniuk:  Hurdling Hypocrisy in Search of Hope for HUMANITY.'"*/}
                {/*    className="w-1/2 md:w-[22%] lg:hover:rotate-45 transition duration-500"*/}
                {/*/>*/}
                <p className="text-xl sm:text-3xl text-gold font-tagline tracking-wide text-center">
                    ARISE & SHINE INNOVATION INC. <br />
                    Co-Founded by: <br />
                    <i><b>Jessie Chen</b></i> & <i><b>Simone Homeniuk</b></i> <br />
                    Mission: to <u>HELP SAVE the WORLD.</u> <br />
                    🌎<br />
                    ❤️🌻🙏🕊️☮️
                </p>
            </div>
        </div>
    );
}