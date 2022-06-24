

  let btn = document.querySelector("#click");
  let inputValue = document.querySelector("input").value;
  let result =  document.querySelector(".result");

  btn.addEventListener("click", () =>{
    if(inputValue < "") {
      result.innerText = "Please enter your age";
    }
    else if(Number(inputValue) < 20) {
      result.innerText = "You are below age";
    }
    else if(Number(inputValue) > 20) {
      result.innerText = "You are above 20";
    }
  })
