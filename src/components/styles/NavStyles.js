import styled from 'styled-components'

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;

  a {
    font-weight: 700;
    font-size: 1rem;
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    color: var(--primary-dark);

    :hover {
      text-decoration: none;
    }
  }
`

export default NavStyles
