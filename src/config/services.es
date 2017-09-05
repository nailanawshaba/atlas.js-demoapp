export default {
  database: {
    uri: process.env.POSTGRES_URI,
  },

  http: {
    listen: {
      port: process.env.PORT,
    },
  },
}
