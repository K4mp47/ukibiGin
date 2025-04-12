import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import cards from "../cards.json";

export default function ImageModal({
  selectedImage,
  setSelectedImage,
  selectedCardId,
}: {
  selectedImage: string;
  selectedCardId: number;
  setSelectedImage: (url: string | null) => void;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Disable scrolling on the body when modal opens
    document.body.style.overflow = "hidden";

    // Check if the device is mobile
    const checkMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      );
    };

    // Check on mount
    checkMobile();

    // Add resize listener to recheck
    window.addEventListener("resize", checkMobile);

    // Cleanup: re-enable scrolling and remove listener
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleDesktopScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    // Only allow scrolling on desktop
    if (!isMobile) {
      e.stopPropagation();
    }
  };

  const handleMobileTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    // Prevent modal close on mobile touch scroll
    if (isMobile) {
      e.stopPropagation();
    }
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={handleClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative w-[90vw] lg:max-w-2/3 h-[90vh] max-h-[800px] flex flex-col bg-[var(--primary)] rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Header (Fixed) */}
        <div className="relative h-[40vh] min-h-[300px] max-h-[400px] flex-shrink-0">
          <img
            src={selectedImage}
            alt="Selected"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Scrollable Content Area */}
        <motion.div
          onWheel={handleDesktopScroll}
          onTouchMove={handleMobileTouch}
          className={`flex-1 overflow-y-auto p-6 text-white 
            ${
              isMobile
                ? "touch-pan-y"
                : "scrollbar-thumb-white/30 scrollbar-track-white/10 scroll-smooth"
            }`}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h2 className="text-4xl font-black mb-4">
            {cards.find((card) => card.id === selectedCardId)?.title}
          </h2>
          <p className="mb-4 pl-5 font-bold text-lg text-left">Ingredienti</p>

          <ul className=" pl-5 space-y-2 mb-6 text-left">
            {/* {Array.from({ length: 8 }).map((_, i) => (
              <li key={`ingredient-${i}`}>Botanical ingredient {i + 1}</li>
            ))} */}
            {cards
              .find((card) => card.id === selectedCardId)
              ?.ingredients.map((ingredient, i) => (
                <li key={`ingredient-${i}`}>{ingredient}</li>
              ))}
          </ul>
          <h3 className="text-3xl font-black mb-3">Descrizione</h3>
          <p className="p-8 text-left">
            {cards.find((card) => card.id === selectedCardId)?.description}
          </p>
        </motion.div>
        {/* Close Button (Fixed Position) */}
        <button
          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-md transition-all z-10"
          onClick={handleClose}
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}
