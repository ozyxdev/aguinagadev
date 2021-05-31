import Link from 'next/link'
import styled from 'styled-components'
import LinkCTA from './styles/LinkCTA'

const FooterStyles = styled.footer`
  background-color: #e7e6fd;
  position: relative;
  margin-top: calc(175px + 3rem);

  .content {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 2rem;
    display: grid;
    grid-gap: 1.5rem;
    grid-template-rows: auto auto auto;
  }

  svg.footer {
    width: 100%;
    position: absolute;
    transform: translateY(calc(-100% + 1px));
    height: auto;
  }

  h3 {
    color: var(--primary-dark);
    margin-bottom: 0.8rem;
  }

  p {
    line-height: 135%;
  }

  a {
    color: var(--secondary);
    font-weight: 600;
  }

  svg.arrow {
    path {
      fill: var(--secondary);
    }
  }

  .social {
    margin-top: 1rem;
    grid-template-columns: repeat(4, auto);
    justify-content: start;
    grid-gap: 0.8rem;
    display: grid;

    img {
      cursor: pointer;
    }
  }

  .copy {
    padding-bottom: 2rem;
    color: #a6a4d5;
    font-size: 0.8rem;
    text-align: center;
  }

  .links {
    display: flex;
    flex-direction: column;

    a {
      text-decoration: none;
      color: var(--dark);
      font-weight: normal;
    }
  }

  @media (min-width: 768px) {
    .content {
      grid-template-columns: 1fr 1fr;

      .links {
        text-align: right;

        a {
          align-self: end;
        }
      }
    }
  }
`
export default function Footer() {
  return (
    <FooterStyles>
      <svg
        className="footer"
        width="1440"
        height="175"
        viewBox="0 0 1440 175"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M449.238 132.343C268.238 132.343 113.738 69.01 0.737549 0.843384V174.343H1440.74C1366.24 174.343 1234.24 57.8434 1019.74 49.8434C805.238 41.8434 641.75 132.343 449.238 132.343Z"
          fill="#E7E6FD"
        />
      </svg>

      <div className="content">
        <div className="about">
          <h3>Omar Aguiñaga</h3>
          <p>
            I create beautiful websites your users will love. I work with you
            from start to finish to make sure your goals are reached and your
            users are happy.
          </p>
          <LinkCTA path="/">Now available for hire</LinkCTA>
          <div className="social">
            <Link href="https://twitter.com/aguinaga_dev">
              <img src="social/twitter.svg" alt="twitter" />
            </Link>
            <Link href="https://github.com/ozyxdev">
              <img src="social/github.svg" alt="github" />
            </Link>
            <Link href="https://www.linkedin.com/in/oaguinaga/">
              <img src="social/linkedin.svg" alt="linkedin" />
            </Link>
            <Link href="mailto:omar@aguinaga.dev">
              <img src="social/email.svg" alt="email" />
            </Link>
          </div>
        </div>
        <div className="links">
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/contact">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="copy">
        <span>© 2021 Omar Aguinaga</span>
      </div>
    </FooterStyles>
  )
}
