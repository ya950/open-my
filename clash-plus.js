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
    // 本地主机/设备
    "+.lan",
    "+.local",
    // // Windows网络出现小地球图标
    "+.msftconnecttest.com",
    "+.msftncsi.com",
    // QQ快速登录检测失败
    "localhost.ptlogin2.qq.com",
    "localhost.sec.qq.com",
      // 追加以下条目
    "+.in-addr.arpa", 
    "+.ip6.arpa",
    "time.*.com",
    "time.*.gov",
    "pool.ntp.org",
    // 微信快速登录检测失败
    "localhost.work.weixin.qq.com"
  ],
  "default-nameserver": ["223.5.5.5","1.2.4.8"],//可修改成自己ISP的DNS
  "nameserver": foreignNameservers.slice(), // 使用slice()代替扩展运算符
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
  var proxyCount = (config && config.proxies && config.proxies.length) ? config.proxies.length : 0;
  var proxyProviderCount = (config && config["proxy-providers"] && typeof config["proxy-providers"] === "object") ? Object.keys(config["proxy-providers"]).length : 0;
  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error("配置文件中未找到任何代理");
  }

  // 覆盖原配置中DNS配置
  config["dns"] = dnsConfig;

  // 添加连接池配置 - 移动端优化
  config["connection-pool"] = {
    "enable": true,
    "max-host-connections": 8, // 从16减少到8
    "max-connections": 512, // 从1024减少到512
    "min-idle-connections": 4, // 从8减少到4
    "max-idle-connections": 16, // 从32减少到16
    "idle-timeout": 60 // 从90减少到60秒
  };
  
  // 添加TCP配置优化
  config["tcp-concurrent"] = true;
  config["unified-delay"] = true;
  config["global-client-fingerprint"] = "chrome";
  
  // 添加移动端特定优化
  config["profile-store-selected"] = true; // 减少配置重载
  config["geodata-mode"] = true; // 使用内存中的地理数据，减少磁盘IO
  config["geodata-loader"] = "memconservative"; // 保守的内存加载模式
  
  config["experimental"] = {
    "ignore-resolve-fail": true, // 忽略解析失败，减少重试
    "sniff-tls-sni": true // 启用SNI嗅探，提高连接效率
  };

  // 获取所有节点名称
  var allProxies = (config && config.proxies) ? config.proxies.map(function(p) { return p.name; }) : [];
  
  // 分离SS节点和其他节点
  var ssProxies = (config && config.proxies) ? config.proxies.filter(function(p) { return p.type === "ss"; }).map(function(p) { return p.name; }) : [];
  var nonSSProxies = (config && config.proxies) ? config.proxies.filter(function(p) { return p.type !== "ss"; }).map(function(p) { return p.name; }) : [];
  
  // 创建链式代理组 - 每个SS节点都创建一个链式代理组
  var chainProxyGroups = [];
  ssProxies.forEach(function(ssProxy) {
    // 使用L代替"链式-"前缀
    var chainGroupName = "L" + ssProxy;
    var chainGroup = Object.assign({}, groupBaseOption);
    chainGroup.name = chainGroupName;
    chainGroup.type = "relay"; // 使用relay类型实现链式代理
    chainGroup.proxies = ["前置代理", ssProxy]; // 前置代理 -> SS节点
    chainGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Proxy.png";
    chainGroup.hidden = true; // 隐藏这些单独的链式代理组
    chainGroup.timeout = 5000; // 增加超时时间，因为链式代理需要更长的连接时间
    chainGroup.url = "https://www.gstatic.com/generate_204"; // 使用更稳定的测试URL
    chainProxyGroups.push(chainGroup);
  });
  
  // 获取所有链式代理组名称
  var chainProxyNames = ssProxies.map(function(ssProxy) { return "L" + ssProxy; });
  
  // 确保链式代理组不为空，如果为空则使用其他节点作为备选
  var autoSelectProxies = chainProxyNames.length > 0 ? chainProxyNames : nonSSProxies.slice(0, 5);
  
  // 定义所有国家分组名称
  var countryGroups = [
    "日本手动", "日本自动", "日本故转",
    "美国手动", "美国自动", "美国故转",
    "台湾手动", "台湾自动", "台湾故转",
    "香港手动", "香港自动", "香港故转",
    "新加坡手动", "新加坡自动", "新加坡故转",
    "韩国手动", "韩国自动", "韩国故转"
  ];
  
  // 创建代理组数组
  var proxyGroups = [];
  
  // 前置代理组
  var preProxyGroup = Object.assign({}, groupBaseOption);
  preProxyGroup.name = "前置代理";
  preProxyGroup.type = "select";
  preProxyGroup.proxies = [
    "日本手动", "美国手动", "台湾手动", "香港手动", "新加坡手动", "韩国手动", 
    "延迟选优"
  ].concat(nonSSProxies); // 只包含非SS节点
  preProxyGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Global.png";
  proxyGroups.push(preProxyGroup);
  
  // 链式代理组
  var chainProxyGroup = Object.assign({}, groupBaseOption);
  chainProxyGroup.name = "链式代理";
  chainProxyGroup.type = "select";
  chainProxyGroup.proxies = ["最优链式"].concat(chainProxyNames);
  chainProxyGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Proxy.png";
  proxyGroups.push(chainProxyGroup);
  
  // 最优链式组
  var bestChainGroup = Object.assign({}, groupBaseOption);
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
  
  // 节点选择组
  var nodeSelectGroup = Object.assign({}, groupBaseOption);
  nodeSelectGroup.name = "节点选择";
  nodeSelectGroup.type = "select";
  nodeSelectGroup.proxies = [
    "链式代理",
    "日本手动", "美国手动", "台湾手动", "香港手动", "新加坡手动", "韩国手动", 
    "延迟选优"
  ].concat(nonSSProxies);
  nodeSelectGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Global.png";
  proxyGroups.push(nodeSelectGroup);
  
  // 延迟选优组
  var latencyGroup = Object.assign({}, groupBaseOption);
  latencyGroup.name = "延迟选优";
  latencyGroup.type = "url-test";
  latencyGroup.interval = 600;
  latencyGroup.tolerance = 100;
  latencyGroup.lazy = false;
  latencyGroup.proxies = nonSSProxies;
  latencyGroup.url = "https://www.gstatic.com/generate_204";
  latencyGroup.icon = "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/speed.svg";
  proxyGroups.push(latencyGroup);
  
  // 谷歌服务组
  var googleGroup = Object.assign({}, groupBaseOption);
  googleGroup.name = "谷歌服务";
  googleGroup.type = "select";
  googleGroup.proxies = [
    "链式代理",
    "最优链式",
    "延迟选优",
    "全局直连"
  ].concat(countryGroups);
  googleGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Google.png";
  proxyGroups.push(googleGroup);
  
  // Cloudflare组
  var cloudflareGroup = Object.assign({}, groupBaseOption);
  cloudflareGroup.name = "Cloudflare";
  cloudflareGroup.type = "select";
  cloudflareGroup.proxies = [
    "链式代理",
    "最优链式",
    "延迟选优",
    "全局直连"
  ].concat(countryGroups);
  cloudflareGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Global.png";
  proxyGroups.push(cloudflareGroup);
  
  // YouTube组
  var youtubeGroup = Object.assign({}, groupBaseOption);
  youtubeGroup.name = "YouTube";
  youtubeGroup.type = "select";
  youtubeGroup.proxies = [
    "链式代理",
    "最优链式",
    "延迟选优",
    "全局直连"
  ].concat(countryGroups);
  youtubeGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/YouTube.png";
  proxyGroups.push(youtubeGroup);
  
  // Netflix组
  var netflixGroup = Object.assign({}, groupBaseOption);
  netflixGroup.name = "Netflix";
  netflixGroup.type = "select";
  netflixGroup.proxies = [
    "链式代理",
    "最优链式",
    "延迟选优",
    "全局直连"
  ].concat(countryGroups);
  netflixGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Netflix.png";
  proxyGroups.push(netflixGroup);
  
  // 电报消息组
  var telegramGroup = Object.assign({}, groupBaseOption);
  telegramGroup.name = "电报消息";
  telegramGroup.type = "select";
  telegramGroup.proxies = [
    "链式代理",
    "最优链式",
    "延迟选优",
    "全局直连"
  ].concat(countryGroups);
  telegramGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Telegram.png";
  proxyGroups.push(telegramGroup);
  
  // AI组
  var aiGroup = Object.assign({}, groupBaseOption);
  aiGroup.name = "AI";
  aiGroup.type = "select";
  aiGroup.proxies = [
    "链式代理",
    "最优链式",
    "延迟选优"
  ].concat(countryGroups);
  aiGroup.icon = "https://images.icon-icons.com/405/PNG/96/Ai_40670.png";
  proxyGroups.push(aiGroup);
  
  // TikTok组
  var tiktokGroup = Object.assign({}, groupBaseOption);
  tiktokGroup.name = "TikTok";
  tiktokGroup.type = "select";
  tiktokGroup.proxies = [
    "链式代理",
    "最优链式",
    "延迟选优"
  ].concat(countryGroups);
  tiktokGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/TikTok.png";
  proxyGroups.push(tiktokGroup);
  
  // 微软服务组
  var microsoftGroup = Object.assign({}, groupBaseOption);
  microsoftGroup.name = "微软服务";
  microsoftGroup.type = "select";
  microsoftGroup.proxies = [
    "全局直连",
    "链式代理",
    "最优链式",
    "延迟选优"
  ].concat(countryGroups);
  microsoftGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Microsoft.png";
  proxyGroups.push(microsoftGroup);
  
  // 苹果服务组
  var appleGroup = Object.assign({}, groupBaseOption);
  appleGroup.name = "苹果服务";
  appleGroup.type = "select";
  appleGroup.proxies = [
    "链式代理",
    "最优链式",
    "延迟选优",
    "全局直连"
  ].concat(countryGroups);
  appleGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Apple.png";
  proxyGroups.push(appleGroup);
  
  // 哔哩哔哩港澳台组
  var bilibiliGroup = Object.assign({}, groupBaseOption);
  bilibiliGroup.name = "哔哩哔哩港澳台";
  bilibiliGroup.type = "select";
  bilibiliGroup.proxies = [
    "链式代理",
    "最优链式",
    "延迟选优",
    "全局直连",
    "台湾手动", "台湾自动", "香港手动", "香港自动"
  ];
  bilibiliGroup.icon = "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/icon/bilibili.svg";
  proxyGroups.push(bilibiliGroup);
  
  // Spotify组
  var spotifyGroup = Object.assign({}, groupBaseOption);
  spotifyGroup.name = "Spotify";
  spotifyGroup.type = "select";
  spotifyGroup.proxies = [
    "链式代理",
    "最优链式",
    "延迟选优",
    "全局直连"
  ].concat(countryGroups);
  spotifyGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Spotify.png";
  proxyGroups.push(spotifyGroup);
  
  // 国家分组 - 日本
  var japanManualGroup = Object.assign({}, groupBaseOption);
  japanManualGroup.name = "日本手动";
  japanManualGroup.type = "select";
  japanManualGroup.proxies = ["日本自动", "日本故转"];
  japanManualGroup["include-all"] = true;
  japanManualGroup.filter = "(?i)日本|jp|JP|东京|大阪|Tokyo|Osaka";
  japanManualGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Japan.png";
  proxyGroups.push(japanManualGroup);
  
  var japanAutoGroup = Object.assign({}, groupBaseOption);
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
  
  var japanFallbackGroup = Object.assign({}, groupBaseOption);
  japanFallbackGroup.name = "日本故转";
  japanFallbackGroup.type = "fallback";
  japanFallbackGroup.interval = 600;
  japanFallbackGroup["include-all"] = true;
  japanFallbackGroup.filter = "(?i)日本|jp|JP|东京|大阪|Tokyo|Osaka";
  japanFallbackGroup.url = "https://www.gstatic.com/generate_204";
  japanFallbackGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Japan.png";
  proxyGroups.push(japanFallbackGroup);
  
  // 国家分组 - 美国
  var usManualGroup = Object.assign({}, groupBaseOption);
  usManualGroup.name = "美国手动";
  usManualGroup.type = "select";
  usManualGroup.proxies = ["美国自动", "美国故转"];
  usManualGroup["include-all"] = true;
  usManualGroup.filter = "(?i)美国|us|US|美利坚|United States";
  usManualGroup.icon = "https://images.icon-icons.com/238/PNG/96/Usa_26407.png";
  proxyGroups.push(usManualGroup);
  
  var usAutoGroup = Object.assign({}, groupBaseOption);
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
  
  var usFallbackGroup = Object.assign({}, groupBaseOption);
  usFallbackGroup.name = "美国故转";
  usFallbackGroup.type = "fallback";
  usFallbackGroup.interval = 600;
  usFallbackGroup["include-all"] = true;
  usFallbackGroup.filter = "(?i)美国|us|US|美利坚|United States";
  usFallbackGroup.url = "https://www.gstatic.com/generate_204";
  usFallbackGroup.icon = "https://images.icon-icons.com/238/PNG/96/Usa_26407.png";
  proxyGroups.push(usFallbackGroup);
  
  // 国家分组 - 台湾
  var twManualGroup = Object.assign({}, groupBaseOption);
  twManualGroup.name = "台湾手动";
  twManualGroup.type = "select";
  twManualGroup.proxies = ["台湾自动", "台湾故转"];
  twManualGroup["include-all"] = true;
  twManualGroup.filter = "(?i)台湾|tw|TW|台北|Taipei|台中|Taichung";
  twManualGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Taiwan.png";
  proxyGroups.push(twManualGroup);
  
  var twAutoGroup = Object.assign({}, groupBaseOption);
  twAutoGroup.name = "台湾自动";
  twAutoGroup.type = "url-test";
  twAutoGroup.interval = 600;
  twAutoGroup.tolerance = 100;
  twAutoGroup.lazy = false;
  twAutoGroup["include-all"] = true;
  twAutoGroup.filter = "(?i)台湾|tw|TW|台北|Taipei|台中|Taichung";
  twAutoGroup.url = "https://www.gstatic.com/generate_204";
  twAutoGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Taiwan.png";
  proxyGroups.push(twAutoGroup);
  
  var twFallbackGroup = Object.assign({}, groupBaseOption);
  twFallbackGroup.name = "台湾故转";
  twFallbackGroup.type = "fallback";
  twFallbackGroup.interval = 600;
  twFallbackGroup["include-all"] = true;
  twFallbackGroup.filter = "(?i)台湾|tw|TW|台北|Taipei|台中|Taichung";
  twFallbackGroup.url = "https://www.gstatic.com/generate_204";
  twFallbackGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Taiwan.png";
  proxyGroups.push(twFallbackGroup);
  
  // 国家分组 - 香港
  var hkManualGroup = Object.assign({}, groupBaseOption);
  hkManualGroup.name = "香港手动";
  hkManualGroup.type = "select";
  hkManualGroup.proxies = ["香港自动", "香港故转"];
  hkManualGroup["include-all"] = true;
  hkManualGroup.filter = "(?i)香港|hk|HK|Hong Kong|深港|沪港";
  hkManualGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Hong_Kong.png";
  proxyGroups.push(hkManualGroup);
  
  var hkAutoGroup = Object.assign({}, groupBaseOption);
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
  
  var hkFallbackGroup = Object.assign({}, groupBaseOption);
  hkFallbackGroup.name = "香港故转";
  hkFallbackGroup.type = "fallback";
  hkFallbackGroup.interval = 600;
  hkFallbackGroup["include-all"] = true;
  hkFallbackGroup.filter = "(?i)香港|hk|HK|Hong Kong|深港|沪港";
  hkFallbackGroup.url = "https://www.gstatic.com/generate_204";
  hkFallbackGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Hong_Kong.png";
  proxyGroups.push(hkFallbackGroup);
  
  // 国家分组 - 新加坡
  var sgManualGroup = Object.assign({}, groupBaseOption);
  sgManualGroup.name = "新加坡手动";
  sgManualGroup.type = "select";
  sgManualGroup.proxies = ["新加坡自动", "新加坡故转"];
  sgManualGroup["include-all"] = true;
  sgManualGroup.filter = "(?i)新加坡|sg|SG|狮城|Singapore";
  sgManualGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Singapore.png";
  proxyGroups.push(sgManualGroup);
  
  var sgAutoGroup = Object.assign({}, groupBaseOption);
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
  
  var sgFallbackGroup = Object.assign({}, groupBaseOption);
  sgFallbackGroup.name = "新加坡故转";
  sgFallbackGroup.type = "fallback";
  sgFallbackGroup.interval = 600;
  sgFallbackGroup["include-all"] = true;
  sgFallbackGroup.filter = "(?i)新加坡|sg|SG|狮城|Singapore";
  sgFallbackGroup.url = "https://www.gstatic.com/generate_204";
  sgFallbackGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Singapore.png";
  proxyGroups.push(sgFallbackGroup);
  
  // 国家分组 - 韩国
  var krManualGroup = Object.assign({}, groupBaseOption);
  krManualGroup.name = "韩国手动";
  krManualGroup.type = "select";
  krManualGroup.proxies = ["韩国自动", "韩国故转"];
  krManualGroup["include-all"] = true;
  krManualGroup.filter = "(?i)韩国|kr|KR|首尔|Seoul|Korea";
  krManualGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Korea.png";
  proxyGroups.push(krManualGroup);
  
  var krAutoGroup = Object.assign({}, groupBaseOption);
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
  
  var krFallbackGroup = Object.assign({}, groupBaseOption);
  krFallbackGroup.name = "韩国故转";
  krFallbackGroup.type = "fallback";
  krFallbackGroup.interval = 600;
  krFallbackGroup["include-all"] = true;
  krFallbackGroup.filter = "(?i)韩国|kr|KR|首尔|Seoul|Korea";
  krFallbackGroup.url = "https://www.gstatic.com/generate_204";
  krFallbackGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Korea.png";
  proxyGroups.push(krFallbackGroup);
  
  // 广告过滤组
  var adBlockGroup = Object.assign({}, groupBaseOption);
  adBlockGroup.name = "广告过滤";
  adBlockGroup.type = "select";
  adBlockGroup.proxies = ["REJECT", "DIRECT"];
  adBlockGroup.icon = "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/bug.svg";
  proxyGroups.push(adBlockGroup);
  
  // 全局直连组
  var directGroup = Object.assign({}, groupBaseOption);
  directGroup.name = "全局直连";
  directGroup.type = "select";
  directGroup.proxies = ["DIRECT", "节点选择", "延迟选优"];
  directGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Direct.png";
  proxyGroups.push(directGroup);
  
  // 全局拦截组
  var rejectGroup = Object.assign({}, groupBaseOption);
  rejectGroup.name = "全局拦截";
  rejectGroup.type = "select";
  rejectGroup.proxies = ["REJECT", "DIRECT"];
  rejectGroup.icon = "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/block.svg";
  proxyGroups.push(rejectGroup);
  
  // 漏网之鱼组
  var finalGroup = Object.assign({}, groupBaseOption);
  finalGroup.name = "漏网之鱼";
  finalGroup.type = "select";
  finalGroup.proxies = ["节点选择", "链式代理", "最优链式", "延迟选优","全局直连"];
  finalGroup.icon = "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Final.png";
  proxyGroups.push(finalGroup);
  
  // 添加链式代理组
  for (var i = 0; i < chainProxyGroups.length; i++) {
    proxyGroups.push(chainProxyGroups[i]);
  }
  
  // 覆盖原配置中的代理组
  config["proxy-groups"] = proxyGroups;

  // 覆盖原配置中的规则
  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;
  
  // 添加判断
  if(config["proxies"]) {
    config["proxies"].forEach(function(proxy) {
      // 为每个节点设置 udp = true
      proxy.udp = true;
    });
  }
  
  // 返回修改后的配置
  return config;
}
