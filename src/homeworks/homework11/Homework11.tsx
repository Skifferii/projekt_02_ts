import { ChangeEvent, useEffect, useState } from "react"
import Input from "../../components/Input/Input"
import { Homework11Component, DogImg } from "./styles"

function Homework11() {
  const [title, setTitle] = useState<string>('')
  const [note, setNote] = useState<string>('Good')
  const [dogImageUrl, setDogImageUrl] = useState<string>('')

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const onNoteChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value)
  }

  const getDogPhoto = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      console.log(response)
      const result = await response.json()
      console.log(result)

      if (!response.ok) {
        //логику ошибки
        throw Object.assign(new Error('API ERROR'), { errorObj: result })
      } else {
        //логику при успешном завершении запроса
        setDogImageUrl(result.message)
      }
    } catch (error) {
      console.log(error)
    } finally {
      console.log('Spinner stop')
    }
  }

  useEffect(() => {
    getDogPhoto()
  }, [title])

  return (
    <Homework11Component>
      <Input
        name='title'
        placeholder="Enter title"
        value={title}
        onChange={onTitleChange}
      />
      <Input
        name='note'
        placeholder="Enter note"
        value={note}
        onChange={onNoteChange}
      />
      <DogImg src={dogImageUrl} alt='random dog' />
    </Homework11Component>
  )
}

export default Homework11