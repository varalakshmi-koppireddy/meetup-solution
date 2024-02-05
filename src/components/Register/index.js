import Header from '../Header'

import RegisterContext from '../../context/RegisterContext'

import {
  RegisterContainer,
  Image,
  FormContainer,
  FormHeading,
  LabelInputCon,
  LabelText,
  InputText,
  SelectInput,
  RegisterNowButton,
  ErrorMsg,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        changeName,
        changeTopic,
        showError,
        registerName,
        updateError,
      } = value

      const submitRegistration = event => {
        event.preventDefault()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }

      return (
        <div>
          <Header />
          <div>
            <RegisterContainer>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <FormContainer onSubmit={submitRegistration}>
                <FormHeading>Let us join</FormHeading>
                <LabelInputCon>
                  <LabelText htmlFor="name">NAME</LabelText>
                  <InputText
                    id="name"
                    value={name}
                    type="text"
                    onChange={onChangeName}
                    placeholder="Your name"
                  />
                </LabelInputCon>
                <LabelInputCon>
                  <LabelText htmlFor="topic">Topics</LabelText>
                  <SelectInput
                    id="topic"
                    value={topic}
                    onChange={onChangeTopic}
                  >
                    {topicsList.map(each => (
                      <option value={each.id} key={each.id}>
                        {each.displayText}
                      </option>
                    ))}
                  </SelectInput>
                </LabelInputCon>
                <RegisterNowButton type="submit">
                  Register Now
                </RegisterNowButton>
                {showError === true ? (
                  <ErrorMsg>Please enter your name</ErrorMsg>
                ) : (
                  ''
                )}
              </FormContainer>
            </RegisterContainer>
          </div>
        </div>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
