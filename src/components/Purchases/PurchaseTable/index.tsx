'use client'

import React from "react"
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import styles from './purchase-table.module.scss';

const PurchaseTable = ({ purchases }: {
  purchases: any
}): JSX.Element => {
  const tableHeaders = [
    'Name', 'Location', 'Purchase Date', 'Category', 'Description', 'Price', ''
  ]

  return (
    <table className={styles.table}>
      <TableHead headers={tableHeaders} />
      <tbody>
        {purchases.map((purchase: any) => <TableRow key={purchase.id} purchase={purchase} />)}
      </tbody>
    </table>
  )
}


export default PurchaseTable