import styled from 'styled-components'

const ButtonStyles = styled.button`
  background: var(--primary-100);
  color: var(--primary-dark);
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.5em 1em;
  border: 0;
  cursor: pointer;
  border-radius: 0.5rem;
  position: relative;

  ::after {
    position: absolute;
    content: url('twisted-arrow.svg');
    transform: translate(0.5rem, 0.5rem);
  }
`

export default ButtonStyles
