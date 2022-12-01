import { Route, Routes } from "react-router-dom"
import Counter from "./components/Counter"

const App = () => {
  return (<>
  <h1>리액트 홈</h1>
  <Routes>
  <Route exact path="/" element ={<Counter/>}></Route>
  </Routes></>)
}

export default App