import { useAuth } from "../providers"

export default function UserInfo() {
  const { user } = useAuth()

  if (user) return (
    <div>{user.username}</div>
  )

  return null
}