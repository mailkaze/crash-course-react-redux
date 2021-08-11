import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const ShowDataStyled = styled.div`
  border: solid 1px red;
  .my-card {
    background-color:  red;
  }
`

export default function ShowData() {
  const name = useSelector(state => state.name)
  const age = useSelector(state => state.age)


  return (
    <ShowDataStyled>
      <p className="card my-card">nombre {name}</p>
      <p>edad {age}</p>
    </ShowDataStyled>
  )
}
