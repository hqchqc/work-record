// 时间复杂度 n² 空间复杂度 1 是稳定排序

{
  function insertionSort(arr: number[]) {
    if (!Array.isArray(arr) || arr.length <= 1) return;

    for (let i = 1; i < arr.length; i++) {
      let current = arr[i],
        j = i - 1;

      while (j >= 0 && current < arr[j]) {
        arr[j + 1] = arr[j];
        j--;
      }

      arr[j + 1] = current;
    }

    return arr;
  }

  const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
  console.log(insertionSort(arr));
}
