import styled from 'styled-components'

export default function ServiceItem({ service }) {
  const ServiceItemStyles = styled.div`
    h3 {
      font-size: 1.4rem;
      margin: 0;
      color: var(--dark);
    }

    .content {
      margin-left: 2rem;
    }

    p {
      margin-top: 0;
      font-size: 1rem;
      line-height: 140%;
    }

    .header {
      display: flex;
      margin-bottom: 1rem;
    }

    .icon {
      display: inline;
      position: relative;

      ::before {
        content: url('hex.svg');
        position: absolute;
        left: calc(-49px + 11px);
        top: calc(-60px + 30px);
        z-index: -1;
      }
    }

    @media (min-width: 1024px) {
      margin-top: 1.5rem;
    }
  `
  return (
    <ServiceItemStyles>
      <div className="header">
        <div className="icon">
          <img src={`${service.icon}`} alt={service.title} />
        </div>
        <div className="content">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      </div>
    </ServiceItemStyles>
  )
}
