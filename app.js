document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelecter('.grid')
  let width = 10
  let squares = []

  // create board function
  function createBoard() {
    for(let i = 0; i < width*width; i++) {
      const square = document.createElement('div')
      square.setAttribute('id', i)
      grid.appendChild(square)
      squares.push(square)
    }
  }
  createBoard()

})