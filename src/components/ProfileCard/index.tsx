import profilePic from '../../assets/me.jpg'
import github from '../../assets/github-brands.svg'
import building from '../../assets/building-solid.svg'
import followers from '../../assets/user-group-solid.svg'
import link from '../../assets/link-arrow.svg'

export function ProfileCard() {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-3 max-w-4xl bg-base-profile rounded-lg mx-4 -mt-20 drop-shadow-2xl py-8 pl-3 sm:pl-10 pr-3 sm:pr-8 md:mx-auto">
      <img
        src={profilePic}
        alt=""
        className="w-36 h-36 rounded-lg col-span-1 hidden sm:block"
      />
      <div className="grid grid-cols-[1fr_auto] grid-rows-[min-content_auto_1fr]">
        <h1 className="text-base-title self-start text-2xl mb-2">
          Filipe Saretta
        </h1>
        <p className="text-base-text col-span-full">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center uppercase text-blue font-bold text-xs col-start-2 row-start-1 self-start h-fit"
        >
          github
          <img src={link} alt="" className="w-[12px]" />
        </a>
        <div className="flex gap-4 row-start-3 self-end">
          <span className="flex items-center gap-2 text-base-subtitle">
            <img src={github} alt="Github Icon" className="w-[18px]" />
            filipesaretta
          </span>
          <span className="flex items-center gap-2 text-base-subtitle">
            <img src={building} alt="Building Icon" className="w-[18px]" />
            freelancer
          </span>
          <span className="flex items-center gap-2 text-base-subtitle">
            <img src={followers} alt="Followers Icon" className="w-[18px]" />
            32
          </span>
        </div>
      </div>
    </div>
  )
}
