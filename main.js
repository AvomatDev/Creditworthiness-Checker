//variable declaration


let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let act = document.getElementById("act");
let ab = document.getElementById("ab");
let loanRequestAmt = document.getElementById("loanRequestAmt");
let creditHistory = document.getElementById("creditHistory");
let depositDate = document.getElementById("depositDate");
let lastLoanCollection = document.getElementById("lastLoanCollection");
let loanRepaymentPeriod = document.getElementById("loanRepaymentPeriod");
let accountType = document.getElementById("accountType");
let messageTxt = document.getElementById("messageTxt");


let firstNameError = document.getElementById("firstNameError");
let lastNameError = document.getElementById("lastNameError");
let actError = document.getElementById("actError");
let abError = document.getElementById("abError");
let loanRequestAmtError = document.getElementById("loanRequestAmtError");
let creditHistoryError = document.getElementById("creditHistoryError");
let depositDateError = document.getElementById("depositDateError");
let lastLoanError = document.getElementById("lastLoanCollectionError");
let loanRepaymentPeriodError = document.getElementById("loanRepaymentPeriodError");
let accountTypeError = document.getElementById("accountTypeError");


let name = lastName.value + firstName.value;
let balance = act.value;
let loan = loanRequestAmt.value;

// Accept Value Variables
let balancef;
let creditHistoryF;
let depositDatef;
let lastLoanCollectionf;
let loanRepaymentPeriodf;
let accountTypef;
let ans;



//element.addEventListener(event, function, useCapture);
btnsubmit.addEventListener("click", function () {
    validateData();
});

function validateData() {
    if (firstName.value == "") {
        firstNameError.innerHTML = "This value is required";
    } else {
        firstNameError.innerHTML = "";
    }

    if (lastName.value == "") {
        lastNameError.innerHTML = "This value is required";
    } else {
        lastNameError.innerHTML = "";
    }

    if (act.value == "") {
        actError.innerHTML = "This value is required";
    } else {
        actError.innerHTML = "";
    }


    if (ab.value == "") {
        abError.innerHTML = "This value is required";
    } else {
        abError.innerHTML = "";
    }


    if (loanRequestAmt.value == "") {
        loanRequestAmtError.innerHTML = "This value is required";
    } else {
        loanRequestAmtError.innerHTML = "";
    }


    if (creditHistory.value == "") {
        creditHistoryError.innerHTML = "This value is required";
    } else {
        creditHistoryError.innerHTML = "";
    }


    if (depositDate.value == "") {
        depositDateError.innerHTML = "This value is required";
    } else {
        depositDateError.innerHTML = "";
    }

    if (lastLoanCollection.value == "") {
        lastLoanCollectionError.innerHTML = "This value is required";
    } else {
        lastLoanError.innerHTML = "";
    }

    if (loanRepaymentPeriod.value == "") {
        loanRepaymentPeriodError.innerHTML = "This value is required";
    } else {
        loanRepaymentPeriodError.innerHTML = "";
    }

    if (accountType.value == "") {
        accountTypeError.innerHTML = "This value is required";
    } else {
        accountTypeError.innerHTML = "";
    }

    if (firstName.value != "" && lastName.value != "" && act.value != "" && ab.value != "" && loanRequestAmt.value != "" && creditHistory.value != "" && depositDate.value !== "" && lastLoanCollection.value != "" && loanRepaymentPeriod.value != "" && accountType.value != "") {
        acceptValue()
    }


}



function acceptValue() {
    if (ab.value >= loanRequestAmt.value) {
        balancef = 10;
        
    } else { balancef = -10; }

    if (creditHistory.value == "2") {
        creditHistoryF = 10;
    } else { creditHistoryF = 0; }

    if (depositDate.value == "1") {
        depositDatef = 5;
    } else { depositDatef = 0 }

    if (lastLoanCollection.value == "2") {
        lastLoanCollectionf = 10;
    } else { lastLoanCollectionf = 0; }

    if (loanRepaymentPeriod.value == "1") {
        loanRepaymentPeriodf = 5;
    } else { loanRepaymentPeriodf = 0; }

    if (accountType.value == "1") {
        accountTypef = 10
    } else {
        accountTypef = 5
    }

    ans = balancef + creditHistoryF + depositDatef + lastLoanCollectionf + loanRepaymentPeriodf + accountTypef;
    successMessage()
}

function successMessage() {
    if (ans >= 30)
        messageTxt.innerHTML = ("Congratulations your " + loanRequestAmt.value + " loan request granted");
    else {
        messageTxt.innerHTML = ("You're not qualify to get this loan")
    }
    ExitApp();
}

function ExitApp() {
    firstName.value = ""
    lastName.value = ""
    act.value = ""
    ab.value = ""
    loanRequestAmt.value = ""
    creditHistory.value = ""
    depositDate.value = ""
    lastLoanCollection.value = ""
    loanRepaymentPeriod.value = ""
    accountType.value = ""

}

