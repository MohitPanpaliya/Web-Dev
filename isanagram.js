console.log("Hello World")
function isAnagram(str1, str2) {
if(str1.length!=str2.length){
    return false;
}
str1.sort();
str2.sort();
for( let i=0;i<str1.length;i++ ){
    if(str1[i]!=str2[i]){
        return false;
    }
}
return true;
}
let str1=['m','o','h','i','t'];
let str2=['h','i','o','m','t'];

console.log(isAnagram(str1,str2));

