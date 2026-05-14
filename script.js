const topics=[{title:"障がいのある人のくらし",icon:"♿",level:"くらし・人権",free:"年齢や障がいの有無に関係なく、だれでも安全に生活できる社会をめざすテーマ。",points:{"バリアフリーとは":["だれでも安全に使えるようにする工夫のこと","スロープ・エレベーター・点字ブロック・音の信号・広いトイレなど"],"困っていること":["移動しにくい","情報が分かりにくい"],"まとめ":["設備だけでなく人の理解も必要"]}},{title:"高齢者の人権",icon:"👵",level:"人権・福祉",free:"日本の高齢化と安心して生きるために必要なことを考える。",points:{"高齢者が増える理由":["少子化","医療の発達"],"困りごと":["孤独","詐欺被害"],"まとめ":["地域のつながりが必要"]}},{title:"多様な人々の人権",icon:"🌈",level:"人権・共生",free:"違いを認めて尊重し、だれもが自分らしく生きる社会を学ぶ。",points:{"多様性":["国や文化","性別や価値観"],"課題":["偏見","誤解"],"まとめ":["違いを受け入れることが大切"]}}];

const nav=document.getElementById("topic-nav"); const topicCard=document.getElementById("topic-card"); const toast=document.getElementById("toast");
const ids=["memo-title","memo-fact","memo-surprise","memo-action","sum-problem","sum-cause","sum-solution","sum-opinion","sum-one","compare-a","compare-b","compare-common","compare-judge"];
const fields=Object.fromEntries(ids.map(id=>[id,document.getElementById(id)]));
const state={showQuestions:true,showChallenge:true,level:2};

function questionBlock(label,q){return `<section class="block question"><h3>🧠 必ず文章で答える問い</h3><p><strong>${label}</strong> ${q}</p></section>`;}
function renderTopic(i){const t=topics[i]; if(!t) return; document.querySelectorAll('.topic-btn').forEach((b,idx)=>b.classList.toggle('active',idx===i));
const blocks=Object.entries(t.points).map(([k,v])=>`<section class="block"><h3>🔎 ${k}</h3><ul>${v.map(x=>`<li>${x}</li>`).join("")}</ul></section>${state.showQuestions?questionBlock("問い:",`「${k}」について、なぜそう言えるのかを理由と具体例を使って説明し、自分の生活とどうつながるかまで書こう。`):""}`).join("");
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
