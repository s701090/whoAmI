
getworryList();
var $category = $('.Categories__CateogryWrapper-sc-15qbxer-1');
console.log($category);
function allTheStories(){
	$.ajax({
		url: contextPath + "/worry/CategoryCheckOK.bo",
		type: "get",
		dataType: "json", //text일 경우 dataType 생략 가능
		data : {"allTheStories" : $('#allTheStories').text()},
		success: showList,
		error: function(a, b, c){
			console.log("오류" + c);
		}
		
	})
}
function change(item){
	   $category.css("color", "rgb(136, 136, 136)")
	   $category.css("background-color", "white")
	   $category.css("font-weight", "500")
	   
	   $(item).css("background-color", "#4b4d91");
	   $(item).css("color", "#fff");
	   $(item).css("font-weight", "bold");
	   /*$(item).css("border-radius", "18px");*/
	}

function generalConcern(){
	$.each($category, function(index, item) {
	      $(item).click(function() {
	         change(item);
	      });
	   });
	$.ajax({
		 url: contextPath + "/worry/CategoryCheckOK.bo",
		  type: "get",
	      dataType: "json", //text일 경우 dataType 생략 가능
	      data : {"generalConcern" : $('#generalConcern').text()},
	      success: showList,
	      error: function(a, b, c){
	      console.log("오류" + c);
	      }

	})
}
function employment(){
	$.ajax({
		url: contextPath + "/worry/CategoryCheckOK.bo",
		type: "get",
		dataType: "json", //text일 경우 dataType 생략 가능
		data : {"employment" : $('#employment').text()},
		success: showList,
		error: function(a, b, c){
			console.log("오류" + c);
		}
		
	})
}

