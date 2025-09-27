import { Provider } from "react-redux"
import store from "./redux-toolkit/store"
import Users from "./components/Users"
// import store from "./redux/store"
// import Counter from "./components/Counter"
// import ColorPreview from "./components/ColorPreview"
// import Counter1 from "./components/Counter1"
// import store from "./redux-toolkit/store"
// import Counter2 from "./components/Counter2"
// import Counter3 from "./components/Counter3"
function App() {
  return (
    <>
      {/* <Provider store={store}>
        <Counter />
        <ColorPreview />
      </Provider> */}
      {/* <Provider store={store}>
        <Counter1 />
      </Provider> */}
      {/* <Counter2 />
      <Counter3 /> */}
      <Provider store={store}>
        <Users />
      </Provider>
    </>
  )
}
export default App