import styled from 'styled-components'
import { Image } from 'react-bootstrap'

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CityState = styled.h3`
  margin: 10px auto;
`

export const StyledImage = styled(Image)`
  display: block;
`

export const HelpText = styled.p`
  margin: 10px auto;
  text-align: center;
`