import { ProfileCard } from '../../components/ProfileCard'
import { PostList } from '../../components/PostsList'
import { Header } from '../../components/Header'

export default function Home() {
  return (
    <main className="h-screen bg-base-background">
      <Header />
      <div className="max-w-4xl mx-auto">
        <ProfileCard />
        <PostList />
      </div>
    </main>
  )
}
