import styles from './purchase-table.module.scss';

type CategoryType = 'grey' | 'green' | 'blue' | 'red'

interface CategoryMap {
  [key: string]: CategoryType
}

const categoryVariantMap: CategoryMap = {
  technology: 'grey',
  shopping: 'green',
  entertainment: 'blue',
  automotive: 'red',
  default: 'grey'
}


const TableCellCategory = ({ category }: {
  category: string
}) => {
  return (
    <td className={styles.tableData}>
      <button className={`category-button ${categoryVariantMap[category.toLowerCase()] || categoryVariantMap.default}`}>
        {category}
      </button>
    </td>
  )
}

export default TableCellCategory