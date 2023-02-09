import { useContext } from 'react'

import AuthProvider, { AuthContext } from './auth'

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export const useAuth = () => useContext(AuthContext)