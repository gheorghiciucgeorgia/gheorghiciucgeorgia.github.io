import { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import './Hero.css';

gsap.registerPlugin(useGSAP);

const Hero = () => {
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
      gsap.to(line, { strokeDashoffset: 0, duration: 0.8, delay: 1.5 });
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
        { strokeDashoffset: 0, duration: 0.8, delay: 2.2 }
      );
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
      gsap.to(line, { strokeDashoffset: 0, duration: 0.9, delay: 1 });
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
        { strokeDashoffset: 0, duration: 0.9, delay: 1 }
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
      gsap.to(line, { strokeDashoffset: 0, duration: 0.8, delay: 2.2 });
    });

    const horizontalPathsRight2 = svgRef2.current.querySelectorAll('.horizontal-line-right');
    horizontalPathsRight2.forEach(path => {
      const length = (path as SVGPathElement).getTotalLength();
      path.setAttribute('stroke-dasharray', length.toString());
      path.setAttribute('stroke-dashoffset', length.toString());
      gsap.to(path, { strokeDashoffset: 0, duration: 0.8, delay: 1.5 });
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
      gsap.to(line, { strokeDashoffset: 0, duration: 0.9, delay: 1 });
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
        { strokeDashoffset: 0, duration: 0.9, delay: 1 }
      );
    });

    // ANIMATION FOR THE NAME iN THE MIDDLE
    gsap.fromTo(glitchNameRef.current, { scale: 0 }, {
      scale: 1, delay: 2.2, duration: 1, ease: "power2.out", onComplete: () => {
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

  const renderFrame = () => {
    return (
      <svg
        ref={svgRef}
        id="Layer_2_00000174584782125848767320000012045513605021553799_"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 222 450"
        className='w-1/2 h-auto rotate-90 border-l-2 border-l-[var(--secondary-color)] lg:w-auto lg:rotate-0 lg:border-none'
      >
        <style type="text/css">
          {
            "\n\t.st0{fill:none;stroke:" + colorFrame + ";stroke-width:2;stroke-miterlimit:10;}\n"
          }
        </style>
        <line className="st0 vertical-line-right" x1={221} y2={500} x2={221} y1={-0.1} />
        <line className="st0 vertical-line-right" x1={197} y2={500} x2={197} y1={-0.9} />
        <line className="st0 vertical-line-right" x1={172.7} y2={500} x2={172.7} y1={0} />
        <line className="st0 vertical-line-right" x1={148.4} y2={500} x2={148.4} y1={0} />
        <line className="st0 vertical-line-right" x1={124.2} y2={500.5} x2={124.2} y1={0.5} />

        <line className="st0 vertical-line-left" x1={110.4} y2={500} x2={110.4} y1={0.3} />
        <line className="st0 vertical-line-left" x1={95.1} y2={500} x2={95.1} y1={-0.9} />
        <line className="st0 vertical-line-left" x1={61.1} y2={500} x2={61.1} y1={-0.1} />
        <line className="st0 vertical-line-left" x1={78.1} y2={500} x2={78.1} y1={-0.1} />
        <line className="st0 vertical-line-left" x1={41.3} y2={501.1} x2={41.3} y1={-0.9} />
        <line className="st0 vertical-line-left" x1={19.2} y2={501.1} x2={19.2} y1={0} />

        <line className="st0 horizontal-line-right " x2={221} y1={47.7} x1={124.2} y2={47.7} />
        <line className="st0 horizontal-line-right" x2={221} y1={93} x1={124.3} y2={92.9} />
        <line className="st0 horizontal-line-right" x2={221} y1={138.5} x1={124.3} y2={138.3} />
        <line className="st0 horizontal-line-right" x2={220.1} y1={183.8} x1={123.3} y2={183.6} />
        <line className="st0 horizontal-line-right" x2={221.1} y1={229.2} x1={124.3} y2={229.1} />
        <line className="st0 horizontal-line-right" x2={220} y1={274.5} x1={123.2} y2={274.4} />
        <line className="st0 horizontal-line-right" x2={219.9} y1={319.9} x1={123.2} y2={319.7} />
        <line className="st0 horizontal-line-right" x2={221} y1={365.2} x1={124.3} y2={365} />
        <line className="st0 horizontal-line-right" x2={220.1} y1={410.6} x1={123.3} y2={410.4} />
        <line className="st0 horizontal-line-right" x2={220.9} y1={455.9} x1={124.2} y2={455.7} />
        <line className="st0 horizontal-line-right" x2={221.1} y1={320.4} x1={124.3} y2={320.3} />

        <line className="st0 horizontal-line-left" x1={53.6} y1={501.1} x2={124.2} y2={455.7} />
        <line className="st0 horizontal-line-left" x1={-1.3} y1={473.9} x2={123.3} y2={411.4} />
        <line className="st0 horizontal-line-left" x1={-1.8} y1={409.6} x2={124.3} y2={365} />
        <line className="st0 horizontal-line-left" x1={-1.9} y1={346.1} x2={123.2} y2={319.7} />
        <line className="st0 horizontal-line-left" x1={-0.2} y1={284.4} x2={123.2} y2={274.4} />
        <line className="st0 horizontal-line-left" x1={-0.2} y1={220} x2={124.3} y2={229.1} />
        <line className="st0 horizontal-line-left" x1={-2.7} y1={156} x2={123.3} y2={183.6} />
        <line className="st0 horizontal-line-left" x1={-3.3} y1={92.7} x2={124.3} y2={138.3} />
        <line className="st0 horizontal-line-left" x1={-2.9} y1={28.3} x2={124.3} y2={92.9} />
        <line className="st0 horizontal-line-left" x1={47.5} y1={-2} x2={124.2} y2={47.7} />
      </svg>
    );
  }

  const renderFrame2 = () => {
    return (
      <svg
        ref={svgRef2}
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 222 450"
        className='w-1/2 h-auto lg:w-auto rotate-90 lg:rotate-0'
      >
        <style type="text/css">
          {
            "\n\t.st0{fill:none;stroke:" + colorFrame + ";stroke-width:2;stroke-miterlimit:10;}\n"
          }
        </style>
        <line className="st0 vertical-line-left" x1={24.8} y1={-0.9} x2={24.8} y2={500} />
        <line className="st0 vertical-line-left" x1={49.1} y1={0} x2={49.1} y2={500} />
        <line className="st0 vertical-line-left" x1={73.4} y1={0} x2={73.4} y2={500} />
        <line className="st0 vertical-line-left" x1={97.6} y1={0.5} x2={97.6} y2={500.5} />
        <line className="st0 vertical-line-left" x1={0.8} y1={-0.1} x2={0.8} y2={500} />

        <line className="st0 vertical-line-right" x1={111.4} y1={0.3} x2={111.4} y2={500} />
        <line className="st0 vertical-line-right" x1={126.7} y1={-0.9} x2={126.7} y2={500} />
        <line className="st0 vertical-line-right" x1={160.7} y1={-0.1} x2={160.7} y2={500} />
        <line className="st0 vertical-line-right" x1={143.7} y1={-0.1} x2={143.7} y2={500} />
        <line className="st0 vertical-line-right" x1={180.5} y1={-0.9} x2={180.5} y2={501.1} />
        <line className="st0 vertical-line-right" x1={202.6} y1={0} x2={202.6} y2={501.1} />

        <line className="st0 horizontal-line-left" x1={97.6} y1={47.7} x2={0.8} y2={47.7} />
        <line className="st0 horizontal-line-left" x1={97.5} y1={92.9} x2={0.8} y2={93} />
        <line className="st0 horizontal-line-left" x1={97.5} y1={138.3} x2={0.8} y2={138.5} />
        <line className="st0 horizontal-line-left" x1={98.5} y1={183.6} x2={1.7} y2={183.8} />
        <line className="st0 horizontal-line-left" x1={97.5} y1={229.1} x2={0.7} y2={229.2} />
        <line className="st0 horizontal-line-left" x1={98.6} y1={274.4} x2={1.8} y2={274.5} />
        <line className="st0 horizontal-line-left" x1={98.6} y1={319.7} x2={1.9} y2={319.9} />
        <line className="st0 horizontal-line-left" x1={97.5} y1={365} x2={0.8} y2={365.2} />
        <line className="st0 horizontal-line-left" x1={98.5} y1={410.4} x2={1.7} y2={410.6} />
        <line className="st0 horizontal-line-left" x1={97.6} y1={455.7} x2={0.9} y2={455.9} />
        <line className="st0 horizontal-line-left" x1={97.5} y1={320.3} x2={0.7} y2={320.4} />

        <path className="st0 horizontal-line-right" d="M168.2 501.1 L97.6 455.7" />
        <path className="st0 horizontal-line-right" d="M223.1 473.9 L98.5 411.4" />
        <path className="st0 horizontal-line-right" d="M223.6 409.6 L97.5 365" />
        <path className="st0 horizontal-line-right" d="M223.7 346.1 L98.6 319.7" />
        <path className="st0 horizontal-line-right" d="M222 284.4 L98.6 274.4" />
        <path className="st0 horizontal-line-right" d="M222 220 L97.5 229.1" />
        <path className="st0 horizontal-line-right" d="M224.5 156 L98.5 183.6" />
        <path className="st0 horizontal-line-right" d="M225.1 92.7 L97.5 138.3" />
        <path className="st0 horizontal-line-right" d="M224.7 28.3 L97.5 92.9" />
        <path className="st0 horizontal-line-right" d="M174.3 -2 L97.6 47.7" />
      </svg >
    );
  }
  return (
    <div className='w-full h-auto bg-[var(--primary-color)]'>
      <div className='header h-auto overflow-hidden relative'>
        <div ref={beadRef} className="w-[100px] h-[100px] top-[38%] right-[20%] md:w-[200px] md:h-[200px] lg:w-[150px] lg:h-[200px] lg:top-[8%] lg:right-[30%] xl:w-[250px] xl:h-[250px] 2xl:w-[450px] 2xl:h-[450px] 2xl:top-[10%] 2xl:right-[30%] bg-[url('/assets/background/bead.svg')] bg-contain bg-no-repeat absolute">
        </div>
        <div ref={tunnelRef} className="w-[100px] h-[100px] top-[60%] right-[60%] md:w-[200px] md:h-[200px] lg:w-[150px] lg:h-[150px] lg:top-[63%] lg:right-[60%] xl:w-[250px] xl:h-[250px] xl:top-[60%] xl:right-[50%] 2xl:w-[450px] 2xl:h-[450px] bg-[url('/assets/background/tunnel_void_retro.svg')] bg-contain bg-no-repeat absolute">
        </div>
        <div className='flex flex-col justify-center -mb-30 md:-mb-50 md:-mt-20 lg:mb-0 lg:mt-0 lg:justify-between lg:flex-row items-center h-auto lg:gap-18'>
          {renderFrame()}
          <div className='glitch-name paused font-medium flex flex-col text-center' ref={glitchNameRef}>
            <h2 className="hero glitch layers" data-text="GHEORGHICIUC"><span className="select-none cursor-default">GHEORGHICIUC</span></h2>
            <h2 className="hero glitch layers" data-text="GEORGIA"><span className="select-none cursor-default">GEORGIA</span></h2>
            <p className='hero glitch layers text-custom' data-text="Front-end Developer"><span className="select-none cursor-default">Front-end Developer</span></p>
            <p className='hero tagline' data-text="Crafting interfaces from the neon grid"><span className="select-none cursor-default">Crafting interfaces from the neon grid</span></p>
          </div>
          {renderFrame2()}
        </div>
      </div>
    </div>
  );
};

export default Hero;