function job(){
	$.ajax({
		url: contextPath + "/worry/CategoryCheckOK.bo",
		type: "get",
		dataType: "json", //text일 경우 dataType 생략 가능
		data : {"job" : $('#job').text()},
		success: showList,
		error: function(a, b, c){
			console.log("오류" + c);
		}
		
	})
}
function love(){
	$.ajax({
		url: contextPath + "/worry/CategoryCheckOK.bo",
		type: "get",
		dataType: "json", //text일 경우 dataType 생략 가능
		data : {"love" : $('#love').text()},
		success: showList,
		error: function(a, b, c){
			console.log("오류" + c);
		}
		
	})
}
function sexualHarassment(){
	$.ajax({
		url: contextPath + "/worry/CategoryCheckOK.bo",
		type: "get",
		dataType: "json", //text일 경우 dataType 생략 가능
		data : {"sexualHarassment" : $('#sexualHarassment').text()},
		success: showList,
		error: function(a, b, c){
			console.log("오류" + c);
		}
		
	})
}
function marriage(){
	$.ajax({
		url: contextPath + "/worry/CategoryCheckOK.bo",
		type: "get",
		dataType: "json", //text일 경우 dataType 생략 가능
		data : {"marriage" : $('#marriage').text()},
		success: showList,
		error: function(a, b, c){
			console.log("오류" + c);
		}
		
	})
}
function interpersonal(){
	$.ajax({
		url: contextPath + "/worry/CategoryCheckOK.bo",
		type: "get",
		dataType: "json", //text일 경우 dataType 생략 가능
		data : {"interpersonal" : $('#interpersonal').text()},
		success: showList,
		error: function(a, b, c){
			console.log("오류" + c);
		}
		
	})
}
function apearance(){
	$.ajax({
		url: contextPath + "/worry/CategoryCheckOK.bo",
		type: "get",
		dataType: "json", //text일 경우 dataType 생략 가능
		data : {"apearance" : $('#apearance').text()},
		success: showList,
		error: function(a, b, c){
			console.log("오류" + c);
		}
		
	})
}
function family(){
	$.ajax({
		url: contextPath + "/worry/CategoryCheckOK.bo",
		type: "get",
		dataType: "json", //text일 경우 dataType 생략 가능
		data : {"family" : $('#family').text()},
		success: showList,
		error: function(a, b, c){
			console.log("오류" + c);
		}
		
	})
}
function study(){
	$.ajax({
		url: contextPath + "/worry/CategoryCheckOK.bo",
		type: "get",
		dataType: "json", //text일 경우 dataType 생략 가능
		data : {"study" : $('#study').text()},
		success: showList,
		error: function(a, b, c){
			console.log("오류" + c);
		}
		
	})
}
function money(){
	$.ajax({
		url: contextPath + "/worry/CategoryCheckOK.bo",
		type: "get",
		dataType: "json", //text일 경우 dataType 생략 가능
		data : {"money" : $('#money').text()},
		success: showList,
		error: function(a, b, c){
			console.log("오류" + c);
		}
		
	})
}
function sexualLife(){
	$.ajax({
		url: contextPath + "/worry/CategoryCheckOK.bo",
		type: "get",
		dataType: "json", //text일 경우 dataType 생략 가능
		data : {"sexualLife" : $('#sexualLife').text()},
		success: showList,
		error: function(a, b, c){
			console.log("오류" + c);
		}
		
	})
}
function parting(){
	$.ajax({
		url: contextPath + "/worry/CategoryCheckOK.bo",
		type: "get",
		dataType: "json", //text일 경우 dataType 생략 가능
		data : {"parting" : $('#parting').text()},
		success: showList,
		error: function(a, b, c){
			console.log("오류" + c);
		}
		
	})
}
function addiction(){
	$.ajax({
		url: contextPath + "/worry/CategoryCheckOK.bo",
		type: "get",
		dataType: "json", //text일 경우 dataType 생략 가능
		data : {"addiction" : $('#addiction').text()},
		success: showList,
		error: function(a, b, c){
			console.log("오류" + c);
		}
		
	})
}
function body(){
	$.ajax({
		url: contextPath + "/worry/CategoryCheckOK.bo",
		type: "get",
		dataType: "json", //text일 경우 dataType 생략 가능
		data : {"body" : $('#body').text()},
		success: showList,
		error: function(a, b, c){
			console.log("오류" + c);
		}
		
	})
}
function mentalHealth(){
	$.ajax({
		url: contextPath + "/worry/CategoryCheckOK.bo",
		type: "get",
		dataType: "json", //text일 경우 dataType 생략 가능
		data : {"mentalHealth" : $('#mentalHealth').text()},
		success: showList,
		error: function(a, b, c){
			console.log("오류" + c);
		}
		
	})
}
function LGBT(){
	$.ajax({
		url: contextPath + "/worry/CategoryCheckOK.bo",
		type: "get",
		dataType: "json", //text일 경우 dataType 생략 가능
		data : {"LGBT" : $('#LGBT').text()},
		success: showList,
		error: function(a, b, c){
			console.log("오류" + c);
		}
		
	})
}
function ego(){
	$.ajax({
		url: contextPath + "/worry/CategoryCheckOK.bo",
		type: "get",
		dataType: "json", //text일 경우 dataType 생략 가능
		data : {"ego" : $('#ego').text()},
		success: showList,
		error: function(a, b, c){
			console.log("오류" + c);
		}
		
	})
}
function outcasting(){
	$.ajax({
		url: contextPath + "/worry/CategoryCheckOK.bo",
		type: "get",
		dataType: "json", //text일 경우 dataType 생략 가능
		data : {"outcasting" : $('#outcasting').text()},
		success: showList,
		error: function(a, b, c){
			console.log("오류" + c);
		}
		
	})
}
function cheering(){
	$.ajax({
		url: contextPath + "/worry/CategoryCheckOK.bo",
		type: "get",
		dataType: "json", //text일 경우 dataType 생략 가능
		data : {"cheering" : $('#cheering').text()},
		success: showList,
		error: function(a, b, c){
			console.log("오류" + c);
		}
		
	})
}
function freedom(){
	$.ajax({
		url: contextPath + "/worry/CategoryCheckOK.bo",
		type: "get",
		dataType: "json", //text일 경우 dataType 생략 가능
		data : {"freedom" : $('#freedom').text()},
		success: showList,
		error: function(a, b, c){
			console.log("오류" + c);
		}
		
	})
}



