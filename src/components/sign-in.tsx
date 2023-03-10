import { useState } from "react"

import Input from "./input"
import Title from "./title"
import { useAuth } from "../providers"
import Button from "./button"
//import { config, sfToken, uri } from "../config"
 import {uri,config} from "../config"
export default function SignIn() {
  const { setStatus, setToken, setError } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const details = {
      ...config,
      username,
     // password: password + sfToken
      password
    }

    const formBody = []

    for (const property in details) {
      const encodedKey = encodeURIComponent(property)
      const encodedValue = encodeURIComponent((details as any)[property])
      formBody.push(encodedKey + "=" + encodedValue)
    }

    try {
     /* const response = await fetch(uri, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody.join('&')
      })*/
      const response = await fetch(https://volvocars--cspdev.sandbox.my.site.com/services/oauth2/authorize?client_id=3MVG904d7VkkD2aNZc_uaegI_igPMOKIVx.gVBOBeCoUSNDz23QBExCUD2OxODw5tgXAFOHc4aQ==&redirect_uri=https://mbrandt85.github.io/rp_sf_client/oauth2/callback&response_type=code,
       {method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody.join('&')
       })
      const data = await response.json()

      if (data.error) throw new Error(data.error)

      if (data.access_token) setToken(data.access_token)

      console.log(data)
      //setUser()
      setStatus('done')
    } catch (error) { 
      if ((error as Error).message) setError((error as Error).message)
      setStatus('error')
    }
  }

  return (
    <div style={{
      width: 256,
      margin: '0 auto',
      padding: 16
    }}>
      <Title>Sign in</Title>
      <form onSubmit={handleSubmit}>
        <Input
          label="Username (valid email required)"
          onChange={e => setUsername(e.target.value.trim())}
          style={{
            outline: 'none',
            borderStyle: 'solid',
            borderColor: username.length === 0 
              ? 'black' 
              : !/^\S+@\S+$/.test(username) 
                ? 'red' 
                : 'green'
          }}
          value={username}
        />

        <Input
          label="Password (required)"
          type="password"
          onChange={e => setPassword(e.target.value.trim())}
          style={{
            outline: 'none',
            borderStyle: 'solid',
            borderColor: password.length < 1 
              ? 'black' 
              : 'green'
          }}
          value={password}
        />

        <Button type="submit" disabled={!/^\S+@\S+$/.test(username) || !password}>Sign in</Button>
      </form>
    </div>
  )
}
