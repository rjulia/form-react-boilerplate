
interface PropsType {
  text?: string
  onClick?: () => void
  light?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

function Button({
  text,
  onClick,
  disabled,
  type,
}: PropsType) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
    >
      <span>{text}</span>
    </button>
  )
}

export default Button
