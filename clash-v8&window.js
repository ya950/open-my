// 国内DNS服务器
var domesticNameservers = [
  "https://223.5.5.5/dns-query", // 阿里DoH
  "https://doh.pub/dns-query" // 腾讯DoH
];
// 国外DNS服务器
var foreignNameservers = [
  "https://208.67.222.222/dns-query", // OpenDNS
  "https://77.88.8.8/dns-query", //YandexDNS
  "https://1.1.1.1/dns-query", // CloudflareDNS
  "https://8.8.4.4/dns-query", // GoogleDNS  
];
// DNS配置
var dnsConfig = {
  "enable": true,
  "listen": "0.0.0.0:1053",
  "ipv6": false,
  "prefer-h3": false,
  "respect-rules": true,
  "use-system-hosts": false,
  "cache-algorithm": "arc",
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-filter": [
    "+.lan",
    "+.local",
    "+.msftconnecttest.com",
    "+.msftncsi.com",
    "localhost.ptlogin2.qq.com",
    "localhost.sec.qq.com",
    "+.in-addr.arpa", 
    "+.ip6.arpa",
    "time.*.com",
    "time.*.gov",
    "pool.ntp.org",
    "localhost.work.weixin.qq.com"
  ],
  "default-nameserver": ["223.5.5.5","1.2.4.8"],
  "nameserver": foreignNameservers.slice(),
  "proxy-server-nameserver": domesticNameservers.slice(),
  "direct-nameserver": domesticNameservers.slice(),
  "nameserver-policy": {
  "geosite:private,cn": domesticNameservers
  }
};
// 规则集通用配置
var ruleProviderCommon = {
  "type": "http",
  "format": "yaml",
  "interval": 86400
};
// 规则集配置
var ruleProviders = {
  "reject": Object.assign({}, ruleProviderCommon, {
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
    "path": "./ruleset/loyalsoldier/reject.yaml"
  }),
  "icloud": Object.assign({}, ruleProviderCommon, {
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",
    "path": "./ruleset/loyalsoldier/icloud.yaml"
  }),
  "apple": Object.assign({}, ruleProviderCommon, {
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",
    "path": "./ruleset/loyalsoldier/apple.yaml"
  }),
  "google": Object.assign({}, ruleProviderCommon, {
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt",
    "path": "./ruleset/loyalsoldier/google.yaml"
  }),
  "proxy": Object.assign({}, ruleProviderCommon, {
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",
    "path": "./ruleset/loyalsoldier/proxy.yaml"
  }),
  "direct": Object.assign({}, ruleProviderCommon, {
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
    "path": "./ruleset/loyalsoldier/direct.yaml"
  }),
  "private": Object.assign({}, ruleProviderCommon, {
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
    "path": "./ruleset/loyalsoldier/private.yaml"
  }),
  "gfw": Object.assign({}, ruleProviderCommon, {
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt",
    "path": "./ruleset/loyalsoldier/gfw.yaml"
  }),
  "tld-not-cn": Object.assign({}, ruleProviderCommon, {
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt",
    "path": "./ruleset/loyalsoldier/tld-not-cn.yaml"
  }),
  "telegramcidr": Object.assign({}, ruleProviderCommon, {
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt",
    "path": "./ruleset/loyalsoldier/telegramcidr.yaml"
  }),
  "cncidr": Object.assign({}, ruleProviderCommon, {
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
    "path": "./ruleset/loyalsoldier/cncidr.yaml"
  }),
  "lancidr": Object.assign({}, ruleProviderCommon, {
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
    "path": "./ruleset/loyalsoldier/lancidr.yaml"
  }),
  "applications": Object.assign({}, ruleProviderCommon, {
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
    "path": "./ruleset/loyalsoldier/applications.yaml"
  }),
  "cloudflare": Object.assign({}, ruleProviderCommon, {
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cloudflare.txt",
    "path": "./ruleset/loyalsoldier/cloudflare.yaml"
  }),
  "YouTube": Object.assign({}, ruleProviderCommon, {
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/YouTube.txt",
    "path": "./ruleset/xiaolin-007/YouTube.yaml"
  }),
  "Netflix": Object.assign({}, ruleProviderCommon, {
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/Netflix.txt",
    "path": "./ruleset/xiaolin-007/Netflix.yaml"
  }),
  "Spotify": Object.assign({}, ruleProviderCommon, {
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/Spotify.txt",
    "path": "./ruleset/xiaolin-007/Spotify.yaml"
  }),
  "BilibiliHMT": Object.assign({}, ruleProviderCommon, {
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/BilibiliHMT.txt",
    "path": "./ruleset/xiaolin-007/BilibiliHMT.yaml"    
  }),
  "AI": Object.assign({}, ruleProviderCommon, {
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/AI.txt",
    "path": "./ruleset/xiaolin-007/AI.yaml"    
  }),
  "TikTok": Object.assign({}, ruleProviderCommon, {
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/TikTok.txt",
    "path": "./ruleset/xiaolin-007/TikTok.yaml"    
  }),
};
// 规则
var rules = [
  // 自定义规则
  "DOMAIN-SUFFIX,googleapis.cn,谷歌服务", // Google服务
  "DOMAIN-SUFFIX,gstatic.com,谷歌服务", // Google静态资源
  "DOMAIN-SUFFIX,xn--ngstr-lra8j.com,谷歌服务", // Google Play下载服务
  "DOMAIN-SUFFIX,github.io,节点选择", // Github Pages
  "DOMAIN,v2rayse.com,节点选择", // V2rayse节点工具
  // Loyalsoldier 规则集
  "RULE-SET,applications,全局直连",
  "RULE-SET,private,全局直连",
  "RULE-SET,reject,广告过滤",
  "RULE-SET,icloud,微软服务",
  "RULE-SET,apple,苹果服务",
  "RULE-SET,cloudflare,Cloudflare",
  "RULE-SET,YouTube,YouTube",
  "RULE-SET,Netflix,Netflix",
  "RULE-SET,Spotify,Spotify",
  "RULE-SET,BilibiliHMT,哔哩哔哩港澳台",
  "RULE-SET,AI,AI",
  "RULE-SET,TikTok,TikTok",
  "RULE-SET,google,谷歌服务",
  "RULE-SET,proxy,节点选择",
  "RULE-SET,gfw,节点选择",
  "RULE-SET,tld-not-cn,节点选择",
  "RULE-SET,direct,全局直连",
  "RULE-SET,lancidr,全局直连,no-resolve",
  "RULE-SET,cncidr,全局直连,no-resolve",
  "RULE-SET,telegramcidr,电报消息,no-resolve",
  // 其他规则
  "GEOSITE,CN,全局直连",
  "GEOIP,LAN,全局直连,no-resolve",
  "GEOIP,CN,全局直连,no-resolve",
  "MATCH,漏网之鱼"
];
// 代理组通用配置
var groupBaseOption = {
  "interval": 300, // 默认5分钟
  "timeout": 3000,
  "url": "https://www.google.com/generate_204",
  "lazy": true,
  "max-failed-times": 3,
  "hidden": false
};

