//loginPage 
const loginBtn = document.getElementById('loginBtn').addEventListener('click', function(){
    const loginPage = document.getElementById('login-page');
    loginPage.style.display = "none";
    const transactionPage = document.getElementById("transaction-page");
    transactionPage.style.display = "block";
})
//deposit handaler start

const DepositButton = document.getElementById('depositBtn').addEventListener("click", function (){
    const depositAmount = document.getElementById('depositAmount').value;
    depositNumber = parseFloat(depositAmount);

    const depositNumUpdate = document.getElementById('depositUpdate').innerText;
     depositUpdateNumber = parseFloat(depositNumUpdate);

    const totalDeposit = depositNumber + depositUpdateNumber;
    
    document.getElementById('depositUpdate').innerText = totalDeposit;
    document.getElementById('depositAmount').value = '';

    //deposit add balance start;

    const balance = document.getElementById('balanceUpdate').innerText;
    balanceNumber = parseFloat(balance);
    
    const totalBalance = depositNumber + balanceNumber;
    document.getElementById('balanceUpdate').innerText = totalBalance;

    //deposit add balance end;





})


//deposit handaler end
// withdraw start

const withdrawButton = document.getElementById('withdrawBtn').addEventListener('click' ,function (){
    const withdrawAmount = document.getElementById('withdrawAmount').value;
    withdrawNumber= parseFloat(withdrawAmount);

    const withdrawUpadate = document.getElementById('withdrawUpdate').innerText;
    withdrawUpadateNumber = parseFloat(withdrawUpadate);

    const totalWithdraw = withdrawNumber +  withdrawUpadateNumber;

    document.getElementById('withdrawUpdate').innerText = totalWithdraw;
     document.getElementById('withdrawAmount').value = '';



     const balance = document.getElementById('balanceUpdate').innerText;
     balanceNumber = parseFloat(balance);
     
     const totalBalance = balanceNumber - withdrawNumber;
     document.getElementById('balanceUpdate').innerText = totalBalance;
    




    alert('You are withdrawing' + " " + withdrawNumber + " "  +  'Taka')
 

})