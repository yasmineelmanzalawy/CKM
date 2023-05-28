import React from 'react'
import Swiper from 'swiper';
import './Kitchensckm.css';
import img1 from '../data/Image(1).png'
import img2 from '../data/Image(2).png'
import img3 from '../data/Image(3).png'
import img4 from '../data/Image(4).png'
import img5 from '../data/Image(5).png'
import img6 from '../data/Image(6).png'
import img8 from '../data/Image(8).png'
import img9 from '../data/Image(9).png'
import img10 from '../data/Image(10).png'
import img11 from '../data/Image(11).png'
import img7 from '../data/Image(7).png'
import img22 from '../data/image22.png'
import header from '../data/header.jpg'

const Kitchensckm = () => {

  var swiperContainers = document.querySelectorAll(".swiper");

  swiperContainers.forEach(function (container) {
      var swiper = new Swiper(container, {
          loop: true,
          speed: 700,
          pagination: {
              el: container.querySelector(".swiper-pagination"),
          },
          scrollbar: {
              el: container.querySelector(".swiper-scrollbar"),
          },
          navigation: {
              nextEl: container.querySelector(".swiper-button-next"),
              prevEl: container.querySelector(".swiper-button-prev"),
          },
          breakpoints: {
              320: {
                  slidesPerView: 2,
                  spaceBetween: 20,
              },
              480: {
                  slidesPerView: 2,
                  spaceBetween: 20,
              },
              640: {
                  slidesPerView: 5,
                  spaceBetween: 10,
              },
          },
      });
  });


  return (
    <div>
       <header>
        <img src={img22} alt="" class="icon"/>
        <h1>People who love to eat are always the best people.</h1>
        <div class="ico">

            <i class="fa-solid fa-cart-shopping"></i>
            <button>Explore our Menu</button>
            <div class="stgro">
                <i class="fa-solid fa-star l"></i>
                <i class="fa-solid fa-star l"></i>
                <i class="fa-solid fa-star l"></i>
                <i class="fa-solid fa-star l"></i>
                <i class="fa-regular fa-star"></i>
            </div>
        </div>
    </header>

<main>
        <h1 class="main-title">Best Seller</h1>
        <div class="best">


            <div class="card">

                <img src={img1} alt="./image/Image(6).png" />
                <p>Dessert </p>
                <div class="pr">
                    <p>250LE</p>
                    <button>Order Now</button>
                </div>
            </div>
            <div class="card">

                <img src={img2} alt="./image/Image(2).png" />
                <p>Dessert </p>
                <div class="pr">
                    <p>250LE</p>
                    <button>Order Now</button>
                </div>
            </div>
            <div class="card">

                <img src={img3} alt="./image/Image(3).png" />
                <p>Dessert </p>
                <div class="pr">
                    <p>250LE</p>
                    <button>Order Now</button>
                </div>
            </div>
            <div class="card">

                <img src={img1} alt="./image/Image(1).png" />
                <p>Dessert </p>
                <div class="pr">
                    <p>250LE</p>
                    <button>Order Now</button>
                </div>
            </div>
        </div>


    </main>
    <main>
        <h1 class="main-title">main dishes</h1>

        <div class="swiper" className="background-color: transparent">
            {/* <!-- Additional required wrapper --> */}
            <div class="swiper-wrapper">
                {/* <!-- Slides --> */}
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img1} alt="./image/Image(1).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img8} alt="./image/Image(8).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img7} alt="./image/Image(7).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img2} alt="./image/Image(2).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img3} alt="./image/Image(3).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img4} alt="./image/Image(4).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img5} alt="./image/Image(5).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img6} alt="./image/Image(6).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img7} alt="./image/Image(7).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img8} alt="./image/Image(8).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img10} alt="./image/Image(10).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img9} alt="./image/Image(9).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-button-prev">

                <i class="fa-solid fa-chevron-left le"></i>
                <i class="fa-solid fa-chevron-left"></i>

            </div>
            <div class="swiper-button-next">
                <i class="fa-solid fa-chevron-right"></i>
                <i class="fa-solid fa-chevron-right ri"></i>

            </div>
            <div class="swiper-pagination"></div>
        </div>
    </main>

    <main>
        <h1 class="main-title">pizza</h1>

        <div class="swiper" className="background-color: transparent">
            {/* <!-- Additional required wrapper --> */}
            <div class="swiper-wrapper">
                {/* <!-- Slides --> */}
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img1} alt="./image/Image(1).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img8} alt="./image/Image(8).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img7} alt="./image/Image(7).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img2} alt="./image/Image(2).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img3} alt="./image/Image(3).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img4} alt="./image/Image(4).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img5} alt="./image/Image(5).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img6} alt="./image/Image(6).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img7} alt="./image/Image(7).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img8} alt="./image/Image(8).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img10} alt="./image/Image(10).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img9} alt="./image/Image(9).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-button-prev">

                <i class="fa-solid fa-chevron-left le"></i>
                <i class="fa-solid fa-chevron-left"></i>

            </div>
            <div class="swiper-button-next">
                <i class="fa-solid fa-chevron-right"></i>
                <i class="fa-solid fa-chevron-right ri"></i>

            </div>
            <div class="swiper-pagination"></div>
        </div>
    </main>

    <main>
        <h1 class="main-title">pasta</h1>

        <div class="swiper" className="background-color: transparent">
            {/* <!-- Additional required wrapper --> */}
            <div class="swiper-wrapper">
                {/* <!-- Slides --> */}
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img1} alt="./image/Image(1).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img8} alt="./image/Image(8).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img7} alt="./image/Image(7).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img2} alt="./image/Image(2).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img3} alt="./image/Image(3).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img4} alt="./image/Image(4).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img5} alt="./image/Image(5).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img6} alt="./image/Image(6).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img7} alt="./image/Image(7).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img8} alt="./image/Image(8).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img10} alt="./image/Image(10).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img9} alt="./image/Image(9).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-button-prev">

                <i class="fa-solid fa-chevron-left le"></i>
                <i class="fa-solid fa-chevron-left"></i>

            </div>
            <div class="swiper-button-next">
                <i class="fa-solid fa-chevron-right"></i>
                <i class="fa-solid fa-chevron-right ri"></i>

            </div>
            <div class="swiper-pagination"></div>
        </div>
    </main>


    <main>
        <h1 class="main-title">sandwiches</h1>

        <div class="swiper" className="background-color: transparent">
            {/* <!-- Additional required wrapper --> */}
            <div class="swiper-wrapper">
                {/* <!-- Slides --> */}
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img1} alt="./image/Image(1).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img8} alt="./image/Image(8).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img7} alt="./image/Image(7).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img2} alt="./image/Image(2).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img3} alt="./image/Image(3).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img4} alt="./image/Image(4).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img5} alt="./image/Image(5).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src="./image/Image(6).png" alt="./image/Image(6).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img7} alt="./image/Image(7).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img8} alt="./image/Image(8).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img10} alt="./image/Image(10).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img9} alt="./image/Image(9).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-button-prev">

                <i class="fa-solid fa-chevron-left le"></i>
                <i class="fa-solid fa-chevron-left"></i>

            </div>
            <div class="swiper-button-next">
                <i class="fa-solid fa-chevron-right"></i>
                <i class="fa-solid fa-chevron-right ri"></i>

            </div>
            <div class="swiper-pagination"></div>
        </div>
    </main>

    <main>
        <h1 class="main-title">destert</h1>

        <div class="swiper" className="background-color: transparent">
            {/* <!-- Additional required wrapper --> */}
            <div class="swiper-wrapper">
                {/* <!-- Slides --> */}
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img1} alt="./image/Image(1).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img8} alt="./image/Image(8).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img7} alt="./image/Image(7).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img2} alt="./image/Image(2).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img3} alt="./image/Image(3).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img4} alt="./image/Image(4).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img5} alt="./image/Image(5).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img6} alt="./image/Image(6).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img7} alt="./image/Image(7).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img8} alt="./image/Image(8).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img10} alt="./image/Image(10).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img9} alt="./image/Image(9).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-button-prev">

                <i class="fa-solid fa-chevron-left le"></i>
                <i class="fa-solid fa-chevron-left"></i>

            </div>
            <div class="swiper-button-next">
                <i class="fa-solid fa-chevron-right"></i>
                <i class="fa-solid fa-chevron-right ri"></i>

            </div>
            <div class="swiper-pagination"></div>
        </div>
    </main>

    <main>
        <h1 class="main-title">hot drinks</h1>

        <div  className="background-color: transparent">{Swiper}
            {/* <!-- Additional required wrapper --> */}
            <div class="swiper-wrapper">
                {/* <!-- Slides --> */}
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img1} alt="./image/Image(1).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img8} alt="./image/Image(8).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img7} alt="./image/Image(7).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img2} alt="./image/Image(2).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img3} alt="./image/Image(3).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img4} alt="./image/Image(4).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img5} alt="./image/Image(5).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img6} alt="./image/Image(6).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img7} alt="./image/Image(7).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img8} alt="./image/Image(8).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img10} alt="./image/Image(10).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img9} alt="./image/Image(9).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-button-prev">

                <i class="fa-solid fa-chevron-left le"></i>
                <i class="fa-solid fa-chevron-left"></i>

            </div>
            <div class="swiper-button-next">
                <i class="fa-solid fa-chevron-right"></i>
                <i class="fa-solid fa-chevron-right ri"></i>

            </div>
            <div class="swiper-pagination"></div>
        </div>
    </main>
    <main>
        <h1 class="main-title">Gold drinks</h1>

        <div class="swiper" className="background-color: transparent">
            {/* <!-- Additional required wrapper --> */}
            <div class="swiper-wrapper">
                {/* <!-- Slides --> */}
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img1} alt="./image/Image(1).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img8} alt="./image/Image(8).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img7} alt="./image/Image(7).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img2} alt="./image/Image(2).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img3} alt="./image/Image(3).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img4} alt="./image/Image(4).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img5} alt="./image/Image(5).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img6} alt="./image/Image(6).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img7} alt="./image/Image(7).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img8} alt="./image/Image(8).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img10} alt="./image/Image(10).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="card">

                        <img src={img9} alt="./image/Image(9).png" />
                        <p>Dessert </p>
                        <div class="pr">
                            <p>250LE</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-button-prev">

                <i class="fa-solid fa-chevron-left le"></i>
                <i class="fa-solid fa-chevron-left"></i>

            </div>
            <div class="swiper-button-next">
                <i class="fa-solid fa-chevron-right"></i>
                <i class="fa-solid fa-chevron-right ri"></i>

            </div>
            <div class="swiper-pagination"></div>
        </div>
    </main>

    
   
    </div>
  )
}

export default Kitchensckm