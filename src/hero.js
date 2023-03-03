import Header from './header'
import Social from './social'
import './hero.css'


export default function Hero() {
    return (
        <div className='heroContainer'>
            <Header />
            <div className='heroContent'>
                <div className='heroFrame'>
                <Social />
                <div className='texts'>
                    <h1>Hello!<span class="wave">👋</span> Daniel here...</h1>
                    <h3>I am a full software with great passion for React JS as my weapon of choice for front end with it's back end reinforced with Node JS</h3>
                    <button>view resume</button>
                </div>
                
            </div>
                
            </div>
        </div>
        
    )
}