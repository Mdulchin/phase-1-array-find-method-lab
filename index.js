// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]
 
//   let findRecord = record.find(superbowlWin)

// function superbowlWin(record) {
//     if (record.result === "W" ){
//        return record.year
// }

// }

function superbowlWin(record) {
    let win = record.find((arr) => arr.result === "W" )
    if(win){
        return win.year
    }
}




// function suberbowlWin(record) {
//     let winner = record.find((game) => game.result === "W" )
//     if (winner) {
//         return winner.year
//     }
// }
