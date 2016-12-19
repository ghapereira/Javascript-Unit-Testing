var cellStates = {
  EMPTY_MARK: 0,
  FILLED_MARK: 1,
  EXAMINED: -1
};

function getWidestIsland(islandMap, numRows, numCols) {
  'use strict';
  var widestIsland = 0;

  for(var i = 0; i < numRows; i++) {
    for(var j = 0; j < numCols; j++) {
      var thisPosition = islandMap[i][j];

      if (thisPosition !== cellStates.FILLED_MARK) {
        continue;
      }

      var currentIslandSize = examineIsland(islandMap, i , j);
      if(currentIslandSize > widestIsland) {
        widestIsland = currentIslandSize;
      }
    }
  }

  return widestIsland;
}

function examineIsland(islandMap, i, j) {
  'use strict';
  islandMap[i][j] = cellStates.EXAMINED;

  var neighboursCount = 0,
      xPosition = 0,
      yPosition = 0;

  for(var k = -1; k <= 1; k++) {
    xPosition = i + k;

    for(var l = -1; l <= 1; l++) {
      if (k === l === 0) {
        continue;
      }
      yPosition = j + l;

      var thisCell = undefined;
      try {
        thisCell = islandMap[xPosition][yPosition];
      } catch(e) {
        continue;
      }

      if(thisCell === cellStates.FILLED_MARK) {
        neighboursCount += examineIsland(islandMap, xPosition, yPosition);
      }
    }
  }

  return 1 + neighboursCount;
}

module.exports = {'getWidestIsland': getWidestIsland};
