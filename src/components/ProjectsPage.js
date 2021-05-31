import ProjectCard from './ProjectCard'
import projects from '../lib/projects'

export default function ProjectsPage() {
  return (
    <div className="container">
      <h1>Projects</h1>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  )
}