const $worrystories = ('#worrystories');
const $mystories = ('#mystories');
var check = false;
//카테고리 클릭시 게시글 변경
/*$.each($category, function(index, item){ 
    $(item).click(function(){
    	 if(check == false){
    		 $worrystories.css("display", "block");
    		 $mystories.css("display", "none");
             check = true;
         }else{
        	 $worrystories.css("display", "none");
    		 $mystories.css("display", "block");
             check = false;
         }
    });
});*/


var categorys;

function showList(categorys) {
	var text = "";
	if (categorys != null && categorys.length != 0) {
		$ .each( categorys, function(index, category) {
		text +='	<div class="Story__StoryWrapper-k2b9r5-1 ipdyPy" >'
		text +='	<div class="story">'
		text +='		<div class="story__header">'
		text +='			<div class="story__header__info">'
		text +='				<div class="cate-name">' +category.worryCategoryNumber+'</div>'
		text +='			</div>'
		text +='			<div class="story__header__tags">'
		text +='				<span>' +category.worryHashTag+'</span>'
		text +='			</div>'
		text +='		</div>'
		text +='		<div class="main">'
		text +='			<a class="title" data-index="' + index + '">'+ category.worryTitle +'</a>'
		text +='			<a class="contents" href="#" style="text-overflow:ellipsis;">' +category.worryContent+'</a>'
		text +='		</div>'
		text +='		<form action="'+contextPath+'/worry/LikeOK.bo" name="LikeForm" method="post">'
		text +='		<div class="footer">'
		text +='			<div class="reactions">'
		text +='				<input type="hidden" name="userNumber" value="' +category.userNumber+'">'
		text +='				<input type="hidden" name="worryNumber" value="' +category.worryNumber+'">'
		text +='				<input class="check" type="hidden" name="check" value="' +category.isCheck+'">'
		if(category.isCheck == true){
			text +='						<img class="empathy" name="worryLikeNumber"'
				text +='					src="data:image/jpeg;base64,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"'
				text +='					alt="공감" >'
		}else{
			text +='						<img class="empathy" name="worryLikeNumber"'
				text +='					src="data:image/jpeg;base64,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"'
				text +='					alt="공감" >'
		}
		text +='				 <span> <span id="likeNumber">' +category.worryLikeNumber+'</span>명이 공감. </span>'
		text +='			</div>'
		text +='			<div class="reactions">'
		text +='				<div class="nickname">' +category.userNickname+'</div>'
		text +='			</div>'
		text +='		</div>'
		text +='		</form>'
		text +='	</div>'
		text +='</div>'
						
						});
	}
	$("#mystories").html(text);
	
	const $empathy = $('.empathy');//하트 img
	var count = 0;
	const $check = $('.check');
	const $name = $('.cate-name');
	$(document).ready(function(){
		$.each($empathy, function(index, item){ 
		    $(item).click(function(){
		        if($check[index].value != "true"){
		           $($empathy[index]).attr("src","data:image/jpeg;base64,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")
		           $($check[index]).val("true")
		           count = 1;
		        }else{
		           $($empathy[index]).attr("src","data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBARXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAMAAwAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAQEBAQEBAQEBAQIBAQECAwICAgIDBAMDAwMDBAQEBAQEBAQEBAQEBAQEBAUFBQUFBQYGBgYGBwcHBwcHBwcHB//bAEMBAQEBAgICAwICAwcFBAUHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHB//dAAQAA//aAAwDAQACEQMRAD8A/vX8U+K/D3grRLzxF4o1SPSNIsRl5ZD1J6KoGWd27KoJPYV4pD8aPiDryC/8EfAXV9b0N+Y7rUbuDTWkT+8kcu5mUjlT3FVbywh+Jn7QN/petILzwx8GbC2uI7N+Y31K/BdJXXo3lwr8oI4bkdTX0tQB4f4Y+OWjanr1r4Q8Y+HtQ+Gni++4trTVkAiuT0xbzqfLl54/hyeBk0vif45aNpmvXXhDwd4e1D4leL7E4ubTSUBitjnGLidj5cXPH8WDwcGu98d+BPDvxF8OXnhrxJaefaXA3RSrgSwSgfLLE38Loeh78gggkUeBPAnh34deHLPw14btPItLcbpZWwZZ5SPmllb+J3PU9uAAAAKAPJZvjR8QdBQ3/jf4C6vomhpzJdaddwak0af3nji2sqgcsewr2vwt4r8PeNdEs/EXhfVI9X0i+GUljPQjqrA4ZHXurAEdxXQ1802dhD8M/wBoGw0vRUFn4Y+M1hc3ElmnEaalYAO8qL0XzIW+YActyegoA//Q/tpSceBv2kNRN/8AudJ+M2kwC2nPCm/00FPKJ6AmBtwz1JAFfR9eefE74e2HxJ8LzaJcXDaZqlpIt3pt/FkSWl3FzHKpGDweGAIypOCDg1yfws+Jl/rN1efD7x/Aui/FLwymLmHpHewjhbq3PAZHHLAfdPYDgAHt9FFFABXzg86+Of2kNPNh++0n4M6TOLmccqL/AFIBPJz0JEC7jjoQQa6D4qfEy/0a6s/h98P7dda+KXiZMW0PWOyhPDXVweQqIOVB+8exHB6z4Y/D2w+G3heHRLe4bU9Uu5Gu9Sv5cmS7u5eZJWJyeTwoJOFAyScmgD//0f7+K8v+Jnwv0z4h2dlcx3knh7xf4ffztJ1i24ntpf03xN/GhOCOmDzXqFFAHg/w9+KeqNrX/CtPipZx+HfiTaLmCReLXVIh0mtmOBuOMtH1BzgcMqnxC+KeqLrX/CtPhXZx+IviTdrmeRubXS4j1muWGRuGcrH1Jxkcqrdz8RfhzoHxK0L+yNZV7W8tH8+wv4DtuLSdeVlifggggZGcEdexB8OvhzoHw10L+yNGV7q8u38+/v5zuuLuduWllfkkkk4GcAdO5IBnfDP4X6Z8PLO9uZLyTxD4v8QP52raxc8z3Mv67Il/gQHAHXJ5r1CiigD/2Q==")
		           $($check[index]).val("false") 
		           count = -1;
		        }
		        updateLike($($(this).parent), count, index);
		    })
		});
	});

	function updateLike(reactions, count, index){
		var worryNumber = reactions.find("input[name='worryNumber']")[index].value;
		$.ajax({
			url: contextPath + "/worry/LikeOK.bo",
			type: "get",
			data: {"worryNumber": worryNumber, "count": count},
			success: function(result){
				$.ajax({
					url: contextPath + "/worry/WorryLikeNumberOK.bo",
					type: "get",
					data: {"worryNumber": worryNumber},
					dataType: "json",
					success: function(result){
						console.log(reactions);
						console.log("기존값 : " + reactions.find("span#likeNumber")[index].innerHTML);
						console.log("변경할 값 : " + result.worryLikeNumber);
						reactions.find("span#likeNumber")[index].innerHTML = result.worryLikeNumber;
					}
				});
			}
		});
	}




		
		$.each($name, function(index, item){
	    		if($(item).text() == 1) {
	       		$(item).text("일반 고민");
	   			}
	    		if($(item).text() == 2) {
	       		$(item).text("취업 진로");
	    		}
	    		if($(item).text() == 3) {
	       		$(item).text("직장");
	    		}
	    		if($(item).text() == 4) {
	       		$(item).text("연애");
	   			}
	    		if($(item).text() == 5) {
	       		$(item).text("성추행");
	    		}
	    		if($(item).text() == 6) {
	       		$(item).text("결혼/육아");
	    		}
	    		if($(item).text() == 7) {
	       		$(item).text("대인관계");
	   			}
	    		if($(item).text() == 8) {
	       		$(item).text("외모");
	    		}
	    		if($(item).text() == 9) {
	       		$(item).text("가족");
	    		}
	    		if($(item).text() == 10) {
	       		$(item).text("학업/고시");
	   			}
	    		if($(item).text() == 11) {
	       		$(item).text("금전/사업");
	    		}
	    		if($(item).text() == 12) {
	       		$(item).text("성생활");
	    		}
	    		if($(item).text() == 13) {
	       		$(item).text("이별/이혼");
	   			}
	    		if($(item).text() == 14) {
	       		$(item).text("중독/집착");
	    		}
	    		if($(item).text() == 15) {
	       		$(item).text("투병/신체");
	    		}
	    		if($(item).text() == 16) {
	       		$(item).text("정신건강");
	   			}
	    		if($(item).text() == 17) {
	       		$(item).text("LGBT");
	    		}
	    		if($(item).text() == 18) {
	       		$(item).text("자아/성격");
	    		}
	    		if($(item).text() == 19) {
	       		$(item).text("따돌림");
	   			}
	    		if($(item).text() == 20) {
	       		$(item).text("응원");
	    		}
	    		if($(item).text() == 21) {
	       		$(item).text("자유");
	    		}
	 		}); 
		
		//상세보기
		$(".title").each(function(index, item){
			$(item).click(function(){
				const worryNumber=$($(".worryNumber")[index]).val();
				location.href = contextPath +'/worry/WorryDetailOK.bo?worryNumber=' + worryNumber;
			})
		});
}


