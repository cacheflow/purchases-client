const sortPurchasesByDate = (data: any, sortBy: string) => {
  return data.sort((first: any, second: any) => {
    const firstPurchaseDate = Date.parse(first.purchaseDate)
    const secondPurchaseDate = Date.parse(second.purchaseDate)
    if (sortBy == 'asc') {
      return firstPurchaseDate < secondPurchaseDate ? 1 : -1
    }
    if (sortBy == 'desc') {
      return firstPurchaseDate > secondPurchaseDate ? -1 : 1
    }
  })
}


export default sortPurchasesByDate