import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import cards from "../cards.json";

const HorizontalScrollCarousel = ({ setSelectedImage, setSelectedCardId }: { 
  setSelectedImage: (url: string | null) => void ,
  setSelectedCardId: (id: number | null) => void
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Adjust translation based on screen size
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-120%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky bg-white text-black ml-0 lg:ml-[9rem] top-0 flex h-screen items-center overflow-hidden lg:overflow-visible lg:overflow-x-visible">
        <motion.div 
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.50 }} 
          style={{ x }} 
          className="flex gap-[4rem] md:pl-8 lg:pl-12"
        >
          {cards.map((card) => (
            <Card key={card.id} card={card} setSelectedCardId={setSelectedCardId} setSelectedImage={setSelectedImage}  />
          ))}
        </motion.div>
      </div>
    </section>
  );
};


export interface CardProps {
  id: number;
  url: string;
  title: string;
  ingredients: string[];
}

const Card = ({ card, setSelectedImage, setSelectedCardId }: { 
  card: CardProps; 
  setSelectedCardId: (id: number | null) => void; 
  setSelectedImage: (url: string | null) => void }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[400px] w-[400px] sm:h-[400px] sm:w-[400px] md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px] overflow-hidden bg-neutral-200 cursor-pointer"
      onClick={() => {
        setSelectedImage(card.url);
        setSelectedCardId(card.id);
      }}
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/10 to-white/0 p-8 text-2xl md:text-4xl font-bold text-[var(--copy)] uppercase backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;
