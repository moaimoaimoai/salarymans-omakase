export const LANGS = [
    { code: "en", label: "EN" },
    { code: "ja", label: "日本語" },
    { code: "zh", label: "中文" },
    { code: "es", label: "ES" },
  ];
  
  export const STRINGS = {
    en: {
      // ===== Nav =====
      navQuiz: "Quiz",
      navPlans: "Prefix",
      navHow: "How it works",
      navPricing: "Pricing",
      navStory: "Story",
  
      // ===== Hero =====
      heroKicker: "Tokyo • Izakaya • Omakase",
      heroCtaPrimary: "Take the 30-second quiz",
      heroCtaSecondary: "See Prefix examples",
      heroCtaPrimaryMobile: "Start quiz",
      trust1: "Local-curated",
      trust2: "No tourist traps",
      trust3: "Reservation support",
      trust4: "English-friendly",
  
      // ===== Quiz =====
      quizTitle: "Find your perfect Tokyo night",
      quizSub: "Answer 5 quick questions. Get an instant Prefix recommendation.",
      showPlan: "Show my plan",
      next: "Next",
      back: "Back",
      quizHookNote:
        "The quiz is a free taste of our curation. For exact places + booking help, request Omakase.",
  
      // ===== Result =====
      resultTitle: "Your recommended night",
      resultWhyTitle: "Why it fits",
      resultCopySummary: "Copy summary (paste into form if needed)",
      resultOpenFormAgain: "(If already paid) Open the form again (prefilled)",
  
      // ===== Prefix / Plans =====
      prefixSectionTitle: "Prefix plans (examples)",
      prefixNote:
        "Prefix is a preview. Exact restaurant names are shared after paid request to protect quality.",
      sampleFlowTitle: "A sample night flow",
      stopLabel: (n) => `Stop ${n}`,
      sampleStop1Head: "Stop 1",
      sampleStop1Sub: "Hidden yakitori & highball",
      sampleStop2Head: "Stop 2",
      sampleStop2Sub: "Sake + seasonal plates",
      sampleStop3Head: "Stop 3",
      sampleStop3Sub: "Late-night bar (quiet finish)",
      requestOmakasePaid: "Request Omakase (paid)",
      paymentAfterSubmission: "Submit the form first — payment link appears after submission.",
  
      // ===== How it works (re-framed) =====
      howTitle: "How it works",
      howLead:
        "The quiz is a hook. The real service starts when you tell us what you want — then we Omakase, then we help reserve.",
      howStep1Title: "1) Share preferences",
      howStep1Text:
        "Tell us who you’re with, vibe, budget, dates, allergies, and must-haves.",
      howStep2Title: "2) Omakase drafting",
      howStep2Text:
        "We craft a clean night flow. Up to 3 rerolls included to get it just right.",
      howStep3Title: "3) Reservation support",
      howStep3Text:
        "Once you approve, we attempt reservations where possible and suggest alternatives if needed.",
      howQuizCtaTitle: "Try the quiz (free)",
      howQuizCtaText:
        "A 30-second preview of our taste — instant Prefix recommendation.",
      howInstagramTitle: "Instagram",
      howInstagramText: "Social proof + vibe. Huge for conversion.",
      openInstagram: "Open Instagram",
      igFallback: "If it doesn’t load, open Instagram.",
  
      // ===== Story =====
      storyTitle: "Our Story",
      storyLead:
        "Three Tokyo salarymen. Years of after-work research. A quiet promise: no tourist traps, no guessing — just the right night.",
      storyKicker1: "Why we exist",
      storyHead1: "Tokyo’s best nights are hidden — and they’re not on Google.",
      storyBody1:
        "The truly great izakaya and bars live in introductions, regulars, and quiet streets. We built a service that feels like a trusted friend in Tokyo — with taste.",
      storyKicker2: "How it works",
      storyHead2: "Omakase planning, with guardrails.",
      storyBody2:
        "You tell us your constraints. We draft a night flow and reroll up to 3 times until it feels perfect. Exact restaurant names are protected until paid request to preserve quality and availability.",
      storyPill1: "Curated by locals",
      storyPill2: "No tourist traps",
      storyPill3: "Reservation support",
      storyKicker3: "What you get",
      storyHead3: "A night that feels effortless.",
      storyBody3:
        "A clean plan. The right pacing. Places where conversation lands softly. If Tokyo is overwhelming, we narrow it down to what matters — and make the night yours.",
      storyCta1: "Start the quiz",
      storyCta2: "See the vibe on Instagram",
  
      // ===== Founders =====
      foundersTitle: "Founders",
      foundersLead:
        "We’re not a tour company. We’re three friends who care about taste, pace, and the kind of night you’ll remember.",
      role1: "Planner / Reservations",
      role2: "Brand / Taste",
      role3: "CEO / Strategy / Systems", // ✅ CEO明示
      bio1:
        "Canada-born, Japan-raised. Quietly obsessed with finding the one perfect place for the moment. Runs planning ops and makes the night frictionless.",
      bio2:
        "Ad agency. Singapore-trained palate. Turns “good” into “How did we find this?” Curates vibe-forward spots and makes the story land.",
      bio3:
        "Consulting manager (CEO). Portland-seasoned. Builds the system that keeps quality high — and makes every plan feel personal, not generic.",
      tag1a: "Sake",
      tag1b: "Hidden gems",
      tag1c: "Logistics",
      tag2a: "Bar hopping",
      tag2b: "Cocktails",
      tag2c: "Design sense",
      tag3a: "Yakitori",
      tag3b: "Whisky",
      tag3c: "Precision",
  
      promiseTitle: "Our promise",
      promiseBody:
        "We keep exact restaurant names protected until paid request to preserve availability and avoid crowds. The goal is quality nights — not mass tourism.",
  
      // ===== Pricing =====
      pricingTitle: "Pricing",
      pricingPrefixTitle: "Prefix (Preview)",
      pricingPrefixText:
        "Free preview on this page — sample routes & “stops” only. Exact restaurant names are not shown.",
      pricingPrefixCta: "See Prefix examples",
      pricingOmakaseTitle: "Omakase",
      pricingOmakaseText: "$30 — custom plan + up to 3 rerolls.",
      pricingOmakaseCta: "Request Omakase ($30)",
      pricingOmakaseNote: "Submit the form first — payment link appears after submission.",
      pricingGroupTitle: "Group night",
      pricingGroupText: "6+ people — corporate / team. We’ll quote.",
      pricingGroupCta: "DM on Instagram",
  
      // ===== Thanks page =====
      thanksTitle: "Payment received",
      thanksSub:
        "Now tell us your constraints (dates, allergies, budget). We’ll respond with your first Omakase draft.",
      goToForm: "Open Omakase form",
      backHome: "Back to home",
      thanksNoPaidWarning:
        "If you arrived here without payment, please return and use the Omakase button.",
  
      // ===== Footer =====
      disclaimer:
        "Disclaimer: We curate suggestions and can help with reservations where possible. We do not guarantee availability. We are not a travel agency.",
      refundNote:
        "Refund/cancel: You can define “planning fee is non-refundable once drafting starts” (recommended).",
        stepLabel: (n) => `STEP ${n}`,
        stopLabelInline: (n) => `Stop ${n}`,
        areaLabel: "Area",
        vibeLabel: "Vibe",
        igLatest: "Latest reel / post",
    },
  
    ja: {
      navQuiz: "診断",
      navPlans: "Prefix",
      navHow: "流れ",
      navPricing: "料金",
      navStory: "ストーリー",
  
      heroKicker: "Tokyo • Izakaya • Omakase",
      heroCtaPrimary: "30秒診断をはじめる",
      heroCtaSecondary: "Prefix例を見る",
      heroCtaPrimaryMobile: "診断開始",
      trust1: "ローカル厳選",
      trust2: "観光客向け回避",
      trust3: "予約サポート",
      trust4: "英語対応",
  
      quizTitle: "今夜の最適解を見つける",
      quizSub: "5問に答えるだけで、Prefixのおすすめを即提示します。",
      showPlan: "おすすめプランを見る",
      next: "次へ",
      back: "戻る",
      quizHookNote:
        "この診断は“体験用”です。店名共有や予約支援まで含む本番は Omakase から開始します。",
  
      resultTitle: "あなたへのおすすめ",
      resultWhyTitle: "おすすめの理由",
      resultCopySummary: "要約をコピー（フォーム貼り付け用）",
      resultOpenFormAgain: "（支払い済みの方）フォームを再度開く（自動入力）",
  
      prefixSectionTitle: "Prefix（例）",
      prefixNote:
        "Prefixはプレビューです。品質維持のため、店名は有料依頼後に共有します。",
      sampleFlowTitle: "一晩の流れ（例）",
      stopLabel: (n) => `Stop ${n}`,
      sampleStop1Head: "Stop 1",
      sampleStop1Sub: "焼き鳥＋ハイボール（隠れ家）",
      sampleStop2Head: "Stop 2",
      sampleStop2Sub: "日本酒＋季節のつまみ",
      sampleStop3Head: "Stop 3",
      sampleStop3Sub: "静かなバーで締め",
      requestOmakasePaid: "Omakaseを依頼（有料）",
      paymentAfterSubmission: "まずフォーム送信 → 送信後に決済リンクが表示されます。",
  
      howTitle: "利用の流れ",
      howLead:
        "診断は“フック（体験）”。本番は「希望を伝える → Omakase作成 → 予約支援」です。",
      howStep1Title: "1) 希望を伝える",
      howStep1Text:
        "誰と行くか・雰囲気・予算・日程・アレルギー・必須条件などを入力。",
      howStep2Title: "2) Omakase作成",
      howStep2Text:
        "一晩の流れを設計して提案。最大3回までリロール（作り直し）できます。",
      howStep3Title: "3) 予約サポート",
      howStep3Text:
        "内容OKなら、可能な範囲で予約に挑戦。難しい場合は代替案も提示します。",
      howQuizCtaTitle: "診断を試す（無料）",
      howQuizCtaText:
        "30秒で“味見”。即時にPrefixのおすすめが出ます。",
      howInstagramTitle: "Instagram",
      howInstagramText: "雰囲気と信頼のために重要です。",
      openInstagram: "Instagramを見る",
      igFallback: "読み込めない場合はInstagramを開いてください。",
  
      storyTitle: "ストーリー",
      storyLead:
        "東京のサラリーマン3人。仕事終わりの研究を積み重ねてきました。約束はひとつ：観光地っぽさゼロ、迷いゼロ、最高の夜。",
      storyKicker1: "なぜやるのか",
      storyHead1: "本当に良い夜は、Googleには載っていない。",
      storyBody1:
        "最高の居酒屋やバーは、紹介・常連・路地裏にあります。信頼できる東京の友人のように、味とペースで夜を設計します。",
      storyKicker2: "仕組み",
      storyHead2: "Omakase。ただし品質のためのガード付き。",
      storyBody2:
        "条件をもとに一晩の流れを作り、最大3回までリロール。店名は有料依頼後に共有し、混雑や質の低下を防ぎます。",
      storyPill1: "ローカル厳選",
      storyPill2: "観光客向け回避",
      storyPill3: "予約サポート",
      storyKicker3: "得られるもの",
      storyHead3: "“楽”なのに、記憶に残る夜。",
      storyBody3:
        "ちょうど良いペース、ちょうど良い距離感、ちょうど良い静けさ。東京が難しく感じる人ほど、価値が出ます。",
      storyCta1: "診断をはじめる",
      storyCta2: "Instagramで雰囲気を見る",
  
      foundersTitle: "創業メンバー",
      foundersLead:
        "旅行会社ではありません。味・ペース・記憶に残る夜にこだわる3人です。",
      role1: "プランニング / 予約",
      role2: "ブランド / 味",
      role3: "CEO / 戦略 / システム", // ✅ CEO明示
      bio1:
        "カナダ生まれ日本育ち。『その夜の正解の一軒』を静かに当てにいくタイプ。運用と予約を担当。",
      bio2:
        "広告代理店。シンガポール仕込みの感覚で“良い”を“刺さる”に変える。雰囲気の設計担当。",
      bio3:
        "外資コンサル（CEO）。品質を落とさない仕組みを作り、毎回“あなた用”の夜に仕上げます。",
      tag1a: "日本酒",
      tag1b: "隠れ家",
      tag1c: "段取り",
      tag2a: "はしご",
      tag2b: "カクテル",
      tag2c: "デザイン",
      tag3a: "焼き鳥",
      tag3b: "ウイスキー",
      tag3c: "精度",
  
      promiseTitle: "約束",
      promiseBody:
        "有料依頼まで店名を伏せるのは、空席と品質を守るためです。目指すのは“大量観光”ではなく、最高の夜です。",
  
      pricingTitle: "料金",
      pricingPrefixTitle: "Prefix（プレビュー）",
      pricingPrefixText:
        "このページ上で無料体験できます。ルートと“Stop”の例のみで、店名は出しません。",
      pricingPrefixCta: "Prefix例を見る",
      pricingOmakaseTitle: "Omakase",
      pricingOmakaseText: "$30 — カスタム作成＋最大3回リロール。",
      pricingOmakaseCta: "Omakaseを依頼（$30）",
      pricingOmakaseNote: "まずフォーム送信 → 送信後に決済リンクが表示されます。",
      pricingGroupTitle: "グループ",
      pricingGroupText: "6名以上（法人/チーム）— お見積りします。",
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
        "返金/キャンセル：『作成開始後はプランニング費用は返金不可』等のルール設定を推奨します。",
        stepLabel: (n) => `STEP ${n}`,
        stopLabelInline: (n) => `Stop ${n}`,
        areaLabel: "エリア",
        vibeLabel: "雰囲気",
        igLatest: "最新の投稿 / リール",
    },
  
    zh: {
      navQuiz: "测验",
      navPlans: "Prefix",
      navHow: "流程",
      navPricing: "价格",
      navStory: "故事",
  
      heroKicker: "东京 • 居酒屋 • Omakase",
      heroCtaPrimary: "开始30秒测验",
      heroCtaSecondary: "查看Prefix示例",
      heroCtaPrimaryMobile: "开始测验",
      trust1: "本地精选",
      trust2: "避开游客陷阱",
      trust3: "预约协助",
      trust4: "英语友好",
  
      quizTitle: "找到你的东京夜晚",
      quizSub: "回答5个问题，即可获得即时Prefix推荐。",
      showPlan: "查看推荐方案",
      next: "下一步",
      back: "返回",
      quizHookNote:
        "测验只是免费体验。若需要具体店名与预约协助，请提交 Omakase。",
  
      resultTitle: "你的推荐夜晚",
      resultWhyTitle: "为什么适合你",
      resultCopySummary: "复制摘要（可粘贴到表单）",
      resultOpenFormAgain: "（已付款）再次打开表单（已预填）",
  
      prefixSectionTitle: "Prefix 示例（预览）",
      prefixNote:
        "Prefix 为预览。为保护品质与可订性，具体店名仅在付费后提供。",
      sampleFlowTitle: "一晚流程示例",
      stopLabel: (n) => `第${n}站`,
      sampleStop1Head: "第1站",
      sampleStop1Sub: "隐藏烤鸡串＋高球",
      sampleStop2Head: "第2站",
      sampleStop2Sub: "清酒＋时令小菜",
      sampleStop3Head: "第3站",
      sampleStop3Sub: "深夜酒吧（安静收尾）",
      requestOmakasePaid: "提交 Omakase（付费）",
      paymentAfterSubmission: "先提交表单 — 提交后会显示付款链接。",
  
      howTitle: "使用流程",
      howLead:
        "测验只是“钩子体验”。真正服务是：提交偏好 → Omakase 定制 → 预约协助。",
      howStep1Title: "1) 提交偏好",
      howStep1Text:
        "告诉我们同行人、氛围、预算、日期、过敏、必选项等。",
      howStep2Title: "2) Omakase 定制",
      howStep2Text:
        "我们制作整晚动线。包含最多3次重做（reroll）。",
      howStep3Title: "3) 预约协助",
      howStep3Text:
        "你确认后，我们会在可行范围内协助预约，并提供备选方案。",
      howQuizCtaTitle: "先试试测验（免费）",
      howQuizCtaText: "30秒预览我们的品味 — 即时Prefix推荐。",
      howInstagramTitle: "Instagram",
      howInstagramText: "氛围与信任背书，对转化非常关键。",
      openInstagram: "打开 Instagram",
      igFallback: "如果无法加载，请直接打开 Instagram。",
  
      storyTitle: "我们的故事",
      storyLead:
        "三个东京上班族。多年下班后“研究”。我们的承诺：不踩游客雷、不用猜——只要对的夜晚。",
      storyKicker1: "为什么做",
      storyHead1: "东京最好的夜晚，不在 Google 上。",
      storyBody1:
        "真正优秀的居酒屋和酒吧藏在熟客与小巷里。我们把它做成“可信赖的东京朋友”。",
      storyKicker2: "怎么做",
      storyHead2: "Omakase，但有品质护栏。",
      storyBody2:
        "你给出限制条件，我们做整晚动线并最多重做3次。店名在付费后提供，以保护品质与可订性。",
      storyPill1: "本地精选",
      storyPill2: "避开游客陷阱",
      storyPill3: "预约协助",
      storyKicker3: "你得到什么",
      storyHead3: "轻松、干净、记得住的夜。",
      storyBody3:
        "节奏刚好、氛围刚好、收尾也刚好。东京太复杂时，我们帮你做减法。",
      storyCta1: "开始测验",
      storyCta2: "在 Instagram 看氛围",
  
      foundersTitle: "创始人",
      foundersLead:
        "我们不是旅行社。我们是三个在乎品味与节奏的朋友。",
      role1: "规划 / 预约",
      role2: "品牌 / 品味",
      role3: "CEO / 策略 / 系统", // ✅ CEO
      bio1:
        "加拿大出生，日本长大。擅长为当晚找到“最对的一家”。负责运营与预约。",
      bio2:
        "广告公司背景，新加坡磨出来的味觉。把“不错”变成“惊喜”。负责氛围与叙事。",
      bio3:
        "咨询公司经理（CEO）。搭建保持品质的系统，让每份方案都像为你而做。",
      tag1a: "清酒",
      tag1b: "隐藏好店",
      tag1c: "流程",
      tag2a: "串店",
      tag2b: "鸡尾酒",
      tag2c: "设计感",
      tag3a: "烤鸡串",
      tag3b: "威士忌",
      tag3c: "精准",
  
      promiseTitle: "我们的承诺",
      promiseBody:
        "我们在付费前保护店名，以维护可订性并避免拥挤。目标是高质量夜晚，而不是大众旅游。",
  
      pricingTitle: "价格",
      pricingPrefixTitle: "Prefix（预览）",
      pricingPrefixText:
        "本页免费体验：仅示例路线与“站点”，不展示具体店名。",
      pricingPrefixCta: "查看 Prefix 示例",
      pricingOmakaseTitle: "Omakase",
      pricingOmakaseText: "$30 — 定制方案 + 最多3次重做。",
      pricingOmakaseCta: "提交 Omakase（$30）",
      pricingOmakaseNote: "先提交表单 — 提交后会显示付款链接。",
      pricingGroupTitle: "团体夜",
      pricingGroupText: "6人以上（企业/团队）— 报价。",
      pricingGroupCta: "Instagram 私信",
  
      thanksTitle: "已收到付款",
      thanksSub: "请填写条件（日期、过敏、预算）。我们将发送第一版方案。",
      goToForm: "打开 Omakase 表单",
      backHome: "返回首页",
      thanksNoPaidWarning: "若未付款到达此页，请返回并通过 Omakase 按钮提交。",
  
      disclaimer:
        "免责声明：我们提供建议并在可能情况下协助预约，不保证有位。我们不是旅行社。",
      refundNote:
        "退款/取消：建议设置“开始制作后规划费不退”等规则。",

        stepLabel: (n) => `第${n}步`,
        stopLabelInline: (n) => `第${n}站`,
        areaLabel: "区域",
        vibeLabel: "氛围",
        igLatest: "最新帖子 / Reels",
    },
  
    es: {
      navQuiz: "Quiz",
      navPlans: "Prefix",
      navHow: "Cómo funciona",
      navPricing: "Precios",
      navStory: "Historia",
  
      heroKicker: "Tokio • Izakaya • Omakase",
      heroCtaPrimary: "Haz el quiz de 30 segundos",
      heroCtaSecondary: "Ver ejemplos Prefix",
      heroCtaPrimaryMobile: "Empezar",
      trust1: "Curado por locales",
      trust2: "Sin trampas turísticas",
      trust3: "Ayuda con reservas",
      trust4: "Amigable en inglés",
  
      quizTitle: "Tu noche perfecta en Tokio",
      quizSub: "Responde 5 preguntas y obtén una recomendación Prefix al instante.",
      showPlan: "Ver mi plan",
      next: "Siguiente",
      back: "Atrás",
      quizHookNote:
        "El quiz es una muestra gratuita. Para nombres exactos + ayuda de reserva, solicita Omakase.",
  
      resultTitle: "Tu noche recomendada",
      resultWhyTitle: "Por qué encaja",
      resultCopySummary: "Copiar resumen (para pegar en el formulario)",
      resultOpenFormAgain: "(Si ya pagaste) Abrir el formulario de nuevo (rellenado)",
  
      prefixSectionTitle: "Planes Prefix (ejemplos)",
      prefixNote:
        "Prefix es una vista previa. Los nombres exactos se comparten tras solicitud pagada para proteger la calidad.",
      sampleFlowTitle: "Ejemplo de flujo nocturno",
      stopLabel: (n) => `Parada ${n}`,
      sampleStop1Head: "Parada 1",
      sampleStop1Sub: "Yakitori oculto + highball",
      sampleStop2Head: "Parada 2",
      sampleStop2Sub: "Sake + platos de temporada",
      sampleStop3Head: "Parada 3",
      sampleStop3Sub: "Bar nocturno (final tranquilo)",
      requestOmakasePaid: "Solicitar Omakase (pago)",
      paymentAfterSubmission: "Envía el formulario primero — el enlace de pago aparece después.",
  
      howTitle: "Cómo funciona",
      howLead:
        "El quiz es el gancho. El servicio real empieza cuando nos dices lo que quieres — luego Omakase — y después reservas.",
      howStep1Title: "1) Comparte preferencias",
      howStep1Text:
        "Con quién vas, ambiente, presupuesto, fechas, alergias y imprescindibles.",
      howStep2Title: "2) Borrador Omakase",
      howStep2Text:
        "Creamos un flujo nocturno limpio. Incluye hasta 3 rerolls para afinarlo.",
      howStep3Title: "3) Ayuda con reservas",
      howStep3Text:
        "Cuando lo apruebas, intentamos reservas cuando sea posible y proponemos alternativas.",
      howQuizCtaTitle: "Prueba el quiz (gratis)",
      howQuizCtaText:
        "Vista previa de 30 segundos de nuestro gusto — recomendación Prefix instantánea.",
      howInstagramTitle: "Instagram",
      howInstagramText: "Prueba social + vibra. Clave para convertir.",
      openInstagram: "Abrir Instagram",
      igFallback: "Si no carga, abre Instagram.",
  
      storyTitle: "Nuestra historia",
      storyLead:
        "Tres salarymen de Tokio. Años de investigación post-trabajo. Una promesa: sin trampas turísticas, sin adivinar — solo la noche correcta.",
      storyKicker1: "Por qué existimos",
      storyHead1: "Las mejores noches de Tokio están escondidas — no en Google.",
      storyBody1:
        "Los mejores izakaya y bares viven en introducciones, habituales y calles tranquilas. Construimos un servicio como un amigo fiable en Tokio — con gusto.",
      storyKicker2: "Cómo funciona",
      storyHead2: "Omakase, con barandillas de calidad.",
      storyBody2:
        "Nos dices tus condiciones. Redactamos un flujo nocturno y rerollemos hasta 3 veces. Protegemos nombres exactos hasta la solicitud pagada para preservar calidad y disponibilidad.",
      storyPill1: "Curado por locales",
      storyPill2: "Sin trampas turísticas",
      storyPill3: "Ayuda con reservas",
      storyKicker3: "Qué obtienes",
      storyHead3: "Una noche que se siente fácil.",
      storyBody3:
        "Un plan limpio. El ritmo correcto. Lugares donde la conversación cae suave. Si Tokio abruma, nosotros simplificamos.",
      storyCta1: "Empezar el quiz",
      storyCta2: "Ver la vibra en Instagram",
  
      foundersTitle: "Fundadores",
      foundersLead:
        "No somos una agencia de tours. Somos tres amigos obsesionados con gusto y ritmo.",
      role1: "Planificación / Reservas",
      role2: "Marca / Gusto",
      role3: "CEO / Estrategia / Sistemas", // ✅ CEO
      bio1:
        "Nacido en Canadá, criado en Japón. Obsesionado con encontrar el lugar perfecto para el momento. Opera y gestiona reservas.",
      bio2:
        "Publicidad. Paladar entrenado en Singapur. Convierte “bien” en “¿cómo lo encontramos?”. Cura la vibra.",
      bio3:
        "Manager de consultoría (CEO). Construye el sistema que mantiene la calidad alta — y lo hace personal, no genérico.",
      tag1a: "Sake",
      tag1b: "Joyas ocultas",
      tag1c: "Logística",
      tag2a: "Bar hopping",
      tag2b: "Cócteles",
      tag2c: "Diseño",
      tag3a: "Yakitori",
      tag3b: "Whisky",
      tag3c: "Precisión",
  
      promiseTitle: "Nuestra promesa",
      promiseBody:
        "Protegemos nombres exactos hasta la solicitud pagada para preservar disponibilidad y evitar multitudes. El objetivo son noches de calidad — no turismo masivo.",
  
      pricingTitle: "Precios",
      pricingPrefixTitle: "Prefix (vista previa)",
      pricingPrefixText:
        "Vista previa gratuita en esta página — solo rutas y “paradas”. No mostramos nombres exactos.",
      pricingPrefixCta: "Ver ejemplos Prefix",
      pricingOmakaseTitle: "Omakase",
      pricingOmakaseText: "$30 — plan personalizado + hasta 3 rerolls.",
      pricingOmakaseCta: "Solicitar Omakase ($30)",
      pricingOmakaseNote: "Envía el formulario primero — el enlace de pago aparece después.",
      pricingGroupTitle: "Noche en grupo",
      pricingGroupText: "6+ personas — empresa / equipo. Cotizamos.",
      pricingGroupCta: "DM en Instagram",
  
      thanksTitle: "Pago recibido",
      thanksSub:
        "Cuéntanos tus condiciones (fechas, alergias, presupuesto). Te enviaremos el primer borrador.",
      goToForm: "Abrir formulario Omakase",
      backHome: "Volver al inicio",
      thanksNoPaidWarning:
        "Si llegaste aquí sin pagar, vuelve y usa el botón de Omakase.",
  
      disclaimer:
        "Aviso: Curamos sugerencias y ayudamos con reservas cuando sea posible. No garantizamos disponibilidad. No somos agencia de viajes.",
      refundNote:
        "Reembolso/cancelación: recomendamos definir “la tarifa de planificación no es reembolsable una vez que empezamos”.",
        stepLabel: (n) => `PASO ${n}`,
        stopLabelInline: (n) => `Parada ${n}`,
        areaLabel: "Zona",
        vibeLabel: "Ambiente",
        igLatest: "Último reel / post",
    },
  };