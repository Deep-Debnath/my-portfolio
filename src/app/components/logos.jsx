import { ArrowDownward } from "@mui/icons-material";
import { skillsData } from "../../../public/files";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";
const parent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const child = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};
const h2 = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1 },
  transition: { duration: 0.4 },
};

export default function Logo() {
  return (
    <>
      <div className="absolute lg:top-[10%] right-10 w-fit pr-8 md:top-[20%]">
        <>
          <motion.h3
            variants={h2}
            initial="hidden"
            animate="visible"
            transition="transition"
            className="hidden md:block text-xl lg:text-2xl font-semibold text-cyan-300 mb-4 text-center"
          >
            Skills & Technologies <ArrowDownward />
          </motion.h3>
          <motion.div
            variants={parent}
            initial="hidden"
            animate="visible"
            className="md:grid lg:gap-8 md:gap-2 grid-cols-3 grid-rows-4 justify-items-center hidden "
          >
            {skillsData.map(({ name, Icon, color, info }) => (
              <Tooltip title={info} key={name} placement="top" arrow>
                <motion.div
                  variants={child}
                  className="flex flex-col items-center group cursor-pointer icon "
                >
                  <Icon
                    // size={55}
                    color={color}
                    className=" lg:text-[55px] text-[40px] transition-all icon duration-300 group-hover:scale-125 group-hover:brightness-105 group-hover:drop-shadow-[0_0_25px_#00e5ff] drop-shadow-[0_0_25px_#00B06C]"
                  />
                  <p
                    className={`mt-2 text-sm text-gray-300 group-hover:text-white font-medium`}
                  >
                    {name}
                  </p>
                </motion.div>
              </Tooltip>
            ))}
          </motion.div>
        </>

        <div className="md:hidden fixed bottom-30 left-0 right-0 flex flex-col items-center justify-center">
          <motion.h3
            variants={h2}
            initial="hidden"
            animate="visible"
            transition="transition"
            className="sm:text-xl font-semibold text-cyan-300 mb-1 text-center"
          >
            Skills & Technologies <ArrowDownward />
          </motion.h3>

          <motion.div
            variants={parent}
            initial="hidden"
            animate="visible"
            id="scroll-icons"
            className="flex gap-7 overflow-x-auto no-scrollbar px-4 w-[96%]"
          >
            {skillsData.slice(0, 10).map(({ name, Icon, color, info }) => (
              <Tooltip key={name} title={info} placement="top" arrow>
                <motion.div
                  variants={child}
                  className="flex flex-col items-center justify-center flex-shrink-0 cursor-pointer group"
                >
                  <Icon
                    color={color}
                    // add class drop-shadow-[0_0_25px_#00B06C] for allways glow
                    className="text-[40px] transition-all duration-300 group-hover:brightness-105 group-hover:scale-125 group-hover:drop-shadow-[0_0_25px_#00e5ff] "
                  />
                  <p
                    className={`mt-2 ${
                      name === "Zustand" ? "relative bottom-2.5" : ""
                    } text-sm text-gray-300 group-hover:text-white font-medium`}
                  >
                    {name}
                  </p>
                </motion.div>
              </Tooltip>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
