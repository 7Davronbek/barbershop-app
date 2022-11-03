import React from 'react'

const Painting = () => {
    return (
        <div className='Painting'>
            <div className="container">
                <h2 className='blog-title'>Zamonaviy  Bo’yash Uslublari</h2>
                <div className="row">
                    <div className="col-lg-3 mb-lg-0 mb-3">
                        <div className="card">
                            <div className="img">
                                <img className='w-100' src="img/paint1.png" alt="" />
                            </div>
                            <div className="text">
                                <h4>Balayaj</h4>
                                <p>Это техника окрашивания части волос, при которой краситель наносится сметающими движениями, в результате давая мягкую растяжку цвета по всей длине</p>
                                <div className="btn">
                                    <a href="/">Купить</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-lg-0 mb-3">
                        <div className="card">
                            <div className="img">
                                <img className='w-100' src="img/paint2.png" alt="" />
                            </div>
                            <div className="text">
                                <h4>Airtach</h4>
                                <p>Это мягкое окрашивание каждого слоя волос по отдельности. С помощью фена сначала выдувается подшерсток, а затем более тонкие и короткие волосы. В конце концов, в руках мастера остается самая длинная прядь.</p>
                                <div className="btn">
                                    <a href="/">Купить</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-lg-0 mb-3">
                        <div className="card">
                            <div className="img">
                                <img className='w-100' src="img/paint3.png" alt="" />
                            </div>
                            <div className="text">
                                <h4>Shatush va Ombre</h4>
                                <p>Это методика сложного окрашивания, при котором выполняется плавный переход из одного цвета в другой.</p>
                                <div className="btn">
                                    <a href="/">Купить</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-lg-0 mb-3">
                        <div className="card">
                            <div className="img">
                                <img className='w-100' src="img/paint4.png" alt="" />
                            </div>
                            <div className="text">
                                <h4>Qoradan Chiqish</h4>
                                <p>Это переход из темного цвета волос в близкий к натуральному (или ещё светлее) при помощи многоступенчатого процесса окрашивания. </p>
                                <div className="btn">
                                    <a href="/">Купить</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Painting