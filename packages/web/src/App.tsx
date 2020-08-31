import React, { useEffect, useState } from 'react'
import api from '@monorepo/axios-config'
import { IUser, ICar } from '@monorepo/interfaces'

const App: React.FC = () => {
  const [user, setUser] = useState<IUser>()
  const [car, setCar] = useState<ICar>()

  useEffect(() => {
    const loadUser = async () => {
      await api.get('/user/1').then(response => {
        setUser(response.data)
      })
    }

    const loadCar = async () => {
      await api.get('/car/1').then(response => {
        setCar(response.data)
      })
    }

    loadUser()
    loadCar()
  }, [])

  return (
    <h1>
      Hello World, {user.name} - {car.name}
    </h1>
  )
}

export default App
