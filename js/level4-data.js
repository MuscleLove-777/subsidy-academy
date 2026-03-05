const LEVEL4_DATA = {
    id: 4,
    title: "電子申請と不採択対策",
    icon: "💻",
    description: "jGrantsでの電子申請手順とよくある不採択理由への対策",
    modules: [
        {
            id: 401,
            title: "jGrantsとは",
            duration: "15分",
            content: `
<h2>jGrantsの概要</h2>
<p>jGrants（ジェイグランツ）は、経済産業省が運営する補助金の電子申請システムです。</p>

<h3>jGrantsの特徴</h3>
<ul>
<li><strong>24時間</strong>申請可能</li>
<li>書類の<strong>郵送不要</strong></li>
<li>申請状況を<strong>オンラインで確認</strong>可能</li>
<li><strong>GビズIDプライム</strong>でログイン</li>
</ul>

<h2>申請の全体フロー</h2>
<ol>
<li>GビズIDプライムでjGrantsにログイン</li>
<li>対象の補助金を検索</li>
<li>公募要領・申請様式をダウンロード</li>
<li>申請フォームに入力（事業者情報、事業計画の概要、経費内訳等）</li>
<li>添付書類のアップロード（事業計画書PDF、決算書PDF、見積書PDF等）</li>
<li>入力内容の最終確認</li>
<li>申請ボタンをクリック</li>
<li>受付完了メールの確認</li>
<li>マイページで申請状況を確認</li>
</ol>

<div class="info-box tip">
<div class="info-box-title">申請フォームの入力項目</div>
<p>事業者情報は一部自動入力されます。事業計画の概要や経費内訳など、事前に内容を準備しておくとスムーズに入力できます。</p>
</div>
`,
            quiz: [
                { id: "q401_1", type: "choice", question: "jGrantsを運営しているのはどこですか？", options: ["中小企業庁", "経済産業省", "総務省", "財務省"], answer: 1, explanation: "jGrantsは経済産業省が運営する補助金の電子申請システムです。" },
                { id: "q401_2", type: "choice", question: "jGrantsへのログインに必要なものは何ですか？", options: ["マイナンバーカード", "GビズIDプライム", "法人番号のみ", "メールアドレスのみ"], answer: 1, explanation: "jGrantsへのログインにはGビズIDプライムが必要です。" },
                { id: "q401_3", type: "choice", question: "jGrantsの特徴として正しくないものはどれですか？", options: ["24時間申請可能", "書類の郵送不要", "申請状況をオンラインで確認可能", "対面での手続きが必須"], answer: 3, explanation: "jGrantsは電子申請システムなので対面での手続きは不要です。24時間申請可能で、書類郵送も不要です。" }
            ]
        },
        {
            id: 402,
            title: "jGrantsの申請テクニック",
            duration: "15分",
            content: `
<h2>申請時のコツ</h2>
<ul>
<li>締切日当日はアクセスが集中して不安定になる → <strong>2〜3日前に提出</strong></li>
<li>PDFファイルは<strong>容量上限に注意</strong>（通常10MB程度）</li>
<li>ファイル名は日本語でわかりやすく命名</li>
<li>提出前に「<strong>一時保存</strong>」機能を活用する</li>
<li>複数人で確認してから提出する</li>
</ul>

<h2>よくあるトラブルと対処法</h2>
<table>
<thead><tr><th>トラブル</th><th>対処法</th></tr></thead>
<tbody>
<tr><td>ブラウザの互換性問題</td><td>Chrome推奨</td></tr>
<tr><td>アップロードエラー</td><td>ファイル容量の圧縮</td></tr>
<tr><td>セッション切れ</td><td>こまめに一時保存</td></tr>
<tr><td>GビズIDのパスワード忘れ</td><td>事前に確認・再設定</td></tr>
</tbody>
</table>

<h2>申請後の流れ</h2>
<ol>
<li>申請完了</li>
<li>事務局による<strong>形式審査</strong>（不備があれば差し戻し・修正依頼）</li>
<li>外部審査員による<strong>内容審査</strong></li>
<li>採択結果の通知（jGrants上 + メール）</li>
</ol>

<div class="info-box warning">
<div class="info-box-title">採択の場合</div>
<p>交付申請手続きへ進みます。</p>
</div>

<div class="info-box tip">
<div class="info-box-title">不採択の場合</div>
<p>次回公募に再チャレンジ可能です。不採択理由を分析し、改善した上で再申請しましょう。</p>
</div>
`,
            quiz: [
                { id: "q402_1", type: "choice", question: "jGrantsでの申請を提出するのに最適なタイミングは？", options: ["締切日当日", "締切の2〜3日前", "締切の1か月前", "締切の翌日"], answer: 1, explanation: "締切日当日はアクセスが集中して不安定になるため、2〜3日前に提出するのが最適です。" },
                { id: "q402_2", type: "choice", question: "jGrantsで推奨されるブラウザはどれですか？", options: ["Internet Explorer", "Safari", "Chrome", "Firefox"], answer: 2, explanation: "jGrantsではChromeの使用が推奨されています。" },
                { id: "q402_3", type: "choice", question: "セッション切れを防ぐための対策は何ですか？", options: ["高速なネット環境を用意する", "こまめに一時保存する", "ブラウザを再起動する", "複数タブで作業する"], answer: 1, explanation: "セッション切れを防ぐためには、こまめに一時保存機能を活用することが重要です。" },
                { id: "q402_4", type: "choice", question: "申請後、最初に行われる審査はどれですか？", options: ["内容審査", "口頭審査", "形式審査", "現地審査"], answer: 2, explanation: "申請後、まず事務局による形式審査が行われ、不備があれば差し戻しとなります。" }
            ]
        },
        {
            id: 403,
            title: "よくある不採択理由TOP5",
            duration: "20分",
            content: `
<h2>不採択理由ランキング</h2>
<table>
<thead><tr><th>順位</th><th>不採択理由</th></tr></thead>
<tbody>
<tr><td>1位</td><td>事業の革新性・独自性が不明確</td></tr>
<tr><td>2位</td><td>数値計画の根拠が不十分</td></tr>
<tr><td>3位</td><td>事業の実現可能性に疑問</td></tr>
<tr><td>4位</td><td>市場分析・競合分析が不足</td></tr>
<tr><td>5位</td><td>審査項目への対応が不十分</td></tr>
</tbody>
</table>

<h2>理由1：事業の革新性・独自性が不明確</h2>
<div class="info-box danger">
<div class="info-box-title">NG例</div>
<p>「最新のシステムを導入して業務効率化を図ります」→ 誰でもできる内容で革新性が見えない</p>
</div>
<div class="info-box success">
<div class="info-box-title">OK例</div>
<p>「自社独自の技術とAIを組み合わせた新工法により、従来比70%の工期短縮を実現する。この工法は業界初であり、特許出願を予定している」→ 具体的で独自性が明確</p>
</div>

<h2>理由2：数値計画の根拠が不十分</h2>
<div class="info-box danger">
<div class="info-box-title">NG例</div>
<p>売上目標：1億円（前年比150%）→ 根拠が示されていない</p>
</div>
<div class="info-box success">
<div class="info-box-title">OK例</div>
<p>売上目標1億円の算出根拠を示す場合：既存顧客からの受注増3,000万円（ヒアリング済み企業リスト添付）、新規顧客開拓1,500万円（展示会2回出展で50社接触、商談率20%、成約率30%から算出）、既存事業の維持5,500万円（前年実績ベース）、合計1億円。</p>
</div>

<h2>理由3：事業の実現可能性に疑問</h2>
<p>以下のチェックリストで確認しましょう。</p>
<ul>
<li>社内に必要な<strong>人材・スキル</strong>があるか説明しているか</li>
<li><strong>実施体制</strong>（組織図）を示しているか</li>
<li>現実的な<strong>スケジュール</strong>になっているか</li>
<li><strong>資金繰り</strong>（補助金は後払い）を説明しているか</li>
<li><strong>リスクと対策</strong>を記載しているか</li>
</ul>
`,
            quiz: [
                { id: "q403_1", type: "choice", question: "不採択理由の1位は何ですか？", options: ["数値計画の根拠が不十分", "市場分析が不足", "事業の革新性・独自性が不明確", "形式要件の不備"], answer: 2, explanation: "不採択理由の1位は「事業の革新性・独自性が不明確」です。" },
                { id: "q403_2", type: "choice", question: "数値計画の根拠として適切なものはどれですか？", options: ["売上を増やします", "前年比150%を目指します", "ヒアリング済み企業リストに基づく受注増の積算", "業界トップを目指します"], answer: 2, explanation: "具体的な根拠（ヒアリング済みの企業リストや展示会からの商談率など）を示すことが重要です。" },
                { id: "q403_3", type: "choice", question: "事業の実現可能性で説明すべきでないものは？", options: ["実施体制（組織図）", "資金繰り", "代表者の趣味", "リスクと対策"], answer: 2, explanation: "代表者の趣味は実現可能性の説明には不要です。実施体制、資金繰り、リスク対策の説明が重要です。" }
            ]
        },
        {
            id: 404,
            title: "不採択からの復活戦略",
            duration: "20分",
            content: `
<h2>不採択理由の続き</h2>

<h3>理由4：市場分析・競合分析が不足</h3>
<p>事業計画書に含めるべき分析は以下の通りです。</p>
<ul>
<li>市場規模（TAM/SAM/SOM）</li>
<li>市場の成長率</li>
<li>競合分析（3社以上）</li>
<li>自社のポジショニング</li>
<li>ターゲット顧客の明確化</li>
</ul>

<h3>参考データの入手先</h3>
<table>
<thead><tr><th>情報源</th><th>内容</th></tr></thead>
<tbody>
<tr><td>経済産業省の統計</td><td>業界全体の動向・市場規模</td></tr>
<tr><td>業界団体の調査報告書</td><td>業界特有の詳細データ</td></tr>
<tr><td>矢野経済研究所等の市場調査</td><td>市場規模・成長率の詳細</td></tr>
<tr><td>自社の顧客アンケート</td><td>独自のニーズ調査データ</td></tr>
</tbody>
</table>

<h2>不採択からの復活手順</h2>
<ol>
<li><strong>不採択通知を確認</strong>（事務局に問い合わせも可能）</li>
<li><strong>審査項目と自社の計画書を照合</strong>して弱点を特定</li>
<li>専門家（<strong>認定支援機関</strong>）のレビューを受ける</li>
<li><strong>数値の根拠を強化</strong>する</li>
<li><strong>加点項目を追加取得</strong>する</li>
<li>文章を<strong>第三者にチェック</strong>してもらう</li>
<li>次回公募に<strong>再申請</strong></li>
</ol>

<div class="info-box tip">
<div class="info-box-title">復活のポイント</div>
<p>不採択は珍しいことではありません。多くの企業が2回目、3回目の申請で採択されています。不採択理由を分析し、弱点を補強して再チャレンジしましょう。加点項目の追加取得も効果的です。</p>
</div>

<div class="info-box warning">
<div class="info-box-title">その他の不採択理由</div>
<ul>
<li>6位：文章がわかりにくい</li>
<li>7位：経費の妥当性に疑問</li>
<li>8位：補助事業と自社の強みが不一致</li>
<li>9位：加点項目を取得していない</li>
<li>10位：形式要件の不備</li>
</ul>
</div>
`,
            quiz: [
                { id: "q404_1", type: "choice", question: "市場分析で推奨される競合分析の最低社数は？", options: ["1社", "2社", "3社", "5社"], answer: 2, explanation: "競合分析は3社以上で行うことが推奨されています。" },
                { id: "q404_2", type: "choice", question: "不採択後の復活手順で最初に行うべきことは？", options: ["すぐに再申請する", "認定支援機関を変更する", "不採択通知を確認し弱点を特定する", "補助金を諦める"], answer: 2, explanation: "まず不採択通知を確認し、審査項目と計画書を照合して弱点を特定することが最初のステップです。" },
                { id: "q404_3", type: "choice", question: "TAM/SAM/SOMとは何の分析に使われますか？", options: ["競合分析", "市場規模分析", "財務分析", "リスク分析"], answer: 1, explanation: "TAM（Total Addressable Market）、SAM（Serviceable Addressable Market）、SOM（Serviceable Obtainable Market）は市場規模分析で使われるフレームワークです。" },
                { id: "q404_4", type: "choice", question: "不採択から復活するために効果的でないのは？", options: ["数値の根拠を強化する", "同じ計画書をそのまま再提出する", "加点項目を追加取得する", "認定支援機関のレビューを受ける"], answer: 1, explanation: "同じ計画書をそのまま再提出しても同じ結果になる可能性が高いです。弱点を改善した上で再申請する必要があります。" }
            ]
        }
    ]
};
