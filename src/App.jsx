import React, { useEffect, useMemo, useState } from "react";
import { CONFIG } from "./config";
import { LANGS, STRINGS } from "./i18n";
import { FORM_FIELDS, buildGoogleFormPrefillUrl } from "./formPrefill";

// ===== Plans (店名出しすぎない運用) =====
   const PLANS = [
    {
      id: "central-3",
      image: "/prefix/p1.jpg",
      title: {
        en: "Central Tokyo: 3 Stops, Zero Guessing",
        ja: "都心：3軒はしご、迷いゼロ",
        zh: "东京市中心：3站连走，不用猜",
        es: "Centro de Tokio: 3 paradas, cero dudas",
      },
      vibe: ["quiet", "classic", "business"],
      budget: ["mid", "high"],
      area: ["central", "ginza"],
      must: ["sake", "yakitori", "whisky"],
      stops: [
        {
          step: 1,
          key: "yakitori",
          name: { en: "Hidden Yakitori", ja: "隠れ家焼き鳥", zh: "隐藏烤鸡串", es: "Yakitori escondido" },
          note: {
            en: "Charcoal, perfect highballs, no tourist traps.",
            ja: "炭火、最高のハイボール。観光客向けは回避。",
            zh: "炭火烤制，高球很稳，避开游客陷阱。",
            es: "Carbón, highballs perfectos, sin trampas turísticas.",
          },
          image: "/stops/central_1_yakitori.jpg",
        },
        {
          step: 2,
          key: "sake",
          name: { en: "Sake + Seasonal plates", ja: "日本酒＋季節の小皿", zh: "清酒＋时令小菜", es: "Sake + platos de temporada" },
          note: {
            en: "Pairings that feel ‘Tokyo’.",
            ja: "“東京らしさ”のあるペアリング。",
            zh: "很“东京”的搭配体验。",
            es: "Maridajes que se sienten ‘Tokio’.",
          },
          image: "/stops/central_2_sake.jpg",
        },
        {
          step: 3,
          key: "bar",
          name: { en: "Late-night bar", ja: "深夜のバー", zh: "深夜酒吧", es: "Bar nocturno" },
          note: {
            en: "Clean finish — quiet and classy.",
            ja: "綺麗に締める。静かで上質。",
            zh: "干净收尾——安静又高级。",
            es: "Cierre limpio — tranquilo y con clase.",
          },
          image: "/stops/central_3_bar.jpg",
        },
      ],
      why: {
        en: "Best first impression of Tokyo after-work drinking.",
        ja: "仕事終わりの“東京の第一印象”に最適。",
        zh: "最适合作为下班后体验东京的第一印象。",
        es: "La mejor primera impresión del Tokio de afterwork.",
      },
    },
  
    {
      id: "roppongi-akasaka",
      image: "/prefix/p2.jpg",
      title: {
        en: "Roppongi → Akasaka: Lively but polished",
        ja: "六本木 → 赤坂：賑やかだけど上品",
        zh: "六本木→赤坂：热闹但精致",
        es: "Roppongi → Akasaka: animado pero refinado",
      },
      vibe: ["lively", "business", "classic"],
      budget: ["mid", "high"],
      area: ["roppongi", "akasaka", "central"],
      must: ["barhop", "yakitori", "whisky"],
      stops: [
        {
          step: 1,
          key: "izakaya",
          name: { en: "Izakaya classics", ja: "王道居酒屋", zh: "经典居酒屋", es: "Clásicos de izakaya" },
          note: {
            en: "Fast, fun, reliable.",
            ja: "早い、楽しい、外さない。",
            zh: "节奏快、好玩、很稳。",
            es: "Rápido, divertido, fiable.",
          },
          image: "/stops/roppongi_1_izakaya.jpg",
        },
        {
          step: 2,
          key: "sake",
          name: { en: "Sake corner", ja: "日本酒コーナー", zh: "清酒角", es: "Rincón de sake" },
          note: {
            en: "Local pours, short menu, high hit-rate.",
            ja: "地元の一杯。短いメニューで当たり率高め。",
            zh: "本地酒单、菜单精简、命中率高。",
            es: "Copas locales, menú corto, alto acierto.",
          },
          image: "/stops/roppongi_2_sake.jpg",
        },
        {
          step: 3,
          key: "cocktail",
          name: { en: "Cocktail bar", ja: "カクテルバー", zh: "鸡尾酒吧", es: "Bar de cócteles" },
          note: {
            en: "A proper Tokyo ending.",
            ja: "“東京の締め”として間違いない。",
            zh: "一个很“东京”的收尾。",
            es: "Un final tokioísta como se debe.",
          },
          image: "/stops/roppongi_3_cocktail.jpg",
        },
      ],
      why: {
        en: "Great for friends or business colleagues.",
        ja: "友人にも接待にも相性が良い。",
        zh: "适合朋友或商务同事。",
        es: "Ideal para amigos o colegas de negocios.",
      },
    },
  
    {
      id: "shibuya-casual",
      image: "/prefix/p3.jpg",
      title: {
        en: "Shibuya: Casual izakaya + standing bar",
        ja: "渋谷：気軽な居酒屋＋立ち飲み",
        zh: "涩谷：轻松居酒屋＋立饮酒吧",
        es: "Shibuya: Izakaya casual + bar de pie",
      },
      vibe: ["casual", "lively"],
      budget: ["low", "mid"],
      area: ["shibuya", "west"],
      must: ["beer", "barhop", "streetfood"],
      stops: [
        {
          step: 1,
          key: "casual",
          name: { en: "Casual izakaya", ja: "気軽な居酒屋", zh: "轻松居酒屋", es: "Izakaya casual" },
          note: {
            en: "Easy orders, big energy.",
            ja: "注文しやすく、活気があって入りやすい。",
            zh: "点单简单，氛围热闹。",
            es: "Fácil de pedir, mucha energía.",
          },
          image: "/stops/shibuya_1_casual.jpg",
        },
        {
          step: 2,
          key: "tachinomi",
          name: { en: "Tachinomi (standing bar)", ja: "立ち飲み", zh: "立饮酒吧", es: "Tachinomi (bar de pie)" },
          note: {
            en: "Local vibe, quick sips.",
            ja: "ローカル感。短時間でサクッと一杯。",
            zh: "本地氛围，快速小酌。",
            es: "Vibra local, tragos rápidos.",
          },
          image: "/stops/shibuya_2_tachinomi.jpg",
        },
      ],
      why: {
        en: "Best if you want speed + fun + options.",
        ja: "テンポよく、楽しく、選択肢も多い夜に最適。",
        zh: "适合想要节奏快、好玩、选择多的夜晚。",
        es: "Ideal si quieres rapidez + diversión + opciones.",
      },
    },
  
    {
      id: "oldtokyo",
      image: "/prefix/p4.jpg",
      title: {
        en: "Old Tokyo: Traditional izakaya crawl",
        ja: "下町：渋い居酒屋はしご",
        zh: "老东京：传统居酒屋巡游",
        es: "Viejo Tokio: ruta clásica de izakayas",
      },
      vibe: ["classic", "casual"],
      budget: ["mid"],
      area: ["east"],
      must: ["seafood", "sake", "classic"],
      stops: [
        {
          step: 1,
          key: "oldschool",
          name: { en: "Old-school izakaya", ja: "渋い老舗居酒屋", zh: "老派居酒屋", es: "Izakaya de toda la vida" },
          note: {
            en: "Handwritten menus, warm lights.",
            ja: "手書きメニュー、温かい灯り。",
            zh: "手写菜单，暖黄灯光。",
            es: "Menús a mano, luces cálidas.",
          },
          image: "/stops/oldtokyo_1_oldschool.jpg",
        },
        {
          step: 2,
          key: "seafood",
          name: { en: "Grilled seafood", ja: "海鮮の炭火焼き", zh: "炭烤海鲜", es: "Marisco a la parrilla" },
          note: {
            en: "Charcoal + ocean.",
            ja: "炭火＋海の香り。",
            zh: "炭火＋海的味道。",
            es: "Carbón + sabor a mar.",
          },
          image: "/stops/oldtokyo_2_seafood.jpg",
        },
        {
          step: 3,
          key: "sake",
          name: { en: "Sake spot", ja: "日本酒の一軒", zh: "清酒小店", es: "Rincón de sake" },
          note: {
            en: "Quiet pours, good conversation.",
            ja: "静かな一杯。会話が進む。",
            zh: "安静小酌，适合聊天。",
            es: "Copas tranquilas, buena conversación.",
          },
          image: "/stops/oldtokyo_3_sake.jpg",
        },
      ],
      why: {
        en: "For atmosphere and story, not trendy hype.",
        ja: "流行より“空気”と“物語”重視の人へ。",
        zh: "给重视氛围与故事、而非潮流的人。",
        es: "Para ambiente e historia, no para modas.",
      },
    },
  
    {
      id: "date-quiet",
      image: "/prefix/p5.jpg",
      title: {
        en: "Quiet date night: small plates + wine/sake",
        ja: "静かなデート：小皿＋ワイン/日本酒",
        zh: "安静约会夜：小盘菜＋葡萄酒/清酒",
        es: "Cita tranquila: platitos + vino/sake",
      },
      vibe: ["quiet", "date"],
      budget: ["mid", "high"],
      area: ["south", "central"],
      must: ["wine", "smallplates", "quiet"],
      stops: [
        {
          step: 1,
          key: "smallplates",
          name: { en: "Small plates", ja: "季節の小皿", zh: "时令小盘菜", es: "Platitos" },
          note: {
            en: "Seasonal, subtle, perfect pacing.",
            ja: "季節感、繊細さ、テンポがちょうどいい。",
            zh: "应季、细腻、节奏刚好。",
            es: "De temporada, sutil, ritmo perfecto.",
          },
          image: "/stops/date_1_smallplates.jpg",
        },
        {
          step: 2,
          key: "wine",
          name: { en: "Wine/Sake bar", ja: "ワイン/日本酒バー", zh: "葡萄酒/清酒吧", es: "Bar de vino/sake" },
          note: {
            en: "Low volume, high taste.",
            ja: "静かな音量、味は高密度。",
            zh: "音量低，品味高。",
            es: "Bajo volumen, gran sabor.",
          },
          image: "/stops/date_2_winebar.jpg",
        },
      ],
      why: {
        en: "For couples who hate crowds.",
        ja: "人混みが苦手なカップルに。",
        zh: "适合讨厌拥挤的情侣。",
        es: "Para parejas que odian las multitudes.",
      },
    },
  ];

