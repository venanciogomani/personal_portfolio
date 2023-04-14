import { motion } from 'framer-motion';

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from '../utils/motion';
import { styles } from '../styles';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} flex flex-row justify-center`}>Go on, play with them! Move them around! You know want to</p>
        <p className="flex flex-row flex-wrap justify-center font-[8px] pink-text-gradient italic">
          "There's a dirty joke here but I won't be the one to make it lol"
        </p>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-8">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "")