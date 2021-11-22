function responsiveNavbar() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
function submitForm() {
    
		var is_error = false;
		var error_count = 0;
		
		var fullname = $("#name").val();
		if (fullname == "") {
			$("input#name").css("border-color", "#ff3333");
			is_error = true;
			error_count += 1;
		}

		var email = $("#email").val();
		if (email == "") {
			$("input#email").css("border-color", "#ff3333");
			is_error = true;
			error_count += 1;
		}
    var enquiry = $("#enquiry").val();
		if (enquiry == "") {
			$("textarea#enquiry").css("border-color", "#ff3333");
			is_error = true;
			error_count += 1;
		}


		if (is_error == true) {
			$("span#error-count").text(error_count);
			$("p#error-list").css("display", "block");
			event.preventDefault();
		}

		$("#fullname").focusout(function() {
			$("input#fullname").css("border-color", "#dddddd");
		});
		$("#email").focusout(function() {
			$("input#email").css("border-color", "#dddddd");
		});
		$("#description").focusout(function() {
			$("textarea#description").css("border-color", "#dddddd");
		});
	}
