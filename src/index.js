var Direction;
(function (Direction) {
    Direction["North"] = "North";
    Direction["South"] = "South";
    Direction["East"] = "East";
    Direction["West"] = "West";
})(Direction || (Direction = {}));
var direction = Direction.North;
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
var move = function (direction) {
    console.log('Moving', direction);
};
move(direction);
