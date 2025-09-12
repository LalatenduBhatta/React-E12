import Comp1 from "./Comp1"
import Comp11 from "./Comp11"
import { NumContextWarrper } from "./context/NumberContext"

function App() {
  return (
    <>
      <NumContextWarrper>
        <Comp1 />
        <Comp11 />
      </NumContextWarrper>
    </>
  )
}
export default App