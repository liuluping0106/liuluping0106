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
