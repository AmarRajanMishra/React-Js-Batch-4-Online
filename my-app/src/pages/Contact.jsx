import React from 'react'
import { CompA as Ajay, CompB, CompC, CompD, CompE } from '../components/First'
import Demo from '../components/Demo'

function Contact() {
  let name = 'Rajan'
  return (
    <>
    <Demo data={name} />
    </>
  )
}

export default Contact