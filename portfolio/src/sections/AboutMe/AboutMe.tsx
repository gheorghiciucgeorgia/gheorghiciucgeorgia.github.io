import './AboutMe.css';
import { useEffect } from 'react';
import { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);


const AboutMe = () => {
    const slices = 9;
    const angle = 360 / slices;

    const flowerRef = useRef<HTMLDivElement>(null);
    const flowerRef1 = useRef<HTMLDivElement>(null);
    const flowerRef2 = useRef<HTMLDivElement>(null);
    const flowerRef3 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const sphere = document.querySelector(".sphere");
        if (sphere) {
            for (let i = 0; i < slices - 1; i++) {
                const slice = document.createElement("div");
                slice.style.transform = `rotateY(${angle * i}deg)`;
                sphere.appendChild(slice);
            }
        }
    }, []);

    useGSAP(() => {
        if (!flowerRef.current) return;
        gsap.fromTo(
            flowerRef.current,
            { rotation: 0, transformOrigin: "50% 50%" },
            { rotation: 360, duration: 20, repeat: -1, ease: "linear" }
        );
        gsap.fromTo(
            flowerRef1.current,
            { rotation: 0, transformOrigin: "50% 50%" },
            { rotation: 360, duration: 20, repeat: -1, ease: "linear" }
        );
        gsap.fromTo(flowerRef2.current, { scale: 0.5 }, {
            scale: 1,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            transformOrigin: "50% 50%"
        });
        gsap.fromTo(flowerRef3.current, { scale: 0.5 }, {
            scale: 1,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            transformOrigin: "50% 50%"
        });
    }, []);

    return (
        <div className='aboutMe-section w-full bg-[var(--secondary-color)] flex flex-row justify-between items-center py-[2vw] px-[7vw] relative' id="About">
            <div className='flex flex-col items-center justify-between h-auto w-[45%]'>
                <div className="wrapper">
                    <div className="sphere">
                        <div className="equator"></div>
                        <div className="tropic cancer"></div>
                        <div className="tropic capricorn"></div>
                    </div>
                </div>
            </div>
            <div className='w-[45%] text-[var(--accent-color)]'>
                <p style={{ fontFamily: 'var(--body-font)' }} className='border-l-5 border-l-solid p-3 text-[16px] leading-1.4'>A little bit about me: I am adaptable, detail-oriented, and always eager to learn. I approach every project with curiosity and a passion for creating meaningful results. Passionate about creating engaging and intuitive web experiences, I strive to make every project meaningful.</p>
            </div>
            <div className='aboutMe-bottom absolute bottom-[3px] italic text-[16px] left-[8px] line-height-[110%] text-[var(--accent-color)] opacity-80'>
                <i className="ri-error-warning-line mr-1 text-[18px]"></i>SYNCING EXPERIENCE...
            </div>
        </div>
    );
}
export default AboutMe;