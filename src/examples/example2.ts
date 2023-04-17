import * as mysql from "mysql";

// 創建連接池.
const sqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "demo",
  port: 3306,
  connectionLimit: 10     // 連線限制10
});

// 包裝MySQL Pool使用Promise.
const sqlPromise = {
  // 查詢資料.
  query(sql: string, args?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      // 從ConnectionPool中取得一個連線.
      sqlPool.getConnection((err, connection) => {
        if (err) {
          // 取得連接失敗.
          reject(err);
        } else {
          // 進行查詢.
          connection.query(sql, args, (err, rows) => {
            if (err) {
              // 查詢失敗.
              reject(err);
            } else {
              // 查詢成功，並且將資料回傳
              resolve(rows);
            }
            // 釋放連線(將連線釋放回連線池，不然很快就會滿了).
            connection.release();
          });
        }
      });
    });
  },
  // 關閉連接池.
  close(): Promise<void> {
    return new Promise((resolve, reject) => {
      sqlPool.end((err) => {
        if (err) {
          // 關閉失敗.
          reject(err);
        } else {
          // 關閉成功.
          resolve();
        }
      });
    });
  },
};

export class Example2 {
  
  // 執行 CRUD 操作.
  async run() {
    try {
      // 插入一筆數據.
      const insertResult = await sqlPromise.query(
        "INSERT INTO user SET ?",
        { name: "test", desc: "測試帳號" }
      );
      console.log("Insert result:", insertResult);

      // 更新一筆數據.
      const updateResult = await sqlPromise.query(
        "UPDATE user SET ? WHERE id = ?",
        [{ desc: "更新測試帳號" }, insertResult.insertId]
      );
      console.log("Update result:", updateResult);

      // 查詢數據.
      const selectResult = await sqlPromise.query(
        "SELECT * FROM user WHERE name = ?",
        ["test"]
      );
      console.log("Select result:", selectResult);

      // 刪除數據.
      const deleteResult = await sqlPromise.query(
        "DELETE FROM user WHERE id = ?",
        insertResult.insertId
      );
      console.log("Delete result:", deleteResult);

      // 關閉連接池.
      await sqlPromise.close();
    } catch (err) {
      console.error(err);
    }
  }
}