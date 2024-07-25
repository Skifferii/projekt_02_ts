import Content from "../Content/Content"
import { SectionTitle, SectionWrapper } from "./styles"

function Section() {
  return (
    <SectionWrapper>
      <SectionTitle>Section Block</SectionTitle>
      {/* <Content contentData={data}/> */}
      <Content />
    </SectionWrapper>
  )
}

export default Section