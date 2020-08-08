(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{782:function(t,e,v){"use strict";v.r(e);var i=v(10),_=Object(i.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"csrf攻击：陌生链接不要随便点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#csrf攻击：陌生链接不要随便点"}},[t._v("#")]),t._v(" CSRF攻击：陌生链接不要随便点")]),t._v(" "),v("p",[t._v("中我们讲到了 XSS 攻击，XSS 的攻击方式是黑客往用户的页面中注入恶意脚本，然后再通过恶意脚本将用户页面的数据上传到黑客的服务器上，最后黑客再利用这些数据进行一些恶意操作。XSS 攻击能够带来很大的破坏性，不过另外一种类型的攻击也不容忽视，它就是我们今天要聊的 CSRF 攻击。")]),t._v(" "),v("p",[t._v("相信你经常能听到的一句话：“别点那个链接，小心有病毒！”点击一个链接怎么就能染上病毒了呢？")]),t._v(" "),v("p",[t._v("我们结合一个真实的关于 CSRF 攻击的典型案例来分析下，在 2007 年的某一天，David 无意间打开了 Gmail 邮箱中的一份邮件，并点击了该邮件中的一个链接。过了几天，David 就发现他的域名被盗了。不过几经周折，David 还是要回了他的域名，也弄清楚了他的域名之所以被盗，就是因为无意间点击的那个链接。")]),t._v(" "),v("p",[t._v("那 David 的域名是怎么被盗的呢？")]),t._v(" "),v("p",[t._v("我们结合下图来分析下 David 域名的被盗流程：")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2019/11/101.png",alt:""}})]),t._v(" "),v("ul",[v("li",[t._v("首先 David 发起登录 Gmail 邮箱请求，然后 Gmail 服务器返回一些登录状态给 David 的浏览器，这些信息包括了 Cookie、Session 等，这样在 David 的浏览器中，Gmail 邮箱就处于登录状态了。")]),t._v(" "),v("li",[t._v("接着黑客通过各种手段引诱 David 去打开他的链接，比如 hacker.com，然后在 hacker.com 页面中，黑客编写好了一个邮件过滤器，并通过 Gmail 提供的 HTTP 设置接口设置好了新的邮件过滤功能，该过滤器会将 David 所有的邮件都转发到黑客的邮箱中。")]),t._v(" "),v("li",[t._v("最后的事情就很简单了，因为有了 David 的邮件内容，所以黑客就可以去域名服务商那边重置 David 域名账户的密码，重置好密码之后，就可以将其转出到黑客的账户了。")])]),t._v(" "),v("p",[t._v("以上就是 David 的域名被盗的完整过程，其中前两步就是我们今天要聊的 CSRF 攻击。David 在要回了他的域名之后，也将整个攻击过程分享到他的站点上了，如果你感兴趣的话，可以参考")]),t._v(" "),v("h2",{attrs:{id:"什么是-csrf-攻击"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是-csrf-攻击"}},[t._v("#")]),t._v(" 什么是 CSRF 攻击")]),t._v(" "),v("p",[t._v("CSRF 英文全称是 Cross-site request forgery，所以又称为“跨站请求伪造”，是指黑客引诱用户打开黑客的网站，在黑客的网站中，利用用户的登录状态发起的跨站请求。简单来讲，"),v("strong",[t._v("CSRF 攻击就是黑客利用了用户的登录状态，并通过第三方的站点来做一些坏事")])]),t._v(" "),v("p",[t._v("通常当用户打开了黑客的页面后，黑客有三种方式去实施 CSRF 攻击。")]),t._v(" "),v("p",[t._v("下面我们以极客时间官网为例子，来分析这三种攻击方式都是怎么实施的。这里假设极客时间具有转账功能，可以通过 POST 或 Get 来实现转账，转账接口如下所示：")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2019/11/102.png",alt:""}})]),t._v(" "),v("p",[t._v("有了上面的转账接口，我们就可以来模拟 CSRF 攻击了。")]),t._v(" "),v("h3",{attrs:{id:"_1-自动发起-get-请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-自动发起-get-请求"}},[t._v("#")]),t._v(" 1. 自动发起 Get 请求")]),t._v(" "),v("p",[t._v("黑客最容易实施的攻击方式是自动发起 Get 请求，具体攻击方式你可以参考下面这段代码：")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2019/11/103.png",alt:""}})]),t._v(" "),v("p",[t._v("这是黑客页面的 HTML 代码，在这段代码中，黑客将转账的请求接口隐藏在 img 标签内，欺骗浏览器这是一张图片资源。当该页面被加载时，浏览器会自动发起 img 的资源请求，如果服务器没有对该请求做判断的话，那么服务器就会认为该请求是一个转账请求，于是用户账户上的 100 极客币就被转移到黑客的账户上去了。")]),t._v(" "),v("h3",{attrs:{id:"_2-自动发起-post-请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-自动发起-post-请求"}},[t._v("#")]),t._v(" 2. 自动发起 POST 请求")]),t._v(" "),v("p",[t._v("除了自动发送 Get 请求之外，有些服务器的接口是使用 POST 方法的，所以黑客还需要在他的站点上伪造 POST 请求，当用户打开黑客的站点时，是自动提交 POST 请求，具体的方式你可以参考下面示例代码：")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2019/11/104.png",alt:""}})]),t._v(" "),v("p",[t._v("在这段代码中，我们可以看到黑客在他的页面中构建了一个隐藏的表单，该表单的内容就是极客时间的转账接口。当用户打开该站点之后，这个表单会被自动执行提交；当表单被提交之后，服务器就会执行转账操作。因此使用构建自动提交表单这种方式，就可以自动实现跨站点 POST 数据提交。")]),t._v(" "),v("h3",{attrs:{id:"_3-引诱用户点击链接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-引诱用户点击链接"}},[t._v("#")]),t._v(" 3. 引诱用户点击链接")]),t._v(" "),v("p",[t._v("除了自动发起 Get 和 Post 请求之外，还有一种方式是诱惑用户点击黑客站点上的链接，这种方式通常出现在论坛或者恶意邮件上。黑客会采用很多方式去诱惑用户点击链接，示例代码如下所示：")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2019/11/105.png",alt:""}})]),t._v(" "),v("p",[t._v("这段黑客站点代码，页面上放了一张美女图片，下面放了图片下载地址，而这个下载地址实际上是黑客用来转账的接口，一旦用户点击了这个链接，那么他的极客币就被转到黑客账户上了。")]),t._v(" "),v("p",[t._v("以上三种就是黑客经常采用的攻击方式。如果当用户登录了极客时间，以上三种 CSRF 攻击方式中的任何一种发生时，那么服务器都会将一定金额的极客币发送到黑客账户。")]),t._v(" "),v("p",[t._v("到这里，相信你已经知道什么是 CSRF 攻击了。和 XSS 不同的是，CSRF 攻击不需要将恶意代码注入用户的页面，仅仅是利用服务器的漏洞和用户的登录状态来实施攻击")]),t._v(" "),v("h2",{attrs:{id:"如何防止-csrf-攻击"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何防止-csrf-攻击"}},[t._v("#")]),t._v(" 如何防止 CSRF 攻击")]),t._v(" "),v("p",[t._v("了解了 CSRF 攻击的一些手段之后，我们再来看看 CSRF 攻击的一些“特征”，然后根据这些“特征”分析下如何防止 CSRF 攻击。下面是我总结的发起 CSRF 攻击的三个必要条件：")]),t._v(" "),v("ul",[v("li",[t._v("第一个，目标站点一定要有 CSRF 漏洞；")]),t._v(" "),v("li",[t._v("第二个，用户要登录过目标站点，并且在浏览器上保持有该站点的登录状态；")]),t._v(" "),v("li",[t._v("第三个，需要用户打开一个第三方站点，可以是黑客的站点，也可以是一些论坛。")])]),t._v(" "),v("p",[t._v("满足以上三个条件之后，黑客就可以对用户进行 CSRF 攻击了。这里还需要额外注意一点，与 XSS 攻击不同，CSRF 攻击不会往页面注入恶意脚本，因此黑客是无法通过 CSRF 攻击来获取用户页面数据的；其最关键的一点是要能找到服务器的漏洞，所以说对于 CSRF 攻击我们主要的防护手段是提升服务器的安全性。")]),t._v(" "),v("p",[t._v("要让服务器避免遭受到 CSRF 攻击，通常有以下几种途径。")]),t._v(" "),v("h3",{attrs:{id:"_1-充分利用好-cookie-的-samesite-属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-充分利用好-cookie-的-samesite-属性"}},[t._v("#")]),t._v(" 1. 充分利用好 Cookie 的 SameSite 属性")]),t._v(" "),v("p",[t._v("通过上面的介绍，相信你已经知道了黑客会利用用户的登录状态来发起 CSRF 攻击，而"),v("strong",[t._v("Cookie 正是浏览器和服务器之间维护登录状态的一个关键数据")]),t._v("，因此要阻止 CSRF 攻击，我们首先就要考虑在 Cookie 上来做文章。")]),t._v(" "),v("p",[t._v("通常 CSRF 攻击都是从第三方站点发起的，要防止 CSRF 攻击，我们最好能实现从第三方站点发送请求时禁止 Cookie 的发送，因此在浏览器通过不同来源发送 HTTP 请求时，有如下区别：")]),t._v(" "),v("ul",[v("li",[t._v("如果是从第三方站点发起的请求，那么需要浏览器禁止发送某些关键 Cookie 数据到服务器；")]),t._v(" "),v("li",[t._v("如果是同一个站点发起的请求，那么就需要保证 Cookie 数据正常发送。")])]),t._v(" "),v("p",[t._v("而我们要聊的 Cookie 中的 SameSite 属性正是为了解决这个问题的，通过使用 SameSite 可以有效地降低 CSRF 攻击的风险。")]),t._v(" "),v("p",[t._v("那 SameSite 是怎么防止 CSRF 攻击的呢？")]),t._v(" "),v("p",[t._v("在 HTTP 响应头中，通过 set-cookie 字段设置 Cookie 时，可以带上 SameSite 选项，如下：")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2019/11/106.png",alt:""}})]),t._v(" "),v("p",[v("strong",[t._v("SameSite 选项通常有 Strict、Lax 和 None 三个值。")])]),t._v(" "),v("ul",[v("li",[t._v("Strict 最为严格。如果 SameSite 的值是 Strict，那么浏览器会完全禁止第三方 Cookie。简言之，如果你从极客时间的页面中访问 InfoQ 的资源，而 InfoQ 的某些 Cookie 设置了 SameSite = Strict 的话，那么这些 Cookie 是不会被发送到 InfoQ 的服务器上的。只有你从 InfoQ 的站点去请求 InfoQ 的资源时，才会带上这些 Cookie。")]),t._v(" "),v("li",[t._v("Lax 相对宽松一点。在跨站点的情况下，从第三方站点的链接打开和从第三方站点提交 Get 方式的表单这两种方式都会携带 Cookie。但如果在第三方站点中使用 Post 方法，或者通过 img、iframe 等标签加载的 URL，这些场景都不会携带 Cookie。")]),t._v(" "),v("li",[t._v("而如果使用 None 的话，在任何情况下都会发送 Cookie 数据。")])]),t._v(" "),v("blockquote",[v("p",[t._v("对于防范 CSRF 攻击，我们可以针对实际情况将一些关键的 Cookie 设置为 Strict 或者 Lax 模式，这样在跨站点请求时，这些关键的 Cookie 就不会被发送到服务器，从而使得黑客的 CSRF 攻击失效。")])]),t._v(" "),v("h3",{attrs:{id:"_2-验证请求的来源站点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-验证请求的来源站点"}},[t._v("#")]),t._v(" 2. 验证请求的来源站点")]),t._v(" "),v("p",[t._v("接着我们再来了解另外一种防止 CSRF 攻击的策略，那就是"),v("strong",[t._v("在服务器端验证请求来源的站点")]),t._v("。由于 CSRF 攻击大多来自于第三方站点，因此服务器可以禁止来自第三方站点的请求。那么该怎么判断请求是否来自第三方站点呢？")]),t._v(" "),v("p",[t._v("这就需要介绍 HTTP 请求头中的 Referer 和 Origin 属性了。")]),t._v(" "),v("p",[v("strong",[t._v("Referer 是 HTTP 请求头中的一个字段，记录了该 HTTP 请求的来源地址")]),t._v("。比如我从极客时间的官网打开了 InfoQ 的站点，那么请求头中的 Referer 值是极客时间的 URL，如下图：")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2019/11/107.png",alt:""}})]),t._v(" "),v("p",[t._v("虽然可以通过 Referer 告诉服务器 HTTP 请求的来源，但是有一些场景是不适合将来源 URL 暴露给服务器的，因此浏览器提供给开发者一个选项，可以不用上传 Referer 值，具体可参考"),v("strong",[t._v("Referrer Policy")])]),t._v(" "),v("p",[t._v("但在服务器端验证请求头中的 Referer 并不是太可靠，因此标准委员会又制定了"),v("strong",[t._v("Origin 属性")]),t._v("，在一些重要的场合，比如通过 XMLHttpRequest、Fecth 发起跨站请求或者通过 Post 方法发送请求时，都会带上 Origin 属性，如下图：")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2019/11/108.png",alt:""}})]),t._v(" "),v("p",[t._v("从上图可以看出，Origin 属性只包含了域名信息，并没有包含具体的 URL 路径，这是 Origin 和 Referer 的一个主要区别。在这里需要补充一点，Origin 的值之所以不包含详细路径信息，是有些站点因为安全考虑，不想把源站点的详细路径暴露给服务器。")]),t._v(" "),v("p",[t._v("因此，服务器的策略是优先判断 Origin，如果请求头中没有包含 Origin 属性，再根据实际情况判断是否使用 Referer 值。")]),t._v(" "),v("h3",{attrs:{id:"_3-csrf-token"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-csrf-token"}},[t._v("#")]),t._v(" 3. CSRF Token")]),t._v(" "),v("p",[t._v("除了使用以上两种方式来防止 CSRF 攻击之外，还可以采用 CSRF Token 来验证，这个流程比较好理解，大致分为两步。")]),t._v(" "),v("p",[t._v("第一步，在浏览器向服务器发起请求时，服务器生成一个 CSRF Token。CSRF Token 其实就是服务器生成的字符串，然后将该字符串植入到返回的页面中。你可以参考下面示例代码：")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2019/11/109.png",alt:""}})]),t._v(" "),v("p",[t._v("第二步，在浏览器端如果要发起转账的请求，那么需要带上页面中的 CSRF Token，然后服务器会验证该 Token 是否合法。如果是从第三方站点发出的请求，那么将无法获取到 CSRF Token 的值，所以即使发出了请求，服务器也会因为 CSRF Token 不正确而拒绝请求。")]),t._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),v("p",[t._v("我们结合一个实际案例介绍了 CSRF 攻击，要发起 CSRF 攻击需要具备三个条件：目标站点存在漏洞、用户要登录过目标站点和黑客需要通过第三方站点发起攻击。")]),t._v(" "),v("p",[t._v("根据这三个必要条件，我们又介绍了该如何防止 CSRF 攻击，具体来讲主要有三种方式：充分利用好 Cookie 的 SameSite 属性、验证请求的来源站点和使用 CSRF Token。这三种方式需要合理搭配使用，这样才可以有效地防止 CSRF 攻击。")]),t._v(" "),v("p",[t._v("再结合前面两篇文章，我们可以得出页面安全问题的主要原因就是浏览器为同源策略开的两个“后门”：一个是在页面中可以任意引用第三方资源，另外一个是通过 CORS 策略让 XMLHttpRequest 和 Fetch 去跨域请求资源。")]),t._v(" "),v("p",[t._v("为了解决这些问题，我们引入了 CSP 来限制页面任意引入外部资源，引入了 HttpOnly 机制来禁止 XMLHttpRequest 或者 Fetch 发送一些关键 Cookie，引入了 SameSite 和 Origin 来防止 CSRF 攻击。")]),t._v(" "),v("p",[t._v("通过这三篇文章的分析，相信你应该已经能搭建"),v("strong",[t._v("Web 页面安全")]),t._v("的知识体系网络了。有了这张网络，你就可以将 HTTP 请求头和响应头中各种安全相关的字段关联起来，比如 Cookie 中的一些字段，还有 X-Frame-Options、X-Content-Type-Options、X-XSS-Protection 等字段，也可以将 CSP、CORS 这些知识点关联起来。当然这些并不是浏览器安全的全部，后面两篇文章我们还会介绍")])])}),[],!1,null,null,null);e.default=_.exports}}]);