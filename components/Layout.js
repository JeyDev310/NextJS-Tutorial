import Head from 'next/head'
import tw from "tailwind-styled-components"
import Nav from './Nav'
import Footer from './Footer'
import Content from './Content'

const Wrapper = tw.div`
  w-full flex flex-col
`

const Layout = ({ posts, title = 'Fullstack Candidate Testing' }) => (
  <Wrapper>
    <Head>
      <title>{ title }</title>
    </Head>
    
    <Nav/>
    <Content posts={posts}/>
    <Footer/>

  </Wrapper>
)

export default Layout