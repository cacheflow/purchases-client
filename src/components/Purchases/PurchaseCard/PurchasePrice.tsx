import styles from './purchase-card.module.scss'
import toCurrency from "@/utils/toCurrency"

const PurchasePrice = ({ price }: {
  price: any
}) => (
  <div className={styles.price}>
    {toCurrency(price, 'USD')}
  </div>
)

export default PurchasePrice;