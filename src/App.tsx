import './App.css'
import ReactLenis, { LenisRef } from 'lenis/react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Schedule from './components/Schedule';
import ScrollHero from './components/ScrollHero';
import Footer from './components/Footer';
import ImageModal from './components/Modals';
import ParallaxImages from './components/Parallax';
import HorizontalScrollCarousel from './components/HorizontalScroll';
import Grid from './components/Grid';
import LastPiece from './components/LastPiece';

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const lenisRef = useRef<LenisRef | null>(null);
  
  useEffect(() => {
    if (lenisRef.current?.lenis) {
      if (selectedImage) {
        lenisRef.current.lenis.stop();
      } else {
        lenisRef.current.lenis.start();
      }
    }
  }, [selectedImage]);

  return (
    <div className="relative orbitron">
      <NavBar />
      <ReactLenis root options={{ lerp: 0.05 }} ref={lenisRef}>
        <ScrollHero />
        <Schedule />
        <Block setSelectedImage={setSelectedImage} setSelectedCardId={setSelectedCardId} />
        <Grid />
        <LastPiece />
        <Footer />
      </ReactLenis>
      <AnimatePresence>
        {selectedImage && selectedCardId !== null && (
          <ImageModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} selectedCardId={selectedCardId} />
        )}
      </AnimatePresence>
    </div>
  );
}

const Block = ({ setSelectedImage, setSelectedCardId }: { setSelectedImage: (url: string | null) => void, setSelectedCardId: (id: number | null) => void }) => {
  return (
    <motion.div className="bg-[var(--copy)]">
      <HorizontalScrollCarousel setSelectedImage={setSelectedImage} setSelectedCardId={setSelectedCardId} />
      <ParallaxImages />
      <div className='h-[20vh] w-full flex justify-center'>
        <p className="max-w-3xl mx-[1rem] text-xl md:text-xl text-gray-600 mb-12">
          Il Gin Ukibi è ispirato ai numerosi viaggi fatti dal suo fondatore, 
          i quali l'hanno portato a sperimentare gusti e sapori nuovi che l'hanno aiutato a creare il prodotto finale.
          La parte più complessa della sua formulazione è stato senza dubbio il gusto.
          Il nostro obbiettivo era quello di renderlo il più piacevole e bilanciato possibile.
          Siamo lieti di annunciare che il nostro obbiettivo è stato raggiunto.
        </p>
      </div>
    </motion.div>
  );
};

const NavBar = () => {

  const click = `
  
─▄▀▀▀▀▄─█──█────▄▀▀█─▄▀▀▀▀▄─█▀▀▄
─█────█─█──█────█────█────█─█──█
─█────█─█▀▀█────█─▄▄─█────█─█──█
─▀▄▄▄▄▀─█──█────▀▄▄█─▀▄▄▄▄▀─█▄▄▀

─────────▄██████▀▀▀▀▀▀▄
─────▄█████████▄───────▀▀▄▄
──▄█████████████───────────▀▀▄
▄██████████████─▄▀───▀▄─▀▄▄▄──▀▄
███████████████──▄▀─▀▄▄▄▄▄▄────█
█████████████████▀█──▄█▄▄▄──────█
███████████──█▀█──▀▄─█─█─█───────█
████████████████───▀█─▀██▄▄──────█
█████████████████──▄─▀█▄─────▄───█
█████████████████▀███▀▀─▀▄────█──█
████████████████──────────█──▄▀──█
████████████████▄▀▀▀▀▀▀▄──█──────█
████████████████▀▀▀▀▀▀▀▄──█──────█
▀████████████████▀▀▀▀▀▀──────────█
──███████████████▀▀─────█──────▄▀
──▀█████████████────────█────▄▀
────▀████████████▄───▄▄█▀─▄█▀
──────▀████████████▀▀▀──▄███
──────████████████████████─█
─────████████████████████──█
────████████████████████───█
────██████████████████─────█
────██████████████████─────█
────██████████████████─────█
────██████████████████─────█
────██████████████████▄▄▄▄▄█

─────────────█─────█─█──█─█───█
─────────────█─────█─█──█─▀█─█▀
─────────────█─▄█▄─█─█▀▀█──▀█▀
─────────────██▀─▀██─█──█───█

@K4mp47
  `;

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // If scrolling down more than 50px and previous scroll was less
    if (previous &&latest > 50 && latest > previous) {
      setHidden(true);
    } 
    // If scrolling up
    else if (previous && latest < previous) {
      setHidden(false);
    }
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 md:px-6 md:py-4'
    >
      <button 
        className='flex items-center py-2 lg:px-4 mix-blend-difference backdrop-blur-md font-bold transition-all relative z-10'
        onClick={() => console.log(click)}
      >
        Ukibi Gin
      </button>
    </motion.nav>
  )
}

export default App

