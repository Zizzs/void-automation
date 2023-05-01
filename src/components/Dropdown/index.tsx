import { ReactNode } from "react";
import ChevronDown from "../Icons/chevron-down";
import { motion } from "framer-motion";
import "./styles.scss";

interface DropDownProps {
  header?: string;
  children: ReactNode[];
  isOpen?: boolean;
  onClick?: () => void;
}

const chevronVariants = {
  initial: {
    rotate: "0deg",
  },

  animate: {
    rotate: "180deg",
  },
};

const childrenVariants = {
  initial: {
    y: "-2rem",
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.35,
    },
  },

  animate: {
    y: "0rem",
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.35,
    },
  },
};

const Dropdown = ({
  header = "Default",
  isOpen = false,
  onClick,
  children,
}: DropDownProps) => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-1 place-content-between">
        <p className={`void-dropdown-header`}>{header}</p>
        <button onClick={onClick}>
          <motion.div
            animate={isOpen ? "animate" : "initial"}
            variants={chevronVariants}
          >
            <ChevronDown className="void-white w-6 h-6" />
          </motion.div>
        </button>
      </div>
      <motion.div
        variants={childrenVariants}
        animate={isOpen ? "animate" : "initial"}
      >
        {isOpen && <div>{children}</div>}
      </motion.div>
    </div>
  );
};

export default Dropdown;
