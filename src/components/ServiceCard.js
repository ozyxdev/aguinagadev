import styled from 'styled-components'

const ServiceCardStyles = styled.div`
  margin-top: 1.5rem;
  display: grid;
  h2 {
    max-width: 80%;
  }

  p {
    font-size: 1.1rem;
    line-height: 140%;
  }

  .icon {
    justify-self: end;
    margin-bottom: -2.5rem;
    display: flex;
    height: 5rem;
    width: 5rem;
    border-radius: 1rem;
    box-shadow: 0px 10px 21px rgba(0, 0, 0, 0.14);

    img {
      height: 2rem;
      justify-self: center;
      margin: auto;
    }

    /* @media (min-width: 768px) {
      margin-bottom: -1rem;
    } */
  }
`
export default function ServiceCard({ service }) {
  return (
    <ServiceCardStyles>
      <div className="icon">
        <img src={service.icon} alt={service.title} />
      </div>
      <h2>{service.title}</h2>
      <p>{service.fullDescription}</p>
    </ServiceCardStyles>
  )
}
