import React from 'react'

const Portfolio = () => {
    return (
        <div className='Portfolio' id='portfolio'>
            <div className="container">
                <div class="image-gallary">
                    <div class="image-box">
                        <img className='w-100 h-100' src="img/project1.png" alt="" />
                    </div>
                    <div class="image-box">
                        <img className='w-100 h-100' src="img/project2.png" alt="" />
                    </div>
                    <div class="image-box">
                        <img className='w-100 h-100' src="img/project3.png" alt="" />
                    </div>
                    <div class="image-box">
                        <img className='w-100 h-100' src="img/project4.png" alt="" />
                    </div>
                    <div class="image-box">
                        <img className='w-100 h-100' src="img/project5.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio