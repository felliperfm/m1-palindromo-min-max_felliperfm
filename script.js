function isPalindrome(str) {
    let strLower = str.toLowerCase();
    let strLowerClean = strLower.replaceAll(" ", "");
    let strLowerCleanReversed = "";
    for (let i = strLowerClean.length - 1; i >= 0; i--) {
        strLowerCleanReversed += strLowerClean[i]
    }
    return strLowerCleanReversed == strLowerClean ? true : false;
}

function arrayMaxMin(arr) {
    let max = arr[0];
    let min = arr[0];
    let arrMaxMin;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    arrMaxMin = [min, max]
    return arrMaxMin
}