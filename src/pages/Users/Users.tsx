import { useNavigate } from "react-router-dom";

import { UsersPage, Title } from "./styles";
import Button from "../../components/Button/Button";


function Users() {
const navigateFunction = useNavigate()

  return (
    <UsersPage>
      <Title>Users page content</Title>
      <Button name='Go to Home page' onButtonClick={()=> navigateFunction('/')}/>
    </UsersPage>
  )
}

export default Users