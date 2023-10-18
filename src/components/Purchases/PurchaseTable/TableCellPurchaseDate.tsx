import styles from './purchase-table.module.scss';
import toHumanizedDate from "@/utils/toHumanizedDate"

const TableCellPurchaseDate = ({ purchaseDate }: {
  purchaseDate: string
}) => {
  return (
    <td className={styles.tableData}>{toHumanizedDate(purchaseDate)}</td>
  )
}

export default TableCellPurchaseDate