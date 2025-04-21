'use client'

import React, { useState, useRef, useEffect } from 'react'
import ArrowPawens from "../../../assets/icons/ArrowPawens.svg"

type FaqItemProps = {
  question: string
  answer: string
  isFirst?: boolean
}

const FaqItem = ({ question, answer, isFirst }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState('80px') // 🆙 hauteur initiale
  const contentRef = useRef<HTMLDivElement>(null)

  const toggleOpen = () => {
    setIsOpen(prev => !prev)
  }

  useEffect(() => {
    if (isOpen && contentRef.current) {
      const fullHeight = 80 + contentRef.current.scrollHeight + 16 // 80 = nouvelle hauteur
      setHeight(`${fullHeight}px`)
    } else {
      setHeight('80px')
    }
  }, [isOpen])

  return (
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out text-[var(--color-secondary)]
        border-b border-b-[1px] border-[var(--color-secondary)] border-opacity-50
        ${isFirst ? 'border-t border-t-[1px]' : ''}`}
      style={{ height }}
      onClick={toggleOpen}
    >
      {/* Question */}
      <div className="h-[80px] px-2 flex items-center justify-between cursor-pointer group">
        <div className="flex items-center gap-[10px]">
          <ArrowPawens
            className={`fill-current transition-transform duration-300 ${
              isOpen ? 'rotate-[0deg]' : 'rotate-[-90deg]'
            }`}
          />
          <p className="text-sm">{question}</p>
        </div>
      </div>

      {/* Réponse */}
      <div
        ref={contentRef}
        className={`px-2 transition-opacity duration-300 ${
            isOpen ? 'opacity-100 pb-[20px]' : 'opacity-0 pb-0'
          }`}          
      >
        <p className="text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export default FaqItem
