import styled from 'styled-components'
import Link from 'next/link'

const LinkStyle = styled.a`
  align-self: center;
  font-size: 1rem;
  color: var(--dark);
  text-decoration: none;
  cursor: pointer;

  img {
    margin-left: 1rem;
    transition: transform ease-in-out 100ms;
  }

  :hover {
    text-decoration: none;
    img {
      transform: translateX(1rem);
    }
  }
`
export default function LinkCTA({ path, children }) {
  return (
    <Link href={path}>
      <LinkStyle>
        {children}
        <img src="arrow.svg" alt="arrow pointing right" />
      </LinkStyle>
    </Link>
  )
}
