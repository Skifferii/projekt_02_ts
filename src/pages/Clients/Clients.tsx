import { ClientsPage, Title, StyledLink } from "./styles"

function Clients() {
  return (
    <ClientsPage>
      <Title>Clients</Title>
      <StyledLink to='amazon'>Amazon</StyledLink>
      <StyledLink to='facebook'>Facebook</StyledLink>
      <StyledLink to='google'>Google</StyledLink>
    </ClientsPage>
  )
}

export default Clients