import React, { useEffect, useMemo, useState } from "react";
import { CONFIG } from "./config";
import { LANGS, STRINGS } from "./i18n";
import { FORM_FIELDS, buildGoogleFormPrefillUrl } from "./formPrefill";

// ===== Plans (店名出しすぎない運用) =====
const PLANS = [
  {
    id: "central-3",
    image: "/prefix/p1.jpg",
    title: "Central Tokyo: 3 Stops, Zero Guessing",
    vibe: ["quiet", "classic", "business"],
    budget: ["mid", "high"],
    area: ["central", "ginza"],
    must: ["sake", "yakitori", "whisky"],
    stops: [
      {
        step: 1,
        key: "yakitori",
        name: "Hidden Yakitori",
        note: "Charcoal, perfect highballs, no tourist traps.",
        image: "/stops/central_1_yakitori.jpg",
      },
      {
        step: 2,
        key: "sake",
        name: "Sake + Seasonal plates",
        note: "Pairings that feel ‘Tokyo’.",
        image: "/stops/central_2_sake.jpg",
      },
      {
        step: 3,
        key: "bar",
        name: "Late-night bar",
        note: "Clean finish — quiet and classy.",
        image: "/stops/central_3_bar.jpg",
      },
    ],
    
    why: "Best first impression of Tokyo after-work drinking.",
  },
  {
    id: "roppongi-akasaka",
    image: "/prefix/p2.jpg",
    title: "Roppongi → Akasaka: Lively but polished",
    vibe: ["lively", "business", "classic"],
    budget: ["mid", "high"],
    area: ["roppongi", "akasaka", "central"],
    must: ["barhop", "yakitori", "whisky"],
    stops: [
      {
        step: 1,
        key: "izakaya",
        name: "Izakaya classics",
        note: "Fast, fun, reliable.",
        image: "/stops/roppongi_1_izakaya.jpg",
      },
      {
        step: 2,
        key: "sake",
        name: "Sake corner",
        note: "Local pours, short menu, high hit-rate.",
        image: "/stops/roppongi_2_sake.jpg",
      },
      {
        step: 3,
        key: "cocktail",
        name: "Cocktail bar",
        note: "A proper Tokyo ending.",
        image: "/stops/roppongi_3_cocktail.jpg",
      },
    ],
    
    why: "Great for friends or business colleagues.",
  },
  {
    id: "shibuya-casual",
    image: "/prefix/p3.jpg",
    title: "Shibuya: Casual izakaya + standing bar",
    vibe: ["casual", "lively"],
    budget: ["low", "mid"],
    area: ["shibuya", "west"],
    must: ["beer", "barhop", "streetfood"],
    stops: [
      {
        step: 1,
        key: "casual",
        name: "Casual izakaya",
        note: "Easy orders, big energy.",
        image: "/stops/shibuya_1_casual.jpg",
      },
      {
        step: 2,
        key: "tachinomi",
        name: "Tachinomi (standing bar)",
        note: "Local vibe, quick sips.",
        image: "/stops/shibuya_2_tachinomi.jpg",
      },
    ],    
    why: "Best if you want speed + fun + options.",
  },
  {
    id: "oldtokyo",
    image: "/prefix/p4.jpg",
    title: "Old Tokyo: Traditional izakaya crawl",
    vibe: ["classic", "casual"],
    budget: ["mid"],
    area: ["east"],
    must: ["seafood", "sake", "classic"],
    stops: [
      {
        step: 1,
        key: "oldschool",
        name: "Old-school izakaya",
        note: "Handwritten menus, warm lights.",
        image: "/stops/oldtokyo_1_oldschool.jpg",
      },
      {
        step: 2,
        key: "seafood",
        name: "Grilled seafood",
        note: "Charcoal + ocean.",
        image: "/stops/oldtokyo_2_seafood.jpg",
      },
      {
        step: 3,
        key: "sake",
        name: "Sake spot",
        note: "Quiet pours, good conversation.",
        image: "/stops/oldtokyo_3_sake.jpg",
      },
    ],
    
    why: "For atmosphere and story, not trendy hype.",
  },
  {
    id: "date-quiet",
    image: "/prefix/p5.jpg",
    title: "Quiet date night: small plates + wine/sake",
    vibe: ["quiet", "date"],
    budget: ["mid", "high"],
    area: ["south", "central"],
    must: ["wine", "smallplates", "quiet"],
    stops: [
      {
        step: 1,
        key: "smallplates",
        name: "Small plates",
        note: "Seasonal, subtle, perfect pacing.",
        image: "/stops/date_1_smallplates.jpg",
      },
      {
        step: 2,
        key: "wine",
        name: "Wine/Sake bar",
        note: "Low volume, high taste.",
        image: "/stops/date_2_winebar.jpg",
      },
    ],
    
    why: "For couples who hate crowds.",
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
  return PLANS
    .map((p) => ({ p, s: scorePlan(p, answers) }))
    .sort((x, y) => y.s - x.s)[0]?.p ?? PLANS[0];
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

function InstagramEmbed({ postUrl, profileUrl }) {
  // instagram embed.jsが読み込まれている前提。描画後に再処理。
  useEffect(() => {
    if (window?.instgrm?.Embeds?.process) {
      window.instgrm.Embeds.process();
    }
  }, [postUrl]);

  return (
    <div className="card">
      <div className="cardTitle">Instagram</div>
      <div className="cardText">Latest reel / post</div>
      <div style={{ marginTop: 10 }}>
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={postUrl}
          data-instgrm-version="14"
          style={{ background: "#fff", borderRadius: 14 }}
        />
      </div>
      <div className="small" style={{ marginTop: 10 }}>
        If it doesn’t load,{" "}
        <a className="navLink" href={profileUrl} target="_blank" rel="noreferrer">
          open Instagram
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
      [FORM_FIELDS.recommendedPlan]: pickedPlan.title,
      [FORM_FIELDS.paid]: "yes",
    });
  }, [answers, pickedPlan]);

  const quiz = QUESTIONS[step];

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
              <a
                className="btn btnPrimary btnBlock"
                href={CONFIG.googleFormOmakaseBaseUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t.goToForm}
              </a>
              {!paid && (
                <p className="small" style={{ marginTop: 12 }}>
                  If you arrived here without payment, please return and use the Omakase button.
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
            <span className="brandMark" />
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
              {t.heroCtaPrimary}
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
                </div>
              </div>

              {/* Glass quiz panel */}
              <div className="glassPanel" id="quiz">
                <div className="panelHead">
                  <div className="panelTitle">{t.quizTitle}</div>
                  <div className="panelSub">{t.quizSub}</div>
                  <div className="progress" style={{ ["--p"]: `${((step + 1) / QUESTIONS.length) * 100}%` }}>
                    <div />
                  </div>
                </div>

                <div className="panelBody">
                  <div className="qTitle">
                    {step + 1} / {QUESTIONS.length}
                  </div>
                  <div className="qTitle" style={{ marginTop: -6 }}>
                    {(() => {
                      const titles = {
                        with: { en: "Who are you traveling with?", ja: "誰と飲みますか？", zh: "和谁一起？", es: "¿Con quién?" },
                        vibe: { en: "What vibe tonight?", ja: "雰囲気は？", zh: "今晚氛围？", es: "¿Qué ambiente?" },
                        budget: { en: "Budget per person?", ja: "予算/人は？", zh: "人均预算？", es: "¿Presupuesto?" },
                        area: { en: "Preferred area?", ja: "エリアは？", zh: "区域偏好？", es: "¿Zona?" },
                        must: { en: "Must-have?", ja: "絶対条件は？", zh: "必选项？", es: "¿Imprescindible?" },
                      };
                      return titles[quiz.id][lang] || titles[quiz.id].en;
                    })()}
                  </div>

                  <div className="optGrid">
                    {quiz.options.map((o) => {
                      const selected = answers[quiz.id] === o.v;
                      return (
                        <button
                          key={o.v}
                          className={`opt ${selected ? "sel" : ""}`}
                          onClick={() => setAnswers((a) => ({ ...a, [quiz.id]: o.v }))}
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
                    <button className="btn btnPrimary" onClick={() => setStep((s) => Math.min(QUESTIONS.length - 1, s + 1))} disabled={!answers[quiz.id]}>
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
      Prefix is a preview. Exact restaurant names are shared after paid request to protect quality.
    </div>

    <div className="planStrip">
      {PLANS.map((p) => (
        <div key={p.id} className="planTile" style={{ backgroundImage: `url(${p.image})` }}>
          <div className="planTileOverlay">
            <div className="planTileTitle">{p.title}</div>
            <div className="planTileMeta">{p.why}</div>
            <div className="planTileChips">
              {p.stops.slice(0, 3).map((s, idx) => (
                <span key={idx} className="chip">{`Stop ${idx + 1}`}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="timelineCard">
      <div className="timelineTitle">A sample night flow</div>
      <div className="timelineRow">
        <div className="tNode">
          <div className="tDot" />
          <div className="tText">
            <div className="tHead">Stop 1</div>
            <div className="tSub">Hidden yakitori & highball</div>
          </div>
        </div>
        <div className="tLine" />
        <div className="tNode">
          <div className="tDot" />
          <div className="tText">
            <div className="tHead">Stop 2</div>
            <div className="tSub">Sake + seasonal plates</div>
          </div>
        </div>
        <div className="tLine" />
        <div className="tNode">
          <div className="tDot" />
          <div className="tText">
            <div className="tHead">Stop 3</div>
            <div className="tSub">Late-night bar (quiet finish)</div>
          </div>
        </div>
      </div>

      <div className="stack10 mt14">
        <a className="btn btnPrimary" href={omakaseFormUrl} target="_blank" rel="noreferrer">
          Request Omakase (paid)
        </a>
        <div className="small" style={{ marginTop: 10 }}>
          Form → Payment link appears after submission.
        </div>
      </div>
    </div>
  </div>
</section>


      {/* How */}
      <section className="section" id="how">
        <div className="container">
          <h2 className="h2">{t.howTitle}</h2>
          <div className="grid3" style={{ marginTop: 12 }}>
            <div className="card">
              <div className="cardTitle">1) Quiz</div>
              <div className="cardText">Answer 5 questions → instant Prefix recommendation.</div>
            </div>
            <div className="card">
              <div className="cardTitle">2) Omakase</div>
              <div className="cardText">Pay $30 → tell constraints → we draft a night.</div>
            </div>
            <div className="card">
              <div className="cardTitle">3) Reservation help</div>
              <div className="cardText">If you approve, we attempt reservations where possible.</div>
            </div>
          </div>

          <div style={{ marginTop: 14, maxWidth: 620 }}>
            <div className="card">
              <div className="cardTitle">Instagram</div>
              <div className="cardText">Social proof + vibe. Huge for conversion.</div>
              <div className="mt12">
                <a className="btn btnPrimary btnBlock" href={CONFIG.instagramProfileUrl} target="_blank" rel="noreferrer">
                  Open Instagram
                </a>
              </div>
            </div>
          </div>

          {/* 埋め込み（任意） */}
          <div style={{ marginTop: 14, maxWidth: 720 }}>
            <InstagramEmbed postUrl={CONFIG.instagramEmbedPostUrl} profileUrl={CONFIG.instagramProfileUrl} />
          </div>
        </div>
      </section>

      {/* Pricing */}

        <section className="section sectionAlt" id="pricing">
          <div className="container">
            <h2 className="h2">{t.pricingTitle}</h2>

            <div className="grid3" style={{ marginTop: 12 }}>
              {/* Prefix = 例（リンクなし） */}
              <div className="card">
                <div className="cardTitle">Prefix (Preview)</div>
                <div className="cardText">
                  Free preview on this page — sample routes & “stops” only.  
                  Restaurant names are not shown.
                </div>
                <div style={{ marginTop: 12 }}>
                  <button className="btn btnBlock" onClick={() => scrollToId("plans")}>
                    See Prefix examples
                  </button>
                </div>
              </div>

              {/* Omakase = フォームへ */}
              <div className="card">
                <div className="cardTitle">Omakase</div>
                <div className="cardText">$30 — custom plan + up to 3 rerolls.</div>
                <div style={{ marginTop: 12 }}>
                  <a className="btn btnPrimary btnBlock" href={omakaseFormUrl} target="_blank" rel="noreferrer">
                    Request Omakase ($30)
                  </a>
                </div>
                <div className="small" style={{ marginTop: 10 }}>
                  Submit the form first — payment link appears after submission.
                </div>
              </div>

              {/* Group = いったんメール/Instagramへ */}
              <div className="card">
                <div className="cardTitle">Group night</div>
                <div className="cardText">6+ people — corporate / team. We’ll quote.</div>
                <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
                  <a className="btn btnBlock" href={CONFIG.instagramProfileUrl} target="_blank" rel="noreferrer">
                    DM on Instagram
                  </a>
                  {/* もしメール置きたいなら configに入れて使う */}
                  {/* <a className="btn btnBlock" href={`mailto:${CONFIG.contactEmail}`}>Email us</a> */}
                </div>
              </div>
            </div>
          </div>
        </section>


      {/* Footer */}
      <div className="footer">
        <div className="container footerInner">
          <div>
            <div className="brand">
              <span className="brandMark" />
              <span>{CONFIG.brandName}</span>
            </div>
            <div className="small">{CONFIG.tagline}</div>
          </div>
          <div className="small" style={{ maxWidth: 720 }}>
            {t.disclaimer}
            <br />
            <span style={{ opacity: 0.9 }}>
              Refund/cancel: You can define “planning fee is non-refundable once drafting starts” (recommended).
            </span>
          </div>
        </div>
      </div>

      {/* Result modal */}
      <Modal open={resultOpen} onClose={() => setResultOpen(false)}>
        {!pickedPlan ? null : (
          <>
            <div style={{ fontWeight: 900, fontSize: 18 }}>{t.resultTitle}</div>
            <div className="muted" style={{ marginTop: 6 }}>
              {pickedPlan.title}
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
                      <div className="rtStep">{`Step ${i + 1}`}</div>
                      <div className="rtTitle">{`Stop ${s.step ?? i + 1}: ${s.name}`}</div>
                    </div>

                    <div className="rtBody">
                      <div className="rtImg" style={{ backgroundImage: `url(${s.image || p.image})` }} />
                      <div className="rtText">
                        <div className="rtNote">{s.note}</div>
                        <div className="rtMeta">
                          {answers.area ? `Area: ${answers.area}` : ""} {answers.vibe ? `• Vibe: ${answers.vibe}` : ""}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>


            <div className="card" style={{ marginTop: 14 }}>
              <div className="cardTitle">Why it fits</div>
              <div className="cardText">{pickedPlan.why}</div>
            </div>

            <div className="modalCtas">
                  {/* ✅ 有料申込フォームへ（prefill） */}
                  <a className="btn btnPrimary btnBlock" href={omakaseFormUrl} target="_blank" rel="noreferrer">
                      Request Omakase ($30)
                    </a>
                    <div className="small" style={{ marginTop: 10 }}>
                      Submit the form first — payment link appears after submission.
                    </div>
                </div>


            <details style={{ marginTop: 14 }}>
              <summary className="small" style={{ cursor: "pointer" }}>
                Copy summary (paste into form if needed)
              </summary>
              <textarea
                className="textarea"
                readOnly
                value={[
                  `Recommended Plan: ${pickedPlan.title}`,
                  `with=${answers.with}`,
                  `vibe=${answers.vibe}`,
                  `budget=${answers.budget}`,
                  `area=${answers.area}`,
                  `must=${answers.must}`,
                ].join("\n")}
              />
            </details>

            <div style={{ marginTop: 10 }}>
              <a className="small" href={omakaseFormUrl} target="_blank" rel="noreferrer">
                (If already paid) Open the form again (prefilled)
              </a>
            </div>
          </>
        )}
      </Modal>
    </>
  );
}
