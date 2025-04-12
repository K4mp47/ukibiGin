import { useScroll, useTransform } from "framer-motion";
import { motion, useMotionTemplate } from "framer-motion";

const SECTION_HEIGHT = 1500;

function ScrollHero() {
  const { scrollY } = useScroll();

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 1],
    [1, 0]
  );

  const showArrow = useTransform(
    scrollY,
    [0, 100],
    [1, 0]
  );

  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 130vh)`}}
      className='w-full'
    >
      <motion.div 
        className='fixed w-screen h-screen flex items-center justify-center text-[10rem]'
        style={{opacity}}
      >
        <img src="/ginlogo.png" alt="Gin Logo" className="invert" />
        <motion.div
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
          initial={{ opacity: 1 }}
          style={{ opacity: showArrow }}
          animate={{ y: showArrow ? 0 : "-100%" }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
        
      </motion.div>
      <CenterImage />
    </div>
  )
}

const CenterImage = () => {
  const { scrollY } = useScroll();

  // Adjust clip path values for better mobile viewing
  const clip1 = useTransform(scrollY, [0, 1500], [50, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [50, 100]);
  
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 600],
    ["120%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT + 200, SECTION_HEIGHT + 600],
    [1, 0]
  );
  
  return (
    <motion.div
      className="sticky top-0 z-20 h-screen w-full flex"
      style={{
        clipPath,
        backgroundSize: scrollY.get() > SECTION_HEIGHT - 200 ? `${backgroundSize}` : "cover",
        opacity,
        backgroundPosition: "center",
        backgroundColor: "var(--primary)",
        backgroundImage: `url(${"/hero10.jpg"})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-end justify-start h-full w-full orbitron pb-2 pl-2 md:pl-10 md:pb-8 text-[2rem] md:text-[10rem] text-white">
        New <b className="text-[#FF0049]">&nbsp;Flavour</b>, new Style
      </div>
    </motion.div>
  )
}

export default ScrollHero;