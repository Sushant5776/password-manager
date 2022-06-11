import { CheckIcon, DocumentDuplicateIcon } from '@heroicons/react/outline'
import { MouseEvent, useEffect, useState } from 'react'
import { CardInputProps } from 'types/components/CardInput'

const CardInput = ({ inputValue, type, displayText }: CardInputProps) => {
  const [val, setVal] = useState('')
  const [check, setCheck] = useState(false)
  const handleClick = async (event: MouseEvent) => {
    event.preventDefault()
    setCheck(true)
    await navigator.clipboard.writeText(val)
    setTimeout(() => setCheck(false), 1025)
  }

  useEffect(() => {
    setVal(inputValue)
  }, [inputValue])

  return (
    <div className="space-y-2">
      <label
        htmlFor={`${inputValue.replace(' ', '')}-${type}`}
        className="text-slate-500 dark:font-semibold font-medium"
      >
        {displayText}
      </label>
      <div className="flex items-center w-72 rounded-md bg-rakhadi/[0.15] dark:bg-white/[0.15] dark:text-slate-300/75 dark:font-medium text-slate-700 transition focus-within:bg-rakhadi/20 dark:focus-within:bg-white/20 justify-between">
        <input
          autoComplete="off"
          type={type}
          placeholder={`Enter Your ${displayText}`}
          id={`${inputValue.replace(' ', '')}-${type}`}
          value={val}
          onChange={(event) => setVal(event.target.value)}
          className="w-full py-2 sm:py-2 focus:font-medium pl-3 focus:outline-none bg-transparent"
        />
        {check ? (
          <CheckIcon className="h-7 w-7 hover:drop-shadow-md text-slate-500 mx-2" />
        ) : (
          <button onClick={(event) => handleClick(event)} className="mx-2">
            <DocumentDuplicateIcon className="h-6 w-6 text-slate-500 hover:drop-shadow-md" />
          </button>
        )}
      </div>
    </div>
  )
}

export default CardInput
