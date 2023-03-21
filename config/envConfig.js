const {env} = process

const envConfig = {
    PORT: env.PORT,
    JWT_SECRET_KEY: env.JWT_SECRET_KEY,
}

module.exports = envConfig