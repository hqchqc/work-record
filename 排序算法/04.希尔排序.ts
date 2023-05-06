// 时间复杂度 nlogn 空间复杂度 1 不是稳定排序

{
  function shellSort(arr: number[]) {
    if (!Array.isArray(arr) || arr.length <= 1) return;

    let gap = Math.floor(arr.length / 2);

    while (gap > 0) {
      for (let i = gap; i < arr.length; i++) {
        let current = arr[i],
          j = i;

        while (j - gap >= 0 && arr[j - gap] > current) {
          arr[j] = arr[j - gap];
          j -= gap;
        }

        arr[j] = current;
      }

      gap = Math.floor(gap / 2);
    }

    return arr;
  }

  const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
  console.log(shellSort(arr));
}
