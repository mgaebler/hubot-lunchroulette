/**
 * Description:
 *   Lunchroulette helps you find lunch mates.
 *
 * Dependencies:
 * None
 *
 * Configuration:
 *   None
 *
 * Commands:
 *   hubot roulette - Starts a new game.
 *   hubot join - Join to current game.
 *   hubot leave - Leaves the current game if you're joined in before.
 */


const Drawer = require('game-drawer')
const phrases = require('./phrases_de')


module.exports = (robot) => {
  let game;

  let users = [
    { "id":"HoKMgkFv4hh4xz3w7","name":"Fabien","room":"GENERAL" },
    { "id":"HoKMgkFv4ss4xz3w8","name":"Tina","room":"GENERAL" },
    { "id":"HoKMgkFv4kk4xz3w9","name":"Torsten","room":"GENERAL" }
  ]

  startGame = res => {
    game = new Drawer(groupSize=3, duration=5)

    declareEvents(game)

    // starts the game
    game.startGame()
  }

  declareEvents = game => {
    // declare events
    game.on('addPlayer', user => {
      res.send(user, res.random(phrases.join))
    })

    game.on('remPlayer', user => res.send(user, res.random(phrases.leave)) )

    game.on('start', timeLeft => res.send(res.random(phrases.init)) )

    game.on('end', timeLeft => {
      res.send(res.random(phrases.roulette))
      delete(game)
    })

    game.on('tick', timeLeft => {
      if(!(timeLeft.inSeconds % 10)){
        // res.send(`Noch ${timeLeft.inSeconds} Sekunden.`)
      } else if (timeLeft.inSeconds < 10) {
        res.send(timeLeft.inSeconds)
      }
    })

    game.on('draw', groups => {
      res.send('Groups generated')
      groups.forEach(group => {
        let message = `Group: `
        for(user of group){
            message += user.name
            message += ' and '
        }
        res.send(message)
      })
    })
  }

  // new user joins Lunch Roulette Channel
  robot.enter (res => {
    res.send (res.random (phrases.enter_channel))
  })

  // user leaves Lunch Roulette Channel
  robot.leave (res => {
    res.send (res.random (phrases.leave_channel))
  })

  // help
  robot.hear(/help/i, res => {
    res.send (res.random (phrases.help))
  })

  // status
  robot.respond(/status|wie siehts aus/i, res => {
    res.send (res.random (phrases.status))
  })

  // roulette / starts the game
  robot.respond(/roulette/i, res => startGame(res) )

  // player joins
  robot.respond(/join/i, res => {
    game.addPlayer(res.message.user)
  })

  // player leaves
  robot.respond(/leave/i, res => {
    game.remPlayer(res.message.user)
  })

  robot.respond(/fake users/i, res => {

    setTimeout(() => game.addPlayer(users[0]), 1000)
    setTimeout(() => game.addPlayer(users[1]), 10000)
    setTimeout(() => game.addPlayer(users[2]), 20000)

  })

  // debug /////////////////////////////////////////////////////////////////////

  robot.respond(/user_info/i, res => {
    /* common user object in hubot
    {"id":"HoKMgkFv4vb4xz3w7","name":"mg","room":"GENERAL"}
    */
    res.send(`\`\`\`${JSON.stringify(res.message.user)}\`\`\``)
    robot.logger.info(res.message.user.name)

  })

  robot.respond(/robot_info/i, res => {
    /* common user object in hubot
    {"id":"HoKMgkFv4vb4xz3w7","name":"mg","room":"GENERAL"}
    */
    // res.send(`\`\`\`${JSON.stringify(robot)}\`\`\``)
    // console.log(robot)

  })


  robot.respond(/fake reminder/i, res => {
    res.send (res.random (phrases.reminder))
  })

  robot.respond(/fake roulette/i, res => {
    game.endGame()
  })

}
