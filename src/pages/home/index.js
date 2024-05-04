import './home.css'
import homeImage from '../../image/VendingMachine.png'
export default  function Home(){
    return <>
    <div className="home">
            <div className='cards'>
            <div className='intro card'>HELLO I AM A VENDING MACHINE.WHAT WOULD YOU LIKE TO EAT?</div>
            <div className='list card'>
                <a href='/soda'>Soda</a>
                <a href='/chips'>Chips</a>
                <a href='/sardines'>Fresh Sardines</a>

            </div>
    </div>
    </div>
    </>
}