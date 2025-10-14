import { ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";
import { motion, scale } from "framer-motion";
import Link from "next/link";

const parent = {
  hidden: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1,
    },
  },
};
const child = {
  hidden: { y: -40, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

export const buttons = ["About", "Projects", "Resume", "Contact"];
export default function Buttons() {
  return (
    <motion.div
      variants={parent}
      initial="hidden"
      animate="animate"
      className="relative sm:top-[40%] md:top-[50%] translate-y-[-50%] left-[10%] top-[38%] "
    >
      {buttons.map((item, index) => (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="my-2 sm:my-3 md:my-4 w-min"
          variants={child}
          key={index}
        >
          {
            <Button
              endIcon={<ArrowForward />}
              component={Link}
              href={`/${item}/${index}`}
              sx={{
                border: "2px solid #00ffff",
                color: "#00ffff",
                borderRadius: "10px",
                fontWeight: "bold",
                px: 4,
                py: 1,
                fontSize: { md: "1.4rem", sm: "1.3rem", xs: "1.2rem" },

                // textShadow: "0 0 2px #00ffff",
                boxShadow: "0 0 8px #00ff9f",
                backgroundColor: "rgba(0,0,0,0.4)",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow:
                    "0 0 25px #00ffff, 0 0 12px #00ff0f, 0 0 3px #00ff0f",
                },
                "&:hover .MuiButton-endIcon": {
                  transform: "translateX(5px)",
                },
              }}
            >
              {item}
            </Button>
          }
        </motion.div>
      ))}
    </motion.div>
  );
}
