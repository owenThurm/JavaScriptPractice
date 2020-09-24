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
	if(updateTag == "tracks") {
		records[recordName]["tracks"] = records[recordName]["tracks"] || [];
		records[recordName]["tracks"].push(updateInfo);
	}
	else records[recordName][updateTag] = updateInfo;
}

function addTrack(records, recordName, track) {
	if(track === "") delete records[recordName]["tracks"]
	records[recordName]["tracks"] = records[recordName]["tracks"] || [];
	records[recordName]["tracks"].push(track);
}

function addTracks(records, recordName, tracks) {
	if(tracks === "") delete records[recordName]["tracks"];
	records[recordName]["tracks"] = records[recordName]["tracks"] || [];
	records[recordName]["tracks"] = records[recordName]["tracks"].concat(tracks);

}

var list = [];
var newList = list.concat("hello", "hi");


console.log(newList);


addTracks(musicRecords, "Circles", ["Woods", "Thats On Me", "Blue World"]);

console.log(JSON.stringify(musicRecords));

