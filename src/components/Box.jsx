// import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Box = () => {
  const [ref, inView] = useInView();
  const [isCompView, setCompStatus] = useState(false);

  useEffect(() => {
    if (inView) {
      console.log("view");
      setCompStatus(true);
    } else {
      console.log("not in view");
      setCompStatus(false);
    }
  }, [inView]);

  return (
    <div ref={ref} className="relative">
      <div
        className={`text-4xl w-[300px] h-[300px] rounded-md bg-blue-500 text-white flex justify-center align-middle items-center transition-all ease-in-out ${
          isCompView
            ? "translate-x-0 opacity-100 scale-100"
            : "translate-x-full opacity-0 scale-0"
        }  duration-700`}
      >
        <span>BOX</span>
      </div>
    </div>
  );
};

export default Box;
