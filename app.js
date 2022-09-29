//예제
const age = parseInt(prompt("how old are you?"));
    //prompt 창을 띄워서 결과값을 받을 수 있음
    //parseInt 문자를 숫자로 변환해줌
if(isNaN(age)){
    console.log("please write a number.");
} else{
    console.log("Thank you for writing your age.");
}
    //isNaN 숫자면 true, 아니면 false를 반환함