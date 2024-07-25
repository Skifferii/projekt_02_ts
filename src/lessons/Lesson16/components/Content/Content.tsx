import { useContext } from 'react'

import { ContentComponent, DataItem } from "./styles"
import { MainCardContext } from '../MainCard/MainCard'

function Content() {
  //3. Вызываем хук useContext, в который мы передаём контекст из которого нужно получить данные. 
  //При вызове хука данный возвращаются и мы сохраняем их в переменную
  const contentData = useContext(MainCardContext)

  return (
    <ContentComponent>
      <DataItem>First Name: {contentData.firstName}</DataItem>
      <DataItem>Last Name: {contentData.lastName}</DataItem>
      <DataItem>Age: {contentData.age}</DataItem>
    </ContentComponent>
  )
}

export default Content