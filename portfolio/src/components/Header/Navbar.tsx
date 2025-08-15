import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./Header.css";

export type SvgButtonProps = React.SVGProps<SVGSVGElement> & {
    className?: string;
};
gsap.registerPlugin(useGSAP);
export const SvgButton: React.FC<SvgButtonProps> = ({ className, ...props }) => {
    const polygTopR = useRef<SVGPolygonElement>(null);
    const rectangle = useRef<SVGRectElement>(null);
    const polygTopL = useRef<SVGPolygonElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
        tl.set(rectangle.current, { y: 682.2, height: "0%" });
        tl.set(polygTopL.current, { y: "250%", opacity: 0 });
        tl.set(polygTopR.current, { y: "250%", opacity: 0 });

        tl.to(rectangle.current, { y: 0, height: 635.6, duration: 1 }, 0);
        tl.to(polygTopL.current, { y: 0, opacity: 1, duration: 0.5 }, "-=0.6");
        tl.to(polygTopR.current, { y: 0, opacity: 1, duration: 0.5 }, "-=0.6");
    });
    return (
        <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 2000 2000"
            xmlSpace="preserve"
            className={className}
            {...props}
        >
            <rect
                ref={rectangle}
                x="10.9"
                y="682.2"
                width="1978.2"
                height="635.6"
                style={{ opacity: 0.25, fill: "#AEFF00" }}
            />
            <polygon ref={polygTopL}
                points="21.8,850.4 0,850.4 0,671.3 179.1,671.3 179.1,693.1 21.8,693.1"
                style={{ fill: "#AEFF00" }}
            />
            <polygon
                points="179.1,1328.7 0,1328.7 0,1149.6 21.8,1149.6 21.8,1306.9 179.1,1306.9"
                style={{ fill: "#AEFF00" }}
            />
            <polygon
                points="2000,1328.7 1820.9,1328.7 1820.9,1306.9 1978.2,1306.9 1978.2,1149.6 2000,1149.6"
                style={{ fill: "#AEFF00" }}
            />
            <polygon ref={polygTopR}
                points="2000,850.4 1978.2,850.4 1978.2,693.1 1820.9,693.1 1820.9,671.3 2000,671.3"
                style={{ fill: "#AEFF00" }}
            />
        </svg>
    );
}


const Navbar = () => {
    const btnText = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
        tl.set(btnText.map(ref => ref.current), { opacity: 0 });
        tl.to(btnText.map(ref => ref.current), { opacity: 1, duration: 0.5 }, "+=0.5");
    }, []);
    return (
        <>
            <div className="flex flex-row items-center align-center justify-between mx-[20px] navbar">
                <div className="w-[110px] h-[60px] bg-[url('/assets/logo/light-logo.svg')] bg-contain bg-no-repeat">
                </div>
                <div className="nav-links">
                    <a className="about" href="#About"><SvgButton className="absolute w-[120px] top-[-31.5px] right-[300px] z-[-1]"></SvgButton><span className="z-2" ref={btnText[0]}>About</span></a>
                    <a className="projects" href="#Projects"><SvgButton className="absolute w-[120px] top-[-31.5px] right-[160px] z-[-1]"></SvgButton><span ref={btnText[1]}>Projects</span></a>
                    <a className="contact" href="#Contact"><SvgButton className="absolute w-[120px] top-[-31.5px] right-[20px] z-[-1]"></SvgButton><span ref={btnText[2]}>Contact</span></a>
                </div>
            </div>
        </>
    )
};
export default Navbar;