import styles from './purchase-table.module.scss';

const TableCellPrice = ({ price }: {
  price: any
}) => {
  return (
    <td className={`${styles.priceData}`}>
      {price}
    </td>
  )
}

export default TableCellPrice