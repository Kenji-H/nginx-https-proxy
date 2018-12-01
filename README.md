nginx-https-proxy
=================================================

### 概要
以下の機能を `docker-compose` で実装したサンプルです。

- backendにAPIサーバがいる
- APIサーバはhttpsをサポートしていない
- nginxをリバースプロキシにしてhttpsに対応する

### 実行方法
```bash
$ cd web
$ openssl req -new -days 365 -x509 -nodes -keyout cert.key -out cert.crt
$ cd ..
$ docker-compose build
$ docker-compose up
```
