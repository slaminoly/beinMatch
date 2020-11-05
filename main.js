/* 
*************************************

* Write the code developer Ahmad Nahal
* https://www.facebook.com/nahal8ahmad/
* https://twitter.com/ahmad8Dev

*************************************
*/
if(notfMesseg !== ""){
$(".notfcation").append("<style>.notfcation::before {background: #f00;}</style>");
}

// Get table match today
if($("body").hasClass("homepage")){
  $.ajax({
    dataType: "json",
    url: "https://www.blogger.com/feeds/2549475815893775559/pages/default/4148878936352077488?alt=json-in-script",
    method: "GET",
    dataType: "jsonp",
    success: function (data) {
      var Match = $(data.entry.content.$t),
		  matchDate = dateToday.getDate() + "-" + (dateToday.getMonth() + 1) + "-" + dateToday.getFullYear(),
		  divMatch = Match.find('div[data-date="'+matchDate+'"]'),
		  dataDateMatch = Match.find('.MatchDateToday').data("date");
          for(j=0;j<Match.find('.MatchDateToday').length;j++){
          var dateForloop = $(Match.find('.MatchDateToday')[j]).data("date") == matchDate;
           if(dateForloop == true){
            $(".tableMatch .sk-chase").remove();
            $(".tableMatch").prepend(divMatch);
			// load timer
              $(document).ready(function () {
                $(".date").each(function () {
                    var t = $(this),
                        e = t.data("start"),
                        m = t.data("start"),
                        a = moment(e, "YYYY-MM-DD HH:mm:ssZ"),
                        s = moment(m, "YYYY-MM-DD HH:mm:ssZ"),
                        n = moment.utc().format("YYYY-MM-DD HH:mm:ssZ"),
                        d = a.diff(n, "minutes"),
                        o = s.diff(n, "minutes") + 120;
                    switch (!0) {
                    case 30 < d:
                        var r = moment.utc(e).toDate();
                        t.parent().find(".timeMatch").text(moment(r).format(" LT").replace("PM", "مساءً").replace("AM", "ص")), r = moment(r).format("YYYY-MM-DD HH:mm:ss"), t.countdowntimer({
                            dateAndTime: r
                        });
                        break;
                    case 0 < d:
                        t.parent().find(".timeMatch").html('<span class="live-soon">تبدا قريبا</span>'), r = moment.utc(e).toDate(), r = moment(r).format("YYYY-MM-DD HH:mm:ssZ"), t.countdowntimer({
                            dateAndTime: r
                        });
                        break;
                    case 0 < o:
                        t.parent().find(".timeMatch").html('<span class="live-now">مباشر</span>');
                        break;
                    default:
                        t.parent().find(".timeMatch").html('<span class="live-end">انتهت</span>'), t.parent().parent().parent().parent().parent().addClass("ends"), $("#endmat").append($(".ends"))
                    }
                })
            });

           }

          } // end for
    } // end sacsses
  }); // end ajax
}

if($("body").hasClass("matchTomorrow")){
  $.ajax({
    dataType: "json",
    url: "https://www.blogger.com/feeds/2549475815893775559/pages/default/4148878936352077488?alt=json-in-script",
    method: "GET",
    dataType: "jsonp",
    success: function (data) {
      var Match = $(data.entry.content.$t),
		  matchDate = (dateToday.getDate() + 1) + "-" + (dateToday.getMonth() + 1) + "-" + dateToday.getFullYear(),
		  divMatch = Match.find('div[data-date="'+matchDate+'"]'),
		  dataDateMatch = Match.find('.MatchDateToday').data("date");
          for(j=0;j<Match.find('.MatchDateToday').length;j++){
          var dateForloop = $(Match.find('.MatchDateToday')[j]).data("date") == matchDate;
           if(dateForloop == true){
            $(".tableMatch .sk-chase").remove();
            $(".tableMatch").prepend(divMatch);
           }else{
            $(".tableMatch .sk-chase").remove();
			$(".tableMatch").html("لايوجد مباريات هامة بتاريخ اليوم <style>.tableMatch { color: #fff; text-align: center; }</style>");
			}

          } // end for
    } // end sacsses
  }); // end ajax
}

