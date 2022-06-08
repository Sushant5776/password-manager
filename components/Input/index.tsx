import { InputProps } from 'types/components/input'

const Input = ({ id, type, text, value, dispatch, action }: InputProps) => {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={id} className="font-medium ml-1 text-black/70">
        {text}
      </label>
      <input
        type={type}
        id={id}
        className="focus:outline-none w-[19rem] sm:w-[24rem] focus:bg-rakhadi/25 focus:font-medium text-slate-800 bg-rakhadi/[0.15] py-[6px] sm:py-2 px-3 rounded-lg"
        value={value}
        onChange={(event) => dispatch(action(event.target.value))}
      />
    </div>
  )
}

export default Input
