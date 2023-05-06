// 时间复杂度 nlogn 空间复杂度 logn 不是稳定排序

{
  function quickSort(arr: number[]): number[] {
    if (!Array.isArray(arr) || arr.length <= 1) return arr;

    sort(0, arr.length - 1);

    function sort(left: number, right: number) {
      if (left > right) return;

      let i = left,
        j = right,
        pivot = arr[left];

      while (i < j) {
        while (arr[j] > pivot && i < j) {
          j--;
        }

        if (i < j) {
          arr[i] = arr[j];
          i++;
        }

        while (arr[i] < pivot && i < j) {
          i++;
        }

        if (i < j) {
          arr[j] = arr[i];
          j--;
        }
      }

      arr[i] = pivot;

      sort(left, i - 1);
      sort(i + 1, right);
    }

    return arr;
  }

  const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
  console.log(quickSort(arr));
}
