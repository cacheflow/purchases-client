import decodeHTML from "./decodeHTML"

const cleanPurchaseDescriptions = (purchases: any[]) => {
  return purchases.map((purchase) => {
    return {
      ...purchase,
      description: decodeHTML(purchase.description)
    }
  })
}

export default cleanPurchaseDescriptions