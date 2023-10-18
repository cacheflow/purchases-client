'use client'

import React from "react"
import styles from './purchase-card.module.scss'
import PurchaseInfo from "./PurchaseInfo"
import PurchaseCardHeader from "./PurchaseCardHeader"
import PurchaseCardDescription from "./PurchaseCardDescription"
import PurchaseDate from "./PurchaseDate"

const PurchaseCard = ({ purchase }: any): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <PurchaseInfo>
          <PurchaseCardHeader data={purchase} />
          <PurchaseCardDescription description={purchase.description} />
          <PurchaseDate data={purchase} />
        </PurchaseInfo>
      </div>
    </div>
  )
}


export default PurchaseCard