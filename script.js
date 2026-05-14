const topics=[
  {
    title:"障がいのある人のくらし",
    icon:"♿",
    level:"くらし・人権",
    free:"このテーマは、だれでも安全に生活できるまちをつくる学びである。なぜなら〜からである、体のちがいがあっても同じように使えるしくみが必要だからである。例えば〜、学校の入口にスロープがあると車いすでも教室へ行きやすい。すると、みんなが同じ場所で学べる社会に近づく。",
    points:{
      "バリアフリーとは":"バリアフリーは、だれもが使いやすいように物や場所を工夫することである。なぜなら〜からである、段差や見えにくさがあると生活でこまる人が出るからである。例えば〜、点字ブロックや音の信号があると道を安全に歩きやすくなる。すると、外に出る不安がへって自分でできることがふえる。",
      "困っていること":"障がいのある人は、移動や情報の受け取りでこまることがある。なぜなら〜からである、階段しかない場所やむずかしい言葉の案内があるからである。例えば〜、お店のメニューが小さい字だけだと内容が分かりにくい。すると、行きたい場所をあきらめる人が出てしまう。",
      "まとめ":"大事なのは、設備をふやすことと人の思いやりを合わせることである。なぜなら〜からである、道具だけでは気づけないこまりごともあるからである。例えば〜、ドアをおさえたり、やさしい言葉で案内したりすると安心できる。すると、だれもが助け合ってくらせるまちになる。"
    }
  },
  {
    title:"高齢者の人権",
    icon:"👵",
    level:"人権・福祉",
    free:"このテーマは、お年よりが安心して生きるための社会を考える学びである。なぜなら〜からである、日本では高齢者がふえて支え合いがもっと必要になるからである。例えば〜、近所で声かけや見守りをすると一人の不安が小さくなる。すると、年をとっても自分らしく生活しやすくなる。",
    points:{
      "高齢者が増える理由":"高齢者が増えるのは、子どもの数がへり、長生きする人がふえたからである。なぜなら〜からである、医りょうの進歩で病気をなおしやすくなったからである。例えば〜、むかしなら重かった病気でも今は治療で回復できることがある。すると、社会全体で介護や助け合いの計画がより大切になる。",
      "困りごと":"高齢者は、孤独や詐欺の被害でこまることがある。なぜなら〜からである、一人でいる時間が長いと相談しにくく、うその電話を信じやすいからである。例えば〜、『お金をすぐ送って』という電話にだまされることがある。すると、心とお金の両方で大きなダメージを受けてしまう。",
      "まとめ":"地域のつながりを強くすることが大切である。なぜなら〜からである、近くに話せる人がいるとトラブルに早く気づけるからである。例えば〜、町内会や学校との交流会で顔見知りをふやす。すると、困ったときにすぐ助けをよべる安心な地域になる。"
    }
  },
  {
    title:"多様な人々の人権",
    icon:"🌈",
    level:"人権・共生",
    free:"このテーマは、ちがいを認めてみんなが自分らしく生きることを学ぶ内容である。なぜなら〜からである、見た目や考え方のちがいで仲間外れが起こることがあるからである。例えば〜、文化のちがう友だちの行事を知ると理解が深まる。すると、教室や地域で安心して意見を言える空気ができる。",
    points:{
      "多様性":"多様性とは、人の国・文化・性別・考え方がいろいろあることを大切にすることである。なぜなら〜からである、ちがいを知ると新しい考えを学べるからである。例えば〜、発表で別の国の生活習慣を聞くと自分の当たり前を見直せる。すると、相手をせめるより理解しようとする行動がふえる。",
      "課題":"課題は、偏見や誤解で人をきずつけてしまうことである。なぜなら〜からである、知らないことを思いこみで判断するとまちがえやすいからである。例えば〜、うわさだけで『この人はこうだ』と決めつけるのは危険である。すると、いじめや差別につながるおそれが高くなる。",
      "まとめ":"ちがいを受け入れるには、話を聞いて学び続けることが必要である。なぜなら〜からである、知るほど相手の気持ちを想像しやすくなるからである。例えば〜、相手の立場になって言葉を選ぶとケンカがへる。すると、だれもが安心して参加できる社会に近づく。"
    }
  }
];

const nav=document.getElementById("topic-nav"); const topicCard=document.getElementById("topic-card"); const toast=document.getElementById("toast");
const ids=["memo-title","memo-fact","memo-surprise","memo-action","sum-problem","sum-cause","sum-solution","sum-opinion","sum-one","compare-a","compare-b","compare-common","compare-judge"];
const fields=Object.fromEntries(ids.map(id=>[id,document.getElementById(id)]));
const state={showQuestions:true,showChallenge:true,level:2};

