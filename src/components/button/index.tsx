
interface PropsType {
  text?: string
  onClick?: () => void
  light?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className: {[
    key: string
  ] : string | undefined };
}

function Button({
  text,
  onClick,
  disabled,
  type,
  className
}: PropsType) {
  return (
    <div className={className.container}>
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={className.containerInput}
      >
        <span className={className.text}>{text}</span>
      </button>
    </div>
  )
}

export default Button
