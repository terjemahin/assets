document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("disqus_thread"),t=setInterval(()=>{let t=document.getElementsByTagName("iframe");for(var n in t)void 0!==t[n].src&&t[n].src.match(/(ads-iframe)|(disqusads)/gi)&&(t[n].style.display="none",e.style.width="100%")},300);setTimeout(function(){clearInterval(t)},5e3)});function list(u){if(document.getElementById("cb1").checked == false){document.getElementById("xBar").style.width = "228px"; var r = new XMLHttpRequest(); r.onreadystatechange = function() {if (r.readyState == 4 && r.status == 200){document.getElementById("xBar").innerHTML = r.responseText;}}; r.open("GET", u, true); r.send(null);}else{document.getElementById("xBar").style.width ="0";var xx=document.getElementById("x");xx.parentNode.removeChild(xx);}};var path = location.pathname.split("/");var pname = "";for (i = 0; i < path.length-1; i++) {pname += path[i];pname += "/";}function xOpen(chapter){open(location.protocol+pname+"Chapter%20"+chapter+".-","_self");};(function() { var d = document, s = d.createElement("script"); s.src = "https://terjemahin.disqus.com/embed.js"; s.setAttribute("data-timestamp", +new Date()); (d.head || d.body).appendChild(s);})();
