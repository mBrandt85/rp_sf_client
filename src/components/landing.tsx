import { useAuth } from "../providers"

export default function Landing() {
  const { token } = useAuth()

  return (
    <div>Access token: {token}</div>
  )
}