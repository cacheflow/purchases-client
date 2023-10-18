import styles from './purchase-table.module.scss';

const TableHead = ({ headers }: {
  headers: string[]
}) => {

  return (
    <thead className={styles.tableHeader}>
      <tr className={styles.tableRow}>
        {headers.map((header: any, id: Number) => {
          return <th className={styles.tableHeadName} key={`table-head-${id}`} scope="col">{header}</th>
        })}
      </tr>
    </thead>
  )
}

export default TableHead;