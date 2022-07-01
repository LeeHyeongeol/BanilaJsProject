// 회원가입 유효성 검사
const validationCheck = (str) => {
  var pattern1 = /[0-9]/; // 숫자
  var pattern2 = /[a-zA-Z]/; // 문자
  var pattern3 = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자

  var numtextyn = (pattern1.test(str) || pattern2.test(str));
  if (!numtextyn || pattern3.test(str) || str.length > 14) {
    return false;
  } else {
    return true;
  }
}

module.exports = validationCheck;
