import { motion } from "motion/react";

export default function LastPiece() {
  return (
    <div className="relative w-full flex-col justify-center items-center mt-[80vh] md:mt-[70vh] lg:mt-[60vh] xl:mt-[50vh]">
      <img src="/hero8.jpg" alt="Last Piece" className="w-full h-screen object-cover" />
      <motion.div 
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="flex items-left justify-center px-4 md:px-8 lg:px-10 xl:px-[24rem] mt-[40vh] text-white"
      >
        <h2 className="text-[1.5rem] sm:text-[2rem] font-semibold uppercase md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] w-full">
          Da sempre l'<span className="text-[#FF0049]">obiettivo</span> è di creare qualcosa di <span className="text-[#FF0049]">unico</span>, particolarmente <span className="text-[#FF0049]">buono</span><br className="hidden sm:block"/>
          
        </h2>
      </motion.div>
    </div>
  )

}