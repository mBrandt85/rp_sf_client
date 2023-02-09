import { useAuth } from "../providers"
import Button from "./button"
import Title from "./title"

export default function Error() {
  const { error, clearAuth } = useAuth()

  return (
    <div style={{ textAlign: 'center' }}>
      <Title>ERROR!</Title>
      <div style={{ marginBottom: 8 }}>{error}</div>
      <Button onClick={clearAuth}>Try again</Button>
    </div>
  )
}