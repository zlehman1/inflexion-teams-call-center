import React from 'react'
import dotsLP3F8 from '../../assets/svgs/dots-LP3F8.svg'
import arrowSVG from '../../assets/svgs/arrow-circleBG.svg';
const Feature8LP3 = () => {
    return (
        <section className='feature-8-LP3-section'>
            <img className='dots-svg' src={dotsLP3F8} />
            <div className='feature-8-LP3'>
                <h1 className='header'>
                    Learn how to save up to 70% on your CX.<br />
                    <span style={{ fontWeight: '700' }}>Download our free guide now.</span>
                </h1>

                <div className="input-container">
                    <input type="email" placeholder="your@email.com" className="custom-input" />
                    <img src={arrowSVG} alt="Arrow" className="input-arrow" />
                </div>
            </div>
        </section>
    )
}

export default Feature8LP3