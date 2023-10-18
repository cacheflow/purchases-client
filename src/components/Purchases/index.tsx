import React, { useState, useRef } from "react"
import Col from "@/components/shared/Col"
import styles from './purchases.module.scss'
import PurchaseCard from "@/components/Purchases/PurchaseCard/index"
import PurchaseTable from '@/components/Purchases/PurchaseTable/index'
import useMediaQuery from "@/hooks/useMediaQuery"

const PurchaseCards = ({ purchases }: {
  purchases: any
}) => {
  const purchaseCards = purchases.map((purchase: any, index: Number) => {
    return (
      <div className={index < purchases.length ? styles.purchaseCardSpacing : ''} key={purchase.id}>
        <PurchaseCard purchase={purchase} />
      </div>
    )
  })
  return purchaseCards
}

const PurchasesContainer = ({ purchases }: {
  purchases: any
}): JSX.Element => {
  const onMobileOrTablet = useMediaQuery('(max-width: 992px)');

  return (
    <Col sm={12} lg={12} className='mx-auto'>
      {onMobileOrTablet ? <PurchaseCards purchases={purchases} /> : <PurchaseTable purchases={purchases}/>}
    </Col>
  )
}

export default PurchasesContainer