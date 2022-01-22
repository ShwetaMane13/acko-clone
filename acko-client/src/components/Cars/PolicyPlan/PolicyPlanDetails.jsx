import styled from 'styled-components'
import Header from '../../Headers/Hearder'
import styles from './policyPlanDetails.module.css'
import {
  accidentsSvg,
  calendarSvg,
  carBurnSvg,
  carFloodSvg,
  carSvg,
  carTheftSvg,
  consumablesSvg,
  emiSvg,
  mapSvg,
  ncbProtectSvg,
  needHelpSvg,
  passengerAccidentSvg,
  personalAccidentSvg,
} from './assets/svgs'
import { images } from './assets/imgs'
import { useEffect, useState } from 'react'
import { PolicyPlanSingle } from './PolicyPlanSingle'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Container = styled.div`
  //background-color: green;
  //height: 400px;
  width: 65%;
  margin: auto;
  margin-top: 64px;
  display: flex;
`
const InContleft = styled.div`
  background-color: #ffffff;
  height: 230px;
  width: 368px;
  border: 1px solid #dcdee9;
`
const InContright = styled.div`
  background-color: #ffffff;
  // height: 400px;
  width: 55%;
  box-shadow: rgb(0 0 0 / 25%) 0px 3px 20px;
  border: 1px solid #dcdee9;
`

