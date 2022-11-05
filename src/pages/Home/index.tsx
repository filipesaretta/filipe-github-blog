import { ProfileCard } from '../../components/ProfileCard'
import { PostList } from '../../components/PostsList'
import { SearchContent } from '../../components/SearchContent'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <ProfileCard />
      <SearchContent />
      <PostList />
    </div>
  )
}
