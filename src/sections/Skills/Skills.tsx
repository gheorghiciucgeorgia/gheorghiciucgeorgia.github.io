import './Skills.css';

const Skills = () => {
    const colorFrame = "var(--accent-color)";
    const pathFrame = () => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 100"
                className="w-full h-auto"
            >
                <path fill="none" stroke={colorFrame} strokeWidth={11} strokeMiterlimit={10} d="M0 100.6C83.3 66.9 166.7 33.1 250-.6" />
                <path fill="none" stroke={colorFrame} strokeWidth={11} strokeMiterlimit={10} d="M500 100.6C416.7 66.9 333.3 33.1 250-.6" />
            </svg>
        );
    }
    return (
        <div className="scroll-container w-full h-auto bg-[var(--primary-color)] py-5 overflow-x-auto overflow-y-hidden">
            <div className="w-full h-auto flex flex-row items-center min-w-[max-content]">
                {[...Array(10)].map((_, i) => (
                    <div className="flex-shrink-0" key={i}>{pathFrame()}</div>
                ))}
            </div>

        </div>
    );
}
export default Skills;