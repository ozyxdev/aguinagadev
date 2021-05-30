import styled from 'styled-components'
import ServiceItem from './ServiceItem'
import services from '../lib/services'
import LinkCTA from './styles/LinkCTA'

export default function Services() {
  const ServicesStyles = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.5rem 3rem;

    h2 {
      grid-column: 1 / -1;
    }

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    a {
      grid-column: 1 / -1;
      justify-self: center;
    }
  `

  return (
    <ServicesStyles>
      <h2>Everything you need in one place</h2>
      {services.map((service) => (
        <ServiceItem service={service} />
      ))}

      <LinkCTA path="/services">Find out more about my services</LinkCTA>
    </ServicesStyles>
  )
}
