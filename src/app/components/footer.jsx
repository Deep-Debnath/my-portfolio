"use client";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import { buttons } from "../../../public/files";
import { motion } from "framer-motion";
const parent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};
const child = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  const isXs = useMediaQuery("(max-width: 640px)"); // Tailwind 'sm' breakpoint

  return (
    <footer className="flex flex-col items-center absolute bottom-3 w-full px-2 text-gray-300">
      <motion.div
        variants={parent}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center gap-3 mb-2"
      >
        {buttons.map(({ icon, label, link, hoverBg }) => (
          <motion.div variants={child} key={label}>
            <Button
              href={link}
              target="_blank"
              variant="outlined"
              sx={{
                display: { xs: "flex" },
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 0.4, md: 1 },
                color: "#e0e0e0",
                borderColor: "rgba(255,255,255,0.2)",
                textTransform: "none",

                transition: "all 0.3s ease",
                "&:hover": {
                  background: hoverBg,
                  color: "#fff",
                  borderColor: "transparent",
                  transform: "scale(1.05)",
                },
              }}
            >
              {icon}
              {isXs ? (
                <p className="text-[10px] text-gray-300 ">{label}</p>
              ) : (
                <p className="text-[10px] md:text-lg text-gray-300 ">{label}</p>
              )}
            </Button>
          </motion.div>
        ))}
      </motion.div>
      <motion.p
        variants={child}
        initial="hidden"
        animate="visible"
        className="text-sm text-gray-400 text-center"
      >
        © by Deep Debnath
      </motion.p>
    </footer>
  );
}
