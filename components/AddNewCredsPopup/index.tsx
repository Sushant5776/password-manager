import { XIcon } from '@heroicons/react/outline'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { MouseEvent, useState } from 'react'
import { AddNewCredsPopupProps } from 'types/components/AddNewCredsPopup'
import { db } from 'utils/database'

const AddNewCredsPopup = ({
  setNewCredsPopupState,
  user_id,
}: AddNewCredsPopupProps) => {
  const [title, setTitle] = useState('')
  const [identity, setIdentity] = useState('')
  const [value, setValue] = useState('')

  const handleClose = () => {
    setTitle('')
    setIdentity('')
    setValue('')
    setNewCredsPopupState(false)
  }

  const handleAdd = async (event: MouseEvent) => {
    event.preventDefault()
    await addDoc(collection(db, 'users', user_id, 'data'), {
      title,
      identity,
      value,
      timestamp: serverTimestamp(),
    })

    handleClose()
  }

  return (
    <section
      onClick={() => handleClose()}
      className="absolute w-full h-screen top-0 left-0 z-50 backdrop-blur-xl"
    >
      <section
        onClick={(event) => event.stopPropagation()}
        className="absolute shadow-md shadow-gray-300 w-max h-max top-1/2 left-1/2 -translate-x-1/2 text-kaala transform -translate-y-1/2 p-4 bg-neutral-100/80 rounded-md"
      >
        <section className="flex items-center mb-4 justify-between">
          <h2 className="text-lg font-medium text-slate-700">
            Add New Credentials
          </h2>
          <button
            className="p-2 rounded-full hover:bg-neutral-100 active:bg-neutral-200 drop-shadow-md transition"
            onClick={() => handleClose()}
            title="Close"
          >
            <XIcon className="w-6 h-6 text-laal/90" />
          </button>
        </section>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-slate-500 block font-medium">
              Title
            </label>
            <input
              autoComplete="off"
              type="text"
              placeholder="Enter Your Title (Ex. Twitter, etc.)"
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="py-2 sm:py-2 focus:font-medium p-3 transition w-72 focus:bg-rakhadi/20 rounded-md bg-rakhadi/[0.15] text-slate-700 focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="text" className="text-slate-500 block font-medium">
              Identity
            </label>
            <input
              autoComplete="off"
              type="text"
              placeholder="Enter Your Identity"
              id="text"
              value={identity}
              onChange={(event) => setIdentity(event.target.value)}
              className="py-2 sm:py-2 focus:font-medium p-3 transition w-72 focus:bg-rakhadi/20 rounded-md bg-rakhadi/[0.15] text-slate-700 focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-slate-500 block font-medium"
            >
              Password/Key
            </label>
            <input
              autoComplete="off"
              type="password"
              placeholder="Enter Your Password/Key"
              id="password"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              className="py-2 sm:py-2 focus:font-medium p-3 transition w-72 focus:bg-rakhadi/20 rounded-md bg-rakhadi/[0.15] text-slate-700 focus:outline-none"
            />
          </div>
          <button
            disabled={!identity || !value || !title}
            onClick={handleAdd}
            className="bg-rakhadi disabled:bg-neutral-200 disabled:text-gray-400 text-white font-medium active:bg-rakhadi/25 active:text-slate-700 transition rounded-md p-2 block w-full"
          >
            Save Changes
          </button>
        </form>
      </section>
    </section>
  )
}

export default AddNewCredsPopup
