import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`

export const Image = styled.img`
  height: 400px;
  width: 400px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const FormHeading = styled.h1`
  color: #334155;
  font-size: 32px;
  font-family: 'Roboto';
`
export const LabelInputCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const LabelText = styled.label`
  color: #7b8794;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-bottom: 5px;
`
export const InputText = styled.input`
  border: 1px solid #cbd5e1;
  width: 350px;
  padding: 15px;
  color: #000000;
  font-family: 'Roboto';
  outline: none;
  margin-bottom: 8px;
`
export const SelectInput = styled.select`
  border: 1px solid #cbd5ef;
  width: 350px;
  padding: 15px;
  color: #000000;
  font-family: 'Roboto';
  outline: none;
  margin-bottom: 8px;
`

export const RegisterNowButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  outline: none;
  border: none;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 6px;
  margin-top: 20px;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 16px;
  font-family: 'Roboto';
`
