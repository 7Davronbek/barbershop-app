import React from 'react'

const Obzor = () => {
    return (
        <div className='Obzor'>
            <div className="blur1"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <h2 className='blog-title'>Обзор курса</h2>
                        <div className="row">
                            <div className="col-lg-4 mb-3 mb-lg-0 p-0">
                                <div className="blog">
                                    <h4>Est natoque montes.</h4>
                                    <div className="line"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum enim sed quis curabitur id enim quisque adipiscing. A aliquet phasellus et auctor hendrerit leo nisi. .</p>
                                </div>
                                <div className="img d-lg-none d-block">
                                <img className='w-100' src="img/obzor1.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4 mb-3 mb-lg-0 p-0">
                                <div className="blog">
                                    <h4>Ac felis accumsan sit duis sed ac.</h4>
                                    <div className="line"></div>
                                    <p>Volutpat varius neque imperdiet blandit. Tellus vel sed ultrices nibh. Purus in in faucibus justo, varius. Montes, pretium tortor nunc enim, amet lectus posuere lacus. In est nibh a dolor nulla. Lectus tincidunt semper malesuada turpis phasellus faucibus donec a blandit. Elementum diam tellus.</p>
                                </div>
                                  <div className="img d-lg-none d-block">
                                <img className='w-100' src="img/obzor2.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4 mb-3 mb-lg-0 p-0">
                                <div className="blog">
                                    <h4>Lectus a sed eu.</h4>
                                    <div className="line"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit faucibus ipsum gravida lectus adipiscing maecenas quis. Sit porttitor velit amet consectetur.</p>
                                </div>
                                  <div className="img d-lg-none d-block">
                                <img className='w-100' src="img/obzor3.png" alt="" />
                                </div>
                            </div>
                            <div className="col-8 d-lg-block d-none">
                                <img className='w-100' src="img/obzor1.png" alt="" />
                            </div>
                            <div className="col-4 d-lg-block d-none">
                                <img className='w-100' src="img/obzor2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Obzor