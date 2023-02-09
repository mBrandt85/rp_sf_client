interface TitleProps {
  children: React.ReactNode
}

export default function Title({ children }: TitleProps) {
  return <h2 style={{
    margin: '0 0 8px 0',
    fontSize: 16
  }}>{children}</h2>
}