import express from 'express'

import { IUser, ICar } from '@monorepo/interfaces'

const routes = express.Router()

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})

routes.get('/user/1', (request, response) => {
  const newUser: IUser = { name: '', age: null, phone: '' }

  newUser.name = 'Nurielly'
  newUser.age = 18
  newUser.phone = '9999999'

  return response.json(newUser)
})

routes.get('/car/1', (request, response) => {
  const newCar: ICar = { model: 'audi', year: 2019, name: 'bla' }

  return response.json(newCar)
})

export default routes
