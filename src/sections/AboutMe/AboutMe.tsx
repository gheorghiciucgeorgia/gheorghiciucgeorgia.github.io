import './AboutMe.css';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

gsap.registerPlugin(useGSAP);


const AboutMe = () => {
    const slices = 9;
    const angle = 360 / slices;
    const aboutMeRef = useRef<HTMLDivElement>(null);
    const sphereRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);
    const originalTextRef = useRef<string | null>(null);

    useEffect(() => {
        const sphere = document.querySelector(".sphere");
        if (sphere) {
            for (let i = 0; i < slices - 1; i++) {
                const slice = document.createElement("div");
                slice.className = "w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]";
                slice.style.transform = `rotateY(${angle * i}deg)`;
                sphere.appendChild(slice);
            }
        }
    }, []);
    useGSAP(() => {
        const tl = gsap.timeline();

        if (sphereRef.current) {
            tl.fromTo(
                sphereRef.current,
                { scale: 0 },
                { scale: 1, duration: 1, ease: "power2.out" },
                "+=0.5" // offset corect aici, în timeline
            );
        }

        if (textRef.current) {
            const textEl = textRef.current;
            if (!originalTextRef.current) {
                originalTextRef.current = textEl.textContent || "";
            }
            const originalText = originalTextRef.current;
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

            console.log(originalText);

            const randomText = originalText
                .split("")
                .map(char => (char === " " ? " " : chars[Math.floor(Math.random() * chars.length)]))
                .join("");

            textEl.textContent = randomText;

            tl.to(textEl, {
                duration: 2,
                text: originalText,      // text final
                ease: "power2.out",
                delay: 0.5,
            });
        }
    }, []);

    return (
        <div ref={aboutMeRef} className='aboutMe-section w-full bg-[var(--secondary-color)] flex flex-col lg:flex-row justify-between items-center py-[4vw] lg:py-[2.5vw] px-[7vw] relative before:top-[-6px] md:before:top-[-18px] xl:before:top-[-35px]' id="About">
            <div ref={sphereRef} className="wrapper mb-[20px] lg:mb-0 lg:w-[45%]">
                <div className="sphere w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]">
                    <div className="equator rotate-x-[90deg] w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]"></div>
                    <div className="tropic m-[14px] w-[72px] h-[72px] lg:w-[172px] lg:h-[172px] transform -translate-y-[33px] lg:-translate-y-[50px] rotate-x-[90deg]"></div>
                    <div className="tropic m-[14px] w-[72px] h-[72px] lg:w-[172px] lg:h-[172px] transform translate-y-[33px] lg:translate-y-[50px] rotate-x-[90deg]"></div>
                </div>
            </div>
            <div className='w-full lg:w-[45%] text-[var(--accent-color)]'>
                <p ref={textRef} style={{ fontFamily: 'var(--body-font)' }} className='border-l-5 border-l-solid p-3 text-justify text-[16px] lg:text-[18px] leading-1.4 mb-[20px] lg:mb-0 lg:text-start'>A little bit about me: I am adaptable, detail-oriented, and always eager to learn. I approach every project with curiosity and a passion for creating meaningful results. Passionate about creating engaging and intuitive web experiences, I strive to make every project meaningful.</p>
            </div>
            <div ref={bottomRef} className='aboutMe-bottom absolute bottom-[6px] italic text-[10px] lg:text-[16px] left-[8px] line-height-[110%] text-[var(--accent-color)] opacity-80'>
                <i className="ri-error-warning-line mr-1 text-[12px] lg:text-[18px]"></i>SYNCING EXPERIENCE...
            </div>
        </div>
    );
}
export default AboutMe;