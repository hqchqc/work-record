// 时间复杂度 n² 空间复杂度 1 是稳定排序

{
  function bubbleSort(arr: number[]) {
    if (!Array.isArray(arr) || arr.length <= 1) return;

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }

    return arr;
  }

  const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
  console.log(bubbleSort(arr));
}
