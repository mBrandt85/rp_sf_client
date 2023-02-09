import { useAuth } from "../providers"
import Error from "./error"
import Landing from "./landing"
import SignIn from "./sign-in"
import Spinner from "./spinner"

export default function Main() {
  const { status } = useAuth()

  if (status === 'pending') return (
    <SignIn />
  )

  if (status === 'loading') return (
    <Spinner />
  )

  if (status === 'done') return (
    <Landing />
  )

  if (status === 'error') return (
    <Error />
  )

  return null
}