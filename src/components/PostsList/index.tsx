import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../lib/axios'

interface PostsProps {
  title: string
  created_at: string
  body: string
}

export function PostList() {
  const [posts, setPosts] = useState<PostsProps[]>([])

  async function fetchPosts() {
    const response = await api.get(
      '/repos/filipesaretta/filipe-github-blog/issues',
    )
    setPosts(response.data)
  }
  console.log(posts)
  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-4 pb-8">
      {posts.map((post) => {
        console.log(post.body.slice(0, 100))
        return (
          <Link to={'/post'} key={post.title}>
            <div className="bg-base-profile rounded-lg  p-8 hover:outline-none hover:border-base-label hover:ring-base-label hover:ring-2  ease-in-out duration-300 cursor-pointer">
              <div className="grid grid-cols-[1fr_auto] items-start">
                <span className="text-xl text-base-title block mb-5">
                  {post.title}
                </span>
                <span className="text-sm text-base-span block self-start mt-2">
                  Há 1 dia
                </span>
              </div>
              <p className="text-base-text">
                {post.body.slice(0, 100).replace(/#/g, ' ')}
              </p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
