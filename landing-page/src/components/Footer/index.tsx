import {FC} from "react";
import Footer1 from '../../assets/footer-1.png';


const Footer: FC = () => {
  return (
    <div className="bg-black mx-auto w-100% font-neueMontreal text-white">
       <section className="p-10 text-3xl flex">
        <div>
        Have something in mind?
        <div className="flex"><img src={Footer1} alt="footer" className="footer-1 size-10 mr-3"/>let’s build it together.</div>
        </div>
        <div className="flex items-center justify-end flex-grow">
        <button className="btn btn-active btn-primary rounded-s-full rounded-e-full bg-white text-black p-5 mr-20 text-sm hover:bg-gray-200">
            Get in touch</button>
        </div>
       </section>
       <section className="flex">
        <div className="p-10 flex text-sm items-end">
            Build with 💖 by Brightscout & Ayush 
        </div>
        <div className="flex items-center justify-end flex-grow mr-20 gap-5 text-sm">
          <a href="#" className="hover:underline">Linkedin</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">Webflow</a>
        </div>
       </section>
    </div>
  );
}
export default Footer;