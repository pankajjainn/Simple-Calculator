let calculator=()=>{
    // .value ka use input ke andar ki value ke liye
    let input1=parseFloat(document.querySelector("#num1").value)
    let input2=parseFloat(document.querySelector("#num2").value)

    let operator=document.querySelector("#operator").value

    let result=document.querySelector("#output")

    switch (operator) {
        case "+":
            result.innerText=`Answer is :${input1+input2}`
            break;

            case "-":
            result.innerText=`Answer is :${input1-input2}`
            break;

            case "*":
            result.innerText=`Answer is :${input1*input2}`
            break;

            case "/":
                input2===0?result.innerText="Divison By Zero Is Not Allowed":
            result.innerText=`Answer is :${input1/input2}`
            break;

            case "%":
                input2===0?result.innerText="Modulus By Zero Is Not Allowed":
            result.innerText=`Answer is :${input1%input2}`
            break;
    
        default:
            break;
    }



}