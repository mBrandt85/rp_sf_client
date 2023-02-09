interface InputProps {
  label: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  value: string
  type?: React.HTMLInputTypeAttribute
  style?: React.CSSProperties
}

export default function Input({ 
  label, 
  onChange, 
  value, 
  type = 'text',
  style
}: InputProps) {
  return <input
    style={{
      width: '100%',
      padding: 6,
      marginBottom: 6,
      ...style
    }}
    placeholder={label}
    onChange={onChange}
    value={value}
    type={type}
  />
}