module.exports = {
  port: process.env.port || 8081,
  db: {
    database: process.env.DB_NAME || 'testdb',
    uses: process.env.DB_USER || 'test user',
    password: process.env.DB_PASS || 'test password',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './testdb.sqlite'
    }
  }
}
