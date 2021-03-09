import { ReactElement } from 'react'
import { Image } from 'react-bootstrap'
import profilePicture from '../../images/pfp.jpg'

function HomepageSidebar (): ReactElement {
  return (
    <div className='homepage-sidebar'>
      <Image src={profilePicture} alt='A picture of Alex leaning against a brick wall' fluid />

      <div className='text-wrapper'>
        <p>
          <span className='stats'>Name: </span>Alex<br />
          <span className='stats'>Pronouns: </span>She/They<br />
          <span className='stats'>Party: </span>Communist<br />
          <span className='stats'>Stamina: </span>⬤◯◯◯◯<br />
          <span className='stats'>Strength: </span>⬤◯◯◯◯<br />
          <span className='stats'>Problem Solving: </span>⬤⬤◯◯◯<br />
          <span className='stats'>Problem Causing: </span>⬤⬤⬤⬤⬤
        </p>
      </div>
    </div>
  )
}

export default HomepageSidebar
