enum Direction{
  North = "North",
  South = "South",
  East = "East",
  West = "West"
}

const direction : Direction = Direction.North

// const move = (direction: Direction) => {
//   switch(direction){
//     case Direction.North : 
//       console.log('Headed North')
//     break
//     case Direction.South : 
//       console.log('Headed South')
//     break
//     case Direction.East : 
//       console.log('Headed East')
//     break
//     case Direction.West : 
//       console.log('Headed West')
//     break
//   }
// }

const move = (direction: Direction) => {
  console.log('Moving', direction)
}

move(direction)