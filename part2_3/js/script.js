$(document).ready(function() {
    $.ajax({
        url: 'ajaxfile.php',
        type: 'get',
        dataType: 'JSON',
        success: function(response) {
            var len = response.length;
            var output = "<select id = 'selection'>"
            for (var i = 0; i < len; i++) {
                var emp_id = response[i].emp_id;
                var emp_firstName = response[i].emp_firstName;
                var emp_lastName = response[i].emp_lastName;

                output += "<option value='" + emp_id + "' name='" + emp_id + "'>" + emp_id + " " + emp_firstName + " " + emp_lastName + "</option>";

            }
            $("#drop_list").append(output);
        }

    });
});

$(document).ready(function() {
    $('#emp_add').on('click', function() {
        $("#emp_edit").removeAttr("disabled");
        $("#emp_add").attr("disabled", "disabled");
        $("#input_fields").empty();
        var input_fields = "<form id='emp_add_form' name='form1' method='post'><label for='emp_firstName_add'>First Name</label><input type='text' class='input_fields' id='emp_firstName_add' name='emp_firstName_add'></br><label for='emp_middleName_add'>Middle Name</label><input type='text' class='input_fields' id='emp_middleName_add' name='emp_middleName_add'></br><label for='emp_lastName_add'>Last Name</label><input type='text' class='input_fields' id='emp_lastName_add' name='emp_lastName_add'></br><label for='emp_type_add'>Type</label><input type='text' class='input_fields' id='emp_type_add' name='emp_type_add'></br><label for='emp_initialLevel_add'>Initial Level</label><input type='text' class='input_fields' id='emp_initialLevel_add' name='emp_initialLevel_add'></br><label for='emp_hireDate_add'>Hire Date</label><input type='date' class='input_fields' id='emp_hireDate_add' name='emp_hireDate_add'></br><label for='emp_gender_add'>Gender</label><input type='text' class='input_fields' id='emp_gender_add' name='emp_gender_add'></br><label for='emp_birthDate_add'>Birth Date</label><input type='date' class='input_fields' id='emp_birthDate_add' name='emp_birthDate_add'></br><label for='emp_passwd_add'>Password</label><input type='text' class='input_fields' id='emp_passwd_add' name='emp_passwd_add'></br><input type='submit' name='add_btn' value='Add to database' id='add_btn'></form>"
        $("#input_fields").append(input_fields);

        $('#add_btn').on('click', function(e) {
            var emp_firstName = $('#emp_firstName_add').val();
            var emp_lastName = $('#emp_lastName_add').val();
            var emp_middleName = $('#emp_middleName_add').val();
            var emp_type = $('#emp_type_add').val();
            var emp_initialLevel = $('#emp_initialLevel_add').val();
            var emp_hireDate = $('#emp_hireDate_add').val();
            var emp_gender = $('#emp_gender_add').val();
            var emp_birthDate = $('#emp_birthDate_add').val();
            var emp_passwd = $('#emp_passwd_add').val();
            if (emp_firstName != "" && emp_lastName != "" && emp_initialLevel != "" && emp_hireDate != "" && emp_gender != "" && emp_birthDate != "") {
                e.preventDefault()
                $.ajax({
                    url: "emp_add.php",
                    type: "POST",
                    data: {
                        emp_firstName_add: emp_firstName,
                        emp_lastName_add: emp_lastName,
                        emp_middleName_add: emp_middleName,
                        emp_type_add: emp_type,
                        emp_initialLevel_add: emp_initialLevel,
                        emp_hireDate_add: emp_hireDate,
                        emp_gender_add: emp_gender,
                        emp_birthDate_add: emp_birthDate,
                        emp_passwd_add: emp_passwd
                    },
                    cache: false,
                    success: function(dataResult) {
                        $("#emp_add").removeAttr("disabled");
                        $("#input_fields").empty();
                        $('#input_fields').append('<p>Data added successfully !</p>');

                    }
                });
            } else {
                alert('Please fill all the required fields !');
            }
        });
    });
});

