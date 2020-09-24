import React from 'react'
import { LoaderImage } from './Loader.styled'
import loader from '../assets/loader.svg'

const Loader = () => {
  return (
    <LoaderImage src={loader} width={150} />
  )
}

export default Loader