import Image from 'next/image'
import styled from 'styled-components'
import TaskItem from './TaskItem'

const ProjectCardStyles = styled.div`
  margin-top: 4.5rem;
  .task-items {
    margin-top: 1rem;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;

    .img {
      align-self: center;
    }

    :nth-child(2n) {
      .card-content {
        grid-column: 1 / span 1;
        grid-row: 1;
      }
      .img {
        grid-column: 2 / span 1;
      }
    }
  }
`

export default function ProjectCard({ project }) {
  return (
    <ProjectCardStyles>
      <div className="img">
        <Image
          src={project.image}
          alt="Lumen project"
          width="1098"
          height="646"
        />
      </div>
      <div className="card-content">
        <h2>{project.title}</h2>
        <div className="task-items">
          {project.tasks.map((task) => (
            <TaskItem taskItem={task} />
          ))}
        </div>
        <p>{project.description}</p>
      </div>
    </ProjectCardStyles>
  )
}