var List;

function getworryList(){
	$.ajax({
		url: contextPath + "/worry/WorryListOK.bo",
		type: "get",
		dataType: "json",
		success: showworryList,
		error:function(request, status, error) {
	        alert("status : " + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
		}
	});
}

function showworryList(List) {
	var text = "";
	if (List != null && List.length != 0) {
		$.each(List, function(index, worry) {
		text +='	<div class="Story__StoryWrapper-k2b9r5-1 ipdyPy" >'
		text +='	<div class="story">'
		text +='		<div class="story__header">'
		text +='			<div class="story__header__info">'
		text +='				<div class="cate-name">' +worry.worryCategoryNumber+'</div>'
		text +='			</div>'
		text +='			<div class="story__header__tags">'
		text +='				<span>' +worry.worryHashTag+'</span>'
		text +='			</div>'
		text +='		</div>'
		text +='		<div class="main">'
		text +='			<a class="title" data-index="' + index + '">'+worry.worryTitle+'</a>'
		text +='			<a class="contents"  style="text-overflow:ellipsis;">' +worry.worryContent+'</a>'
		text +='		</div>'
		text +='		<form action="'+contextPath+'/worry/LikeOK.bo" name="LikeForm" method="post">'
		text +='		<div class="footer">'
		text +='			<div class="reactions">'
		text +='				<input type="hidden" name="userNumber" value="' +worry.userNumber+'">'
		text +='				<input data-index="' + index + '" type="hidden" class="worryNumber" name="worryNumber" value="' +worry.worryNumber+'">'
		text +='				<input class="check" type="hidden" name="check" value="' +worry.isCheck+'">'
		if(worry.isCheck == true){
			text +='						<img class="empathy" name="worryLikeNumber"'
				text +='					src="data:image/jpeg;base64,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"'
				text +='					alt="공감" >'
		}else{
			text +='						<img class="empathy" name="worryLikeNumber"'
				text +='					src="data:image/jpeg;base64,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"'
				text +='					alt="공감" >'
		}
		text +='				 <span> <span id="likeNumber">' +worry.worryLikeNumber+'</span>명이 공감. </span>'
		text +='			</div>'
		text +='			<div class="reactions">'
		text +='				<div class="nickname">' +worry.userNickname+'</div>'
		text +='			</div>'
		text +='		</div>'
		text +='		</form>'
		text +='	</div>'
		text +='</div>'
						
						});
	}
	$("#mystories").html(text);
	
	const $empathy = $('.empathy');//하트 img
	var count = 0;
	const $check = $('.check');
	const $name = $('.cate-name');
	$(document).ready(function(){
		$.each($empathy, function(index, item){ 
		    $(item).click(function(){
				console.log("클릭안할시" + $check[index].value);
		        if($check[index].value != "true"){
		           $($empathy[index]).attr("src","data:image/jpeg;base64,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")
		           $($check[index]).val("true")
		           count = 1;
		        }else{
		           $($empathy[index]).attr("src","data:image/jpeg;base64,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")
		           $($check[index]).val("false") 
		           count = -1;
		        }
		        updateLike($($(this).parent), count, index);
		    })
		});
	});

	function updateLike(reactions, count, index){
		var worryNumber = reactions.find("input[name='worryNumber']")[index].value;
		$.ajax({
			url: contextPath + "/worry/LikeOK.bo",
			type: "get",
			data: {"worryNumber": worryNumber, "count": count},
			success: function(result){
				$.ajax({
					url: contextPath + "/worry/WorryLikeNumberOK.bo",
					type: "get",
					data: {"worryNumber": worryNumber},
					dataType: "json",
					success: function(result){
						console.log(reactions);
						console.log("기존값 : " + reactions.find("span#likeNumber")[index].innerHTML);
						console.log("변경할 값 : " + result.worryLikeNumber);
						reactions.find("span#likeNumber")[index].innerHTML = result.worryLikeNumber;
					}
				});
			}
		});
	}




		
		$.each($name, function(index, item){
	    		if($(item).text() == 1) {
	       		$(item).text("일반 고민");
	   			}
	    		if($(item).text() == 2) {
	       		$(item).text("취업 진로");
	    		}
	    		if($(item).text() == 3) {
	       		$(item).text("직장");
	    		}
	    		if($(item).text() == 4) {
	       		$(item).text("연애");
	   			}
	    		if($(item).text() == 5) {
	       		$(item).text("성추행");
	    		}
	    		if($(item).text() == 6) {
	       		$(item).text("결혼/육아");
	    		}
	    		if($(item).text() == 7) {
	       		$(item).text("대인관계");
	   			}
	    		if($(item).text() == 8) {
	       		$(item).text("외모");
	    		}
	    		if($(item).text() == 9) {
	       		$(item).text("가족");
	    		}
	    		if($(item).text() == 10) {
	       		$(item).text("학업/고시");
	   			}
	    		if($(item).text() == 11) {
	       		$(item).text("금전/사업");
	    		}
	    		if($(item).text() == 12) {
	       		$(item).text("성생활");
	    		}
	    		if($(item).text() == 13) {
	       		$(item).text("이별/이혼");
	   			}
	    		if($(item).text() == 14) {
	       		$(item).text("중독/집착");
	    		}
	    		if($(item).text() == 15) {
	       		$(item).text("투병/신체");
	    		}
	    		if($(item).text() == 16) {
	       		$(item).text("정신건강");
	   			}
	    		if($(item).text() == 17) {
	       		$(item).text("LGBT");
	    		}
	    		if($(item).text() == 18) {
	       		$(item).text("자아/성격");
	    		}
	    		if($(item).text() == 19) {
	       		$(item).text("따돌림");
	   			}
	    		if($(item).text() == 20) {
	       		$(item).text("응원");
	    		}
	    		if($(item).text() == 21) {
	       		$(item).text("자유");
	    		}
	 		}); 
		
		//상세보기
		$(".title").each(function(index, item){
			$(item).click(function(){
				const worryNumber=$($(".worryNumber")[index]).val();
				location.href = contextPath +'/worry/WorryDetailOK.bo?worryNumber=' + worryNumber;
			})
		});
}

const user = $("input[name='userNumber']").val();

var contextPath = "${pageContext.request.contextPath}";
var check = false;
var arr = new Array();
//더보기 변경
const $more = $('.categories__more');//더 보기 감싼 div
const $more__word = $('.categories__more__word');//더 보기 div
const $more__word__img = $('.more__word__img');//더 보기 img
const $lbBSCZ = $('.lbBSCZ');//클래스
const $menus = $('.categories__menus');//클래스
const $fZFOiU = $('.fZFOiU');//목록
const $FZ = $('.1');






$.each($more, function(index, item){
    $(item).click(function(){
        if(check == false){
            $more__word.text("닫기")
            $more__word__img.attr("src", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBARXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAALKADAAQAAAABAAAALAAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgALAAsAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAQEBAQEBAQEBAQIBAQECAwICAgIDBAMDAwMDBAQEBAQEBAQEBAQEBAQEBAUFBQUFBQYGBgYGBwcHBwcHBwcHB//bAEMBAQEBAgICAwICAwcFBAUHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHB//dAAQAA//aAAwDAQACEQMRAD8A/v4ooooAKK5LxZ4+8DeA/wDhHf8AhN/GGmeEf+Eu1ODRdK/tK5jtvtmoXOfJtYPMZfNuJdp2RplmwcA11tABRRRQB//Q/v4r5+/ac/ac+Ef7I/wj1/4y/GXX/wCx/Dej4htbWECS91G9kB8mysocgz3U5BCqMAAF3Kxq7r9A1+Z/hP8AYj8cfEr9rjxF+1Z+2L4s0z4l/wDCtNTntvg54O01ZTo3h/TwwKalPFMB5+tz4UvIQyxMoZGO2EQAHyx4T/YG8cf8FG/+Ei/aP/4KRWOp+EP+Eu0yey+Gfwx027ltv+EJ0+5w0d/O67fN1+XakjmVCseAssZ+WG39T/Zj/ac+Ln7MHxc0D9gv9vPX/wC2PEmsZh+E/wAWJgY7LxhZRkKlleuxIg12AFUZXcmckAlpGjkuf2Er5+/ac/Zj+Ef7XHwj1/4NfGXQP7Y8N6xia1uoSI73Tr2MHyb2ymwTBdQEkqwyCCUcNGzowB9A0V8ofsb/AA//AGlPhT8I3+HH7TnxM0z4x+JPBmp3FhoHiezSVL3UNDiCCzl1QScf2jjcsxRnBAUs8khd2+r6AP/R/v4ooooAKKKKACiiigD/2Q==");
            $lbBSCZ.attr("class", "Categories__CategoriesWrapper-sc-15qbxer-0 czUTsg");
            $menus.attr("class", "categories__groups")
            $($fZFOiU[0]).wrap("<div class='categories__groups__selected-cagtegory'>");
            $FZ.wrapAll("<div class='categories__group'> <div class = 'categories__group__menus'>");
            $($fZFOiU[20]).wrap("<div class='categories__group'> <div class = 'categories__group__menus'>");    
            $($fZFOiU[21]).wrap("<div class='categories__group'> <div class = 'categories__group__menus'>");    
            check = true;
        }else{
            $more__word.text("더 보기")
            $more__word__img.attr("src","data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBARXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAALKADAAQAAAABAAAALAAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgALAAsAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAQEBAQEBAQEBAQIBAQECAwICAgIDBAMDAwMDBAQEBAQEBAQEBAQEBAQEBAUFBQUFBQYGBgYGBwcHBwcHBwcHB//bAEMBAQEBAgICAwICAwcFBAUHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHB//dAAQAA//aAAwDAQACEQMRAD8A/v4oorkvCfj7wN48/wCEi/4Qjxhpni7/AIRHU59F1X+zbmO5+x6hbY861n8tm8q4i3DfG+GXIyBQB1tFFFABRXJeE/H3gbx5/wAJF/whHjDTPF3/AAiOpz6Lqv8AZtzHc/Y9Qtsedaz+WzeVcRbhvjfDLkZArraAP//Q/v4r8e/2nP2Y/i5+zB8XNf8A29P2DNA/tjxJrGJvix8J4SY7LxhZRks97ZIoIg12AFnVkQmckkBpGkjuf2EooA+fv2Y/2nPhH+1x8I9A+Mvwa1/+2PDesZhurWYCO9069jA86yvYckwXUBIDKcggh0LRsjt+fn7Tn7Tnxc/af+Lmv/sF/sGa/wD2P4k0fEPxY+LEIMll4PspCVeysnUgT67OAyKqODAQQCsiySWx+05/wTi+Ll58XNf+Mv7Bnx4/4ZR8SfH/ABo3xYtYYy9lqFlKTv1eyhVSINdgBYLKnlGQuXEsUhkeX9A/2Y/2Y/hH+yP8I9A+DXwa0D+x/Dej5murqYiS91G9kA869vZsAz3U5ALMcAABECxqiKAH7Mf7Mfwj/ZH+EegfBr4NaB/Y/hvR8zXV1MRJe6jeyAede3s2AZ7qcgFmOAAAiBY1RF+gaKKAP//R/v4ooooAKKKKACiiigD/2Q==");
            $lbBSCZ.attr("class", "Categories__CategoriesWrapper-sc-15qbxer-0 lbBSCZ")
            $menus.attr("class", "categories__menus")
            $("div").unwrap(".categories__groups__selected-cagtegory");
            $("div").unwrap(".categories__group");
            $("div").unwrap(".categories__group__menus");
            
            check = false;
        };
    })
});

//감정하트 변경



