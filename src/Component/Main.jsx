import React from 'react'

const Main = () => {
  return (
  <>
    <h2 className='work'>How we work</h2>
        <div className="wrap">
          <div className="same">
            <p>
              <div className='img'>
              <img src="/src/assets/arrow.svg" alt="" />
              </div>
            </p>
            <span>
            Continuous discovery
            </span>
            <p>We do users interviews with your <br /> customers or prospectives each week,  <br />so your team get constant input to  <br />their decisions. If a new question pops <br /> up, you will start getting answers from <br /> customers in less than a week.</p>
          </div>
         
          <div className="same">
            <p>
              <div className='img'>
              <img src="/src/assets/react.svg" alt="" className='user'/>
              </div>
            </p>
            <span>
            Partnership
            </span>
            <p>We don't deliver a report and walk <br /> away. We work hand in hand with your <br /> team, meeting regularly to understand  <br /> the newest changes in direction and <br /> burning questions that need answering</p>
          </div>
        
          <div className="same">
            <p>
              <div className='img'>
              <img src="/src/assets/userhivelogo.svg" alt=""  className='user'/>
              </div>
            </p>
            <span>
            No hurdles
            </span>
            <p>We do users interviews with your <br /> customers or prospectives each week,  <br />so your team get constant input to  <br />their decisions. If a new question pops <br /> up, you will start getting answers from <br /> customers in less than a week.</p>
          </div>
        
          <div className="same">
            <p>
              <div className='img'>
              <img src="/src/assets/menu.svg" alt="" className='' />
              </div>
            </p>
            <span>
            Build customer empathy  </span>
            <p>We do users interviews with your <br /> customers or prospectives each week,  <br />so your team get constant input to  <br />their decisions. If a new question pops <br /> up, you will start getting answers from <br /> customers in less than a week.</p>
          </div>
        </div>
  </>
  )
}

export default Main