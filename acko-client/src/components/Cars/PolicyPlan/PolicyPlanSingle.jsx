import styles from './policyPlanDetails.module.css'
import { useState } from 'react'
export const PolicyPlanSingle = (props) => {
  const [selected, setSelected] = useState(false)

  const handleclick = () => {
    setSelected((props) => !props)

    selected ? props.add(-props.price) : props.add(props.price)
  }

  return (
    <div className={styles.singleCover}>
      <div>{props.svg}</div>
      <div>
        <div>
          {' '}
          {props.heading}{' '}
          <span style={{ color: 'rgb(62, 183, 83)' }}> ₹{props.price} </span>{' '}
        </div>
        <div> {props.body}</div>
      </div>
      <div>
        {' '}
        <button
          style={{
            color: selected ? '#E74D31' : '#4090d7',
            border: selected ? '1px solid #E74D31' : '1px solid #4090d7',
          }}
          onClick={handleclick}
        >
          {selected ? 'Remove' : 'Add'}
        </button>{' '}
      </div>
    </div>
  )
}
