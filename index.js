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

// 2
// NFL.create({
//     team: 'Dolphins',
//     division: 'AFC East',
//     article: 'How good is your NFL coach on fourth-down calls? We rank all 32' ,
//     record: '5-7',
//     passingYards: 231,
//     rushingYards: 80
// })
// .then(function(createdTeam) {
//     console.log('new team', createdTeam.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR with adding new team', err);
// });

// //3
// NFL.create({
//     team: 'Patriots',
//     division: 'AFC East',
//     article: 'NFL Week 13 buzz: Keys to Pats-Bills' ,
//     record: '8-4',
//     passingYards: 240,
//     rushingYards: 115
// })
// .then(function(createdTeam) {
//     console.log('new team', createdTeam.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR with adding new team', err);
// });

// //4
// NFL.create({
//     team: 'Jets',
//     division: 'AFC East',
//     article: 'How good is your NFL coach on fourth-down calls? We rank all 32' ,
//     record: '3-8',
//     passingYards: 245,
//     rushingYards: 86
// })
// .then(function(createdTeam) {
//     console.log('new team', createdTeam.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR with adding new team', err);
// });

// //5
// NFL.create({
//     team: 'Ravens',
//     division: 'AFC North',
//     article: 'He changed my sons life: How the Ravens Mark Andrews inspires others with diabetes' ,
//     record: '8-3',
//     passingYards: 243,
//     rushingYards: 151
// })
// .then(function(createdTeam) {
//     console.log('new team', createdTeam.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR with adding new team', err);
// });

// //6
// NFL.create({
//     team: 'Steelers',
//     division: 'AFC North',
//     article: 'Tomlin promises changes for stumbling Steelers' ,
//     record: '5-5-1',
//     passingYards: 238,
//     rushingYards: 87
// })
// .then(function(createdTeam) {
//     console.log('new team', createdTeam.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR with adding new team', err);
// });

// //7
// NFL.create({
//     team: 'Eagles',
//     division: 'NFC East',
//     article: 'Jalen Reagor, after critical drop, faces pivotal moment in career with Eagles' ,
//     record: '5-7',
//     passingYards: 193,
//     rushingYards: 158
// })
// .then(function(createdTeam) {
//     console.log('new team', createdTeam.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR with adding new team', err);
// });

// //8
// NFL.create({
//     team: 'Falcons',
//     division: 'NFC South',
//     article: 'Cordarrelle Patterson finds fit, ignites Atlanta Falcons offense' ,
//     record: '5-6',
//     passingYards: 225,
//     rushingYards: 85
// })
// .then(function(createdTeam) {
//     console.log('new team', createdTeam.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR with adding new team', err);
// });

// //9
// NFL.create({
//     team: 'Chargers',
//     division: 'AFC West',
//     article: 'Los Angeles Chargers on a quest to break out of up-and-down pattern' ,
//     record: '6-5',
//     passingYards: 281,
//     rushingYards: 103
// })
// .then(function(createdTeam) {
//     console.log('new team', createdTeam.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR with adding new team', err);
// });

// //10
// NFL.create({
//     team: 'Raiders',
//     division: 'AFC West',
//     article: 'Star TE Waller (knee) ruled out in Raiders win' ,
//     record: '6-5',
//     passingYards: 297,
//     rushingYards: 89
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

// 2
// NBA.create({
//     team: 'Knicks',
//     conference: 'Eastern',
//     article: 'Knicks peeved over officiating in loss to Nets' ,
//     record: '11-10',
//     pointsPerGame: 106,
//     reboundsPerGame: 46,
//     assistsPerGame: 22
// })
// .then(function(createdTeam) {
//     console.log('new team', createdTeam.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR with adding new team', err);
// });

// // 3
// NBA.create({
//     team: 'Trail Blazers',
//     conference: 'Western',
//     article: 'Trail Blazers snap 3-game skid with 110-92 win over Detroit' ,
//     record: '11-11',
//     pointsPerGame: 110,
//     reboundsPerGame: 45,
//     assistsPerGame: 24
// })
// .then(function(createdTeam) {
//     console.log('new team', createdTeam.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR with adding new team', err);
// });

// // 4
// NBA.create({
//     team: 'Nuggets',
//     conference: 'Western',
//     article: 'Is Denver headed for the play-in? What Michael Porter Jr.s injury means for the Nuggets' ,
//     record: '10-10',
//     pointsPerGame: 104,
//     reboundsPerGame: 43,
//     assistsPerGame: 24
// })
// .then(function(createdTeam) {
//     console.log('new team', createdTeam.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR with adding new team', err);
// });

// // 5
// NBA.create({
//     team: 'Golden State Warriors',
//     conference: 'Western',
//     article: 'UConn star Fudd inks deal with Curry brand' ,
//     record: '18-3',
//     pointsPerGame: 113,
//     reboundsPerGame: 47,
//     assistsPerGame: 29
// })
// .then(function(createdTeam) {
//     console.log('new team', createdTeam.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR with adding new team', err);
// });

// // 6
// NBA.create({
//     team: 'Thunder',
//     conference: 'Western',
//     article: 'Woods big night leads Rockets over Thunder 102-89' ,
//     record: '6-14',
//     pointsPerGame: 99,
//     reboundsPerGame: 48,
//     assistsPerGame: 20
// })
// .then(function(createdTeam) {
//     console.log('new team', createdTeam.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR with adding new team', err);
// });

