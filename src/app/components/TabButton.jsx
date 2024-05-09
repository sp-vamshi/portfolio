import { motion } from "framer-motion";

const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
  };

export default function TabButton({active, selectTab, children}) {
  const buttonClasses = active?"text-white":"text-[#ADB7BE]"

    return (
      <button className="" onClick={selectTab} >
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
            {children}
        </p>
        <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-1 mr-2"
      ></motion.div>
      </button>
  );
}