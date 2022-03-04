document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  let width = 10
  let squares = []
  let bombAmount = 20

  // create board function
  function createBoard() {
    const bombArray = Array(bombAmount).fill('bomb')
    const emptyArray = Array(width*width - bombAmount).fill('valid')
    const gameArray = emptyArray.concat(bombArray)
    const shuffledArray = gameArray.sort(() => Math.random() -0.5)

    for(let i = 0; i < width*width; i++) {
      const square = document.createElement('div')
      square.setAttribute('id', i)
      square.classList.add(shuffledArray[i])
      grid.appendChild(square)
      squares.push(square)

      square.addEventListener('click', function(e) {
        click(square)
      })
    }

    // add numbers
    for(let i = 0; i < squares.length; i++) {
      let total = 0
      const leftEdge = (i % width === 0)
      const rightEdge = (i % width === width - 1)

      if (squares[i].classList.contains('valid')) {
        if (i > 0 && !leftEdge && squares[i -1].classList.contains('bomb')) total ++
        if (i > 9 && !rightEdge && squares[i +1 -width].classList.contains('bomb')) total ++
        if (i > 10 && squares[i -width].classList.contains('bomb')) total ++
        if (i > 11 && !leftEdge && squares[i -1 -width].classList.contains('bomb')) total ++
        if (i < 98 && !rightEdge && squares[i +1].classList.contains('bomb')) total ++
        if (i < 90 && !leftEdge && squares[i -1 +width].classList.contains('bomb')) total ++
        if (i < 88 && !rightEdge && squares[i +1 +width].classList.contains('bomb')) total ++
        if (i < 89 && squares[i +width].classList.contains('bomb')) total ++
        squares[i].setAttribute('data', total)
        console.log(squares[i])
      }
    }
  }
  createBoard()


  function click(square) {
    if (square.classList.contains('bomb')) {
      // alert ('Game Over!')
      console.log('Game Over!')
    } else {
      let total = square.getAttribute('data')
      if (total != 0) {
        square.classList.add('checked')
        square.innerHTML = total
        return
      }
      square.classList.add('checked')
    }
  }
})