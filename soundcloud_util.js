let songs = [];
let searchString = 'Original Motion Picture Soundtrack';
let regexPattern = new RegExp(searchString + '.*');
let album = document.querySelector('.soundTitle__title span').innerText;
let artist = document
	.querySelector('.userBadge__usernameLink')
	.textContent.trim();

if (album.includes('Original Motion Picture Soundtrack')) {
	var newText = album.replace(regexPattern, '').trim();
	album = newText;
}
document.querySelectorAll('.trackList__item').forEach((item) => {
	let track = item.querySelector(':scope .trackItem__trackTitle').innerText;

	let url =
		'https://soundcloud.com' +
		item.querySelector(':scope a.trackItem__trackTitle').getAttribute('href');
	let song = { url: url, answer: album + ' - ' + track + ' - ' + artist };
	songs.push(song);
});
let songs_json = JSON.stringify(songs);
songs_json = songs_json.slice(1, -1);
songs_json;
