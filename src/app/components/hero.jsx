import { motion } from "framer-motion";
import Buttons from "./buttons";
import Footer from "./footer";
import { ArrowForwardIos } from "@mui/icons-material";

const parent = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const child = {
  hidden: { y: -50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

export default function Hero({ open }) {
  return (
    <div className="hero relative sm:h-screen w-full overflow-hidden">
      {!open && (
        <motion.div
          variants={parent}
          initial="hidden"
          animate="show"
          className="absolute sm:top-[10%] top-[5%] left-[10%] text-cyan-100"
        >
          <motion.h1
            variants={child}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            DEEP DEBNATH
          </motion.h1>
          <motion.p
            variants={child}
            className="text-md pl-1 sm:text-lg mt-2 tracking-wide"
          >
            Turning ideas into interactive web interfaces
          </motion.p>
        </motion.div>
      )}
      {!open && <Buttons />}
      {!open && <Footer />}
    </div>
  );
}