export const PolicyPlanDetails = () => {
  var data
  const [carDetails, setCarDetails] = useState({
    liscencePlate: '',
    vehicleName: '',
    NCB: '',
    registrationMonthYear: '',
    pincode: '',
    carValue: 12.55,
  })
  useEffect(() => {
    try {
      let id = localStorage.getItem('ackoid')
      //http://localhost:8080/cars/${id}
      const res = axios
        .get(`https://acko.herokuapp.com/cars/${id}`)
        .then((res) => {
          console.log(res.data)
          data = res.data
          console.log(data)
          setCarDetails({
            liscencePlate: data.number,
            vehicleName: data.name,
            NCB: data.ncb,
            registrationMonthYear: data.month + ',' + data.year,
            pincode: data.pincode,
            carValue: Number(localStorage.getItem('currentIDV')),
            mobile: data.mobile,
          })
        })
    } catch (err) {
      console.log(err.message)
    }
  }, [])

  const history = useNavigate()
  const riskValues = {
    high: (carDetails.carValue * 0.294023904).toFixed(2),
    low: carDetails.carValue.toFixed(2),
  }

  const [insuredValue, setInsuredValue] = useState(
    Number(localStorage.getItem('currentIDV')),
  )

  const handleSliderChange = (e) => {
    setInsuredValue(Number(e.target.value).toFixed(2))

    setOwnDamagePlan((insuredValue * 0.549322709 * 1000).toFixed(0))
  }
  const [ownDamagePlan, setOwnDamagePlan] = useState(
    Number(localStorage.getItem('currentPremium')),
  )

  const [added, setAdded] = useState(0)
  let totalPrice = ownDamagePlan

  const AdditionalCoverSelected = (price) => {
    setAdded((props) => Number(props) + Number(price))
  }
  totalPrice = +ownDamagePlan + +added

  return (
    <div className="App">
      <Header></Header>
      <Container>
        <InContleft>
          <div
            style={{
              border: '1px solid #dcdee9',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                paddingTop: '13px',
                paddingBottom: '13px',
              }}
            >
              <div className={styles.left_head_cont}>
                {' '}
                <div style={{ display: 'flex' }}>
                  {' '}
                  {carSvg}{' '}
                  <span className={styles.vehicle}>
                    {' '}
                    {carDetails.liscencePlate} {carDetails.vehicleName}
                  </span>
                </div>
              </div>
              <div className={styles.left_head_cont}>
                {' '}
                <div style={{ display: 'flex', color: '#8A909F' }}>
                  {' '}
                  {calendarSvg}{' '}
                  <span className={styles.vehicle}>
                    {' '}
                    NCB - {carDetails.NCB}%{' '}
                  </span>
                </div>
              </div>
              <div className={styles.left_head_cont}>
                {' '}
                <div style={{ display: 'flex', color: '#8A909F' }}>
                  {' '}
                  {calendarSvg}{' '}
                  <span className={styles.vehicle}>
                    {' '}
                    Registration in {carDetails.registrationMonthYear}
                  </span>
                </div>
              </div>
              <div className={styles.left_head_cont}>
                {' '}
                <div style={{ display: 'flex', color: '#8A909F' }}>
                  {' '}
                  {mapSvg}{' '}
                  <span className={styles.vehicle}> {carDetails.pincode} </span>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.editLink}>
                <a href="" style={{ textDecoration: 'none' }}>
                  <span style={{ color: '#528ae2' }}> Edit</span>{' '}
                </a>
              </div>
              <div>
                <img
                  className={styles.plan_left_car_image}
                  src={images.ecosport}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className={styles.needHelpMain}>
            <div>{needHelpSvg}</div>
            <div>
              <div>Need help with something?</div>
              <div>
                Request a callback, sit back relax! Our experts will help you
                with all your queries
              </div>
              <div>Talk to an expert {'>'} </div>
            </div>
          </div>
        </InContleft>
        <InContright>
          <div className={styles.insideContRight}>
            <div>
              <div className={styles.insideContRight_head}>Own Damage Plan</div>
              <div>
                {' '}
                <div>
                  {' '}
                  {accidentsSvg} <span> Accidents</span>{' '}
                </div>
                <div>
                  {' '}
                  {carBurnSvg} <span> Fire</span>{' '}
                </div>
                <div>
                  {' '}
                  {carTheftSvg} <span> Theft</span>
                </div>
                <div>
                  {' '}
                  {carFloodSvg} <span> Calamities </span>
                </div>
                <div>
                  {' '}
                  {consumablesSvg} <span> Consumables </span>
                </div>
              </div>
              <div> Insured Declared Value (IDV) ₹{insuredValue}L</div>
              <div>Amount you will recieve in case of total damage/theft</div>

              
              <div style={{ display: 'flex' }}>{/*  */}</div>
              <div style={{ display: 'flex' }}>
                <span
                  className={styles.plan_left_car_idv}
                  style={{
                    width: '85%',
                  }}
                >
                  <div
                    style={{
                      fontSize: '12px',
                      lineHeight: '12px',
                    }}
                  >
                    {riskValues.high}L
                  </div>{' '}
                  <div
                    style={{
                      fontSize: '10px',
                      lineHeight: '10px',
                    }}
                  >
                    HIGH RISK
                  </div>
                </span>
                <span
                  className={styles.plan_left_car_idv}
                  style={{
                    width: '150px',
                    fontSize: '14px',
                    marginLeft: '45%',
                  }}
                >
                  <div
                    style={{
                      fontSize: '12px',
                      lineHeight: '12px',
                    }}
                  >
                    {riskValues.low}L
                  </div>{' '}
                  <div
                    style={{
                      fontSize: '10px',
                      lineHeight: '10px',
                    }}
                  >
                    LOW RISK
                  </div>
                </span>
              </div>

              <div
                style={{
                  height: '16px',
                  marginTop: '8px',
                }}
              >
                <input
                  min={riskValues.high}
                  max={riskValues.low}
                  onChange={handleSliderChange}
                  step={0.01}
                  type="range"
                  value={insuredValue}
                />
              </div>

              <div className={styles.plan_left_car_idv_slider}>
                <div
                  style={{
                    width: '100px',
                    marginTop: '-5px',
                  }}
                >
                  <div
                    style={{
                      border: '1px solid #3EB753',
                      borderTopColor: 'white',
                      height: '6px',
                    }}
                  ></div>
                  <div
                    style={{
                      width: '0',
                      height: '0',
                      margin: 'auto',
                      borderLeft: '10px solid transparent',
                      borderRight: '10px solid transparent',
                      borderTop: '10px solid #3EB753',
                    }}
                  ></div>
                  <div
                    style={{
                      fontSize: '8px',
                      textAlign: 'center',
                    }}
                  >
                    4 out of 5 users select an IDV within this range
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div> Additional Covers</div>
              <PolicyPlanSingle
                svg={personalAccidentSvg}
                heading="Personal Accident Cover @"
                price="399"
                body={'Rs. 15 lakh coverage against accidental injury or death'}
                add={AdditionalCoverSelected}
              ></PolicyPlanSingle>
            </div>
            <PolicyPlanSingle
              svg={ncbProtectSvg}
              heading="NCB Protect @"
              price="175"
              body={
                'Get yourself extra cushioning by keeping your no claim bonus intact even in the event of a claim. Applicable only for 1 claim.'
              }
              add={AdditionalCoverSelected}
            ></PolicyPlanSingle>
            <div>
              <PolicyPlanSingle
                svg={passengerAccidentSvg}
                heading="Personal Accident Cover for Passengers @"
                price="250"
                body={
                  'Protect your loved ones in cause of unfortunate accidents. Coverage upto INR 1 Lakh per passenger.'
                }
                add={AdditionalCoverSelected}
              ></PolicyPlanSingle>
              <div></div>
              <div>
                <div>
                  ₹{totalPrice} <span>+GST</span>
                </div>
                <div>
                  <div>
                    ₹ {(totalPrice * 2.44301924).toFixed(0)} <span>+GST</span>{' '}
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      // sendData()
                      localStorage.setItem('currentPremium', totalPrice)
                      localStorage.setItem('currentIDV', insuredValue)
                      localStorage.setItem(
                        'currentActual',
                        (ownDamagePlan * 2.44301924).toFixed(0),
                        localStorage.setItem(
                          'ncbDiscount',
                          ((carDetails.NCB / 100) * ownDamagePlan).toFixed(0),
                        ),
                      )
                      localStorage.setItem('addOns', added)
                      history.push('./addtional-details')
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div>
                {' '}
                <span>{emiSvg}</span> starting from ₹208{' '}
                <span>{'View Plans >'} </span>
              </div>
            </div>
          </div>
        </InContright>
      </Container>
    </div>
  )
}
