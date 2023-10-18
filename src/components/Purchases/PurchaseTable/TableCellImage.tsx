
import styles from './purchase-table.module.scss';

const TableCellImage = ({ imgSrc }: {
  imgSrc: string
}) => {
  return (
    <td className={`${styles.tableData}`}>
      <img className={styles.tableImage} src={imgSrc}></img>
    </td>
  )
}

export default TableCellImage