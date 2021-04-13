/**
 * 今日诗词V2 JS-SDK 1.2.2
 * 今日诗词API 是一个可以免费调用的诗词接口：https://www.jinrishici.com
 */
! function(e) {
    var n, t = {},
        o = "jinrishici-token";

    function i() {
        return document.getElementById("jinrishici-sentence") || 0 != document.getElementsByClassName("jinrishici-sentence").length
    }

    function c() {
        t.load(function(e) {
            var n = document.getElementById("jinrishici-sentence"),
                t = document.getElementsByClassName("jinrishici-sentence");
            if (n && (n.innerText = e.data.content), 0 !== t.length)
                for (var o = 0; o < t.length; o++) t[o].innerText = e.data.content
        })
    }

    function r(e, n) {
        var t = new XMLHttpRequest;
        t.open("get", n), t.withCredentials = !0, t.send(), t.onreadystatechange = function(n) {
            if (4 === t.readyState) {
                var o = JSON.parse(t.responseText);
                "success" === o.status ? e(o) : console.error("今日诗词API加载失败，错误原因：" + o.errMessage)
            }
        }
    }
    t.load = function(n) {
        return e.localStorage && e.localStorage.getItem(o) ? function(e, n) {
            return r(e, "https://v2.jinrishici.com/one.json?client=browser-sdk/1.2&X-User-Token=" + encodeURIComponent(n))
        }(n, e.localStorage.getItem(o)) : function(n) {
            return r(function(t) {
                e.localStorage.setItem(o, t.token), n(t)
            }, "https://v2.jinrishici.com/one.json?client=browser-sdk/1.2")
        }(n)
    }, e.jinrishici = t, i() ? c() : (n = function() {
        i() && c()
    }, "loading" != document.readyState ? n() : document.addEventListener ? document.addEventListener("DOMContentLoaded", n) : document.attachEvent("onreadystatechange", function() {
        "complete" == document.readyState && n()
    }))
}(window);


//------------------------------------------
//lazyload
//------------------------------------------
$(function() {
    $("img.lazyload").lazyload({threshold :100});
});



//------------------------------------------
// 窗口高度优化
//------------------------------------------
var ele=document.getElementById('biiframe');
if(ele){
  var hh=ele.offsetWidth*0.65;
  ele.height = hh;
}

var ele=document.getElementById('pdfiframe');
if(ele){
  var hh=Math.min(window.screen.availHeight*0.85, ele.offsetWidth*1.6);
  ele.height = hh;
}

var ele=document.getElementById('epubiframe')
if(ele){
  var hh=Math.min(window.screen.availHeight*0.85, ele.offsetWidth*1.6)
  ele.height = hh;
}

var ele=document.getElementById('m3u8iframe')
if(ele){
  var hh=ele.offsetWidth*9/16;
  ele.height = hh;
}

var ele=document.getElementById('md5iframe')
if(ele){
  ele.width= Math.min(ele.offsetWidth, 1200);
  var hh=Math.min(ele.offsetWidth*0.65, 700)
  ele.height = hh;
}


//------------------------------------------
// 运行时间格式化
//------------------------------------------
function runtime(){// 初始时间，日/月/年 时:分:秒
    X = new Date("07/08/2020 8:30:00");
    Y = new Date();
    T = (Y.getTime()-X.getTime());
    M = 24*60*60*1000;
    a = T/M;
    A = Math.floor(a);
    b = (a-A)*24;
    B = Math.floor(b);
    c = (b-B)*60;
    C = Math.floor((b-B)*60);
    D = Math.floor((c-C)*60);//信息写入到DIV中
    spantime.innerHTML = A+"天"+B+"时"+C+"分"+D+"秒"}setInterval(runtime, 1000);
  
  // viewer初始化
    if (document.getElementById('upper_ele')) {
      new Viewer(document.getElementById('upper_ele'), {
          toolbar: false,
      });
  }
  

//------------------------------------------
// 加载PV
//------------------------------------------
// var xhr = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
// xhr.onreadystatechange = function (){
//     var tele = document.getElementById('laout');
//     if(tele && xhr.responseText){
//       tele.innerHTML = xhr.responseText;
//     };
//   };
  
// xhr.open('get','https://www.liulp.club/pv/result.json', false);
// xhr.send();


//------------------------------------------
// 不蒜子代码
//------------------------------------------

