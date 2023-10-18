import styles from './purchase-card.module.scss'
import toHumanizedDate from '@/utils/toHumanizedDate'

const PurchaseDate = ({ data }: {
  data: any
}): JSX.Element => (
  <div className={styles.purchaseDate}>
    <div>Purchase Date</div>
    <div>{toHumanizedDate(data.purchaseDate)}</div>
  </div>
)

export default PurchaseDate