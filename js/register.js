const prev = document.querySelectorAll(".previous-btn");
const next = document.querySelectorAll(".next-btn");
const step = document.querySelectorAll(".step");
const stepTrans = document.getElementById("step-transform");
const formStep = document.querySelectorAll(".register-form-inactive");
let formStepNum = 0;
let stepTransPercent = 0;

const alertMess = document.querySelectorAll(".required-alert");
let inputNum = 1;

next.forEach((btn) => {
    
        btn.addEventListener("click", () => {
            var n = "input-value-"+inputNum;
            var m = "input-value-"+(inputNum+1);
            if(!document.getElementById(n).value && !document.getElementById(m).value) {
                alertMess[inputNum-1].style.visibility = 'visible';
                alertMess[inputNum].style.visibility = 'visible';
           
            } else if(!document.getElementById(n).value ) {
                alertMess[inputNum-1].style.visibility = 'visible';
            } else if(!document.getElementById(m).value) {
                alertMess[inputNum].style.visibility = 'visible';
            }else if(inputNum==1) {
                var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                var myArray = document.getElementById(n).value;
                var confirmPass = document.getElementById("input-value-2.5");

                console.log(re.test(myArray));
                if(!re.test(myArray)) {
                    alertMess[inputNum-1].style.visibility = 'visible';
                    alertMess[inputNum-1].innerHTML= 'Wrong syntax of email!';
                } else if(confirmPass.value!=document.getElementById(m).value) {
                    alertMess[inputNum].style.visibility = 'visible';
                    alertMess[inputNum].innerHTML= 'Re-confirm the password!';
                } else {
                    run();
                }
            } else {
                run();
            }
        });
});


prev.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepNum--;
        stepTransPercent -= 50;
        updateFormStep();
        updateCircleStep();
        inputNum -= 2;
    });
});

function updateFormStep() {
    
    formStep.forEach((form)=> {
        form.classList.contains("register-form-active") &&
            form.classList.remove("register-form-active");
    });
    
    var n = " width: "+ stepTransPercent + "%;";
    stepTrans.setAttribute("style", n);
    step[formStepNum].classList.add("step-active");
    formStep[formStepNum].classList.add("register-form-active");
}

function updateCircleStep () {
    step[formStepNum+1].classList.remove("step-active");
}

  function run (){
    formStepNum++;
    stepTransPercent += 50;
    alertMess[inputNum-1].style.visibility= 'hidden';
    alertMess[inputNum].style.visibility= 'hidden';
    updateFormStep();
    inputNum += 2;
  }
