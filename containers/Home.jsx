import { Route, Routes } from "react-router-dom"
import {Counter, 
    Navigation, Footer, TodoInput} from '../components' //구조분해할당 객체로 만듦

const Home = () => {
    return (<>
    <table style={{ width: "1200px", height: "550px", margin: "0 auto", border: "1px solid black"}}>
        <thead>
            <tr columns="3" >
        <td style={{ width: "100%", border: "1px solid black"}}>
            <h3>스케줄러</h3>
        <Navigation/>
        </td>
        </tr>
        </thead>
        <tbody>

        
        <tr style={{ width: "20%",height: "80%",  border: "1px solid black"}}>
            <td style={{ width: "100%", border: "1px solid black"}}>
            <Routes>
            <Route path="/counter" element={<Counter/>}></Route>
            <Route path="/todos/*" element={<TodoInput/>}></Route>
            </Routes>
            </td>
        </tr>
        <tr style={{ width: "100%", height: "20%", border: "1px solid black"}}>
            <td style={{ width: "100%", border: "1px solid black"}}>
            <Footer/>
            </td>
        </tr>
        </tbody>
    </table>
    </>)
}
export default Home