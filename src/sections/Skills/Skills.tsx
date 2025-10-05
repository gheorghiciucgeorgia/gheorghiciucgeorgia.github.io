import SkillCard from '../../components/Card/SkillCard';
import './Skills.css';

const Skills = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-auto bg-[var(--primary-color)] py-5 border-t-2 border-t-[var(--accent-color)] border-b-2 border-b-[var(--accent-color)]">
            <div className='w-full h-auto flex flex-col justify-between gap-4'>
                <div className='title-languages'>
                    <h2 className='font-(family-name:--heading-font) text-[var(--accent-color)] text-center text-[24pt] lg:text-[26pt]'>Languages</h2>
                </div>
                <div className='w-full h-auto flex flex-wrap gap-4 justify-evenly items-center border-b-2 border-b-[var(--accent-color)] pb-7'>
                    <SkillCard icon="fa-brands fa-html5" title="HTML5" colorFrame="var(--accent-color)" colorText="var(--secondary-color)" width={180} />
                    <SkillCard icon="fa-brands fa-css3" title="CSS3" colorFrame="var(--accent-color)" colorText="var(--secondary-color)" width={180} />
                    <SkillCard icon="fa-brands fa-js" title="JS (ES6+)" colorFrame="var(--accent-color)" colorText="var(--secondary-color)" width={180} />
                    <SkillCard icon="bi bi-typescript" title="TypeScript" colorFrame="var(--accent-color)" colorText="var(--secondary-color)" width={180} />
                    <SkillCard icon="fa-brands fa-php" title="PHP" colorFrame="var(--accent-color)" colorText="var(--secondary-color)" width={180} />
                </div>
                <div className='title-frameworks-libraries'>
                    <h2 className='font-(family-name:--heading-font) text-[var(--accent-color)] text-center text-[24pt] lg:text-[26pt]'>Frameworks & Libraries</h2>
                </div>
                <div className='w-full h-auto flex flex-wrap gap-4 justify-evenly items-center border-b-2 border-b-[var(--accent-color)] pb-7'>
                    <SkillCard icon="fa-brands fa-react" title="React.js" colorFrame="var(--accent-color)" colorText="var(--secondary-color)" width={180} />
                    <SkillCard icon="fa-brands fa-angular" title="Angular" colorFrame="var(--accent-color)" colorText="var(--secondary-color)" width={180} />
                    <SkillCard icon="bxl bx-jquery" title="jQuery" colorFrame="var(--accent-color)" colorText="var(--secondary-color)" width={180} />
                    <SkillCard icon="bxl  bx-gsap" title="GSAP" colorFrame="var(--accent-color)" colorText="var(--secondary-color)" width={180} />
                </div>
                <div className='title-styling'>
                    <h2 className='font-(family-name:--heading-font) text-[var(--accent-color)] text-center text-[24pt] lg:text-[26pt]'>Styling & UI</h2>
                </div>
                <div className='w-full h-auto flex flex-wrap gap-4 justify-evenly items-center border-b-2 border-b-[var(--accent-color)] pb-7'>
                    <SkillCard icon="fa-brands fa-sass" title="SASS" colorFrame="var(--accent-color)" colorText="var(--secondary-color)" width={180} />
                    <SkillCard icon="ri-tailwind-css-fill" title="Tailwind" colorFrame="var(--accent-color)" colorText="var(--secondary-color)" width={180} />
                    <SkillCard icon="fa-brands fa-bootstrap" title="Bootstrap" colorFrame="var(--accent-color)" colorText="var(--secondary-color)" width={180} />
                    <SkillCard icon="bi bi-filetype-psd" title="Phtoshop" colorFrame="var(--accent-color)" colorText="var(--secondary-color)" width={180} />
                    <SkillCard icon="bxl bx-adobe" title="Illustrator" colorFrame="var(--accent-color)" colorText="var(--secondary-color)" width={180} />
                </div>
                <div className='title-styling'>
                    <h2 className='font-(family-name:--heading-font) text-[var(--accent-color)] text-center text-[24pt] lg:text-[26pt]'>Tools & Workflow</h2>
                </div>
                <div className='w-full h-auto flex flex-wrap gap-4 justify-evenly items-center border-b-2 border-b-[var(--accent-color)] pb-7'>
                    <SkillCard icon="fa-brands fa-git-alt" title="Git" colorFrame="var(--accent-color)" colorText="var(--secondary-color)" width={180} />
                    <SkillCard icon="fa-solid fa-cube" title="Webpack" colorFrame="var(--accent-color)" colorText="var(--secondary-color)" width={180} />
                    <SkillCard icon="bi bi-globe-americas" title="REST API" colorFrame="var(--accent-color)" colorText="var(--secondary-color)" width={180} />
                    <SkillCard icon="bi bi-filetype-json" title="JSON" colorFrame="var(--accent-color)" colorText="var(--secondary-color)" width={180} />
                    <SkillCard icon="bxl  bx-vite-js" title="Vite" colorFrame="var(--accent-color)" colorText="var(--secondary-color)" width={180} />
                </div>
                <div className='title-styling'>
                    <h2 className='font-(family-name:--heading-font) text-[var(--accent-color)] text-center text-[24pt] lg:text-[26pt]'>Content Management System</h2>
                </div>
                <div className='w-full h-auto flex flex-row justify-evenly items-center'>
                    <SkillCard icon="fa-brands fa-drupal" title="Drupal FE" colorFrame="var(--accent-color)" colorText="var(--secondary-color)" width={180} />
                </div>
            </div>
        </div>
    );
}
export default Skills;