function checkNumber() {
  let numberInput = inputSpace.value;
  if (numberInput === '') {
    alert('Please Enter a Number');
  }
  else {
    let check = checkOptions.value;

    if (check === "1") {
      let isPrime = true;
      if (numberInput <= 1) {
        isPrime = false;
      } else if (numberInput == 2) {
        isPrime = true;
      } else {
        for (i = 2; i < numberInput / 2; i++) {
          if (numberInput % i === 0) {
            isPrime = false;
            break;
          }
        }
      }
      if (isPrime) {
        resultHead.innerHTML = `${numberInput} is a Prime Number`;
      } else {
        resultHead.innerHTML = `${numberInput} is not a Prime Number`;
      }

    }
    else if (check === "2") {
      if (numberInput % 2 === 0) {
        resultHead.innerHTML = `${numberInput} is a Even Number`;
      } else {
        resultHead.innerHTML = `${numberInput} is a Odd Number`;
      }
    }
    else if (check === "3") {
      let reversed = numberInput.toString().split("").reverse().join("");
      resultHead.innerHTML = `${reversed}`;
    }
    else if (check === "4") {
      let numstr = numberInput.toString();
      let n = numstr.length;
      let total = 0;

      for (const digits of numstr) {
        total += Math.pow(Number(digits), n);
      }
      if (numberInput == total) {
        resultHead.innerHTML = `${numberInput} is a Amstrong Number`;
      } else {
        resultHead.innerHTML = `${numberInput} is not a Amstrong Number`;
      }
    }
  }
}