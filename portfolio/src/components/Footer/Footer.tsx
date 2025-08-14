import './Footer.css';

//TODO: Add the buttons frame from the navbar
// TODO: use the custom icons created by me

const Footer = () => {
    return (
        <>
            <footer className="footer flex flex-col justify-center items-center w-full bg-[var(--secondary-color)] text-[var(--neutral-color)]">
                <div className="flex flex-row justify-around items-center w-full mt-[3%]">
                    <div className="footer-links flex flex-col">
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="footer-social justify-evenly flex flex-row w-[35%]">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github text-[20pt]"></i></a>
                        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin text-[20pt]"></i></a>
                        <a href="mailto:gheorghiciucgeorgia@gmail.com"><i className="fa-solid fa-envelope text-[20pt]"></i></a>
                    </div>
                </div>
                <div className='flex flex-row justify-around items-center w-full'>
                    <div className="w-[80px] h-[60px] bg-[url('/assets/logo/dark-logo-short.svg')] bg-contain bg-no-repeat mt-[2%]"></div>
                    <p>© 2025 Georgia Gheorghiciuc. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
};
export default Footer;