import profilePic from '../../assets/me.jpg'

export function ProfileCard() {
  return (
    <div className="max-w-4xl bg-base-profile rounded-lg mx-auto -mt-20 drop-shadow-2xl">
      <img src={profilePic} alt="" className="w-36 rounded-lg" />
    </div>
  )
}
