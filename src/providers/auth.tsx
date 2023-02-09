import { createContext, useReducer } from 'react'

interface AuthProviderProps {
  children: React.ReactNode
}

export interface User {
  [key: string]: string
}

export type Status = 'pending'
  | 'loading'
  | 'done'
  | 'error'

interface State {
  status: Status
  token: string | null
  user: User | null
  error: string | null
}

type ActionType = 'SET_STATUS'
  | 'SET_TOKEN'
  | 'SET_USER'
  | 'SET_ERROR'
  | 'CLEAR'

type Payload = Status
  | string
  | User

interface Action {
  type: ActionType
  payload?: Payload
}

interface Context extends State {
  setStatus: (payload: Status) => void
  setToken: (payload: string) => void
  setUser: (payload: User) => void
  setError: (payload: string) => void
  clearAuth: () => void
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_STATUS':
      return {
        ...state,
        status: action.payload as Status
      }

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload as string
      }

    case 'SET_USER':
      return {
        ...state,
        user: action.payload as User
      }

    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload as string
      }

    case 'CLEAR':
      return {
        status: 'pending',
        token: null,
        user: null,
        error: null
      }

    default:
      return state
  }
}

export const AuthContext = createContext({} as Context)

export default function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(reducer, {
    status: 'pending',
    token: null,
    user: null,
    error: null
  })

  const setStatus = (payload: Status) => dispatch({
    type: 'SET_STATUS',
    payload
  })

  const setToken = (payload: string) => dispatch({
    type: 'SET_TOKEN',
    payload
  })

  const setUser = (payload: User) => dispatch({
    type: 'SET_USER',
    payload
  })

  const setError = (payload: string) => dispatch({
    type: 'SET_ERROR',
    payload
  })

  const clearAuth = () => dispatch({
    type: 'CLEAR'
  })

  return (
    <AuthContext.Provider value={{
      ...state,
      setStatus,
      setToken,
      setUser,
      setError,
      clearAuth
    }}>
      {children}
    </AuthContext.Provider>
  )
}
