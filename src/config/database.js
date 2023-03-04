//module.exports = 
 export default {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'codeburger',
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true,
    },
}