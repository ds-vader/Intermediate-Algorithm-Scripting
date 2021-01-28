/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
    var result=[];
    /* create corect range of character from begin ti end string*/
    for (var idx=str.charCodeAt(0); idx <=str.charCodeAt(str.length-1); ++idx){
      result.push(String.fromCharCode(idx));
    }

    /* find difference between str and result(correct tange of character)  */
    let difference = result.filter(x => !str.split("").includes(x)).toString();

    /* if str unincluded some char return char*/
    if(!str.includes(difference)){
      return difference;
    }else{
      return undefined;
    }
}


console.log(fearNotLetter("abce"));