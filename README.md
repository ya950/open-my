---

⚡ Clash 代理组逻辑说明

Clash 支持三种常用代理组类型：Fallback、URL-Test 和 Load-Balance。下面是三种代理组的逻辑流程和健康检查策略。


---

📝 综合流程图

flowchart TD
    Start[开始]
    Nodes[获取节点列表 [A, B, C]]
    Start --> Nodes

    Nodes --> Fallback[Fallback]
    Nodes --> URLTest[URL-Test]
    Nodes --> LoadBalance[Load-Balance]

    %% Fallback 逻辑
    Fallback --> FCheck[健康检查A]
    FCheck -->|可用| F_A[使用节点A]
    FCheck -->|不可用| F_B[选择节点B]
    F_B --> FCheck_B[健康检查B]
    FCheck_B -->|可用| F_B_A[使用节点B]
    FCheck_B -->|不可用| F_C[选择节点C]
    F_C --> FCheck_C[健康检查C]
    FCheck_C -->|可用| F_C_A[使用节点C]
    
    %% URL-Test 逻辑
    URLTest --> URLCheck[测试每个节点延迟]
    URLCheck --> URLMin[选择延迟最低节点]

    %% Load-Balance 逻辑
    LoadBalance --> LBDistribute[按权重/轮询分配流量]
    LBDistribute --> LBCheck[检测节点健康]
    LBCheck -->|可用| LB_Continue[继续使用当前节点]
    LBCheck -->|不可用| LB_Fail[失效节点，流量重分配]

    %% 定期检测主节点A恢复
    Fallback --> FRestore[定期检测主节点A恢复]
    FRestore -->|恢复| FRestore_A[切回主节点A]
    FRestore -->|未恢复| FRestore_No[继续使用备用节点]

📊 代理组说明

类型	节点选择策略	优先级	主要用途

Fallback	按顺序回退	主节点优先	稳定性
URL-Test	定期测试延迟	动态选择	速度优先
Load-Balance	按权重/轮询分配流量	平均分配	流量均衡



---

🔍 详细说明

Fallback

主节点优先，备用节点按顺序回退。

当前节点不可用时切换到下一个节点。

主节点恢复后自动切回。


URL-Test

定期访问指定 URL 检测延迟。

选择延迟最低节点作为当前出口。

动态调整，速度优先。


Load-Balance

按权重或轮询方式分配流量。

多节点同时使用，保证负载均衡。

健康检查失效节点后重新分配流量。


三种代理组都会进行健康检查，但策略不同：

Fallback：稳定性优先

URL-Test：速度优先

Load-Balance：均衡分配




---
