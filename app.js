const sql = require('mssql')
const setting = require('./config/setting');
const fs = require('fs');

const func = {
  query: (dbPool) => {
    dbPool.request().query(setting.db.query, (err, ret) => {
      if (err) {
        console.log('[ERROR]', err);
        return;
      }
    });
  }
}

const dbPool = new sql.ConnectionPool(setting.db, err => {
  if (err) {
    console.log('[ERROR]', err);
    return;
  }

  for (var i = 0; i < setting.count; i++) {
    (function (i) {
      if (i % 10 == 0) {
        setTimeout(() => {
          func.query(dbPool);
        }, setting.interval);
      }

      console.log('[INFO] count ', i);

      func.query(dbPool);
    })(i);
  }
});
