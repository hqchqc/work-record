// 时间复杂度 nlogn 空间复杂度 n 是稳定排序

{
  function mergeSort(arr: number[]): number[] {
    if (!Array.isArray(arr) || arr.length === 0) return arr;

    if (arr.length === 1) return arr;

    const midIndex = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, midIndex);
    const rightArr = arr.slice(midIndex, arr.length);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
  }

  function merge(leftArr: number[], rightArr: number[]) {
    let lf = 0,
      lr = 0,
      result: number[] = [];

    while (lf < leftArr.length && lr < rightArr.length) {
      if (leftArr[lf] > rightArr[lr]) {
        result.push(rightArr[lr++]);
      } else {
        result.push(leftArr[lf++]);
      }
    }

    while (lf < leftArr.length) {
      result.push(leftArr[lf++]);
    }

    while (lr < rightArr.length) {
      result.push(rightArr[lr++]);
    }

    return result;
  }

  const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
  console.log(mergeSort(arr));
}
