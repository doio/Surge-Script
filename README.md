# Surge-Script
For Bilibii and Zhihu

Zhihu        下载旧版本：4.18.0   version id：827525917

BiliBili     下载哔哩哔哩**_概念版(蓝色)_**：2.0

新版知乎也可以，不过不能保证后续更新是否使规则失效。推荐旧版
旧版本功能已足够，无需更新

ps：BiliBili 规则比较激进，自行修改
```
[Rule]
//Thirdparty
DOMAIN,pingma.qq.com,REJECT
DOMAIN-SUFFIX,fusion.qq.com,REJECT

//Zhihu
DOMAIN,crash2.zhihu.com,REJECT
DOMAIN,vdn.vzuu.com,REJECT
DOMAIN,sugar.zhihu.com,REJECT
AND,((USER-AGENT,ZhihuHybrid*), (DOMAIN,api.zhihu.com)),REJECT
DOMAIN,unpkg.zhimg.com,REJECT
DOMAIN,lens.zhihu.com,REJECT

//BiliBili
DOMAIN,thirdparty.biliapi.com,REJECT
DOMAIN,data.bilibili.com,REJECT
DOMAIN,cm.bilibili.com,REJECT
DOMAIN,miniapp.bilibili.com,REJECT

[URL Rewrite]
https://api.zhihu.com/launch - reject
https://api.zhihu.com/ad-style-service - reject
https://api.zhihu.com/market/popover - reject
https://api.zhihu.com/real_time - reject
https://api.zhihu.com/app_config - reject
https://api.zhihu.com/ab/api - reject
https://api.zhihu.com/search/top_search - reject
https://api.zhihu.com/banner - reject
dataflow - reject
openapi - reject
amdc - reject
featured-comment-ad - reject
https://app.bilibili.com/x/v2/search/defaultword - reject
https://app.bilibili.com/x/v2/search/recommend - reject
https://app.bilibili.com/x/v2/search/hot - reject
https://app.bilibili.com/x/v2/rank.*rid=168 - reject
https://app.bilibili.com/x/v2/rank.*rid=5 - reject
https://api.bilibili.com/pgc/season/rank/cn - reject
https://api.zhihu.com/search/preset_words - reject
https://api.zhihu.com/zst/events - reject


[MITM]
hostname = api.zhihu.com, app.bilibili.com, api.bilibili.com

[Script]
http-response https://api.zhihu.com/topstory/follow script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20feed.js
http-response https://api.zhihu.com/topstory/recommend script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20recommend.js
http-response https://api.zhihu.com/v4/questions script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20answer.js
http-response https://app.bilibili.com/x/resource/show/tab script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20tab.js
http-response https://app.bilibili.com/x/channel/list script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20channel.js
http-response https://app.bilibili.com/x/v2/feed script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20feed.js
http-response https://app.bilibili.com/x/v2/account/mine script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20account.js
```
