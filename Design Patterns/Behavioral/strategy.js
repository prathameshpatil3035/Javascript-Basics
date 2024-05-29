// Strategy interface for sorting algorithms
class SortingStrategy {
  sort(data) {
    throw new Error("Method sort must be implemented");
  }
}

// Concrete strategy for bubble sort
class BubbleSort extends SortingStrategy {
  sort(data) {
    console.log("Sorting using Bubble Sort");
    // Implementation of bubble sort algorithm
    return data.slice().sort((a, b) => a - b);
  }
}

// Concrete strategy for insertion sort
class InsertionSort extends SortingStrategy {
  sort(data) {
    console.log("Sorting using Insertion Sort");
    // Implementation of insertion sort algorithm
    return data.slice().sort((a, b) => a - b);
  }
}

// Concrete strategy for quicksort
class QuickSort extends SortingStrategy {
  sort(data) {
    console.log("Sorting using Quick Sort");
    // Implementation of quicksort algorithm
    return data.slice().sort((a, b) => a - b);
  }
}

// Context class that uses the sorting strategy
class Sorter {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  sort(data) {
    return this.strategy.sort(data);
  }
}

// Usage
const sorter = new Sorter(new BubbleSort());

const data = [5, 3, 8, 1, 2];
console.log("Original data:", data);

console.log("Sorted data:", sorter.sort(data));

// Change strategy dynamically
sorter.setStrategy(new QuickSort());
console.log("Sorted data with Quick Sort:", sorter.sort(data));

// Original data: [5, 3, 8, 1, 2]
// Sorting using Bubble Sort
// Sorted data: [1, 2, 3, 5, 8]
// Sorting using Quick Sort
// Sorted data with Quick Sort: [1, 2, 3, 5, 8]
