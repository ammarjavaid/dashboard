import React, { useState } from 'react'
import TrackingCharts from '../charts/TrackingCharts'
import "../styles/Sell-car.css"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import Sellcar from "../assets/images/sell-car.png"
import Sidebar from '../components/sidebar/Sidebar'
import TopNav from '../components/topNav/TopNav'

const SellCar = () => {

  const [open, setOpen] = useState(false);

  const handle = () => {
    setOpen(!open)
  }

  const percentage = 75;
  const percentage02 = 57;
  const percentage03 = 45;

  return (
    <>
      <Sidebar open={open} setOpen={setOpen} handle={handle} />
      <TopNav open={open} setOpen={setOpen} handle={handle} />
      <div className='sell__car'>
        <div className='sell__car-wrapper'>
          <h2 className='sell__car-title'> Sell Car </h2>
          <div className='sell__car-top'>
            <div className='sell__car-img'>
              <h2> 2022 Mercides Benz </h2>
              <img src={Sellcar} alt='image' />
            </div>

            <div className='tracking__history'>
              <h3> Tracking History </h3>
              <TrackingCharts />
            </div>
          </div>

          <div className='offer__wrapper'>
            <div className='offer__top'>
              <h2 className='sell__car-title'>
                Offers
              </h2>
              <div className='filter__widget-01'>
                <select>
                  <option value="toyota">Toyota</option>
                  <option value="bmw">BMW</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>

            <div className='offer__list'>
              <div className='offer__item'>
                <div className='box__01'>
                  <h3 className='client__name'> Ammar Javaid </h3>
                  <h6 className='avg__price'> $16,605 <span>average price</span> </h6>
                  <h6 className='market__price'> Market average is $16,244 </h6>
                  <span className='arrow__key'><i className='ri-arrow-right-line'></i></span>
                </div>

                <div className='circle__wrapper'>
                  <div className='box__02'>
                    <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
                      pathColor: "#01d293",
                      textColor: '#fff',
                      trailColor: '#0b0c28',
                      textSize: "18px"
                    })} />;
                  </div>
                  <h4> Impression Share </h4>
                </div>

                <div className='box__03'>
                  <span className='model__spend-icon'>
                    <i className='ri-car-line'></i>
                  </span>
                  <h6 className='spend__amount'>$1174</h6>
                  <p className='spend__title'>Model Spend</p>
                </div>

                <div className='box__04'>
                  <span className='model__spend-icon'>
                    <i className='ri-share-forward-line'></i>
                  </span>
                  <h6 className='spend__amount'>$1174</h6>
                  <p className='spend__title'>Model Spend</p>
                </div>

                <div className='box__05'>
                  <span className='model__spend-icon'>
                    <i className='ri-money-dollar-circle-line'></i>
                  </span>
                  <h6 className='spend__amount'>$811</h6>
                  <p className='spend__title'>Spend Per Unit Turned</p>
                </div>
              </div>

              <div className='offer__item'>
                <div className='box__01'>
                  <h3 className='client__name'> Usama Chohan </h3>
                  <h6 className='avg__price'> $11,605 <span>average price</span> </h6>
                  <h6 className='market__price'> Market average is $11,244 </h6>
                  <span className='arrow__key'><i className='ri-arrow-right-line'></i></span>
                </div>

                <div className='circle__wrapper'>
                  <div className='box__02'>
                    <CircularProgressbar value={percentage02} text={`${percentage02}%`} styles={buildStyles({
                      pathColor: "#01d293",
                      textColor: '#fff',
                      trailColor: '#0b0c28',
                      textSize: "18px"
                    })} />;
                  </div>
                  <h4> Impression Share </h4>
                </div>

                <div className='box__03'>
                  <span className='model__spend-icon'>
                    <i className='ri-car-line'></i>
                  </span>
                  <h6 className='spend__amount'>$1174</h6>
                  <p className='spend__title'>Model Spend</p>
                </div>

                <div className='box__04'>
                  <span className='model__spend-icon'>
                    <i className='ri-share-forward-line'></i>
                  </span>
                  <h6 className='spend__amount'>$1174</h6>
                  <p className='spend__title'>Model Spend</p>
                </div>

                <div className='box__05'>
                  <span className='model__spend-icon'>
                    <i className='ri-money-dollar-circle-line'></i>
                  </span>
                  <h6 className='spend__amount'>$811</h6>
                  <p className='spend__title'>Spend Per Unit Turned</p>
                </div>
              </div>

              <div className='offer__item'>
                <div className='box__01'>
                  <h3 className='client__name'> Hassan Younas </h3>
                  <h6 className='avg__price'> $9,605 <span>average price</span> </h6>
                  <h6 className='market__price'> Market average is $9,244 </h6>
                  <span className='arrow__key'><i className='ri-arrow-right-line'></i></span>
                </div>

                <div className='circle__wrapper'>
                  <div className='box__02'>
                    <CircularProgressbar value={percentage03} text={`${percentage03}%`} styles={buildStyles({
                      pathColor: "#01d293",
                      textColor: '#fff',
                      trailColor: '#0b0c28',
                      textSize: "18px"
                    })} />;
                  </div>
                  <h4> Impression Share </h4>
                </div>

                <div className='box__03'>
                  <span className='model__spend-icon'>
                    <i className='ri-car-line'></i>
                  </span>
                  <h6 className='spend__amount'>$1174</h6>
                  <p className='spend__title'>Model Spend</p>
                </div>

                <div className='box__04'>
                  <span className='model__spend-icon'>
                    <i className='ri-share-forward-line'></i>
                  </span>
                  <h6 className='spend__amount'>$1174</h6>
                  <p className='spend__title'>Model Spend</p>
                </div>

                <div className='box__05'>
                  <span className='model__spend-icon'>
                    <i className='ri-money-dollar-circle-line'></i>
                  </span>
                  <h6 className='spend__amount'>$811</h6>
                  <p className='spend__title'>Spend Per Unit Turned</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SellCar