// 程序入口
function main(config) {
  var proxyCount = 0;
  if (config && config.proxies && config.proxies.length) {
    proxyCount = config.proxies.length;
  }
  
  var proxyProviderCount = 0;
  if (config && config["proxy-providers"] && typeof config["proxy-providers"] === "object") {
    proxyProviderCount = Object.keys(config["proxy-providers"]).length;
  }
  
  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error("配置文件中未找到任何代理");
  }

  // 覆盖原配置中DNS配置
  config["dns"] = dnsConfig;

  // 添加连接池配置 - 使用适中的值
  config["connection-pool"] = {
    "enable": true,
    "max-host-connections": 12, // 适中的值
    "max-connections": 768, // 适中的值
    "min-idle-connections": 6, // 适中的值
    "max-idle-connections": 24, // 适中的值
    "idle-timeout": 75 // 适中的值
  };
  
  // 添加TCP配置优化
  config["tcp-concurrent"] = true;
  config["unified-delay"] = true;
  config["global-client-fingerprint"] = "chrome";
  
  // 添加移动端特定优化
  config["profile-store-selected"] = true; // 减少配置重载
  config["geodata-mode"] = true; // 使用内存中的地理数据，减少磁盘IO
  config["geodata-loader"] = "memconservative"; // 保守的内存加载模式
  
  // 获取所有节点名称
  var allProxies = [];
  if (config && config.proxies) {
    for (var i = 0; i < config.proxies.length; i++) {
      allProxies.push(config.proxies[i].name);
    }
  }
  
  // 分离SS节点和其他节点
  var ssProxies = [];
  var nonSSProxies = [];
  if (config && config.proxies) {
    for (var i = 0; i < config.proxies.length; i++) {
      if (config.proxies[i].type === "ss") {
        ssProxies.push(config.proxies[i].name);
      } else {
        nonSSProxies.push(config.proxies[i].name);
      }
    }
  }
  
  // 创建链式代理组 - 每个SS节点都创建一个链式代理组
  var chainProxyGroups = [];
  for (var i = 0; i < ssProxies.length; i++) {
    var ssProxy = ssProxies[i];
    // 使用L代替"链式-"前缀
    var chainGroupName = "L" + ssProxy;
    var chainGroup = {};
    for (var key in groupBaseOption) {
      chainGroup[key] = groupBaseOption[key];
    }
    chainGroup.name = chainGroupName;
    chainGroup.type = "relay";
    chainGroup.proxies = ["前置代理", ssProxy];
    chainGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Proxy.png";
    chainGroup.hidden = true;
    chainGroup.timeout = 5000;
    chainGroup.url = "https://www.gstatic.com/generate_204";
    chainProxyGroups.push(chainGroup);
  }
  
  // 获取所有链式代理组名称
  var chainProxyNames = [];
  for (var i = 0; i < ssProxies.length; i++) {
    chainProxyNames.push("L" + ssProxies[i]);
  }
  
  // 确保链式代理组不为空，如果为空则使用其他节点作为备选
  var autoSelectProxies = [];
  if (chainProxyNames.length > 0) {
    autoSelectProxies = chainProxyNames.slice();
  } else {
    for (var i = 0; i < Math.min(5, nonSSProxies.length); i++) {
      autoSelectProxies.push(nonSSProxies[i]);
    }
  }
  
  // 定义所有国家分组名称
  var countryGroups = [
    "日本手动", "日本自动", "日本故转",
    "美国手动", "美国自动", "美国故转",
    "台湾手动", "台湾自动", "台湾故转",
    "香港手动", "香港自动", "香港故转",
    "新加坡手动", "新加坡自动", "新加坡故转",
    "韩国手动", "韩国自动", "韩国故转"
  ];
  
  // 创建前置代理的代理列表
  var preProxyList = ["日本手动", "美国手动", "台湾手动", "香港手动", "新加坡手动", "韩国手动", "延迟选优"];
  for (var i = 0; i < nonSSProxies.length; i++) {
    preProxyList.push(nonSSProxies[i]);
  }
  
  // 创建节点选择的代理列表
  var nodeSelectList = ["链式代理", "日本手动", "美国手动", "台湾手动", "香港手动", "新加坡手动", "韩国手动", "延迟选优"];
  for (var i = 0; i < nonSSProxies.length; i++) {
    nodeSelectList.push(nonSSProxies[i]);
  }
  
  // 创建谷歌服务的代理列表
  var googleServiceList = ["链式代理", "节点选择", "最优链式", "延迟选优", "全局直连"];
  for (var i = 0; i < countryGroups.length; i++) {
    googleServiceList.push(countryGroups[i]);
  }
  
  // 创建Cloudflare的代理列表
  var cloudflareList = ["链式代理", "节点选择", "最优链式", "延迟选优", "全局直连"];
  for (var i = 0; i < countryGroups.length; i++) {
    cloudflareList.push(countryGroups[i]);
  }
  
  // 创建YouTube的代理列表
  var youtubeList = ["链式代理", "节点选择", "最优链式", "延迟选优", "全局直连"];
  for (var i = 0; i < countryGroups.length; i++) {
    youtubeList.push(countryGroups[i]);
  }
  
  // 创建Netflix的代理列表
  var netflixList = ["链式代理", "节点选择", "最优链式", "延迟选优", "全局直连"];
  for (var i = 0; i < countryGroups.length; i++) {
    netflixList.push(countryGroups[i]);
  }
  
  // 创建电报消息的代理列表
  var telegramList = ["链式代理", "节点选择", "最优链式", "延迟选优", "全局直连"];
  for (var i = 0; i < countryGroups.length; i++) {
    telegramList.push(countryGroups[i]);
  }
  
  // 创建AI的代理列表
  var aiList = ["链式代理", "节点选择", "最优链式", "延迟选优"];
  for (var i = 0; i < countryGroups.length; i++) {
    aiList.push(countryGroups[i]);
  }
  
  // 创建TikTok的代理列表
  var tiktokList = ["链式代理", "节点选择", "最优链式", "延迟选优"];
  for (var i = 0; i < countryGroups.length; i++) {
    tiktokList.push(countryGroups[i]);
  }
  
  // 创建微软服务的代理列表
  var microsoftList = ["全局直连", "链式代理", "节点选择", "最优链式", "延迟选优"];
  for (var i = 0; i < countryGroups.length; i++) {
    microsoftList.push(countryGroups[i]);
  }
  
  // 创建苹果服务的代理列表
  var appleList = ["链式代理", "节点选择", "最优链式", "延迟选优", "全局直连"];
  for (var i = 0; i < countryGroups.length; i++) {
    appleList.push(countryGroups[i]);
  }
  
  // 创建哔哩哔哩港澳台的代理列表
  var bilibiliList = ["链式代理", "节点选择", "最优链式", "延迟选优", "全局直连", "台湾手动", "台湾自动", "香港手动", "香港自动"];
  
  // 创建Spotify的代理列表
  var spotifyList = ["链式代理", "节点选择", "最优链式", "延迟选优", "全局直连"];
  for (var i = 0; i < countryGroups.length; i++) {
    spotifyList.push(countryGroups[i]);
  }
  
  // 创建链式代理的代理列表
  var chainProxyList = ["最优链式"];
  for (var i = 0; i < chainProxyNames.length; i++) {
    chainProxyList.push(chainProxyNames[i]);
  }
  
  // 创建漏网之鱼的代理列表
  var finalList = ["节点选择", "链式代理", "最优链式", "延迟选优", "全局直连"];
  
  // 创建延迟选优的代理列表
  var delayOptimalList = [];
  for (var i = 1; i < countryGroups.length; i += 3) {
    delayOptimalList.push(countryGroups[i]); // 添加每个国家的自动选择组
  }
  
  // 创建代理组
  var proxyGroups = [];
  
  // 前置代理
  var preProxyGroup = {};
  for (var key in groupBaseOption) {
    preProxyGroup[key] = groupBaseOption[key];
  }
  preProxyGroup.name = "前置代理";
  preProxyGroup.type = "select";
  preProxyGroup.proxies = preProxyList;
  preProxyGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Global.png";
  proxyGroups.push(preProxyGroup);
  
  // 链式代理
  var chainProxyGroup = {};
  for (var key in groupBaseOption) {
    chainProxyGroup[key] = groupBaseOption[key];
  }
  chainProxyGroup.name = "链式代理";
  chainProxyGroup.type = "select";
  chainProxyGroup.proxies = chainProxyList;
  chainProxyGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Proxy.png";
  proxyGroups.push(chainProxyGroup);
  
  // 最优链式
  var bestChainGroup = {};
  for (var key in groupBaseOption) {
    bestChainGroup[key] = groupBaseOption[key];
  }
  bestChainGroup.name = "最优链式";
  bestChainGroup.type = "url-test";
  bestChainGroup.interval = 600;
  bestChainGroup.tolerance = 100;
  bestChainGroup.lazy = false;
  bestChainGroup.proxies = autoSelectProxies;
  bestChainGroup.url = "https://www.gstatic.com/generate_204";
  bestChainGroup.icon = "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/speed.svg";
  bestChainGroup.timeout = 5000;
  proxyGroups.push(bestChainGroup);
  
  // 节点选择
  var nodeSelectGroup = {};
  for (var key in groupBaseOption) {
    nodeSelectGroup[key] = groupBaseOption[key];
  }
  nodeSelectGroup.name = "节点选择";
  nodeSelectGroup.type = "select";
  nodeSelectGroup.proxies = nodeSelectList;
  nodeSelectGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Global.png";
  proxyGroups.push(nodeSelectGroup);
  
  // 延迟选优
  var delayOptimalGroup = {};
  for (var key in groupBaseOption) {
    delayOptimalGroup[key] = groupBaseOption[key];
  }
  delayOptimalGroup.name = "延迟选优";
  delayOptimalGroup.type = "url-test";
  delayOptimalGroup.interval = 600;
  delayOptimalGroup.tolerance = 100;
  delayOptimalGroup.lazy = false;
  delayOptimalGroup.proxies = delayOptimalList;
  delayOptimalGroup.url = "https://www.gstatic.com/generate_204";
  delayOptimalGroup.icon = "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/speed.svg";
  proxyGroups.push(delayOptimalGroup);
  
  // 谷歌服务
  var googleServiceGroup = {};
  for (var key in groupBaseOption) {
    googleServiceGroup[key] = groupBaseOption[key];
  }
  googleServiceGroup.name = "谷歌服务";
  googleServiceGroup.type = "select";
  googleServiceGroup.proxies = googleServiceList;
  googleServiceGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Google.png";
  proxyGroups.push(googleServiceGroup);
  
  // Cloudflare
  var cloudflareGroup = {};
  for (var key in groupBaseOption) {
    cloudflareGroup[key] = groupBaseOption[key];
  }
  cloudflareGroup.name = "Cloudflare";
  cloudflareGroup.type = "select";
  cloudflareGroup.proxies = cloudflareList;
  cloudflareGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Global.png";
  proxyGroups.push(cloudflareGroup);
  
  // YouTube
  var youtubeGroup = {};
  for (var key in groupBaseOption) {
    youtubeGroup[key] = groupBaseOption[key];
  }
  youtubeGroup.name = "YouTube";
  youtubeGroup.type = "select";
  youtubeGroup.proxies = youtubeList;
  youtubeGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/YouTube.png";
  proxyGroups.push(youtubeGroup);
  
  // Netflix
  var netflixGroup = {};
  for (var key in groupBaseOption) {
    netflixGroup[key] = groupBaseOption[key];
  }
  netflixGroup.name = "Netflix";
  netflixGroup.type = "select";
  netflixGroup.proxies = netflixList;
  netflixGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Netflix.png";
  proxyGroups.push(netflixGroup);
  
  // 电报消息
  var telegramGroup = {};
  for (var key in groupBaseOption) {
    telegramGroup[key] = groupBaseOption[key];
  }
  telegramGroup.name = "电报消息";
  telegramGroup.type = "select";
  telegramGroup.proxies = telegramList;
  telegramGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Telegram.png";
  proxyGroups.push(telegramGroup);
  
  // AI
  var aiGroup = {};
  for (var key in groupBaseOption) {
    aiGroup[key] = groupBaseOption[key];
  }
  aiGroup.name = "AI";
  aiGroup.type = "select";
  aiGroup.proxies = aiList;
  aiGroup.icon = "https://images.icon-icons.com/405/PNG/96/Ai_40670.png";
  proxyGroups.push(aiGroup);
  
  // TikTok
  var tiktokGroup = {};
  for (var key in groupBaseOption) {
    tiktokGroup[key] = groupBaseOption[key];
  }
  tiktokGroup.name = "TikTok";
  tiktokGroup.type = "select";
  tiktokGroup.proxies = tiktokList;
  tiktokGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/TikTok.png";
  proxyGroups.push(tiktokGroup);
  
  // 微软服务
  var microsoftGroup = {};
  for (var key in groupBaseOption) {
    microsoftGroup[key] = groupBaseOption[key];
  }
  microsoftGroup.name = "微软服务";
  microsoftGroup.type = "select";
  microsoftGroup.proxies = microsoftList;
  microsoftGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Microsoft.png";
  proxyGroups.push(microsoftGroup);
  
  // 苹果服务
  var appleGroup = {};
  for (var key in groupBaseOption) {
    appleGroup[key] = groupBaseOption[key];
  }
  appleGroup.name = "苹果服务";
  appleGroup.type = "select";
  appleGroup.proxies = appleList;
  appleGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Apple.png";
  proxyGroups.push(appleGroup);
  
  // 哔哩哔哩港澳台
  var bilibiliGroup = {};
  for (var key in groupBaseOption) {
    bilibiliGroup[key] = groupBaseOption[key];
  }
  bilibiliGroup.name = "哔哩哔哩港澳台";
  bilibiliGroup.type = "select";
  bilibiliGroup.proxies = bilibiliList;
  bilibiliGroup.icon = "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/icon/bilibili.svg";
  proxyGroups.push(bilibiliGroup);
  
  // Spotify
  var spotifyGroup = {};
  for (var key in groupBaseOption) {
    spotifyGroup[key] = groupBaseOption[key];
  }
  spotifyGroup.name = "Spotify";
  spotifyGroup.type = "select";
  spotifyGroup.proxies = spotifyList;
  spotifyGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Spotify.png";
  proxyGroups.push(spotifyGroup);
  
  // 国家分组 - 日本
  var japanGroup = {};
  for (var key in groupBaseOption) {
    japanGroup[key] = groupBaseOption[key];
  }
  japanGroup.name = "日本手动";
  japanGroup.type = "select";
  japanGroup.proxies = ["日本自动", "日本故转"];
  japanGroup["include-all"] = true;
  japanGroup.filter = "(?i)日本|jp|JP|东京|大阪|Tokyo|Osaka";
  japanGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Japan.png";
  proxyGroups.push(japanGroup);
  
  var japanAutoGroup = {};
  for (var key in groupBaseOption) {
    japanAutoGroup[key] = groupBaseOption[key];
  }
  japanAutoGroup.name = "日本自动";
  japanAutoGroup.type = "url-test";
  japanAutoGroup.interval = 600;
  japanAutoGroup.tolerance = 100;
  japanAutoGroup.lazy = false;
  japanAutoGroup["include-all"] = true;
  japanAutoGroup.filter = "(?i)日本|jp|JP|东京|大阪|Tokyo|Osaka";
  japanAutoGroup.url = "https://www.gstatic.com/generate_204";
  japanAutoGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Japan.png";
  proxyGroups.push(japanAutoGroup);
  
  var japanFallbackGroup = {};
  for (var key in groupBaseOption) {
    japanFallbackGroup[key] = groupBaseOption[key];
  }
  japanFallbackGroup.name = "日本故转";
  japanFallbackGroup.type = "fallback";
  japanFallbackGroup.interval = 600;
  japanFallbackGroup["include-all"] = true;
  japanFallbackGroup.filter = "(?i)日本|jp|JP|东京|大阪|Tokyo|Osaka";
  japanFallbackGroup.url = "https://www.gstatic.com/generate_204";
  japanFallbackGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Japan.png";
  proxyGroups.push(japanFallbackGroup);
  
  // 国家分组 - 美国
  var usGroup = {};
  for (var key in groupBaseOption) {
    usGroup[key] = groupBaseOption[key];
  }
  usGroup.name = "美国手动";
  usGroup.type = "select";
  usGroup.proxies = ["美国自动", "美国故转"];
  usGroup["include-all"] = true;
  usGroup.filter = "(?i)美国|us|US|美利坚|United States";
  usGroup.icon = "https://images.icon-icons.com/238/PNG/96/Usa_26407.png";
  proxyGroups.push(usGroup);
  
  var usAutoGroup = {};
  for (var key in groupBaseOption) {
    usAutoGroup[key] = groupBaseOption[key];
  }
  usAutoGroup.name = "美国自动";
  usAutoGroup.type = "url-test";
  usAutoGroup.interval = 600;
  usAutoGroup.tolerance = 100;
  usAutoGroup.lazy = false;
  usAutoGroup["include-all"] = true;
  usAutoGroup.filter = "(?i)美国|us|US|美利坚|United States";
  usAutoGroup.url = "https://www.gstatic.com/generate_204";
  usAutoGroup.icon = "https://images.icon-icons.com/238/PNG/96/Usa_26407.png";
  proxyGroups.push(usAutoGroup);
  
  var usFallbackGroup = {};
  for (var key in groupBaseOption) {
    usFallbackGroup[key] = groupBaseOption[key];
  }
  usFallbackGroup.name = "美国故转";
  usFallbackGroup.type = "fallback";
  usFallbackGroup.interval = 600;
  usFallbackGroup["include-all"] = true;
  usFallbackGroup.filter = "(?i)美国|us|US|美利坚|United States";
  usFallbackGroup.url = "https://www.gstatic.com/generate_204";
  usFallbackGroup.icon = "https://images.icon-icons.com/238/PNG/96/Usa_26407.png";
  proxyGroups.push(usFallbackGroup);
  
  // 国家分组 - 台湾
  var taiwanGroup = {};
  for (var key in groupBaseOption) {
    taiwanGroup[key] = groupBaseOption[key];
  }
  taiwanGroup.name = "台湾手动";
  taiwanGroup.type = "select";
  taiwanGroup.proxies = ["台湾自动", "台湾故转"];
  taiwanGroup["include-all"] = true;
  taiwanGroup.filter = "(?i)台湾|tw|TW|台北|Taipei|台中|Taichung";
  taiwanGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Taiwan.png";
  proxyGroups.push(taiwanGroup);
  
  var taiwanAutoGroup = {};
  for (var key in groupBaseOption) {
    taiwanAutoGroup[key] = groupBaseOption[key];
  }
  taiwanAutoGroup.name = "台湾自动";
  taiwanAutoGroup.type = "url-test";
  taiwanAutoGroup.interval = 600;
  taiwanAutoGroup.tolerance = 100;
  taiwanAutoGroup.lazy = false;
  taiwanAutoGroup["include-all"] = true;
  taiwanAutoGroup.filter = "(?i)台湾|tw|TW|台北|Taipei|台中|Taichung";
  taiwanAutoGroup.url = "https://www.gstatic.com/generate_204";
  taiwanAutoGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Taiwan.png";
  proxyGroups.push(taiwanAutoGroup);
  
  var taiwanFallbackGroup = {};
  for (var key in groupBaseOption) {
    taiwanFallbackGroup[key] = groupBaseOption[key];
  }
  taiwanFallbackGroup.name = "台湾故转";
  taiwanFallbackGroup.type = "fallback";
  taiwanFallbackGroup.interval = 600;
  taiwanFallbackGroup["include-all"] = true;
  taiwanFallbackGroup.filter = "(?i)台湾|tw|TW|台北|Taipei|台中|Taichung";
  taiwanFallbackGroup.url = "https://www.gstatic.com/generate_204";
  taiwanFallbackGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Taiwan.png";
  proxyGroups.push(taiwanFallbackGroup);
  
  // 国家分组 - 香港
  var hkGroup = {};
  for (var key in groupBaseOption) {
    hkGroup[key] = groupBaseOption[key];
  }
  hkGroup.name = "香港手动";
  hkGroup.type = "select";
  hkGroup.proxies = ["香港自动", "香港故转"];
  hkGroup["include-all"] = true;
  hkGroup.filter = "(?i)香港|hk|HK|Hong Kong|深港|沪港";
  hkGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Hong_Kong.png";
  proxyGroups.push(hkGroup);
  
  var hkAutoGroup = {};
  for (var key in groupBaseOption) {
    hkAutoGroup[key] = groupBaseOption[key];
  }
  hkAutoGroup.name = "香港自动";
  hkAutoGroup.type = "url-test";
  hkAutoGroup.interval = 600;
  hkAutoGroup.tolerance = 100;
  hkAutoGroup.lazy = false;
  hkAutoGroup["include-all"] = true;
  hkAutoGroup.filter = "(?i)香港|hk|HK|Hong Kong|深港|沪港";
  hkAutoGroup.url = "https://www.gstatic.com/generate_204";
  hkAutoGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Hong_Kong.png";
  proxyGroups.push(hkAutoGroup);
  
  var hkFallbackGroup = {};
  for (var key in groupBaseOption) {
    hkFallbackGroup[key] = groupBaseOption[key];
  }
  hkFallbackGroup.name = "香港故转";
  hkFallbackGroup.type = "fallback";
  hkFallbackGroup.interval = 600;
  hkFallbackGroup["include-all"] = true;
  hkFallbackGroup.filter = "(?i)香港|hk|HK|Hong Kong|深港|沪港";
  hkFallbackGroup.url = "https://www.gstatic.com/generate_204";
  hkFallbackGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Hong_Kong.png";
  proxyGroups.push(hkFallbackGroup);
  
  // 国家分组 - 新加坡
  var sgGroup = {};
  for (var key in groupBaseOption) {
    sgGroup[key] = groupBaseOption[key];
  }
  sgGroup.name = "新加坡手动";
  sgGroup.type = "select";
  sgGroup.proxies = ["新加坡自动", "新加坡故转"];
  sgGroup["include-all"] = true;
  sgGroup.filter = "(?i)新加坡|sg|SG|狮城|Singapore";
  sgGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Singapore.png";
  proxyGroups.push(sgGroup);
  
  var sgAutoGroup = {};
  for (var key in groupBaseOption) {
    sgAutoGroup[key] = groupBaseOption[key];
  }
  sgAutoGroup.name = "新加坡自动";
  sgAutoGroup.type = "url-test";
  sgAutoGroup.interval = 600;
  sgAutoGroup.tolerance = 100;
  sgAutoGroup.lazy = false;
  sgAutoGroup["include-all"] = true;
  sgAutoGroup.filter = "(?i)新加坡|sg|SG|狮城|Singapore";
  sgAutoGroup.url = "https://www.gstatic.com/generate_204";
  sgAutoGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Singapore.png";
  proxyGroups.push(sgAutoGroup);
  
  var sgFallbackGroup = {};
  for (var key in groupBaseOption) {
    sgFallbackGroup[key] = groupBaseOption[key];
  }
  sgFallbackGroup.name = "新加坡故转";
  sgFallbackGroup.type = "fallback";
  sgFallbackGroup.interval = 600;
  sgFallbackGroup["include-all"] = true;
  sgFallbackGroup.filter = "(?i)新加坡|sg|SG|狮城|Singapore";
  sgFallbackGroup.url = "https://www.gstatic.com/generate_204";
  sgFallbackGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Singapore.png";
  proxyGroups.push(sgFallbackGroup);
  
  // 国家分组 - 韩国
  var krGroup = {};
  for (var key in groupBaseOption) {
    krGroup[key] = groupBaseOption[key];
  }
  krGroup.name = "韩国手动";
  krGroup.type = "select";
  krGroup.proxies = ["韩国自动", "韩国故转"];
  krGroup["include-all"] = true;
  krGroup.filter = "(?i)韩国|kr|KR|首尔|Seoul|Korea";
  krGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Korea.png";
  proxyGroups.push(krGroup);
  
  var krAutoGroup = {};
  for (var key in groupBaseOption) {
    krAutoGroup[key] = groupBaseOption[key];
  }
  krAutoGroup.name = "韩国自动";
  krAutoGroup.type = "url-test";
  krAutoGroup.interval = 600;
  krAutoGroup.tolerance = 100;
  krAutoGroup.lazy = false;
  krAutoGroup["include-all"] = true;
  krAutoGroup.filter = "(?i)韩国|kr|KR|首尔|Seoul|Korea";
  krAutoGroup.url = "https://www.gstatic.com/generate_204";
  krAutoGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Korea.png";
  proxyGroups.push(krAutoGroup);
  
  var krFallbackGroup = {};
  for (var key in groupBaseOption) {
    krFallbackGroup[key] = groupBaseOption[key];
  }
  krFallbackGroup.name = "韩国故转";
  krFallbackGroup.type = "fallback";
  krFallbackGroup.interval = 600;
  krFallbackGroup["include-all"] = true;
  krFallbackGroup.filter = "(?i)韩国|kr|KR|首尔|Seoul|Korea";
  krFallbackGroup.url = "https://www.gstatic.com/generate_204";
  krFallbackGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Korea.png";
  proxyGroups.push(krFallbackGroup);
  
  // 广告过滤
  var adBlockGroup = {};
  for (var key in groupBaseOption) {
    adBlockGroup[key] = groupBaseOption[key];
  }
  adBlockGroup。name = "广告过滤";
  adBlockGroup。输入 = "select";
  adBlockGroup。proxies = ["REJECT"， "DIRECT"];
  adBlockGroup。icon = "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/bug.svg";
  proxyGroups。push(adBlockGroup);
  
  // 全局直连
  var directGroup = {};
  for (var key in groupBaseOption) {
    directGroup[key] = groupBaseOption[key];
  }
  directGroup。name = "全局直连";
  directGroup。输入 = "select";
  directGroup。proxies = ["DIRECT"， "节点选择"， "延迟选优"];
  directGroup。icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Direct.png";
  proxyGroups。push(directGroup);
  
  // 全局拦截
  var blockGroup = {};
  for (var key in groupBaseOption) {
    blockGroup[key] = groupBaseOption[key];
  }
  blockGroup。name = "全局拦截";
  blockGroup。type = "select";
  blockGroup。proxies = ["REJECT"， "DIRECT"];
  blockGroup。icon = "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/block.svg";
  proxyGroups。push(blockGroup);
  
  // 漏网之鱼
  var finalGroup = {};
  for (var key in groupBaseOption) {
    finalGroup[key] = groupBaseOption[key];
  }
  finalGroup。name = "漏网之鱼";
  finalGroup。输入 = "select";
  finalGroup。proxies = finalList;
  finalGroup。icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Final.png";
  proxyGroups.push(finalGroup);
  
  // 添加链式代理组（已隐藏）
  for (var i = 0; i < chainProxyGroups.length; i++) {
    proxyGroups。push(chainProxyGroups[i]);
  }
  
  // 覆盖原配置中的代理组
  config["proxy-groups"] = proxyGroups;

  // 覆盖原配置中的规则
  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;
  
  // 添加判断
  if(config["proxies"]) {
    for (var i = 0; i < config["proxies"].length; i++) {
      // 为每个节点设置 udp = true
      config["proxies"][i]。udp = true;
    }
  }
  
  // 返回修改后的配置
  return config;
}