const QUESTIONS = [
  {
    id: "with",
    options: [
      { v: "solo", l: { en: "Solo", ja: "ひとり", zh: "独自", es: "Solo" } },
      { v: "date", l: { en: "Partner / Date", ja: "恋人/デート", zh: "约会", es: "Pareja / Cita" } },
      { v: "friends", l: { en: "Friends", ja: "友人", zh: "朋友", es: "Amigos" } },
      { v: "business", l: { en: "Business colleagues", ja: "同僚/接待", zh: "商务", es: "Negocios" } },
      { v: "family", l: { en: "Family (adults)", ja: "家族（大人）", zh: "家庭(成人)", es: "Familia" } },
    ],
  },
  {
    id: "vibe",
    options: [
      { v: "quiet", l: { en: "Quiet & refined", ja: "静かで上質", zh: "安静精致", es: "Tranquilo" } },
      { v: "classic", l: { en: "Classic izakaya", ja: "王道居酒屋", zh: "经典居酒屋", es: "Clásico" } },
      { v: "lively", l: { en: "Lively & social", ja: "賑やか", zh: "热闹社交", es: "Animado" } },
      { v: "casual", l: { en: "Casual & quick", ja: "気軽", zh: "轻松快速", es: "Casual" } },
      { v: "date", l: { en: "Date night", ja: "デート向き", zh: "约会氛围", es: "Cita" } },
    ],
  },
  {
    id: "budget",
    options: [
      { v: "low", l: { en: "~ $50", ja: "〜$50", zh: "约$50", es: "~ $50" } },
      { v: "mid", l: { en: "$50–$120", ja: "$50–$120", zh: "$50–$120", es: "$50–$120" } },
      { v: "high", l: { en: "$120+", ja: "$120+", zh: "$120+", es: "$120+" } },
    ],
  },
  {
    id: "area",
    options: [
      { v: "central", l: { en: "Central (Ginza/Tokyo)", ja: "都心（銀座/東京）", zh: "市中心", es: "Centro" } },
      { v: "roppongi", l: { en: "Roppongi", ja: "六本木", zh: "六本木", es: "Roppongi" } },
      { v: "akasaka", l: { en: "Akasaka", ja: "赤坂", zh: "赤坂", es: "Akasaka" } },
      { v: "shibuya", l: { en: "Shibuya", ja: "渋谷", zh: "涩谷", es: "Shibuya" } },
      { v: "east", l: { en: "East Tokyo", ja: "東京東側", zh: "东东京", es: "Este" } },
      { v: "south", l: { en: "South Tokyo", ja: "東京南側", zh: "南东京", es: "Sur" } },
      { v: "west", l: { en: "West Tokyo", ja: "東京西側", zh: "西东京", es: "Oeste" } },
    ],
  },
  {
    id: "must",
    options: [
      { v: "yakitori", l: { en: "Yakitori", ja: "焼き鳥", zh: "烤鸡串", es: "Yakitori" } },
      { v: "sake", l: { en: "Sake", ja: "日本酒", zh: "清酒", es: "Sake" } },
      { v: "beer", l: { en: "Beer & classics", ja: "ビールと定番", zh: "啤酒经典", es: "Cerveza" } },
      { v: "whisky", l: { en: "Whisky / cocktails", ja: "ウイスキー/カクテル", zh: "威士忌/鸡尾酒", es: "Whisky" } },
      { v: "barhop", l: { en: "Bar hopping", ja: "はしご", zh: "串吧", es: "Bar hopping" } },
      { v: "seafood", l: { en: "Seafood", ja: "海鮮", zh: "海鲜", es: "Mariscos" } },
      { v: "wine", l: { en: "Wine", ja: "ワイン", zh: "葡萄酒", es: "Vino" } },
      { v: "quiet", l: { en: "No crowds", ja: "混雑なし", zh: "不拥挤", es: "Sin multitudes" } },
      { v: "classic", l: { en: "Old-school", ja: "渋い店", zh: "老派", es: "Tradicional" } },
      { v: "smallplates", l: { en: "Small plates", ja: "小皿", zh: "小盘菜", es: "Tapas" } },
      { v: "streetfood", l: { en: "Street vibe", ja: "路地感", zh: "街头氛围", es: "Callejero" } },
    ],
  },
];

