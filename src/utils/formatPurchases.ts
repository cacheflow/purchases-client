import toHumanizedDate from '@/utils/toHumanizedDate'

const formatPurchases = (data: any) => {
  return data.map((d) => {
    return {
      ...d,
      humanizedPurchaseDate: toHumanizedDate(d.purchaseDate),
      purchaseDate: d.purchaseDate
    }
  })
}

export default formatPurchases