import Link from 'next/link'
import styled from 'styled-components'
import ButtonStyles from './styles/Button'

const AboutCard = styled.div`
  position: relative;
  margin: 0 auto;

  .content {
    margin-top: 12rem;
    background: var(--off-white);
    border-radius: 1rem;
    box-shadow: 0px 7px 36px rgba(0, 0, 0, 0.12);
    display: grid;
    padding: 4rem 1rem 1.5rem 1rem;
    text-align: center;
    position: relative;

    ::after {
      content: url('dots.svg');
      position: absolute;
      z-index: -1;
      right: -6rem;
      top: -3rem;
      transform: scale(0.8);
    }

    ::before {
      content: url('dots.svg');
      position: absolute;
      z-index: -1;
      transform: scale(0.8);
      left: -3.5rem;
      bottom: -4.5em;
    }
  }

  img {
    width: 12rem;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: -50%;
    z-index: 10;
  }

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 140%;
    color: var(--dark);
  }

  button {
    justify-self: center;
  }

  @media (min-width: 768px) {
    margin-top: 3rem;
    display: grid;
    /* grid-template-columns: 1fr; */
    justify-content: center;
    img {
      grid-column: 1 / span 1;
      /* position: relative; */
      top: 2.5rem;
      bottom: 0;
      /* left: 0; */
      margin: 0;
      /* left: -6rem; */
    }

    .content {
      padding: 1rem 1rem 1rem 5rem;
      margin: 3rem 0 0 7rem;
      text-align: left;
      max-width: 560px;

      ::after,
      ::before {
        transform: scale(1);
      }

      ::before {
        left: -7em;
      }
    }

    button {
      justify-self: start;
    }
  }
`
export default function Me() {
  return (
    <AboutCard>
      <img src="/profile.png" alt="This is me, Omar." />
      <div className="content">
        <h2>Hello, I’m Omar</h2>
        <p>
          I help growing companies like yours convert more customers and make
          more sales by combining your goals with your user’s needs.
        </p>
        <Link href="mailto:omar@aguinaga.dev">
          <ButtonStyles>Get in touch</ButtonStyles>
        </Link>
      </div>
    </AboutCard>
  )
}
