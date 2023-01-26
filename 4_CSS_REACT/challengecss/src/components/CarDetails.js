import React from 'react'
import styles from './CarDetails.module.css'

const CarDetails = ({marca, age, km}) => {
  return (
    <div>
        <div className={styles.container}>
            <h2>Marca: {marca}</h2>
            <p>Ano: {age}</p>
            <p>{km}km</p>
        </div>
    </div>
  )
}

export default CarDetails