/*
 * @Descripttion: 
 * @Author: sunft
 * @Date: 2020-04-15 13:11:24
 * @LastEditTime: 2020-05-19 18:12:43
 */
/* eslint-disable */
/* sequelize基础配置文件 */
const Sequelize = require('sequelize');
const sequelize = new Sequelize('common', 'root', '123456', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

module.exports = sequelize;