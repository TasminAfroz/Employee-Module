'use strict';
$(document).ready(
				function() {
					// SUBMIT FORM
					$("#submit-form").click(function(event) {
						// Prevent the form from submitting via the browser.
						event.preventDefault();
						if($(this).text()=='Edit'){
							enable_form();
							$('#submit-form').text('Save');
							$('#discard-form').text('Discard');
							$('#discard-form').prop('href', '/employee/list');
						}else{
							$("#hidden-submit-form").trigger( "click" );
						}
					});
										
					$("#form-new-employee").submit(function(event) {
						// Prevent the form from submitting via the browser.
						event.preventDefault();
						ajaxPost();
					});				

					function ajaxPost() {
						var dob = $("#dob").val();
//						dob = dob.split("-")[2] + "/" + dob.split("-")[1] + "/" + dob.split("-")[0] 
						// PREPARE FORM DATA
						
						 $("#submit-form").prop("disabled", true);
						var options = {								
								cache: false,
							    contentType: false,
							    processData: false,
								enctype: "multipart/form-data",
								timeout: 600000,
								success : function(result) {
									$("#submit-form").prop("disabled", false);
									console.log("/employee/details/"+result);
									alert("Success");
									window.location = "/employee/details/"+result;
									disable_form();
									$('#submit-form').text('Edit');
									$('#discard-form').text('Create');
									$('#discard-form').prop('href', '/employee/create');
								},
								error : function(e) {
									$("#submit-form").prop("disabled", false);
									alert("Error!")
									console.log("Error: ", e);
								}
							}
						var method = "POST";
//						var method = "PUT";
						var api_url = "/api/employee/save";
						if($("#emp_id") && $("#emp_id").val()){
							method = "PUT";
							api_url = "/api/employee/update"
						}
						
						var form = $('#form-new-employee')[0];

					    var objFormData = new FormData(form);

						// DO POST
					    options.type = method;
					    options.url = api_url;
					    options.data = objFormData;
						$.ajax(options);

					}
					
					function enable_form(){
						var form = document.getElementById("form-new-employee");
						var elements = form.elements;
						for (var i = 0, len = elements.length; i < len; ++i) {
						    elements[i].disabled = false;
						}	
					}
					
					function disable_form(){
						var form = document.getElementById("form-new-employee");
						var elements = form.elements;
						for (var i = 0, len = elements.length; i < len; ++i) {
						    elements[i].disabled = true;
						}	
					}
				})