import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useContext } from 'react'
import { PostsContext } from '../../contexts/PostsContext'

interface Inputs {
  query: string
}

const schema = yup
  .object({
    searchPost: yup.string(),
  })
  .required()

export function SearchContent() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  })
  const { fetchSearchPosts } = useContext(PostsContext)

  async function handleSearchPost(data: Inputs) {
    return await fetchSearchPosts(data.query)
  }

  return (
    <div className="mx-4 mt-[72px] mb-12">
      <div className="flex justify-between">
        <p className="text-base-subtitle mb-5 text-lg">Posts</p>
        <span className="block text-base-span">6 posts</span>
      </div>
      <form onSubmit={handleSubmit(handleSearchPost)}>
        <input
          type="text"
          placeholder="Search for post..."
          {...register('query')}
          className="w-full px-4 py-3 border-0 border-base-label outline-0 focus:ring-2 ring-blue rounded-lg  bg-base-input placeholder-base-label text-base-label"
        />
      </form>
    </div>
  )
}
