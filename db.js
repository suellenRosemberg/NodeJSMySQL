const Sequelize = require('sequelize');

const componenteSequelize = new Sequelize('dbproduto','root','007100',
{
    dialect:'mysql', host:'localhost', port: 3308
});

module.exports = componenteSequelize;