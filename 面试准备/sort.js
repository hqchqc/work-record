function bubbleSort(arr) {
  if (!Array.isArray(arr) || arr.length <= 1) return arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[i]];
      }
    }
  }

  return arr;
}

function selectSort(arr) {
  if (!Array.isArray(arr) || arr.length <= 1) return arr;

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (i !== minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

function insertSort(arr) {
  if (!Array.isArray(arr) || arr.length <= 1) return arr;

  for (let i = 0; i < arr.length; i++) {
    let j = i,
      tmp = arr[i];

    while (tmp < arr[j - 1] && j - 1 >= 0) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = tmp;
  }

  return arr;
}

function shellSort(arr) {
  if (!Array.isArray(arr) || arr.length <= 1) return arr;

  let gap = Math.floor(arr.length / 2);

  while (gap >= 1) {
    for (let i = gap; i < arr.length; i++) {
      let j = i,
        temp = arr[i];

      while (temp < arr[j - gap] && j - gap >= 0) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      arr[j] = temp;
    }

    gap = Math.floor(gap / 2);
  }

  return arr;
}

function mergeSort(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return arr;

  if (arr.length === 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2),
    leftArr = arr.slice(0, mid),
    rightArr = arr.slice(mid, arr.length);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
  let result = [],
    leftLength = left.length,
    rightLength = right.length,
    lf = 0,
    lr = 0;

  while (lf < leftLength && lr < rightLength) {
    if (left[lf] > right[lr]) {
      result.push(right[lr++]);
    } else {
      result.push(left[lf++]);
    }
  }

  while (lf < leftLength) {
    result.push(left[lf]);
    lf++;
  }

  while (lr < rightLength) {
    result.push(right[lr]);
    lr++;
  }

  return result;
}

function partition(start, end) {
  let middle = Math.floor((start + end) / 2);
  if (arr[start] > arr[middle]) {
    [arr[start], arr[middle]] = [arr[middle], arr[start]];
  }
  if (arr[middle] > arr[end]) {
    [arr[middle], arr[end]] = [arr[end], arr[middle]];
  }
  if (arr[start] > arr[end]) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
  }
  [arr[middle], arr[end - 1]] = [arr[end - 1], arr[middle]];
  return arr[end - 1];
}
function quickSortRec(start, end) {
  if (end <= start) return;
  let partitions = partition(start, end),
    i = start,
    j = end - 1;
  while (i < j) {
    while (arr[++i] < partitions) {}
    while (arr[--j] > partitions) {}
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else {
      break;
    }
  }
  [arr[i], arr[end - 1]] = [arr[end - 1], arr[i]];
  quickSortRec(start, i - 1);
  quickSortRec(i + 1, end);
}
function quickSort(arr) {
  quickSortRec(0, arr.length - 1);
}
