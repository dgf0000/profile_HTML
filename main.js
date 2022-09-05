let target = document.querySelector("#dynamic");
let targetStringNum = 0;


function settingString() {
    target.textContent = "";
    let stringArr = ["LEE BAE WON", "Learn to HTML", "Learn to CSS", "Learn to Javascript"];
    let selectString = stringArr[targetStringNum++];
    let selectStringArr = selectString.split("");

    if(targetStringNum >= stringArr.length) targetStringNum = 0;

    return selectStringArr;
}

//typing reset
function resetTyping() {
    dynamic(settingString());
}

//typing text
function dynamic(numArr) {
    if(numArr.length > 0){
        target.textContent += numArr.shift();
        setTimeout(function() {
            dynamic(numArr);
        }, 80);
    }else{
        setTimeout(resetTyping, 3000);
    }
}
dynamic(settingString());

//cursor blink
function blink() {
    target.classList.toggle("active");
}
setInterval(blink, 500);