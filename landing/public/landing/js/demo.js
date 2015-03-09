$(document).ready(function(){

	$('#color-schemes li a').click(function(){

		var num = $(this).parent().index() + 1;
		$(this).parents('ul').find('a').removeClass('current');

		$(this).addClass('current');
		if( $('head link[href*="css/color-schemes/color-scheme"]').length > 0 ) {
			$('head link[href*="css/color-schemes/color-scheme"]').attr('href', 'css/color-schemes/color-scheme-'+num+'.css');
		} else {
			$('head').append('<link rel="stylesheet" href="css/color-schemes/color-scheme-'+num+'.css">');
		}

		return false;
	});
	var time  =  new time_write();
});

function time_write(){
	this.sec = $('.countdown-amount.sec');
	this.min = $('.countdown-amount.min');
	this.day = $('.countdown-amount.day');
	this.hour = $('.countdown-amount.hour');

	this.end = Date.parse($('#countdown').attr('data-end'));
	var that = this;
	var update = function(){
		var now = new Date();
		var timeDiff = Math.abs(that.end.valueOf() - now.valueOf());
		that.day.text(Math.ceil(timeDiff/(3600*24*1000)));
		that.hour.text(("00"+Math.ceil((timeDiff/(3600*1000))%24)).slice(-2));
		that.min.text(("00"+Math.ceil((timeDiff/(60*1000))%60)).slice(-2));
		that.sec.text(("00"+Math.ceil((timeDiff/(1000))%60)).slice(-2));
	}

	setInterval(update,1000);

}