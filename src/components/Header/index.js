import {Link} from 'react-router-dom'

import {NavContainer, NavImage} from './styledComponents'

const Header = () => (
  <NavContainer>
    <Link to="/">
      <NavImage
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </NavContainer>
)

export default Header
