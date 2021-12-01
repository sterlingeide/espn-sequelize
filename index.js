const { NBA } = require("./models");
const { NFL } = require("./models");
const { NHL } = require("./models");

// 1
// NFL.create({
//     team: 'Bills',
//     division: 'AFC East',
//     article: 'Keys to Pats-Bills' ,
//     record: '7-4',
//     passingYards: 271,
//     rushingYards: 118
// })
// .then(function(createdTeam) {
//     console.log('new team', createdTeam.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR with adding new team', err);
// });

// 1
// NBA.create({
//     team: 'Celtics',
//     conference: 'Eastern',
//     article: 'Cs Freedom willing to educate LeBron on China' ,
//     record: '11-10',
//     pointsPerGame: 107,
//     reboundsPerGame: 47,
//     assistsPerGame: 22
// })
// .then(function(createdTeam) {
//     console.log('new team', createdTeam.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR with adding new team', err);
// });

// 1
// NHL.create({
//     team: 'Bruins',
//     conference: 'Atlantic',
//     record: '11-8-0' ,
//     article: 'NHL Power Rankings',
//     goalsForPerGame: 3,
//     goalsAgainstPerGame: 3
// })
// .then(function(createdTeam) {
//     console.log('new team', createdTeam.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR with adding new team', err);
// });

// NFL.findAll({
//     where: {division: 'AFC East'}
// })
// .then(foundTeam=>{
//     console.log('Teams in the AFC East', foundTeam)
// })

// const { Op } = require("sequelize");
// NFL.findAll({
//     where: { 
//         passingYards: {
//             [Op.gt]: 250
//         }
//     }
// })
// .then(foundTeam => {
//     console.log('Teams with more than 250 passing yards', foundTeam);
// })
// .catch(function(err){
//     console.log('Error', err);
// })

// NBA.findAll({
//     where: {conference: 'Eastern'}
// })
// .then(foundTeam=>{
//     console.log('Teams in the Eastern conference', foundTeam)
// })

// const { Op } = require("sequelize");
// NBA.findAll({
//     where: { 
//         pointsPerGame: {
//             [Op.gt]: 100
//         }
//     }
// })
// .then(foundTeam => {
//     console.log('Teams with more than 100 points per game', foundTeam);
// })
// .catch(function(err){
//     console.log('Error', err);
// })


// NHL.findAll({
//     where: {conference: 'Atlantic'}
// })
// .then(foundTeam=>{
//     console.log('Teams in the Atlantic conference', foundTeam)
// })

// const { Op } = require("sequelize");
// NHL.findAll({
//     where: { 
//         goalsForPerGame: {
//             [Op.gt]: 2
//         }
//     }
// })
// .then(foundTeam => {
//     console.log('Teams with more than 2 goals per game', foundTeam);
// })
// .catch(function(err){
//     console.log('Error', err);
// })

// NFL.findOne({
//     where: {team: 'Bills'}
// })
// .then(foundTeam=>{
//     console.log('The Bills', foundTeam)
// })

// NBA.findOne({
//     where: {team: 'Celtics'}
// })
// .then(foundTeam=>{
//     console.log('The Celtics', foundTeam)
// })

// NHL.findOne({
//     where: {team: 'Bruins'}
// })
// .then(foundTeam=>{
//     console.log('The Bruins', foundTeam)
// })

// NFL.update({
//     article: 'Bills receiver Stefon Diggs embracing leadership role and Buffalo community'
//   }, {
//     where: {
//       article: 'Keys to Pats-Bills'
//     }
// }).then(numRowsChanged=>{
//     console.log(numRowsChanged)
// });

// NBA.update({
//     article: 'Celtics Kanter to change last name to Freedom'
//   }, {
//     where: {
//       article: 'Cs Freedom willing to educate LeBron on China'
//     }
// }).then(numRowsChanged=>{
//     console.log(numRowsChanged)
// });

// NHL.update({
//     article: 'Boston Bruins coach Bruce Cassidy placed in COVID-19 protocol'
//   }, {
//     where: {
//       article: 'NHL Power Rankings'
//     }
// }).then(numRowsChanged=>{
//     console.log(numRowsChanged)
// });

// NFL.destroy({
//     where: { team: 'Bills' }
// })
// .then(numRowsDeleted=>{
//       console.log(numRowsDeleted)
//     // do something when done deleting
// });

// NBA.destroy({
//     where: { team: 'Celtics' }
// })
// .then(numRowsDeleted=>{
//       console.log(numRowsDeleted)
//     // do something when done deleting
// });

// NHL.destroy({
//     where: { team: 'Bruins' }
// })
// .then(numRowsDeleted=>{
//       console.log(numRowsDeleted)
//     // do something when done deleting
// });