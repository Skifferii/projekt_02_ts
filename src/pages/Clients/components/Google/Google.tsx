import GoBack from "components/GoBack/GoBack";
import { GooglePage, Description, Title } from "./styles";

function Google() {
  return (
    <GooglePage>
      <Title>Google page</Title>
      <Description>Google company description</Description>
      <GoBack />
    </GooglePage>
  )
}

export default Google