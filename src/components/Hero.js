import Link from 'next/link'
import styled from 'styled-components'
import ButtonStyles from './styles/Button'

export default function Hero() {
  const HeroStyles = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 60% auto;
    grid-gap: 4rem;

    .hero-copy img {
      display: none;
    }

    img {
      grid-column: 2;
      max-width: 80%;
      margin: auto;
      transform: translateY(-2rem);
    }

    @media (max-width: 656px) {
      margin-top: 0;
      grid-template-columns: 1fr;
      .hero-copy {
        display: grid;
        grid-column: span 2;
        grid-gap: 0;

        h1 {
          grid-row: 1 / span 1;
          grid-column: span 2;
          margin-bottom: 0;
        }

        img {
          display: block;
          grid-row: 2 / span 1;
          grid-column: 2;
          transform: translateY(0);
        }

        button {
          grid-row: 2 / span 1;
          grid-column: 1;
          align-self: center;
          justify-self: start;
        }
      }

      img {
        display: none;
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
        <img src="profile.png" alt="Hi there, it's Omar" />
      </div>
      <img src="profile.png" alt="Hi there, it's Omar" />
    </HeroStyles>
  )
}
