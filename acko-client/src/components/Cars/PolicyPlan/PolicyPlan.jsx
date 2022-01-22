import styled from 'styled-components'
import Header from '../../Headers/Hearder'
import styles from './policyPlan.module.css'
import recommended from './assets/recommended.svg'
import { calendarSvg, carSvg, emiSvg, mapSvg, needHelpSvg } from './assets/svgs'
import { images } from './assets/imgs'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import Cardetail from '../Cars/Cardetail/Cardetail'

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
  height: 400px;
  width: 368px;
  border: 1px solid #dcdee9;
`
const InContright = styled.div`
  background-color: #ffffff;
  // height: 400px;
  width: 55%;
  box-shadow: rgb(0 0 0 / 25%) 0px 3px 20px;
  // margin-left: 10.9%;
  border: 1px solid #dcdee9;
`

export const PolicyPlan = () => {
  var data
  const [carDetails, setCarDetails] = useState({
    liscencePlate: '',
    vehicleName: '',
    NCB: '50',
    registrationMonthYear: '',
    carValue: 12.55,
    pincode: '',
  })
  // useEffect(() => {
  //   try {
  //     let id = localStorage.getItem('ackoid')
  //     //`http://localhost:8080/cars/${id}`
  //     // const res = axios
  //     //   .get(`https://acko.herokuapp.com/cars/${id}`)
  //     //   .then((res) => {
  //     //     console.log(res.data)
  //     //     data = res.data
  //     //     console.log(data)
  //     //     setCarDetails({
  //     //       liscencePlate: data.number,
  //     //       vehicleName: data.name,
  //     //       NCB: data.ncb,
  //     //       registrationMonthYear: data.month + ',' + data.year,
  //     //       pincode: data.pincode,
  //     //       carValue: 12.55,
  //     //       mobile: data.mobile,
  //     //     })
  //     //   })
  //   } catch (err) {
  //     console.log(err.message)
  //   }
  // }, [])

  // const history = useNavigate()

  const riskValues = {
    high: (carDetails.carValue * 0.294023904).toFixed(2),
    low: carDetails.carValue.toFixed(2),
  }

  const [insuredValue, setInsuredValue] = useState(
    (riskValues.low / 2).toFixed(2),
  )

  const handleSliderChange = (e) => {
    setInsuredValue(Number(e.target.value).toFixed(2))
    setOwnDamagePlan(
      (insuredValue * 0.549322709 * 1000 - (carDetails.NCB + 5) / 100).toFixed(
        0,
      ),
    )
    setsmartSaverZeroDepreciationPlan(
      (insuredValue * 0.7803984 * 1000 - (carDetails.NCB + 5) / 100).toFixed(0),
    )
    setzeroDepreciationPlan(
      (insuredValue * 1.176494 * 1000 - (carDetails.NCB + 5) / 100).toFixed(0),
    )
  }
  const [ownDamagePlan, setOwnDamagePlan] = useState(
    (insuredValue * 0.549322709 * 1000 - (carDetails.NCB + 5) / 100).toFixed(0),
  )

  const [
    smartSaverZeroDepreciationPlan,
    setsmartSaverZeroDepreciationPlan,
  ] = useState(
    (insuredValue * 0.7803984 * 1000 - (carDetails.NCB + 5) / 100).toFixed(0),
  )
  const [zeroDepreciationPlan, setzeroDepreciationPlan] = useState(
    (insuredValue * 1.176494 * 1000 - (carDetails.NCB + 5) / 100).toFixed(0),
  )

  return (
    <div className="App">
      <Header></Header>
      <Container>
        <InContleft>
          <div className={styles.plan_main_cont}>
            <div className={styles.plan_main_cont_sub1}>
              <div className={styles.plan_main_cont_sub2}>
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
              <div className={styles.plan_main_cont_sub2}>
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
              <div className={styles.plan_main_cont_sub2}> </div>
              <div className={styles.plan_main_cont_sub2}>
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
              <div className={styles.plan_main_cont_sub2}>
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
          <div className={styles.fontType}>
            <div style={{ display: 'flex' }}>
              <span className={styles.plan_left_car_idv}>
                Insured Declared Value (IDV)
              </span>
              <span
                className={styles.plan_left_car_idv}
                style={{
                  fontSize: '14px',
                  lineHeight: '18px',
                  marginLeft: '100px',

                  marginRight: '32px',
                  color: '#3F8FD8',
                }}
              >
                {' '}
                ₹{insuredValue} L
              </span>
            </div>
            <div style={{ display: 'flex' }}>
              <span
                className={styles.plan_left_car_idv}
                style={{
                  width: '105px',
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
                  marginLeft: '210px',
                  color: '#3F8FD8',
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
                marginLeft: '16px',
                marginRight: '32px',
                marginTop: '8px',
              }}
            >
              <input
                className={styles.plan_left_car_idv_slider_range}
                min={riskValues.high}
                max={riskValues.low}
                onChange={handleSliderChange}
                step={0.01}
                type="range"
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
            <div className={styles.insideContRight_plan}>
              <div>3 Plans for your Ecosport</div>
              <div>
                {' '}
                <span className={styles.insideContRight_plan_emi}>
                  {emiSvg}
                </span>{' '}
                starting from ₹208
              </div>
              <div>
                {' '}
                <img src={recommended} alt="" />{' '}
              </div>
              <div className={styles.insideContRight_plan}>
                <div>
                  <div>Own Damage Plan</div>
                  <div>Recommended if you already have a third party plan</div>
                  <div>See Details</div>
                </div>
                <div className={styles.insideContRight_plan_prize}>
                  <div>
                    ₹ {ownDamagePlan} <span> + GST</span>
                  </div>
                  <div>
                    ₹ {(ownDamagePlan * 2.44301924).toFixed(0)}{' '}
                    <span> + GST</span>
                  </div>
                  <button
                    onClick={() => {
                      localStorage.setItem('currentPremium', ownDamagePlan)
                      localStorage.setItem('currentIDV', insuredValue)
                      localStorage.setItem(
                        'currentActual',
                        (ownDamagePlan * 2.44301924).toFixed(0),
                      )
                      localStorage.setItem(
                        'ncbDiscount',
                        ((carDetails.NCB / 100) * ownDamagePlan).toFixed(0),
                      )
                      window.location.href =
                        'http://localhost:3000/policyplan-details'
                    }}
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>

          <div className={styles.insidemainclass}>
            <div className={styles.insideContRight_plan}>
              <div>
                <div>
                  <div>Smart Saver Zero Depreciation Plan</div>
                  <div>
                    Gives you all the benefits of Bumper to bumper cover at a
                    discounted price
                  </div>
                  <div>See Details</div>
                </div>
                <div>
                  <div>
                    ₹ {smartSaverZeroDepreciationPlan} <span> + GST</span>
                  </div>
                  <div>
                    ₹ {(smartSaverZeroDepreciationPlan * 2.44301924).toFixed(0)}{' '}
                    <span> + GST</span>
                  </div>
                  <button
                    onClick={() => {
                      localStorage.setItem(
                        'currentPremium',
                        smartSaverZeroDepreciationPlan,
                      )
                      localStorage.setItem('currentIDV', insuredValue)
                      localStorage.setItem(
                        'currentActual',
                        (smartSaverZeroDepreciationPlan * 2.44301924).toFixed(
                          0,
                        ),
                      )
                      localStorage.setItem(
                        'ncbDiscount',
                        (
                          (carDetails.NCB / 100) *
                          smartSaverZeroDepreciationPlan
                        ).toFixed(0),
                      )
                      window.location.href =
                        'http://localhost:3000/policyplan-details'
                    }}
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className={styles.insideLastClass}>
            <div className={styles.insideContRight_plan}>
              <div>
                <div>
                  <div>Zero Depreciation Plan</div>
                  <div>
                    Includes all benefits of Own Damage plan and covers full
                    cost of car parts during claims.
                  </div>
                  <div>See Details</div>
                </div>
                <div>
                  <div>
                    ₹ {zeroDepreciationPlan} <span> + GST</span>
                  </div>
                  <div>
                    ₹ {(zeroDepreciationPlan * 2.44301924).toFixed(0)}
                    <span> + GST</span>
                  </div>
                  <button
                    onClick={() => {
                      localStorage.setItem(
                        'currentPremium',
                        zeroDepreciationPlan,
                      )
                      localStorage.setItem('currentIDV', insuredValue)
                      localStorage.setItem(
                        'currentActual',
                        (zeroDepreciationPlan * 2.44301924).toFixed(0),
                      )
                      localStorage.setItem(
                        'ncbDiscount',
                        ((carDetails.NCB / 100) * zeroDepreciationPlan).toFixed(
                          0,
                        ),
                      )
                      window.location.href =
                        'http://localhost:3000/policyplan-details'
                    }}
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </InContright>
      </Container>
    </div>
  )
}
