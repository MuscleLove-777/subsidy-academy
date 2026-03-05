const LEVEL1_DATA = {
    id: 1,
    title: "補助金の基礎知識",
    icon: "💴",
    description: "補助金と助成金の違い、種類、主要補助金の詳細",
    modules: [
        {
            id: 101,
            title: "補助金と助成金の違い",
            duration: "15分",
            content: `
<h2>基本的な定義</h2>
<table>
<thead><tr><th>項目</th><th>補助金</th><th>助成金</th></tr></thead>
<tbody>
<tr><td>管轄</td><td>経済産業省系が多い</td><td>厚生労働省系が多い</td></tr>
<tr><td>審査</td><td>審査あり（競争型）</td><td>要件充足で受給可能</td></tr>
<tr><td>採択率</td><td>30〜50%程度</td><td>ほぼ100%</td></tr>
<tr><td>目的</td><td>事業拡大</td><td>雇用維持・改善</td></tr>
<tr><td>支給方式</td><td>後払い（精算払い）</td><td>後払い（精算払い）</td></tr>
</tbody>
</table>

<h2>補助金の特徴</h2>
<table>
<thead><tr><th>項目</th><th>内容</th></tr></thead>
<tbody>
<tr><td>管轄</td><td>主に経済産業省・中小企業庁</td></tr>
<tr><td>目的</td><td>新事業展開、設備投資、IT化推進など</td></tr>
<tr><td>審査</td><td>事業計画書に基づく書類審査（+面接の場合あり）</td></tr>
<tr><td>採択率</td><td>補助金により異なる（30〜60%程度）</td></tr>
<tr><td>返済義務</td><td>なし（ただし収益納付の場合あり）</td></tr>
</tbody>
</table>

<h2>助成金の特徴</h2>
<table>
<thead><tr><th>項目</th><th>内容</th></tr></thead>
<tbody>
<tr><td>管轄</td><td>主に厚生労働省</td></tr>
<tr><td>目的</td><td>雇用の維持・創出、労働環境改善</td></tr>
<tr><td>審査</td><td>要件を満たせば原則受給可能</td></tr>
<tr><td>採択率</td><td>要件充足でほぼ100%</td></tr>
</tbody>
</table>

<h2>目的別の選び方</h2>
<div class="info-box tip">
<div class="info-box-title">フローチャート</div>
<ul>
<li><strong>設備投資・IT導入・新事業</strong> → 補助金を検討</li>
<li><strong>人材採用・育成・働き方改革</strong> → 助成金を検討</li>
<li><strong>どちらも当てはまる</strong> → 両方を検討（併用可能な場合あり）</li>
</ul>
</div>

<h2>代表的な助成金の例</h2>
<table>
<thead><tr><th>助成金名</th><th>概要</th><th>上限額</th></tr></thead>
<tbody>
<tr><td>キャリアアップ助成金</td><td>非正規→正社員転換</td><td>1人あたり最大80万円</td></tr>
<tr><td>両立支援等助成金</td><td>育休取得支援</td><td>最大60万円</td></tr>
<tr><td>人材開発支援助成金</td><td>従業員の研修費用</td><td>経費の最大75%</td></tr>
<tr><td>業務改善助成金</td><td>最低賃金引上げ対応</td><td>最大600万円</td></tr>
<tr><td>トライアル雇用助成金</td><td>試行雇用の支援</td><td>月額最大4万円</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q101_1", type: "choice", question: "補助金を主に管轄しているのはどの省庁ですか？", options: ["厚生労働省", "経済産業省", "財務省", "総務省"], answer: 1, explanation: "補助金は主に経済産業省・中小企業庁が管轄しています。助成金は厚生労働省です。" },
                { id: "q101_2", type: "choice", question: "助成金の採択率はおよそどのくらいですか？", options: ["約30%", "約50%", "約70%", "ほぼ100%"], answer: 3, explanation: "助成金は要件を満たせば原則受給可能で、採択率はほぼ100%です。" },
                { id: "q101_3", type: "choice", question: "補助金の支給方式はどれですか？", options: ["前払い", "後払い（精算払い）", "分割払い", "一括前払い"], answer: 1, explanation: "補助金は事業完了後に実績に基づいて支払われる後払い（精算払い）方式です。" },
                { id: "q101_4", type: "choice", question: "人材採用や育成を目的とする場合、検討すべきは？", options: ["補助金", "助成金", "融資", "給付金"], answer: 1, explanation: "人材採用・育成・働き方改革を目的とする場合は助成金（厚生労働省系）を検討します。" },
                { id: "q101_5", type: "fill", question: "キャリアアップ助成金は非正規社員を何に転換する際に使えますか？（漢字3文字）", answer: "正社員", explanation: "キャリアアップ助成金は非正規社員を正社員に転換する際に利用できます。" }
            ]
        },
        {
            id: 102,
            title: "補助金の全体像と種類",
            duration: "15分",
            content: `
<h2>補助金の分類マップ</h2>
<table>
<thead><tr><th>カテゴリ</th><th>代表的な補助金</th></tr></thead>
<tbody>
<tr><td><strong>設備・技術</strong></td><td>ものづくり補助金</td></tr>
<tr><td><strong>IT・DX</strong></td><td>IT導入補助金</td></tr>
<tr><td><strong>事業転換</strong></td><td>事業再構築補助金</td></tr>
<tr><td><strong>販路拡大</strong></td><td>小規模事業者持続化補助金</td></tr>
<tr><td><strong>創業支援</strong></td><td>各種創業補助金</td></tr>
<tr><td><strong>その他</strong></td><td>省エネ補助金、事業承継補助金、海外展開補助金</td></tr>
</tbody>
</table>

<h2>補助金の財源</h2>
<div class="info-box tip">
<div class="info-box-title">財源の流れ</div>
<p>国の予算 → 中小企業庁 → 事務局（民間委託） → 申請者（中小企業等）</p>
<p>補正予算で追加されることが多く、年末〜年始に公募開始が多い傾向です。</p>
</div>

<h2>補助金のスケジュール感</h2>
<table>
<thead><tr><th>補助金</th><th>公募時期</th></tr></thead>
<tbody>
<tr><td>ものづくり補助金</td><td>通年公募（締切が複数回）</td></tr>
<tr><td>IT導入補助金</td><td>3月頃〜12月頃まで複数回締切</td></tr>
<tr><td>小規模持続化補助金</td><td>通年公募（締切が複数回）</td></tr>
<tr><td>事業再構築補助金</td><td>公募回ごとに期間設定</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q102_1", type: "choice", question: "IT・DX推進に最適な補助金はどれですか？", options: ["ものづくり補助金", "IT導入補助金", "事業再構築補助金", "持続化補助金"], answer: 1, explanation: "IT導入補助金はITツール導入による生産性向上を支援する補助金です。" },
                { id: "q102_2", type: "choice", question: "補助金の公募が多く開始される時期はいつですか？", options: ["4月〜5月", "7月〜8月", "年末〜年始", "9月〜10月"], answer: 2, explanation: "補正予算で追加されることが多いため、年末〜年始に公募開始が多い傾向です。" },
                { id: "q102_3", type: "choice", question: "販路拡大に適した補助金はどれですか？", options: ["ものづくり補助金", "IT導入補助金", "事業再構築補助金", "小規模事業者持続化補助金"], answer: 3, explanation: "小規模事業者持続化補助金は販路開拓・生産性向上を支援する補助金です。" },
                { id: "q102_4", type: "choice", question: "補助金の事務局はどこが運営していますか？", options: ["経済産業省が直接", "地方自治体", "民間委託", "日本銀行"], answer: 2, explanation: "補助金の事務局は民間に委託されて運営されています。" },
                { id: "q102_5", type: "fill", question: "ものづくり補助金の公募方式は何ですか？（漢字4文字）", answer: "通年公募", explanation: "ものづくり補助金は通年公募で、締切が複数回設定されています。" }
            ]
        },
        {
            id: 103,
            title: "主要補助金の詳細（前編）",
            duration: "25分",
            content: `
<h2>ものづくり補助金</h2>
<p>正式名称：ものづくり・商業・サービス生産性向上促進補助金</p>
<table>
<thead><tr><th>項目</th><th>内容</th></tr></thead>
<tbody>
<tr><td>目的</td><td>革新的なサービス開発、試作品開発、生産プロセス改善</td></tr>
<tr><td>管轄</td><td>中小企業庁</td></tr>
<tr><td>事務局</td><td>全国中小企業団体中央会</td></tr>
</tbody>
</table>

<h3>申請枠と補助額</h3>
<table>
<thead><tr><th>申請枠</th><th>補助上限額</th><th>補助率</th></tr></thead>
<tbody>
<tr><td>通常枠</td><td>750万円〜1,250万円</td><td>1/2（小規模事業者2/3）</td></tr>
<tr><td>回復型賃上げ・雇用拡大枠</td><td>750万円〜1,250万円</td><td>2/3</td></tr>
<tr><td>デジタル枠</td><td>750万円〜1,250万円</td><td>2/3</td></tr>
<tr><td>グリーン枠</td><td>750万円〜4,000万円</td><td>2/3</td></tr>
<tr><td>グローバル市場開拓枠</td><td>3,000万円</td><td>1/2（小規模事業者2/3）</td></tr>
</tbody>
</table>

<h3>対象経費</h3>
<ul>
<li>機械装置・システム構築費（メイン）</li>
<li>技術導入費</li>
<li>専門家経費</li>
<li>運搬費</li>
<li>クラウドサービス利用費</li>
<li>原材料費・外注費・知的財産権等関連経費</li>
</ul>

<h3>審査のポイント</h3>
<ol>
<li><strong>技術面</strong>：革新的な製品・サービスの開発か</li>
<li><strong>事業化面</strong>：市場ニーズがあり事業化が見込めるか</li>
<li><strong>政策面</strong>：国の政策に合致しているか</li>
<li><strong>賃上げ</strong>：給与支給総額や最低賃金の引上げ計画</li>
</ol>

<h2>IT導入補助金</h2>
<table>
<thead><tr><th>項目</th><th>内容</th></tr></thead>
<tbody>
<tr><td>目的</td><td>中小企業のIT導入による生産性向上</td></tr>
<tr><td>管轄</td><td>中小企業庁</td></tr>
</tbody>
</table>

<h3>申請枠と補助額</h3>
<table>
<thead><tr><th>申請枠</th><th>補助額</th><th>補助率</th></tr></thead>
<tbody>
<tr><td>通常枠（A類型）</td><td>5万円〜150万円未満</td><td>1/2以内</td></tr>
<tr><td>通常枠（B類型）</td><td>150万円〜450万円以下</td><td>1/2以内</td></tr>
<tr><td>セキュリティ対策推進枠</td><td>5万円〜100万円</td><td>1/2以内</td></tr>
<tr><td>デジタル化基盤導入枠</td><td>〜350万円</td><td>3/4〜2/3</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">IT導入補助金の特徴</div>
<p>IT導入支援事業者（ITベンダー）との連携が必須です。事前に登録されたITツールのみが対象となります。</p>
</div>

<h3>対象となるITツール例</h3>
<table>
<thead><tr><th>カテゴリ</th><th>具体例</th></tr></thead>
<tbody>
<tr><td>会計ソフト</td><td>freee、マネーフォワード、弥生会計</td></tr>
<tr><td>顧客管理</td><td>Salesforce、kintone</td></tr>
<tr><td>ECサイト</td><td>Shopify、BASE構築</td></tr>
<tr><td>RPA</td><td>UiPath、WinActor</td></tr>
<tr><td>セキュリティ</td><td>ウイルス対策、UTM</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q103_1", type: "choice", question: "ものづくり補助金のグリーン枠の補助上限額はいくらですか？", options: ["1,250万円", "2,000万円", "3,000万円", "4,000万円"], answer: 3, explanation: "ものづくり補助金のグリーン枠は補助上限額が750万円〜4,000万円です。" },
                { id: "q103_2", type: "choice", question: "IT導入補助金で必須となるパートナーは何ですか？", options: ["認定支援機関", "IT導入支援事業者", "商工会議所", "税理士"], answer: 1, explanation: "IT導入補助金ではIT導入支援事業者（ITベンダー）との連携が必須です。" },
                { id: "q103_3", type: "choice", question: "ものづくり補助金の審査ポイントに含まれないものは？", options: ["技術面", "事業化面", "従業員の学歴", "政策面"], answer: 2, explanation: "審査ポイントは技術面、事業化面、政策面、賃上げ計画です。従業員の学歴は関係ありません。" },
                { id: "q103_4", type: "choice", question: "ものづくり補助金の対象経費のメインは何ですか？", options: ["広告宣伝費", "人件費", "機械装置・システム構築費", "旅費交通費"], answer: 2, explanation: "ものづくり補助金の対象経費のメインは機械装置・システム構築費です。" },
                { id: "q103_5", type: "fill", question: "IT導入補助金のデジタル化基盤導入枠の最大補助率はいくらですか？（分数で）", answer: "3/4", explanation: "デジタル化基盤導入枠は50万円以下の部分で3/4の補助率です。" }
            ]
        },
        {
            id: 104,
            title: "主要補助金の詳細（後編）",
            duration: "20分",
            content: `
<h2>事業再構築補助金</h2>
<table>
<thead><tr><th>項目</th><th>内容</th></tr></thead>
<tbody>
<tr><td>目的</td><td>ポストコロナ時代の事業再構築支援</td></tr>
<tr><td>管轄</td><td>中小企業庁</td></tr>
</tbody>
</table>

<h3>申請枠と補助額</h3>
<table>
<thead><tr><th>申請枠</th><th>補助上限額</th><th>補助率（中小）</th></tr></thead>
<tbody>
<tr><td>成長枠</td><td>2,000万円〜7,000万円</td><td>1/2（2/3※）</td></tr>
<tr><td>グリーン成長枠</td><td>4,000万円〜1.5億円</td><td>1/2（2/3※）</td></tr>
<tr><td>産業構造転換枠</td><td>2,000万円〜7,000万円</td><td>2/3</td></tr>
<tr><td>サプライチェーン強靱化枠</td><td>最大5億円</td><td>1/2</td></tr>
</tbody>
</table>
<p>※短期に大規模賃上げを行う場合の上乗せ</p>

<h3>再構築の5類型</h3>
<ul>
<li><strong>新市場進出</strong>：新たな市場に進出する</li>
<li><strong>事業転換</strong>：主たる事業を転換する</li>
<li><strong>業種転換</strong>：主たる業種を転換する</li>
<li><strong>業態転換</strong>：製造方法・提供方法を転換する</li>
<li><strong>事業再編</strong>：組織再編を通じて再構築する</li>
</ul>

<h3>主な要件</h3>
<ol>
<li>事業計画を<strong>認定支援機関と策定</strong>すること</li>
<li>付加価値額が年率平均3〜5%以上向上する計画であること</li>
<li>補助事業終了後3〜5年で付加価値額の目標を達成すること</li>
</ol>

<h2>小規模事業者持続化補助金</h2>
<table>
<thead><tr><th>項目</th><th>内容</th></tr></thead>
<tbody>
<tr><td>目的</td><td>小規模事業者の販路開拓・生産性向上</td></tr>
<tr><td>事務局</td><td>日本商工会議所、全国商工会連合会</td></tr>
</tbody>
</table>

<h3>申請枠と補助額</h3>
<table>
<thead><tr><th>申請枠</th><th>補助上限額</th><th>補助率</th></tr></thead>
<tbody>
<tr><td>通常枠</td><td>50万円</td><td>2/3</td></tr>
<tr><td>賃金引上げ枠</td><td>200万円</td><td>2/3（赤字事業者3/4）</td></tr>
<tr><td>卒業枠</td><td>200万円</td><td>2/3</td></tr>
<tr><td>後継者支援枠</td><td>200万円</td><td>2/3</td></tr>
<tr><td>創業枠</td><td>200万円</td><td>2/3</td></tr>
</tbody>
</table>

<h3>小規模事業者の定義</h3>
<table>
<thead><tr><th>業種</th><th>従業員数</th></tr></thead>
<tbody>
<tr><td>商業・サービス業（宿泊・娯楽除く）</td><td>5人以下</td></tr>
<tr><td>サービス業（宿泊・娯楽）</td><td>20人以下</td></tr>
<tr><td>製造業・その他</td><td>20人以下</td></tr>
</tbody>
</table>

<h3>対象経費</h3>
<ul>
<li>機械装置等費</li>
<li>広報費（チラシ、Web広告、看板等）</li>
<li>ウェブサイト関連費（上限1/4）</li>
<li>展示会等出展費</li>
<li>開発費、資料購入費、借料</li>
<li>委託・外注費</li>
</ul>

<h2>その他の注目補助金</h2>
<table>
<thead><tr><th>補助金</th><th>目的</th><th>補助額</th></tr></thead>
<tbody>
<tr><td>省エネルギー補助金</td><td>省エネ設備への更新</td><td>最大15億円</td></tr>
<tr><td>事業承継・引継ぎ補助金</td><td>M&A・事業承継の促進</td><td>最大600万円</td></tr>
<tr><td>海外展開補助金</td><td>中小企業の海外展開</td><td>最大500万円</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q104_1", type: "choice", question: "事業再構築補助金で必須のパートナーは？", options: ["IT導入支援事業者", "認定支援機関", "商工会議所", "銀行"], answer: 1, explanation: "事業再構築補助金では認定支援機関と共同で事業計画を策定する必要があります。" },
                { id: "q104_2", type: "choice", question: "小規模事業者持続化補助金の通常枠の上限額は？", options: ["30万円", "50万円", "100万円", "200万円"], answer: 1, explanation: "持続化補助金の通常枠の補助上限額は50万円です。" },
                { id: "q104_3", type: "choice", question: "商業・サービス業の小規模事業者の従業員数の定義は？", options: ["3人以下", "5人以下", "10人以下", "20人以下"], answer: 1, explanation: "商業・サービス業（宿泊・娯楽除く）の小規模事業者は従業員5人以下です。" },
                { id: "q104_4", type: "choice", question: "事業再構築の5類型に含まれないものは？", options: ["新市場進出", "業態転換", "人材転換", "事業再編"], answer: 2, explanation: "5類型は新市場進出、事業転換、業種転換、業態転換、事業再編です。人材転換は含まれません。" },
                { id: "q104_5", type: "fill", question: "事業再構築補助金のサプライチェーン強靱化枠の補助上限額は最大いくらですか？（X億円の形式で）", answer: "5億円", explanation: "サプライチェーン強靱化枠の補助上限額は最大5億円です。" }
            ]
        }
    ]
};
