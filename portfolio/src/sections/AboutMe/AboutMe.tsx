import './AboutMe.css';
import { useEffect } from 'react';

const AboutMe = () => {
    const slices = 9;
    const angle = 360 / slices;

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

    return (
        <div className='aboutMe-section w-full bg-[var(--secondary-color)] flex flex-row justify-between items-center py-[1vw] px-[7vw] relative' id="About">
            <div className='flex flex-col items-center justify-between h-auto w-[45%]'>
                <div className='flex flex-row items-center w-full justify-between'>
                    <div className='w-[20px] h-[20px]'></div>
                    <i className="cybg-flower-09 cybg text-[30px] text-[var(--accent-color)]"></i>
                </div>
                <div className="wrapper">
                    <div className="sphere">
                        <div className="equator"></div>
                        <div className="tropic cancer"></div>
                        <div className="tropic capricorn"></div>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between w-full'>
                    <i className="cybg-flower-09 cybg text-[30px] text-[var(--accent-color)]"></i>
                    <div className='w-[20px] h-[20px]'></div>
                </div>
            </div>
            <div className='w-[45%] text-[var(--accent-color)]'>
                <p style={{ fontFamily: 'var(--body-font)' }} className='border-l-5 border-l-solid p-3 text-[16px] leading-1.4'>A little bit about me: I am adaptable, detail-oriented, and always eager to learn. I approach every project with curiosity and a passion for creating meaningful results. Passionate about creating engaging and intuitive web experiences, I strive to make every project meaningful.</p>
            </div>

        </div>
    );
}
export default AboutMe;