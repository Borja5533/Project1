function Pacman(x, y) {
    this.x = x
    this.y = y
    this.draw = function() {
        var pacmanCell = document.querySelector(`.row${this.x}>.col${this.y}`) 
       console.log(pacmanCell)
       pacmanCell.classList.add('pacman')
       }
} 

var pacman = new Pacman(5, 10)
console.log(pacman)
pacman.draw()
