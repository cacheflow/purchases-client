import styles from './purchase-card.module.scss'

const PurchaseCardDescription = ({ description }: {
  description: string
}): JSX.Element => (
  <div className={styles.description}> {description} </div>
)

export default PurchaseCardDescription