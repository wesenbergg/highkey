/**
 * This is an utility to convert lowercase strings to uppercase.
 * It converts each character to ascii-code, checks if it's match to
 * range of codes where the lowercase characters are and converts them.
 * NOTE: This function supports conversion of letters from A to Z, but
 * with the same idea it can be implemented to other characters fe. ö, ä, å.
 * @param {*} str string to convert to uppercase
 */
export default function toUpperCase(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 97 && code <= 122) {
      code -= 32;
    }
    newStr += String.fromCharCode(code);
  }
  return newStr;
}
