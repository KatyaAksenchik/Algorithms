function changeArrayOrder(index, data) {
  if (data && data.length < 3) return data;
  const updatedArray = data.slice(index, 3);
  return [...updatedArray, ...data.slice(index, 3)];
}


function sortNumbersAscending(data) {
  return data.sort((a, b) => {
    return a - b;
  })
}

function bubbleSort(data) {
  for (let i = data.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (data[j] > data[j + 1]) {
        let active = data[j];
        data[j] = data[j + 1];
        data[j + 1] = active;
      }
    }
  }

  return data;
}

function insertionSort(data) {
  let sortedData = [];
  data.forEach((item) => {
    sortedData.push(item);
    if (sortedData.length > 1) {
      for (let j = sortedData.length - 1; j > 0; j--) {
        if (sortedData[j] > sortedData[j + 1]) {
          let active = sortedData[j];
          sortedData[j] = sortedData[j + 1];
          sortedData[j + 1] = active;
        }
      }
    }
  });
  return sortedData;
}

console.log("changeArrayOrder", changeArrayOrder(1, ["bison", "camel", "duck", "elephant"]));
console.log("sort", sortNumbersAscending([1, 8, 4, 2, 7, 6]));
console.log("bubbleSort", bubbleSort([1, 8, 4, 2, 7, 6]));
console.log("insertionSort", insertionSort([1, 8, 4, 2, 7, 6]));