export function paginate(moviesArr, currentPage, pageSize) {
  //return an array which contain the items of currentPage
  //ex. [1,2,3,,4,5,6,,7,8,9] if currentPage ===3, return [7,8,9]

  let result = [];
  let currIndex = (currentPage - 1) * pageSize; // get the index of first item of current page
  for (let i = 0; i < pageSize; i++) {
    if (!moviesArr[currIndex]) return result;
    result[i] = moviesArr[currIndex];
    currIndex++;
  }
  //   console.log(result); debug purpose
  return result;
}
