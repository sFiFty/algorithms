const array = [5, 6, 1, 9, 3, 7, 2, 8, 4]

Array.prototype.min = function() {
  return Math.min.apply(null, this)
}

const selectionSort = array => {
  let sortedArray = []
  for (let i = 0; i < array.length; i++) {
    if (i > 0) {
      sortedArray = [...sortedArray.slice(0, i), ...findAndSwap(sortedArray.slice(i, sortedArray.length))]
    } else {
      sortedArray = findAndSwap(array)
    }
  }
  return sortedArray
}

const findAndSwap = (array, index) => {
  let minVal = array.min()
  let first = array[0]
  array[array.indexOf(minVal)] = first
  array[0] = minVal
  return array
}

Array.prototype.selectionSort = function() {
  return selectionSort(this)
}


const newArray = array.selectionSort()
console.log(newArray)
