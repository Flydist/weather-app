import styled from 'styled-components'
import { Button } from 'react-bootstrap'

export const ButtonsContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 400px;
  border-right: 1px solid #eaeaea;

  @media screen and (max-width: 767px) {
    border-right: none;
    border-bottom: 1px solid #eaeaea;
  }
`

export const StyledButton = styled(Button)`
  display: block;
  margin: 5px auto;
`

export const HelpText = styled.p`
  margin: 10px auto;
  text-align: center;
`
