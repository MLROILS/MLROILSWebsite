import React from 'react';
import { Link } from 'react-router-dom';



function Page404(props) {
    return (
        <>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'60svh',rowGap:'100px'}}>
                <h1>404 Page Not Found</h1>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <h4>Go Back To </h4> &nbsp;&nbsp;&nbsp;
                    <Link to='/' 
                    class="tf-button style-2"
                    >home</Link>
                </div>
            </div>
        </>
    );
}

export default Page404;