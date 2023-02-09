interface InputProps {
  label: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  value: string
  type?: React.HTMLInputTypeAttribute
}

export default function Input({ 
  label, 
  onChange, 
  value, 
  type = 'text'
}: InputProps) {
  return <input
    style={{
      width: '100%',
      padding: 6,
      marginBottom: 6
    }}
    placeholder={label}
    onChange={onChange}
    value={value}
    type={type}
  />
}