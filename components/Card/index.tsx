import { PencilIcon, TrashIcon } from '@heroicons/react/outline'
import { deleteDoc, doc } from 'firebase/firestore'
import { CardProps } from 'types/components/Card'
import { db } from 'utils/database'
import CardInput from '@/components/CardInput'
import EditPopup from '@/components/EditPopup'
import { useState } from 'react'

const Card = ({ title, identity, docId, user_id, value }: CardProps) => {
  const [show, setShow] = useState(false)

  const handleDelete = async () => {
    await deleteDoc(doc(db, 'users', user_id, 'data', docId))
  }

  return (
    <>
      {/* Popup */}
      {show ? (
        <EditPopup
          title={title}
          identity={identity}
          value={value}
          docId={docId}
          user_id={user_id}
          setShow={setShow}
        />
      ) : (
        ''
      )}
      <section className="p-4 border backdrop-blur-3xl shadow-md border-rakhadi/50 flex-grow max-w-xs w-max rounded-md">
        {/* Card Heading */}
        <header className="flex items-center justify-between space-x-10">
          <h2 className="text-xl drop-shadow-md font-medium text-slate-600">
            {title}
          </h2>
          {/* Buttons */}
          <section>
            <button
              onClick={() => setShow(true)}
              title={`Edit ${title} Credentials`}
              className="p-2 rounded-full hover:bg-neutral-100 active:bg-neutral-200 drop-shadow-md transition"
            >
              <PencilIcon className="h-[1.4rem] w-[1.4rem] text-slate-600" />
            </button>
            <button
              onClick={handleDelete}
              title={`Delete ${title} Credentials`}
              className="p-2 rounded-full hover:bg-neutral-100 active:bg-neutral-200 drop-shadow-md transition"
            >
              <TrashIcon className="h-[1.4rem] w-[1.4rem] text-laal/90" />
            </button>
          </section>
        </header>
        <hr className="my-2 border border-rakhadi/20" />
        {/* Form */}
        <form className="space-y-4">
          <CardInput inputValue={identity} type="text" displayText="Identity" />
          <CardInput
            inputValue={value}
            type="password"
            displayText="Password/Key"
          />
        </form>
      </section>
    </>
  )
}

export default Card
