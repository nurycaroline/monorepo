import React, { useCallback } from 'react'
import api, { useFetch } from '@monorepo/api-rest'
import { IRepo } from '@monorepo/interfaces'
import { mutate as mutateGlobal } from 'swr'

interface FecthProps {
  data: IRepo[]
  mutate?: any
}

const App: React.FC = () => {
  const { data, mutate, isValidating } = useFetch<FecthProps>(
    'users/nurycaroline/repos'
  )

  const handleNameChange = useCallback(
    (id: number) => {
      console.log(id)

      api.put(`users/nurycaroline/repos/${id}`, { name: 'Bartolomeu' })
      const updatedUsers = data?.map(repo => {
        if (repo.id === id) {
          return { ...repo, name: 'Bartolomeu' }
        }
        return repo
      })
      mutate(updatedUsers, false)
      mutateGlobal(`users/nurycaroline/repos/${id}`)
    },
    [data, mutate]
  )

  if (!data) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <h1>Listagem dos Repositorios</h1>

      <ul>
        {data.length > 0 &&
          data.map(repo => (
            <li key={repo.id}>
              <h2>{repo.name}</h2>
              <p>{repo.description}</p>

              <button type="button" onClick={() => handleNameChange(repo.id)}>
                Alterar Nome
              </button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default App
