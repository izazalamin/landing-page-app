import { FC } from "react";
import ContactImg from "../../assets/about-1.png";
import Form from "./components/index";

const Contact: FC = () => {
    return (
        <main className="font-neueMontreal mt-[26px]">
            {/* header nav */}
            <header className="container absolute top-1 text-sm">
                <nav className="flex flex-row justify-between space-x-4 mx-[80px] my-[26px]">
                    <div>
                        @Ayush Barnwal
                    </div>
                    <div className="flex gap-5">
                        <a href="/public">About</a>
                        <a href="#work">Work</a>
                        <a href="/contact-us">Contact</a>
                    </div>
                </nav>
            </header>
            {/* hero */}
            <section className="container grid grid-cols-2 mx-[80px] my-[160px] w-full">
                <div className="flex flex-col w-full">
                    <img src={ContactImg} alt="contact" className="contact mb-10 size-[297px]" />
                    <a className="text-sm">Contact Details</a>
                    <div className="text-2xl">ayush.barnwal@brightscout.com</div>
                    <div className="text-2xl">+912317926481231293</div>

                    <div className="social mt-10">
                        <div className="text-sm">
                            Social
                        </div>
                        <div className="flex flex-col gap-2 mt-2 text-2xl">
                            <a href="#">Linkedin</a>
                            <a href="#">Twitter</a>
                            <a href="#">Instagram</a>
                            <a href="#">Webflow</a>
                            <a href="#">Figma</a>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="gap-[40px] flex flex-col">
                    <div className="text-[60px] leading-tight">Let’s build something cool together</div>
                    <div className="gap-[32px] flex-col flex">
                        <Form />
                        <button className="bg-black rounded-s-full rounded-e-full text-white py-[24px] px-[48px] text-[18px] max-w-[193px]">Submit</button>
                    </div>
                </div>
            </section>
            <footer className="flex bg-black w-full text-white p-[80px]">
                Build with 💖 by Brightscout & Ayush
                <div className="flex items-center justify-end flex-grow mr-20 gap-5 text-sm">
                    <a href="#">Linkedin</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                    <a href="#">Webflow</a>
                </div>
            </footer>
        </main>


    );
};


export default Contact;