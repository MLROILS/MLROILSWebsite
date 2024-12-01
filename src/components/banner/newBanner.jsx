import React , {useState} from 'react';
import PropTypes from 'prop-types';

import {  Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import img1 from '../../assets/images/slider/slider-8.png'
import img2 from '../../assets/images/slider/slider-9.png'
import img3 from '../../assets/images/slider/slider-10.png'
import img4 from '../../assets/images/slider/slider-11.png'
import { Link } from 'react-router-dom';


import logo from '../../assets/images/author/mlr-oils-no-bg.png'

Banner05.propTypes = {
    
};

function Banner05(props) {
    const {data} = props;

    const [modalShow, setModalShow] = useState(false);

    const walink = "https://wa.me/+919494264064";
    return (
        <section className="tf-slider">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                        <Swiper
                            modules={[  Scrollbar, A11y ]}
                            spaceBetween={0}
                            slidesPerView={1}
                            className="slider-home"
                        >
                        {
                            data.map(idx => (
                                <SwiperSlide key={idx.id}>
                                    <div class="slider-item">
                                        <div class="tf-slider-item style-5" style={{paddingTop:120}}>
                                            <div class="content-inner">
                                                <img src={logo} alt="MLR OILS" height={200} width={200}/>
                                                <img src={img1} alt="Binasea" class="img-star star-1 ani4" />
                                                <img src={img2} alt="Binasea" class="img-star star-2 ani5" />
                                                <img src={img3} alt="Binasea" class="img-star star-3 ani4" />
                                                <img src={img4} alt="Binasea" class="img-star star-4 ani5" />
                                                <h1 class="heading">
                                                    <span>MLR</span> OILS
                                                </h1>
                                                <p class="sub-heading">Get unadulterated products Anytime<br/>
                                                Be healthy and wealthy</p>
                                                <div class="btn-slider ">
                                                    {/* <Link to="/explore-v1" class="tf-button">Explore now </Link> */}
                                                    <a href={walink} target='blank' class="tf-button style-2">Products</a>
                                                </div>
                                            </div>
                                            {/* <div class="image">
                                                <div class="img-slider"><img src={img5} alt="Binasea" /></div>
                                            
                                                <div class="swiper-container slider-card-product">
                                                    <div class="swiper-wrapper">
                                                        <div class="swiper-slide">
                                                            <div class="card-product">
                                                                <h4>Banana #2442</h4>
                                                                <p class="cate">Limitted Edittion</p>
                                                                <div class="infor-author">
                                                                    <img src={avt} alt="Binasea" />
                                                                    <div class="infor">
                                                                        <p>creator</p>
                                                                        <h6 class="name">@Grient Phahn</h6>
                                                                    </div>
                                                                </div>
                                                                <div class="infor-price">
                                                                    <div class="curent-bid">
                                                                        <p>Current Bid</p>
                                                                        <div class="price">
                                                                            <div class="icon"><i class="fab fa-ethereum"></i></div>
                                                                            <p>5 ETH</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="countdown style-4">
                                                                        <p>Audition end in</p>
                                                                        <span class="js-countdown " data-timer="55555" data-labels=" , :, : ,  "></span>
                                                                    </div>
                                                                </div>
                                                                <div class="btn-button">
                                                                    <Link to="#" onClick={() => setModalShow(true)}  data-toggle="modal" data-target="#popup_bid" class="tf-button style-2">Place bid </Link>
                                                                    <Link to="/item-details-v1" class="tf-button style-3">View Details</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    </div>
                                                
                                            </div> */}
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                            ))
                        }
                    </Swiper>
                        </div>
                    </div>
                </div>

            </section>
    );
}

export default Banner05;