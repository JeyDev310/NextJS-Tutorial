import React from 'react'
import Layout from '../components/Layout';
// import { getPosts } from 'api/posts'
// import Post from 'components/Post'

const IndexPage = ({ posts }) => (
  <Layout className="bg-gray-200">
    {/* <ul>
      {posts.map(p => (
        <Post key={p.title} post={p} />
      ))}
    </ul> */}
  </Layout>
)

IndexPage.getInitialProps = async ({ req }) => {
  // const res = await getPosts()
  // const json = await res.json()
  // return { posts: json }
  return {posts: []}
}

export default IndexPage