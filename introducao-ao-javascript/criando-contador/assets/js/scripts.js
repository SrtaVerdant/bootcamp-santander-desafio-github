var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = currentNumberWrapper.innerHTML;

document.getElementById('add').addEventListener("click", function() {
    if (currentNumber <= 10) {
        if (currentNumber >= 0) {
            currentNumberWrapper.style.color = 'black';
        }
        currentNumberWrapper.innerHTML = currentNumber++;
        document.getElementById('mostracampo2').style.display = 'none';
    }else{
        document.getElementById('mostracampo').style.display = 'block';
        document.getElementById('mostracampo2').style.display = 'none';
    }
    
    
});

document.getElementById('sub').addEventListener("click", function() {
    if (currentNumber >= -1) {
        if (currentNumber < 0) {
            currentNumberWrapper.style.color = 'red';
        }
        currentNumberWrapper.innerHTML = currentNumber--;
        document.getElementById('mostracampo').style.display = 'none';
    }else{
        document.getElementById('mostracampo2').style.display = 'block';
        document.getElementById('mostracampo').style.display = 'none';
    }
});