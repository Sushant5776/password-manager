const Input = ({
  id,
  type,
  text,
}: {
  id: string
  type: string
  text: string
}) => {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={id} className="font-medium ml-1 text-black/70">
        {text}
      </label>
      <input
        type={type}
        id={id}
        className="focus:outline-none focus:bg-rakhadi/25 focus:font-medium text-slate-800 bg-rakhadi/[0.15] py-2 px-3 rounded-lg"
      />
    </div>
  )
}

export default Input
