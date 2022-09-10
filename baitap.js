function isPrimeNumber(num) {
    for (var i = 2; i < num/2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function xuatRaTapHop() {
    var a = document.getElementById('soN').value * 1;
    var arrA = [];
    if (a <= 0) {
        alert('Nhập lại dữ liệu')
    }
    else if (a === 1) {
        document.getElementById('result').style.display = "block";
        document.getElementById('result').innerHTML = "Số 1 không phải số nguyên tố";
    }
    else {
        for (i = 2; i <= a; i++) {
            if (isPrimeNumber(i)) {
                arrA.push(i)
            }
        }
        var ketQua = arrA.join(' ');
        document.getElementById('result').style.display = "block";
        document.getElementById('result').innerHTML = ketQua;
    }
}