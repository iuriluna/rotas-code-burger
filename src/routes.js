import { Router } from 'express'
import { v4 } from 'uuid'

import User from './app/models/User.js'

const routes = new Router()

routes.get('/', async (request, response) => {
  const user = await User.create({
    id: v4(),
    name: 'Iuri',
    email: 'iuri.luna17@gmail.com',
    password_hash: '123487',
  })
  return response.json(user)
})

export default routes
