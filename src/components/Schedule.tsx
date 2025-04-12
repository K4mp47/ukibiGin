import { motion } from 'framer-motion';

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto w-full px-4 sm:px-6 md:px-8 pt-60 text-white"
    >
      <motion.h1
        initial={{ y: 58, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="text-4xl sm:text-4xl md:text-6xl font-bold uppercase text-zinc-50 max-w-5xl mx-auto"
      >
        Your Personal Gin
      </motion.h1>
    </section>
  );
};


export default Schedule;
