import React , {useState} from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../components/pagetitle/PageTitle';
import { Link } from 'react-router-dom';

// import avt1 from '../assets/images/author/author-detail-3.png'
import avt1 from '../assets/images/author/mlr-oils-no-bg-new.png'


import dataLiveaution from '../assets/fake-data/newDataLiveaution';

import { useParams } from 'react-router-dom';

ItemDetails03.propTypes = {
    
};

function ItemDetails03(props) {
    const { id } = useParams();
    console.log(id);
    const [modalShow, setModalShow] = useState(false);
    const walink = "https://wa.me/+919494264064";



    // const [tabDetails] = useState([
    //     {
    //         id: 1,
    //         heading : 'Current Owner',
    //         avt: avtd1,
    //         name: 'Surrogatess'

    //     },
    //     {
    //         id: 2,
    //         heading : 'Creator',
    //         avt: avtd2,
    //         name: 'Truman Wallaker'
    //     }
    // ])

    // const [tabBid] = useState([
    //     {
    //         id: 1,
    //         avt: avtd3,
    //         price: '1.35 ETH',
    //         name: 'carlisle',
    //         time : '3/26/2022, 7:28 AM'
    //     },
    //     {
    //         id: 2,
    //         avt: avtd4,
    //         price: '1.35 ETH',
    //         name: 'carlisle',
    //         time : '3/26/2022, 7:28 AM'
    //     },
    //     {
    //         id: 3,
    //         avt: avtd5,
    //         price: '1.35 ETH',
    //         name: 'carlisle',
    //         time : '3/26/2022, 7:28 AM'
    //     },
    //     {
    //         id: 4,
    //         avt: avtd3,
    //         price: '1.35 ETH',
    //         name: 'carlisle',
    //         time : '3/26/2022, 7:28 AM'
    //     },
    //     {
    //         id: 5,
    //         avt: avtd4,
    //         price: '1.35 ETH',
    //         name: 'carlisle',
    //         time : '3/26/2022, 7:28 AM'
    //     },
    //     {
    //         id: 6,
    //         avt: avtd5,
    //         price: '1.35 ETH',
    //         name: 'carlisle',
    //         time : '3/26/2022, 7:28 AM'
    //     },
       

    // ])

    // const [tabHistory] = useState([
    //     {
    //         id: 1,
    //         name : 'Mason Woodward',
    //         avt: avtd6,

    //     },
    //     {
    //         id: 2,
    //         name : 'Violet Pascall ',
    //         avt: avtd7,

    //     },
    //     {
    //         id: 3,
    //         name : 'Camilla Hudson ',
    //         avt: avtd6,

    //     },
    //     {
    //         id: 4,
    //         name : 'Derick Reed ',
    //         avt: avtd7,

    //     },
    //     {
    //         id: 5,
    //         name : 'Mason Woodward',
    //         avt: avtd6,

    //     },

    // ])
    return (
        <div>

            <PageTitle sub='Explore' title='Item Details' />

            {dataLiveaution.map((item , index) => (
                item.id == id ? 
                <section className="tf-item-detail">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-item-detail-inner style-2">
                                <div className="image">
                                    <img src={item.img} alt={`${item.title}`} height={400} width={400}/>
                                </div>
                                <div className="content">
                                    <div className="content-top">
                                        <div className="author">
                                            <img src={avt1} alt="MLR OILS" />
                                            <h6 className="title">MLR OILS</h6>
                                        </div>
                                        <div className="wishlish">
                                            <div className="wishlish"><i className="fas fa-heart"></i></div>
                                            
                                        </div>
                                    </div>
                                    <h2 className="title-detail">{item.title}</h2>
                                    <p className="except">{item.productDescription}</p>
                                    
                                    
                                    <div className="content-bottom">
                                        <div className="heading">
                                            <h6>Place your Order Now</h6>
                                        </div>
                                        <center>
                                            <div className="button">
                                                <a href={walink} target="_blank" className="tf-button">Order Now</a>
                                            </div>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> : ""))}

            
        </div>
    );
}

export default ItemDetails03;