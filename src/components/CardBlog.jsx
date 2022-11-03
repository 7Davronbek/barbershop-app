import React from 'react'

const CardBlog = () => {
  return (
    <div className='CardBlog'>
        <div className="blur1"></div>
        <div className="path">
            <img className='w-100' src="img/path3.png" alt="" />
        </div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="block">
                        <div className="info">
                            <h2>”</h2>
                            <p>Koloristika - aslida tushunarli va aniq fan . Bu soxada talant va istedod katta axamiyatga ega emas . Aslida qiyin bo’lib ko’ringaniga qaramay - bu soxada xamma jarayonlar -aniq matematik xisob kitobga asoslanadi .</p>
                            <p>O’zingizga ishoning - Xammamizning imkoniyatlarizmiz bir xil - Albatta Siz xam bunga qodirsiz</p>
                            <div className="buy-btn">
                            <a href="/">Купить</a>
                        </div>
                        </div>
                        <div className="img">
                            <img className='w-100 h-100' src="img/card.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardBlog