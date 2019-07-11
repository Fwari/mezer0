$(function () {
	$(window).scrollTop(0);
	setInterval(setTyping, 100);	//-- 메인 텍스트 타이핑 효과
});

//- Scroll event
$(window).scroll(function () {
	if ($(window).scrollTop() <= 0) {
		$('nav').removeClass('sticky');
	} else {
		$('nav').addClass('sticky');
	}

	if ($(window).scrollTop() <= ($('#Skill').offset().top)) {
		if(RotateFlag){
			RotateFlag = false;
			setRotate();
		}
	}
});

function moveContent(moveName) {
	var scrTop = 0;
	if (moveName != 'Nav') {
		scrTop = $('#' + moveName).offset().top - $('nav').outerHeight();
	}
	$("html, body").stop(true, true).animate({ scrollTop: scrTop }, 500, 'swing');
}

//- 메인 텍스트 타이핑 효과
var bFlag = true;
var TargetIndex = 1;
function setTyping() {
	var typingTxt = $(".text-main").eq(0).text();
	if(bFlag){
		TargetIndex++;
		if(TargetIndex == typingTxt.length){
			setTimeout(function() {
				bFlag = false;
			},500)
		}
	}else{
		TargetIndex--;
		if(TargetIndex == 1){
			setTimeout(function() {
				bFlag = true;
			},300)
		}
	}
	$(".typing").text(typingTxt.substring(0, TargetIndex));
}

//- 도넛 그래프
var RotateIdx = 0;
var RotateFlag = true;
function setRotate() {
	var deg = ($('.empty').eq(RotateIdx).text().replace('%', '') - 50) * 3.6
	$('.fill').eq(RotateIdx).animate({rot:deg}, {
		duration: 500,
		step: function(now, fx){
			$(this).css({
				transform: "rotate(" + now + "deg)"
			});
		},
		complete: function(){
			RotateIdx++;
			setRotate();
		}
	});
}