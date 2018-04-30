const array = [5, 6, 1, 9, 3, 7, 2, 8, 4]

const quickSort = (array, sortedArray = []) => {
  const pivot = array[Math.floor(Math.random()*array.length)]
  let lowerValuesArray = []
  let higherValuesArray = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= pivot) {
      higherValuesArray.push(array[i])
    } else {
      lowerValuesArray.push(array[i])
    }
  }
  if (lowerValuesArray.length == 1) {
    sortedArray.push(lowerValuesArray[0])
  } else if (lowerValuesArray.length > 1){
    quickSort(lowerValuesArray, sortedArray) 
  }

  if (higherValuesArray.length == 1) {
    sortedArray.push(higherValuesArray[0])
  } else if (higherValuesArray.length > 1){
    quickSort(higherValuesArray, sortedArray)
  }
  return sortedArray
}

Array.prototype.quickSort = function() {
  return quickSort(this)
}


const newArray = array.quickSort()
console.log(newArray)
