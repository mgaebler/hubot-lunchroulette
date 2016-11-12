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


const LR = require('drawer')
const phrases = require('../phrases')


var lr; // make it global available

module.exports = (robot) => {

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

  // roulette
  robot.respond(/roulette/i, res => {

    lr = new LR(3, 5)

    lr.on('addPlayer', user => {
      res.send(user, res.random(phrases.join))
    })

    lr.on('remPlayer', user => res.send(user, res.random(phrases.leave)))

    lr.on('start', timeLeft => res.send(res.random(phrases.init)))

    lr.on('end', timeLeft => {
      res.send(res.random(phrases.roulette))
      delete(lr)
    })

    lr.on('tick', timeLeft => {
      if(!(timeLeft.inSeconds % 10)){
        // res.send(`Noch ${timeLeft.inSeconds} Sekunden.`)
      } else if (timeLeft.inSeconds < 10) {
        res.send(timeLeft.inSeconds)
      }
    })

    lr.on('draw', groups => {
      res.send('Groups generated')
      groups.forEach(group => {
        let message = `Group: `
        for(user of group){
            message += user
            message += ' and '
        }
        res.send(message)
      })
    })

    // starts the game
    lr.startGame()
    setTimeout(() => lr.addPlayer('Paul'), 10000)
  })

  // player joins
  robot.respond(/join/i, res => {
    lr.addPlayer('Fabien')
  })

  // player leaves
  robot.respond(/leave/i, res => {
    lr.remPlayer('Fabien')
  })

  robot.respond(/fake user/i, res => {

    setTimeout(() => lr.addPlayer('Fabien'), 1000)
    setTimeout(() => lr.addPlayer('Rolf'), 10000)
    setTimeout(() => lr.addPlayer('Christina'), 20000)

  })


  robot.respond(/fake reminder/i, res => {
    res.send (res.random (phrases.reminder))
  })

  robot.respond(/fake roulette/i, res => {
    lr.endGame()
  })
  
}
