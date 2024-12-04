// Define an empty array to store employee details and empty object to store individual employee data
let employeeDetails = [];
let employeeInfo = {};

// Adding event listener for Add Data button
submitButton.addEventListener("click", () => {
    if (empName.value == "" || age.value == "") {
        alert("All fields are mandatory!");
    } else if (age.value < 20 || age.value > 60) {
        alert("Employee age can't be allowed");
    } else {
        // Creating New Employee object
        employeeInfo.empName = empName.value;
        employeeInfo.age = age.value;
        employeeInfo.designation = designation.value;
        if(localStorage.getItem('employeeDetails')){
            var strEmployeeDetails = localStorage.getItem('employeeDetails');
            employeeDetails = JSON.parse(strEmployeeDetails);
    }

        employeeDetails.push(employeeInfo);
        // updating  the local storage with employeeDetails
        localStorage.setItem("employeeDetails", JSON.stringify(employeeDetails));
        // Adding new epmloyee to the table
        addEmpInfoToTable(empInfo, employeeInfo);
        clearFields();
    }
});
