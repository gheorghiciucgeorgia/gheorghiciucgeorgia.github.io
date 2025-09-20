import { useRef } from 'react'
import MobileMenu from './MobileMenu.tsx'
import Navbar from './Navbar.tsx'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Header = () => {
  const colorFrame = 'var(--secondary-color)';
  const svgRef = useRef<SVGSVGElement>(null);
  const svgRef2 = useRef<SVGSVGElement>(null);
  const glitchNameRef = useRef<HTMLDivElement>(null);
  const beadRef = useRef<HTMLDivElement>(null);
  const tunnelRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {

    // ANIMATION FOR THE LEFT SVG GRID
    if (!svgRef.current) return;

    const horizontalLinesLeft = svgRef.current.querySelectorAll('.horizontal-line-left');
    horizontalLinesLeft.forEach(line => {
      const x1 = parseFloat((line as SVGLineElement).getAttribute('x1') || '0');
      const x2 = parseFloat((line as SVGLineElement).getAttribute('x2') || '0');
      const y1 = parseFloat((line as SVGLineElement).getAttribute('y1') || '0');
      const y2 = parseFloat((line as SVGLineElement).getAttribute('y2') || '0');
      const length = Math.hypot(x2 - x1, y2 - y1);
      line.setAttribute('stroke-dasharray', length.toString());
      line.setAttribute('stroke-dashoffset', length.toString());
      gsap.to(line, { strokeDashoffset: 0, duration: 1, delay: 1 });
    });
    const verticalLinesLeft = svgRef.current.querySelectorAll('.vertical-line-left');
    verticalLinesLeft.forEach(line => {
      const x1 = parseFloat((line as SVGLineElement).getAttribute('x1') || '0');
      const x2 = parseFloat((line as SVGLineElement).getAttribute('x2') || '0');
      const y1 = parseFloat((line as SVGLineElement).getAttribute('y1') || '0');
      const y2 = parseFloat((line as SVGLineElement).getAttribute('y2') || '0');
      const length = Math.hypot(x2 - x1, y2 - y1);
      line.setAttribute('stroke-dasharray', length.toString());
      line.setAttribute('stroke-dashoffset', length.toString());
      gsap.to(line, { strokeDashoffset: 0, duration: 1, delay: 1 });
    });

    const horizontalLinesRight = svgRef.current.querySelectorAll('.horizontal-line-right');
    horizontalLinesRight.forEach(line => {
      const x1 = parseFloat((line as SVGLineElement).getAttribute('x1') || '0');
      const x2 = parseFloat((line as SVGLineElement).getAttribute('x2') || '0');
      const y1 = parseFloat((line as SVGLineElement).getAttribute('y1') || '0');
      const y2 = parseFloat((line as SVGLineElement).getAttribute('y2') || '0');
      const length = Math.hypot(x2 - x1, y2 - y1);
      line.setAttribute('stroke-dasharray', length.toString());
      line.setAttribute('stroke-dashoffset', '0');
      gsap.fromTo(
        line,
        { strokeDashoffset: length },
        { strokeDashoffset: 0, duration: 1, delay: 2 }
      );
    });
    const verticalLinesRight = svgRef.current.querySelectorAll('.vertical-line-right');
    verticalLinesRight.forEach(line => {
      const x1 = parseFloat((line as SVGLineElement).getAttribute('x1') || '0');
      const x2 = parseFloat((line as SVGLineElement).getAttribute('x2') || '0');
      const y1 = parseFloat((line as SVGLineElement).getAttribute('y1') || '0');
      const y2 = parseFloat((line as SVGLineElement).getAttribute('y2') || '0');
      const length = Math.hypot(x2 - x1, y2 - y1);
      line.setAttribute('stroke-dasharray', length.toString());
      line.setAttribute('stroke-dashoffset', '0');
      gsap.fromTo(
        line,
        { strokeDashoffset: length },
        { strokeDashoffset: 0, duration: 1, delay: 1 }
      );
    });

    // ANIMATION FOR THE RIGHT SVG GRID
    if (!svgRef2.current) return;
    const horizontalLinesLeft2 = svgRef2.current.querySelectorAll('.horizontal-line-left');
    horizontalLinesLeft2.forEach(line => {
      const x1 = parseFloat((line as SVGLineElement).getAttribute('x1') || '0');
      const x2 = parseFloat((line as SVGLineElement).getAttribute('x2') || '0');
      const y1 = parseFloat((line as SVGLineElement).getAttribute('y1') || '0');
      const y2 = parseFloat((line as SVGLineElement).getAttribute('y2') || '0');
      const length = Math.hypot(x2 - x1, y2 - y1);
      line.setAttribute('stroke-dasharray', length.toString());
      line.setAttribute('stroke-dashoffset', length.toString());
      gsap.to(line, { strokeDashoffset: 0, duration: 1, delay: 2 });
    });
    const verticalLinesLeft2 = svgRef2.current.querySelectorAll('.vertical-line-left');
    verticalLinesLeft2.forEach(line => {
      const x1 = parseFloat((line as SVGLineElement).getAttribute('x1') || '0');
      const x2 = parseFloat((line as SVGLineElement).getAttribute('x2') || '0');
      const y1 = parseFloat((line as SVGLineElement).getAttribute('y1') || '0');
      const y2 = parseFloat((line as SVGLineElement).getAttribute('y2') || '0');
      const length = Math.hypot(x2 - x1, y2 - y1);
      line.setAttribute('stroke-dasharray', length.toString());
      line.setAttribute('stroke-dashoffset', length.toString());
      gsap.to(line, { strokeDashoffset: 0, duration: 1, delay: 1 });
    });
    const horizontalPathsRight2 = svgRef2.current.querySelectorAll('.horizontal-line-right');
    horizontalPathsRight2.forEach(path => {
      const length = (path as SVGPathElement).getTotalLength();
      path.setAttribute('stroke-dasharray', length.toString());
      path.setAttribute('stroke-dashoffset', length.toString());
      gsap.to(path, { strokeDashoffset: 0, duration: 1, delay: 1 });
    });
    const verticalLinesRight2 = svgRef2.current.querySelectorAll('.vertical-line-right');
    verticalLinesRight2.forEach(line => {
      const x1 = parseFloat((line as SVGLineElement).getAttribute('x1') || '0');
      const x2 = parseFloat((line as SVGLineElement).getAttribute('x2') || '0');
      const y1 = parseFloat((line as SVGLineElement).getAttribute('y1') || '0');
      const y2 = parseFloat((line as SVGLineElement).getAttribute('y2') || '0');
      const length = Math.hypot(x2 - x1, y2 - y1);
      line.setAttribute('stroke-dasharray', length.toString());
      line.setAttribute('stroke-dashoffset', '0');
      gsap.fromTo(
        line,
        { strokeDashoffset: length },
        { strokeDashoffset: 0, duration: 1, delay: 1 }
      );
    });

    // ANIMATION FOR THE NAME iN THE MIDDLE
    gsap.fromTo(glitchNameRef.current, { scale: 0 }, {
      scale: 1, delay: 2, duration: 1, ease: "power2.out", onComplete: () => {
        // remove the paused class so the existing CSS glitch animations start
        glitchNameRef.current?.classList.remove('paused');
        // fallback: explicitly set play state to running
        if (glitchNameRef.current) {
          glitchNameRef.current.style.animationPlayState = 'running';
        }
      }
    });

    gsap.fromTo(beadRef.current, { scale: 0 }, { scale: 1, delay: 4, duration: 1, ease: "power2.out" });
    gsap.fromTo(tunnelRef.current, { scale: 0 }, { scale: 1, delay: 4, duration: 1, ease: "power2.out" });

  }, []);

  const renderFrame2 = () => {
    return (
      <svg
        ref={svgRef2}
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="132 2 230 500"
        className='sm:h-[400px] lg:h-[880px]'
      >
        <defs>
          <clipPath id="cropPath">
            <rect x={139} y={1.5} width={222} height={497.1} />
          </clipPath>
        </defs>
        <style type="text/css">
          {
            "\n    .st0{clip-path:url(#SVGID_00000177464080929556033840000001837667864315637937_);}\n\t.st1{fill:none;stroke:" + colorFrame + ";stroke-width:2;stroke-miterlimit:10;}\n\t.st2{fill:none;stroke:" + colorFrame + ";stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st3{fill:none;stroke:" + colorFrame + ";stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;}\n  "
          }
        </style>
        <g>
          <g>
            <g>
              <defs>
                <rect id="SVGID_1_" x={139} width={222} height={500} />
              </defs>
              <clipPath id="SVGID_00000142160302739099515810000011842944994810893704_">
                <use
                  xlinkHref="#SVGID_1_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <g
                style={{
                  clipPath:
                    "url(#SVGID_00000142160302739099515810000011842944994810893704_)",
                }}
              >
                <g>
                  <line className="st1 horizontal-line-left" x1={236.6} y1={455.8} x2={-30.3} y2={455.8} />
                  <line className="st1 horizontal-line-left" x1={236.6} y1={410.5} x2={-30.3} y2={410.5} />
                  <line className="st1 horizontal-line-left" x1={236.6} y1={365.1} x2={-30.3} y2={365.1} />
                  <line className="st1 horizontal-line-left" x1={236.6} y1={319.8} x2={-30.3} y2={319.8} />
                  <line className="st1 horizontal-line-left" x1={236.6} y1={274.4} x2={-30.3} y2={274.4} />
                  <line className="st1 horizontal-line-left" x1={236.6} y1={229.1} x2={-30.3} y2={229.1} />
                  <line className="st1 horizontal-line-left" x1={236.6} y1={183.7} x2={-30.3} y2={183.7} />
                  <line className="st1 horizontal-line-left" x1={236.6} y1={138.4} x2={-30.3} y2={138.4} />
                  <line className="st1 horizontal-line-left" x1={236.6} y1={93} x2={-30.3} y2={93} />
                  <line className="st1 horizontal-line-left" x1={236.6} y1={47.7} x2={-30.3} y2={47.7} />

                  <line className="st1 vertical-line-left" x1={-6} y1={2.3} x2={-6} y2={501.2} />
                  <line className="st1 vertical-line-left" x1={18.2} y1={2.3} x2={18.2} y2={501.2} />
                  <line className="st1 vertical-line-left" x1={42.5} y1={2.3} x2={42.5} y2={501.2} />
                  <line className="st1 vertical-line-left" x1={66.8} y1={2.3} x2={66.8} y2={501.2} />
                  <line className="st1 vertical-line-left" x1={91} y1={2.3} x2={91} y2={501.2} />
                  <line className="st1 vertical-line-left" x1={115.3} y1={2.3} x2={115.3} y2={501.2} />
                  <line className="st1 vertical-line-left" x1={139.5} y1={2.3} x2={139.5} y2={501.2} />
                  <line className="st1 vertical-line-left" x1={163.8} y1={2.3} x2={163.8} y2={501.2} />
                  <line className="st1 vertical-line-left" x1={188.1} y1={2.3} x2={188.1} y2={501.2} />
                  <line className="st1 vertical-line-left" x1={212.3} y1={2.3} x2={212.3} y2={501.2} />
                  <line className="st1 vertical-line-left" x1={237} y1={2.3} x2={237} y2={501.2} />
                </g>

                <g>
                  <path className="st1 horizontal-line-right" d="M503.2 629 L236.5 456" />
                  <path className="st1 horizontal-line-right" d="M503.2 545.2 L236.5 410.6" />
                  <path className="st1 horizontal-line-right" d="M503.2 461.3 L236.5 365.2" />
                  <path className="st1 horizontal-line-right" d="M503.2 377.5 L236.5 319.8" />
                  <path className="st1 horizontal-line-right" d="M503.2 293.7 L236.5 274.4" />
                  <path className="st1 horizontal-line-right" d="M503.2 209.8 L236.5 229.1" />
                  <path className="st1 horizontal-line-right" d="M503.2 126 L236.5 183.7" />
                  <path className="st1 horizontal-line-right" d="M503.2 42.2 L236.5 138.3" />
                  <path className="st1 horizontal-line-right" d="M503.2 -41.7 L236.5 92.9" />
                  <path className="st1 horizontal-line-right" d="M503.2 -125.5 L236.5 47.5" />
                  <line className="st1 vertical-line-right" x1={461.7} y1={-176.4} x2={461.7} y2={679.9} />
                  <line className="st1 vertical-line-right" x1={425.6} y1={-147.8} x2={425.6} y2={651.3} />
                  <line className="st1 vertical-line-right" x1={394.1} y1={-122.8} x2={394.1} y2={626.3} />
                  <line className="st1 vertical-line-right" x1={366.3} y1={-100.7} x2={366.3} y2={604.2} />
                  <line className="st1 vertical-line-right" x1={341.6} y1={-81.1} x2={341.6} y2={584.6} />
                  <line className="st1 vertical-line-right" x1={319.5} y1={-63.6} x2={319.5} y2={567.1} />
                  <line className="st1 vertical-line-right" x1={299.6} y1={-47.8} x2={299.6} y2={551.3} />
                  <line className="st1 vertical-line-right" x1={281.5} y1={-33.6} x2={281.5} y2={537.1} />
                  <line className="st1 vertical-line-right" x1={265.2} y1={-20.6} x2={265.2} y2={524.1} />
                  <line className="st1 vertical-line-right" x1={250.2} y1={-8.7} x2={250.2} y2={512.2} />
                  <line className="st1 vertical-line-right" x1={250.2} y1={-8.7} x2={250.2} y2={512.2} />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
  const renderFrame = () => {
    return (
      <svg
        ref={svgRef}
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="138 2 230 500"
        className='sm:h-[400px] lg:h-[880px] relative'
      >
        <style type="text/css">
          {
            "\n    .st0{clip-path:url(#SVGID_00000177464080929556033840000001837667864315637937_);}\n\t.st1{fill:none;stroke:" + colorFrame + ";stroke-width:2;stroke-miterlimit:10;}\n\t.st2{fill:none;stroke:" + colorFrame + ";stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st3{fill:none;stroke:" + colorFrame + ";stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;}\n  "
          }
        </style>
        <g>
          <g>
            <g>
              <defs>
                <rect id="SVGID_1_" x={139} y={0} width={222} height={500} />
              </defs>
              <clipPath id="SVGID_00000095335815526420234590000009184848449787247023_">
                <use
                  xlinkHref="#SVGID_1_"
                  style={{
                    overflow: "visible",
                  }}
                />
              </clipPath>
              <g
                style={{
                  clipPath:
                    "url(#SVGID_00000095335815526420234590000009184848449787247023_)",
                }}
              >
                <g>
                  <line className="st1 horizontal-line-right" x2={530.3} y1={455.8} x1={263.4} y2={455.8} />
                  <line className="st1 horizontal-line-right" x2={530.3} y1={410.5} x1={263.4} y2={410.5} />
                  <line className="st1 horizontal-line-right" x2={530.3} y1={365.1} x1={263.4} y2={365.1} />
                  <line className="st1 horizontal-line-right" x2={530.3} y1={319.8} x1={263.4} y2={319.8} />
                  <line className="st1 horizontal-line-right" x2={530.3} y1={274.4} x1={263.4} y2={274.4} />
                  <line className="st1 horizontal-line-right" x2={530.3} y1={229.1} x1={263.4} y2={229.1} />
                  <line className="st1 horizontal-line-right" x2={530.3} y1={183.7} x1={263.4} y2={183.7} />
                  <line className="st1 horizontal-line-right" x2={530.3} y1={138.4} x1={263.4} y2={138.4} />
                  <line className="st1 horizontal-line-right" x2={530.3} y1={93} x1={263.4} y2={93} />
                  <line className="st1 horizontal-line-right" x2={530.3} y1={47.7} x1={263.4} y2={47.7} />

                  <line className="st1 vertical-line-right" x1={360.5} y2={501.2} x2={360.5} y1={2.3} />
                  <line className="st1 vertical-line-right" x1={336.2} y2={501.2} x2={336.2} y1={2.3} />
                  <line className="st1 vertical-line-right" x1={311.9} y2={501.2} x2={311.9} y1={2.3} />
                  <line className="st1 vertical-line-right" x1={287.7} y2={501.2} x2={287.7} y1={2.3} />
                </g>
                <g>
                  <line className="st1 horizontal-line-left" x1={-3.2} y1={629} x2={263.5} y2={456} />
                  <line className="st1 horizontal-line-left" x1={-3.2} y1={545.2} x2={263.5} y2={410.6} />
                  <line className="st1 horizontal-line-left" x1={-3.2} y1={461.3} x2={263.5} y2={365.2} />
                  <line className="st1 horizontal-line-left" x1={-3.2} y1={377.5} x2={263.5} y2={319.8} />
                  <line className="st1 horizontal-line-left" x1={-3.2} y1={293.7} x2={263.5} y2={274.4} />
                  <line className="st1 horizontal-line-left" x1={-3.2} y1={209.8} x2={263.5} y2={229.1} />
                  <line className="st1 horizontal-line-left" x1={-3.2} y1={126} x2={263.5} y2={183.7} />
                  <line className="st1 horizontal-line-left" x1={-3.2} y1={42.2} x2={263.5} y2={138.3} />
                  <line className="st1 horizontal-line-left" x1={-3.2} y1={-41.7} x2={263.5} y2={92.9} />
                  <line className="st1 horizontal-line-left" x1={-3.2} y1={-125.5} x2={263.5} y2={47.5} />

                  <line className="st1 vertical-line-left" x1={38.3} y2={679.9} x2={38.3} y1={-176.4} />
                  <line className="st1 vertical-line-left" x1={74.4} y2={651.3} x2={74.4} y1={-147.8} />
                  <line className="st1 vertical-line-left" x1={105.9} y2={626.3} x2={105.9} y1={-122.8} />
                  <line className="st1 vertical-line-left" x1={133.7} y2={604.2} x2={133.7} y1={-100.7} />
                  <line className="st1 vertical-line-left" x1={158.4} y2={584.6} x2={158.4} y1={-81.1} />
                  <line className="st1 vertical-line-left" x1={180.5} y2={567.1} x2={180.5} y1={-63.6} />
                  <line className="st1 vertical-line-left" x1={200.4} y2={551.3} x2={200.4} y1={-47.8} />
                  <line className="st1 vertical-line-left" x1={218.5} y2={537.1} x2={218.5} y1={-33.6} />
                  <line className="st1 vertical-line-left" x1={234.8} y2={524.1} x2={234.8} y1={-20.6} />
                  <line className="st1 vertical-line-left" x1={249.8} y2={512.2} x2={249.8} y1={-8.7} />
                  <line className="st1 vertical-line-left" x1={263} y2={512.2} x2={263} y1={-8.7} />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
  return (
    <div className='w-full bg-[var(--primary-color)] after:bg-[linear-gradient(180deg,transparent,var(--primary-color))] sm:after:bottom-[130px] sm:after:h-[50px] lg:after:bottom-[-120px] lg:after:h-[100px] after:absolute after:w-full'>
      <div className='menu'>
        {/* MobileMenu doar pe mobil */}
        <div className="block lg:hidden">
          <MobileMenu />
        </div>

        {/* Navbar doar pe desktop */}
        <div className="hidden lg:block">
          <Navbar />
        </div>
      </div>

      <div className='header h-[760px] overflow-hidden relative'>
        <div ref={beadRef} className="sm:w-[100px] sm:h-[100px] sm:top-[15%] sm:right-[30%] lg:w-[300px] lg:h-[300px] lg:top-[10%] lg:right-[30%] bg-[url('/assets/background/bead.svg')] bg-contain bg-no-repeat absolute">
        </div>
        <div ref={tunnelRef} className="sm:w-[100px] sm:h-[100px] sm:top-[45%] sm:right-[50%] lg:w-[300px] lg:h-[300px] lg:top-[65%] lg:right-[50%] bg-[url('/assets/background/tunnel_void_retro.svg')] bg-contain bg-no-repeat absolute">
        </div>
        <div className='flex justify-between items-center h-auto transform sm:-translate-y-[-20%] lg:-translate-y-31'>
          {renderFrame()}
          <div className='glitch-name paused font-medium flex flex-col text-center' ref={glitchNameRef}>
            <h2 className="hero glitch layers" data-text="GHEORGHICIUC"><span className="select-none cursor-default">GHEORGHICIUC</span></h2>
            <h2 className="hero glitch layers" data-text="GEORGIA"><span className="select-none cursor-default">GEORGIA</span></h2>
            <p className='hero glitch layers text-custom' data-text="Front-end Developer"><span className="select-none cursor-default">Front-end Developer</span></p>
          </div>
          {renderFrame2()}
        </div>
      </div>
    </div>
  )
};
export default Header;