const LEVEL6_DATA = {
    id: 6,
    title: "補助金活用の成功戦略",
    icon: "🏆",
    description: "年間スケジュール、複数補助金の組み合わせ、情報収集リソース",
    modules: [
        {
            id: 601,
            title: "年間スケジュールと計画",
            duration: "15分",
            content: `
<h2>補助金活用の年間カレンダー</h2>
<table>
<thead><tr><th>月</th><th>主な活動</th></tr></thead>
<tbody>
<tr><td>1月</td><td>前年度補正予算の補助金公募開始が多い</td></tr>
<tr><td>2月</td><td>GビズID取得、認定支援機関と打合せ開始</td></tr>
<tr><td>3月</td><td>IT導入補助金公募開始、事業計画の策定</td></tr>
<tr><td>4月</td><td>新年度の補助金情報収集</td></tr>
<tr><td>5月</td><td>ものづくり補助金・持続化補助金の申請</td></tr>
<tr><td>6月</td><td>採択結果の確認、交付申請</td></tr>
<tr><td>7月</td><td>補助事業の実施開始</td></tr>
<tr><td>8月</td><td>助成金（厚労省系）の申請検討</td></tr>
<tr><td>9月</td><td>補助事業の中間確認</td></tr>
<tr><td>10月</td><td>次年度の補助金情報収集開始</td></tr>
<tr><td>11月</td><td>経営革新計画等の加点項目準備</td></tr>
<tr><td>12月</td><td>補正予算の動向チェック、来年の準備</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">計画的な準備が重要</div>
<p>補助金申請は事前準備が大切です。公募開始前からGビズIDの取得や認定支援機関との打合せを始めておくことで、余裕を持った申請が可能になります。</p>
</div>
`,
            quiz: [
                { id: "q601_1", type: "choice", question: "補助金の公募開始が多い時期はいつですか？", options: ["4月〜5月（新年度）", "7月〜8月（夏季）", "1月頃（補正予算後）", "10月〜11月（秋季）"], answer: 2, explanation: "前年度補正予算の補助金公募開始は1月頃が多いです。" },
                { id: "q601_2", type: "choice", question: "GビズIDの取得や認定支援機関との打合せを始めるべき時期は？", options: ["公募開始後", "2月頃", "5月頃", "申請締切の直前"], answer: 1, explanation: "2月頃からGビズIDの取得や認定支援機関との打合せを開始することが推奨されています。" },
                { id: "q601_3", type: "choice", question: "加点項目の準備を開始すべき時期は？", options: ["1月", "5月", "8月", "11月"], answer: 3, explanation: "11月頃から経営革新計画等の加点項目の準備を始めることが推奨されています。" }
            ]
        },
        {
            id: 602,
            title: "複数補助金の組み合わせ戦略",
            duration: "15分",
            content: `
<h2>複数の補助金を組み合わせる戦略</h2>
<p>段階的に異なる補助金を活用することで、事業全体を効率的に成長させることができます。</p>

<h3>組み合わせ例：3年間の成長プラン</h3>
<table>
<thead><tr><th>時期</th><th>補助金</th><th>助成金</th><th>目的</th></tr></thead>
<tbody>
<tr><td>1年目</td><td>小規模事業者持続化補助金</td><td>キャリアアップ助成金</td><td>販路拡大 + 人材育成</td></tr>
<tr><td>2年目</td><td>IT導入補助金</td><td>人材開発支援助成金</td><td>業務効率化 + 従業員研修</td></tr>
<tr><td>3年目</td><td>ものづくり補助金</td><td>業務改善助成金</td><td>設備投資 + 賃金引上げ</td></tr>
</tbody>
</table>

<div class="info-box danger">
<div class="info-box-title">二重受給の禁止</div>
<p><strong>同一事業に対する二重受給は不可</strong>です。ただし、異なる事業目的であれば併用可能な場合があります。申請前に必ず公募要領で確認しましょう。</p>
</div>

<h2>補助金に依存しない経営</h2>
<h3>正しい姿勢</h3>
<ul>
<li>補助金はあくまで「<strong>きっかけ</strong>」</li>
<li>自社の<strong>成長戦略が先</strong>、補助金は手段</li>
<li>補助金が<strong>なくても実行する事業</strong>に活用する</li>
<li><strong>自己負担分</strong>の資金計画も必ず立てる</li>
<li>補助金終了後も<strong>持続可能なビジネスモデル</strong>を構築</li>
</ul>

<h3>避けるべき姿勢</h3>
<div class="info-box warning">
<div class="info-box-title">NG例</div>
<ul>
<li>補助金ありきの事業計画</li>
<li>補助金がないと実行しない事業</li>
<li>過大な設備投資（補助率に甘えない）</li>
<li>複数の補助金を同時に追いかけすぎる</li>
</ul>
</div>
`,
            quiz: [
                { id: "q602_1", type: "choice", question: "同一事業に対して複数の補助金を受給することはできますか？", options: ["自由に併用可能", "不可（二重受給の禁止）", "申請すれば可能", "3つまで併用可能"], answer: 1, explanation: "同一事業に対する二重受給は不可です。異なる事業目的であれば併用可能な場合があります。" },
                { id: "q602_2", type: "choice", question: "補助金活用の正しい姿勢はどれですか？", options: ["補助金ありきで事業計画を立てる", "補助金がなくても実行する事業に活用する", "できるだけ多くの補助金に同時に応募する", "補助率が高い設備を優先的に購入する"], answer: 1, explanation: "補助金がなくても実行する事業に活用し、補助金は手段として位置付けることが正しい姿勢です。" },
                { id: "q602_3", type: "choice", question: "3年間の組み合わせ例で1年目に活用する補助金は？", options: ["ものづくり補助金", "IT導入補助金", "小規模事業者持続化補助金", "事業再構築補助金"], answer: 2, explanation: "組み合わせ例では1年目に小規模事業者持続化補助金で販路拡大を図ります。" }
            ]
        },
        {
            id: 603,
            title: "情報収集リソースと相談窓口",
            duration: "15分",
            content: `
<h2>情報収集のためのリソース一覧</h2>
<table>
<thead><tr><th>リソース</th><th>URL・連絡先</th><th>内容</th></tr></thead>
<tbody>
<tr><td>ミラサポplus</td><td>mirasapo-plus.go.jp</td><td>補助金・支援施策の総合検索</td></tr>
<tr><td>jGrants</td><td>jgrants-portal.go.jp</td><td>補助金の電子申請</td></tr>
<tr><td>中小企業庁HP</td><td>chusho.meti.go.jp</td><td>補助金の最新情報</td></tr>
<tr><td>よろず支援拠点</td><td>各都道府県に設置</td><td>無料の経営相談</td></tr>
<tr><td>商工会議所</td><td>各地域の商工会議所</td><td>補助金相談・支援</td></tr>
<tr><td>認定支援機関</td><td>ninteishien.go.jp</td><td>専門家検索</td></tr>
<tr><td>J-Net21</td><td>j-net21.smrj.go.jp</td><td>中小企業支援情報</td></tr>
<tr><td>中小機構</td><td>smrj.go.jp</td><td>各種支援策</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">無料で相談できる窓口</div>
<p><strong>よろず支援拠点</strong>は各都道府県に設置された無料の経営相談窓口です。補助金の相談だけでなく、経営全般の相談ができます。まずはここに相談してみましょう。</p>
</div>

<h2>補助金用語集</h2>
<table>
<thead><tr><th>用語</th><th>意味</th></tr></thead>
<tbody>
<tr><td>公募要領</td><td>補助金の応募ルールを定めた文書</td></tr>
<tr><td>交付決定</td><td>補助金を交付することが正式に決定されること</td></tr>
<tr><td>補助対象経費</td><td>補助金の対象となる経費</td></tr>
<tr><td>精算払い</td><td>事業完了後に実績に基づいて支払われる方式</td></tr>
<tr><td>概算払い</td><td>事業途中で一部が先に支払われる方式</td></tr>
<tr><td>実績報告</td><td>事業完了後に成果と経費を報告すること</td></tr>
<tr><td>確定検査</td><td>実績報告の内容を事務局が確認すること</td></tr>
<tr><td>収益納付</td><td>補助事業で利益が出た場合に一部を返還すること</td></tr>
<tr><td>付加価値額</td><td>営業利益 + 人件費 + 減価償却費</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q603_1", type: "choice", question: "無料で経営相談ができる窓口はどれですか？", options: ["認定支援機関", "よろず支援拠点", "税理士事務所", "コンサルティング会社"], answer: 1, explanation: "よろず支援拠点は各都道府県に設置された無料の経営相談窓口です。" },
                { id: "q603_2", type: "choice", question: "補助金・支援施策の総合検索サイトはどれですか？", options: ["jGrants", "J-Net21", "ミラサポplus", "中小機構"], answer: 2, explanation: "ミラサポplus（mirasapo-plus.go.jp）は補助金・支援施策の総合検索サイトです。" },
                { id: "q603_3", type: "choice", question: "付加価値額の計算式として正しいものは？", options: ["売上高 - 原価", "営業利益 + 人件費 + 減価償却費", "経常利益 + 税金", "売上高 - 経費"], answer: 1, explanation: "付加価値額は「営業利益 + 人件費 + 減価償却費」で計算されます。" }
            ]
        },
        {
            id: 604,
            title: "申請前の最終チェックリスト",
            duration: "15分",
            content: `
<h2>補助金申請の最終チェックリスト</h2>

<h3>基本要件</h3>
<ul>
<li>GビズIDプライムを<strong>取得済み</strong>か</li>
<li>公募要領を<strong>最新版で確認</strong>したか</li>
<li>申請枠の<strong>要件を全て満たしている</strong>か</li>
<li>締切日時を確認したか（<strong>時間まで注意</strong>）</li>
</ul>

<h3>事業計画書</h3>
<ul>
<li>審査項目に<strong>対応した内容</strong>になっているか</li>
<li><strong>数値目標と根拠</strong>が明確か</li>
<li><strong>革新性・独自性</strong>が伝わるか</li>
<li>実施体制とスケジュールは<strong>現実的</strong>か</li>
<li><strong>SWOT分析</strong>を記載しているか</li>
<li>図表やグラフを<strong>効果的に</strong>使っているか</li>
<li><strong>誤字脱字</strong>はないか</li>
</ul>

<h3>加点項目</h3>
<ul>
<li>取得可能な加点項目を<strong>全て確認</strong>したか</li>
<li>必要な<strong>証明書を取得済み</strong>か</li>
</ul>

<h3>添付書類</h3>
<ul>
<li>決算書（<strong>直近2期分</strong>）を準備したか</li>
<li>見積書を取得したか（<strong>2社以上</strong>）</li>
<li>認定支援機関の確認書を取得したか（必要な場合）</li>
<li>全て<strong>PDF化</strong>し、容量制限内か</li>
</ul>

<h3>資金計画</h3>
<ul>
<li><strong>自己負担分</strong>の資金確保の見通しがあるか</li>
<li><strong>つなぎ融資</strong>の検討をしたか（後払いのため）</li>
<li>補助対象外経費も含めた<strong>総額を把握</strong>しているか</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">最後に</div>
<p>補助金申請は準備が全てです。チェックリストを活用して漏れのない申請を行いましょう。わからないことがあれば、よろず支援拠点や認定支援機関に相談することをお勧めします。</p>
</div>
`,
            quiz: [
                { id: "q604_1", type: "choice", question: "見積書は最低何社から取得すべきですか？", options: ["1社", "2社", "3社", "5社"], answer: 1, explanation: "見積書は2社以上から取得することが求められています。" },
                { id: "q604_2", type: "choice", question: "補助金が後払いであることに関連して検討すべきことは？", options: ["前払いへの変更申請", "つなぎ融資の検討", "補助金の分割受取", "支払い延期の申請"], answer: 1, explanation: "補助金は後払い（精算払い）のため、事業実施期間中の資金確保のためにつなぎ融資の検討が必要です。" },
                { id: "q604_3", type: "choice", question: "決算書は直近何期分が必要ですか？", options: ["1期分", "2期分", "3期分", "5期分"], answer: 1, explanation: "添付書類として直近2期分の決算書が必要です。" },
                { id: "q604_4", type: "choice", question: "申請書類のファイル形式として一般的に求められるのは？", options: ["Word", "Excel", "PDF", "PowerPoint"], answer: 2, explanation: "申請書類は一般的にPDF形式で提出が求められます。" }
            ]
        }
    ]
};
