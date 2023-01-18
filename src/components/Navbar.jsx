import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
      height: 60px;
      background-color: blue;

`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content:space-between;
`
const left = styled.div`
width: 33.3%`;
const center = styled.div`
width: 33.3%`;
const right = styled.div`
width: 33.3%`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <left>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim natus inventore quam dolore, impedit a odio facere illo ipsam explicabo quidem alias modi dolores nesciunt ratione mollitia nulla blanditiis aperiam.</left>
        <center>center</center>
        <right>right</right>
      </Wrapper>
    </Container>
  )
}

export default Navbar