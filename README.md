
### For BiliBili, Zhihu, Netease Music
- Block ADs   
- Support latest app version

```
[Rule]

//Netease Music
AND,((USER-AGENT,%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90*), (NOT,((DOMAIN-SUFFIX,music.126.net)))),REJECT
AND,((USER-AGENT,NeteaseMusic*), (NOT,((DOMAIN-SUFFIX,music.163.com)))),REJECT
USER-AGENT,neteasemusic*,REJECT

//Zhihu
AND,((USER-AGENT,ZhihuHybrid*), (NOT,((DOMAIN,www.zhihu.com))), (NOT,((DOMAIN,static.zhihu.com))), (NOT,((DOMAIN-SUFFIX,zhimg.com)))),REJECT
AND,((USER-AGENT,osee2*), (NOT,((DOMAIN,api.zhihu.com))), (NOT,((DOMAIN,static.zhihu.com))), (NOT,((DOMAIN,www.zhihu.com))), (NOT,((DOMAIN-SUFFIX,zhimg.com)))),REJECT
USER-AGENT,AVOS*,REJECT

//BiliBili
AND,((USER-AGENT,bili-univeral*), (DOMAIN,api.weibo.com)),REJECT
AND,((USER-AGENT,bili-blue*), (DOMAIN,api.weibo.com)),REJECT
DOMAIN,thirdparty.biliapi.com,REJECT
DOMAIN,data.bilibili.com,REJECT
DOMAIN,cm.bilibili.com,REJECT
DOMAIN,miniapp.bilibili.com,REJECT

//Thirdparty Advertise
DOMAIN-KEYWORD,dataflow,REJECT
DOMAIN-KEYWORD,inmobi,REJECT
DOMAIN,app.adjust.com,REJECT
DOMAIN-KEYWORD,adsystem,REJECT
DOMAIN-KEYWORD,appsflyer,REJECT
DOMAIN,graph.facebook.com,REJECT
DOMAIN-SUFFIX,app-measurement.com,REJECT
DOMAIN-KEYWORD,fenxi,REJECT
DOMAIN-KEYWORD,uploadMobileData,REJECT
DOMAIN-KEYWORD,omniture,REJECT
DOMAIN-SUFFIX,mob.com,REJECT
DOMAIN,applog.uc.cn,REJECT
DOMAIN,api.joybj.com,REJECT
DOMAIN,api.whizzone.com,REJECT
DOMAIN-KEYWORD,track,REJECT
DOMAIN-KEYWORD,traffic,REJECT
DOMAIN-SUFFIX,mmstat.com,REJECT
DOMAIN-KEYWORD,umeng,REJECT
DOMAIN-SUFFIX,4paradigm.com,REJECT
DOMAIN-KEYWORD,talkingdata,REJECT
DOMAIN-SUFFIX,mopub.com,REJECT
DOMAIN-KEYWORD,logger,REJECT
DOMAIN-SUFFIX,adthor.com,REJECT
DOMAIN-SUFFIX,catch.gift,REJECT
DOMAIN-SUFFIX,pubnative.net,REJECT
DOMAIN-SUFFIX,flurry.com,REJECT

//Google&Youtube
DOMAIN,mtalk.google.com,REJECT
DOMAIN,ssl.google-analytics.com,REJECT
DOMAIN,suggestqueries.google.com,REJECT
DOMAIN,www.googleadservices.com,REJECT
DOMAIN-SUFFIX,doubleclick.net,REJECT
DOMAIN-KEYWORD,adservice,REJECT

//QQ
DOMAIN,pingma.qq.com,REJECT
DOMAIN,fusion.qq.com,REJECT
DOMAIN,lbs.map.qq.com,REJECT
DOMAIN,ios.bugly.qq.com,REJECT
DOMAIN,up-hl.3g.qq.com,REJECT
DOMAIN,cgi.connect.qq.com,REJECT


[URL Rewrite]
https://app.bilibili.com/x/v2/param - reject
https://app.bilibili.com/x/v2/search/defaultword - reject
https://app.bilibili.com/x/v2/search/recommend - reject
https://app.bilibili.com/x/v2/search/hot - reject
https://app.bilibili.com/x/v2/rank.*rid=168 - reject
https://app.bilibili.com/x/v2/rank.*rid=5 - reject
https://api.bilibili.com/pgc/season/rank/cn - reject
http://app.bilibili.com/x/v2/dataflow - reject

https://api.zhihu.com.*launch.* - reject
https://api.zhihu.com/ab/api - reject
https://api.zhihu.com/ad-style-service/request - reject
https://api.zhihu.com/banners - reject
https://api.zhihu.com/market/popover - reject
https://api.zhihu.com/search/top_search - reject
https://api.zhihu.com/search/tabs - reject
https://api.zhihu.com/zst - reject
https://api.zhihu.com/answers/.*/comments/featured-comment-ad - reject

http://interface.music.163.com/eapi/ad - reject
http://iadmusicmat.music.126.net/.*jpg$ - reject
http://p.c.music.126.net/.*jpg$ - reject


[MITM]
auto-bypass=false
skip-server-cert-verify = true
tcp-connection = true
hostname = api.zhihu.com, app.bilibili.com, api.bilibili.com, interface.music.163.com

[Script]
http-response https://api.zhihu.com/topstory/follow script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20feed.js
http-response https://api.zhihu.com/topstory/recommend script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20recommend.js
http-response https://api.zhihu.com/v4/questions script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20answer.js
http-response https://api.zhihu.com/market/header script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20market.js

http-response https://app.bilibili.com/x/resource/show/tab script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20tab.js
http-response https://app.bilibili.com/x/channel/list script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20channel.js
http-response https://app.bilibili.com/x/v2/feed script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20feed.js
http-response https://app.bilibili.com/x/v2/account/mine script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20account.js
http-response https://app.bilibili.com/x/v2/view.access_key script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20view%20relate.js
```
