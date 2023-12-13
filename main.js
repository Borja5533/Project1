function Pacman(x, y) {
    this.x = x
    this.y = y
    this.direction = null // 'up', 'down', 'left', 'right'


    this.draw = function() {
        var pacmanCell = document.querySelector(`.row${this.y}>.col${this.x}`) 
       pacmanCell.classList.add('pacman')
    }

    this.updateCoords = function() {

    switch (this.direction) {
    case 'up': 
    this.y--
    break
    case 'left': 
    this.x--
    break 
    case 'down': 
    this.y++
    break
    case 'right':
    this.x++
    break
    }
    }

    this.erase = function() {
    var pacmanCell = document.querySelector('.pacman')
    pacmanCell.classList.remove('pacman')
    }
}
var pacman = new Pacman(5, 10)

window.addEventListener('keydown', function(e) {
    switch (e.key) {
        case 'w': 
        pacman.direction = 'up'
        break
        case 'a': 
        pacman.direction = 'left'
        break 
        case 's': 
        pacman.direction = 'down'
        break
        case 'd': 
        pacman.direction = 'right'
        break
    }
pacman.updateCoords()
pacman.erase()
pacman.draw()
})