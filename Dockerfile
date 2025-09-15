# node:22-alpineイメージをlinux/amd64プラットフォームでイメージ作成する(M2のデフォルトの場合動かない機能が出てくる可能性があるため指定)
FROM --platform=linux/amd64 node:22-alpine
# 文字コード、タイムゾーン設定(一旦保留)
# ENV LANG C.UTF-8
# ENV TZ Asia/Tokyo
# ビルドをする範囲をappディレクトリ配下に指定。(コンテナ内)
WORKDIR /app
# 作業ディレクトリに存在するpackage.jsonとyarn.lockファイルをコンテナ内のappディレクトリにコピーする。(変更点が少ないファイルのみ事前にコピーする)
COPY package.json yarn.lock ./
# コンテナ内に格納したpackage.jsonの内容を元にyarnを使用して環境構築を実行する
RUN yarn install
# Dockerfileと同じ階層にある全てのディレクトリやファイルをコンテナ内にコピーする(app)
COPY . .
# node.jsを開発環境に指定
ENV NODE_ENV=development
# テレメトリデータの収集をオフに設定
ENV NEXT_TELEMETRY_DISABLED=1
# イメージのポート番号を指定する
EXPOSE 3000
CMD ["yarn", "run", "dev"]