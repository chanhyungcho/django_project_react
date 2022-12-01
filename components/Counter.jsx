import { useState } from "react"

const Counter = () => {
    const[count, setCount] = useState(0)
    return(<>
    <h3>카운터</h3>
    <div>클릭한 횟수: {count}</div>
    <button onClick ={() => {setCount(count + 1)}}>
    +클릭버튼
    </button>
    <button onClick ={() => {setCount(count - 1)}}>
    -클릭버튼
    </button>  
    </>)
}

 export default Counter
