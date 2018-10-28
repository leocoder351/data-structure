function ArrayList() {
  var array = [];

  var swap = function (index1, index2) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  };

  this.insert = function (item) {
    array.push(item);
  };

  this.toString = function () {
    return array.join();
  };

  // 冒泡排序 - 复杂度 O(n²)
  this.bubbleSort = function () {
    var length = array.length;

    for (var i = 0; i < length; i++) {
      // 外圈循环控制循环次数
      for (var j = 0; j < length - 1; j++) {
        // 内圈循环完成交换
        if (array[j] > array[j + 1]) {
          swap(j, j + 1);
        }
      }
    }
  };

  // 改进后的冒泡排序 - 复杂度 O(n²)
  this.modifiedBubbleSort = function () {
    var length = array.length;

    for (var i = 0; i < length; i++) {
      for (var j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          swap(j, j + 1);
        }
      }
    }
  };

  // 选择排序 - 复杂度 O(n²)
  this.selectionSort = function () {
    var length = array.length;
    var minIndex;

    for (var i = 0; i < length; i++) {
      // 外圈控制循环次数
      minIndex = i;

      for (var j = i; j < length; j++) {
        // 内圈去找最小值的下标index
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }

      if (i !== minIndex) {
        swap(i, minIndex);
      }
    }
  };

  // 插入排序 - 复杂度 O(n²)
  this.insertSort = function () {
    var length = array.length;

    for (var i = 1; i < length; i++) {
      var j = i;
      var temp = array[j];

      while (j > 0 && array[j - 1] > temp) {
        array[j] = array[j - 1];
        j--;
      }

      array[j] = temp;
    }
  };

  // 归并排序 - 复杂度 O(nlogn)
  this.mergeSoft = function () {
    var mergeSoftRec = function (array) {
      var length = array.length;

      if (length === 1) {
        return array;
      }

      var mid = Math.floor(length / 2);
      var left = array.slice(0, mid);
      var right = array.slice(mid, length);

      return merge(mergeSoftRec(left), mergeSoftRec(right));
    };

    var merge = function (left, right) {
      var result = [];
      var il = 0;
      var ir = 0;

      while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
          result.push(left[il++]);
        } else {
          result.push(right[ir++]);
        }
      }

      while (il < left.length) {
        result.push(left[il++]);
      }

      while (ir < right.length) {
        result.push(right[ir++]);
      }

      return result;
    };

    array = mergeSoftRec(array);
  };

  // 快速排序 - 复杂度 O(nlogn)
  this.quickSort = function () {
    var quick = function (array, left, right) {
      var index;

      if (array.length > 1) {
        index = partition(array, left, right);

        if (left < index - 1) {
          // 对左边递归排序
          quick(array, left, index - 1);
        }

        if (index < right) {
          // 对右边递归排序
          quick(array, index, right);
        }
      }
    };

    var partition = function (array, left, right) {
      var pivot = array[Math.floor((left + right) / 2)];
      var i = left;
      var j = right;

      while (i <= j) {
        while (array[i] < pivot) {
          i++;
        }
        while (array[j] > pivot) {
          j--;
        }
        if (i <= j) {
          [array[j], array[i]] = [array[i], array[j]];
          i++;
          j--;
        }
      }
      return i;
    };

    quick(array, 0, array.length - 1);
  };

  // 堆排序
  this.heapSort = function () {
    var heapSize = array.length;

    var buildHeap = function (array) {
      var heapSize = array.length;
      for (var i = Math.floor(array.length / 2); i >= 0; i--) {
        heapify(array, heapSize, i);
      }
    };

    var heapify = function (array, heapSize, i) {
      var left = i * 2 + 1,
        right = i * 2 + 2,
        largest = i;
      if (left < heapSize && array[left] > array[largest]) {
        largest = left;
      }
      if (right < heapSize && array[right] > array[largest]) {
        largest = right;
      }
      if (largest !== i) {
        swap(array, i, largest);
        heapify(array, heapSize, largest);
      }
    };

    buildHeap(array);
    while (heapSize > 1) {
      heapSize--;
      swap(array, 0, heapSize);
      heapify(array, heapSize, 0);
    }
  };
}

function createNonSortArray(size) {
  var array = new ArrayList();

  for (var i = size; i > 0; i--) {
    array.insert(Math.floor(Math.random() * size));
  }

  return array;
}


/*----------------------------------------------*/


var array = createNonSortArray(10);

// 冒泡排序测试
console.warn('冒泡排序测试');
console.log(array.toString());
array.bubbleSort();
console.log(array.toString());
array = createNonSortArray(10);
console.log(array.toString());
array.modifiedBubbleSort();
console.log(array.toString());

// 选择排序测试
console.warn('选择排序测试');
array = createNonSortArray(10);
console.log(array.toString());
array.selectionSort();
console.log(array.toString());

// 插入排序测试
console.warn('插入排序测试');
array = createNonSortArray(10);
console.log(array.toString());
array.insertSort();
console.log(array.toString());

// 归并排序测试
console.warn('归并排序测试');
array = createNonSortArray(10);
console.log(array.toString());
array.mergeSoft();
console.log(array.toString());

// 快速排序测试
console.warn('快速排序测试');
array = createNonSortArray(10);
console.log(array.toString());
array.quickSort();
console.log(array.toString());

// 堆排序测试
console.warn('堆排序测试');
array = createNonSortArray(10);
console.log(array.toString());
array.heapSort();
console.log(array.toString());