import './AboutMe.css';
import { useEffect } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);


const AboutMe = () => {
    const slices = 9;
    const angle = 360 / slices;

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

    return (
        <div className='aboutMe-section w-full bg-[var(--secondary-color)] flex flex-col lg:flex-row justify-between items-center py-[4vw] lg:py-[2vw] px-[7vw] relative before:top-[-6px] md:before:top-[-18px] xl:before:top-[-35px]' id="About">
            <div className="wrapper mb-[20px] lg:mb-0 lg:w-[45%]">
                <div className="sphere w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]">
                    <div className="equator rotate-x-[90deg] w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]"></div>
                    <div className="tropic m-[14px] w-[72px] h-[72px] lg:w-[172px] lg:h-[172px] transform -translate-y-[33px] lg:-translate-y-[50px] rotate-x-[90deg]"></div>
                    <div className="tropic m-[14px] w-[72px] h-[72px] lg:w-[172px] lg:h-[172px] transform translate-y-[33px] lg:translate-y-[50px] rotate-x-[90deg]"></div>
                </div>
            </div>
            <div className='w-full lg:w-[45%] text-[var(--accent-color)]'>
                <p style={{ fontFamily: 'var(--body-font)' }} className='border-l-5 border-l-solid p-3 text-justify text-[16px] lg:text-[18px] leading-1.4 mb-[20px] lg:mb-0 lg:text-start'>A little bit about me: I am adaptable, detail-oriented, and always eager to learn. I approach every project with curiosity and a passion for creating meaningful results. Passionate about creating engaging and intuitive web experiences, I strive to make every project meaningful.</p>
            </div>
            <div className='aboutMe-bottom absolute bottom-[3px] italic text-[10px] lg:text-[16px] left-[8px] line-height-[110%] text-[var(--accent-color)] opacity-80'>
                <i className="ri-error-warning-line mr-1 text-[12px] lg:text-[18px]"></i>SYNCING EXPERIENCE...
            </div>
        </div>
    );
}
export default AboutMe;