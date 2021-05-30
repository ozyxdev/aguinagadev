import Link from 'next/link'
import styled from 'styled-components'
import LinkCTA from './styles/LinkCTA'

export default function Projects() {
  const ProjectsContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;

    .projects-desktop {
      display: none;
    }
    .full-width {
      width: 100vw;
      position: relative;
      margin-left: calc(-50vw);
      left: 50%;

      img {
        width: 100%;
      }
    }

    @media (min-width: 768px) {
      .projects-mobile {
        display: none;
      }

      .projects-desktop {
        margin: 2rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 2rem;

        /* max-width: 1440px; */
      }
    }

    @media (min-width: 1440px) {
      .projects-desktop {
        align-items: center;
        margin: 2rem;
        display: grid;
        grid-template-columns: 1fr 1.3fr 1fr;
        grid-gap: 2rem;
      }
    }
  `
  return (
    <ProjectsContainer>
      <div className="full-width">
        <div className="projects-desktop">
          <img src="wikibits.png" alt="Wikibits branding" />
          <img src="lumen.png" alt="Lumen website project" />
          <img src="kodi.png" alt="Kodi website project" />
        </div>
        <div className="projects-mobile">
          <img
            className="projects-mobile"
            src="mobile-projects.png"
            alt="examples of my projects"
          />
        </div>
      </div>

      <LinkCTA path="/projects">See my projects</LinkCTA>
    </ProjectsContainer>
  )
}
