function ispalindrome(str){
    const realtext = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    const reversetext = realtext.split('').reverse().join('');
    return reversetext === realtext;
}

function ispalindromechecker(){
    const inputText = document.getElementById("inputText");
    const result = document.getElementById("result");
    if(ispalindrome(inputText.value)){
        result.textContent=`"${inputText.value}" is a plaindrome`
    }
    else{
        result.textContent=`"${inputText.value}" is not a plaindrome`
    }

}

document.getElementById("check").addEventListener("click",ispalindromechecker)