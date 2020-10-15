function bubbleSort (arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j +1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    };
  };
  return arr
}

console.log(bubbleSort([56,72,34,77,90,11,2,1,4]))

function selectionSort (arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j
            }
        };
        let temp = arr[i]
        arr[i] = arr[lowest];
        arr[lowest] = temp
    };
    return arr
};

console.log(selectionSort([56,72,34,77,90,11,2,1,4]))

function es6SelectionSort(arr) {
    const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
    for (let i = 0; i < arr.length; i++) {
        let lowest = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j
            }
        };
        if (i !== lowest) swap(arr, i, lowest)
    };
    return arr
};

console.log(es6SelectionSort([56,72,34,77,90,11,2,1,4]))

//