import React from 'react'
import Top from './Top'
import Menu from './Menu'
import Team from './Team'
import styled from 'styled-components'
import Notice from './Notice'

export default function Main() {
  return (
    <div className='main'>
        <Top />
        <Menu />
        <Team  />  
        <Notice /> 
    </div>
  )
}

