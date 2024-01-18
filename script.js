// MADE BY JUNAID [abujuni.dev] 

if (confirm("THIS WEBSITE NOT YET, FULLY CREATED!\n Press `ok` button below for more info!")) {
  window.open("./about.html", "_blank")
} else {
  
}

var cursor = document.getElementById('myCursor')

function getData () {
  let objSelector = document.getElementById('obj-selector').value
  let colorPicker = document.getElementById('colorPicker').value
  let height = document.getElementById('height').value
  let width = document.getElementById('width').value
  let depthOrRadius = document.getElementById('depth-radius').value

  let objData = {
    type: objSelector,
    color: colorPicker,
    height: height,
    width: width,
    depth: depthOrRadius,
    radius: depthOrRadius
  }

  return objData
}


var cubeMaker = document.getElementById('cubeMaker')

function createCube (position, color, height, width, depth) {
  var newCube = document.createElement('a-box')
  newCube.setAttribute('class', 'cube')
  newCube.setAttribute('color', color)
  newCube.setAttribute('position', position)
  newCube.setAttribute('height', height)
  newCube.setAttribute('width', width)
  newCube.setAttribute('depth', depth)

  document.getElementById('cubeMaker').appendChild(newCube)
}

function placeObj () {
  var currentPosition = cursor.getAttribute('position')
  if (currentPosition) {
    var position = {
      x: currentPosition.x + 3,
      y: Math.max(currentPosition.y, 0) -5,
      z: currentPosition.z - 3
    };
  } else {
    console.error('Error getting cursor position.')
  }

  var dataByUser = getData()
  if (dataByUser.type === 'cube') {
    createCube(
      position,
      dataByUser.color,
      dataByUser.height,
      dataByUser.width,
      dataByUser.depth
    )
  } else {
    alert('Sorry! , WORK IN PROCESS!')
  }
}

