import { FC } from "react";
import './styles.css';
import About from "../About"

const Index: FC = () => {
  return (
    <header className="nav-container">
      <nav>
        <div>
          @Ayush Barnwal
        </div>
        <div className="nav-list">
          {/* <a href="/about">About</a> */}
          <a href="/about" className="hover:underline">About</a>
          <a href="#work" className="hover:underline">Work</a>
          <a href="/contact-us" className="hover:underline">Contact</a>

        </div>
      </nav>
    </header>
  );
}

export default Index;