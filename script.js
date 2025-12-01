
function checkLeapYear() {
    const year = parseInt(document.getElementById('yearInput').value);
    const resultDiv = document.getElementById('result');
    
    if (isNaN(year) || year < 1) {
        resultDiv.innerHTML = "请输入有效的年份！";
        resultDiv.style.color = "red";
        return;
    }

    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    resultDiv.innerHTML = `${year}年${isLeap ? '是' : '不是'}闰年`;
    resultDiv.style.color = isLeap ? "#2ecc71" : "#e74c3c";
}