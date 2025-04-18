import { useScroll } from "framer-motion";
import { useRef } from "react";
import { motion, useTransform, useMotionTemplate } from "framer-motion";

const ParallaxImages = () => {
  return (
    <div className="relative mx-auto max-w-5xl pt-[200px]">
      <div className="sticky top-0 h-screen overflow-hidden lg:overflow-visible bg-[var(--copy)]">
        <div className="absolute inset-0 flex items-center text-black font-black justify-center z-50 w-full">
          <div className="text-[3.6rem] md:text-[10rem] lg:text-[8rem] text-center transition-all">
            Gusto eccezionale. Squisitamente artigianale.
          </div>
        </div>
        
        <ParallaxImg
          src="/hero7.jpg"
          alt="Space launch example"
          start={{ x: -40, y: -100 }}
          end={{ x: -40, y: 300 }}
          className="absolute w-1/3 left-[10%] top-[20%]"
        />
        
        <ParallaxImg
          src="/hero2.jpg"
          alt="Space launch example"
          start={{ x: 420, y: 50 }}
          end={{ x: 420, y: -350 }}
          className="absolute w-1/3 right-[15%] top-[40%]"
        />
        
        <ParallaxImg
          src="/fruits4.jpg"
          alt="Orbiting satellite"
          start={{ x: -400, y: 50 }}
          end={{ x: -400, y: -250 }}
          className="absolute w-1/3 left-[20%] bottom-[20%]"
        />
        
        <ParallaxImg
          src="/fruits.jpg"
          alt="Orbiting satellite"
          start={{ x: 20, y: 150 }}
          end={{ x: 20, y: -200 }}
          className="absolute w-7/12 lg:w-5/12 right-[10%] bottom-[30%]"
        />
      </div>
    </div>
  );
};

interface ParallaxImgProps {
  className?: string;
  alt: string;
  src: string;
  start: { x: number; y: number };
  end: { x: number; y: number };
}

const ParallaxImg = ({ className, alt, src, start, end }: ParallaxImgProps) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [start.x, end.x]);
  const y = useTransform(scrollYProgress, [0, 1], [start.y, end.y]);
  
  const opacity = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.3, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.8, 1, 0.8]);

  const transform = useMotionTemplate`translate(${x}px, ${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={`${className}`}
      ref={ref}
      style={{ 
        transform, 
        opacity,
        transformOrigin: 'center center'
      }}
    />
  );
};

export default ParallaxImages;

