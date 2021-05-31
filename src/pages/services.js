import styled from 'styled-components'
import ServiceCard from '../components/ServiceCard'
import services from '../lib/services'
import Me from '../components/Me'

const ServicePageContainer = styled.div`
  @media (min-width: 768px) {
    .services-container {
      display: grid;
      grid-gap: 4rem;
      grid-template-columns: 1fr 1fr;
    }
  }
`

export default function Services() {
  return (
    <ServicePageContainer className="container">
      <h1>Services</h1>
      <div className="services-container">
        {services.map((service) => (
          <ServiceCard service={service} />
        ))}
      </div>
      <Me />
    </ServicePageContainer>
  )
}
