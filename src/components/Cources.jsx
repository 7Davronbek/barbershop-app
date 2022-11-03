import React from 'react'

const Cources = () => {
  return (
    <div className='Cources'>
      <div className="blur1"></div>
      <div className="path1 d-lg-block d-none">
        <img src="img/path1.png" alt="" />
      </div>
      <div className="container">
        <h2 className='blog-title'>O’quv Programmasi</h2>
        <div className="row myRow align-items-center">
          <div className="col-lg-6 p-0">
            <div className="info">
              <h3>Koloristika Baza - Boshlang’ich
                (Umumiy boshlang’ich bilimlar)</h3>
              <ul>
                <li>Koloristika umumiy qoidalari</li>
                <li>Ranglar Doirasi</li>
                <li>Ranglar - Pigmentlar</li>
                <li>Neytralizaciya</li>
                <li>Краскалар хакида</li>
                <li>Ochartirish </li>
                <li>Pudralar va oksidantlar</li>
              </ul>
              <div className="buy-btn d-lg-block d-none">
                <a href="/">
                  Купить
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="img">
              <img className='w-100' src="img/cource2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cources