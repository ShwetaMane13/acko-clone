import React from 'react'
import styles from './homeMiddle.module.css'
import amazon from './images/amazon.png'
import abhiBus from './images/abhiBus.png'
import aubank from './images/aubank.png'
import driveU from './images/driveU.png'
import dunzo from './images/dunzo.png'
import goibibo from './images/goibibo.png'
import happay from './images/happay.png'
import hdb from './images/hdb.png'
import lendingKart from './images/lendingKart.png'
import moneytap from './images/moneytap.png'
import my from './images/my.png'
import niyo from './images/niyo.png'
import oyo from './images/oyo.png'
import practo from './images/practo.png'
import rapido from './images/rapido.png'
import redbus from './images/redbus.png'
import urban from './images/urban.png'
import ola from './images/ola.png'
import zestMoney from './images/zestMoney.png'
import zomato from './images/zomato.png'
import zoomCar from './images/zoomCar.png'
import Hassle from './images/Hasslefree.png'
import superMobile from './images/superMobile.png'
import wallet from './images/Wallet.png'
import HomeFooter from './HomeFooter'
function HomeMiddle() {
  return (
    <div>
      <div className={styles.home_partner}>
        <h1 className={styles.home_mid_head}>Have a partner issued policy?</h1>
        <h4 className={styles.home_mid_subhead}>
          Login to claim & download your policy
        </h4>
        <div className={styles.home_mid_logo}>
          <div className={styles.home_main_child1}>
            <div className={styles.home_main_child2}>
              <img src={amazon}></img>
              <img src={abhiBus}></img>
              <img src={aubank}></img>
              <img src={driveU}></img>
              <img src={dunzo}></img>
              <img src={goibibo}></img>
              <img src={happay}></img>
              <img src={hdb}></img>
            </div>
            <div className={styles.home_main_child2}>
              <img src={lendingKart}></img>
              <img src={moneytap}></img>
              <img src={my}></img>
              <img src={niyo}></img>
              <img src={oyo}></img>
              <img src={practo}></img>
              <img src={rapido}></img>
              <img src={redbus}></img>
            </div>
            <div className={styles.home_main_child3}>
              <img src={urban}></img>
              <img src={ola}></img>
              <img src={zestMoney}></img>
              <img src={zomato}></img>
              <img src={zoomCar}></img>
            </div>
          </div>
        </div>
        <button className={styles.main_claim_btn}>Claim & more</button>
      </div>
      <div className={styles.home_sub1_main}>
        <p className={styles.sub1_p}>Here’s why you’ll love ACKO</p>

        <div className={styles.home_sub2}>
          <div className={styles.home_sub_child2}>
            <div>
              <img
                src={wallet}
                style={{
                  height: '120px',
                  width: '120px',
                  marginBottom: '28px',
                }}
              ></img>
            </div>
            <div className={styles.home_sub_head}>Incredibly low premiums</div>
            <div className={styles.home_sub_content}>
              {' '}
              Insuring things that matter to you shouldn’t come at a cost.
              That’s why when you buy from us, you get insurance that fits your
              pocket.
            </div>
          </div>

          <div className={styles.home_sub_child2}>
            <div>
              <img
                src={superMobile}
                style={{
                  height: '120px',
                  width: '120px',
                  marginBottom: '28px',
                }}
              ></img>
            </div>
            <div className={styles.home_sub_head}>Superquick and easy</div>
            <div className={styles.home_sub_content}>
              We’re easy, effortless and 100% digital. Forget paperwork, just
              access all our services with just a few clicks.
            </div>
          </div>

          <div className={styles.home_sub_child2}>
            <div>
              <img
                src={Hassle}
                style={{
                  height: '120px',
                  width: '120px',
                  marginBottom: '28px',
                }}
              ></img>
            </div>
            <div className={styles.home_sub_head}>Hassle-free claims</div>
            <div className={styles.home_sub_content}>
              We’re on a mission to make insurance claims stress-free. Just give
              us a call or file a claim online and experience cashless, speedy
              claim settlements.
            </div>
          </div>
        </div>
      </div>
      <HomeFooter />
    </div>
  )
}

export default HomeMiddle
