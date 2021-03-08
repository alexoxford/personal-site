import { ReactElement } from 'react'
import './HomepageApp.scss'
import HomepageSidebar from './HomepageSidebar'

function HomepageApp (): ReactElement {
  return (
    <div className='homepage-wrapper'>
      <HomepageSidebar />

      <div className='homepage-content'>
        <p>Hi, I'm Alex! I'm an engineer of the software and rocket variety, a "cook" (people who've eaten my... experiments may contest this label), queer, trans, and very mentally ill 😵
          <br />
          <br />

          <span style={{ float: 'right' }}><i>&#8220;sex-obssessed and mildly terroristic&#8221;</i></span>
          <br />
          <span style={{ float: 'right' }}>&#8212;Anonymous</span>
        </p>
      </div>
    </div>
  )
}

export default HomepageApp
