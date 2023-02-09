interface ButtonProps {
  children: React.ReactNode
  type?: 'submit' | 'reset' | 'button' | undefined
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({
  children,
  type = 'button',
  disabled = false,
  onClick
}: ButtonProps) {
  return <button
    style={{
      padding: '6px 12px'
    }}
    type={type}
    disabled={disabled}
    onClick={onClick && onClick}
  >{children}</button>
}