$(document).ready(function() {
    $('#emp_edit').on('click', function() {
        $("#emp_add").removeAttr("disabled");
        $("#emp_edit").attr("disabled", "disabled");
        $("#input_fields").empty();
        var input_fields = "<form id='emp_edit_form' name='form2' method='post'><label for='emp_id_edit'>ID</label><input type='text' class='input_fields' id='emp_id_edit' name='emp_id_edit' value=" + $('#selection').val() + " readonly></br><label for='emp_firstName_edit'>First Name</label><input type='text' class='input_fields' id='emp_firstName_edit' name='emp_firstName_edit'></br><label for='emp_middleName_edit'>Middle Name</label><input type='text' class='input_fields' id='emp_middleName_edit' name='emp_middleName_edit'></br><label for='emp_lastName_edit'>Last Name</label><input type='text' class='input_fields' id='emp_lastName_edit' name='emp_lastName_edit'></br><label for='emp_type_edit'>Type</label><input type='text' class='input_fields' id='emp_type_edit' name='emp_type_edit'></br><label for='emp_initialLevel_edit'>Initial Level</label><input type='text' class='input_fields' id='emp_initialLevel_edit' name='emp_initialLevel_edit'></br><label for='emp_hireDate_edit'>Hire Date</label><input type='date' class='input_fields' id='emp_hireDate_edit' name='emp_hireDate_edit'></br><label for='emp_gender_edit'>Gender</label><input type='text' class='input_fields' id='emp_gender_edit' name='emp_gender_edit'></br><label for='emp_birthDate_edit'>Birth Date</label><input type='date' class='input_fields' id='emp_birthDate_edit' name='emp_birthDate_edit'></br><label for='emp_passwd_edit'>Password</label><input type='text' class='input_fields' id='emp_passwd_edit' name='emp_passwd_edit'></br><input type='submit' name='edit_btn' value='Edit Data' id='edit_btn'></form>"
        $("#input_fields").append(input_fields);
        $('#edit_btn').on('click', function(e) {
            var emp_id = $("#selection").val();
            var emp_firstName = $('#emp_firstName_edit').val();
            var emp_lastName = $('#emp_lastName_edit').val();
            var emp_middleName = $('#emp_middleName_edit').val();
            var emp_type = $('#emp_type_edit').val();
            var emp_initialLevel = $('#emp_initialLevel_edit').val();
            var emp_hireDate = $('#emp_hireDate_edit').val();
            var emp_gender = $('#emp_gender_edit').val();
            var emp_birthDate = $('#emp_birthDate_edit').val();
            var emp_passwd = $('#emp_passwd_edit').val();
            if (emp_firstName != "" && emp_lastName != "" && emp_initialLevel != "" && emp_hireDate != "" && emp_gender != "" && emp_birthDate != "") {
                e.preventDefault()
                $.ajax({
                    url: "emp_edit.php",
                    type: "POST",
                    data: {
                        emp_id: emp_id,
                        emp_firstName: emp_firstName,
                        emp_lastName: emp_lastName,
                        emp_middleName: emp_middleName,
                        emp_type: emp_type,
                        emp_initialLevel: emp_initialLevel,
                        emp_hireDate: emp_hireDate,
                        emp_gender: emp_gender,
                        emp_birthDate: emp_birthDate,
                        emp_passwd: emp_passwd
                    },
                    cache: false,
                    success: function() {
                        $("#emp_edit").removeAttr("disabled");
                        $("#input_fields").empty();
                        $("#selection option:selected").text(emp_id + " " + emp_firstName + " " + emp_lastName);
                        $('#input_fields').append('<p>Data edited successfully!</p>');

                    }
                });
            } else {
                alert('Please fill all the required fields !');
            }
        });
    });
});

//Select from Salaries table
var salaries;
$(document).ready(function() {
    $('#calculate_btn').on('click', function() {
        var emp_id = $("#selection").val();
        $.ajax({
            url: "get-salaries.php",
            type: "get",
            dataType: "JSON",
            success: function(response) {
                salaries = response;
            }
        });
    });
});

