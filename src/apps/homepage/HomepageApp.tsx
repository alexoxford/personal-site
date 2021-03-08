import { ReactElement } from 'react'
import './HomepageApp.scss'
import HomepageSidebar from './HomepageSidebar'

function HomepageApp (): ReactElement {
  return (
    <div className='homepage-wrapper'>
      <HomepageSidebar />

      <div className='homepage-content'>
        <p>Placeholder Homepage</p>
      </div>
    </div>
  )
}

export default HomepageApp
