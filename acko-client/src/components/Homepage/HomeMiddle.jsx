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
              <img src={amazon} alt=""></img>
              <img src={abhiBus} alt=""></img>
              <img src={aubank} alt=""></img>
              <img src={driveU} alt=""></img>
              <img src={dunzo} alt=""></img>
              <img src={goibibo} alt=""></img>
              <img src={happay} alt=""></img>
              <img src={hdb} alt=""></img>
            </div>
            <div className={styles.home_main_child2}>
              <img src={lendingKart} alt=""></img>
              <img src={moneytap} alt=""></img>
              <img src={my} alt=""></img>
              <img src={niyo} alt=""></img>
              <img src={oyo} alt=""></img>
              <img src={practo} alt=""></img>
              <img src={rapido} alt=""></img>
              <img src={redbus} alt=""></img>
            </div>
            <div className={styles.home_main_child3}>
              <img src={urban} alt=""></img>
              <img src={ola} alt=""></img>
              <img src={zestMoney} alt=""></img>
              <img src={zomato} alt=""></img>
              <img src={zoomCar} alt=""></img>
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
                alt=""
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
                alt=""
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
                alt=""
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
