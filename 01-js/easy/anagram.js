function sort(str){
  var array = str.split("")
  array = array.sort();
  var sortedString = array.join("")
  return sortedString
}

function isAnagram(str1, str2){
  if (sort.str1 == sort.str2){
    return true;
  
  }else{
  return false;
}
}

var ans = isAnagram("silent", "listen")
console.log(ans)
