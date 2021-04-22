/**
 * Check if value is primitive.
 */
export function isPrimitive(value) {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    // $flow-disable-line
    typeof value === "symbol" ||
    typeof value === "boolean"
  );
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
export function isObject(obj) {
  return obj !== null && typeof obj === "object";
}

/**
 * Quick empty object check
 */
export function isEmptyObject(obj) {
  for (var key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) return false;
  }
  return true;
}

/**
 * Remove an item from an array.
 */
export function remove(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

/**
 * Check whether an object has the property.
 */
const hasOwnProperty = Object.prototype.hasOwnProperty;
export function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

/*check if value is undefined or null*/
export function isUndef(v) {
  return v === undefined || v === null;
}

/*shuffle*/

export function shuffle(arr) {
  console.time("copy");
  // let rtn = JSON.parse(JSON.stringify(arr));  // 深拷贝性能更差
  let rtn = [...arr]; //浅拷贝就足矣，因为只是改变数组元素的下标，与元素内容无关。速度比深拷贝快很多（几倍甚至更多），且数量越多越明显。
  console.timeEnd("copy");
  for (let j, x, i = rtn.length; i; ) {
    j = Math.floor(Math.random() * i);
    x = rtn[--i];
    rtn[i] = rtn[j];
    rtn[j] = x;
  }
  return rtn;
}