$(document).ready(function() {
    $('#calculate_btn').on('click', function() {
        var chart = '';
        $("#input_fields").empty();
        var emp_id = $("#selection").val();
        $.ajax({
            url: "calc-ajax.php",
            type: "get",
            dataType: "JSON",
            success: function(response) {
                console.log(salaries)
                var today = new Date();
                for (var i = 0; i < response.length; i++) {
                    if ((i + 1) == emp_id) {
                        var hireDate = new Date(response[i].emp_hireDate);
                        var endOfPeriod1 = new Date('December 31, 2017');
                        var startOfPeriod2 = new Date('January 1, 2018');
                        var endOfPeriod2 = new Date('March 13, 2020');
                        var startOfPeriod3 = new Date('March 14, 2020');
                        var endOfPeriod3 = new Date('December 31, 2020');
                        var startOfPeriod4 = new Date('January 1, 2021');
                        var endOfPeriod4 = new Date('December 31, 2021');

                        var initialLevel = parseInt(response[i].emp_initialLevel);
                        var employeeType = response[i].emp_type;
                        if (employeeType == null) {
                            employeeType = 'FT';
                        }
                        chart += '<h2>Employment type:' + employeeType + '</h2><table id="salary-chart"><tr><th>' + response[i].emp_firstName + ' ' + response[i].emp_lastName + '</th><th>Level</th><th>Salary for the period</th><th>Payment Rate</th></tr>'

                        function monthsBetween(date1, date2, years) {
                            return parseInt((years * 12) + (date1.getMonth() - date2.getMonth()));
                        }

                        //PERIOD 1
                        if (hireDate.getTime() < endOfPeriod1.getTime()) {
                            var yearsBefore2017 = endOfPeriod1.getFullYear() - hireDate.getFullYear();
                            var monthsBefore2017 = monthsBetween(endOfPeriod1, hireDate, endOfPeriod1.getFullYear() - hireDate.getFullYear())
                            var salaryPeriod1 = 0;
                            if (yearsBefore2017 < 0) {
                                yearsBefore2017 = 0;
                            }
                            var period1Level = yearsBefore2017 + initialLevel;
                            if (period1Level >= 10) {
                                period1Level = 9;
                            }

                            var salaryRatePeriod1 = salaries[period1Level - 1].period_1;
                            for (var i = 1; i <= yearsBefore2017; i++) {
                                for (var j = 1; j <= monthsBefore2017; j++) {;
                                    salaryPeriod1 += parseInt(salaries[period1Level - 1].period_1 / 12);
                                }
                                if (period1Level >= 10) {
                                    period1Level = 9;
                                }
                            }
                            if (employeeType == 'PT') {
                                salaryRatePeriod1 = parseFloat((salaryRatePeriod1 / 261) / 8).toFixed(2);
                            }
                            chart += '<tr><td>To Dec 31, 2017</td><td>' + period1Level + '</td><td>$' + salaryPeriod1 + '</td><td>$' + salaryRatePeriod1 + '</td></tr>';
                        }

                        //PERIOD 2
                        if (hireDate.getTime() < endOfPeriod2.getTime()) {
                            var period2Years = endOfPeriod2.getFullYear() - startOfPeriod2.getFullYear();
                            if (period2Years < 0) {
                                period2Years = 0
                            }
                            console.log(period2Years)
                            var salaryPeriod2 = 0;
                            var period2Level = period2Years + initialLevel;

                            var period2Months = monthsBetween(endOfPeriod2, startOfPeriod2, endOfPeriod2.getFullYear() - startOfPeriod2.getFullYear());
                            if (period2Level >= 10) {
                                period2Level = 9;
                            }

                            var salaryRatePeriod2 = salaries[period2Level - 1].period_2;
                            for (var i = 1; i < period2Years; i++) {
                                for (var j = 1; j < period2Months; j++) {;
                                    salaryPeriod2 += parseInt(salaries[period2Level - 1].period_2 / 12);
                                }
                                period2Level++

                                if (period2Level >= 10) {
                                    period2Level = 9;
                                }
                            }
                            if (employeeType == 'PT') {
                                salaryRatePeriod2 = parseFloat((salaryRatePeriod2 / 261) / 8).toFixed(2);
                            }
                            chart += '<tr><td>Jan 1, 2018 - Mar 13, 2020</td><td>' + period2Level + '</td><td>$' + salaryPeriod2 + '</td><td>$' + salaryRatePeriod2 + '</td></tr>';
                        }

                        //PERIOD 3
                        if (hireDate.getTime() < endOfPeriod3.getTime()) {
                            var salaryPeriod3 = 0;
                            var period3Years = startOfPeriod3.getFullYear() - hireDate.getFullYear();
                            if (period3Years < 0) {
                                period3Years = 0
                            }
                            var period3Level = period3Years + initialLevel;
                            if (period3Level >= 10) {
                                period3Level = 9;
                            }
                            var salaryRatePeriod3 = salaries[period3Level - 1].period_3;
                            var period3Months = monthsBetween(endOfPeriod3, startOfPeriod3, endOfPeriod3.getFullYear() - startOfPeriod3.getFullYear());


                            for (var j = 1; j <= period3Months; j++) {;
                                salaryPeriod3 += parseInt(salaries[period3Level - 1].period_3 / 12);
                            }
                            period3Level++
                            if (period3Level == 10) {
                                period3Level = 9;

                            }
                            if (employeeType == 'PT') {
                                salaryRatePeriod3 = parseFloat((salaryRatePeriod3 / 261) / 8).toFixed(2);
                            }
                            chart += '<tr><td>Mar 14, 2020 - Dec 31, 2020</td><td>' + period3Level + '</td><td>$' + salaryPeriod3 + '</td><td>$' + salaryRatePeriod3 + '</td></tr>';
                        }

                        //PERIOD 4
                        if (hireDate.getTime() < endOfPeriod4.getTime()) {
                            var salaryPeriod4 = 0;
                            var period4Years = startOfPeriod4.getFullYear() - hireDate.getFullYear();
                            if (period4Years < 0) {
                                period4Years = 0;
                            }
                            var period4Level = period4Years + initialLevel;
                            if (period4Level >= 10) {
                                period4Level = 9;
                            }

                            var salaryRatePeriod4 = salaries[period4Level - 1].period_4;

                            var period4Months = monthsBetween(endOfPeriod4, startOfPeriod4, endOfPeriod4.getFullYear() - startOfPeriod4.getFullYear());


                            for (var j = 1; j <= period4Months; j++) {;
                                salaryPeriod4 += parseInt(salaries[period4Level - 1].period_4 / 12);
                            }
                            period4Level++
                            if (period4Level >= 10) {
                                period4Level = 9;

                            }
                            if (employeeType == 'PT') {
                                salaryRatePeriod4 = parseFloat((salaryRatePeriod4 / 261) / 8).toFixed(2);
                            }
                            chart += '<tr><td>Jan 1, 2021 - Dec 31, 2021</td><td>' + period4Level + '</td><td>$' + salaryPeriod4 + '</td><td>$' + salaryRatePeriod4 + '</td></tr>';
                        }

                        break;
                    }
                }
                $("#input_fields").append(chart);
                $("#input_fields").append("</table>");
            }
        });
    });
});

