import React from 'react'

const Header = () => {
    return (
        <div className='Header'>
            <div className="path">
                <img src="img/path.png" alt="" />
            </div>
            <div className="blur1"></div>
            <div className="blur2"></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="info">
                            <h2>Salom! Men Sherzod Abdullaev</h2>
                            <p>Koloristika yo’nalishini 12 oy ichida o’rgandim va shu soxada 12 oy ichida katta yutuqlarga erishdim ! Shu qisqa vaqt ishida taniqli media shaxsga aylandim . Mijozlar va muxlislarim juda xam ko’paydi. Xozirda qabulimga yozilish uchun 2 oy kutish kerak - bu esa aqlga sig’maydigan natija</p>
                            <p>Ushbu so’zlarni eslab qoling va amal qiling - shunda Albatta Yuqori Natijaga Erishasiz!</p>
                            <div className="buy-btn d-lg-block d-none">
                                <a href="/">
                                    Подробнее
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="img">
                            <img className='w-100' src="img/me1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header