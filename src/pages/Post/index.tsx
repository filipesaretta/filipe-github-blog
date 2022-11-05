import { Link } from 'react-router-dom'
import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatTeardrop,
  GithubLogo,
} from 'phosphor-react'

export function Post() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className=" bg-base-profile rounded-lg -mt-20 shadow-2xl p-8  sm:pl-10 pr-3 sm:pr-8 mx-4">
        <header className="flex justify-between items-center mb-5">
          <Link
            to="/"
            className="flex gap-2 items-center uppercase text-blue font-bold text-xs col-start-2 row-start-1  h-fit hover:underline hover:underline-offset-4"
          >
            <CaretLeft size={12} weight="regular" />
            Voltar
          </Link>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center uppercase text-blue font-bold text-xs col-start-2 row-start-1  h-fit hover:underline hover:underline-offset-4"
          >
            Ver no github
            <ArrowSquareOut size={14} weight="bold" color="#3294F8" />
          </a>
        </header>
        <h1 className="text-2xl text-base-title font-bold">
          JavaScript data types and data structures
        </h1>
        <div className="flex gap-4 row-start-3 self-end mt-2">
          <span className="flex items-center gap-2 text-base-label">
            <GithubLogo size={18} weight="fill" color="#3A536B" />
            filipesaretta
          </span>
          <span className="flex items-center gap-2 text-base-label">
            <CalendarBlank size={18} weight="fill" color="#3A536B" />
            Há 1 dia
          </span>
          <span className="flex items-center gap-2 text-base-label">
            <ChatTeardrop size={18} weight="fill" color="#3A536B" />
            32 comments
          </span>
        </div>
      </div>
      <div className="mx-4 px-8 py-10">
        <p className="text-base-text">
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
      </div>
    </div>
  )
}
