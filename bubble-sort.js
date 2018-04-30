const array = [5, 6, 1, 9, 3, 7, 2, 8, 4]

const bubbleSort = array => {
  let currentStep = 1
  let condition = false
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) {
      condition = true
      let prev = array[i - 1] 
      array[i - 1] = array[i]
      array[i] = prev
    }
  }
  if (condition) bubbleSort(array)
  return array
}

Array.prototype.bubbleSort = function() {
  return bubbleSort(this)
}


const newArray = array.bubbleSort()
console.log(newArray)
