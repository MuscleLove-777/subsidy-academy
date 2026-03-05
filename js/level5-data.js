const LEVEL5_DATA = {
    id: 5,
    title: "受給後の義務と管理",
    icon: "📋",
    description: "補助金受給後の報告義務、収益納付、財産管理と注意点",
    modules: [
        {
            id: 501,
            title: "受給後に求められる義務",
            duration: "15分",
            content: `
<h2>補助金受給後の義務一覧</h2>
<p>補助金は受給して終わりではありません。受給後にも多くの義務があります。</p>
<ol>
<li><strong>事業化状況報告</strong>（3〜5年間）</li>
<li><strong>収益納付</strong>（利益が出た場合）</li>
<li><strong>財産の管理・処分制限</strong></li>
<li><strong>証拠書類の保管</strong>（5〜10年間）</li>
<li><strong>会計検査院の検査対応</strong></li>
</ol>

<h2>事業化状況報告</h2>
<p>補助事業完了後、3〜5年間にわたり毎年報告が求められます。</p>

<h3>報告のタイムライン</h3>
<p>採択 → 事業実施 → 事業完了 → 報告1年目 → 報告2年目 → ... → 報告5年目（最終報告）</p>

<h3>報告内容</h3>
<ul>
<li>売上高の推移</li>
<li>付加価値額の推移</li>
<li>従業員数の推移</li>
<li>給与支給総額の推移</li>
<li>補助事業の成果</li>
<li>事業場内最低賃金の状況</li>
</ul>

<div class="info-box warning">
<div class="info-box-title">注意</div>
<p>事業化状況報告を怠ると、今後の補助金申請に影響する可能性があります。毎年の報告期限を必ず管理してください。</p>
</div>
`,
            quiz: [
                { id: "q501_1", type: "choice", question: "事業化状況報告は何年間必要ですか？", options: ["1〜2年間", "3〜5年間", "7〜10年間", "永久"], answer: 1, explanation: "事業化状況報告は補助事業完了後3〜5年間にわたり毎年求められます。" },
                { id: "q501_2", type: "choice", question: "補助金受給後の義務に含まれないものはどれですか？", options: ["事業化状況報告", "収益納付", "毎月の経営会議の報告", "会計検査院の検査対応"], answer: 2, explanation: "毎月の経営会議の報告は補助金受給後の義務には含まれません。" },
                { id: "q501_3", type: "choice", question: "事業化状況報告で報告しなければならない内容はどれですか？", options: ["従業員の趣味", "売上高の推移", "取引先の名簿", "代表者の経歴変更"], answer: 1, explanation: "事業化状況報告では売上高の推移、付加価値額、従業員数、給与支給総額等を報告します。" }
            ]
        },
        {
            id: 502,
            title: "収益納付と財産管理",
            duration: "20分",
            content: `
<h2>収益納付について</h2>
<p>補助事業で利益が出た場合、一部を返還（納付）する義務があります。</p>

<h3>収益納付の計算方法</h3>
<p><strong>利益額 x 補助金充当率 = 収益納付額</strong>（上限：受給した補助金額）</p>

<h3>計算例</h3>
<table>
<thead><tr><th>項目</th><th>金額・数値</th></tr></thead>
<tbody>
<tr><td>補助金額</td><td>500万円</td></tr>
<tr><td>総事業費</td><td>1,000万円</td></tr>
<tr><td>補助率</td><td>1/2</td></tr>
<tr><td>補助金充当率</td><td>500万 / 1,000万 = 50%</td></tr>
<tr><td>利益</td><td>200万円</td></tr>
<tr><td>収益納付額</td><td>200万 x 50% = 100万円</td></tr>
</tbody>
</table>

<h2>財産の管理・処分制限</h2>
<p>補助金で取得した財産には処分制限があります。</p>

<h3>処分制限期間の目安</h3>
<table>
<thead><tr><th>財産の種類</th><th>処分制限期間</th></tr></thead>
<tbody>
<tr><td>機械装置</td><td>耐用年数に応じて（概ね4〜10年）</td></tr>
<tr><td>ソフトウェア</td><td>5年</td></tr>
<tr><td>建物</td><td>耐用年数に応じて</td></tr>
<tr><td>その他</td><td>補助金ごとに規定</td></tr>
</tbody>
</table>

<h3>処分制限の内容</h3>
<div class="info-box danger">
<div class="info-box-title">やってはいけないこと</div>
<ul>
<li>勝手に<strong>売却</strong>してはいけない</li>
<li><strong>目的外</strong>に使用してはいけない</li>
<li><strong>担保</strong>に供してはいけない</li>
</ul>
</div>
<div class="info-box tip">
<div class="info-box-title">例外</div>
<p>事務局に承認を得れば処分可能です。ただし、補助金返還が求められる場合があります。</p>
</div>
`,
            quiz: [
                { id: "q502_1", type: "choice", question: "収益納付の計算式として正しいものは？", options: ["売上 x 補助率", "利益額 x 補助金充当率", "経費 x 補助率", "利益額 x 売上比率"], answer: 1, explanation: "収益納付額は「利益額 x 補助金充当率」で計算されます（上限は受給した補助金額）。" },
                { id: "q502_2", type: "choice", question: "ソフトウェアの処分制限期間は何年ですか？", options: ["3年", "5年", "7年", "10年"], answer: 1, explanation: "ソフトウェアの処分制限期間は5年です。" },
                { id: "q502_3", type: "choice", question: "補助金で取得した機械を処分したい場合はどうすべきですか？", options: ["勝手に売却してよい", "事務局に承認を得る", "税務署に届け出る", "何もしなくてよい"], answer: 1, explanation: "補助金で取得した財産を処分するには事務局の承認が必要です。" },
                { id: "q502_4", type: "choice", question: "補助金500万円、総事業費1,000万円、利益200万円の場合の収益納付額は？", options: ["50万円", "100万円", "200万円", "500万円"], answer: 1, explanation: "補助金充当率は500万/1,000万=50%、収益納付額は200万x50%=100万円です。" }
            ]
        },
        {
            id: 503,
            title: "証拠書類の保管と違反事例",
            duration: "20分",
            content: `
<h2>証拠書類の保管（5年間以上）</h2>
<h3>保管が必要な書類</h3>
<ul>
<li>交付申請書・交付決定通知書</li>
<li>事業計画書</li>
<li>経費に関する証拠書類一式
    <ul>
    <li>見積書</li>
    <li>発注書</li>
    <li>契約書</li>
    <li>納品書</li>
    <li>請求書</li>
    <li>領収書</li>
    <li>振込明細・通帳コピー</li>
    </ul>
</li>
<li>実績報告書</li>
<li>確定通知書</li>
<li>補助事業に関連する帳簿</li>
<li>成果物に関する資料</li>
</ul>

<h3>保管のポイント</h3>
<ul>
<li><strong>紙とデータの両方</strong>で保管</li>
<li>時系列・経費項目別に<strong>整理</strong></li>
<li><strong>会計検査院</strong>の検査に備える</li>
</ul>

<h2>よくある違反事例と罰則</h2>
<table>
<thead><tr><th>違反事例</th><th>罰則・ペナルティ</th></tr></thead>
<tbody>
<tr><td>虚偽の申請</td><td>補助金全額返還 + 加算金</td></tr>
<tr><td>経費の目的外使用</td><td>該当額の返還 + 加算金</td></tr>
<tr><td>無断での財産処分</td><td>該当額の返還</td></tr>
<tr><td>事業化状況報告の未提出</td><td>今後の補助金申請に影響</td></tr>
<tr><td>証拠書類の紛失・不備</td><td>該当経費の返還</td></tr>
<tr><td>交付決定前の発注</td><td>当該経費が補助対象外に</td></tr>
</tbody>
</table>

<div class="info-box danger">
<div class="info-box-title">刑事罰の可能性</div>
<p>悪質な場合は、補助金適正化法違反として<strong>5年以下の懲役</strong>の可能性があります。補助金は公的資金であり、適切な管理が求められます。</p>
</div>
`,
            quiz: [
                { id: "q503_1", type: "choice", question: "証拠書類の保管期間は最低何年間ですか？", options: ["1年間", "3年間", "5年間", "10年間"], answer: 2, explanation: "証拠書類は5年間以上の保管が必要です。" },
                { id: "q503_2", type: "choice", question: "虚偽の申請を行った場合のペナルティは？", options: ["注意のみ", "該当額の返還", "補助金全額返還 + 加算金", "次回の申請が1回不可"], answer: 2, explanation: "虚偽の申請を行った場合は補助金全額返還に加えて加算金が課されます。" },
                { id: "q503_3", type: "choice", question: "補助金適正化法違反の最大刑罰は？", options: ["罰金のみ", "1年以下の懲役", "3年以下の懲役", "5年以下の懲役"], answer: 3, explanation: "悪質な場合は補助金適正化法違反として5年以下の懲役の可能性があります。" },
                { id: "q503_4", type: "choice", question: "証拠書類の保管方法として推奨されるのは？", options: ["紙のみで保管", "データのみで保管", "紙とデータの両方で保管", "保管は不要"], answer: 2, explanation: "証拠書類は紙とデータの両方で保管し、時系列・経費項目別に整理することが推奨されます。" }
            ]
        }
    ]
};
