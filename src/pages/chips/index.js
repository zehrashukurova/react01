import { useState } from "react"
import chips from '../../image/Chips.png'
import './chips.css'

export default function Chips(){
    const [count,setCount]=useState(0)
    const [sekiller, setSekiller] = useState([])

    const addClick=()=>{
        setCount(count+1)
        var randomX = Math.floor(Math.random() * window.innerWidth); 
        var randomY = Math.floor(Math.random() * window.innerHeight); 

        var sekil = <img key={count} src={chips} style={{position: "absolute", top: `${randomY}px`, left: `${randomX}px`}} ></img>
        setSekiller([...sekiller, sekil])
    }
    return <>
    <div className="chipsList">
        <p>BAGS EATEN:{count}</p>
        <button onClick={addClick}>NOM  NOM NOM</button>
        <a href="/">GO BACK</a>
    </div>
    <div className="cipsiler">
        {
            sekiller.map( index => index)
        }
    </div>
    </>
}