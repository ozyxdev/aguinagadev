import { createGlobalStyle } from 'styled-components'

const TypographyStyles = createGlobalStyle`
  h1, h2, h3 {
    color: var(--dark);
  }

  p {
    line-height: 140%;
    font-size: 1rem;
    color: var(--dark);
  }

  h1 {
      font-size: 3.5rem;
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

        ::before {
          /* content: url('sparkle.svg');
          position: absolute; */
          top: -2.4rem;
          left: -2.8rem;
          transform: rotate(5deg) scale(0.8);
        }
      }
    }


  h2 {
    margin-bottom: 0;
    color: var(--primary-dark);
    line-height: 115%;
    font-size: 2.5rem;

    @media (max-width: 992px) {
      font-size: 1.8rem;
    }
  }
`
export default TypographyStyles