function questionBlock(label,q){return `<section class="block question"><h3>🧠 必ず文章で答える問い</h3><p><strong>${label}</strong> ${q}</p></section>`;}
function renderPointContent(v){const items=Array.isArray(v)?v:[v]; return `<ul>${items.map(x=>`<li>${x}</li>`).join("")}</ul>`;}
function renderTopic(i){const t=topics[i]; if(!t) return; document.querySelectorAll('.topic-btn').forEach((b,idx)=>b.classList.toggle('active',idx===i));
const blocks=Object.entries(t.points).map(([k,v])=>`<section class="block"><h3>🔎 ${k}</h3>${renderPointContent(v)}</section>${state.showQuestions?questionBlock("問い:",`「${k}」について、なぜそう言えるのかを理由と具体例を使って説明し、自分の生活とどうつながるかまで書こう。`):""}`).join("");
const challenge=state.showChallenge?`<details class="block"><summary>🚪 さらに考えたい人へ</summary><p>10年後この問題はどう変化するか予測し、他テーマと比較しながら、解決策を2つ提案して理由を書こう。</p></details>`:"";
const safety=`<section class="block guarantee"><h3>🛟 これだけは書けるBOX</h3><p>穴埋め：この問題は（　　　）です。理由は（　　　）だからです。例えば（　　　）。私は（　　　）と考えます。</p><p class="prompt">ヒント：理由→「なぜ？」、具体例→「たとえば学校・家・地域」</p></section>`;
 topicCard.innerHTML=`<div class="topic-header"><h2>${t.icon} ${t.title}</h2><span class="badge">${t.level}</span></div><p>${t.free}</p>${blocks}${challenge}${safety}`;
 if(!fields["memo-title"].value.trim()) fields["memo-title"].value=t.title; save(); updateAllCounters();}

function countText(el,counterId){const n=el.value.trim().length,min=Number(el.dataset.min||0),target=Number(el.dataset.target||0); const c=document.getElementById(counterId); if(!c) return; c.textContent=`最低${min}字 / 目標${target}字 ｜ 現在${n}字`; c.className=`counter ${n<min?'low':'ok'}`;}
function updateAllCounters(){countText(fields['memo-fact'],'count-fact');countText(fields['memo-surprise'],'count-surprise');countText(fields['memo-action'],'count-action');countText(fields['sum-opinion'],'count-opinion');countText(fields['sum-one'],'count-one');countText(fields['compare-judge'],'count-judge');}
function save(){localStorage.setItem('social-study-memo-v2',JSON.stringify(Object.fromEntries(Object.entries(fields).map(([k,v])=>[k,v.value]))));}
function load(){try{const d=JSON.parse(localStorage.getItem('social-study-memo-v2')||'{}'); Object.entries(fields).forEach(([k,v])=>v.value=d[k]||"");}catch{}}
function showToast(m,color='var(--ok)'){toast.textContent=m;toast.style.color=color;clearTimeout(showToast.t);showToast.t=setTimeout(()=>toast.textContent="",2000);} 

Object.values(fields).forEach(f=>f.addEventListener('input',()=>{save();updateAllCounters();}));

topics.forEach((t,i)=>{const b=document.createElement('button');b.type='button';b.className='topic-btn';b.textContent=`${t.icon} ${t.title}`;b.onclick=()=>renderTopic(i);nav.appendChild(b);});

document.getElementById('toggle-questions').onchange=(e)=>{state.showQuestions=e.target.checked;renderTopic([...document.querySelectorAll('.topic-btn')].findIndex(b=>b.classList.contains('active'))||0)};
document.getElementById('toggle-challenge').onchange=(e)=>{state.showChallenge=e.target.checked;renderTopic([...document.querySelectorAll('.topic-btn')].findIndex(b=>b.classList.contains('active'))||0)};
document.getElementById('feature-level').onchange=(e)=>{state.level=Number(e.target.value);document.getElementById('writing-guide').style.display=state.level>=2?'block':'none';document.querySelector('.compare-frame').style.display=state.level>=2?'block':'none';document.querySelector('.summary-template').style.display=state.level>=3?'block':'none';};

document.getElementById('slide-btn').onclick=()=>{const slides=document.getElementById('slides');const items=[['テーマ',fields['memo-title'].value],['事実',fields['memo-fact'].value],['気づき',fields['memo-surprise'].value],['行動',fields['memo-action'].value],['問題',fields['sum-problem'].value],['原因',fields['sum-cause'].value],['解決策',fields['sum-solution'].value],['自分の考え',fields['sum-opinion'].value]];slides.innerHTML=items.filter(([,v])=>v.trim()).map(([k,v],idx)=>`<article class="slide"><h4>スライド${idx+1}: ${k}</h4><p>${v}</p></article>`).join(''); showToast('🎤 発表モードを作成したよ');};

document.getElementById('copy-btn').onclick=async()=>{const txt=ids.map(id=>`${id}:\n${fields[id].value}`).join('\n\n'); try{await navigator.clipboard.writeText(txt);showToast('📋 コピーしたよ');}catch{showToast('コピーできませんでした','#a35f00')}};
document.getElementById('clear-btn').onclick=()=>{Object.values(fields).forEach(f=>f.value='');localStorage.removeItem('social-study-memo-v2');updateAllCounters();showToast('🧹 消去したよ','#b71c1c')};

load(); renderTopic(0); updateAllCounters();
