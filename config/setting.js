const setting = {
  db: {
    user: 'handsomeboy',
    password: 'handsomeboy1!',
    server: '172.28.66.114',
    port: 1433,
    database: 'master',
    requestTimeout: 0,
    pool: {
        max: 100,
        min: 5,
        idleTimeoutMillis: 0
    },
    query: 'SELECT * from master.dbo.spt_values A cross join master.dbo.spt_values B;'
  },
  count: 50,
  interval: 1000
};

module.exports = setting;