// Date header
var day = new Array("الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت");
var month = new Array("يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "اكتوبر", "نوفمبر", "ديسمبر");
var dateToday = new Date();
var dateHeader = "" + " " + day[dateToday.getDay()] + "," + " " + dateToday.getDate() + " " + month[dateToday.getMonth()] + "";
$(".Date").text(dateHeader);

// iframe 
if($("body").hasClass("postpage")){
$(document).ready(function(){
    var fream = [];
    $(".textPost iframe").each(function(e){
      fream.push($(this).attr('src'));
      $(this).before('<div id="Rpfream-'+e+'"></div>'),
        $(this).remove();
    });
    $(window).on('scroll',function(){
      if($(this).scrollTop() <= 200){
        for(i=0;i<fream.length;i++){
          $("#Rpfream-"+i).html("<iframe allowfullscreen='true' frameborder='0' height='600px' rel='nofollow' scrolling='' src='"+fream[i]+"' width='100%'></iframe>");
        }
      }
    });
  });

$(document).ready(function () {
    $(".date").each(function () {
        var t = $(this),
            e = t.data("start"),
            iframnahal = $("#ifr"),
            m = t.data("start"),
            a = moment(e, "YYYY-MM-DD HH:mm:ssZ"),
            s = moment(m, "YYYY-MM-DD HH:mm:ssZ"),
            n = moment.utc().format("YYYY-MM-DD HH:mm:ssZ"),
            d = a.diff(n, "minutes"),
            o = s.diff(n, "minutes") + 120;
        switch (!0) {
        case 30 < d:
            var r = moment.utc(e).toDate();
            t.countdowntimer({
                dateAndTime: r
            });
            break;
        case 0 < d:
            t.parent().find(".nahal").html('<iframe allowfullscreen="true" frameborder="0" height="600px" scrolling="" src=' + iframnahal.val() + ' style="max-width:900px" width="100%"></iframe><style>.post-body img { display: none }</style>'), r = moment.utc(e).toDate(), r = moment(r).format("YYYY-MM-DD HH:mm:ssZ"), t.countdowntimer({
                dateAndTime: r
            });
            break;
        case 0 < o:
            t.parent().find(".nahal").html('<iframe allowfullscreen="true" frameborder="0" height="600px" scrolling="" src=' + iframnahal.val() + ' style="max-width:900px" width="100%"></iframe><style>.post-body img { display: none }</style>');
            break;
        default:
            t.parent().find(".nahal").html('<style>div#app { display: none }</style>')
        }
    })
});
// ads
var img = $(".separator a").html();
$(".separator").append(img),$(".separator a").remove();
var anumper = Math.floor($(".post-amp p").length/2-1);
$("#center").insertAfter('.post-amp p:eq('+anumper+')');

}
// embed page to video embed

$("#ch").on('click',function(){
    $("#chanel").css("display","block");
    $("#close").on('click',function(){
        $("#chanel").css("display","none");
    });
});
$("#players").on('click',function(){
    $("#quality").css("display","block");
    $("#close").on('click',function(){
        $("#quality").css("display","none");
    });

});
$("#iframeCode").on('click',function(){
    $(".iframeCode").css("display","block");
    $("#close").on('click',function(){
        $(".iframeCode").css("display","none");
    });

});
// any click top item topVideo span
$(".topVideo span").on('click',function(){
    $(".boxNotfcation").css("display","flex");
    $("#close").on('click',function(){
        $(".boxNotfcation").css("display","none");
    });
});

$('.moreShear').on('click',function(){
    $(".overlys").css("display","block"),
    $(".overlyShear").animate({
        right : "17px"
    },200);
});
$(".what,.telg").on('click',function(){
    var user = navigator.userAgent || navigator.vendor || window.opera;
    if (/iPad|iPhone|iPod|android/i.test(user) == false) {
        alert("لا يمكنك  المشاركة على الحاسوب");
		$(".what,.telg").attr("href","#");
    }
});
$(".closeShear,.overlys").on('click',function(){
    $(".overlys").css("display","none"),
    $(".overlyShear").animate({
        right : "-410px"
    },200);
});

// share when click copy item
function copyLink() {
    document.getElementById("getCopy").select(), 
    document.execCommand("copy"), 
    $(".noftcationScsses").animate({
        right : "14px"
    },200).delay(1000).animate({
        right : "-410px"

    });

};

// menu mobile
var navbare = $(".navbare").html();
var mediaIcon = $(".mediaIcon").html();
var contMenuM = "<div class='menM'>"+navbare+"</div> <div class='mediaMa'>"+mediaIcon+"</div>";

$(".menuM,.notfcation,.moreShear").on('click',function(){
$(".overlys").css("display","block"),
    $("#contentMobile").animate({
        bottom : "10px"
    },100);
});

$(".menuM").on('click',function(){
$('#contentMobile').prepend(contMenuM);
});

$(".notfcation").on('click',function(){
if(notfMesseg == ""){
$('#contentMobile').prepend("<div class='contMesseg'><div class='messeges'>لايوجد اشعارات .</div></div>");
}else{
$('#contentMobile').prepend("<div class='contMesseg'><div class='messeges'>"+notfMesseg+"</div></div>");
}
});

$("#CloseM,.overlys").on('click',function(){
$(".overlys").css("display","none"),
    $("#contentMobile").animate({
        bottom : "-310px"
    },100);
$('#contentMobile .menM,#contentMobile .mediaMa,#contentMobile .boxShear,#contentMobile .contMesseg').remove();
});

// shear 
var overlyShear = $(".overlyShear").html();
$(".moreShear").on('click',function(){
$('#contentMobile').prepend(overlyShear);
});


$(document).ready(function () {
// When scroll get post json
    function e() {
        document.querySelectorAll("div["+o+"]").forEach(function (e) {
            var t = e.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
            if (window.pageYOffset + window.innerHeight > t) {
                Math.ceil(e.parentNode.offsetWidth), Math.ceil(e.parentNode.offsetHeight);
                var n = function (e) {
                    try {
                        e = -1 !== e.indexOf("img.youtube.com") || -1 !== e.indexOf("ytimg.com") ? e.replace("/default", "/mqdefault") : e.replace()
                    } finally {
                        return e
                    }
                }(e.getAttribute(o));
                e.setAttribute("name", n), e.removeAttribute(o), e.removeAttribute("style") , $(".sk-chase,#loadingAside,.load").remove();

				// write code ajax
                  $.ajax({
                      dataType: "json",
                      url: "https://benew99.blogspot.com/feeds/posts/summary/-/"+n+"?alt=json-in-script&redirect=false&start-index=1&max-results=8",
                      method: "GET",
                      dataType: "jsonp",
                      success: function (e) {
                        for (var a = 0; a < 3; a++) {
                            var t = e.feed.entry[a],
                                r = "";
                            if (a == e.feed.entry.length) break;
                            for (var s = 0; s < t.link.length; s++)
                                if ("alternate" == t.link[s].rel) {
                                    r = t.link[s].href;
                                    break
                                } 
                                if ("" != r) {
                                var c, i = t.title.$t,
                                    l = t.summary.$t.replace(/<\S[^>]*>/g, ""),
                                    n = 300 < l.length ? l.substring(0, 100) + "..." : l,
									re = t.author[0];
                                          if(t.media$thumbnail == undefined){
                                          c = "https://1.bp.blogspot.com/-kkaRsvMcSYA/X4hbxgW6cdI/AAAAAAAAJKs/49HvpYvbnqsq4CXBWjOyUVuK9_hTOaG4ACLcBGAsYHQ/s16000/logo.png";
                                          }else{
                                          c = t.media$thumbnail.url.replace("s72-c/", "s400/");
                                          }
                                var htmlPost = "<div class='side-post'><a class='dataImg overlyholder' href='" + r + "'><div class='imgpost'><img alt='"+i+"' data-src='" + c + "'></div><div class='titlepost'><h2 class='posth1 twoColor'>"+i+"</h2></div></a></div>";
								var spechSec = "<div class='col-xl-3 col-lg-4 col-sm-6'><div class='BeIN_post'><div class='postImge'><a class='dataImg overlyholder' href='" + r + "' title='"+i+"'><img alt='"+i+"' data-src='" + c + "'/></a></div><div class='postDetals'> <div class='writeAndMedia'><div class='row'><div class='col-lg-6 col-m-6'><span>كتب : "+re.name.$t+"</span></div><div class='col-lg-6 col-m-6'><a href='http://www.facebook.com/share.php?v=4&src=bm&u="+r+"&t="+i+"'><span class='facebook icon'></span></a> <a href='http://twitter.com/share?url="+r+"'><span class='twitter icon'></span></a></div></div></div> <div class='postTitle'><a class='postLink twoColor' href='"+r+"'><h1>"+i+"</h1></a></div><div class='postbuttom'><div class='row'><div class='col-lg-6 col-m-6'><span class='redios'></span><span class='redios'></span><span class='redios'></span></div><div class='col-lg-6 col-m-6'><a href='"+r+"'><span class='postGo oneBac'>المزيد</span></a></div></div></div></div></div></div>";
$(".newsContent").html("<a href='"+r+"'><span>"+i+"</span></a>");$(".side-content").append(htmlPost);$("#sectionTwo").append(spechSec);$("#sectionOne").append(spechSec);$("#sectionPost").append(spechSec);


                          } // end for 
                        } // end success:..
                      } // end function (e)..
                    });

            }
        })
    }
    var o;
    o = "data-ajaxCode", document.addEventListener("scroll", e);
    
});

// remove data-src when scroll
$(document).ready(function () {
    function e() {
        document.querySelectorAll("img[" + o + "]").forEach(function (e) {
            var t = e.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
            if (window.pageYOffset + window.innerHeight > t) {
                Math.ceil(e.parentNode.offsetWidth), Math.ceil(e.parentNode.offsetHeight);
                var n = function (e) {
                    try {
                        e = -1 !== e.indexOf("img.youtube.com") || -1 !== e.indexOf("ytimg.com") ? e.replace("/default", "/mqdefault") : e.replace()
                    } finally {
                        return e
                    }
                }(e.getAttribute(o));
                e.setAttribute("src", n), e.removeAttribute(o), e.parentNode.classList.remove("overlyholder"), e.removeAttribute("style"), e.parentNode.parentNode.classList.remove("overlyholder")
            }
        })
    }
    var o;
    o = "data-src", document.addEventListener("scroll", e)
});


// iframe code
if($("body").hasClass("embed")){
var hrefWindow = window.location.href;
htmlIframe = "<iframe allowfullscreen='true' frameborder='0' height='600px' scrolling='' src='"+hrefWindow+"' width='100%'></iframe>";
$(".iframeCode .codeIframe").html(htmlIframe);
}

// dark mode
function ModeD() {
    localStorage.setItem("mode", "r" === localStorage.getItem("mode") ? "light" : "r"), "r" === localStorage.getItem("mode") ? document.querySelector("body").classList.add("m") : document.querySelector("body").classList.remove("m")
};
// copyright
var cssBeIN = "color:#555DF9;"+"font-size:20px;";
console.log('%cBeIN Match New', cssBeIN ,' \n Development : https://www.facebook.com/nahal8ahmad \n Start date : 10/oct/2020 \n Vertion : V1');
