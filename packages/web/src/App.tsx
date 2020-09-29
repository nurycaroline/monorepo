import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'

import { mutate as mutateGlobal } from 'swr'

import api, { useFetch } from '@monorepo/api-rest'
import { IRepo } from '@monorepo/interfaces'

import Input from './components/input'
import Select from './components/select'

const App: React.FC = () => {
  const { data, mutate } = useFetch<IRepo[]>('users/nurycaroline/repos')

  const { register, handleSubmit, watch, errors } = useForm<IRepo>()
  console.log(watch('name'))

  const onSubmit = (inputs: IRepo) => {
    console.log({ inputs })
    api.post(`users/nurycaroline/repos`, {
      name: inputs.name,
      description: inputs.description
    })
    mutate([...data, inputs], false)
    mutateGlobal(`users/nurycaroline/repos/$d}`)
  }

  const handleNameChange = useCallback(
    (id: number) => {
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

  console.log(errors)

  return (
    <div>
      <h1>Listagem dos Repositorios</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Name" name="name" ref={register({ required: true })} />
        {errors.name && <span>This field is required</span>}

        <Input label="Description" name="description" ref={register} />

        <Select label="Type" ref={register({ required: true })} />

        <button type="submit">Adicionar</button>
      </form>

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
