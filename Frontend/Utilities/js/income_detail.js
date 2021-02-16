function createIncomeDetail() {
    var income_detail = {};
    income_detail['income_id']=$("#income_id").val();
    income_detail['income_date']=$("#income_date").val();
    income_detail['income_reason']=$("#income_reason").val();
    income_detail['income_unit_amount']=$("#income_amount").val();
    $.ajax({
        type: "POST",
        url: BACKEND_URL + "createIncomeDetail",
        data: JSON.stringify(income_detail),
        success: function (data) {
            document.getElementById("income_form").reset();
            destroyDatatable("#tbl_income", "#tbl_income_container");
            destroyDatatable("#tbl_income_detail", "#tbl_income_detail_container");
            successMessage(data);
            getIncome();
            getIncomeDetailByIncomeId($("#income_id").val());
            
        },
        error: function (message){
            errorMessage(message);
        }
    });
}
function addIncomeDetail() {
    var income_detail = {};
    income_detail['income_id']=$("#income_id").val();
    income_detail['income_date']=$("#income_detail_date").val();
    income_detail['income_reason']=$("#income_detail_reason").val();
    income_detail['income_unit_amount']=$("#income_detail_amount").val();
    $.ajax({
        type: "POST",
        url: BACKEND_URL + "createIncomeDetail",
        data: JSON.stringify(income_detail),
        success: function (data) {
            $('#income_modal').modal('toggle');
            destroyDatatable("#tbl_income", "#tbl_income_container");
            destroyDatatable("#tbl_income_detail", "#tbl_income_detail_container");
            successMessage(data);
            getIncome();
            getIncomeDetailByIncomeId($("#income_id").val());
            
        },
        error: function (message){
            errorMessage(message);
        }
    });
}
function getIncomeDetailByIncomeId(income_id) {
    destroyDatatable("#tbl_income_detail", "#tbl_income_detail_container");
    $.ajax({
        type: "POST",
        url: BACKEND_URL + "getIncomeDetailByIncomeId",
        data: "income_id=" +income_id,
        success: function (data) {
            data.forEach(function (element) {
                
                var tr = "<tr>";
                tr += "<td >" + element.income_date + "</td>";
                tr += "<td >" +  element.income_reason+ "</td>";
                tr += "<td >" + thousands_separators( element.income_unit_amount)+ "</td>";
                tr += "</tr>";
                $('#tbl_income_detail_container').append(tr);
                
            });
            startDataTable("#tbl_income_detail");
            
        },
        error: function (message) {
            dataMessage(message,"#tbl_income_detail", "#tbl_income_detail_container");
        }
    });
}