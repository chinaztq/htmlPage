// TexTale 优化项目数据
// 整合自 Word 深度诊断报告 + 第一轮分析报告
const MODULES = [
  {
    id: 1, name: "视觉风格 & 品牌质感", icon: "🎨",
    items: [
      { p: "P2", title: "为每个产品线命名增加直白功能副标题", desc: "_FRESH — Stain & Rain Repellent，_BREEZ — Anti-Odor & Breathable，_COZY — Thermal & Soft，降低用户理解门槛" },
      { p: "P2", title: "About / Footer 增加官方品牌描述", desc: "在 About / Footer 区域增加 'textale.tech — Premium Performance Apparel' 描述，消除 .tech 域名的认知摩擦" },
      { p: "P3", title: "UGC 图片标注买家/达人身份", desc: "Instagram 买家秀每张图注明 'Verified Buyer' 或 'Brand Ambassador'，增强真实感" },
    ]
  },
  {
    id: 2, name: "顶部导航栏 & 分类结构", icon: "🧭",
    items: [
      { p: "P2", title: "Shop 改为 Mega Menu", desc: "展示品类（Tees/Polos/Hoodies/Underwear/Bottoms）+ 系列（_FRESH/_BREEZ/_COZY）+ 精选入口（Best Sellers/New In），参考 Tommy John" },
      { p: "P2", title: "增加 Best Sellers 独立导航项", desc: "男性用户决策偏理性，畅销榜是重要锚点" },
      { p: "P2", title: "公告栏增加轮播信息", desc: "🔥 Up to 50% Off · 🌿 OEKO-TEX Certified · ⭐ 50K+ 5-Star Reviews · 🚚 Free Shipping $99+" },
      { p: "P3", title: "增加 Shop by Activity 场景分类", desc: "Office / Travel / Gym / Casual，将产品功能与男性生活场景绑定（参考 Mack Weldon）" },
    ]
  },
  {
    id: 3, name: "首页布局 & 流量承接", icon: "🏠",
    items: [
      { p: "P2", title: "信任图标区上移至 Hero 下方", desc: "OEKO-TEX 和 B Corp 认证 Logo 要在第一屏展示，这是最有力的差异化背书" },
      { p: "P2", title: "首页增加邮件订阅 Section", desc: "'Join the TexTale Lab — Get $15 OFF Your First Order + Early Access to New Tech Drops'，与品牌科技调性一致" },
      { p: "P2", title: "首页展示购物车阶梯奖励机制", desc: "Spend $99 → Free Shipping / $150 → Free Trunk / $175 → Free Tee，以 Infographic 形式吸引用户主动凑单" },
      { p: "P2", title: "技术说明通俗化对比", desc: "_FRESH — 'Think of it as a raincoat built into your T-shirt'，用生活类比代替专业术语" },
      { p: "P3", title: "增加 Life in TexTale 生活方式 Section", desc: "展示真实穿搭场景（出差机场/咖啡馆办公/健身房），建立身份认同（参考 Cuts）" },
    ]
  },
  {
    id: 4, name: "商品列表页 / 分类页", icon: "📋",
    items: [
      { p: "P2", title: "畅销款增加视觉标签", desc: "主力商品卡增加 🏆 Best Seller / ⚡ New / 🔥 Top Rated 标签，视觉引导用户注意力" },
      { p: "P2", title: "商品卡 Hover 切换效果图", desc: "正面+侧面或穿搭细节图，减少点击 PDP 的必要性（参考 Cuts）" },
      { p: "P2", title: "增加 Shop by Function 筛选", desc: "Stain-Repel / Rain-Repel / Anti-Odor / Thermal / Sustainable，按面料功能筛选" },
      { p: "P2", title: "商品卡显示评分和评价数", desc: "⭐ 4.9 (1,374)，社会证明越早出现转化率越高（参考 Tommy John）" },
      { p: "P3", title: "新用户引导模块 Build Your Kit", desc: "推荐入门组合（1 Tee + 1 Polo + 1 Trunk），降低选择困难" },
    ]
  },
  {
    id: 5, name: "商品详情页 (PDP)", icon: "🛍️",
    items: [
      { p: "P1", title: "确认 Guest Checkout 通道开启", desc: "Shopify 后台确认非强制注册，避免最常见弃单原因" },
      { p: "P2", title: "PDP 增加模特数据标注", desc: "'Model is 6'0\", 175 lbs, wearing size M'，让用户真实参考（参考 Mack Weldon）" },
      { p: "P2", title: "技术卖点用量化数据替代形容词", desc: "'Blocks 99% of stains in lab tests' / 'Dries 3x faster than cotton' / 'Odor-free for 72+ hours'" },
      { p: "P2", title: "CTA 按钮下增加保障承诺", desc: "'✅ 30-Day Free Returns — If it's not perfect, we'll make it right'（参考 Tommy John）" },
      { p: "P2", title: "增加 Complete the Kit 关联推荐", desc: "买 Tee 推荐同系列 Polo + Trunk，主动推动购物车阶梯奖励的实现" },
      { p: "P3", title: "增加 Fit Comparison 模块", desc: "同款产品 Relaxed vs Standard 版型对比上身图，降低退货率（参考 Cuts）" },
    ]
  },
  {
    id: 6, name: "促销活动 & 营销玩法", icon: "🎁",
    items: [
      { p: "P2", title: "购物车阶梯赠品机制前置展示", desc: "首页、PDP、列表页均加入 '🎁 Spend $150 → Get a Free Trunk' 视觉提示" },
      { p: "P2", title: "建立 Bundle Builder 套装页面", desc: "Office Kit — 2 Polos + 1 Tee + 1 Trunk，场景化套购提升 AOV（参考 Cuts）" },
      { p: "P2", title: "减少全站 50% 折扣频次", desc: "改为限时 Flash Sale（48 小时倒计时）保护品牌溢价；日常 20-30%，大促节点 50%" },
      { p: "P3", title: "激活 TexTale Club 会员积分", desc: "消费 $1=1点，100点兑换 $5 + 免费加急运费 + 生日礼物（参考 Mack Weldon Ace Club）" },
    ]
  },
  {
    id: 7, name: "弹窗营销 & 关联推荐", icon: "💬",
    items: [
      { p: "P2", title: "部署进站邮件订阅弹窗", desc: "进站 20-30 秒触发：'Join the TexTale Lab — $15 OFF Your First Order + Early Access to New Tech Drops'" },
      { p: "P2", title: "部署 Exit Intent 离站挽留弹窗", desc: "限时优惠码 STAY15：'Before You Go — Your First Stain-Proof Tee is $15 Cheaper Right Now'" },
      { p: "P2", title: "购物车侧栏 Complete Your Kit 推荐", desc: "主动展示凑单阶梯赠品进度：'Add $31 more for a FREE Trunk'" },
      { p: "P3", title: "增加 SMS 短信订阅入口", desc: "'Text TEXTALE to 56789'，双渠道（Email + SMS）建立私域流量池（参考 Cuts）" },
    ]
  },
  {
    id: 8, name: "购物车页面 & 流失痛点", icon: "🛒",
    items: [
      { p: "P2", title: "确认购物车为 Slide-out 侧边栏", desc: "而非跳转页面，减少加购后的流程中断" },
      { p: "P2", title: "增加 Klarna / Afterpay 分期支付", desc: "$150+ 客单价下分期支付降低价格阻力，提升完单率" },
      { p: "P2", title: "购物车底部增加信任图标组合", desc: "🔒 Secure Checkout · 🌿 OEKO-TEX Certified · 🔄 30-Day Free Returns" },
      { p: "P2", title: "考虑下调免运费门槛", desc: "从 $99 降至 $79，与竞品（Tommy John $75）差距缩小，减少门槛流失" },
    ]
  },
  {
    id: 9, name: "结账流程 & 弃单问题", icon: "💳",
    items: [
      { p: "P1", title: "确认 Shopify Guest Checkout 已开启", desc: "不强制注册账户，避免最常见弃单原因" },
      { p: "P2", title: "设置弃单邮件三封自动化序列", desc: "1小时提醒（产品图）/ 24小时（5% 优惠码）/ 72小时（10% 优惠码），ROI 最高的自动化动作" },
      { p: "P2", title: "结账页顶部保留阶梯赠品进度", desc: "'You're $25 away from a FREE Stain-Repel Tee!'，防止结账页面后悔" },
      { p: "P2", title: "结账页底部展示信任组合", desc: "30-Day Free Returns + OEKO-TEX Certified + 50K+ 5-Star Reviews" },
    ]
  },
  {
    id: 10, name: "移动端适配 & 触控体验", icon: "📱",
    items: [
      { p: "P2", title: "移动端视频不自动播放", desc: "用户点击后播放，减少移动端 LCP 压力（目标 Mobile LCP ≤ 2.5s）" },
      { p: "P2", title: "PDP 底部固定悬浮 Add to Cart", desc: "任何滚动位置均可一键加购（参考 Tommy John）" },
      { p: "P2", title: "移动端商品图支持双指缩放", desc: "面料细节/防污涂层等技术卖点需要用户能放大查看" },
      { p: "P2", title: "购物车进度条移动端优化", desc: "单行进度条 + 当前目标提示（'$31 to Free Trunk →'），而非展示全部4个档位" },
    ]
  },
  {
    id: 11, name: "页面性能", icon: "⚡",
    items: [
      { p: "P2", title: "PageSpeed Insights 检测首页", desc: "目标 Mobile LCP ≤ 2.5s，重点排查视频和 Instagram 图片加载" },
      { p: "P2", title: "UGC 图片统一托管至 Shopify CDN", desc: "而非外链 Instagram，消除外部资源加载延迟" },
      { p: "P3", title: "精简未使用的 Shopify App 脚本", desc: "每个冗余 App 平均增加 100-300ms 加载时间" },
    ]
  },
  {
    id: 12, name: "用户信任背书体系", icon: "🛡️",
    items: [
      { p: "P2", title: "认证 Logo 上移至首屏", desc: "OEKO-TEX + B Corp Logo 上移至 Hero Banner 下方 + PDP 加购按钮附近" },
      { p: "P2", title: "增加 As Seen In 媒体背书模块", desc: "主动联系 GQ / Men's Health / Esquire / Business Insider；短期可先联系中腰部 YouTuber/博主" },
      { p: "P2", title: "升级品牌级质保承诺", desc: "'TexTale Guarantee — Stain-proof for 1 year or we replace it free'，比认证 Logo 转化力更强（参考 Tommy John）" },
      { p: "P3", title: "拍摄工厂 / 实验室实拍视频", desc: "将'30年工艺'和'高科技面料'可视化，嵌入 Fabric Lab 和 About 页面" },
    ]
  },
  {
    id: 13, name: "FAQ / 客服 / 售后政策", icon: "💁",
    items: [
      { p: "P2", title: "建立独立 FAQ 导航级页面", desc: "覆盖：尺码选择 / 面料洗涤 / 防污失效处理 / 发货时效 / 退换货 / 关税说明" },
      { p: "P2", title: "PDP 加购按钮旁展示退货政策", desc: "明确显示 '30-Day Free Returns'，全流程重复承诺（参考 Tommy John）" },
      { p: "P3", title: "设计 Fabric Care Guide 页面", desc: "告诉用户如何正确洗涤维护防污/防水功能，降低退货率" },
    ]
  },
  {
    id: 14, name: "多语言 / 多货币 / 本土化", icon: "🌍",
    items: [
      { p: "P3", title: "GDPR Cookie Consent 合规", desc: "若有欧洲流量，确认 Cookie 弹窗合规部署" },
      { p: "P3", title: "_PLANET 系列建立欧洲专属 LP", desc: "强化可持续材料背书（Recycled Fibers / Carbon Neutral），欧洲男性消费者高度敏感" },
    ]
  },
  {
    id: 15, name: "SEO 基础布局", icon: "🔍",
    items: [
      { p: "P2", title: "建立 Evergreen 内容矩阵", desc: "目标关键词：best stain-proof t-shirt for men / anti-odor polo shirt / sustainable men's basics 2026，每月2篇" },
      { p: "P2", title: "分类页增加 SEO 描述文案", desc: "Collections（Tees/Polos/Underwear）增加 100-150 字含核心关键词描述，最容易获取的 SEO 增量" },
      { p: "P2", title: "PDP Title Tag 标准化", desc: "格式：[Product Name] — Stain-Repel Men's [Category] | TexTale，含核心功能词" },
      { p: "P3", title: "注册 textale.com 并 301 重定向", desc: "长期 SEO 权重和品牌信任度双提升" },
    ]
  },
  {
    id: 16, name: "履约 & 物流（来自用户评价）", icon: "📦",
    items: [
      { p: "P1", title: "物流时效透明化", desc: "Thingtesting 评价频繁投诉中国直发 18 天-1 个月。主页 Header 明示 'Ships from US warehouse in 3-5 days'，做不到则坦白说明 + 价格优势对冲" },
      { p: "P1", title: "重写退货政策", desc: "取消或重命名 30% handling fee（评价中 $103 退 $73 是核心投诉），改为 Easy Exchange 免费换货" },
      { p: "P1", title: "包装可持续化", desc: "取消塑料外袋 + 纸筒 + 内塑料袋层层包装，单一 FSC 认证可回收纸盒 + 大豆油墨。否则 Sustainable 叙事自相矛盾" },
      { p: "P2", title: "停止发货前求好评邮件", desc: "评价反馈：发货前一周就发求好评邮件，严重伤害信任" },
    ]
  },
];

// 优先级说明
const PRIORITY_INFO = {
  P1: { label: "P1 紧急", color: "#ef4444", desc: "信任与履约硬伤，必须立即修复" },
  P2: { label: "P2 重要", color: "#f59e0b", desc: "影响转化和 AOV 的核心优化" },
  P3: { label: "P3 优化", color: "#10b981", desc: "长期增长与品牌资产" },
};
