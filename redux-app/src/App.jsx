import { Provider } from "react-redux"
import store from "./redux/store"
import Counter from "./components/Counter"
import ColorPreview from "./components/ColorPreview"
function App() {
  return (
    <>
      <Provider store={store}>
        <Counter />
        <ColorPreview />
      </Provider>
    </>
  )
}
export default App