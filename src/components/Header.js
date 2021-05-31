import Link from 'next/link'
import styled from 'styled-components'
import Nav from './Nav'

const HeaderStyles = styled.header`
  max-width: var(--max-width);
  padding: 2rem 0 0 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  display: grid;
  grid-template-columns: auto 1fr auto;

  img {
    margin: 0 2rem;
    cursor: pointer;
  }

  .primary {
    background-color: var(--primary-100);
    border-radius: 0.5rem;
    font-weight: 600;
    font-size: 1rem;
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    color: var(--primary-dark);
    line-height: 1.2;

    :hover {
      text-decoration: none;
    }
  }

  @media (max-width: 656px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 0.5rem;

    img {
      grid-row: 1;
      margin-left: 1.5rem;
    }

    ul {
      grid-row: 2;
      grid-column: span 2;
      justify-content: space-between;
    }

    .primary {
      justify-self: end;
      margin-right: 1.5rem;
    }
  }
`

export default function Header() {
  return (
    <HeaderStyles>
      <Link href="/">
        <img src="logo.svg" alt="Omar Aguinaga logo" />
      </Link>
      <Nav />
      <Link href="/contact">
        <a className="primary">Hire me today</a>
      </Link>
    </HeaderStyles>
  )
}
