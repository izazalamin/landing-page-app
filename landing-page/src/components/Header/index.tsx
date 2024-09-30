import { FC } from "react";

const Index: FC = () => {
  return (
    <header className="absolute top-0 left-0 w-full px-6 sm:px-10 md:px-16 py-6 z-20">
      <nav className="flex justify-between items-center font-sans text-lg">
        <div className="font-normal">@Ayush Barnwal</div>
        <div className="flex gap-6 sm:gap-8 md:gap-10">
          <a href="/about" className="hover:underline text-black">About</a>
          <a href="#work" className="hover:underline text-black">Work</a>
          <a href="/contact-us" className="hover:underline text-black">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Index;