function scorePlan(plan, a) {
  let s = 0;
  if (plan.vibe.includes(a.vibe)) s += 4;
  if (plan.budget.includes(a.budget)) s += 3;
  if (plan.area.includes(a.area)) s += 4;
  if (plan.must.includes(a.must)) s += 4;

  if (a.with === "date" && plan.vibe.includes("date")) s += 2;
  if (a.with === "business" && plan.vibe.includes("business")) s += 2;
  return s;
}

function getBestPlan(answers) {
  return PLANS.map((p) => ({ p, s: scorePlan(p, answers) })).sort((x, y) => y.s - x.s)[0]?.p ?? PLANS[0];
}

// hash routing: "#/" or "#/thanks"
function getRoute() {
  const h = window.location.hash || "#/";
  const [path, query] = h.replace(/^#/, "").split("?");
  return { path: path || "/", query: new URLSearchParams(query || "") };
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function InstagramEmbed({ postUrl, profileUrl, title, subtitle, fallbackText, openText }) {
  useEffect(() => {
    if (window?.instgrm?.Embeds?.process) {
      window.instgrm.Embeds.process();
    }
  }, [postUrl]);

  return (
    <div className="card">
      <div className="cardTitle">{title}</div>
      <div className="cardText">{subtitle}</div>
      <div style={{ marginTop: 10 }}>
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={postUrl}
          data-instgrm-version="14"
          style={{ background: "#fff", borderRadius: 14 }}
        />
      </div>
      <div className="small" style={{ marginTop: 10 }}>
        {fallbackText}{" "}
        <a className="navLink" href={profileUrl} target="_blank" rel="noreferrer">
          {openText}
        </a>
        .
      </div>
    </div>
  );
}

function Modal({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="modalOverlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modalTop">
          <div className="modalTitle">{CONFIG.brandName}</div>
          <button className="close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <div className="modalBody">{children}</div>
      </div>
    </div>
  );
}

function pickText(v, lang) {
  if (!v) return "";
  if (typeof v === "object") return v[lang] || v.en || Object.values(v)[0] || "";
  return v; // 移行途中のstringも壊さない
}

/** ✅（任意）Area/Vibe など value → 表示ラベル変換（QUESTIONS を使う） */
function labelFromQuestion(qid, value, lang, QUESTIONS) {
  const q = QUESTIONS.find((x) => x.id === qid);
  const opt = q?.options?.find((o) => o.v === value);
  return opt?.l?.[lang] || opt?.l?.en || value || "";
}

export default function App() {
  const [lang, setLang] = useState(CONFIG.defaultLang);
  const t = STRINGS[lang] ?? STRINGS.en;

  const [route, setRoute] = useState(getRoute());
  useEffect(() => {
    const onHash = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // hero object-position as CSS variable
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 980px)").matches;
    document.documentElement.style.setProperty(
      "--hero-pos",
      isMobile ? CONFIG.heroObjectPositionMobile : CONFIG.heroObjectPositionDesktop
    );
  }, []);



  // ===== quiz state =====
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [resultOpen, setResultOpen] = useState(false);

  // ===== responsive =====
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 980px)");
    const apply = () => setIsMobile(mq.matches);
    apply();

    // Safari 対応も含める
    if (mq.addEventListener) mq.addEventListener("change", apply);
    else mq.addListener(apply);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", apply);
      else mq.removeListener(apply);
    };
  }, []);

  // ===== preview open/close (mobile default closed) =====
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewHiddenDesktop, setPreviewHiddenDesktop] = useState(false);

  // PCは常に開く / スマホは閉じる
  useEffect(() => {
    if (isMobile) {
        setPreviewOpen(false); // スマホは閉から
      } else {
        setPreviewOpen(true);  // PCは開から
        setPreviewHiddenDesktop(false); // ✅ PCに戻ったら一旦表示に戻す（好みで消してOK）
      }
      }, [isMobile]);

  // ✅ 1問目を選んで(stepが1以上になって)から Preview を出す
  //    1問目まで戻ったら(step=0) Preview 自体を消す
  const showPreview = step > 0 && !( !isMobile && previewHiddenDesktop );

  // step=0 に戻ったら、スマホの開閉状態も閉じておく（次に出た時に邪魔しない）
  useEffect(() => {
    if (!showPreview) setPreviewOpen(false);
    if (step === 0) setPreviewHiddenDesktop(false); // ✅ 次の開始時に復活
  }, [showPreview, step]);

