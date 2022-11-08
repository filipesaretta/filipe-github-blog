import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface PostsContextProviderProps {
  children: ReactNode
}

interface PostsProps {
  title: string
  created_at: string
  body: string
  number: number
}

interface PostsContextProps {
  posts: PostsProps[]
}

export const PostsContext = createContext({} as PostsContextProps)

export function PostsContextProvider({ children }: PostsContextProviderProps) {
  const [posts, setPosts] = useState([])

  async function fetchPosts() {
    const response = await api.get(
      '/repos/filipesaretta/filipe-github-blog/issues',
    )
    setPosts(response.data)
  }
  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  )
}
