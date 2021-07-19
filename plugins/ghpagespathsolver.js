export default (context, inject) => {
	const query = window.location.search
	console.debug('GitHub Pages Path Solver Loaded...')
	if ( query.startsWith('?p=') ) {
		const route = decodeURIComponent(query.substr(3))
		window.history.replaceState(null, null, route)
	}
}