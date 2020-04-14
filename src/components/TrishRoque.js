import React from 'react'
import arrow from '../SVGs/arrow.svg'

const TrishRoque = () => {
    return (
            <div className="trishRoque">
                <div style={{display: 'inline-block', width: '100%'}}>
                    <div className="tinyText" style={{float: 'left'}}>
                        scroll to explore
                    </div>
                    <img src={arrow} className="arrow" style={{paddingLeft: '2vh'}}/>
                    <div className="trishDescription" style={{float: 'right'}}>
                        TRISH ROQUE IS A TORONTO-BASED DESIGNER FASCINATED WITH THE INFLUENCE OF <br />
                        DESIGNED ENVIRONMENT ON HUMAN PHYSIOLOGICAL RESPONSE.&lrm;
                    </div>
                </div>
                <div className="scrollDot" />
                <div className="scrollLine" />
                <div className="titleFont trishTitle">TRISH ROQUE</div>
            </div>
            
    )
}

export default TrishRoque
