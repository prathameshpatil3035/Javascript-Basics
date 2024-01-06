function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    // Store the current element to be compared
    const currentElement = arr[i];
    let j = i - 1;

    // Compare the current element with elements to its left
    // and move larger elements one position to the right
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Place the current element in its correct position
    arr[j + 1] = currentElement;
  }

  return arr;
}

// Example usage:
const unsortedArray = [4, 2, 7, 1, 9, 3];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 4, 7, 9]
