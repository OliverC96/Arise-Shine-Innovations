export default function Header() {
    return (
        <div className="flex justify-between p-5 bg-gold text-slate-800 font-body text-xl">
            <a className="hover:cursor-pointer" href="/"> H6 Life Coaching </a>
            <p className="hidden lg:block"> Simone Homeniuk – Thought Leader and Wisdom Coach </p>
            <a className="hover:underline" href="/"> Link 1 </a>
        </div>
    );
}