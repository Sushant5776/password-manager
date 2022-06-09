import { CheckIcon, DocumentDuplicateIcon } from '@heroicons/react/outline'
import { MouseEvent, useState } from 'react'
import { CardInputProps } from 'types/components/CardInput'

const CardInput = ({ inputValue, type, displayText }: CardInputProps) => {
  const [val, setVal] = useState(inputValue || '')
  const [check, setCheck] = useState(false)

  const handleClick = async (event: MouseEvent) => {
    event.preventDefault()
    setCheck(true)
    await navigator.clipboard.writeText(val)
    setTimeout(() => setCheck(false), 1025)
  }

  return (
    <div className="space-y-2">
      <label htmlFor={type} className="text-slate-500 font-medium">
        {displayText}
      </label>
      <div className="flex items-center w-72 rounded-md bg-rakhadi/[0.15] text-slate-700 transition focus-within:bg-rakhadi/20 justify-between">
        <input
          autoComplete="off"
          type={type}
          placeholder={`Enter Your ${displayText}`}
          id={type}
          value={val}
          onChange={(event) => setVal(event.target.value)}
          className="w-full py-2 sm:py-2 focus:font-medium pl-3 focus:outline-none bg-transparent"
        />
        {check ? (
          <CheckIcon className="h-7 w-7 hover:drop-shadow-md text-slate-500 mx-2" />
        ) : (
          <button
            onClick={(event) => handleClick(event)}
            className="mx-2 text-slate-500"
          >
            <DocumentDuplicateIcon className="h-6 w-6 hover:drop-shadow-md" />
          </button>
        )}
      </div>
    </div>
  )
}

export default CardInput
