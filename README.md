# discord_reply_bot

Node.jsとGoogleAppScript(以下GAS)
を利用したDiscord自動応答BOTの作成です。

# Features

応答するキーワードと返すメッセージは、
Googleスプレッドシートで設定できます。

# Requirement

* Node.js 12.16

# Usage

* Discord developにてBOTを作成
割愛します。
* Nodeの構築
Node.jsを構築し「app」ディレクトリのソースコードを配置
※作成者はGlitchを仕様(「app」ディレクトリを圧縮してImportで取込可能)
* GASの構築
GASにて新規プロジェクトの作成
新規のGoogleSpreadsheetを作成
「GAS」ディレクトリ内のソースコードを配置
* 各環境変数を設定
Node:「.env」内の「DISCORD_BOT_TOKEN」「GAS_URI」を設定
GAS：「env.gs」内の各変数を設定
* Glitch利用の場合
スリープを防ぐため「GAS/RetainGlitch.gs」の「doRetain」関数を
GASトリガーにて5分ごとで回してください。

# Note

GoogleSpreadsheetの2行目から読み込むようにしてます。
A列に「反応するキーワード」を記載
B列に「返すメッセージ」を記載

# Author

* 作成者
HOUSEN

# License

"discord_reply_bot" is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).