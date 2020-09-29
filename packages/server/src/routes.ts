import express from 'express'

import { IRepo } from '@monorepo/interfaces'

const routes = express.Router()

let repos: IRepo[] = [
  {
    id: 1,
    name: 'AAA',
    description: 'aaa'
  },
  {
    id: 2,
    name: 'BBB',
    description: 'bbb'
  },
  {
    id: 3,
    name: 'CCC',
    description: 'ccc'
  }
]

routes.get('/', (_, response) => {
  return response.json({ message: 'Hello World' })
})

routes.get('/users/:username/repos', (_, response) => {
  return response.send(repos)
})

routes.post('/users/:username/repos', (request, response) => {
  const { name, description } = request.body

  const newRepo = { id: repos.length + 2, name, description }

  repos.push(newRepo)

  return response.json(newRepo)
})

routes.put('/users/:username/repos/:id', (request, response) => {
  const { id } = request.params

  const newRepos = repos.map(repo => {
    if (repo.id === parseInt(id)) {
      return { ...repo, name: 'Bartolomeu' }
    }

    return repo
  })

  repos = newRepos

  return response.json(newRepos)
})

export default routes
