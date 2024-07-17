function checkLength (length, maxLength) {
  if (length <= maxLength) {
    return true;
  }else {
    return false;
  }
}
checkLength(10,15);


function checkPalindromy (length) {
  return length.split('').reverse().join('') === length;
}
checkPalindromy('дед');

