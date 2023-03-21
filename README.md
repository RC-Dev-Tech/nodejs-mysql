# ![](https://drive.google.com/uc?id=10INx5_pkhMcYRdx_OO4rXNXxcsvPtBYq) NodeJs - MySQL 數據庫的操作(CURD)
> ##### 理論請自行找，網路上有很多相關的文章，這邊只關注於範例實作的部分.

<br>

<!--ts-->
## 目錄
* [簡介](#簡介)
* [操作說明](#操作說明)
* [參考資料](#參考資料)
* [備註](#備註)
<!--te-->

---
<br>

## 簡介
實作如何連接數據庫以及進行數據庫的操作(CURD)
- C - 建立資料 (Create)
- R - 讀取資料 (Read)
- U - 更新資料 (Update)
- D - 刪除資料 (Delete)

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

<br>

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
`npm install mysql` <br>
因為這個套件已經有被安裝並整合在package.json中，所以這邊直接下**npm install --save**的指令就好