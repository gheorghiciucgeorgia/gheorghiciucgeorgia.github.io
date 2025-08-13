// import { useGSAP } from "@gsap/react";

type SkillCardProps = {
    icon: string;
    title: string;
    colorFrame?: string;
    colorText?: string;
    className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, colorFrame, colorText, className }) => {
    const renderFrame = () => {
        const c = colorFrame || '#000';

        return (
            <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 300 100"
                xmlSpace="preserve"
            >
                <polygon fill={c} points="20,17.4 21.3,83.3 280,84.3 280.8,17.4 21.5,17.4 " />
                <polygon
                    opacity={0.5} fill="none" stroke={c} strokeWidth={2} strokeMiterlimit={10}
                    points="10.1,9.7 290.2,9.7 289.8,91.1 10.1,91.1 "
                />
                <path fill={c} stroke={c} strokeMiterlimit={10} d="M58.7,10.6" />
                <polygon
                    fill={c} stroke={c} strokeWidth={2} strokeMiterlimit={10}
                    points="57.6,10.5 11.6,10.5 11.6,37 8.8,37 8.8,20.6 6.3,20.6 6.3,7.7 35.2,7.7 35.4,9.1 57.6,9.1 "
                />
                <polygon
                    fill={c} stroke={c} strokeWidth={2} strokeMiterlimit={10}
                    points="242.8,90.6 288.7,90.6 288.7,64.1 291.6,64.1 291.6,80.6 294,80.6 294,93.4 265.2,93.4 264.9,92  242.8,92 "
                />
                <polygon
                    fill={c} stroke={c} strokeWidth={2} strokeMiterlimit={10}
                    points="57.6,90.4 11.6,90.4 11.6,63.9 8.8,63.9 8.8,80.4 6.3,80.4 6.3,93.2 35.2,93.2 35.4,91.8 57.6,91.8 "
                />
                <polygon
                    fill={c} stroke={c} strokeWidth={2} strokeMiterlimit={10}
                    points="242.9,10.2 288.8,10.2 288.8,36.7 291.7,36.7 291.7,20.3 294.1,20.3 294.1,7.5 265.3,7.5 265.1,8.8  242.9,8.8 "
                />
                <rect fill={c} x={62} y={8.1} width={3.3} height={3.4} />
                <rect fill={c} x={67.7} y={8.1} width={3.3} height={3.4} />
                <rect fill={c} x={73.7} y={8.1} width={3.3} height={3.4} />
                <rect fill={c} x={224.4} y={89.6} width={3.3} height={3.4} />
                <rect fill={c} x={230.1} y={89.6} width={3.3} height={3.4} />
                <rect fill={c} x={236.1} y={89.6} width={3.3} height={3.4} />
            </svg>
        )
    };
    return (
        <div className={`relative ${className}`}>
            {renderFrame()}
            <div className="content-card absolute top-0">
                <i className={`fa-brands fa-${icon}`} style={{ color: colorText }}></i>
                <h3 className="title" style={{ color: colorText }}>{title}</h3>
            </div>
        </div>

    );
}
export default SkillCard;