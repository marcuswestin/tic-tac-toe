function makeGreetButton() {
	var greetMeButton = document.createElement('button')
	greetMeButton.innerHTML = 'Greet'
	document.body.appendChild(greetMeButton)
	
	greetMeButton.onclick = function() {
		var userName = prompt("What's your name?")
		
		if (userName == "James") {
			alert("Sup "+userName+"!")
		} else {
			alert("Hi "+userName)
		}
	}
}

function setupGame(parentEl) {
	for (var currentRowIndex = 0; currentRowIndex < 3; currentRowIndex = currentRowIndex + 1) {
		var rowEl = document.createElement('div')
		parentEl.appendChild(rowEl)
		for (var currentColIndex = 0; currentColIndex < 3; currentColIndex = currentColIndex + 1) {
			createSquare(rowEl, currentRowIndex, currentColIndex)
		}
	}
}

function createSquare(parentEl, rowIndex, columnIndex) {
	var square = document.createElement('div')
	square.style.width = '50px'
	square.style.height = '50px'
	square.style.border = '1px solid steelblue'
	square.style.display = 'inline-block'
	square.style.position = 'relative'
	square.style.margin = '0 2px'
	square.onclick = function() {
		makeMove(square, rowIndex, columnIndex)
	}
	parentEl.appendChild(square)
}

function makeMove(square, rowIndex, columnIndex) {
	alert("TODO: james.implement('makeMove')")
	placeMarker(square, 'X')
	// check legal move?
	// place marker
	// ...
	// switch turn
}

function placeMarker(square, currentPlayer) {
	var marker = document.createElement('span')
	marker.innerHTML = currentPlayer
	marker.style.position = 'absolute'
	marker.style.top = '16px'
	marker.style.left = '16px'
	square.appendChild(marker)
}



makeGreetButton()
setupGame(document.body)



