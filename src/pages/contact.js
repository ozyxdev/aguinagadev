import Link from 'next/link'
import styled from 'styled-components'
import Me from '../components/Me'

const ContactStyles = styled.div`
  margin: auto;

  text-align: center;

  a {
    color: var(--secondary);
    font-size: 1.1rem;
  }

  h1 {
    grid-column: span 2;
    ::before {
      display: none;
    }
  }

  @media (min-width: 768px) {
    max-width: 60%;
  }
`
export default function Contact() {
  return (
    <ContactStyles>
      <h1>Let's start making your perfect website</h1>
      <div className="content">
        <p>
          With over 5 years of experience creating User Experience focused
          websites, I’m able to create a website which perfectly suits your
          needs, ensuring that it will engage your customers while making your
          job easier.
        </p>
        <p>
          Just send me an email, and we'll set up a meeting to help you improve
          your business
        </p>
        <Link href="mailto:omar@aguinaga.dev">omar@aguinaga.dev</Link>
      </div>
      <Me />
    </ContactStyles>
  )
}
