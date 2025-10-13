import { ArrowDownward, ArrowForward } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Explore({ open, setopen }) {
  const [animate, setanimate] = useState(true);

  return (
    <AnimatePresence>
      {open && animate && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black/30 z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ y: "-100px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100px", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              endIcon={<ArrowForward />}
              // sx={{ borderRadius: "15px" }}
              onClick={() => {
                setanimate(false);
                setTimeout(() => {
                  setopen(false);
                  setanimate(true);
                }, 400);
              }}
              sx={{
                border: "2px solid #00ffff",
                color: "#00ffff",
                borderRadius: "10px",
                fontWeight: "bold",
                px: 4,
                py: 1,
                fontSize: { md: "1.2rem", sm: "1rem" },

                textShadow: "0 0 2px #00ffff",
                boxShadow: "0 0 10px #00ff9f",
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
              explore
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
