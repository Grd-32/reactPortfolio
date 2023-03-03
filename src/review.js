// import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";  //requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./review.css"


export default function Reviews(props) {
    // props destructuring

    return (
        // props maps method
        <Carousel className="reviewCon">
            <div className="reviews">
                <div className="reviewHeader">
                    <div className="intro-img">
                        <img src="" alt=""/>
                    </div>
                    <div className="intro-details">
                        <h3>John Doe</h3>
                        <small>Software engineer</small>
                    </div>
                </div>
                <div className="reviewContent">
                    <p>He is a tech enthusiast with great skills. I have seen his work up close and all i can say is i was satisfied</p>
                </div>
            </div>
            <div className="reviews">
                <div className="reviewHeader">
                    <div className="intro-img">
                        <img src="" alt=""/>
                    </div>
                    <div className="intro-details">
                        <h3>Jill Rose</h3>
                        <small>Software engineer</small>
                    </div>
                </div>
                <div className="reviewContent">
                    <p>He is a tech enthusiast with great skills. I have seen his work up close and all i can say is i was satisfied</p>
                </div>
            </div>
            <div className="reviews">
                <div className="reviewHeader">
                    <div className="intro-img">
                        <img src="" alt=""/>
                    </div>
                    <div className="intro-details">
                        <h3>Jack Davies</h3>
                        <small>Software engineer</small>
                    </div>
                </div>
                <div className="reviewContent">
                    <p>He is a tech enthusiast with great skills. I have seen his work up close and all i can say is i was satisfied</p>
                </div>
            </div>

        </Carousel>
        
    )
}