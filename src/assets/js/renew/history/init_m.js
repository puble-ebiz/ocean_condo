$(function() {
	$("#his-tab > li").on('click', function() {
		$(this).addClass('on').siblings().removeClass('on');
	});
});