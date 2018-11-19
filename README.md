# frontend-templates-cli
フロントエンドのテンプレートを簡単にダウンロードできるCLIツールです。

## インストール

```
$ npm install gigf-cli -g
```

## テンプレートのダウンロード

必要最低限のテンプレート（master）を使用する場合:

```
$ gigf init
```

拡張テンプレートを使用する場合:

```
$ gigf init <テンプレート名>
```

プロジェクト名を聞かれるので、入力後に実行中のディレクトリにテンプレートが展開されます。

```
# Project Name?: ___
```

## 拡張テンプレートの確認

リポジトリ上に存在している`template/`ブランチのリストを確認することができます。

```
$ gigf ls

# - lp
# - pug
# - ejs
# - wordpress
# - aquamarine
```
