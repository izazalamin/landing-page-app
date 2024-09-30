import { FC } from "react";
import HeroImg from "../../assets/hero-img.png";
import OverlayMenu from "./components/OverlayMenu";

const Index: FC = () => {
  return (
    <div className="w-screen h-screen relative bg-[#C7D0D9] flex justify-center items-end">
      <OverlayMenu />
      <img src={HeroImg} alt="hero" className="max-w-[70%]"/>
    </div>
  );
}

export default Index;