// // 7
// NBA.create({
//     team: 'Bulls',
//     conference: 'Eastern',
//     article: 'Bulls, Heat lose picks over Lonzo, Lowry deals' ,
//     record: '14-8',
//     pointsPerGame: 109,
//     reboundsPerGame: 43,
//     assistsPerGame: 23
// })
// .then(function(createdTeam) {
//     console.log('new team', createdTeam.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR with adding new team', err);
// });

// // 8
// NBA.create({
//     team: 'Heat',
//     conference: 'Eastern',
//     article: 'Bulls, Heat lose picks over Lonzo, Lowry deals' ,
//     record: '13-8',
//     pointsPerGame: 109,
//     reboundsPerGame: 46,
//     assistsPerGame: 24
// })
// .then(function(createdTeam) {
//     console.log('new team', createdTeam.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR with adding new team', err);
// });

// // 9
// NBA.create({
//     team: 'Hawks',
//     conference: 'Eastern',
//     article: 'Hawks say Bogdanovic out at least two weeks' ,
//     record: '11-10',
//     pointsPerGame: 110,
//     reboundsPerGame: 46,
//     assistsPerGame: 24
// })
// .then(function(createdTeam) {
//     console.log('new team', createdTeam.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR with adding new team', err);
// });

// // 10
// NBA.create({
//     team: 'Mavericks',
//     conference: 'Western',
//     article: 'Luka returns, helps Mavs hold off Clippers in OT' ,
//     record: '10-9',
//     pointsPerGame: 104,
//     reboundsPerGame: 44,
//     assistsPerGame: 23
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

// 2
// NHL.create({
//     team: 'Maple Leafs',
//     conference: 'Atlantic',
//     record: '16-6-1' ,
//     article: 'Toronto tops Ducks, ties team mark for consecutive road wins',
//     goalsForPerGame: 3,
//     goalsAgainstPerGame: 2
// })
// .then(function(createdTeam) {
//     console.log('new team', createdTeam.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR with adding new team', err);
// });

// // 3
// NHL.create({
//     team: 'Golden Knights',
//     conference: 'Pcific',
//     record: '12-9-0' ,
//     article: 'Oilers hold off Golden Knights for fourth win in five games',
//     goalsForPerGame: 3,
//     goalsAgainstPerGame: 3
// })
// .then(function(createdTeam) {
//     console.log('new team', createdTeam.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR with adding new team', err);
// });

// // 4
// NHL.create({
//     team: 'Kraken',
//     conference: 'Pcific',
//     record: '8-13-1' ,
//     article: 'McCann, Appleton each score twice, Kraken beat Sabres 7-4',
//     goalsForPerGame: 3,
//     goalsAgainstPerGame: 4 
// })
// .then(function(createdTeam) {
//     console.log('new team', createdTeam.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR with adding new team', err);
// });

// // 5
// NHL.create({
//     team: 'Sharks',
//     conference: 'Pacific',
//     record: '12-9-1' ,
//     article: 'Meier scores pair of goals to lead Sharks to victory',
//     goalsForPerGame: 3,
//     goalsAgainstPerGame: 3 
// })
// .then(function(createdTeam) {
//     console.log('new team', createdTeam.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR with adding new team', err);
// });

// // 6
// NHL.create({
//     team: 'Avalancha',
//     conference: 'Central',
//     record: '11-6-1' ,
//     article: 'Mikko Rantanen notches hat trick as Avs take down Predators',
//     goalsForPerGame: 4,
//     goalsAgainstPerGame: 3 
// })
// .then(function(createdTeam) {
//     console.log('new team', createdTeam.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR with adding new team', err);
// });

// // 7
// NHL.create({
//     team: 'Senators',
//     conference: 'Atlantic',
//     record: '4-14-1' ,
//     article: 'NHL suspends Kings Lemieux 5 games for biting',
//     goalsForPerGame: 2,
//     goalsAgainstPerGame: 4 
// })
// .then(function(createdTeam) {
//     console.log('new team', createdTeam.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR with adding new team', err);
// });

// // 8
// NHL.create({
//     team: 'Red Wings',
//     conference: 'Atlantic',
//     record: '11-9-3' ,
//     article: 'Marc Staals late goal lifts Reds Wings to win over Bruins',
//     goalsForPerGame: 3 ,
//     goalsAgainstPerGame: 3 
// })
// .then(function(createdTeam) {
//     console.log('new team', createdTeam.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR with adding new team', err);
// });

// // 9
// NHL.create({
//     team: 'Penguins',
//     conference: 'Metropolitan',
//     record: '10-7-5' ,
//     article: 'Flames win 2-1 on Mikael Backlunds shootout goal',
//     goalsForPerGame: 3,
//     goalsAgainstPerGame: 2 
// })
// .then(function(createdTeam) {
//     console.log('new team', createdTeam.toJSON());
// })
// .catch(function(err) {
//     console.log('ERROR with adding new team', err);
// });

// // 10
// NHL.create({
//     team: 'Canucks',
//     conference: 'Pacific',
//     record: '7-14-2' ,
//     article: 'Thatcher Demko sprawls out for remarkable kick save',
//     goalsForPerGame: 2,
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

// NFL.findByPk(5)
// .then(foundTeam=>{
//    console.log('The 5th team', foundTeam)
// })

// NBA.findByPk(5)
// .then(foundTeam=>{
//    console.log('The 5th team', foundTeam)
// })

// NHL.findByPk(5)
// .then(foundTeam=>{
//    console.log('The 5th team', foundTeam)
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