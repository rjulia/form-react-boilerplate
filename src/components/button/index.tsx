
interface PropsType {
  label?: string
  onClick?: () => void
  light?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className: {[
    key: string
  ] : string | undefined };
}

function Button({
  label,
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
        <span className={className.text}>{label}</span>
      </button>
    </div>
  )
}

export default Button

