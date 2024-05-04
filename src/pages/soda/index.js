import sodaImg from '../../image/Soda.png'
import './soda.css'
export default function Soda(){
    return <>
    <div className='sodaList'>
        <img src={sodaImg}/>
        <div className='sugarcard'>
            <p>OMG SUGARRR</p>
            <a href='/'>GO BACK</a>
        </div>
        <img src={sodaImg}/>
    </div>
    
    
    </>
}