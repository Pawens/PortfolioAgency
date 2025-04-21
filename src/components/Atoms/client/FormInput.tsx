'use client'

import React from 'react'

type FormInputProps = {
  type?: 'text' | 'email' | 'textarea'
  name: string
  id?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  placeholder?: string
}

const FormInput = ({ type = 'text', name, id, ...rest }: FormInputProps) => {
  const inputId = id ?? name

  const sharedClasses = 'w-full bg-[var(--color-secondary)] text-black placeholder-[var(--color-primary)]  px-[20px] py-[20px] outline-none border-none appearance-none'

  if (type === 'textarea') {
    return <textarea id={inputId} name={name} rows={6} className={sharedClasses} {...rest} />
  }

  return <input type={type} id={inputId} name={name} className={sharedClasses} {...rest} />
}

export default FormInput
