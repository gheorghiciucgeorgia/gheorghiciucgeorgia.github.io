import './Footer.css';
import { useRef } from 'react';
import { gsap } from 'gsap';

const Footer = () => {
    const iconRefs = useRef<HTMLElement[]>([]);

    const handleMouseEnter = (index: number) => {
        gsap.to(iconRefs.current[index], {
            rotation: 45, duration: 0.5, ease: "power2.out"
        });
    }

    const handleMouseLeave = (index: number) => {
        gsap.to(iconRefs.current[index], { rotation: 0, duration: 0.5, ease: "power2.in" })
    }

    return (
        <>
            <footer className="footer flex flex-col justify-center items-center w-full bg-[var(--secondary-color)] text-[var(--neutral-color)]">
                <div className="flex flex-row justify-around items-center w-full mt-[2%] border-b-[2px] pb-[10px] border-b-[var(--accent-color)]">
                    <div className="footer-links flex flex-col">
                        {["About", "Projects", "Contact"].map((text, i) => (
                            <a
                                key={i}
                                href={`#${text.toLowerCase()}`}
                                className="flex items-center"
                                onMouseEnter={() => handleMouseEnter(i)}
                                onMouseLeave={() => handleMouseLeave(i)}
                            >
                                <i
                                    ref={el => { if (el) iconRefs.current[i] = el; }}
                                    className="cybg-flower-16 cybg mr-[10px] text-[var(--accent-color)]"
                                ></i>
                                {text}
                            </a>
                        ))}
                    </div>
                    <div className="footer-social justify-evenly flex flex-row w-[35%]">
                        <a href="https://github.com/gheorghiciucgeorgia" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github text-[20pt] hover:text-[var(--accent-color)]"></i></a>
                        <a href="https://www.linkedin.com/in/georgia-elena-gheorghiciuc-a1101a187/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin text-[20pt] hover:text-[var(--accent-color)]"></i></a>
                        <a href="mailto:gheorghiciucgeorgia@gmail.com"><i className="fa-solid fa-envelope text-[20pt] hover:text-[var(--accent-color)]"></i></a>
                    </div>
                </div>
                <div className='flex flex-row justify-around items-center w-full'>
                    <div className="w-[80px] h-[60px] bg-[url('/assets/logo/dark-logo-short.svg')] bg-contain bg-no-repeat mt-[2%]"></div>
                    <p className='w-[35%] text-center text-[12px]'>© 2025 Georgia Gheorghiciuc. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
};
export default Footer;