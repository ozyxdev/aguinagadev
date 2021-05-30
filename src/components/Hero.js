import styled from 'styled-components'
import ButtonStyles from './styles/Button'

export default function Hero() {
  const HeroStyles = styled.div`
    display: grid;
    grid-template-columns: 60% auto;
    grid-gap: 4rem;

    .hero-copy img {
      display: none;
    }

    h1 {
      font-size: 3.5rem;
      color: var(--dark);
      line-height: 110%;
      font-weight: 600;
      position: relative;

      ::before {
        content: url('sparkle.svg');
        position: absolute;
        top: -2.5rem;
        left: -3rem;
        transform: rotate(5deg) scale(1.3);
      }

      @media (max-width: 992px) {
        font-size: 2.5rem;
      }
    }

    img {
      grid-column: 2;
      max-width: 80%;
      margin: auto;
      transform: translateY(-2rem);
    }

    @media (max-width: 656px) {
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
        <ButtonStyles>Get in touch</ButtonStyles>
        <img src="profile.png" alt="Hi there, it's Omar" />
      </div>
      <img src="profile.png" alt="Hi there, it's Omar" />
    </HeroStyles>
  )
}
