import { Link } from 'react-router-dom'

export function PostList() {
  return (
    <Link to={'/post'}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-4 pb-8">
        <div className="bg-base-profile rounded-lg  p-8 hover:outline-none hover:border-base-label hover:ring-base-label hover:ring-2  ease-in-out duration-300 cursor-pointer">
          <div className="grid grid-cols-[1fr_auto] items-start">
            <span className="text-xl text-base-title block mb-5">
              JavaScript data types and data structures
            </span>
            <span className="text-sm text-base-span block self-start mt-2">
              Há 1 dia
            </span>
          </div>
          <p className="text-base-text">
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </div>
      </div>
    </Link>
  )
}
