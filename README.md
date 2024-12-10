# 🚀 JWS Astro Template

## 目的

Astro, TypeScript, SCSSを使用して静的サイトを作成するためのテンプレート。

## 機能

- 画像をWebP/AVIFに変換
- `<picture>`をコンポーネント化
- `<svg>`をコンポーネント化
- メタデータを一括管理
- ESLint/Prettierによるコード整形
- HTMLのminifyと成形
- Wordpress用のビルド設定

## Node.jsのバージョン

- Node.js v20.10.0
- npm v10.2.5

## コマンド

| Command           | Action                             |
| ---------------   | ---------------------------------- |
| `npm install`     | パッケージのインストール                 |
| `npm run dev`     | 開発環境の起動                         |
| `npm run devimg`  | 画像別パスの開発環境                    |
| `npm run build`   | ビルド                               |
| `npm run buildwp` | Wordpress用のビルド                   |
| `npm run buildimg` | 画像別パス用のビルド                   |
| `npm run image`   | 画像をWebP/AVIFに変換                 |

## ディレクトリ構造

```bash
.
├── config                # npm scripts とastroconfigの設定ファイル
│   ├── add-param.mjs     # scripts、styleの後にパラメータを追加
│   ├── imagemin.mjs      # 画像圧縮設定ファイル
│   └── indexPages.ts     # astroconfigの書き出しファイル
├── dist                  # 出力先
├── public                #　public
│   ├── assets            # publicのassets
│   │   ├── images        # 圧縮された画像の出力先
│   │   └── svg           # SVGの格納先
├── src                   #　ソース
│   ├── components        # componentを格納
│   │   ├── modules       # componentのmodule
│   │   └── pages         # componentのpage固有
│   ├── data              # dataを格納
│   │   └── metadata.ts   # metadata設定ファイル
│   ├── images            # 画像を格納
│   ├── layouts           # レイアウトを格納
│   │   ├── components    # レイアウトのcomponent
│   │   └── Layout.astro  # レイアウトの設定ファイル
│   ├── pages             # astroのページ
│   ├── styles            # style
│   │   ├── components    # scssのcomponent
│   │   ├── foundation    # scssのfaundation
│   │   ├── layouts       # scssのlayout
│   │   ├── mixins        # scssのmixins
│   │   ├── pages         # scssのpage固有
│   │   ├── utility       # scssのutility
│   │   ├── vars          # scssのvars
│   │   ├── _import.scss  # scssのmixinとvarsのインポートファイル
│   │   ├── _mixins.scss  # scssのmixinの設定ファイル
│   │   ├── _vars.scss    # scssのvarsの設定ファイル
│   │   └── main.scss     #　scssのメインファイル
│   ├── ts                # ts
│   │   ├── _entry        # tsのentry
│   │   ├── components    # tsのcomponent
│   │   └── utility       # tsのutility
│   ├── utils             # JSやAstro用のユーティリティ
│   └── env.d.ts          # 環境変数の型定義
├── .editorconfig         # editorconfig
├── .env                  # パス等の設定ファイル
├── .eslintrc.cjs         # eslintの設定ファイル
├── .gitattributes        # gitattributes
├── .gitignore            # gitignore
├── .jsbeautifyrc         # jsbeautifyの設定ファイル
├── .npmrc                # gsap用のファイル
├── .prettierignore       # prettierの無視ファイル
├── .prettierrc           # prettierの設定ファイル
├── astro.config.mjs      # astroの設定ファイル
├── package.json          # package.json
├── postcss.config.cjs    # postcssの設定ファイル
├── README.md             # README
└── tsconfig.json         # tsの設定ファイル
```

## 使用技術スタック

- Astro
- TypeScript
- SCSS
- ESLint
- Prettier

## スクロールコンテンツ

classに`js-scroll`を追加することでスクロールコンテンツになります。
また、`data-overlayscrollbars-initialize`と`data-lenis-prevent`を追加することでスクロールバーのスタイルを変更し、スクロールバーの表示を抑制します。

```html
<div
  class='js-scroll'
  data-overlayscrollbars-initialize
  data-lenis-prevent
>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, odit.
    Earum repellat magnam esse. Ipsa labore inventore quia iusto ducimus
    cupiditate dignissimos dolorem dolor, est pariatur a, nisi hic ex!
  </p>
</div>
```
