import { useAuth } from "../providers"
import Button from "./button"
import Title from "./title"

export default function Error() {
  const { error, clearAuth } = useAuth()

  return (
    <div style={{ textAlign: 'center' }}>
      <Title>{error!.error}</Title>
      <div style={{ marginBottom: 8 }}>{error!.error_description}</div>
      <Button onClick={clearAuth}>Try again</Button>
    </div>
  )
}