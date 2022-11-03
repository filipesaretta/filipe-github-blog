import { ProfileCard } from '../../components/ProfileCard'
import logo from '../../assets/logo.svg'

export default function Home() {
  return (
    <main className="h-screen bg-base-background">
      <div className="bg-cover-top h-72 bg-no-repeat bg-cover grid justify-center">
        <img src={logo} alt="Github Blog" className="mt-16" />
      </div>
      <ProfileCard />
    </main>
  )
}
