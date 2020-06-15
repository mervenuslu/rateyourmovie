module.exports = {
    apps : [{
      name: "rateyourmovie-api",
      script: "./index.js",
      instances: "max",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        PORT:8080,
        NODE_ENV: "production",
      }
    }]
  }