// var bszCaller, bszTag; !
// function() {
//     var c, d, e, a = !1,
//     b = [];
//     ready = function(c) {
//         return a || "interactive" === document.readyState || "complete" === document.readyState ? c.call(document) : b.push(function() {
//             return c.call(this)
//         }),
//         this
//     },
//     d = function() {
//         for (var a = 0,
//         c = b.length; c > a; a++) b[a].apply(document);
//         b = []
//     },
//     e = function() {
//         a || (a = !0, d.call(window), document.removeEventListener ? document.removeEventListener("DOMContentLoaded", e, !1) : document.attachEvent && (document.detachEvent("onreadystatechange", e), window == window.top && (clearInterval(c), c = null)))
//     },
//     document.addEventListener ? document.addEventListener("DOMContentLoaded", e, !1) : document.attachEvent && (document.attachEvent("onreadystatechange",
//     function() { / loaded | complete / .test(document.readyState) && e()
//     }), window == window.top && (c = setInterval(function() {
//         try {
//             a || document.documentElement.doScroll("left")
//         } catch(b) {
//             return
//         }
//         e()
//     },
//     5)))
// } (),
// bszCaller = {
//     fetch: function(a, b) {
//         var c = "BusuanziCallback_" + Math.floor(1099511627776 * Math.random());
//         window[c] = this.evalCall(b),
//         a = a.replace("=BusuanziCallback", "=" + c),
//         scriptTag = document.createElement("SCRIPT"),
//         scriptTag.type = "text/javascript",
//         scriptTag.defer = !0,
//         scriptTag.src = a,
//         document.getElementsByTagName("HEAD")[0].appendChild(scriptTag)
//     },
//     evalCall: function(a) {
//         return function(b) {
//             ready(function() {
//                 try {
//                     a(b),
//                     scriptTag.parentElement.removeChild(scriptTag)
//                 } catch(c) {
//                     bszTag.hides()
//                 }
//             })
//         }
//     }
// },
// bszCaller.fetch("//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback",
// function(a) {
//     bszTag.texts(a),
//     bszTag.shows()
// }),
// bszTag = {
//     bszs: ["site_pv", "page_pv", "site_uv"],
//     texts: function(a) {
//         this.bszs.map(function(b) {
//             var c = document.getElementById("busuanzi_value_" + b);
//             c && (c.innerHTML = a[b])
//         })
//     },
//     hides: function() {
//         this.bszs.map(function(a) {
//             var b = document.getElementById("busuanzi_container_" + a);
//             b && (b.style.display = "none")
//         })
//     },
//     shows: function() {
//         this.bszs.map(function(a) {
//             var b = document.getElementById("busuanzi_container_" + a);
//             b && (b.style.display = "inline")
//         })
//     }
// };


//------------------------------------------
// Matomo
//------------------------------------------
var _paq = window._paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="//analytic.liulp.club/";
  _paq.push(['setTrackerUrl', u+'matomo.php']);
  _paq.push(['setSiteId', '1']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
})();



//------------------------------------------
// 站内搜索，xml版
//------------------------------------------

// 获取搜索框、搜索按钮、清空搜索、结果输出对应的元素
var searchBtn = document.querySelector('.search-start');
var searchClear = document.querySelector('.search-clear');
var searchInput = document.querySelector('.search-input');
var searchResults = document.querySelector('.search-results');

// 申明保存文章的标题、链接、内容的数组变量
var searchValue = '',
arrItems = [],
arrContents = [],
arrLinks = [],
arrTitles = [],
arrResults = [],
indexItem = [],
itemLength = 0;
var tmpDiv = document.createElement('div');
tmpDiv.className = 'result-item';

// ajax 的兼容写法
var xhr = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
xhr.onreadystatechange = function () {
if (xhr.readyState == 4 && xhr.status == 200) {
	xml = xhr.responseXML;
	arrItems = xml.getElementsByTagName('item');
	itemLength = arrItems.length;
	
	// 遍历并保存所有文章对应的标题、链接、内容到对应的数组中
	// 同时过滤掉 HTML 标签
	for (i = 0; i < itemLength; i++) {
		arrContents[i] = arrItems[i].getElementsByTagName('description')[0].
            childNodes[0].nodeValue.replace(/<.*?>/g, '').replace(/\$\\\S+\$/g,'');
		arrLinks[i] = arrItems[i].getElementsByTagName('link')[0].
			childNodes[0].nodeValue.replace(/<.*?>/g, '');
		arrTitles[i] = arrItems[i].getElementsByTagName('title')[0].
			childNodes[0].nodeValue.replace(/<.*?>/g, '');
	}
}
}

// 开始获取根目录下 feed.xml 文件内的数据
xhr.open('get', '/post/index.xml', true);
xhr.send();

searchBtn.onclick = function(){
	searchInput.style.display = 'block';
	searchClear.style.display = 'block';
	searchBtn.style.display = 'none';
}


// 清空按钮点击函数
searchClear.onclick = function(){
    searchInput.value = '';
    searchResults.innerHTML = '';
	searchResults.style.display = 'none';
	searchClear.style.display = 'none';
	searchInput.style.display = 'none';
	searchBtn.style.display = 'block';
}

// 输入框内容变化后就开始匹配，可以不用点按钮
// 经测试，onkeydown, onchange 等方法效果不太理想，
// 存在输入延迟等问题，最后发现触发 input 事件最理想，
// 并且可以处理中文输入法拼写的变化
var windowWidth = $(window).width();
searchInput.oninput = function () {
setTimeout(searchConfirm, 0);
}
searchInput.onfocus = function () {
	searchResults.style.display = 'block';
}

function searchConfirm() {
if (searchInput.value == '') {
	searchResults.style.display = 'none';
} else if (searchInput.value.search(/^\s+$/) >= 0) {
	// 检测输入值全是空白的情况
	searchInit();
	var itemDiv = tmpDiv.cloneNode(true);
	itemDiv.innerText = '请输入有效内容...';
	searchResults.appendChild(itemDiv);
} else {
	// 合法输入值的情况
	searchInit();
	searchValue = searchInput.value;
	// 在标题、内容中查找
	searchMatching(arrTitles, arrContents, searchValue);
}
}

// 每次搜索完成后的初始化
function searchInit() {
arrResults = [];
indexItem = [];
searchResults.innerHTML = '';
searchResults.style.display = 'block';
searchClear.style.display = 'block';
}

function searchMatching(arr1, arr2, input) {
// 忽略输入大小写
input = new RegExp(input, 'i');
// 在所有文章标题、内容中匹配查询值
for (i = 0; i < itemLength; i++) {
	if (arr1[i].search(input) !== -1 || arr2[i].search(input) !== -1) {
		// 优先搜索标题
		if (arr1[i].search(input) !== -1) {
			var arr = arr1;
		} else {
			var arr = arr2;
		}
		indexItem.push(i);  // 保存匹配值的索引
		var indexContent = arr[i].search(input);
		// 此时 input 为 RegExp 格式 /input/i，转换为原 input 字符串长度
		var l = input.toString().length - 3;
		var step = 10;
		
		// 将匹配到内容的地方进行黄色标记，并包括周围一定数量的文本
		arrResults.push(arr[i].slice(indexContent - step, indexContent) +
			'<mark>' + arr[i].slice(indexContent, indexContent + l) + '</mark>' +
			arr[i].slice(indexContent + l, indexContent + l + step));
	}
}

// 输出总共匹配到的数目
var totalDiv = tmpDiv.cloneNode(true);
totalDiv.innerHTML = '匹配：<b>' + indexItem.length + '</b> 项';
searchResults.appendChild(totalDiv);

// 未匹配到内容的情况
if (indexItem.length == 0) {
	var itemDiv = tmpDiv.cloneNode(true);
	itemDiv.innerText = '未匹配到内容...';
	searchResults.appendChild(itemDiv);
}

// 将所有匹配内容进行组合
for (i = 0; i < arrResults.length; i++) {
	var itemDiv = tmpDiv.cloneNode(true);
	itemDiv.innerHTML = '<b>' + arrTitles[indexItem[i]] +
		'</b><br>' + arrResults[i];
	itemDiv.setAttribute('onclick', 'changeHref(arrLinks[indexItem[' + i + ']])');
	searchResults.appendChild(itemDiv);
}
}

function changeHref(href) {

// 在当前页面点开链接的情况
location.href = href;

// 在新标签页面打开链接的代码，与上面二者只能取一个，自行决定
// window.open(href);
}




/**
 * 原主题script
 */

!
function(i) {
	"use strict";

	function t() {
		this.$openBtn = i("#sidebar, #header").find("a[href*='#about']"), this.$closeBtn = i("#about-btn-close"), this.$blog = i("#blog"), this.$about = i("#about"), this.$aboutCard = i("#about-card")
	}
	t.prototype = {
		run: function() {
			var s = this;
			s.$openBtn.click(function(t) {
				t.preventDefault(), s.play()
			}), s.$closeBtn.click(function(t) {
				t.preventDefault(), s.playBack()
			})
		},
		play: function() {
			var t = this;
			t.$blog.fadeOut(), $('#mybottom').fadeOut(), t.$about.fadeIn(), setTimeout(function() {
				t.dropAboutCard()
			}, 300)
		},
		playBack: function() {
			var t = this;
			t.liftAboutCard(), setTimeout(function() {
                t.$blog.fadeIn(),
                $('#mybottom').fadeIn()
			}, 500), setTimeout(function() {
				t.$about.fadeOut()
			}, 500)
		},
		dropAboutCard: function() {
			var t = this,
				s = t.$aboutCard.innerHeight(),
				e = i(window).height() / 2 - s / 2 + s;
			s + 30 > i(window).height() && (e = s), t.$aboutCard.css("top", "0px").css("top", "-" + s + "px").show(500, function() {
				t.$aboutCard.animate({
					top: "+=" + e + "px"
				})
			})
		},
		liftAboutCard: function() {
			var t = this,
				s = t.$aboutCard.innerHeight(),
				e = i(window).height() / 2 - s / 2 + s;
			s + 30 > i(window).height() && (e = s), t.$aboutCard.animate({
				top: "-=" + e + "px"
			}, 500, function() {
				t.$aboutCard.hide(), t.$aboutCard.removeAttr("style")
			})
		}
	}, i(document).ready(function() {
		(new t).run()
	})
}(jQuery), function(s) {
	"use strict";

	function t(t) {
		this.$form = s(t).find("#filter-form"), this.$searchInput = s(t).find("input[name=date]"), this.$archiveResult = s(t).find(".archive-result"), this.$postsYear = s(t).find(".archive-year"), this.$postsMonth = s(t).find(".archive-month"), this.$postsDay = s(t).find(".archive-day"), this.postsYear = t + " .archive-year", this.postsMonth = t + " .archive-month", this.postsDay = t + " .archive-day", this.messages = {
			zero: this.$archiveResult.data("message-zero"),
			one: this.$archiveResult.data("message-one"),
			other: this.$archiveResult.data("message-other")
		}
	}
	t.prototype = {
		run: function() {
			var t = this;
			t.$searchInput.keyup(function() {
				t.filter(t.sliceDate(t.getSearch()))
			}), t.$form.submit(function(t) {
				t.preventDefault()
			})
		},
		getSearch: function() {
			return this.$searchInput.val().replace(/([\/|.|-])/g, "").toLowerCase()
		},
		sliceDate: function(t) {
			return [t.slice(0, 4), t.slice(4, 6), t.slice(6)]
		},
		filter: function(t) {
			var s;
			"" === t[0] ? (this.showAll(), this.showResult(-1)) : (s = this.countPosts(t), this.hideAll(), this.showResult(s), 0 < s && this.showPosts(t))
		},
		showResult: function(t) {
			-1 === t ? this.$archiveResult.html("").hide() : 0 === t ? this.$archiveResult.html(this.messages.zero).show() : 1 === t ? this.$archiveResult.html(this.messages.one).show() : this.$archiveResult.html(this.messages.other.replace(/\{n\}/, t)).show()
		},
		countPosts: function(t) {
			return s(this.postsDay + "[data-date^=" + t[0] + t[1] + t[2] + "]").length
		},
		showPosts: function(t) {
			s(this.postsYear + "[data-date^=" + t[0] + "]").show(), s(this.postsMonth + "[data-date^=" + t[0] + t[1] + "]").show(), s(this.postsDay + "[data-date^=" + t[0] + t[1] + t[2] + "]").show()
		},
		showAll: function() {
			this.$postsYear.show(), this.$postsMonth.show(), this.$postsDay.show()
		},
		hideAll: function() {
			this.$postsYear.hide(), this.$postsMonth.hide(), this.$postsDay.hide()
		}
	}, s(document).ready(function() {
		s("#archives").length && new t("#archives").run()
	})
}(jQuery), function(o) {
	"use strict";

	function t(t) {
		this.$form = o(t).find("#filter-form"), this.$inputSearch = o(t).find("input[name=category]"), this.$archiveResult = o(t).find(".archive-result"), this.$posts = o(t).find(".archive"), this.$categories = o(t).find(".category-anchor"), this.posts = t + " .archive", this.categories = t + " .category-anchor", this.dataCategory = "category", this.dataParentCategories = "parent-categories", this.messages = {
			zero: this.$archiveResult.data("message-zero"),
			one: this.$archiveResult.data("message-one"),
			other: this.$archiveResult.data("message-other")
		}
	}
	t.prototype = {
		run: function() {
			var t = this;
			t.$inputSearch.keyup(function() {
				t.filter(t.getSearch())
			}), t.$form.submit(function(t) {
				t.preventDefault()
			})
		},
		getSearch: function() {
			return this.$inputSearch.val().toLowerCase()
		},
		filter: function(t) {
			"" === t ? (this.showAll(), this.showResult(-1)) : (this.hideAll(), this.showPosts(t), this.showResult(this.countCategories(t)))
		},
		showResult: function(t) {
			-1 === t ? this.$archiveResult.html("").hide() : 0 === t ? this.$archiveResult.html(this.messages.zero).show() : 1 === t ? this.$archiveResult.html(this.messages.one).show() : this.$archiveResult.html(this.messages.other.replace(/\{n\}/, t)).show()
		},
		countCategories: function(t) {
			return o(this.posts + "[data-" + this.dataCategory + "*='" + t + "']").length
		},
		showPosts: function(t) {
			var e = this,
				s = e.categories + "[data-" + e.dataCategory + "*='" + t + "']",
				i = e.posts + "[data-" + e.dataCategory + "*='" + t + "']";
			0 < e.countCategories(t) && o(s + "[data-" + e.dataParentCategories + "]").length && o(s).each(function() {
				o(this).attr("data-" + e.dataParentCategories).split(",").forEach(function(t) {
					var s = "[data-" + e.dataCategory + "='" + t + "']";
					o(e.categories + s).show(), o(e.posts + s).show(), o(e.posts + s + " > .archive-posts > .archive-post").hide()
				})
			}), o(s).show(), o(i).show(), o(i + " > .archive-posts > .archive-post").show()
		},
		showAll: function() {
			this.$categories.show(), this.$posts.show(), o(this.posts + " > .archive-posts > .archive-post").show()
		},
		hideAll: function() {
			this.$categories.hide(), this.$posts.hide()
		}
	}, o(document).ready(function() {
		o("#categories-archives").length && new t("#categories-archives").run()
	})
}(jQuery), function(o) {
	"use strict";

	function t(t) {
		this.$codeBlocks = o(t)
	}
	t.prototype = {
		run: function() {
			var t = this;
			t.resize(), o(window).smartresize(function() {
				t.resize()
			})
		},
		resize: function() {
			this.$codeBlocks.each(function() {
				var t = o(this).find(".gutter"),
					s = o(this).find(".code"),
					e = s.width() - s.innerWidth(),
					i = o(this).outerWidth() - t.outerWidth() + e;
				s.css("width", i), s.children("pre").css("width", i)
			})
		}
	}, o(document).ready(function() {
		o.fn.hasHorizontalScrollBar = function() {
			return this.get(0).scrollWidth > this.innerWidth()
		}, new t("figure.highlight").run()
	})
}(jQuery), function(e) {
	"use strict";
	e(document).ready(function() {
		function t() {
			var t = !0,
				s = null;
			480 < e(window).height() && (t = !1, s = {
				width: 70,
				height: 70
			})
		}
		t(), e(window).smartresize(function() {
			t()
		})
	})
}(jQuery), function(e) {
	"use strict";

	function t() {
		this.$header = e("#header"), this.headerHeight = this.$header.height(), this.headerUpCSSClass = "header-up", this.delta = 5, this.lastScrollTop = 0
	}
	t.prototype = {
		run: function() {
			var t, s = this;
			e(window).scroll(function() {
				t = !0
			}), setInterval(function() {
				t && (s.animate(), t = !1)
			}, 250)
		},
		animate: function() {
			var t = e(window).scrollTop();
			Math.abs(this.lastScrollTop - t) <= this.delta || (t > this.lastScrollTop && t > this.headerHeight ? this.$header.addClass(this.headerUpCSSClass) : t + e(window).height() < e(document).height() && this.$header.removeClass(this.headerUpCSSClass), this.lastScrollTop = t)
		}
	}, e(document).ready(function() {
		(new t).run()
	})
}(jQuery), function(n) {
	"use strict";

	function s() {
		this.photosBox = ".photo-box", this.$images = n(this.photosBox + " img")
	}
	s.prototype = {
		run: function() {
			var t = this;
			t.resizeImages(), n(window).smartresize(function() {
				t.resizeImages()
			})
		},
		resizeImages: function() {
			var t, s, e, i, o, a;
			this.$images.each(function() {
				a = n(this), t = a.parent().parent().width(), s = a.parent().parent().innerHeight(), e = a.width(), (i = a.height()) < s && (o = e / i, a.css({
					height: s,
					width: s * o
				}), a.parent().css({
					left: "-" + (s * o / 2 - t / 2) + "px"
				})), e = a.width(), i = a.height(), e < t && (o = i / e, a.css({
					width: t,
					height: t * o
				}), a.parent().css({
					top: "-" + (i / 2 - s / 2) + "px"
				})), s < i && a.parent().css({
					top: "-" + (i / 2 - s / 2) + "px"
				})
			})
		}
	}, n(document).ready(function() {
		if (n(".image-gallery").length) {
			var t = new s;
			setTimeout(function() {
				t.run()
			}, 500)
		}
	})
}(jQuery), function(e) {
	"use strict";

	function t() {
		this.$postBottomBar = e(".post-bottom-bar"), this.$postFooter = e(".post-actions-wrap"), this.$header = e("#header"), this.delta = 1, this.lastScrollTop = 0
	}
	t.prototype = {
		run: function() {
			var t, s = this;
			s.swipePostBottomBar(), e(window).scroll(function() {
				t = !0
			}), setInterval(function() {
				t && (s.swipePostBottomBar(), t = !1)
			}, 250)
		},
		swipePostBottomBar: function() {
			var t = e(window).scrollTop(),
				s = this.$postFooter.offset().top;
			this.lastScrollTop > t && (s + this.$postFooter.height() > t + e(window).height() || s < t + this.$header.height()) ? this.$postBottomBar.slideDown() : this.$postBottomBar.slideUp(), this.lastScrollTop = t
		}
	}, e(document).ready(function() {
		e(".post-bottom-bar").length && (new t).run()
	})
}(jQuery), function(t) {
	"use strict";

	function s() {
		this.$openButton = t(".open-algolia-search"), this.$searchModal = t("#algolia-search-modal"), this.$closeButton = this.$searchModal.find(".close-button"), this.$searchForm = t("#algolia-search-form"), this.$searchInput = t("#algolia-search-input"), this.$results = this.$searchModal.find(".results"), this.$noResults = this.$searchModal.find(".no-result"), this.$resultsCount = this.$searchModal.find(".results-count"), this.algolia = algoliaIndex
	}
	s.prototype = {
		run: function() {
			var e = this;
			e.$openButton.click(function() {
				e.open()
			}), t(document).keyup(function(t) {
				var s = (t.target || t.srcElement).tagName.toUpperCase();
				"INPUT" !== s && "TEXTAREA" !== s && (83 !== t.keyCode || e.$searchModal.is(":visible") || e.open())
			}), e.$searchModal.click(function(t) {
				t.target === this && e.close()
			}), e.$closeButton.click(function() {
				e.close()
			}), t(document).keyup(function(t) {
				27 === t.keyCode && e.$searchModal.is(":visible") && e.close()
			}), e.$searchForm.submit(function(t) {
				t.preventDefault(), e.search(e.$searchInput.val())
			})
		},
		open: function() {
			this.showSearchModal(), this.showOverlay(), this.$searchInput.focus()
		},
		close: function() {
			this.hideSearchModal(), this.hideOverlay(), this.$searchInput.blur()
		},
		search: function(t) {
			var e = this;
			this.algolia.search(t, function(t, s) {
				t || (e.showResults(s.hits), e.showResultsCount(s.nbHits))
			})
		},
		showResults: function(t) {
			var e = "";
			t.forEach(function(t) {
				var s = window.navigator.userLanguage || window.navigator.language || t.lang;
				e += '<div class="media">', t.thumbnailImageUrl && (e += '<div class="media-left">', e += '<a class="link-unstyled" href="' + (t.link || t.permalink) + '">', e += '<img class="media-image" src="' + t.thumbnailImageUrl + '" width="90" height="90"/>', e += "</a>", e += "</div>"), e += '<div class="media-body">', e += '<a class="link-unstyled" href="' + (t.link || t.permalink) + '">', e += '<h3 class="media-heading">' + t.title + "</h3>", e += "</a>", e += '<span class="media-meta">', e += '<span class="media-date text-small">', e += moment(t.date).locale(s).format("ll"), e += "</span>", e += "</span>", e += '<div class="media-content hide-xs font-merryweather">' + t.excerpt + "</div>", e += "</div>", e += '<div style="clear:both;"></div>', e += "<hr>", e += "</div>"
			}), this.$results.html(e)
		},
		showSearchModal: function() {
			this.$searchModal.fadeIn()
		},
		hideSearchModal: function() {
			this.$searchModal.fadeOut()
		},
		showResultsCount: function(t) {
			var s = "";
			t < 1 ? (s = this.$resultsCount.data("message-zero"), this.$noResults.show()) : 1 === t ? (s = this.$resultsCount.data("message-one"), this.$noResults.hide()) : 1 < t && (s = this.$resultsCount.data("message-other").replace(/\{n\}/, t), this.$noResults.hide()), this.$resultsCount.html(s)
		},
		showOverlay: function() {
			t("body").append('<div class="overlay"></div>'), t(".overlay").fadeIn(), t("body").css("overflow", "hidden")
		},
		hideOverlay: function() {
			t(".overlay").fadeOut(function() {
				t(this).remove(), t("body").css("overflow", "auto")
			})
		}
	}, t(document).ready(function() {
		"undefined" != typeof algoliaIndex && (new s).run()
	})
}(jQuery), function(t) {
	"use strict";

	function s() {
		this.$shareOptionsBar = t("#share-options-bar"), this.$openBtn = t(".btn-open-shareoptions"), this.$closeBtn = t("#btn-close-shareoptions"), this.$body = t("body")
	}
	s.prototype = {
		run: function() {
			var t = this;
			t.$openBtn.click(function() {
				t.$shareOptionsBar.hasClass("opened") || (t.openShareOptions(), t.$closeBtn.show())
			}), t.$closeBtn.click(function() {
				t.$shareOptionsBar.hasClass("opened") && (t.closeShareOptions(), t.$closeBtn.hide())
			})
		},
		openShareOptions: function() {
			var t = this;
			t.$shareOptionsBar.hasClass("opened") || this.$shareOptionsBar.hasClass("processing") || (t.$shareOptionsBar.addClass("processing opened"), t.$body.css("overflow", "hidden"), setTimeout(function() {
				t.$shareOptionsBar.removeClass("processing")
			}, 250))
		},
		closeShareOptions: function() {
			var t = this;
			t.$shareOptionsBar.hasClass("opened") && !this.$shareOptionsBar.hasClass("processing") && (t.$shareOptionsBar.addClass("processing").removeClass("opened"), setTimeout(function() {
				t.$shareOptionsBar.removeClass("processing"), t.$body.css("overflow", "")
			}, 250))
		}
	}, t(document).ready(function() {
		(new s).run()
	})
}(jQuery), function(s) {
	"use strict";

	function t() {
		this.$sidebar = s("#sidebar"), this.$openBtn = s("#btn-open-sidebar"), this.$closeBtn = s("#header, #main, .post-header-cover"), this.$blog = s(".post-bottom-bar, #header, #main, .post-header-cover"), this.$body = s("body"), this.mediumScreenWidth = 768
	}
	t.prototype = {
		run: function() {
			var t = this;
			this.$openBtn.click(function() {
				t.$sidebar.hasClass("pushed") || t.openSidebar()
			}), this.$closeBtn.click(function() {
				t.$sidebar.hasClass("pushed") && t.closeSidebar()
			}), s(window).resize(function() {
				s(window).width() > t.mediumScreenWidth ? (t.resetSidebarPosition(), t.resetBlogPosition()) : t.closeSidebar()
			})
		},
		openSidebar: function() {
			this.swipeBlogToRight(), this.swipeSidebarToRight()
		},
		closeSidebar: function() {
			this.swipeSidebarToLeft(), this.swipeBlogToLeft()
		},
		resetSidebarPosition: function() {
			this.$sidebar.removeClass("pushed")
		},
		resetBlogPosition: function() {
			this.$blog.removeClass("pushed")
		},
		swipeSidebarToRight: function() {
			var t = this;
			this.$sidebar.hasClass("pushed") || this.$sidebar.hasClass("processing") || (this.$sidebar.addClass("processing pushed"), this.$body.css("overflow-x", "hidden"), setTimeout(function() {
				t.$sidebar.removeClass("processing")
			}, 250))
		},
		swipeSidebarToLeft: function() {
			this.$sidebar.hasClass("pushed") && !this.$sidebar.hasClass("processing") && (this.$sidebar.addClass("processing").removeClass("pushed processing"), this.$body.css("overflow-x", "auto"))
		},
		swipeBlogToRight: function() {
			var t = this;
			this.$blog.hasClass("pushed") || this.$blog.hasClass("processing") || (this.$blog.addClass("processing pushed"), setTimeout(function() {
				t.$blog.removeClass("processing")
			}, 250))
		},
		swipeBlogToLeft: function() {
			var t = this;
			t.$blog.hasClass("pushed") && !this.$blog.hasClass("processing") && (t.$blog.addClass("processing").removeClass("pushed"), setTimeout(function() {
				t.$blog.removeClass("processing")
			}, 250))
		}
	}, s(document).ready(function() {
		(new t).run()
	})
}(jQuery), function(t, s) {
	jQuery.fn[s] = function(t) {
		return t ? this.bind("resize", function(e, i, o) {
			var a;
			return function() {
				var t = this,
					s = arguments;
				a ? clearTimeout(a) : o && e.apply(t, s), a = setTimeout(function() {
					o || e.apply(t, s), a = null
				}, i || 100)
			}
		}(t)) : this.trigger(s)
	}
}(jQuery, "smartresize"), function(s) {
	"use strict";

	function t(t) {
		this.$tabbedCodeBlocs = s(t)
	}
	t.prototype = {
		run: function() {
			this.$tabbedCodeBlocs.find(".tab").click(function() {
				var t = s(this).parent().parent().parent().find(".tabs-content").children("pre, .highlight");
				s(this).siblings().removeClass("active"), s(this).addClass("active"), t.hide(), t.eq(s(this).index()).show()
			})
		}
	}, s(document).ready(function() {
		new t(".codeblock--tabbed").run()
	})
}(jQuery), function(s) {
	"use strict";

	function t(t) {
		this.$form = s(t).find("#filter-form"), this.$inputSearch = s(t + " #filter-form input[name=tag]"), this.$archiveResult = s(t).find(".archive-result"), this.$tags = s(t).find(".tag"), this.$posts = s(t).find(".archive"), this.tags = t + " .tag", this.posts = t + " .archive", this.dataTag = "tag", this.messages = {
			zero: this.$archiveResult.data("message-zero"),
			one: this.$archiveResult.data("message-one"),
			other: this.$archiveResult.data("message-other")
		}
	}
	t.prototype = {
		run: function() {
			var t = this;
			t.$inputSearch.keyup(function() {
				t.filter(t.getSearch())
			}), t.$form.submit(function(t) {
				t.preventDefault()
			})
		},
		getSearch: function() {
			return this.$inputSearch.val().toLowerCase()
		},
		filter: function(t) {
			"" === t ? (this.showAll(), this.showResult(-1)) : (this.hideAll(), this.showPosts(t), this.showResult(this.countTags(t)))
		},
		showResult: function(t) {
			-1 === t ? this.$archiveResult.html("").hide() : 0 === t ? this.$archiveResult.html(this.messages.zero).show() : 1 === t ? this.$archiveResult.html(this.messages.one).show() : this.$archiveResult.html(this.messages.other.replace(/\{n\}/, t)).show()
		},
		countTags: function(t) {
			return s(this.posts + "[data-" + this.dataTag + "*='" + t + "']").length
		},
		showPosts: function(t) {
			s(this.tags + "[data-" + this.dataTag + "*='" + t + "']").show(), s(this.posts + "[data-" + this.dataTag + "*='" + t + "']").show()
		},
		showAll: function() {
			this.$tags.show(), this.$posts.show()
		},
		hideAll: function() {
			this.$tags.hide(), this.$posts.hide()
		}
	}, s(document).ready(function() {
		s("#tags-archives").length && new t("#tags-archives").run()
	})
}(jQuery);


