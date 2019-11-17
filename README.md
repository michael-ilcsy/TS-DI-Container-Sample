# TS-DI-Container-Sample

tsyringeを使ったDIのサンプル

## 動作

該当環境のメッセージが出力されます

* `yarn dev`
  * 開発環境想定コマンド
* `yarn prod`
  * 本番環境想定コマンド
* `yarn dev`
  * テスト環境想定コマンド

## Tips

* 文字列でのinjectionTokenの登録を避けるため、symbolでの定義を別途 `types.ts` に作成し、それをcontainer側とinjectされる側の両方で使用しています。
* containerへの依存を最小限にするために、 `container.ts` に必要な記述をできる限りまとめています。

## 参考ドキュメント

https://github.com/microsoft/tsyringe  
https://github.com/inversify/InversifyJS