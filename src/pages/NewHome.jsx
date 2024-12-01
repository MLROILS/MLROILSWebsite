import React from 'react'

import Banner05 from '../components/banner/newBanner'
import dataBanner from '../assets/fake-data/newDataBanner'
import LiveAuction4 from '../components/liveautions/newLiceAuction'
import dataLiveaution from '../assets/fake-data/newDataLiveaution'


const NewHome = () => {
    return (
        <div className="home-5">
            <div id='page'>
                <Banner05 data={dataBanner}/>

                <LiveAuction4 data={dataLiveaution} />
            </div>
        </div>
    )
}

export default NewHome