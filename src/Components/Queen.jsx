import { HERO_CONTENT } from "../constants";
import ProfilePic from "../assets/download.png";
import { motion } from "framer-motion";

// Parent container animation
const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // Stagger each child by 0.4 seconds
    },
  },
};

// Child animation
const childVariant = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const Queen = () => {
  return (
    <motion.div
      className="border-b border-neutral-900 pb-4 lg:mb-35"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={childVariant}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Deepika Chindi
            </motion.h1>
            <motion.span
              variants={childVariant}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Software Engineer
            </motion.span>
            <motion.p
              variants={childVariant}
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={ProfilePic}
              alt="profilePic"
              className="rounded-2xl w-[500px] h-[500px]"
            ></motion.img>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Queen;
