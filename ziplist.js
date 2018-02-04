
const listAlpha = ['a', 'b', 'c', 'd', 'e'];
const listBeta = [1, 2, 3, 4, 5];

function zipList(listA, listB) {
  const tempArr = [];
  for (let i = 0; i < listA.length; i++) {
    tempArr.push(listA[i]);
    tempArr.push(listB[i]);
  }
  return tempArr;
}

console.log(zipList(listAlpha, listBeta));

function zipListTheSimpleWay(listA, listB) {
  return _.flatten(_.zip(listA, listB));
}

console.log(zipListTheSimpleWay(listAlpha, listBeta));
