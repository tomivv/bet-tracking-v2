const { Knex } = require("knex");
const dotenv = require("dotenv");
dotenv.config({ path: __dirname+'/.env'})

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST
    },
    migrations: {
      directory: __dirname + '/src/db/migrations',
    },
    seeds: {
      directory: __dirname  + '/src/db/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: {
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST
    },
    migrations: {
      directory: __dirname + '/src/db/mirations',
    },
    seeds: {
      directory: __dirname  + '/src/db/seeds'
    }
  }
}