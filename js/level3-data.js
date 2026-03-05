const LEVEL3_DATA = {
    id: 3,
    title: "認定支援機関とGビズID",
    icon: "🏛️",
    description: "認定支援機関の活用法とGビズIDの取得方法",
    modules: [
        {
            id: 301,
            title: "認定支援機関とは",
            duration: "15分",
            content: `
<h2>認定支援機関の概要</h2>
<p>正式名称は「認定経営革新等支援機関」です。国が認定した経営支援の専門家で、補助金申請において重要な役割を果たします。</p>

<h3>認定支援機関になれる者</h3>
<ul>
<li>税理士・税理士法人</li>
<li>公認会計士</li>
<li>中小企業診断士</li>
<li>弁護士</li>
<li>金融機関（銀行・信用金庫等）</li>
<li>商工会議所・商工会</li>
<li>民間コンサルティング会社</li>
</ul>

<h2>認定支援機関が必要な補助金</h2>
<table>
<thead><tr><th>補助金</th><th>認定支援機関の関与</th></tr></thead>
<tbody>
<tr><td>ものづくり補助金</td><td>任意（加点あり）</td></tr>
<tr><td>事業再構築補助金</td><td>必須（事業計画を共同策定）</td></tr>
<tr><td>小規模事業者持続化補助金</td><td>商工会議所等の支援が必要</td></tr>
<tr><td>IT導入補助金</td><td>不要（IT導入支援事業者と連携）</td></tr>
<tr><td>経営力向上計画</td><td>必須</td></tr>
</tbody>
</table>

<h2>認定支援機関の探し方</h2>
<ol>
<li>中小企業庁「認定経営革新等支援機関検索システム」にアクセス</li>
<li>地域・専門分野で絞り込み</li>
<li>複数の機関に問い合わせ・比較</li>
<li>実績・費用・相性で選定</li>
</ol>

<div class="info-box tip">
<div class="info-box-title">ポイント</div>
<p>認定支援機関の検索は中小企業庁の公式サイト（ninteishien.go.jp）で行えます。</p>
</div>
`,
            quiz: [
                { id: "q301_1", type: "choice", question: "認定支援機関の正式名称はどれですか？", options: ["認定経営支援機関", "認定経営革新等支援機関", "認定事業計画支援機関", "認定中小企業支援機関"], answer: 1, explanation: "正式名称は「認定経営革新等支援機関」です。" },
                { id: "q301_2", type: "choice", question: "事業再構築補助金における認定支援機関の関与はどの程度ですか？", options: ["不要", "任意（加点あり）", "必須（事業計画を共同策定）", "商工会議所等の支援で代替可"], answer: 2, explanation: "事業再構築補助金では認定支援機関との事業計画の共同策定が必須です。" },
                { id: "q301_3", type: "choice", question: "認定支援機関になれない者はどれですか？", options: ["税理士", "中小企業診断士", "一般の個人", "金融機関"], answer: 2, explanation: "認定支援機関になれるのは税理士、公認会計士、中小企業診断士、弁護士、金融機関、商工会議所、民間コンサルティング会社等です。一般の個人はなれません。" },
                { id: "q301_4", type: "choice", question: "ものづくり補助金での認定支援機関の関与はどうなっていますか？", options: ["必須", "任意（加点あり）", "不要", "商工会議所等の支援が必要"], answer: 1, explanation: "ものづくり補助金では認定支援機関の関与は任意ですが、関与させることで加点を得られます。" }
            ]
        },
        {
            id: 302,
            title: "認定支援機関の費用と選び方",
            duration: "15分",
            content: `
<h2>認定支援機関の費用相場</h2>
<table>
<thead><tr><th>サービス内容</th><th>費用目安</th></tr></thead>
<tbody>
<tr><td>事業計画書の作成支援</td><td>10万円〜30万円</td></tr>
<tr><td>申請手続きの代行</td><td>5万円〜15万円</td></tr>
<tr><td>成功報酬（採択時）</td><td>補助金額の5〜15%</td></tr>
<tr><td>事業実施期間のサポート</td><td>月額3万円〜10万円</td></tr>
<tr><td>実績報告書の作成支援</td><td>5万円〜15万円</td></tr>
</tbody>
</table>

<h2>認定支援機関選びのチェックリスト</h2>
<ul>
<li>該当する補助金の<strong>採択実績</strong>があるか</li>
<li>自社の<strong>業種に対する知見</strong>があるか</li>
<li><strong>費用体系が明確</strong>か（成功報酬型か固定費型か）</li>
<li>事業計画書を丸投げでなく<strong>一緒に作成</strong>してくれるか</li>
<li>採択後のフォロー（<strong>実績報告まで</strong>）も対応可能か</li>
<li><strong>レスポンスが早い</strong>か</li>
<li>補助金以外の<strong>経営相談</strong>にも応じてくれるか</li>
</ul>

<div class="info-box warning">
<div class="info-box-title">注意</div>
<p>成功報酬型の場合、補助金額の5〜15%が相場です。例えば1,000万円の補助金の場合、50万円〜150万円の報酬となります。費用体系を事前に確認し、契約書を交わしましょう。</p>
</div>

<div class="info-box tip">
<div class="info-box-title">おすすめの選び方</div>
<p>必ず複数の認定支援機関に相談し、実績・費用・対応の質を比較して選びましょう。丸投げではなく、一緒に事業計画書を作成してくれる機関を選ぶことが採択率向上につながります。</p>
</div>
`,
            quiz: [
                { id: "q302_1", type: "choice", question: "認定支援機関の成功報酬の相場は補助金額の何%ですか？", options: ["1〜3%", "5〜15%", "20〜30%", "50%以上"], answer: 1, explanation: "認定支援機関の成功報酬の相場は補助金額の5〜15%です。" },
                { id: "q302_2", type: "choice", question: "認定支援機関選びで最も重要でないものはどれですか？", options: ["採択実績があるか", "事務所の立地が便利か", "費用体系が明確か", "実績報告までフォローできるか"], answer: 1, explanation: "立地の便利さよりも、採択実績、費用の透明性、フォロー体制の方が重要です。" },
                { id: "q302_3", type: "choice", question: "事業計画書の作成支援の費用相場はいくらですか？", options: ["1万円〜5万円", "10万円〜30万円", "50万円〜100万円", "100万円以上"], answer: 1, explanation: "事業計画書の作成支援の費用相場は10万円〜30万円です。" },
                { id: "q302_4", type: "choice", question: "認定支援機関との正しい関わり方はどれですか？", options: ["全て丸投げする", "自分だけで全て行う", "一緒に事業計画書を作成する", "採択後は関わらない"], answer: 2, explanation: "認定支援機関には丸投げではなく、一緒に事業計画書を作成することが採択率向上につながります。" }
            ]
        },
        {
            id: 303,
            title: "GビズIDの概要と種類",
            duration: "15分",
            content: `
<h2>GビズIDとは</h2>
<p>GビズIDは、1つのアカウントで複数の行政サービスにアクセスできる認証システムです。補助金の電子申請に必須となります。</p>

<h3>利用できるサービス例</h3>
<ul>
<li>jGrants（補助金申請）</li>
<li>社会保険手続き</li>
<li>経営力向上計画の申請</li>
<li>その他の行政手続き</li>
</ul>

<h2>アカウントの種類</h2>
<table>
<thead><tr><th>種類</th><th>用途</th><th>申請方法</th><th>取得期間</th></tr></thead>
<tbody>
<tr><td>gBizIDプライム</td><td>補助金申請に必須</td><td>書類郵送 or オンライン</td><td>1〜2週間</td></tr>
<tr><td>gBizIDメンバー</td><td>従業員用</td><td>プライムから発行</td><td>即日</td></tr>
<tr><td>gBizIDエントリー</td><td>簡易サービス用</td><td>オンライン</td><td>即日</td></tr>
</tbody>
</table>

<div class="info-box danger">
<div class="info-box-title">重要</div>
<p>補助金申請には<strong>gBizIDプライム</strong>が必須です。エントリーやメンバーアカウントでは補助金の電子申請はできません。取得に1〜2週間かかるため、早めの申請が必要です。</p>
</div>
`,
            quiz: [
                { id: "q303_1", type: "choice", question: "補助金申請に必須のGビズIDの種類はどれですか？", options: ["gBizIDエントリー", "gBizIDプライム", "gBizIDメンバー", "gBizIDベーシック"], answer: 1, explanation: "補助金申請にはgBizIDプライムが必須です。" },
                { id: "q303_2", type: "choice", question: "gBizIDプライムの取得にかかる期間はどのくらいですか？", options: ["即日", "3〜5日", "1〜2週間", "1〜2か月"], answer: 2, explanation: "gBizIDプライムの取得には1〜2週間かかります。" },
                { id: "q303_3", type: "choice", question: "gBizIDメンバーはどのように発行されますか？", options: ["オンラインで自分で申請", "プライムアカウントから発行", "書類を郵送して申請", "商工会議所経由で申請"], answer: 1, explanation: "gBizIDメンバーはgBizIDプライムのアカウントから発行します。" },
                { id: "q303_4", type: "choice", question: "GビズIDで利用できないサービスはどれですか？", options: ["jGrants（補助金申請）", "社会保険手続き", "銀行口座の開設", "経営力向上計画の申請"], answer: 2, explanation: "GビズIDは行政サービスの認証システムであり、銀行口座の開設には使用できません。" }
            ]
        },
        {
            id: 304,
            title: "gBizIDプライムの取得手順",
            duration: "20分",
            content: `
<h2>gBizIDプライムの取得フロー</h2>
<ol>
<li><strong>STEP 1</strong>：GビズIDのサイト（gbiz-id.go.jp）にアクセス</li>
<li><strong>STEP 2</strong>：「gBizIDプライム作成」をクリック</li>
<li><strong>STEP 3</strong>：必要情報を入力（法人名、法人番号、所在地、代表者情報、メールアドレス、SMS受信用電話番号）</li>
<li><strong>STEP 4</strong>：申請書を印刷し、押印</li>
<li><strong>STEP 5</strong>：必要書類を郵送</li>
<li><strong>STEP 6</strong>：審査（1〜2週間）</li>
<li><strong>STEP 7</strong>：承認メール受信</li>
<li><strong>STEP 8</strong>：初回ログイン・パスワード設定</li>
<li><strong>STEP 9</strong>：SMSによる二要素認証の設定</li>
</ol>

<h3>法人の場合の必要書類</h3>
<ul>
<li>申請書（印鑑証明書の印と同じ印を押印）</li>
<li>印鑑証明書（原本、発行から3か月以内）</li>
</ul>

<h3>個人事業主の場合の必要書類</h3>
<ul>
<li>申請書</li>
<li>印鑑登録証明書（原本）</li>
</ul>

<h2>取得時の注意点</h2>
<div class="info-box danger">
<div class="info-box-title">よくある失敗</div>
<ul>
<li>印鑑証明書の印と申請書の印が異なる → やり直し</li>
<li>印鑑証明書の有効期限切れ → やり直し</li>
<li>法人番号の記載ミス → やり直し</li>
<li>申請書の住所と登記上の住所が異なる → やり直し</li>
</ul>
</div>

<div class="info-box tip">
<div class="info-box-title">対策</div>
<ul>
<li>公募締切の<strong>1か月前まで</strong>に申請を開始する</li>
<li>印鑑証明書は<strong>最新のもの</strong>を取得する</li>
<li>法人番号は<strong>国税庁の法人番号公表サイト</strong>で確認する</li>
<li>書類は提出前に<strong>ダブルチェック</strong>する</li>
</ul>
</div>
`,
            quiz: [
                { id: "q304_1", type: "choice", question: "gBizIDプライムの申請で必要な書類に含まれないものは？（法人の場合）", options: ["申請書（押印済み）", "印鑑証明書", "登記簿謄本", "上記はすべて必要"], answer: 2, explanation: "法人の場合、必要書類は申請書（押印済み）と印鑑証明書です。登記簿謄本は不要です。" },
                { id: "q304_2", type: "choice", question: "印鑑証明書の有効期限はいつまでですか？", options: ["発行から1か月以内", "発行から3か月以内", "発行から6か月以内", "発行から1年以内"], answer: 1, explanation: "印鑑証明書は発行から3か月以内のものが必要です。" },
                { id: "q304_3", type: "choice", question: "GビズID取得のための申請はいつまでに開始すべきですか？", options: ["公募締切の1週間前", "公募締切の2週間前", "公募締切の1か月前", "公募締切の3か月前"], answer: 2, explanation: "GビズIDプライムの取得に1〜2週間かかるため、公募締切の1か月前までに申請を開始すべきです。" },
                { id: "q304_4", type: "choice", question: "gBizIDプライムのセキュリティ設定に使われる認証方式は？", options: ["メール認証", "SMSによる二要素認証", "指紋認証", "マイナンバーカード認証"], answer: 1, explanation: "gBizIDプライムではSMSによる二要素認証が設定されます。" }
            ]
        }
    ]
};
