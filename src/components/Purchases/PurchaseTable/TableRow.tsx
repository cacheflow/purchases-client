
import styles from './purchase-table.module.scss';
import TableCellImage from './TableCellImage';
import TableCellPurchaseDate from './TableCellPurchaseDate';
import TableCellCategory from './TableCellCategory';
import TableCellPrice from './TableCellPrice';
import TableCellSettings from './TableCellSettings';
import toCurrency from '@/utils/toCurrency';

const TableRow = ({ purchase }: any) => {
  return (
    <tr>
      <th className={styles.tableHeadName} scope="col">{purchase.name}</th>
      <TableCellImage imgSrc={purchase.location} />
      <TableCellPurchaseDate purchaseDate={purchase.purchaseDate} />
      <TableCellCategory category={purchase.category} />
      <td className={styles.info}>
        {purchase.description}
      </td>
      <TableCellPrice price={toCurrency(purchase.price, 'USD')} />
      <TableCellSettings />
    </tr>
  )
}

export default TableRow;