function countingSort(arr) {
  if (arr.length === 0) {
    return arr;
  }

  // Find the maximum and minimum values in the array
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  // Create a count array to store the count of each element
  const countArray = new Array(max - min + 1).fill(0);

  // Count the occurrences of each element in the original array
  for (let i = 0; i < arr.length; i++) {
    countArray[arr[i] - min]++;
  }

  // Reconstruct the sorted array from the count array
  let sortedIndex = 0;
  for (let i = 0; i < countArray.length; i++) {
    while (countArray[i] > 0) {
      arr[sortedIndex] = i + min;
      sortedIndex++;
      countArray[i]--;
    }
  }

  return arr;
}

// Example usage:
const unsortedArray = [4, 2, 2, 8, 3, 3, 1];
const sortedArray = countingSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]
