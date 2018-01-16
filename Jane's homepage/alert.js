/**
 * click event
 */
$(document).ready(function(){

	var str = "ideas are cheap";

	// automatically excute when the load of DOM is over
	if ( $(".ipt-search").val() == "" || $(".ipt-search").val() == str) {
		$(".ipt-search").css({"color" : "#999", "font-style" : "italic"}).val(str);
	}

	// when focused
	$(".ipt-search").focus(function() {
		if ( $(this).val() == str ) {
			$(this).css({"color" : "#555"}).val("");
		}
	}).blur(function() {
		if ( $(this).val() == "" ) {
			$(this).css({"color" : "#999", "font-style" : "italic"}).val(str);
		}
	});

	// when clicked
	$(".smt-search").click(function() {
		if ( $(".ipt-search").val() == "" || $(".ipt-search").val() == str) {
			alert("u inputed nothing");
			return false;
		} else {
			$(this).submit();
		}
	});

	// show login window when clicked 
	$(".btn-comment").click(function() {
		alert("please login first");
		$("#login").removeClass("hidden").addClass("show");
	});

});