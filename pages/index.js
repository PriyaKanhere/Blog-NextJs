import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/Link'

export default function Home({ posts }) {

  return (
    <div >
      {posts && posts.map((post) => (
        <Link href={`/${post.Slug}`} key={post.id}>
          <a >
            <h2>{post.Title}</h2>
            <h4>{post.User.username}</h4>
          </a>
        </Link>

      ))


      }


    </div>
  )

}

export async function getStaticProps() {
  console.log("I ma on server")
  const res = await fetch('http://localhost:1337/posts')
  const posts = await res.json();

  return {
    props: { posts }
  }

}
