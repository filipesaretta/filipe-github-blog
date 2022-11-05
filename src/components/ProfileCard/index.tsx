import profilePic from '../../assets/me.jpg'
import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'

export function ProfileCard() {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-3  bg-base-profile rounded-lg -mt-20 shadow-2xl py-8 pl-3 sm:pl-10 pr-3 sm:pr-8 mx-4">
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
          className="flex gap-2 items-center uppercase text-blue font-bold text-xs col-start-2 row-start-1 self-start h-fit hover:underline hover:underline-offset-4"
        >
          github
          <ArrowSquareOut size={14} weight="bold" color="#3294F8" />
        </a>
        <div className="flex gap-4 row-start-3 self-end">
          <span className="flex items-center gap-2 text-base-subtitle text-base">
            <GithubLogo size={18} weight="fill" color="#3A536B" />
            filipesaretta
          </span>
          <span className="flex items-center gap-2 text-base-subtitle text-base">
            <Buildings size={18} weight="fill" color="#3A536B" />
            freelancer
          </span>
          <span className="flex items-center gap-2 text-base-subtitle text-base">
            <Users size={18} weight="fill" color="#3A536B" />
            32
          </span>
        </div>
      </div>
    </div>
  )
}
