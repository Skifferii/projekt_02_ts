import { useState, createContext } from "react"

import Section from "../Section/Section"
import { MainCardTitle, MainCardWrapper } from "./styles"
import { UserData } from "./types"

//1. Создаём независимое хранилище - контекст, с помощью функции React createContext
export const MainCardContext = createContext<UserData>({
  firstName: '',
  lastName: '',
  age: null
})

function MainCard() {
  const [userData, setUserData] = useState<UserData>({
    firstName: 'Bart',
    lastName: 'Simpson',
    age: 11
  })

  return (
    //2. Создаём обертку, которая позволит получить значение из контекста в любом компоненте, который будет вложенным в обертку
    // В обертку вкладываем значение, к которому нужно получить доступ (userData)
    <MainCardContext.Provider value={userData}>
      <MainCardWrapper>
        <MainCardTitle>Main Card</MainCardTitle>
        <Section />
      </MainCardWrapper>
    </MainCardContext.Provider>
  )
}

export default MainCard