import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { BallCanvas } from './canvas'

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const Tech = () => {
  return (
    <>
      <Tooltip id="tech" />
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech, i) => (
          <div
            className="w-28 h-28"
            key={i}
            data-tooltip-id="tech"
            data-tooltip-content={`${tech.name}`}
          >
            <BallCanvas icon={tech.icon} />
            <span className="flex justify-center">{tech.level}</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, '')
