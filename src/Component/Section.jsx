import React from 'react'

const Section = () => {
  return (
    <>
     <div className="let">
          <h3>Let's get <span className='turn'>moving</span>.</h3>

          <div className="wraper">
            <div className="small">
              <h4>Small</h4>
              <span>Best for partnering with a single product <br /> team</span>
              <p>4 User insight packages each month</p>
              <p>
                <li>interviews with 4 users</li>
              </p>
              <p>
                <li>Expert analysis of each interview</li>
              </p>
              <p>
                <li>Monthly team call to review and <br /> consolidate understanding</li>
              </p>
               <p>
                <li>Summary shared as an interview snapshot</li>
               </p>

               <p className='price'>€1199 per month</p>
               <p className='btn'>Let's go</p>
            </div>

            <div className="smal">
              <h4>Medium</h4>
              <span>Best for partnering with a single product <br /> team</span>
              <p>8 User insight packages each month</p>
              <p>
                <li>interviews with 4 users</li>
              </p>
              <p>
                <li>Expert analysis of each interview</li>
              </p>
              <p>
                <li>Monthly team call to review and <br /> consolidate understanding</li>
              </p>
               <p>
                <li>Summary shared as an interview snapshot</li>
               </p>

               <p className='price'>€2149 per month</p>
               <p className='btn'>Let's go</p>
            </div>

            <div className="smal">
              <h4>Large</h4>
              <span>Best for partnering with a single product <br /> team</span>
              <span>Looking for even more of the good stuff?</span>
                 <p>We can work on a custom engagement, just reach out.</p>

               <p className='prices'>€1199 per month</p>
               <p className='btn'>Let's go</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Section