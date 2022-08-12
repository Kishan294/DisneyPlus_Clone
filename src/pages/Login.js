import React from 'react'
import styled from 'styled-components'
import Bg from '../assets/images/login-background.jpg'
import CtaLogoOne from '../assets/images/cta-logo-one.svg'
import CtaLogoTwo from '../assets/images/cta-logo-two.png'

const Login = () => {
  return (
    <Container>
        <CTA>
          <CTALogoOne src={CtaLogoOne}/>
          <Signup>GET ALL THERE</Signup>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus reiciendis et qui deserunt! Ea, itaque!
          </Description>
          <CTALogoTwo src = {CtaLogoTwo} />
        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
  min-height: calc(100vh - 70px);
  position: relative;
  

  &::before{
    position: absolute;
    content: '';
    background: url(${Bg});
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.7;
  }
`


const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
 
`

const CTALogoOne = styled.img`
  
`

const Signup = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  text-align: center;
  padding: 17px 0px;
  color: #f9f9f9;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover{
    background-color: #0483ee;
  }
`

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`

const CTALogoTwo = styled.img`
  width: 90%;
`
