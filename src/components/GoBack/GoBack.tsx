import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button"
import { GoBackButtonWrapper } from "./styles"

function GoBack() {
  const navigate = useNavigate();

  return (
    <GoBackButtonWrapper>
      <Button name='Go Back' onButtonClick={() => navigate(-1)} />
    </GoBackButtonWrapper>
  )
}

export default GoBack