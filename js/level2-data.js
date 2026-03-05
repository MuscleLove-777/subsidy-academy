const LEVEL2_DATA = {
    id: 2,
    title: "申請と事業計画",
    icon: "📝",
    description: "補助金比較、申請フロー、採択される事業計画書の書き方",
    modules: [
        {
            id: 201,
            title: "補助金比較と目的別選択",
            duration: "15分",
            content: `
<h2>主要補助金 横断比較表</h2>
<table>
<thead><tr><th>項目</th><th>ものづくり</th><th>IT導入</th><th>事業再構築</th><th>小規模持続化</th></tr></thead>
<tbody>
<tr><td>補助上限額</td><td>750万〜4,000万円</td><td>5万〜450万円</td><td>2,000万〜1.5億円</td><td>50万〜200万円</td></tr>
<tr><td>補助率</td><td>1/2〜2/3</td><td>1/2〜3/4</td><td>1/2〜2/3</td><td>2/3〜3/4</td></tr>
<tr><td>対象者</td><td>中小企業</td><td>中小企業・小規模</td><td>中小企業・中堅企業</td><td>小規模事業者</td></tr>
<tr><td>主な対象経費</td><td>設備投資・システム</td><td>ITツール・ソフト</td><td>建物改修・設備投資</td><td>販路開拓・広報費</td></tr>
<tr><td>難易度</td><td>高め</td><td>低め</td><td>最も高い</td><td>中程度</td></tr>
<tr><td>採択率目安</td><td>約40〜50%</td><td>約60〜80%</td><td>約30〜50%</td><td>約50〜60%</td></tr>
<tr><td>認定支援機関</td><td>必要</td><td>不要（IT事業者）</td><td>必要</td><td>商工会議所等</td></tr>
</tbody>
</table>

<h2>目的別おすすめ補助金</h2>
<table>
<thead><tr><th>目的</th><th>おすすめ補助金</th></tr></thead>
<tbody>
<tr><td>新しい設備を導入したい</td><td>ものづくり補助金</td></tr>
<tr><td>業務ソフト・ITツールを入れたい</td><td>IT導入補助金</td></tr>
<tr><td>事業を大きく転換したい</td><td>事業再構築補助金</td></tr>
<tr><td>チラシ・HP等で販路を拡大したい</td><td>小規模事業者持続化補助金</td></tr>
<tr><td>これから起業したい</td><td>各種創業補助金</td></tr>
<tr><td>省エネ設備に更新したい</td><td>省エネ補助金</td></tr>
<tr><td>事業を引き継ぎたい</td><td>事業承継補助金</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q201_1", type: "choice", question: "採択率が最も高い補助金はどれですか？", options: ["ものづくり補助金", "IT導入補助金", "事業再構築補助金", "持続化補助金"], answer: 1, explanation: "IT導入補助金は採択率約60〜80%と最も高いです。" },
                { id: "q201_2", type: "choice", question: "難易度が最も高い補助金はどれですか？", options: ["ものづくり補助金", "IT導入補助金", "事業再構築補助金", "持続化補助金"], answer: 2, explanation: "事業再構築補助金は難易度が最も高い補助金です。" },
                { id: "q201_3", type: "choice", question: "チラシやHP作成での販路拡大に適した補助金は？", options: ["ものづくり補助金", "IT導入補助金", "事業再構築補助金", "小規模事業者持続化補助金"], answer: 3, explanation: "小規模事業者持続化補助金は販路開拓（チラシ、Web広告等）に適しています。" },
                { id: "q201_4", type: "choice", question: "IT導入補助金で不要なパートナーは？", options: ["IT導入支援事業者", "認定支援機関", "ITベンダー", "いずれも必要"], answer: 1, explanation: "IT導入補助金では認定支援機関は不要で、IT導入支援事業者との連携が必要です。" },
                { id: "q201_5", type: "fill", question: "事業再構築補助金の採択率はおよそ何%ですか？（X〜Y%の形式で）", answer: "30〜50%", explanation: "事業再構築補助金の採択率は約30〜50%です。" }
            ]
        },
        {
            id: 202,
            title: "申請から受給までの全フロー",
            duration: "25分",
            content: `
<h2>補助金の全体タイムライン</h2>
<div class="info-box warning">
<div class="info-box-title">重要：申請から受給まで約12〜18か月</div>
<p>公募 → 準備 → 申請 → 審査 → 採択 → 交付申請 → 事業実施 → 実績報告 → 確定検査 → 入金</p>
</div>

<h2>各ステップの詳細</h2>

<h3>STEP 1：公募情報の確認</h3>
<ul>
<li>中小企業庁 HP</li>
<li>ミラサポplus（中小企業向け補助金・総合支援サイト）</li>
<li>jGrants（電子申請ポータル）</li>
<li>商工会議所・商工会</li>
<li>認定支援機関（税理士・中小企業診断士等）</li>
</ul>

<h3>STEP 2：申請準備（1〜2か月）</h3>
<ul>
<li>事業計画書（最重要）</li>
<li>経費明細書</li>
<li>直近2期分の決算書（確定申告書）</li>
<li>賃金引上げ計画の誓約書</li>
<li>認定支援機関の確認書（必要な場合）</li>
<li>GビズIDプライムアカウント</li>
</ul>

<h3>STEP 3：電子申請</h3>
<p>GビズIDでログイン → jGrantsで申請フォームに入力 → 添付書類アップロード → 提出</p>

<h3>STEP 4：審査（1〜2か月）</h3>
<p>書類審査（外部有識者による採点）→ 一部口頭審査あり → 採択・不採択の通知</p>

<h3>STEP 5：交付申請（採択後2〜4週間）</h3>
<div class="info-box danger">
<div class="info-box-title">重要</div>
<p><strong>交付決定前に発注・契約・支払いを行った経費は補助対象外</strong>です。交付決定通知を受領してから初めて経費の支出が可能になります。</p>
</div>

<h3>STEP 6：補助事業の実施（3〜12か月）</h3>
<ul>
<li>交付決定後に発注・契約を行う</li>
<li>経費は事業期間内に支払いを完了する</li>
<li>50万円以上の経費は原則2社以上の相見積もり</li>
<li>計画変更がある場合は事前に承認を得る</li>
<li>証拠書類（見積書・発注書・納品書・請求書・領収書等）を保管</li>
</ul>

<h3>STEP 7：実績報告（事業完了後30日以内）</h3>
<ul>
<li>実績報告書</li>
<li>経費の支出を証明する書類一式</li>
<li>成果物の写真・資料</li>
</ul>

<h3>STEP 8：確定検査・補助金入金</h3>
<p>実績報告書提出 → 事務局による確定検査 → 補助金額の確定通知 → 精算払い請求 → 入金</p>
`,
            quiz: [
                { id: "q202_1", type: "choice", question: "補助金の申請から受給までの期間はおよそどのくらいですか？", options: ["約1〜3か月", "約6〜9か月", "約12〜18か月", "約24〜36か月"], answer: 2, explanation: "補助金の申請から受給までは約12〜18か月かかります。" },
                { id: "q202_2", type: "choice", question: "交付決定前に行った発注はどうなりますか？", options: ["補助対象になる", "補助対象外になる", "半額が補助される", "特別審査が必要"], answer: 1, explanation: "交付決定前に発注・契約・支払いを行った経費は補助対象外です。" },
                { id: "q202_3", type: "choice", question: "50万円以上の経費で原則必要なものは？", options: ["事前承認", "2社以上の相見積もり", "税理士の証明", "銀行の保証"], answer: 1, explanation: "50万円以上の経費は原則2社以上の相見積もりが必要です。" },
                { id: "q202_4", type: "choice", question: "実績報告書の提出期限は事業完了後何日以内ですか？", options: ["7日", "14日", "30日", "60日"], answer: 2, explanation: "実績報告書は事業完了後30日以内に提出する必要があります。" },
                { id: "q202_5", type: "fill", question: "補助金の電子申請に必要な認証IDの名称は何ですか？（カタカナ含む5文字）", answer: "GビズID", explanation: "補助金の電子申請にはGビズIDプライムアカウントが必要です。" }
            ]
        },
        {
            id: 203,
            title: "採択される事業計画書の書き方",
            duration: "25分",
            content: `
<h2>審査基準の全体構成</h2>
<table>
<thead><tr><th>審査項目</th><th>配点例</th></tr></thead>
<tbody>
<tr><td>技術面・革新性</td><td>30点</td></tr>
<tr><td>事業化面</td><td>30点</td></tr>
<tr><td>政策面</td><td>20点</td></tr>
<tr><td>加点項目</td><td>20点</td></tr>
<tr><td><strong>合計</strong></td><td><strong>100点</strong></td></tr>
</tbody>
</table>

<h2>事業計画書の構成（10〜15ページ推奨）</h2>
<ol>
<li><strong>会社概要・沿革（1ページ）</strong>：企業の基本情報、事業内容、強み、経営理念</li>
<li><strong>現状の課題（2ページ）</strong>：外部環境分析、内部環境分析、SWOT分析</li>
<li><strong>補助事業の具体的内容（3〜4ページ）</strong>：事業の概要、革新的なポイント、導入設備の詳細、実施体制、スケジュール</li>
<li><strong>事業の効果・将来展望（2〜3ページ）</strong>：売上・利益の計画、付加価値額の向上計画、雇用・賃金への効果</li>
<li><strong>経費の内訳（1〜2ページ）</strong>：導入設備・経費の一覧、見積根拠</li>
</ol>

<h2>SWOT分析の書き方</h2>
<table>
<thead><tr><th></th><th>プラス要因</th><th>マイナス要因</th></tr></thead>
<tbody>
<tr><td><strong>内部環境</strong></td><td>強み(S)：独自技術を保有、熟練した技術者がいる</td><td>弱み(W)：設備が老朽化、ITリテラシーが低い</td></tr>
<tr><td><strong>外部環境</strong></td><td>機会(O)：DX需要の拡大、インバウンド回復</td><td>脅威(T)：原材料価格の高騰、競合の増加</td></tr>
</tbody>
</table>

<h2>審査員に響くポイント</h2>
<div class="info-box danger">
<div class="info-box-title">NG例</div>
<p>「売上を向上させます」「最新の設備を導入します」→ 具体性がなく革新性が見えない</p>
</div>
<div class="info-box success">
<div class="info-box-title">OK例</div>
<p>「新規設備導入により生産能力を30%向上させ、年間売上を現在の5,000万円から6,500万円（130%）に引き上げます」→ 具体的で数値根拠がある</p>
</div>

<h3>数値で語る5つのポイント</h3>
<ol>
<li>現状の数値 → 導入後の目標数値</li>
<li>市場規模 → 自社の獲得見込みシェア</li>
<li>生産性 → 具体的な改善率</li>
<li>コスト → 具体的な削減額</li>
<li>雇用 → 増加予定人数と賃上げ額</li>
</ol>

<h2>加点項目（獲得できるものは全て取る）</h2>
<table>
<thead><tr><th>加点項目</th><th>内容</th><th>対策</th></tr></thead>
<tbody>
<tr><td>経営革新計画の承認</td><td>都道府県知事の承認</td><td>事前に申請（2〜3か月前）</td></tr>
<tr><td>事業継続力強化計画</td><td>BCP策定</td><td>経済産業局に申請</td></tr>
<tr><td>賃上げ加点</td><td>給与支給総額の引上げ</td><td>賃上げ計画を策定</td></tr>
<tr><td>パートナーシップ構築宣言</td><td>ポータルサイトで宣言</td><td>無料で即日可能</td></tr>
</tbody>
</table>
<div class="info-box tip">
<div class="info-box-title">加点の効果</div>
<p>基本点数のみ：70点（ボーダーライン）→ 加点+10：80点（採択圏内）→ 加点+20：90点（ほぼ確実）</p>
</div>
`,
            quiz: [
                { id: "q203_1", type: "choice", question: "事業計画書の推奨ページ数はどのくらいですか？", options: ["3〜5ページ", "10〜15ページ", "20〜30ページ", "50ページ以上"], answer: 1, explanation: "事業計画書は10〜15ページが推奨です。" },
                { id: "q203_2", type: "choice", question: "無料で即日取得できる加点項目はどれですか？", options: ["経営革新計画の承認", "事業継続力強化計画", "パートナーシップ構築宣言", "くるみん認定"], answer: 2, explanation: "パートナーシップ構築宣言はポータルサイトで宣言するだけで無料・即日で取得可能です。" },
                { id: "q203_3", type: "choice", question: "SWOT分析のSは何を表しますか？", options: ["Strategy（戦略）", "Strength（強み）", "Solution（解決策）", "Sales（売上）"], answer: 1, explanation: "SWOTのSはStrength（強み）を表します。" },
                { id: "q203_4", type: "choice", question: "審査で最も重要視される要素は？", options: ["企業の規模", "数値根拠のある具体的な計画", "代表者の経歴", "設立年数"], answer: 1, explanation: "審査では数値根拠のある具体的な計画が最も重要視されます。" },
                { id: "q203_5", type: "fill", question: "経営革新計画の承認を得るには事前に何か月前から申請すべきですか？（X〜Yの形式で）", answer: "2〜3", explanation: "経営革新計画の承認には2〜3か月前からの事前申請が必要です。" }
            ]
        }
    ]
};
