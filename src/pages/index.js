import styled from 'styled-components'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Services from '../components/Services'

export default function Home() {
  const MainContainer = styled.main`
    margin: 0 1.5rem;
  `
  return (
    <MainContainer>
      <Hero />
      <Projects />
      <Services />
    </MainContainer>
  )
}
