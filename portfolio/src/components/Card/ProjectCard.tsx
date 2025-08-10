import './ProjectCard.css'
import Button from '../Button/Button.tsx';
import { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


type ProjectCardProps = {
    title: string;
    description: string;
    imageUrl: string;
    colorTitle?: string;
    colorDescription?: string;
    colorFrame?: string;
    className?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    imageUrl,
    className,
    colorTitle,
    colorDescription,
    colorFrame
}) => {
    const c = colorFrame || '#000';

    gsap.registerPlugin(useGSAP);
    const svgRef = useRef<SVGSVGElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const rectFull = useRef<SVGRectElement>(null);
    const rectStroke = useRef<SVGRectElement>(null);
    const clipRectRef1 = useRef<SVGRectElement>(null);
    const clipRectRef2 = useRef<SVGRectElement>(null);
    const circleRef = useRef<SVGCircleElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        if (!svgRef.current) return;

        const rectangles = svgRef.current.querySelectorAll('.rectangles');
        const cilinder = svgRef.current.querySelectorAll('.cilinder');


        const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });


        // SET
        tl.set(svgRef.current, { x: (_, i) => i * 1 });
        tl.set(rectangles, { x: '-=100' });
        tl.set(cardRef.current, { y: '-20px', opacity: 0 });
        tl.set(rectFull.current, { scale: 0, transformOrigin: "right center" });
        tl.set(rectStroke.current, { scale: 0, transformOrigin: "right center" });
        cilinder.forEach((el, index) => {
            tl.set(el, {
                scale: 0,
                transformOrigin: index < 2 ? "left center" : "right center",
            });
        });
        tl.set([clipRectRef1.current, clipRectRef2.current], { width: 0 });
        tl.set([circleRef.current], { scale: 0, transformOrigin: "center center" });


        // ANIMATIONS
        tl.to(cardRef.current, { y: '0px', opacity: 1, duration: 0.5 }, 0);
        tl.to(rectangles, {
            x: '+=100',
            duration: 3,
            ease: 'linear',
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize(x => parseFloat(x) % 100), // să se repete
            },
        }, 0);
        tl.to([rectFull.current, rectStroke.current, cilinder], { scale: 1, duration: 1, ease: "bounce.inOut" }, 0.5);
        tl.to([clipRectRef1.current, clipRectRef2.current], { width: 82, duration: 1, ease: "power2.out" });
        tl.to(circleRef.current, { scale: 1, duration: 1, ease: "bounce.inOut" }, 1);

        // @ts-expect-error used to that the jQuery type definitions are not aware of mgGlitch
        const $ = window.$;
        if (imgRef.current && $ && $.fn.mgGlitch) {
            $(imgRef.current).addClass('glitch-img').mgGlitch({
                destroy: false,
                glitch: true,
                scale: false,
                blend: false,
                blendModeType: 'hue',
                glitch1TimeMin: 200,
                glitch1TimeMax: 500,
                glitch2TimeMin: 300,
                glitch2TimeMax: 800,
            });
        }
        return () => {
            if (imgRef.current && $ && $.fn.mgGlitch) {
                $(imgRef.current).mgGlitch({ destroy: true });
            }
        }
    });

    const renderFrame = () => {
        return (
            <svg
                ref={svgRef}
                viewBox="0 0 300 500"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                <defs>
                    <clipPath id="clipRect">
                        <rect x="35" y="280" width="170" height="30"></rect>
                    </clipPath>
                    <clipPath id="textRevealClip1">
                        <rect ref={clipRectRef1} x="18.808" y="477.9474" width="82" height="15" />
                    </clipPath>
                    <clipPath id="textRevealClip2">
                        <rect ref={clipRectRef2} x="193.52" y="40.9034" width="82" height="15" />
                    </clipPath>

                </defs>
                <rect ref={rectFull} x="261.8" y="13.5" width="9.4" height="9.4" fill={c} />
                <rect ref={rectStroke} x="260.1" y="11.2" width="12.7" height="13.5" fill="none" stroke={c} strokeMiterlimit={10} />
                <path className="cilinder" d="M16.6,119.8l5.1,3.2c1.5,0.9,2.4,2.5,2.4,4.1v88.8c0,1.3-0.5,2.5-1.4,3.5l-6.1,6.1" fill={c} />
                <path className="cilinder" d="M16.6,116.3l6.9,3.4c1.9,0.9,3.1,2.6,3.1,4.4v94.3c0,1.4-0.7,2.7-1.9,3.6l-8.1,6.5" fill="none" stroke={c} strokeMiterlimit={10} />
                <path className="cilinder" d="M272.9,247.5l-5.1,3.2c-1.5,0.9-2.4,2.5-2.4,4.1v88.8c0,1.3,0.5,2.5,1.4,3.5l6.1,6.1" fill={c} />
                <path className="cilinder" d="M272.8,244.1l-6.9,3.4c-1.9,0.9-3.1,2.6-3.1,4.4v94.3c0,1.4,0.7,2.7,1.9,3.6l8.1,6.5" fill="none" stroke={c} strokeMiterlimit={10} />

                <path
                    d="M65.8,11.2h207v410.1l-51.2,50.9h-205c0-117.5,0-234.9,0-352.5c0-19.3,0-38.6,0-58C33,44.9,49.3,28.1,65.8,11.2z"
                    fill="none"
                    stroke={c}
                    strokeWidth={2}
                    strokeMiterlimit={10}
                />
                <line x1="24.9" y1="478.1" x2="46.5" y2="478.1" stroke={c} strokeWidth={2} strokeMiterlimit={10} />
                <line x1="54.2" y1="478.1" x2="112" y2="478.1" stroke={c} strokeWidth={2} strokeMiterlimit={10} />
                <line x1="279.1" y1="418.1" x2="279.1" y2="396.4" stroke={c} strokeWidth={2} strokeMiterlimit={10} />
                <line x1="279.1" y1="392.2" x2="279.1" y2="370.5" stroke={c} strokeWidth={2} strokeMiterlimit={10} />
                <circle ref={circleRef} cx="262.9" cy="458.9" r="8.4" stroke={c} strokeWidth={8} fill="none" strokeMiterlimit={10} />

                <text clipPath="url(#textRevealClip1)" x="24.808" y="486.9474" fontFamily="var(--heading-font)" fontSize="8.3887px" fill={c}>
                    150.76.13.123
                </text>
                <text clipPath="url(#textRevealClip2)" x="193.52" y="50.9034" fontFamily="var(--heading-font)" fontSize="8.3887px" fill={c}>
                    43.242.254.20
                </text>
                <text
                    transform="matrix(4.489659e-11 -1 1 4.489659e-11 270.6078 240.7021)"
                    fontFamily="var(--heading-font)" fontSize="8.9986px" fill={c}
                >
                    {"/// PROJECTS.MODULE"}
                </text>
                <text
                    transform="matrix(4.489659e-11 -1 1 4.489659e-11 281.4078 240.7021)"
                    fontFamily="var(--heading-font)" fontSize="8.9986px" fill={c}
                >
                    {"loading..."}
                </text>
                <g clipPath="url(#clipRect)">
                    {[...Array(28)].map((_, i) => {
                        const base = i % 14;
                        const offsetX = i < 14 ? 0 : 14 * 11.5;
                        const startX = 10.2 + base * 11.5 + offsetX;
                        const endX = startX + 6.2;
                        const y = 293.4;
                        return (
                            <polygon
                                key={i}
                                points={`${startX},${y} ${endX},${y} ${endX - 10.8},304.2 ${startX - 10.3},304.2`}
                                fill={c}
                                className="rectangles"
                            />
                        );
                    })}
                </g>
            </svg>
        );
    };

    return (
        <div ref={cardRef} className={`relative ${className}`}>
            {renderFrame()}
            <div className='content-card absolute top-[45%] mt-[53px] ml-[43px]'>
                <img ref={imgRef} src={imageUrl} className='absolute top-[-61%]' />
                <h3 style={{ color: colorTitle, fontFamily: 'var(--heading-font)' }} className='text-[20pt] mt-[-8px] ml-[3px]'>{title}</h3>
                <p style={{ color: colorDescription, fontFamily: 'var(--body-font)' }} className='w-[80%] text-[11.5pt] leading-[1.17] mt-[32px] ml-[3px]'>{description}</p>
                <Button className='top-[-114px] left-[-12px]' name="contact-btn" text="View More" colorText='var(--secondary-color)' colorFrame={colorFrame} />"
            </div>
        </div>
    );
};
//TODO: Add animations
export default ProjectCard;
