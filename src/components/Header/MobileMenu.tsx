import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./Header.css";

gsap.registerPlugin(useGSAP);

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerTop = useRef<HTMLDivElement>(null);
  const burgerMiddle = useRef<HTMLDivElement>(null);
  const burgerBottom = useRef<HTMLDivElement>(null);

  const panel1Ref = useRef<HTMLDivElement>(null);
  const panel2Ref = useRef<HTMLDivElement>(null);
  const panel3Ref = useRef<HTMLDivElement>(null);

  const line = useRef<HTMLDivElement>(null);
  const barCode = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
      tl.set(panel1Ref.current, { x: "-162%", y: "13%", rotate: 46, opacity: 0 });
      tl.set(panel2Ref.current, { x: "162%", y: "-68%", rotate: 46, opacity: 0, scale: 1.05 });
      tl.set(panel3Ref.current, { x: "-91%", y: "101%", rotate: 46, opacity: 0 });

      if (isOpen) {
        // Animate burger to X
        tl.to(burgerTop.current, { rotate: 45, y: -6, duration: 0.3 }, 0);
        tl.to(burgerMiddle.current, { opacity: 0, duration: 0.3 }, 0);
        tl.to(burgerBottom.current, { rotate: -45, y: -9, duration: 0.3 }, 0);

        // Pannels animation comming in diagonals
        tl.fromTo(panel1Ref.current, { x: "-162%", y: "13%", opacity: 1 }, { x: "-62%", y: "-32%", opacity: 1, duration: 0.7 }, 0);
        tl.fromTo(panel2Ref.current, { x: "162%", y: "-68%", opacity: 1 }, { x: "8%", y: "3%", opacity: 1, duration: 0.7 }, "-=0.6");
        tl.fromTo(panel3Ref.current, { x: "-91%", y: "101%", opacity: 1 }, { x: "27%", y: "61%", opacity: 1, duration: 0.7 }, "-=0.5");

        // Menu appears
        tl.to(menuRef.current, { display: "block", opacity: 1, duration: 0.3 }, "-=0.3");

        // Line and barcode animations
        tl.fromTo(line.current, { height: "0%" }, { height: "500px", duration: 1 }, "-=0.2");
        tl.fromTo(barCode.current, { opacity: 0 }, { opacity: 1 }, "-=0.2");

      } else {
        // From x to burger menu
        tl.to(burgerTop.current, { rotate: 0, y: 0, duration: 0.3 }, 0);
        tl.to(burgerMiddle.current, { opacity: 1, duration: 0.3 }, 0);
        tl.to(burgerBottom.current, { rotate: 0, y: 0, duration: 0.3 }, 0);

        // Pannels animations going out
        tl.to(panel3Ref.current, { x: "-91%", y: "101%", duration: 0.5 }, 0);
        tl.to(panel2Ref.current, { x: "162%", y: "-68%", duration: 0.5 }, "-=0.4");
        tl.to(panel1Ref.current, { x: "-162%", y: "13%", duration: 0.5 }, "-=0.4");
        tl.to([panel1Ref.current, panel2Ref.current, panel3Ref.current], { opacity: 0, duration: 0.1 }, "-=0.1");

        // Menu dissapears
        tl.to(menuRef.current, { display: "none", opacity: 0, duration: 0 }, "-=0.7");
      }
    },
    { dependencies: [isOpen] }

  );


  return (
    <>

      <div className="flex flex-row items-center align-center justify-between p-4 absolute w-full">
        {/* Hamburger */}
        <div className="clickable flex flex-col gap-1.5 burger-menu z-4" onClick={() => setIsOpen(!isOpen)}>
          <div ref={burgerTop} className="w-6 h-1 rounded-[10px] origin-left bg-[var(--secondary-color-variation)]"></div>
          <div ref={burgerMiddle} className="w-6 h-1 rounded-[10px] bg-[var(--secondary-color-variation)]"></div>
          <div ref={burgerBottom} className="w-6 h-1 rounded-[10px] origin-left bg-[var(--secondary-color-variation)]"></div>
        </div>
        <div className="w-[110px] h-[60px] bg-[url('/assets/logo/light-logo.svg')] bg-contain bg-no-repeat z-1">
        </div>
        <div></div>
      </div>

      {/* Background Panels */}
      <div className="w-[356px] h-[757px] overflow-hidden fixed inset-0 pointer-events-none z-2 bgk-panels">
        <div ref={panel1Ref} className="absolute inset-0 h-[757px] bg-[var(--secondary-color)]"></div>
        <div ref={panel2Ref} className="absolute inset-0 h-[757px] bg-[var(--secondary-color)]"></div>
        <div ref={panel3Ref} className="absolute inset-0 h-[757px] bg-[var(--secondary-color)]"></div>
      </div>

      {/* Mobile Menu */}
      <div ref={menuRef} className="text-[20pt] fixed top-[50px] left-[25px] w-[356px] h-[757px] bg-none text-white p-8 hidden menuRef z-3">
        <div className="flex flex-col">
          <div ref={line} className="w-[5px] h-[500px] top-[-50px] left-[-3px] bg-[#AEFF00] absolute"></div>
          <i ref={barCode} className="cybg-barcode cybg text-[150pt] absolute rotate-270 top-[450px] left-[-94px]" style={{ color: "var(--accent-color)" }}></i>
        </div>
        <ul className="space-y-2">
          <li ><i className="cybg-star-08 cybg mr-[10px]"></i>About</li>
          <li ><i className="cybg-ellipse cybg mr-[10px]"></i>Projects</li>
          <li ><i className="cybg-star-09 cybg mr-[10px]"></i>Contact</li>
        </ul>
      </div>

    </>
  );
};

export default MobileMenu;
