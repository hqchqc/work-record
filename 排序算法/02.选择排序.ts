// 时间复杂度 n² 空间复杂度 1 不是稳定排序

{
  function selectionSort(arr: number[]) {
    if (!Array.isArray(arr) || arr.length <= 1) return;

    for (let i = 0; i < arr.length; i++) {
      let minIndex = i;

      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }

      if (i !== minIndex) {
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
      }
    }

    return arr;
  }

  const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
  console.log(selectionSort(arr));
}
