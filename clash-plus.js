// 国内DNS服务器
const domesticNameservers = [
  "https://223.5.5.5/dns-query", // 阿里DoH
  "https://doh.pub/dns-query" // 腾讯DoH
];
// 国外DNS服务器
const foreignNameservers = [
  "https://208.67.222.222/dns-query", // OpenDNS
  "https://77.88.8.8/dns-query", //YandexDNS
  "https://1.1.1.1/dns-query", // CloudflareDNS
  "https://8.8.4.4/dns-query", // GoogleDNS  

];
// DNS配置
const dnsConfig = {
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
  "nameserver": [...foreignNameservers],
  "proxy-server-nameserver":[...domesticNameservers],
  "direct-nameserver":[...domesticNameservers],
  "nameserver-policy": {
  "geosite:private,cn": domesticNameservers
  }
};
// 规则集通用配置
const ruleProviderCommon = {
  "type": "http",
  "format": "yaml",
  "interval": 86400
};
// 规则集配置
const ruleProviders = {
  "reject": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
    "path": "./ruleset/loyalsoldier/reject.yaml"
  },
  "icloud": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",
    "path": "./ruleset/loyalsoldier/icloud.yaml"
  },
  "apple": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",
    "path": "./ruleset/loyalsoldier/apple.yaml"
  },
  "google": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt",
    "path": "./ruleset/loyalsoldier/google.yaml"
  },
  "proxy": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",
    "path": "./ruleset/loyalsoldier/proxy.yaml"
  },
  "direct": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
    "path": "./ruleset/loyalsoldier/direct.yaml"
  },
  "private": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
    "path": "./ruleset/loyalsoldier/private.yaml"
  },
  "gfw": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt",
    "path": "./ruleset/loyalsoldier/gfw.yaml"
  },
  "tld-not-cn": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt",
    "path": "./ruleset/loyalsoldier/tld-not-cn.yaml"
  },
  "telegramcidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt",
    "path": "./ruleset/loyalsoldier/telegramcidr.yaml"
  },
  "cncidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
    "path": "./ruleset/loyalsoldier/cncidr.yaml"
  },
  "lancidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
    "path": "./ruleset/loyalsoldier/lancidr.yaml"
  },
  "applications": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
    "path": "./ruleset/loyalsoldier/applications.yaml"
  },
  "cloudflare": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cloudflare.txt",
    "path": "./ruleset/loyalsoldier/cloudflare.yaml"
  },
  "YouTube": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/YouTube.txt",
    "path": "./ruleset/xiaolin-007/YouTube.yaml"
  },
  "Netflix": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/Netflix.txt",
    "path": "./ruleset/xiaolin-007/Netflix.yaml"
  },
  "Spotify": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/Spotify.txt",
    "path": "./ruleset/xiaolin-007/Spotify.yaml"
  },
  "BilibiliHMT": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/BilibiliHMT.txt",
    "path": "./ruleset/xiaolin-007/BilibiliHMT.yaml"    
  },
  "AI": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/AI.txt",
    "path": "./ruleset/xiaolin-007/AI.yaml"    
  },
  "TikTok": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/TikTok.txt",
    "path": "./ruleset/xiaolin-007/TikTok.yaml"    
  },
};
// 规则
const rules = [
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
const groupBaseOption = {
  "interval": 300, // 默认5分钟
  "timeout": 3000,
  "url": "https://www.google.com/generate_204",
  "lazy": true,
  "max-failed-times": 3,
  "hidden": false
};

// 程序入口
function main(config) {
  const proxyCount = config?.proxies?.length ?? 0;
  const proxyProviderCount =
    typeof config?.["proxy-providers"] === "object" ? Object.keys(config["proxy-providers"]).length : 0;
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
  const allProxies = config?.proxies?.map(p => p.name) || [];
  
  // 分离SS节点和其他节点
  const ssProxies = config?.proxies?.filter(p => p.type === "ss")?.map(p => p.name) || [];
  const nonSSProxies = config?.proxies?.filter(p => p.type !== "ss")?.map(p => p.name) || [];
  
  // 创建链式代理组 - 每个SS节点都创建一个链式代理组
  const chainProxyGroups = [];
  ssProxies.forEach(ssProxy => {
    const chainGroupName = `链式-${ssProxy}`;
    chainProxyGroups.push({
      ...groupBaseOption,
      "name": chainGroupName,
      "type": "relay", // 使用relay类型实现链式代理
      "proxies": ["前置代理", ssProxy], // 前置代理 -> SS节点
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Proxy.png",
      "hidden": true // 隐藏这些单独的链式代理组
    });
  });
  
  // 获取所有链式代理组名称
  const chainProxyNames = ssProxies.map(ssProxy => `链式-${ssProxy}`);
  
  // 确保链式代理组不为空，如果为空则使用其他节点作为备选
  const autoSelectProxies = chainProxyNames.length > 0 ? chainProxyNames : nonSSProxies.slice(0, 5);
  
  // 定义所有国家分组名称
  const countryGroups = [
    "日本手动", "日本自动", "日本故转",
    "美国手动", "美国自动", "美国故转",
    "台湾手动", "台湾自动", "台湾故转",
    "香港手动", "香港自动", "香港故转",
    "新加坡手动", "新加坡自动", "新加坡故转",
    "韩国手动", "韩国自动", "韩国故转"
  ];
  
  // 覆盖原配置中的代理组
  config["proxy-groups"] = [
    {
      ...groupBaseOption,
      "name": "前置代理",
      "type": "select",
      "proxies": [
        "日本手动", "美国手动", "台湾手动", "香港手动", "新加坡手动", "韩国手动", 
        "延迟选优",
        ...nonSSProxies // 只包含非SS节点
      ],
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Global.png"
    },
    {
      ...groupBaseOption,
      "name": "链式代理",
      "type": "select",
      "proxies": [
        "最优链式", // 修改为"最优链式"
        ...chainProxyNames
        // 不包含"节点选择"以避免循环引用
      ],
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Proxy.png"
    },
    {
      ...groupBaseOption,
      "name": "最优链式", // 修改为"最优链式"
      "type": "url-test",
      "interval": 600, // 从300改为600，减少测试频率
      "tolerance": 100, // 从50改为100，提高容忍度
      "lazy": false,
      "proxies": autoSelectProxies, // 使用确保不为空的代理列表
      "url": "https://www.gstatic.com/generate_204", // 使用更快的URL
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/speed.svg"
    },
    {
      ...groupBaseOption,
      "name": "节点选择",
      "type": "select",
      "proxies": [
        "链式代理", // 包含链式代理，但链式代理不包含节点选择，避免循环
        "日本手动", "美国手动", "台湾手动", "香港手动", "新加坡手动", "韩国手动", 
        "延迟选优",
        ...nonSSProxies // 只包含非SS节点
      ],
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Global.png"
    },
    {
      ...groupBaseOption,
      "name": "延迟选优",
      "type": "url-test",
      "interval": 600, // 从300改为600，减少测试频率
      "tolerance": 100, // 从50改为100，提高容忍度
      "lazy": false,
      "proxies": nonSSProxies, // 只包含非SS节点
      "url": "https://www.gstatic.com/generate_204", // 使用更快的URL
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/speed.svg"
    },
    {
      ...groupBaseOption,
      "name": "谷歌服务",
      "type": "select",
      "proxies": [
        "链式代理", // 使用链式代理组
        "延迟选优", // 添加顶层延迟选优
        "全局直连",
        // 添加所有国家分组
        ...countryGroups
      ],
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Google.png"
    },
    {
      ...groupBaseOption,
      "name": "Cloudflare",
      "type": "select",
      "proxies": [
        "链式代理", // 使用链式代理组
        "延迟选优", // 添加顶层延迟选优
        "全局直连",
        // 添加所有国家分组
        ...countryGroups
      ],
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Global.png"
    },
    {
      ...groupBaseOption,
      "name": "YouTube",
      "type": "select",
      "proxies": [
        "链式代理", // 使用链式代理组
        "延迟选优", // 添加顶层延迟选优
        "全局直连",
        // 添加所有国家分组
        ...countryGroups
      ],
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/YouTube.png"
    },
    {
      ...groupBaseOption,
      "name": "Netflix",
      "type": "select",
      "proxies": [
        "链式代理", // 使用链式代理组
        "延迟选优", // 添加顶层延迟选优
        "全局直连",
        // 添加所有国家分组
        ...countryGroups
      ],
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Netflix.png"
    },
    {
      ...groupBaseOption,
      "name": "电报消息",
      "type": "select",
      "proxies": [
        "链式代理", // 使用链式代理组
        "延迟选优", // 添加顶层延迟选优
        "全局直连",
        // 添加所有国家分组
        ...countryGroups
      ],
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Telegram.png"
    },
    {
      ...groupBaseOption,
      "name": "AI",
      "type": "select",
      "proxies": [
        "链式代理", // 使用链式代理组
        "延迟选优", // 添加顶层延迟选优
        // 添加所有国家分组
        ...countryGroups
      ],
      "icon": "https://images.icon-icons.com/405/PNG/96/Ai_40670.png"
    },
    {
      ...groupBaseOption,
      "name": "TikTok",
      "type": "select",
      "proxies": [
        "链式代理", // 使用链式代理组
        "延迟选优", // 添加顶层延迟选优
        // 添加所有国家分组
        ...countryGroups
      ],
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/TikTok.png"
    },
    {
      ...groupBaseOption,
      "name": "微软服务",
      "type": "select",
      "proxies": [
        "全局直连",
        "链式代理", // 使用链式代理组
        "延迟选优", // 添加顶层延迟选优
        // 添加所有国家分组
        ...countryGroups
      ],
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Microsoft.png"
    },
    {
      ...groupBaseOption,
      "name": "苹果服务",
      "type": "select",
      "proxies": [
        "链式代理", // 使用链式代理组
        "延迟选优", // 添加顶层延迟选优
        "全局直连",
        // 添加所有国家分组
        ...countryGroups
      ],
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Apple.png"
    },
    {
      ...groupBaseOption,
      "name": "哔哩哔哩港澳台",
      "type": "select",
      "proxies": [
        "链式代理", // 使用链式代理组
        "延迟选优", // 添加顶层延迟选优
        "全局直连",
        "台湾手动", "台湾自动", "香港手动", "香港自动"
      ],
      "icon": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/icon/bilibili.svg"
    },
    {
      ...groupBaseOption,
      "name": "Spotify",
      "type": "select",
      "proxies": [
        "链式代理", // 使用链式代理组
        "延迟选优", // 添加顶层延迟选优
        "全局直连",
        // 添加所有国家分组
        ...countryGroups
      ],
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Spotify.png"
    },
    // 新增国家分组
    {
      ...groupBaseOption,
      "name": "日本手动", // 修改为"日本手动"
      "type": "select",
      "proxies": ["日本自动", "日本故转"],
      "include-all": true,
      "filter": "(?i)日本|jp|JP|东京|大阪|Tokyo|Osaka",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Japan.png"
    },
    {
      ...groupBaseOption,
      "name": "日本自动", // 修改为"日本自动"
      "type": "url-test",
      "interval": 600, // 从300改为600，减少测试频率
      "tolerance": 100, // 从50改为100，提高容忍度
      "lazy": false,
      "include-all": true,
      "filter": "(?i)日本|jp|JP|东京|大阪|Tokyo|Osaka",
      "url": "https://www.gstatic.com/generate_204", // 使用更快的URL
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Japan.png"
    },
    {
      ...groupBaseOption,
      "name": "日本故转", // 修改为"日本故转"
      "type": "fallback",
      "interval": 600, // 从600改为600，保持不变
      "include-all": true,
      "filter": "(?i)日本|jp|JP|东京|大阪|Tokyo|Osaka",
      "url": "https://www.gstatic.com/generate_204", // 使用更快的URL
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Japan.png"
    },
    {
      ...groupBaseOption,
      "name": "美国手动", // 修改为"美国手动"
      "type": "select",
      "proxies": ["美国自动", "美国故转"],
      "include-all": true,
      "filter": "(?i)美国|us|US|美利坚|United States",
      "icon": "https://images.icon-icons.com/238/PNG/96/Usa_26407.png"
    },
    {
      ...groupBaseOption,
      "name": "美国自动", // 修改为"美国自动"
      "type": "url-test",
      "interval": 600, // 从300改为600，减少测试频率
      "tolerance": 100, // 从50改为100，提高容忍度
      "lazy": false,
      "include-all": true,
      "filter": "(?i)美国|us|US|美利坚|United States",
      "url": "https://www.gstatic.com/generate_204", // 使用更快的URL
      "icon": "https://images.icon-icons.com/238/PNG/96/Usa_26407.png"
    },
    {
      ...groupBaseOption,
      "name": "美国故转", // 修改为"美国故转"
      "type": "fallback",
      "interval": 600, // 从600改为600，保持不变
      "include-all": true,
      "filter": "(?i)美国|us|US|美利坚|United States",
      "url": "https://www.gstatic.com/generate_204", // 使用更快的URL
      "icon": "https://images.icon-icons.com/238/PNG/96/Usa_26407.png"
    },
    {
      ...groupBaseOption,
      "name": "台湾手动", // 修改为"台湾手动"
      "type": "select",
      "proxies": ["台湾自动", "台湾故转"],
      "include-all": true,
      "filter": "(?i)台湾|tw|TW|台北|Taipei|台中|Taichung",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Taiwan.png"
    },
    {
      ...groupBaseOption,
      "name": "台湾自动", // 修改为"台湾自动"
      "type": "url-test",
      "interval": 600, // 从300改为600，减少测试频率
      "tolerance": 100, // 从50改为100，提高容忍度
      "lazy": false,
      "include-all": true,
      "filter": "(?i)台湾|tw|TW|台北|Taipei|台中|Taichung",
      "url": "https://www.gstatic.com/generate_204", // 使用更快的URL
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Taiwan.png"
    },
    {
      ...groupBaseOption,
      "name": "台湾故转", // 修改为"台湾故转"
      "type": "fallback",
      "interval": 600, // 从600改为600，保持不变
      "include-all": true,
      "filter": "(?i)台湾|tw|TW|台北|Taipei|台中|Taichung",
      "url": "https://www.gstatic.com/generate_204", // 使用更快的URL
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Taiwan.png"
    },
    {
      ...groupBaseOption,
      "name": "香港手动", // 修改为"香港手动"
      "type": "select",
      "proxies": ["香港自动", "香港故转"],
      "include-all": true,
      "filter": "(?i)香港|hk|HK|Hong Kong|深港|沪港",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Hong_Kong.png"
    },
    {
      ...groupBaseOption,
      "name": "香港自动", // 修改为"香港自动"
      "type": "url-test",
      "interval": 600, // 从300改为600，减少测试频率
      "tolerance": 100, // 从50改为100，提高容忍度
      "lazy": false,
      "include-all": true,
      "filter": "(?i)香港|hk|HK|Hong Kong|深港|沪港",
      "url": "https://www.gstatic.com/generate_204", // 使用更快的URL
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Hong_Kong.png"
    },
    {
      ...groupBaseOption,
      "name": "香港故转", // 修改为"香港故转"
      "type": "fallback",
      "interval": 600, // 从600改为600，保持不变
      "include-all": true,
      "filter": "(?i)香港|hk|HK|Hong Kong|深港|沪港",
      "url": "https://www.gstatic.com/generate_204", // 使用更快的URL
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Hong_Kong.png"
    },
    {
      ...groupBaseOption,
      "name": "新加坡手动", // 修改为"新加坡手动"
      "type": "select",
      "proxies": ["新加坡自动", "新加坡故转"],
      "include-all": true,
      "filter": "(?i)新加坡|sg|SG|狮城|Singapore",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Singapore.png"
    },
    {
      ...groupBaseOption,
      "name": "新加坡自动", // 修改为"新加坡自动"
      "type": "url-test",
      "interval": 600, // 从300改为600，减少测试频率
      "tolerance": 100, // 从50改为100，提高容忍度
      "lazy": false,
      "include-all": true,
      "filter": "(?i)新加坡|sg|SG|狮城|Singapore",
      "url": "https://www.gstatic.com/generate_204", // 使用更快的URL
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Singapore.png"
    },
    {
      ...groupBaseOption,
      "name": "新加坡故转", // 修改为"新加坡故转"
      "type": "fallback",
      "interval": 600, // 从600改为600，保持不变
      "include-all": true,
      "filter": "(?i)新加坡|sg|SG|狮城|Singapore",
      "url": "https://www.gstatic.com/generate_204", // 使用更快的URL
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Singapore.png"
    },
    {
      ...groupBaseOption,
      "name": "韩国手动", // 修改为"韩国手动"
      "type": "select",
      "proxies": ["韩国自动", "韩国故转"],
      "include-all": true,
      "filter": "(?i)韩国|kr|KR|首尔|Seoul|Korea",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Korea.png"
    },
    {
      ...groupBaseOption,
      "name": "韩国自动", // 修改为"韩国自动"
      "type": "url-test",
      "interval": 600, // 从300改为600，减少测试频率
      "tolerance": 100, // 从50改为100，提高容忍度
      "lazy": false,
      "include-all": true,
      "filter": "(?i)韩国|kr|KR|首尔|Seoul|Korea",
      "url": "https://www.gstatic.com/generate_204", // 使用更快的URL
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Korea.png"
    },
    {
      ...groupBaseOption,
      "name": "韩国故转", // 修改为"韩国故转"
      "type": "fallback",
      "interval": 600, // 从600改为600，保持不变
      "include-all": true,
      "filter": "(?i)韩国|kr|KR|首尔|Seoul|Korea",
      "url": "https://www.gstatic.com/generate_204", // 使用更快的URL
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Korea.png"
    },
    {
      ...groupBaseOption,
      "name": "广告过滤",
      "type": "select",
      "proxies": ["REJECT", "DIRECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/bug.svg"
    },
    {
      ...groupBaseOption,
      "name": "全局直连",
      "type": "select",
      "proxies": ["DIRECT", "节点选择", "延迟选优"],
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Direct.png"
    },
    {
      ...groupBaseOption,
      "name": "全局拦截",
      "type": "select",
      "proxies": ["REJECT", "DIRECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/block.svg"
    },
    {
      ...groupBaseOption,
      "name": "漏网之鱼",
      "type": "select",
      "proxies": ["节点选择", "链式代理", "延迟选优","全局直连"],
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Final.png"
    },
    // 添加链式代理组（已隐藏）
    ...chainProxyGroups
  ];

  // 覆盖原配置中的规则
  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;
  
  // 添加判断
  if(config["proxies"]) {
    config["proxies"].forEach(proxy => {
      // 为每个节点设置 udp = true
      proxy.udp = true
    })
  }
  
  // 返回修改后的配置
  return config;
}
