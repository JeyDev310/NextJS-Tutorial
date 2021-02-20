import Link from 'next/link'
import tw from "tailwind-styled-components"

const Wrapper = tw.div`
  flex items-center justify-center
`

const Footer = () => (
  <Wrapper>
    <Link href='/'><a>Home</a></Link> |
    <Link href='/about' prefetch><a>About</a></Link> |
    <Link href='/contact' prefetch><a>Contact</a></Link>
  </Wrapper>
)

export default Footer