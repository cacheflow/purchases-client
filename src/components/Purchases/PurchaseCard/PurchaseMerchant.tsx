import styles from './purchase-card.module.scss';

const PurchaseMerchant = ({ data }: {
  data: any
}) => (
  <div className='flex'>
    <div className={styles.imageWrapper}>
      <img src={data.location} className={styles.image}></img>
    </div>
    <span className={styles.header}>{data.name}</span>
  </div>
)

export default PurchaseMerchant