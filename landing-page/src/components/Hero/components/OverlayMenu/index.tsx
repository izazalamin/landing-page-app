import { FC, useState } from "react";
import CloseIcon from "../../../../assets/close.png"

const Index: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle Menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative bg-gray-300 flex items-center justify-end font-neueMontreal">
      
      <div
        onClick={toggleMenu}
        className={`fixed top-1/2 right-0 transform -translate-y-1/2 transition-all duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-[312px]'
        } bg-black text-white flex items-center justify-center gap-7 rounded-l-full px-8 py-5 cursor-pointer hover:translate-x-[2%] z-40`}
      >
        <span className="text-[56px]">👋</span>
        <span className="text-[40px]">Hi I’m Ayush</span>
      </div>

      {/* Overlay Menu*/}
      <div
        className={`fixed top-0 right-0 h-[800px] w-1/3 bg-black text-white transition-transform duration-300 z-40 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="absolute top-4 right-4 text-xl"
          onClick={toggleMenu}
        >
          <img src={CloseIcon} alt="Close menu" className="h-[50px] w-[60px]" />
        </button>

        <nav className="flex flex-col items-start pl-[30px] pt-[80px] gap-[28px] space-y-4 text-[60px]">
          <a href="#home" className="text-3xl hover:underline">
            Home
          </a>
          <a href="#about" className="text-3xl hover:underline">
            About
          </a>
          <a href="#work" className="text-3xl hover:underline">
            Work
          </a>
          <a href="#contact" className="text-3xl hover:underline">
            Contact
          </a>
        </nav>

        <div className="flex items-end justify-start pl-[30px] pt-[121px] flex-grow gap-5 text-sm mt-auto pb-10">
          <a href="#" className="hover:underline">Linkedin</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">Webflow</a>
        </div>
      </div>
    </div>
  );
};

export default Index;
