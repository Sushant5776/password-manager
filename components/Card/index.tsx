import { PencilIcon, TrashIcon } from '@heroicons/react/outline'
import { deleteDoc, doc } from 'firebase/firestore'
import { CardProps } from 'types/components/Card'
import { db } from 'utils/database'
import CardInput from '@/components/CardInput'
import EditPopup from '@/components/EditPopup'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { RootDispatch } from 'utils/stateManager'
import { hideContent } from 'utils/stateManager/editPopupState'

const Card = ({ title, identity, docId, user_id, value }: CardProps) => {
  const [show, setShow] = useState(false)
  const dispatch: RootDispatch = useDispatch()
  const [passwordStrength, setPasswordStrength] = useState<
    'strong' | 'medium' | 'weak'
  >('weak')

  const handleDelete = async () => {
    await deleteDoc(doc(db, 'users', user_id, 'data', docId))
  }

  const showEditPopup = () => {
    dispatch(hideContent(window.scrollY))
    setShow(true)
  }

  useEffect(() => {
    // If password does not meet any of the following requirements then it is a weak password
    const strongPass =
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/
    const mediumPass =
      /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/

    if (strongPass.test(value)) setPasswordStrength('strong')
    else if (mediumPass.test(value)) setPasswordStrength('medium')
    else setPasswordStrength('weak')
  }, [])

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
      <section
        className={`p-4 dark:bg-slate-800 ${
          passwordStrength === 'strong'
            ? 'dark:border-white/10 border-rakhadi/50'
            : passwordStrength === 'medium'
            ? 'border-yellow-500/40'
            : 'border-red-500/40'
        } border-2 backdrop-blur-3xl shadow-md flex-grow max-w-xs w-max rounded-md`}
      >
        {/* Card Heading */}
        <header className="flex items-center justify-between space-x-10">
          <h2 className="text-xl drop-shadow-md dark:font-semibold font-medium text-slate-600 dark:text-slate-400">
            {title}
          </h2>
          {/* Buttons */}
          <section>
            <button
              onClick={showEditPopup}
              title={`Edit ${title} Credentials`}
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-100/95 group dark:active:bg-slate-500 active:bg-neutral-200 drop-shadow-md transition"
            >
              <PencilIcon className="h-[1.4rem] w-[1.4rem] text-slate-600 dark:text-slate-500 dark:group-active:text-slate-400" />
            </button>
            <button
              onClick={handleDelete}
              title={`Delete ${title} Credentials`}
              className="p-2 rounded-full hover:bg-neutral-100 dark:active:bg-slate-500 group dark:hover:bg-neutral-100/95 active:bg-neutral-200 drop-shadow-md transition"
            >
              <TrashIcon className="h-[1.4rem] w-[1.4rem] text-laal/90 dark:group-active:text-slate-400" />
            </button>
          </section>
        </header>
        <hr className="my-2 border dark:border-rakhadi/[0.15] border-rakhadi/20" />
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
