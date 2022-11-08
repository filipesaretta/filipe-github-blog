import { Link, useParams } from 'react-router-dom'
import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatTeardrop,
  GithubLogo,
} from 'phosphor-react'
import React, { useEffect, useState } from 'react'

import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { api } from '../../lib/axios'

interface PostProps {
  title: string
  comments: string
  body: string
}

export function Post() {
  const { number } = useParams()
  const [post, setPost] = useState({} as PostProps)

  useEffect(() => {
    async function fetchSinglePost() {
      const response = await api.get(
        `/repos/filipesaretta/filipe-github-blog/issues/${number}`,
      )
      setPost(response.data)
    }
    fetchSinglePost()
  }, [number])

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
        <h1 className="text-2xl text-base-title font-bold">{post.title}</h1>
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
            {post.comments}
          </span>
        </div>
      </div>
      <div className="mx-4 px-8 py-10">
        <div className="text-base-text">
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    // eslint-disable-next-line react/no-children-prop
                    children={String(children).replace(/\n$/, '')}
                    // @ts-expect-error
                    style={atomDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
            }}
          >
            {post.body}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