$(document).ready(function() {
    $('#retirement_btn').on('click', function() {
        var chart = '';
        $("#input_fields").empty();
        var emp_id = $("#selection").val();
        $.ajax({
            url: "get-retirements.php",
            type: "get",
            dataType: "JSON",
            success: function(response) {
                for (var i = 0; i < response.length; i++) {
                    if ((i + 1) == emp_id) {
                        var birthYear = new Date(response[i].emp_birthDate);
                        var retirementAge = birthYear.getUTCFullYear() + 65;
                        var hireDate = new Date(response[i].emp_hireDate);
                        var retirementService = new Date().getFullYear();
                        while (((retirementService - birthYear.getFullYear()) + (retirementService - hireDate.getFullYear())) < 85) {
                            retirementService++
                        }
                        //CHECKING CONDITIONS A or B
                        if (retirementAge < retirementService) {
                            chart += "<p>" + response[i].emp_firstName + " " + response[i].emp_lastName + " will be eligible for retirement " + retirementAge + "/" + (birthYear.getMonth() + 1) + "/" + birthYear.getDate() + " reaching the age of 65</p>";
                        } else if (retirementAge == retirementService) {

                            if (birthYear.getMonth() < hireDate.getMonth()) {
                                chart += "<p>" + response[i].emp_firstName + " " + response[i].emp_lastName + " will be eligible for retirement " + retirementAge + "/" + (birthYear.getMonth() + 1) + "/" + birthYear.getDate() + " reaching the age of 65</p>";
                            } else if (birthYear.getMonth() > hireDate.getMonth()) {
                                chart += "<p>" + response[i].emp_firstName + " " + response[i].emp_lastName + " will be eligible for retirement " + retirementService + "/" + (hireDate.getMonth() + 1) + "/" + hireDate.getDate() + " due to the service period</p>";
                            }

                        } else if (retirementAge > retirementService) {
                            chart += "<p>" + response[i].emp_firstName + " " + response[i].emp_lastName + " will be eligible for retirement " + retirementService + "/" + (hireDate.getMonth() + 1) + "/" + hireDate.getDate() + " due to the service period</p>";
                        }
                    }

                }
                $("#input_fields").append(chart);
            }

        });
    });
});