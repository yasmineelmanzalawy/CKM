import React from 'react'
import './FoodCourt.css'
import pexel from '../data/pexels-chan-walrus-958545.jpg'
import restaurant from '../data/restaurant.png'
import search from '../data/search-interface-symbol.png'


const FoodCourt = () => {
  return (
    <div>

<div class="topnav">
        <p>CKM
        <h1>food court</h1>
        </p>
        <div><img src={search} class="img1" width="10px" height="10px" alt=""/><input type="search"
                name="" id=""/></div>
    </div>
    <div>
        <h1>TRUSTED BY 120 restaurant</h1>
    </div>
    <div class="all_section">
        <div class="contaner1">
            <div class="img_container"> 
                <img src={restaurant} class="img3" alt=""/>
                {/* <img src={pexel} class="img2"
                width="100%" height="100%" alt=""/> */}
            </div>
            <div class="discription" id="discription1">
                <div>
                    <p>kitchen name</p>
                    <p>kitchen description</p>
                    <p>notes</p>
                </div>
            </div>
        </div><br/>
        <div class="contaner1">
            <div class="img_container">
                <img src={restaurant} class="img3" alt=""/>
                {/* <img src={pexel} class="img2"
                width="100%" height="100%" alt=""/> */}
            </div>
            <div class="discription" id="discription2">
                <div>
                    <p>kitchen name</p>
                    <p>kitchen description</p>
                    <p>notes</p>
                </div>
            </div>
        </div><br/>
        <div class="contaner1">
            <div class="img_container">
                <img src={restaurant} class="img3" alt=""/>
                {/* <img src={pexel} class="img2"
                width="100%" height="100%" alt=""/> */}
            </div>
            <div class="discription" id="discription3">
                <div>
                    <p>kitchen name</p>
                    <p>kitchen description</p>
                    <p>notes</p>
                </div>
            </div>
        </div><br/>
        <div class="contaner1">
            <div class="img_container">
                <img src={restaurant} class="img3" alt=""/>
                {/* <img src={pexel} class="img2"
                width="100%" height="100%" alt=""/> */}
            </div>
            <div class="discription" id="discription4">
                <div>
                    <p>kitchen name</p>
                    <p>kitchen description</p>
                    <p>notes</p>
                </div>
            </div>
        </div><br/>
        <div class="contaner1">
            <div class="img_container">
                <img src={restaurant} class="img3" alt=""/>
                {/* <img src={pexel} class="img2"
                width="100%" height="100%" alt=""/> */}
            </div>
            <div class="discription" id="discription5">
                <div>
                    <p>kitchen name</p>
                    <p>kitchen description</p>
                    <p>notes</p>
                </div>
            </div>
        </div><br/>
        <div class="contaner1">
            <div class="img_container">
                <img src={restaurant} class="img3" alt=""/>
                {/* <img src={pexel} class="img2"
                width="100%" height="100%" alt=""/> */}
            </div>
            <div class="discription" id="discription6">
                <div>
                    <p>kitchen name</p>
                    <p>kitchen description</p>
                    <p>notes</p>
                </div>
            </div>
        </div><br/>
        </div><br/>
        <div class="slider">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>...</p>
        </div>

    </div>
  )
}

export default FoodCourt