import styled from 'styled-components'

const NavStyles = styled.ul`
  margin: 0 1.5rem;
  padding: 0;
  display: flex;

  a {
    font-weight: 600;
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
