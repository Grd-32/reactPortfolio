import "./frontend.css"
import frontendTwo from "./images/frontendTwo.jpg"
import backend2 from "./images/backend2.jpg"

export default function Frontend() {
    return (
        <div className="webDev">
        <div className="frontEnd">
            <div className="frontend-img">
                <img src={frontendTwo} alt="frontend"/>
            </div>
            <div className="frontend-content">
                <h3>Frontend Development</h3>
                <div className="subTitle">
                    <small>React JS</small>
                    <small>Css tailwing</small>
                </div>
                <p>This is the section where visual creativity is put to display. Therefore what best to create best UIs than React JS? I use React JS and CSS tailwind to yield modern User Interfaces</p>
            </div>
        </div>
        <div className="backEnd">
            <div className="frontend-content">
                <h3>Backend Development</h3>
                <div className="subTitle">
                    <small>Node JS</small>
                    <small>MongoDB</small>
                </div>
                <p>This is the section where visual creativity is put to display. Therefore what best to create best UIs than React JS? I use React JS and CSS tailwind to yield modern User Interfaces</p>
            </div>
            <div className="frontend-img">
                <img src={backend2} alt="backend"/>
            </div>
        </div>
        </div>
    )
}