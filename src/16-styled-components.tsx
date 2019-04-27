import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  display: ${props => props.isVisible ? 'block' : 'none'};
`

type AvatarProps = {
  src: string
  size: number
}

export const Avatar = styled.a`
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: ${props => props.size}rem;
  height: ${props => props.size};
`

const App = () => (
  <Container>
    <Avatar />
  </Container>
)
