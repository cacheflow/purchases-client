import PurchaseMerchant from './PurchaseMerchant'
import PurchasePrice from './PurchasePrice'

const PurchaseCardHeader = ({ data }: {
  data: any
}): JSX.Element => (
  <div className={'flex'}>
    <PurchaseMerchant data={data} />
    <PurchasePrice price={data.price} />
  </div>
)

export default PurchaseCardHeader