// ===== preview (no hover) =====

// ✅ hoverPick は不要なので削除
// const [hoverPick, setHoverPick] = useState(null);

const showPreviewLauncher = step > 0 && !isMobile && previewHiddenDesktop;

const previewAnswers = useMemo(() => {
  // ✅ 常に確定済みの回答だけでPreview
  return answers;
}, [answers]);

const previewPlan = useMemo(() => {
  return getBestPlan(previewAnswers);
}, [previewAnswers]);

// previewScore も要らなければ消してOK
const previewScore = useMemo(() => {
  try {
    return scorePlan(previewPlan, previewAnswers);
  } catch {
    return 0;
  }
}, [previewPlan, previewAnswers]);

  function handlePickOption(qid, value) {
    setAnswers((a) => ({ ...a, [qid]: value }));

    // ✅ 選択したら自動で次へ（最後だけ結果表示）
    setStep((s) => {
      const isLast = s >= QUESTIONS.length - 1;
      if (isLast) {
        // setAnswers は非同期なので、answers ではなく「qid/value を足した仮回答」で判定
        const nextA = { ...answers, [qid]: value };
        const ok = ["with", "vibe", "budget", "area", "must"].every((k) => Boolean(nextA[k]));
        if (ok) {
          setResultOpen(true);
          scrollToId("quiz");
        }
        return s;
      }
      return Math.min(QUESTIONS.length - 1, s + 1);
    });
  }

  const completed = useMemo(() => {
    return ["with", "vibe", "budget", "area", "must"].every((k) => Boolean(answers[k]));
  }, [answers]);

  const pickedPlan = useMemo(() => {
    if (!completed) return null;
    return getBestPlan(answers);
  }, [answers, completed]);

  const omakaseFormUrl = useMemo(() => {
    if (!pickedPlan) return CONFIG.googleFormOmakaseBaseUrl;
    return buildGoogleFormPrefillUrl(CONFIG.googleFormOmakaseBaseUrl, {
      [FORM_FIELDS.with]: answers.with,
      [FORM_FIELDS.vibe]: answers.vibe,
      [FORM_FIELDS.budget]: answers.budget,
      [FORM_FIELDS.area]: answers.area,
      [FORM_FIELDS.must]: answers.must,
      [FORM_FIELDS.recommendedPlan]: pickText(pickedPlan.title, lang),
      [FORM_FIELDS.paid]: "yes",
    });
  }, [answers, pickedPlan]);

  const quiz = QUESTIONS[step];

  // quiz question title (move out from inline hardcode)
  const quizQuestionTitle = useMemo(() => {
    // if you define in i18n: t.quizQ = {with:'', vibe:'', ...} then use that.
    const fromI18n = t.quizQ?.[quiz?.id];
    if (fromI18n) return fromI18n;

    // fallback (should be removed once i18n is complete)
    const titles = {
      with: { en: "Who are you traveling with?", ja: "誰と飲みますか？", zh: "和谁一起？", es: "¿Con quién?" },
      vibe: { en: "What vibe tonight?", ja: "雰囲気は？", zh: "今晚氛围？", es: "¿Qué ambiente?" },
      budget: { en: "Budget per person?", ja: "予算/人は？", zh: "人均预算？", es: "¿Presupuesto?" },
      area: { en: "Preferred area?", ja: "エリアは？", zh: "区域偏好？", es: "¿Zona?" },
      must: { en: "Must-have?", ja: "絶対条件は？", zh: "必选项？", es: "¿Imprescindible?" },
    };
    return titles[quiz.id]?.[lang] || titles[quiz.id]?.en || "";
  }, [quiz?.id, lang, t.quizQ]);

  // ===== /thanks route =====
  if (route.path === "/thanks") {
    const paid = route.query.get("paid") === "1";
    return (
      <>
        <div className="topNav">
          <div className="topNavInner">
            <div className="brand">
              <span className="brandMark" />
              <span>{CONFIG.brandName}</span>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <select className="langSelect" value={lang} onChange={(e) => setLang(e.target.value)}>
                {LANGS.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.label}
                  </option>
                ))}
              </select>
              <a className="btn" href="#/">
                {t.backHome}
              </a>
            </div>
          </div>
        </div>

        <div className="section" style={{ paddingTop: 120 }}>
          <div className="container">
            <h2 className="h2">{t.thanksTitle}</h2>
            <p className="muted">{t.thanksSub}</p>

            <div style={{ marginTop: 16, maxWidth: 720 }}>
              <a className="btn btnPrimary btnBlock" href={CONFIG.googleFormOmakaseBaseUrl} target="_blank" rel="noreferrer">
                {t.goToForm}
              </a>
              {!paid && (
                <p className="small" style={{ marginTop: 12 }}>
                  {t.thanksNoPaidWarning}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="container footerInner">
            <div>
              <div className="brand">
                <span className="brandMark" />
                <span>{CONFIG.brandName}</span>
              </div>
              <div className="small">{CONFIG.tagline}</div>
            </div>
            <div className="small">{t.disclaimer}</div>
          </div>
        </div>
      </>
    );
  }

  // ===== main LP =====
  return (
    <>
      <div className="topNav">
        <div className="topNavInner">
          <div className="brand" onClick={() => (window.location.hash = "#/")} style={{ cursor: "pointer" }}>
            <img src="/logo.png" alt="Logo" className="brandLogo" />
            <span>{CONFIG.brandName}</span>
          </div>

          <div className="navLinks">
            <a className="navLink" href="#quiz" onClick={(e) => (e.preventDefault(), scrollToId("quiz"))}>
              {t.navQuiz}
            </a>
            <a className="navLink" href="#plans" onClick={(e) => (e.preventDefault(), scrollToId("plans"))}>
              {t.navPlans}
            </a>
            <a className="navLink" href="#how" onClick={(e) => (e.preventDefault(), scrollToId("how"))}>
              {t.navHow}
            </a>
            <a className="navLink" href="#pricing" onClick={(e) => (e.preventDefault(), scrollToId("pricing"))}>
              {t.navPricing}
            </a>
            <a className="navLink" href="#story" onClick={(e) => (e.preventDefault(), scrollToId("story"))}>
              {t.navStory}
            </a>
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <select className="langSelect" value={lang} onChange={(e) => setLang(e.target.value)}>
              {LANGS.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.label}
                </option>
              ))}
            </select>
            <button className="btn btnPrimary" onClick={() => scrollToId("quiz")}>
              <span className="desktopOnly">{t.heroCtaPrimary}</span>
              <span className="mobileOnly">{t.heroCtaPrimaryMobile}</span>
            </button>
          </div>
        </div>
      </div>

      <section className="hero">
        <div className="heroMedia">
          <img src={CONFIG.heroImage} alt="Hero" />
        </div>
        <div className="heroOverlay" />
        <div className="heroNoise" />

        <div className="heroInner">
          <div className="container">
            <div className="heroGrid">
              <div className="heroCopy">
                <div className="kicker">{t.heroKicker}</div>
                <div className="h1">{CONFIG.tagline}</div>
                <div className="sub">{CONFIG.subline}</div>

                <div className="heroActions">
                  <button className="btn btnPrimary" onClick={() => scrollToId("quiz")}>
                    {t.heroCtaPrimary}
                  </button>
                  <button className="btn" onClick={() => scrollToId("plans")}>
                    {t.heroCtaSecondary}
                  </button>
                </div>

                <div className="trustRow">
                  <div className="trustPill">{t.trust1}</div>
                  <div className="trustPill">{t.trust2}</div>
                  <div className="trustPill">{t.trust3}</div>
                  <div className="trustPill">{t.trust4}</div>
                  <div className="trustPill">{t.trust5}</div>
                </div>
              </div>

        {/* ✅ Quiz preview (step>0 の時だけ表示 / mobileは折りたたみ) */}
        {showPreview && (
          <div
            className={[
              "quizPreview",
              isMobile ? "isMobile" : "isDesktop",
              previewOpen ? "open" : "closed",
            ].join(" ")}
          >
            {/* スマホ用：Previewピル（閉→開） */}
            <button
              type="button"
              className="quizPreviewToggle"
              onClick={() => setPreviewOpen((v) => !v)}
              aria-expanded={previewOpen}
            >
              Preview
              <span className="quizPreviewDot" />
            </button>



                {/* カード本体（PCは常時表示 / スマホは open のときだけ表示されるCSS） */}
                <div className="quizPreviewCard">

                  {/* ✅ 追加：Previewヘッダー（カード内） */}
                  <div className="quizPreviewHeader">
                    <div className="quizPreviewHeaderLeft">
                      <span className="quizPreviewHeaderDot" />
                      <span className="quizPreviewHeaderTitle">
                        {t.previewLabel || "Omakase preview"}
                      </span>
                    </div>
                    <div className="quizPreviewHeaderRight">
                      {t.previewSub || "Based on your current selections"}

                      {/* ✅ PCだけ：✕で非表示 */}
                      {!isMobile && (
                        <button
                          type="button"
                          className="quizPreviewClose"
                          onClick={() => setPreviewHiddenDesktop(true)}
                          aria-label="Hide preview"
                          title="Hide"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  </div>

                  <div
                    className="quizPreviewImg"
                    style={{ backgroundImage: `url(${previewPlan?.image || "/prefix/p1.jpg"})` }}
                  />

                  <div className="quizPreviewText">
                    <div className="quizPreviewTitle">{pickText(previewPlan?.title, lang)}</div>
                    <div className="quizPreviewSub">{pickText(previewPlan?.why, lang)}</div>

                    <div className="quizPreviewMeta">
                      {previewAnswers.area ? `${t.areaLabel}: ${labelFromQuestion("area", previewAnswers.area, lang, QUESTIONS)}` : ""}
                      {previewAnswers.vibe ? ` • ${t.vibeLabel}: ${labelFromQuestion("vibe", previewAnswers.vibe, lang, QUESTIONS)}` : ""}
                      {previewAnswers.budget ? ` • ${labelFromQuestion("budget", previewAnswers.budget, lang, QUESTIONS)}` : ""}
                      {previewAnswers.must ? ` • ${labelFromQuestion("must", previewAnswers.must, lang, QUESTIONS)}` : ""}
                    </div>
                  </div>

                </div>
          </div>
        )}

        {/* ✅ PCで隠した時の "Show preview" ミニボタン */}
{showPreviewLauncher && (
  <button
    type="button"
    className="quizPreviewLauncher"
    onClick={() => setPreviewHiddenDesktop(false)}
    aria-label="Show preview"
    title="Show preview"
  >
    Show preview
  </button>
)}

              {/* Glass quiz panel */}
              <div className="glassPanel" id="quiz">


                <div className="panelHead">
                  <div className="panelTitle">{t.quizTitle}</div>
                  <div className="panelSub">{t.quizSub}</div>
                  <div className="progress" style={{ ["--p"]: `${((step + 1) / QUESTIONS.length) * 100}%` }}>
                    <div />
                  </div>
                </div>

                <div className="panelBody panelBodyAnim" key={quiz.id}>
                    <div className="qTitle">
                      {step + 1} / {QUESTIONS.length}
                    </div>
                    <div className="qTitle" style={{ marginTop: -6 }}>
                      {quizQuestionTitle}
                    </div>

                    <div className="optGrid">
                      {quiz.options.map((o) => {
                        const selected = answers[quiz.id] === o.v;
                        return (
                          <button
                            key={o.v}
                            className={`opt ${selected ? "sel" : ""}`}
                            onClick={() => handlePickOption(quiz.id, o.v)}
                          >
                            {o.l[lang] || o.l.en}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                <div className="panelActions">
                  <button className="btn" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>
                    {t.back}
                  </button>

                  {step < QUESTIONS.length - 1 ? (
                    <button
                      className="btn btnPrimary"
                      onClick={() => setStep((s) => Math.min(QUESTIONS.length - 1, s + 1))}
                      disabled={!answers[quiz.id]}
                    >
                      {t.next}
                    </button>
                  ) : (
                    <button
                      className="btn btnPrimary"
                      onClick={() => completed && (setResultOpen(true), scrollToId("quiz"))}
                      disabled={!completed}
                    >
                      {t.showPlan}
                    </button>
                  )}
                </div>

                <div className="mini">{t.disclaimer}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="section sectionAlt" id="plans">
  <div className="container">
    <h2 className="h2">{t.prefixSectionTitle}</h2>
    <div className="muted" style={{ marginBottom: 16 }}>
      {t.prefixNote}
    </div>

    <div className="planStrip">
      {PLANS.map((p) => (
        <div key={p.id} className="planTile" style={{ backgroundImage: `url(${p.image})` }}>
          <div className="planTileOverlay">
            {/* ✅ ここ */}
            <div className="planTileTitle">{pickText(p.title, lang)}</div>
            {/* ✅ ここ */}
            <div className="planTileMeta">{pickText(p.why, lang)}</div>

            <div className="planTileChips">
              {p.stops.slice(0, 3).map((_, idx) => (
                <span key={idx} className="chip">
                  {typeof t.stopLabel === "function" ? t.stopLabel(idx + 1) : `Stop ${idx + 1}`}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
          <div className="timelineCard">
            <div className="timelineTitle">{t.sampleFlowTitle}</div>

            <div className="timelineRow">
              <div className="tNode">
                <div className="tDot" />
                <div className="tText">
                  <div className="tHead">{t.sampleStop1Head}</div>
                  <div className="tSub">{t.sampleStop1Sub}</div>
                </div>
              </div>

              <div className="tLine" />

              <div className="tNode">
                <div className="tDot" />
                <div className="tText">
                  <div className="tHead">{t.sampleStop2Head}</div>
                  <div className="tSub">{t.sampleStop2Sub}</div>
                </div>
              </div>

              <div className="tLine" />

              <div className="tNode">
                <div className="tDot" />
                <div className="tText">
                  <div className="tHead">{t.sampleStop3Head}</div>
                  <div className="tSub">{t.sampleStop3Sub}</div>
                </div>
              </div>
            </div>

            <div className="stack10 mt14">
              <a className="btn btnPrimary" href={omakaseFormUrl} target="_blank" rel="noreferrer">
                {t.requestOmakasePaid}
              </a>
              <div className="small" style={{ marginTop: 10 }}>
                {t.paymentAfterSubmission}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How */}
      <section className="section" id="how">
        <div className="container">
          <h2 className="h2">{t.howTitle}</h2>
          <div className="muted" style={{ marginTop: 8, maxWidth: 820 }}>
            {t.howLead}
          </div>

          {/* “希望 → Omakase → 予約” */}
          <div className="grid3" style={{ marginTop: 12 }}>
            <div className="card">
              <div className="cardTitle">{t.howStep1Title}</div>
              <div className="cardText">{t.howStep1Text}</div>
            </div>
            <div className="card">
              <div className="cardTitle">{t.howStep2Title}</div>
              <div className="cardText">{t.howStep2Text}</div>
            </div>
            <div className="card">
              <div className="cardTitle">{t.howStep3Title}</div>
              <div className="cardText">{t.howStep3Text}</div>
            </div>
          </div>




        </div>
      </section>

      {/* Story */}
      <section className="section" id="story">
        <div className="container">
          <div className="storyHeader">
            <h2 className="h2">{t.storyTitle}</h2>
            <div className="muted" style={{ maxWidth: 820 }}>
              {t.storyLead}
            </div>
          </div>

          <div className="storyGrid">
            <div className="storyCard">
              <div className="storyKicker">{t.storyKicker1}</div>
              <div className="storyTitle">{t.storyHead1}</div>
              <div className="storyText">{t.storyBody1}</div>
            </div>

            <div className="storyCard">
              <div className="storyKicker">{t.storyKicker2}</div>
              <div className="storyTitle">{t.storyHead2}</div>
              <div className="storyText">{t.storyBody2}</div>

              <div className="storyPills">
                <div className="trustPill">{t.storyPill1}</div>
                <div className="trustPill">{t.storyPill2}</div>
                <div className="trustPill">{t.storyPill3}</div>
              </div>
            </div>

            <div className="storyCard">
              <div className="storyKicker">{t.storyKicker3}</div>
              <div className="storyTitle">{t.storyHead3}</div>
              <div className="storyText">{t.storyBody3}</div>

              <div className="storyCtaRow">
  <button className="btn btnPrimary btnBlock" onClick={() => scrollToId("quiz")}>
    {t.storyCta1}
  </button>
  <a className="btn btnBlock" href={CONFIG.instagramProfileUrl} target="_blank" rel="noreferrer">
    {t.storyCta2}
  </a>
</div>
            </div>

          </div>

          {/* Founders */}
          <div className="foundersHeader">
            <h2 className="h2">{t.foundersTitle}</h2>
            <div className="muted" style={{ maxWidth: 820 }}>
              {t.foundersLead}
            </div>
          </div>

          <div className="foundersGrid">
            <div className="founderCard">
              <div className="founderTop">
                <div className="avatar avatarW">
                  <span className="avatarInitial">W</span>
                </div>
                <div>
                  <div className="founderName">Wataru</div>
                  <div className="founderRole">{t.role1}</div>
                </div>
              </div>
              <div className="founderBio">{t.bio1}</div>
              <div className="founderTags">
                <span className="chip">{t.tag1a}</span>
                <span className="chip">{t.tag1b}</span>
                <span className="chip">{t.tag1c}</span>
              </div>
            </div>

            <div className="founderCard">
              <div className="founderTop">
                <div className="avatar avatarK">
                  <span className="avatarInitial">K</span>
                </div>
                <div>
                  <div className="founderName">Kei</div>
                  <div className="founderRole">{t.role2}</div>
                </div>
              </div>
              <div className="founderBio">{t.bio2}</div>
              <div className="founderTags">
                <span className="chip">{t.tag2a}</span>
                <span className="chip">{t.tag2b}</span>
                <span className="chip">{t.tag2c}</span>
              </div>
            </div>

            <div className="founderCard">
              <div className="founderTop">
                <div className="avatar avatarH">
                  <span className="avatarInitial">H</span>
                </div>
                <div>
                  <div className="founderName">Hiraku</div>
                  {/* ✅ CEO 明示は i18n の role3 で実施（例: "CEO / Strategy / Systems"） */}
                  <div className="founderRole">{t.role3}</div>
                </div>
              </div>
              <div className="founderBio">{t.bio3}</div>
              <div className="founderTags">
                <span className="chip">{t.tag3a}</span>
                <span className="chip">{t.tag3b}</span>
                <span className="chip">{t.tag3c}</span>
              </div>
            </div>
          </div>

          <div className="foundersBottom">
            <div className="card">
              <div className="cardTitle">{t.promiseTitle}</div>
              <div className="cardText">{t.promiseBody}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section sectionAlt" id="pricing">
        <div className="container">
          <h2 className="h2">{t.pricingTitle}</h2>

          <div className="grid3" style={{ marginTop: 12 }}>


            <div className="card">
              <div className="cardTitle">{t.pricingOmakaseTitle}</div>
              <div className="cardText">{t.pricingOmakaseText}</div>
              <div style={{ marginTop: 12 }}>
                <a className="btn btnPrimary btnBlock" href={omakaseFormUrl} target="_blank" rel="noreferrer">
                  {t.pricingOmakaseCta}
                </a>
              </div>
              <div className="small" style={{ marginTop: 10 }}>
                {t.pricingOmakaseNote}
              </div>
            </div>

            <div className="card">
              <div className="cardTitle">{t.pricingGroupTitle}</div>
              <div className="cardText">{t.pricingGroupText}</div>
              <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
                <a className="btn btnBlock" href={CONFIG.instagramProfileUrl} target="_blank" rel="noreferrer">
                  {t.pricingGroupCta}
                </a>
              </div>
            </div>

            <div className="card">
            <div className="cardTitle">{t.howQuizCtaTitle}</div>
              <div className="cardText">{t.howQuizCtaText}</div>
              <div style={{ marginTop: 18 }}>
              <button className="btn btnPrimary btnBlock" onClick={() => scrollToId("quiz")}>
                  {t.heroCtaPrimary}
                </button>
              </div>
              <div className="small" style={{ marginTop: 10 }}>
                {t.quizHookNote}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionAlt" id="instagram">
        <div className="container">
          <h2 className="h2">Instagram</h2>

                {/* Instagram */}
                <div style={{ marginTop: 14, maxWidth: 620 }}>
            <div className="card">
              <div className="cardTitle">{t.howInstagramTitle}</div>
              <div className="cardText">{t.howInstagramText}</div>
              <div className="mt12">
                <a className="btn btnPrimary btnBlock" href={CONFIG.instagramProfileUrl} target="_blank" rel="noreferrer">
                  {t.openInstagram}
                </a>
              </div>
            </div>
          </div>

          {/* <div style={{ marginTop: 14, maxWidth: 720 }}>
            <InstagramEmbed
              postUrl={CONFIG.instagramEmbedPostUrl}
              profileUrl={CONFIG.instagramProfileUrl}
              title={t.howInstagramTitle}
              subtitle={t.igLatest}
              fallbackText={t.igFallback}
              openText={t.openInstagram}
            />
          </div> */}
          </div>
      </section>

      {/* Footer */}
      <div className="footer">
        <div className="container footerInner">
          <div>
            <div className="brand">
              <img src="/logo.png" alt="Logo" className="brandLogo" />
              <span>{CONFIG.brandName}</span>
            </div>
            <div className="small">{CONFIG.tagline}</div>
          </div>

          <div className="small" style={{ maxWidth: 720 }}>
            {t.disclaimer}
            <br />
            <span style={{ opacity: 0.9 }}>{t.refundNote}</span>
          </div>
        </div>
      </div>

      {/* Result modal */}
      <Modal open={resultOpen} onClose={() => setResultOpen(false)}>
  {!pickedPlan ? null : (
    <>
      <div style={{ fontWeight: 900, fontSize: 18 }}>{t.resultTitle}</div>

      {/* ✅ ここ：プランタイトル */}
      <div className="muted" style={{ marginTop: 6 }}>
        {pickText(pickedPlan.title, lang)}
      </div>

      <div className="resultTimeline">
        {pickedPlan.stops.map((s, i) => (
          <div className="rtRow" key={i}>
            <div className="rtRail">
              <div className="rtDot" />
              {i < pickedPlan.stops.length - 1 && <div className="rtLine" />}
            </div>

            <div className="rtCard">
              <div className="rtTop">
                {/* ✅ ここ：Stepラベル */}
                <div className="rtStep">
                  {typeof t.stepLabel === "function" ? t.stepLabel(i + 1) : `STEP ${i + 1}`}
                </div>

                {/* ✅ ここ：Stopラベル + 店名（stop名） */}
                <div className="rtTitle">
                  {(typeof t.stopLabelInline === "function"
                    ? t.stopLabelInline(s.step ?? i + 1)
                    : `Stop ${s.step ?? i + 1}`) + `: ${pickText(s.name, lang)}`}
                </div>
              </div>

              <div className="rtBody">
                <div className="rtImg" style={{ backgroundImage: `url(${s.image || pickedPlan.image})` }} />

                <div className="rtText">
                  {/* ✅ ここ：note */}
                  <div className="rtNote">{pickText(s.note, lang)}</div>

                  {/* ✅（任意）Area/Vibe の value をラベルに変換して表示 */}
                  <div className="rtMeta">
                    {answers.area ? `${t.areaLabel}: ${labelFromQuestion("area", answers.area, lang, QUESTIONS)}` : ""}
                    {answers.vibe ? ` • ${t.vibeLabel}: ${labelFromQuestion("vibe", answers.vibe, lang, QUESTIONS)}` : ""}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: 14 }}>
        <div className="cardTitle">{t.resultWhyTitle}</div>
        {/* ✅ ここ：why */}
        <div className="cardText">{pickText(pickedPlan.why, lang)}</div>
      </div>

      <div className="modalCtas">
        <a className="btn btnPrimary btnBlock" href={omakaseFormUrl} target="_blank" rel="noreferrer">
          {t.pricingOmakaseCta}
        </a>
        <div className="small" style={{ marginTop: 10 }}>
          {t.paymentAfterSubmission}
        </div>
      </div>

      <div style={{ marginTop: 10 }}>
        <a className="small" href={omakaseFormUrl} target="_blank" rel="noreferrer">
          {t.resultOpenFormAgain}
        </a>
      </div>
    </>
  )}
</Modal>
    </>
  );
}