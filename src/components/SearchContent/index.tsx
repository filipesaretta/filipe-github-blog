export function SearchContent() {
  return (
    <div className="mx-4 mt-[72px] mb-12">
      <div className="flex justify-between">
        <p className="text-base-subtitle mb-5 text-lg">Posts</p>
        <span className="block text-base-span">6 posts</span>
      </div>
      <input
        type="text"
        placeholder="Search for post..."
        className="w-full px-4 py-3 border-0 border-base-label outline-0 focus:ring-2 ring-blue rounded-lg  bg-base-input placeholder-base-label text-base-label"
      />
    </div>
  )
}
