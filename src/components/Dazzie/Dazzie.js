import React from 'react'
import { DazzieContainer, DazzieLeft, DazzieRight, ImgCont, DazzieName } from './Dazzie.styled'

export default function Dazzie(props) {
  return (
    <>
        <ImgCont/>
        <DazzieName>{ props.name }</DazzieName>
    </>
  )
}
