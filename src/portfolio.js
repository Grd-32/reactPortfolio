import './portfolio.css'
import port_1 from './images/port_1.jpeg'
import port_2 from './images/port_2.png'
import port_3 from './images/port_3.png'

export default function Portfolio() {

    const additionalInfo = () => {
        const messageEl = document.getElementById('extraMessage')
        messageEl.style.backgroundColor = "red"
    }

    return (
        <div className='portfolio'>
            <div className='welcomePort'>
                <div className='portMessage'>
                    <h3>Check out my recent work</h3>
                    <small>designed by DanielF</small>
                    <p>I have been working on a couple of projects recently<br/> and here is a quick preview of them</p>
                    <p>more</p>
                </div>
                <div className='messageImg' onClick={additionalInfo} id="extraMeassage">
                    <img  src={port_1} alt=''/>
                </div>
            </div>
            <div className='portImg'>
                <div className='messageImg'>
                    <img src={port_2} alt=''/>
                </div>
                <div className='messageImg'>
                    <img src={port_3} alt=''/>
                </div>
            </div>
        </div>
    )
}