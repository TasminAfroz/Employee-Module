'use strict';

$(document).ready( function () {
//    let table = $('#employee-table').dataTable();
//    let tableTools = new $.fn.dataTable.TableTools( table, {
//        "buttons": [
//            "prev",
//            "next",
//            "search": false
//        ]
//    } );
//
//    $( tableTools.fnContainer() ).insertAfter('div.info');
    
    var table = $('#employee-table').DataTable({    	
		'ajax' : '/api/employee/list',
		'serverSide' : true,
		'searching': false,
		'lengthChange': false,
		"pageLength": 10,
		'columnDefs': [
		    { 'orderable': false, 'targets': '_all' }
		],
		'columns' : [ {
			data : 'name',
			render: function (data, type, row) { 
				 if(data){
					 return "<a href='/employee/details/" + row.employeeId + "' target='_blank'>" + data + "</a>";
				 }else{
				 	return data; 
				 }
			 }
		}, {
			data : 'workPhone'
		}, {
			data : 'workEmail'
			
		}, {
			data : 'department',
			 render: function (data) { 
				 if(data){
					 return data.name;
				 }else{
				 	return data; 
				 }
			 }
		}, {
			data : 'jobTitle',
			 render: function (data) { 
				 if(data){
					 return data.name;
				 }else{
					 return data; 
				 }
			 }
		}, {
			data : 'manager',
			 render: function (data) { 
				 if(data){
					 return data.name;
				 }else{
					 return data; 
				 }
			 }
		} ]
	});
} );



//
//$(document).ready(function() {
//    $('#example').DataTable( {
//        "paging":   false,
//        "ordering": false,
//        "info":     false
//    } );
//} );
//
//
//.dataTables_filter {
//display: none;
//} 