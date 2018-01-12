import React from 'react'
import styled from 'styled-components'
import logo from './logo.png'

const Container = styled.div`
  text-align: center;
`

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const Image = styled.img`
  height: 80px;
`

const Title = styled.h1`
  font-size: 1.5em;
`

const Text = styled.p`
  font-size: large;
`

const App = () => (
  <Container>
    <Header>
      <Image src={logo} alt="Easynvest" />
      <Title>Welcome to <%= name%></Title>
    </Header>
    <Text>To get started, edit <code>src/index.js</code> and save to reload.</Text>
  </Container>
)

export default App
