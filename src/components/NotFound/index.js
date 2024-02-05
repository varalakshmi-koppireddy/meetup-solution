import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundText,
  NotFoundDes,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundText>Page Not Found</NotFoundText>
    <NotFoundDes>
      We are sorry, the page you requested could not be found
    </NotFoundDes>
  </NotFoundContainer>
)

export default NotFound
