# ![](https://drive.google.com/uc?id=10INx5_pkhMcYRdx_OO4rXNXxcsvPtBYq) NodeJs - MySQL 數據庫的操作(CURD)
> ##### 理論請自行找，網路上有很多相關的文章，這邊只關注於範例實作的部分.

<br>

<!--ts-->
## 目錄
* [簡介](#簡介)
* [使用套件](#使用套件)
* [操作說明](#操作說明)
* [延伸項目](#延伸項目)
* [參考資料](#參考資料)
* [備註](#備註)
<!--te-->

---
<br>

## 簡介
***重點1:*** <br>
mysql 和 mysql2 是 Node.js 中操作 MySQL 資料庫的兩個常用套件. <br>
其中，mysql 套件在舊版 Node.js 中使用較多，而 mysql2 則是較新的版本。<br>
如果你正在使用較新的 Node.js 版本，建議使用 mysql2 套件。<br>
<br>

***重點2:*** <br>
createPool 和 createConnection 都是 MySQL 模組提供的函式，用於建立與資料庫的連線。<br>
不同之處在於 createConnection 是建立單一連線，而 createPool 則是建立一個連線池，可以同時處理多個連線。<br>
<br>
使用 createConnection 時，每次呼叫都會建立一個新的連線物件，需要手動釋放連線資源。<br>
而使用 createPool 則是在一開始建立一個連線池，之後每次需要連線時都從連線池中取出一個可用的連線物件，<br>
執行完資料庫操作後，將連線歸還至連線池中，這樣可以避免每次都重新建立連線，提高了效能和資源利用率。<br>
<br>
簡單來說，如果是單線程、對資料庫的操作較少、不需要支援多執行緒，可以考慮使用 createConnection。<br>
如果需要支援多執行緒，或者同時需要處理多個資料庫請求，可以考慮使用 createPool。<br>

<br>

實作如何連接數據庫以及進行數據庫的操作(CURD)
- C - 建立資料 (Create)
- R - 讀取資料 (Read)
- U - 更新資料 (Update)
- D - 刪除資料 (Delete)

<br>

實作範例:
- [Example1](https://github.com/RC-Dev-Tech/nodejs-mysql/blob/main/src/examples/example1.ts) - MySQL基本使用(CRUD).
- [Example2](https://github.com/RC-Dev-Tech/nodejs-mysql/blob/main/src/examples/example2.ts) - MySQL非同步使用(CRUD).

---
<br>

## 使用套件.
- mysql

---
<br>

## 操作說明.
#### 1. 安裝MySQL[^1]
> 請自行上網查詢，或著可以參考下方的分享資料.
#### 2. 安裝Workbench[^2]
> 請自行上網查詢，或著可以參考下方的分享資料.
#### 2. 安裝套件 [^3]
> npm install --save
#### 3. 編譯 & 運行
> npm run start

---
<br>

## 延伸項目
* [NodeJs 系列實作](https://github.com/RC-Dev-Tech/nodejs-index) <br>

---
<br>

## 參考資料
* [Sean Yeh - MySQL資料庫的安裝與基本操作](https://medium.com/web-design-zone/mysql%E8%B3%87%E6%96%99%E5%BA%AB%E7%9A%84%E5%AE%89%E8%A3%9D%E8%88%87%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C-f36a079afd85) <br>
* [iThome - MySQL Workbench 使用](https://ithelp.ithome.com.tw/articles/10215161) <br>
* [RUNOOB - Node.js 連接使用MySQL](https://www.runoob.com/nodejs/nodejs-mysql.html) <br>
* [Node.js 系列學習日誌 - 連接MySQL並實現CRUD操作-資料存取前的準備](https://ithelp.ithome.com.tw/articles/10160090) <br>
* [比較 npm中的mysql和mysql2](https://npmcompare.com/compare/mysql,mysql2) <br>
* [解決Node.js Mysql客戶端不支援認證協議所引發的"ER_NOT_SUPPORTED_AUTH_MODE問題"](https://waylau.com/node.js-mysql-client-does-not-support-authentication-protocol/) <br>

---
<!--ts-->
#### [目錄 ↩](#目錄)
<!--te-->
---
## 備註：
[^1]: 由於該範例是著重在MySQL(CURD)的操作，所以安裝MySQL跟其操作細節，這邊就不多加說明.
[^2]: 同上.
[^3]: 在這個範例中我們需要安裝部分套件，指令如下：<br>
`npm install mysql --save` <br>
因為這個套件已經有被安裝並整合在package.json中，所以這邊直接下**npm install --save**的指令就好