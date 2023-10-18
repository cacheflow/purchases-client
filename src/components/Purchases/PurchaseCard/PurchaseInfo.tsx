import styles from './purchase-card.module.scss'

const PurchaseInfo = ({ children }: {
  children: any
}): JSX.Element => {
  return (
    <div className={styles.info}>
      {children}
    </div>
  )
}

export default PurchaseInfo