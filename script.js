const topics = [
  {
    title: "障がいのある人のくらし",
    icon: "♿",
    level: "くらし・人権",
    free: "年齢や障がいの有無に関係なく、だれでも安全に生活できる社会をめざすテーマ。",
    points: {
      "バリアフリーとは": [
        "だれでも安全に使えるようにする工夫のこと",
        "スロープ・エレベーター・点字ブロック・音の信号・広いトイレなど",
        "最近は『ユニバーサルデザイン』の考え方も広がっている"
      ],
      "困っていること": ["移動しにくい", "情報が分かりにくい", "災害時の避難が難しい", "周囲の理解不足"],
      "法律や支え": ["障害者基本法", "バリアフリー法", "障害者差別解消法", "福祉サービスや支援員"],
      "まとめ": ["設備だけでなく人の理解も必要", "社会全体で支え合うことが大切"]
    }
  },
  {
    title: "高齢者の人権",
    icon: "👵",
    level: "人権・福祉",
    free: "日本の高齢化と、高齢者が安心して生きるために必要なことを考えるテーマ。",
    points: {
      "高齢者が増える理由": ["少子化", "医療の発達で長生きする人が増えた"],
      "困りごと": ["体力や判断力の低下", "病気やけが", "孤独", "詐欺被害"],
      "支え": ["年金制度", "介護保険", "デイサービス・訪問介護", "地域の見守り"],
      "まとめ": ["医療・介護・地域のつながりが必要", "若い世代も支える意識が大切"]
    }
  },
  {
    title: "多様な人々の人権",
    icon: "🌈",
    level: "人権・共生",
    free: "違いを認めて尊重し、だれもが自分らしく生きる社会を学ぶテーマ。",
    points: {
      "どんな多様性がある？": ["国や文化", "性別や性のあり方", "考え方や価値観"],
      "課題": ["言葉の壁", "文化の違いによる誤解", "性差別", "ネット上の偏見"],
      "社会の取り組み": ["多言語対応", "男女共同参画", "LGBTQ理解教育", "差別を禁止する法律"],
      "まとめ": ["ちがいを受け入れ、尊重することが大切"]
    }
  },
  {
    title: "国民主権",
    icon: "🗳️",
    level: "政治",
    free: "政治の最終的な決定権は国民にある、という日本国憲法の大切な考え方。",
    points: {
      "内容": ["国のあり方を国民が決める"],
      "具体例": ["選挙で代表者を選ぶ", "世論が政策に影響する"],
      "ポイント": ["権利だけでなく責任もある", "政治に関心を持ち続ける"],
      "まとめ": ["参加することが民主主義を守る力になる"]
    }
  },
  {
    title: "選挙の投票率の低さ",
    icon: "📉",
    level: "政治",
    free: "投票率が低いと、どんな問題が起こるかを知り、参加の大切さを学ぶテーマ。",
    points: {
      "現状": ["日本は投票率が低く、特に若者の参加が少ない"],
      "理由": ["政治が難しく感じる", "一票で変わらないと思う", "忙しさ・無関心"],
      "問題点": ["一部の意見だけが反映される", "若い世代の声が届きにくい"],
      "改善方法": ["主権者教育", "SNSでの発信", "期日前投票や不在者投票"],
      "まとめ": ["選挙に参加しないと社会の方向を決めにくくなる"]
    }
  },
  {
    title: "税金の使い道",
    icon: "💴",
    level: "経済",
    free: "税金が社会をどう支えているか、そして透明で公平な使い方の大切さを学ぶテーマ。",
    points: {
      "税金とは": ["国民が国や地方に納めるお金"],
      "主な種類": ["消費税", "所得税"],
      "使い道": ["教育", "福祉", "公共事業", "警察・消防"],
      "問題点": ["使い道が分かりにくい", "無駄づかい"],
      "まとめ": ["社会を支えるために必要、透明性と公平性が大切"]
    }
  },
  {
    title: "裁判員制度",
    icon: "⚖️",
    level: "司法",
    free: "国民が裁判に参加する制度の目的・よい点・課題を学ぶテーマ。",
    points: {
      "内容": ["一般の国民が裁判官と一緒に判決を決める"],
      "目的": ["国民感覚を反映", "司法を身近にする"],
      "よい点": ["多様な意見が入る", "社会への理解が深まる"],
      "課題": ["精神的な負担", "内容が専門的で難しい"],
      "まとめ": ["公平で開かれた裁判を目指す仕組み"]
    }
  },
  {
    title: "平和主義",
    icon: "🕊️",
    level: "憲法・国際",
    free: "戦争をせず平和的に問題解決を目指す、日本の大切な考え方。",
    points: {
      "内容": ["戦争をしないで平和的に解決する"],
      "背景": ["過去の戦争の反省", "多くの命やくらしが失われた経験"],
      "まとめ": ["命を守るための重要な原則"]
    }
  },
  {
    title: "世界の争いごと",
    icon: "🌍",
    level: "国際",
    free: "世界でなぜ争いが起こるのか、そして解決に向けた取り組みを学ぶテーマ。",
    points: {
      "主な原因": ["資源の争い", "宗教・民族の違い", "領土問題"],
      "具体例": ["国同士の戦争", "内戦"],
      "解決への取り組み": ["国連の仲介", "PKO", "国際協力"],
      "まとめ": ["対話・理解・協力を長く続けることが必要"]
    }
  },
  {
    title: "日本の平和への取り組み",
    icon: "🇯🇵",
    level: "国際・安全",
    free: "日本が国内外で平和にどう関わっているかを学ぶテーマ。",
    points: {
      "基本": ["憲法にもとづく平和主義"],
      "具体的活動": ["自衛隊の防衛・災害救助", "国際協力", "PKO参加"],
      "役割": ["国内の安全を守る", "世界の平和に貢献する"],
      "まとめ": ["生活を支え、国際社会と協力することが平和を守ること"]
    }
  },
  {
    title: "全体まとめ（発展）",
    icon: "✨",
    level: "総合",
    free: "人権・政治・経済・国際問題の共通点をつかみ、自分の行動につなげるまとめ。",
    points: {
      "共通すること": ["すべての人が大切にされる社会をつくる"],
      "大切な行動": ["正しく知る", "関心をもつ", "自分にできる行動をする"],
      "まとめ": ["一人ひとりの意識が社会を変える力になる"]
    }
  }
];

