import { PencilIcon, TrashIcon } from '@heroicons/react/outline'
import { CardProps } from 'types/components/Card'
import CardInput from '../CardInput'

const Card = ({ title, id, pass_key }: CardProps) => {
  return (
    <section className="p-4 border backdrop-blur-3xl shadow-md border-rakhadi/50 flex-grow max-w-xs w-max rounded-md">
      {/* Card Heading */}
      <header className="flex items-center justify-between space-x-10">
        <h2 className="text-xl drop-shadow-md font-medium text-slate-600">
          {title}
        </h2>
        {/* Buttons */}
        <section>
          <button className="p-2 rounded-full hover:bg-neutral-100 active:bg-neutral-200 drop-shadow-md transition">
            <PencilIcon className="h-[1.4rem] w-[1.4rem] text-slate-600" />
          </button>
          <button className="p-2 rounded-full hover:bg-neutral-100 active:bg-neutral-200 drop-shadow-md transition">
            <TrashIcon className="h-[1.4rem] w-[1.4rem] text-laal/90" />
          </button>
        </section>
      </header>
      <hr className="my-2 border border-rakhadi/20" />
      {/* Form */}
      <form className="space-y-4">
        <CardInput inputValue={id} type="text" displayText="Identity" />
        <CardInput
          inputValue={pass_key}
          type="password"
          displayText="Password/Key"
        />
      </form>
    </section>
  )
}

export default Card
