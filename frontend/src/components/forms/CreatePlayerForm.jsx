import { useState } from 'react'
import Input from './inputs/Input'
import Select from './inputs/Select'
import { playerClasses } from '../../config/constants'
import Button from '../button'
import { generatePlayer } from '../../api/aiBridge'
import { toast } from 'react-toastify'
import { strapiCreatePlayer } from '../../api/strapi'
import { useAuth } from './contexts/AuthContext'

function CreatePlayerForm () {
  const { state: { user } } = useAuth()
  const [playerData, setPlayerData] = useState({
    name: '',
    class: 'bard',
    description: null
  })

  const handleChangeClass = (e) => {
    setPlayerData({ ...playerData, class: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const player = await generatePlayer(playerData)
      setPlayerData({
        ...playerData,
        name: player.name,
        description: player.description
      })
    } catch (error) {
      console.error(error)
      toast.error(error)
    }
  }

  const handleSavePlayer = async () => {
    try {
      const result = await strapiCreatePlayer({
        ...playerData,
        name: playerData.name,
        user: user.id,
        description: playerData.description,
        class: playerData.class
      })
      toast.success('Personnage créé !')
      return result
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 justify-center items-center'
      >
        <Input
          type='text'
          value={playerData.name}
          label='Nom'
          onChangeText={(text) => setPlayerData({ ...playerData, name: text })}
        />
        <Select
          options={playerClasses}
          value={playerData.class}
          label='Classe du personnage'
          onChange={handleChangeClass}
        />
        {playerData.description && (
          <textarea className='w-2xl h-60'>
            {playerData.description}
          </textarea>
        )}
        <Button
          type='submit'
        >
          Générer le personnage
        </Button>
      </form>
      {playerData.description && (
        <Button
          onClick={handleSavePlayer}
        >
          Sauvegarder mon personnage
        </Button>
      )}
    </>
  )
}

export default CreatePlayerForm
