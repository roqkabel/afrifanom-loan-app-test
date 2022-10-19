module.exports = {
    HOST: "localhost",
    USER: "roqkabel",
    PASSWORD: "roqkabel",
    DB: "afrifanomdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };