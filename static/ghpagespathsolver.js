(function() {
	const query = window.location.search
	console.debug('GitHub Pages Path Solver Loaded...')
	console.debug('query:', query)
	if ( query.startsWith('?p=') ) {
		const route = decodeURIComponent(query.substr(3))
		console.debug('route:', route)
		window.history.replaceState(null, null, route)
	}
})()