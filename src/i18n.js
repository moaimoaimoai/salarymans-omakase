export const LANGS = [
    { code: "en", label: "EN" },
    { code: "ja", label: "日本語" },
    { code: "zh", label: "中文" },
    { code: "es", label: "ES" },
  ];
  
  export const STRINGS = {
    en: {
        // ===== Nav =====
        navQuiz: "Try Omakase",
        navPlans: "Plan examples",
        navHow: "How it works",
        navPricing: "Pricing",
        navStory: "Story",
      
        // ===== Hero =====
        heroKicker: "Tokyo • Izakaya • Omakase",
        heroCtaPrimary: "Try Omakase (free)",
        heroCtaSecondary: "See plan examples",
        heroCtaPrimaryMobile: "Try (free)",
        trust1: "Curated by salarymen",
        trust2: "Avoid tourist spots",
        trust3: "Reservation support",
        trust4: "English support",
        trust5: "Human-curated (no generative AI)",
      
        // ===== Quiz =====
        quizTitle: "Experience Omakase planning",
        quizSub: "Answer 5 questions to preview what our Omakase plan feels like.",
        showPlan: "See my Omakase",
        next: "Next",
        back: "Back",
        quizHookNote:
          "This is a free preview. To receive exact restaurant names and reservation support, start from “Request Omakase.”",
      
        // （任意：App.jsx が t.quizQ?.[id] を見に行くので、将来追加してもOK）
        // quizQ: { with: "...", vibe: "...", budget: "...", area: "...", must: "..." },
      
        // ===== Result =====
        resultTitle: "Sample Omakase plan based on your answers",
        resultWhyTitle: "Why our planner chose this plan",
        resultOpenFormAgain: "(If already paid) Open the request form again",
      
        // ===== Prefix / Plans =====
        prefixSectionTitle: "Plan examples",
        prefixNote:
          "These are samples. Exact restaurant names are shared only after you request Omakase.",
        sampleFlowTitle: "A night flow (example)",
        stopLabel: (n) => `Stop ${n}`,
        sampleStop1Head: "Stop 1",
        sampleStop1Sub: "Hidden yakitori + highball",
        sampleStop2Head: "Stop 2",
        sampleStop2Sub: "Sake + seasonal small plates",
        sampleStop3Head: "Stop 3",
        sampleStop3Sub: "Quiet bar to finish",
        requestOmakasePaid: "Request Omakase (paid)",
        paymentAfterSubmission:
          "Please submit your preferences first. After payment is confirmed, we will deliver your Omakase plan.",
      
        // ===== How it works =====
        howTitle: "How it works",
        howLead:
          "First, tell our Omakase planner what you want using the form. We’ll craft a plan based on your preferences. If you approve, we will handle reservations for you.",
        howStep1Title: "1) Tell us what you want",
        howStep1Text:
          "Fill the form with who you’re with, vibe, budget, dates, allergies, and must-haves.",
        howStep2Title: "2) Receive your Omakase plan",
        howStep2Text:
          "Our dedicated Omakase planner designs your night flow. Up to 3 rerolls (re-drafts) are included.",
        howStep3Title: "3) Reservation support",
        howStep3Text:
          "If the plan fits you, our planner will make reservations on your behalf.",
      
        howQuizCtaTitle: "Try Omakase (free)",
        howQuizCtaText: "In 30 seconds, preview our Omakase planning style.",
      
        howInstagramTitle: "Instagram",
        howInstagramText:
          "Official account: we share real plan examples and the vibe of Salaryman’s Omakase.",
        openInstagram: "Open Instagram",
        igFallback: "If it doesn’t load, open Instagram.",
      
        // ===== Story =====
        storyTitle: "Story",
        storyLead:
          "Three Tokyo salarymen who love great food and drinks. After years of after-work research, every place we Omakase is personally visited and selected by one of us. One promise: the best Izakaya Drinking Night at places tourists still haven’t found.",
        storyKicker1: "Why we started",
        storyHead1: "The truly great nights are known by locals.",
        storyBody1:
          "All three founders have lived abroad, so we have many international friends. When friends visit Japan and we take them to our regular izakaya, they’re genuinely thrilled. The best izakaya and bars live in introductions, regulars, and backstreets. We design your night like a trusted Tokyo friend — with taste and pacing.",
        storyKicker2: "How it works",
        storyHead2: "Omakase",
        storyBody2:
          "We build a night flow from your constraints, with up to 3 rerolls. Restaurant names are shared only after a paid request to protect quality and prevent crowds. We also help with reservations. Every place we recommend has been visited by one of the founders. And yes — we do not use AI.",
        storyPill1: "Curated by drink lovers",
        storyPill2: "Avoid tourist traps",
        storyPill3: "Reservation support",
        storyKicker3: "What you get",
        storyHead3: "Effortless — but memorable.",
        storyBody3:
          "The right pace, the right distance, the right quietness — planned by Tokyo-born drink lovers just for you.",
        storyCta1: "Try Omakase (free)",
        storyCta2: "See the vibe on Instagram",
      
        // ===== Founders =====
        foundersTitle: "Founders",
        foundersLead:
          "Born and raised in Tokyo. Three salarymen who can’t stop loving good drinks and good food.",
        role1: "Planning / Reservations",
        role2: "Brand / Taste",
        role3: "CEO / Strategy / Systems",
        bio1:
          "Canada-born, Japan-raised. Quietly obsessed with landing the one perfect place for the moment. Runs planning ops and reservations.",
        bio2:
          "Ad agency. Singapore-trained palate. Turns “good” into “How did we find this?” Designs the vibe and story.",
        bio3:
          "Global consulting. Builds the system that keeps quality high — and makes every plan feel personal.",
        tag1a: "Sake",
        tag1b: "Hidden gems",
        tag1c: "Planning",
        tag2a: "Bar hopping",
        tag2b: "Cocktails",
        tag2c: "Design sense",
        tag3a: "Yakitori",
        tag3b: "Whisky",
        tag3c: "Systems",
      
        promiseTitle: "Our promise",
        promiseBody:
          "We hide exact restaurant names until a paid request because we prioritize local restaurants first. Our goal is the best Drinking Night — including the atmosphere.",
      
        // ===== Pricing =====
        pricingTitle: "Pricing",
        pricingPrefixTitle: "Prefix (Preview)",
        pricingPrefixText:
          "Try a free preview on this page: only route and ‘Stop’ examples — no restaurant names.",
        pricingPrefixCta: "See plan examples",
        pricingOmakaseTitle: "Omakase",
        pricingOmakaseText:
          "$30 — includes Omakase drafting, up to 3 rerolls, and reservation support.",
        pricingOmakaseCta: "Request Omakase ($30)",
        pricingOmakaseNote:
          "Please submit your preferences first. After payment is confirmed, we will deliver your Omakase plan.",
        pricingGroupTitle: "Group",
        pricingGroupText:
          "6+ people (family, etc.) — contact us via DM for a quote.",
        pricingGroupCta: "DM on Instagram",
      
        // ===== Thanks page =====
        thanksTitle: "Payment confirmed",
        thanksSub:
          "Please fill in your constraints (dates, allergies, budget). We’ll send your first Omakase draft.",
        goToForm: "Open request form",
        backHome: "Back to top",
        thanksNoPaidWarning:
          "If you arrived here without payment, please go back and proceed from the Omakase button.",
      
        // ===== Footer =====
        disclaimer:
          "Disclaimer: We provide restaurant suggestions and reservation support where possible. We do not guarantee availability. This is not a travel agency service.",
        refundNote:
          "Refund/cancel: After we start drafting your Omakase plan, the planning fee is non-refundable.",
      
        // ===== Labels used in modal =====
        stepLabel: (n) => `STEP ${n}`,
        stopLabelInline: (n) => `Stop ${n}`,
        areaLabel: "Area",
        vibeLabel: "Vibe",
        igLatest: "Latest post / reel",
      },
  
    ja: {
      navQuiz: "Omakaseを体験する",
      navPlans: "プラン例",
      navHow: "利用の流れ",
      navPricing: "料金",
      navStory: "ストーリー",
  
      heroKicker: "Tokyo • Izakaya • Omakase",
      heroCtaPrimary: "無料Omakase体験",
      heroCtaSecondary: "プラン例を見る",
      heroCtaPrimaryMobile: "無料体験",
      trust1: "ビジネスマンによる厳選",
      trust2: "観光客向け店舗回避",
      trust3: "予約代行",
      trust4: "英語対応",
      trust5: "No AI",
  
      quizTitle: "Omakaseによるプランニングを体験してください",
      quizSub: "5問に答えるだけで、Omakaseによるプランニングのイメージを体験できます。",
      showPlan: "Omakaseを見る",
      next: "次へ",
      back: "戻る",
      quizHookNote:
        "こちらは体験用です。店名共有や予約支援まで含むサービスのご依頼は「Omakaseを依頼」から開始します。",
  
      resultTitle: "ご要望に沿うOmakaseプラン例",
      resultWhyTitle: "Omakaseプランナーがこのプランを選んだ理由",
      resultOpenFormAgain: "（支払い済みの方）依頼フォームを再度開く",
  
      prefixSectionTitle: "プラン例",
      prefixNote:
        "プラン例はサンプルです。実際の店名はOmakaseをご依頼いただいた後に共有します。",
      sampleFlowTitle: "一晩の流れ（例）",
      stopLabel: (n) => `Stop ${n}`,
      sampleStop1Head: "Stop 1",
      sampleStop1Sub: "焼き鳥＋ハイボール（隠れ家）",
      sampleStop2Head: "Stop 2",
      sampleStop2Sub: "日本酒＋季節のつまみ",
      sampleStop3Head: "Stop 3",
      sampleStop3Sub: "静かなバーで締め",
      requestOmakasePaid: "Omakaseを依頼（$30）",
      paymentAfterSubmission: "まずフォームにご希望を入力ください。決済完了後、Omakaseプランをご提供いたします。",
  
      howTitle: "利用の流れ",
      howLead:
        "まずはフォームを使ってOmakaseプランナーにご希望をお伝え下さい。プランナーがご希望に沿ったOmakaseを作成いたします。ご希望に適った場合はOmakaseプランナーが予約を代行いたします。",
      howStep1Title: "1) 希望を伝える",
      howStep1Text:
        "誰と行くか・雰囲気・予算・日程・アレルギー・必須条件などをフォームに入力いただき、Omakaseプランナーにご希望をお伝え下さい。",
      howStep2Title: "2) Omakaseプランのご提供",
      howStep2Text:
        "弊社の専属Omakaseプランナーが一晩の流れを設計してプランをご提案いたします。最大3回までリロール（作り直し）可能です。",
      howStep3Title: "3) 予約代行",
      howStep3Text:
        "プランがご希望に適った場合は、プランナーが予約まで実施いたします。",
      howQuizCtaTitle: "Omakaseを試す（無料）",
      howQuizCtaText:
        "30秒で弊社のOmakaseプランを体験できます。",
      howInstagramTitle: "Instagram",
      howInstagramText: "Salaryman's Omakaseの公式アカウントがプラン事例を発信しています！",
      openInstagram: "Instagramを見る",
      igFallback: "読み込めない場合はInstagramを開いてください。",
  
      storyTitle: "ストーリー",
      storyLead:
        "東京の酒好きグルメなサラリーマン3人が、本当に美味しい東京の飲み屋ナイトを海外の皆様にも体験いただきたく、仕事終わりの研究を積み重ねてきました。Omakaseする店舗はすべて3人のうち誰かが実際に足を運んで厳選しています。約束はひとつ：観光客がまだ見つけていないお店で、最高のIzakaya Drinking Nightを。",
      storyKicker1: "創業のきっかけ",
      storyHead1: "本当に良い夜は、ローカルが知っている",
      storyBody1:
        "創業メンバーの3名は皆日本国外で生活してきたため多くの海外の友人がいます。国外の友達が訪日したとき、ふと行きつけの居酒屋を紹介すると本当に喜ばれることに気づきました。最高の居酒屋やバーは、紹介・常連・路地裏にあります。信頼できる東京の友人のように、味とペースで夜を設計します。",
      storyKicker2: "仕組み",
      storyHead2: "Omakase",
      storyBody2:
        "条件をもとに一晩の流れを作り、最大3回までリロール。店名は有料依頼後に共有し、混雑や質の低下を防ぎます。また、予約も代行します。紹介するお店は、すべて創業メンバーが実際に足を運んでいます。もちろんAIは使いません。",
      storyPill1: "呑兵衛厳選",
      storyPill2: "観光客向け回避",
      storyPill3: "予約代行",
      storyKicker3: "ご提供する価値",
      storyHead3: "楽なのに、記憶に残る夜",
      storyBody3:
        "ちょうど良いペース、ちょうど良い距離感、ちょうど良い静けさを、東京育ちの飲兵衛があなたのためだけにプランニングします。",
      storyCta1: "Omakaseを体験する（無料）",
      storyCta2: "Instagramで雰囲気を見る",
  
      foundersTitle: "創業メンバー",
      foundersLead:
        "東京生まれ、東京育ち。お酒と美味しいものを愛してやまない東京のサラリーマンが創業しました。",
      role1: "プランニング / 予約",
      role2: "ブランド / 味",
      role3: "CEO / 戦略 / システム",
      bio1:
        "カナダ生まれ日本育ち。『その夜の正解の一軒』を静かに当てにいくタイプ。運用と予約を担当。",
      bio2:
        "広告代理店。シンガポール仕込みの感覚で“良い”を“刺さる”に変える。雰囲気の設計担当。",
      bio3:
        "外資コンサル。品質を落とさない仕組みを作り、毎回“あなた用”の夜に仕上げます。",
      tag1a: "日本酒",
      tag1b: "隠れ家",
      tag1c: "プランニング",
      tag2a: "はしご酒",
      tag2b: "カクテル",
      tag2c: "デザイン",
      tag3a: "焼き鳥",
      tag3b: "ウイスキー",
      tag3c: "IT屋",
  
      promiseTitle: "約束",
      promiseBody:
        "有料依頼まで店名を伏せるのは、地元のレストランを最優先に考えるからです。私たちは雰囲気まで含めた最高のDrinking Nightを提供します。",
  
      pricingTitle: "料金",
      pricingPrefixTitle: "Prefix（プレビュー）",
      pricingPrefixText:
        "このページ上で無料体験できます。ルートと“Stop”の例のみで、店名は出しません。",
      pricingPrefixCta: "Prefix例を見る",
      pricingOmakaseTitle: "Omakase",
      pricingOmakaseText: "$30 - Omakase作成＋最大3回リロールと予約代行を含みます",
      pricingOmakaseCta: "Omakaseを依頼（$30）",
      pricingOmakaseNote: "まずフォームにご希望を入力ください。決済完了後、Omakaseプランをご提供いたします。",
      pricingGroupTitle: "グループ",
      pricingGroupText: "6名以上（ご家族等）— DMにてご連絡ください。お見積りいたします。",
      pricingGroupCta: "InstagramでDM",
  
      thanksTitle: "お支払いを確認しました",
      thanksSub:
        "日程・アレルギー・予算など条件を入力してください。最初のOmakase案をお送りします。",
      goToForm: "Omakaseフォームを開く",
      backHome: "トップに戻る",
      thanksNoPaidWarning:
        "未決済でこの画面に来た場合は、元の画面に戻り Omakase ボタンから進んでください。",
  
      disclaimer:
        "免責：当サービスは飲食店の提案および可能な範囲での予約支援を行います。予約成功や空席を保証しません。旅行業（移動・宿泊手配等）ではありません。",
      refundNote:
        "返金/キャンセル：Omakaseプラン作成後返金は受け付けておりません。",
        stepLabel: (n) => `STEP ${n}`,
        stopLabelInline: (n) => `Stop ${n}`,
        areaLabel: "エリア",
        vibeLabel: "雰囲気",
        igLatest: "最新の投稿 / リール",
    },
  
    zh: {
        navQuiz: "体验 Omakase",
        navPlans: "方案示例",
        navHow: "使用流程",
        navPricing: "价格",
        navStory: "故事",
      
        heroKicker: "Tokyo • Izakaya • Omakase",
        heroCtaPrimary: "免费体验 Omakase",
        heroCtaSecondary: "查看方案示例",
        heroCtaPrimaryMobile: "免费体验",
        trust1: "上班族严选",
        trust2: "避开游客向店",
        trust3: "代订座位",
        trust4: "英语支持",
        trust5: "No AI",
      
        quizTitle: "体验 Omakase 式的行程规划",
        quizSub: "只需回答 5 个问题，即可体验 Omakase 规划的感觉。",
        showPlan: "查看 Omakase",
        next: "下一步",
        back: "返回",
        quizHookNote:
          "这是体验版。包含店名分享与订位支持的完整服务，请从「申请 Omakase」开始。",
      
        resultTitle: "符合你需求的 Omakase 方案示例",
        resultWhyTitle: "为什么 Omakase 规划师选择了这个方案",
        resultOpenFormAgain: "（已付款）再次打开申请表单",
      
        prefixSectionTitle: "方案示例",
        prefixNote:
          "方案示例仅供参考。实际店名会在你申请 Omakase 后提供。",
        sampleFlowTitle: "一晚流程（示例）",
        stopLabel: (n) => `Stop ${n}`,
        sampleStop1Head: "Stop 1",
        sampleStop1Sub: "烤鸡串＋高球（隐秘小店）",
        sampleStop2Head: "Stop 2",
        sampleStop2Sub: "清酒＋应季小食",
        sampleStop3Head: "Stop 3",
        sampleStop3Sub: "在安静的酒吧收尾",
        requestOmakasePaid: "申请 Omakase（$30）",
        paymentAfterSubmission:
          "请先在表单中填写你的需求。付款确认后，我们将提供 Omakase 方案。",
      
        howTitle: "使用流程",
        howLead:
          "请先通过表单把你的需求告诉 Omakase 规划师。规划师会根据你的偏好制作 Omakase 方案；若你确认满意，我们将代你完成订位。",
        howStep1Title: "1) 告诉我们你的偏好",
        howStep1Text:
          "请在表单中填写同行人、氛围、预算、日期、过敏信息、必选条件等，并告知 Omakase 规划师。",
        howStep2Title: "2) 提供 Omakase 方案",
        howStep2Text:
          "我们的专属 Omakase 规划师会设计整晚动线并给出方案。最多可 reroll（重做）3 次。",
        howStep3Title: "3) 代订座位",
        howStep3Text:
          "若方案符合你的期待，规划师将协助并代你完成订位。",
        howQuizCtaTitle: "先试试 Omakase（免费）",
        howQuizCtaText:
          "30 秒体验我们 Omakase 规划的风格。",
        howInstagramTitle: "Instagram",
        howInstagramText: "Salaryman's Omakase 官方账号会发布方案案例！",
        openInstagram: "查看 Instagram",
        igFallback: "若无法加载，请直接打开 Instagram。",
      
        storyTitle: "故事",
        storyLead:
          "三位热爱美食与美酒的东京上班族。我们下班后持续“研究”多年，每一家被 Omakase 推荐的店，都由三人之一亲自探访并筛选。我们只有一个承诺：在游客还没发现的地方，带你体验最棒的居酒屋之夜。",
        storyKicker1: "起点",
        storyHead1: "真正精彩的夜晚，只有本地人知道。",
        storyBody1:
          "三位创始人都曾在海外生活，因此有很多国际朋友。朋友来日本时，我们带他们去自己的常去居酒屋，大家总是兴奋到不行。最好的居酒屋和酒吧，藏在介绍、熟客和小巷里。我们会像你在东京最可靠的朋友一样，用品味和节奏为你设计一晚。",
        storyKicker2: "方式",
        storyHead2: "Omakase",
        storyBody2:
          "基于你的条件，我们设计整晚动线，并提供最多3次重做（reroll）。为避免拥挤与品质下降，具体店名仅在付费后提供；我们也会在可行范围内协助预约。我们推荐的每一家店，都由创始人亲自到访。并且——我们不使用 AI。",
        storyPill1: "爱酒之人严选",
        storyPill2: "避开游客陷阱",
        storyPill3: "预约协助",
        storyKicker3: "你获得的价值",
        storyHead3: "轻松，却让人难忘。",
        storyBody3:
          "刚好的节奏、刚好的距离、刚好的安静——由东京长大的爱酒之人为你量身规划。",
        storyCta1: "免费体验 Omakase",
        storyCta2: "去 Instagram 看氛围",
      
        foundersTitle: "创始成员",
        foundersLead:
          "出生于东京、成长于东京。三位深爱美食与美酒的东京上班族创立了本服务。",
        role1: "规划 / 订位",
        role2: "品牌 / 品味",
        role3: "CEO / 战略 / 系统",
        bio1:
          "加拿大出生、日本长大。擅长安静地命中“当晚最正确的一家”。负责运营与订位。",
        bio2:
          "广告公司背景。新加坡磨出来的感觉，把“不错”变成“很上头”。负责氛围设计。",
        bio3:
          "外资咨询。打造不降质的机制，每次都把夜晚做成“为你而设”。",
        tag1a: "清酒",
        tag1b: "隐藏小店",
        tag1c: "规划",
        tag2a: "串店巡游",
        tag2b: "鸡尾酒",
        tag2c: "设计感",
        tag3a: "烤鸡串",
        tag3b: "威士忌",
        tag3c: "IT",
      
        promiseTitle: "承诺",
        promiseBody:
          "在付费申请前隐藏店名，是因为我们优先考虑当地餐厅与可订性。我们提供的是包含氛围在内的最佳 Drinking Night。",
      
        pricingTitle: "价格",
        pricingPrefixTitle: "Prefix（预览）",
        pricingPrefixText:
          "可在此页面免费体验：仅提供路线与“Stop”示例，不显示店名。",
        pricingPrefixCta: "查看 Prefix 示例",
        pricingOmakaseTitle: "Omakase",
        pricingOmakaseText: "$30 - 包含 Omakase 方案制作＋最多 3 次 reroll 与代订座位",
        pricingOmakaseCta: "申请 Omakase（$30）",
        pricingOmakaseNote:
          "请先填写表单需求。付款确认后，我们将提供 Omakase 方案。",
        pricingGroupTitle: "团体",
        pricingGroupText: "6 人以上（家庭等）— 请通过 DM 联系，我们将报价。",
        pricingGroupCta: "在 Instagram 私信",
      
        thanksTitle: "已确认付款",
        thanksSub:
          "请填写日期、过敏信息、预算等条件。我们将发送第一版 Omakase 方案。",
        goToForm: "打开 Omakase 表单",
        backHome: "返回顶部",
        thanksNoPaidWarning:
          "若未付款却进入此页面，请返回上一页并从 Omakase 按钮继续。",
      
        disclaimer:
          "免责声明：本服务提供餐厅建议及在可能范围内的订位支持。不保证订位成功或有空位。本服务不属于旅行社业务（不含交通/住宿安排等）。",
        refundNote:
          "退款/取消：Omakase 方案制作完成后，恕不接受退款。",
      
        stepLabel: (n) => `STEP ${n}`,
        stopLabelInline: (n) => `Stop ${n}`,
        areaLabel: "区域",
        vibeLabel: "氛围",
        igLatest: "最新帖子 / Reels",
      },
      es: {
        navQuiz: "Probar Omakase",
        navPlans: "Ejemplos de planes",
        navHow: "Cómo funciona",
        navPricing: "Precios",
        navStory: "Historia",
      
        heroKicker: "Tokyo • Izakaya • Omakase",
        heroCtaPrimary: "Probar Omakase gratis",
        heroCtaSecondary: "Ver ejemplos de planes",
        heroCtaPrimaryMobile: "Probar gratis",
        trust1: "Seleccionado por salarymen",
        trust2: "Evita lugares turísticos",
        trust3: "Gestión de reservas",
        trust4: "Atención en inglés",
        trust5: "No AI",
      
        quizTitle: "Experimenta la planificación Omakase",
        quizSub: "Responde 5 preguntas y descubre cómo se siente un plan Omakase.",
        showPlan: "Ver mi Omakase",
        next: "Siguiente",
        back: "Atrás",
        quizHookNote:
          "Esta es una versión de prueba. Para recibir nombres exactos y apoyo en reservas, inicia desde “Solicitar Omakase”.",
      
        resultTitle: "Ejemplo de plan Omakase según tus preferencias",
        resultWhyTitle: "Por qué el planificador eligió este plan",
        resultOpenFormAgain: "(Si ya pagaste) Abrir nuevamente el formulario",
      
        prefixSectionTitle: "Ejemplos de planes",
        prefixNote:
          "Estos son ejemplos. Los nombres reales de los restaurantes se comparten después de solicitar Omakase.",
        sampleFlowTitle: "Flujo de una noche (ejemplo)",
        stopLabel: (n) => `Stop ${n}`,
        sampleStop1Head: "Stop 1",
        sampleStop1Sub: "Yakitori + highball (lugar escondido)",
        sampleStop2Head: "Stop 2",
        sampleStop2Sub: "Sake + platos de temporada",
        sampleStop3Head: "Stop 3",
        sampleStop3Sub: "Final en un bar tranquilo",
        requestOmakasePaid: "Solicitar Omakase ($30)",
        paymentAfterSubmission:
          "Primero completa el formulario con tus preferencias. Tras confirmar el pago, entregaremos tu plan Omakase.",
      
        howTitle: "Cómo funciona",
        howLead:
          "Primero comparte tus preferencias con el planificador Omakase a través del formulario. El planificador creará tu plan según tus deseos. Si lo apruebas, gestionaremos las reservas por ti.",
        howStep1Title: "1) Comparte tus preferencias",
        howStep1Text:
          "Indica con quién vas, el ambiente, presupuesto, fechas, alergias y condiciones imprescindibles en el formulario.",
        howStep2Title: "2) Recibe tu plan Omakase",
        howStep2Text:
          "Nuestro planificador dedicado diseñará el flujo completo de la noche. Incluye hasta 3 rerolls (revisiones).",
        howStep3Title: "3) Gestión de reservas",
        howStep3Text:
          "Si el plan encaja contigo, el planificador realizará las reservas por ti.",
        howQuizCtaTitle: "Probar Omakase (gratis)",
        howQuizCtaText:
          "Descubre en 30 segundos cómo planificamos tu noche.",
        howInstagramTitle: "Instagram",
        howInstagramText:
          "La cuenta oficial de Salaryman's Omakase comparte ejemplos reales de planes.",
        openInstagram: "Abrir Instagram",
        igFallback: "Si no se carga, abre Instagram directamente.",
      
        storyTitle: "Historia",
        storyLead:
          "Tres salarymen de Tokio que aman la buena comida y la buena bebida. Tras años de “investigación” después del trabajo, cada lugar que Omakase recomendamos ha sido visitado y seleccionado personalmente por uno de nosotros. Una promesa: la mejor Izakaya Drinking Night en sitios que los turistas aún no han descubierto.",
        storyKicker1: "Por qué empezamos",
        storyHead1: "Las noches realmente buenas las conocen los locales.",
        storyBody1:
          "Los tres fundadores hemos vivido en el extranjero, así que tenemos muchos amigos internacionales. Cuando visitan Japón y los llevamos a nuestro izakaya de confianza, se entusiasman de verdad. Los mejores izakaya y bares viven en recomendaciones, clientes habituales y callejones. Diseñamos tu noche como un amigo de Tokio en quien confías — con gusto y buen ritmo.",
        storyKicker2: "Cómo lo hacemos",
        storyHead2: "Omakase",
        storyBody2:
          "Con tus condiciones, diseñamos el flujo de la noche y permitimos hasta 3 rerolls. Para proteger la calidad y evitar multitudes, los nombres exactos se comparten solo después de una solicitud pagada. También ayudamos con reservas cuando es posible. Cada lugar recomendado ha sido visitado por un fundador. Y sí — no usamos IA.",
        storyPill1: "Curado por amantes del trago",
        storyPill2: "Sin trampas turísticas",
        storyPill3: "Ayuda con reservas",
        storyKicker3: "Lo que obtienes",
        storyHead3: "Fácil — pero inolvidable.",
        storyBody3:
          "El ritmo perfecto, la distancia justa, la tranquilidad adecuada — planificado solo para ti por amantes del trago nacidos en Tokio.",
        storyCta1: "Probar Omakase (gratis)",
        storyCta2: "Ver la vibra en Instagram",
      
        foundersTitle: "Fundadores",
        foundersLead:
          "Nacidos y criados en Tokio. Tres salarymen que aman profundamente el buen sake y la buena comida.",
        role1: "Planificación / Reservas",
        role2: "Marca / Gusto",
        role3: "CEO / Estrategia / Sistemas",
        bio1:
          "Nacido en Canadá y criado en Japón. Especialista en acertar con el lugar perfecto para la noche. Responsable de operaciones y reservas.",
        bio2:
          "Publicidad. Con sensibilidad formada en Singapur, convierte lo “bueno” en algo inolvidable. Diseña la atmósfera.",
        bio3:
          "Consultoría internacional. Crea sistemas que mantienen la calidad alta y hacen que cada noche se sienta personalizada.",
        tag1a: "Sake",
        tag1b: "Lugares escondidos",
        tag1c: "Planificación",
        tag2a: "Bar hopping",
        tag2b: "Cócteles",
        tag2c: "Diseño",
        tag3a: "Yakitori",
        tag3b: "Whisky",
        tag3c: "IT",
      
        promiseTitle: "Nuestra promesa",
        promiseBody:
          "Ocultamos los nombres exactos hasta la solicitud pagada porque priorizamos a los restaurantes locales y la calidad de la experiencia. Ofrecemos la mejor Drinking Night, incluida la atmósfera.",
      
        pricingTitle: "Precios",
        pricingPrefixTitle: "Prefix (Vista previa)",
        pricingPrefixText:
          "Puedes probar gratis en esta página. Solo mostramos la ruta y ejemplos de “Stop”, sin revelar nombres de restaurantes.",
        pricingPrefixCta: "Ver ejemplos Prefix",
        pricingOmakaseTitle: "Omakase",
        pricingOmakaseText:
          "$30 - Incluye creación del plan Omakase + hasta 3 rerolls y gestión de reservas",
        pricingOmakaseCta: "Solicitar Omakase ($30)",
        pricingOmakaseNote:
          "Primero completa el formulario. Tras confirmar el pago, entregaremos tu plan Omakase.",
        pricingGroupTitle: "Grupo",
        pricingGroupText:
          "6 personas o más (familia, etc.) — Contáctanos por DM para cotización.",
        pricingGroupCta: "Enviar DM en Instagram",
      
        thanksTitle: "Pago confirmado",
        thanksSub:
          "Por favor, introduce fechas, alergias y presupuesto. Te enviaremos el primer borrador de tu plan Omakase.",
        goToForm: "Abrir formulario Omakase",
        backHome: "Volver al inicio",
        thanksNoPaidWarning:
          "Si llegaste aquí sin pagar, vuelve atrás y continúa desde el botón Omakase.",
      
        disclaimer:
          "Aviso: Ofrecemos sugerencias de restaurantes y apoyo en reservas cuando sea posible. No garantizamos disponibilidad ni confirmación. No somos una agencia de viajes (no gestionamos transporte o alojamiento).",
        refundNote:
          "Reembolso/cancelación: Una vez creado el plan Omakase, no se aceptan reembolsos.",
      
        stepLabel: (n) => `STEP ${n}`,
        stopLabelInline: (n) => `Stop ${n}`,
        areaLabel: "Zona",
        vibeLabel: "Ambiente",
        igLatest: "Última publicación / Reel",
      },
  };