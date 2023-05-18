import './button-style.scss'

interface PropsType {
  text: string
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
      className="button"
    >
      <span>{text}</span>
    </button>
  )
}

export default Button
