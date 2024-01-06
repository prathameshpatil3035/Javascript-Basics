function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0]; // Choose a pivot element (typically the first element)
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]); // Elements less than the pivot go to the left
    } else {
      right.push(arr[i]); // Elements greater than or equal to the pivot go to the right
    }
  }

  // Recursively sort the left and right sub-arrays
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  // Combine the sorted sub-arrays with the pivot and return
  return [...sortedLeft, pivot, ...sortedRight];
}

// Example usage:
const unsortedArray = [6, 3, 9, 5, 2, 8];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // Output: [2, 3, 5, 6, 8, 9]
