import { ResultBlockComponent } from "./styles"
import { ResultBlockProps } from "./types"

function ResultBlock({resultName, result}: ResultBlockProps) {
 const text: string = `Result ${resultName} - ${result}`

  return <ResultBlockComponent>{text}</ResultBlockComponent>
}

export default ResultBlock