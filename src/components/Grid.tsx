import { motion } from "motion/react";

export default function Grid() {
  return (
    <section
      id="launch-schedule"
      className="mx-auto w-full mt-20 px-4 sm:px-6 md:px-8 pt-80 text-black"
    >
      <motion.h1
        initial={{ y: 58, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="text-4xl sm:text-4xl md:text-6xl uppercase text-black font-bold max-w-5xl mx-auto"
      >
        Perché Ukibi Gin
      </motion.h1>
      <motion.div
        initial={{ y: 58, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="mt-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        <motion.div 
          className="text-left"
          initial={{ y: 58, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          <img src="/hero6.jpg" alt="Image 1" className="mx-auto mb-8 object-cover" />
          <h2 className="text-4xl font-semibold">Aroma</h2>
          <p className="text-xl mt-8 text-gray-600">
            Ukibi Gin rappresenta il connubio perfetto nella maestria del Gin Giapponese unito magiche botaniche Italiane. 
            Il suo equilibrio perfetto testimonia l'abilità e la sapienza artigianale del nostro laboratorio, che impiega 
            tecniche di distillazione tradizionali e moderne per la creazione per la creazione di un'opera d'arte.
          </p>
        </motion.div>
        <motion.div 
          className="text-left"
          initial={{ y: 58, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          <img src="/hero5.jpg" alt="Image 2" className="mx-auto mb-8 object-cover" />
          <h2 className="text-4xl font-semibold">Gusto</h2>
          <p className="text-xl mt-8 text-gray-600">
            Al palato, offre un gusto complesso ma armonioso, si assaporano i diversi fiori: 
            con la loro croccantezza e freschezza.<br/>
            Il suo profumo, invece, è ricco di aromi floreali che conferiscono al naso un profumo particolarmente dolce

          </p>
        </motion.div>
        <motion.div 
          className="text-left"
          initial={{ y: 58, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          <img src="/hero7.jpg" alt="Image 3" className="mx-auto mb-8 object-cover" />
          <h2 className="text-4xl font-semibold">Sapore</h2>
          <p className="text-xl mt-8 text-gray-600">
            Grazie alle sapienti mani dei nostri botanici, siamo riusciti a coniugare
            le erbe italiane con quelle giapponesi, in aggiunta alla profumatassima miscela 
            di tè dell'Himalaya, per comporre la sinfonia perfetta per il palato.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}