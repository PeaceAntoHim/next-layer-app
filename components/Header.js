import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
    return (
        <header className="">
            <div>
                <HeaderItem title='Home' Icon={} />
            </div>
            <h1>This header</h1>
            {/* This are image optimationz from next */}
            <Image
                className="object-contain"
                src="https://links.papareact.com/ua6" 
                    width={200}
                    height={100}
                />
        </header>
    );
}

export default Header