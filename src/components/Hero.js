import Link from 'next/link'
import styled from 'styled-components'
import ButtonStyles from './styles/Button'

export default function Hero() {
  const HeroStyles = styled.div`
    margin-bottom: 5rem;
    display: grid;

    img {
      display: none;
    }

    @media (min-width: 768px) {
      grid-template-columns: 60% auto;
      img {
        display: block;
        max-width: 80%;
        margin: auto;
        transform: translateY(-2rem);
      }
    }
  `

  return (
    <HeroStyles className="section right">
      <div className="hero-copy">
        <h1>I create beautiful websites your users will love</h1>
        <Link href="mailto:omar@aguinaga.dev">
          <ButtonStyles>Get in touch</ButtonStyles>
        </Link>
      </div>
      <img src="profile.png" alt="Hi there, it's Omar" />
    </HeroStyles>
  )
}
