var rollDie = function () {
  return Math.floor(1 + Math.random() * 6);
}

//console.log(rollDie());  // 1 (for example)

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var mod = list.length;
  var pointer = 0;

  return function() {
    var roll = list[ pointer ];
    pointer = (pointer + 1) % mod;
    return roll;
  }
}

var rollLoadedDie = makeLoadedDie();

for (var i = 0; i < 15; i++){
  console.log(rollLoadedDie());
}
