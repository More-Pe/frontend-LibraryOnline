import React from 'react'
import { useState } from 'react'

export const Header = () => {

    const [isLogged, setIsLogged] = useState(false)

  return (
    <>
    {
    isLogged
    ? "logged"
    : "header"
    }
    </>
  )
}
