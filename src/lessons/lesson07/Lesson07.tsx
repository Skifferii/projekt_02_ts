function Lesson07() {

  // 11. Типизация объектов через interface
  interface User {
    name: string
    age?: number | string
  }

  interface User {
    role: string
  }

  const userData: User = {
    name: 'John',
    age: '45',
    role: 'Manager'
  }

  interface Admin extends User {
    isAdmin: boolean
  }

  const adminData: Admin = {
    name: 'Tom',
    role: 'Manager',
    isAdmin: true
  }

  // 12. Типизация через type
  type Weight = string | number

  type Animal = {
    name: string,
    weight: Weight
  }

  // interface Animal {
  //   name: string,
  //   weight: Weight
  // }

  const animal: Animal = {
    name: 'Lion',
    weight: '200'
  }

  type NewAnimal = Animal & { country: string }

  const zebraAnimal: NewAnimal = {
    name: 'Zebra',
    weight: 150,
    country: 'Afrika'
  }

  //13. Generic & Type
  type CustomTupel<T = string> = [number, string, T]

  const arrayMix: CustomTupel<boolean> = [23, 'Bob', true]
  const arrayMix2: CustomTupel<null> = [45, 'Mary', null]
  const arrayMix3: CustomTupel = [30, 'Tom', 'Manager']

  //14.  Generic & Interface
  interface Fruit<T = string> {
    title: string,
    address: T
  }

  const fruit1: Fruit<number> = {
    title: 'Apple',
    address: 29
  }

  const fruit2: Fruit = {
    title: 'Grape',
    address: 'Berlin street ...'
  }

  interface Address {
    country: string
    city: string
    code: number
  }

  const fruit3: Fruit<Address> = {
    title: 'lemon',
    address: {
      country: 'Germany',
      city: 'Berlin',
      code: 29
    }
  }

  //15. enum - тип перечисление (числовое)
  enum Colors {
    Red, Black=90, Green
  }

//16. enum - тип перечисление (строковое)
 enum UserRoles {
  ADMIN = 'Adm',
  USER = 'User',
  GUEST = 'Guest'
 }

 interface UserInt {
  name: string,
  role: UserRoles
 }

 const adminUser: UserInt = {
  name: 'Alex',
  role: UserRoles.ADMIN
 }



  let color: Colors = Colors.Green
  console.log(color)

  return <div>Lesson07 - example ts</div>
}


export default Lesson07