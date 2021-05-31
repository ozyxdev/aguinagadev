import Link from 'next/link'
import NavStyles from './styles/NavStyles'

export default function Nav() {
  return (
    <NavStyles>
      <Link href="/">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/projects">Projects</Link>
    </NavStyles>
  )
}
