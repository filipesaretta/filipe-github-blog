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
  fetchSearchPosts: (query?: string) => Promise<void>
}

export const PostsContext = createContext({} as PostsContextProps)

export function PostsContextProvider({ children }: PostsContextProviderProps) {
  const [posts, setPosts] = useState([])

  async function fetchSearchPosts(query = '') {
    const response = await api.get('/search/issues', {
      params: { q: `${query}repo:filipesaretta/filipe-github-blog` },
    })
    setPosts(response.data.items)
  }

  useEffect(() => {
    fetchSearchPosts()
  }, [])

  return (
    <PostsContext.Provider value={{ posts, fetchSearchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
