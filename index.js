const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(record) {
  let result = record.find(e => e.result === "W")
  if (!!result) {
    return record.find(e => e.result === "W").year
  }
}
