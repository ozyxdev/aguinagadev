import styled from 'styled-components'
import Link from 'next/link'

const LinkStyle = styled.a`
  align-self: center;
  font-size: 1rem;
  color: var(--dark);
  text-decoration: none;
  cursor: pointer;

  svg {
    width: 43px;
    margin-left: 1rem;
    transition: transform ease-in-out 100ms;
  }

  :hover {
    text-decoration: none;
    svg {
      transform: translateX(1rem);
    }
  }
`
export default function LinkCTA({ path, children }) {
  return (
    <Link href={path}>
      <LinkStyle>
        {children}
        <svg
          className="arrow"
          width="43"
          height="12"
          viewBox="0 0 43 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.9713 6.53033C42.2642 6.23744 42.2642 5.76256 41.9713 5.46967L37.1984 0.696699C36.9055 0.403806 36.4306 0.403806 36.1377 0.696699C35.8448 0.989592 35.8448 1.46447 36.1377 1.75736L40.3803 6L36.1377 10.2426C35.8448 10.5355 35.8448 11.0104 36.1377 11.3033C36.4306 11.5962 36.9055 11.5962 37.1984 11.3033L41.9713 6.53033ZM0 6.75H41.441V5.25H0V6.75Z"
            fill="#1B1245"
          />
        </svg>

        {/* <img src="arrow.svg" alt="arrow pointing right" /> */}
      </LinkStyle>
    </Link>
  )
}