const nav = document.getElementById("topic-nav");
const topicCard = document.getElementById("topic-card");
const fields = {
  title: document.getElementById("memo-title"),
  fact: document.getElementById("memo-fact"),
  surprise: document.getElementById("memo-surprise"),
  action: document.getElementById("memo-action")
};
const toast = document.getElementById("toast");

function renderTopic(index) {
  const topic = topics[index];
  if (!topic) return;

  document.querySelectorAll(".topic-btn").forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
  });

  const blocks = Object.entries(topic.points)
    .map(
      ([section, items]) => `
      <section class="block">
        <h3>🔎 ${section}</h3>
        <ul>
          ${items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>
    `
    )
    .join("");

  topicCard.innerHTML = `
    <div class="topic-header">
      <h2>${topic.icon} ${topic.title}</h2>
      <span class="badge">${topic.level}</span>
    </div>
    <p>${topic.free}</p>
    ${blocks}
  `;

  if (!fields.title.value.trim()) {
    fields.title.value = topic.title;
    saveMemo();
  }
}

function saveMemo() {
  localStorage.setItem("social-study-memo", JSON.stringify({
    title: fields.title.value,
    fact: fields.fact.value,
    surprise: fields.surprise.value,
    action: fields.action.value
  }));
}

function loadMemo() {
  const raw = localStorage.getItem("social-study-memo");
  if (!raw) return;
  try {
    const memo = JSON.parse(raw);
    Object.keys(fields).forEach((key) => {
      fields[key].value = memo[key] || "";
    });
  } catch {
    localStorage.removeItem("social-study-memo");
  }
}

function showToast(message, color = "var(--ok)") {
  toast.textContent = message;
  toast.style.color = color;
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.textContent = "";
  }, 2200);
}

topics.forEach((topic, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "topic-btn";
  button.textContent = `${topic.icon} ${topic.title}`;
  button.addEventListener("click", () => renderTopic(index));
  nav.appendChild(button);
});

Object.values(fields).forEach((field) => {
  field.addEventListener("input", saveMemo);
});

document.getElementById("copy-btn").addEventListener("click", async () => {
  const text = `【社会の問題しらべノート】\nテーマ: ${fields.title.value}\n\n分かったこと:\n${fields.fact.value}\n\n気づいたこと:\n${fields.surprise.value}\n\n自分にできること:\n${fields.action.value}`;

  try {
    await navigator.clipboard.writeText(text);
    showToast("📋 ノートをコピーしたよ！");
  } catch {
    showToast("コピーできませんでした。手動でコピーしてね。", "#a35f00");
  }
});

document.getElementById("clear-btn").addEventListener("click", () => {
  Object.values(fields).forEach((field) => {
    field.value = "";
  });
  localStorage.removeItem("social-study-memo");
  showToast("🧹 ノートを消したよ！", "#b71c1c");
});

loadMemo();
renderTopic(0);
