import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github, demo } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[220px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-fit roundex-2xl"
          />
          <div className="absolute inset-0 flex justify-between m-3 card-img_hover">
            <div
              className="black-gradient w-10 h-10 flex justify-center items-center cursor-pointer"
              onClick={() => window.open(live_demo_link, '_blank')}
            >
              <img
                src={demo}
                alt="demo"
                className="w-8 h-9 object-contain"
              />
            </div>
            <div
              className="black-gradient w-10 h-10 flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, '_blank')}
            >
              <img
                src={github}
                alt="github"
                className="w-8 h-8 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <p key={i} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variant={textVariant()}>
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through examples
          of my work. Each project is described with links to code repositories
          and live demos in it. It reflects my ability to solve problems, work
          with different technologies, and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, i) => (
          <ProjectCard key={i} index={i} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')
