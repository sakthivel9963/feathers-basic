module.exports = {
  host: 'localhost',
  port: 3030,
  public: '../public/',
  paginate: {
    default: 10,
    max: 50,
  },
  authentication: {
    entity: 'user',
    service: 'users',
    secret: process.env.JWT_SECRET,
    authStrategies: ['jwt', 'local'],
    jwtOptions: {
      header: {
        typ: 'access',
      },
      audience: 'https://yourdomain.com',
      issuer: 'feathers',
      algorithm: 'HS256',
      expiresIn: '1d',
    },
    local: {
      usernameField: 'email',
      passwordField: 'password',
    },
  },
  mysql: {
    client: 'mysql2',
    connection: process.env.DATABASE_CONNECTION,
  },
};
