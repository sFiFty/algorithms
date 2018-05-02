const array = [11, 5, 6, 10, 1, 9, 14, 17, 18, 20, 25, 3, 7, 2, 8, 4, 13]

const quickSort = (array, sortedArray = []) => {
  if (array.length <= 2) {
    if (array[0] > array[1]) {
      array[1] && sortedArray.push(array[1])
      array[0] && sortedArray.push(array[0])
    } else {
      array[0] && sortedArray.push(array[0])
      array[1] && sortedArray.push(array[1])
    }
    return sortedArray
  }
  const pivot = array[Math.floor(Math.random()*array.length)]
  let l = [] //left part of array
  let r = [] // right part of array
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= pivot) {
      r.push(array[i])
    } else {
      l.push(array[i])
    }
  }
  quickSort(l, sortedArray) 
  quickSort(r, sortedArray)
  return sortedArray
}

Array.prototype.quickSort = function() {
  return quickSort(this)
}

console.time("quickSort")
const newArray = array.quickSort()
console.log(newArray);
console.timeEnd("quickSort")

