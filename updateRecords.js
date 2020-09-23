var musicRecords = {
	"Man On The Moon": {
		"title": "Man On The Moon",
		"artist": "Kid Cudi",
		"good?": true
	},

	"Circles": {
		"title": "Circles",
		"artist": "Mac Miller",
		"good?": true,
		"tracks": [
			"circles",
			"everybody"
		]
	}
}

const copy = JSON.parse(JSON.stringify(musicRecords));

function updateRecords(records, recordName, updateTag, updateInfo) {
	if(updateInfo === "") delete records[recordName][updateTag];
	else records[recordName][updateTag] = updateInfo;
}

function addTrack(records, recordName, track) {
	records[recordName]["tracks"] = records[recordName]["tracks"] || [];
	records[recordName]["tracks"].push(track);
}




addTrack(musicRecords, "Circles", "Hand Me Downs");
addTrack(musicRecords, "Man On The Moon", "Scott Mescudi");
addTrack(musicRecords, "Man On The Moon", "Don't Play This Song");

console.log(JSON.stringify(musicRecords));

