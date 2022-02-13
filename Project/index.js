var songs=[

	{
		id:1,
		imageSrc:"./thumbnail/You-Benny-Blanco.jpg",
		audioSrc:"./audio/you-benny-blanco.mp3",
		title:"You-Benny-Blanco"
	},
	{
		id:2,
		imageSrc:"./thumbnail/Fake-A-Smile-Alan-Walker.jpg",
		audioSrc:"./audio/fake-a-smile-alan-walker.mp3",
		title:"You-Benny-Blanco"
	},
	{
		id:3,
		imageSrc:"./thumbnail/Breaking-the-Rules.jpg",
		audioSrc:"./audio/breaking-the-rules-jubin.mp3",
		title:"You-Benny-Blanco"
	},
	{
		id:4,
		imageSrc:"./thumbnail/Your-Power-Billie-Eilish.jpg",
		audioSrc:"./audio/your-power-billie-eilish.mp3",
		title:"You-Benny-Blanco"
	},
	{
		id:5,
		imageSrc:"./thumbnail/What-Other-People-Say-Sam-Fischer.jpg",
		audioSrc:"./audio/what-other-people-say-sam-fischer.mp3",
		title:"You-Benny-Blanco"
	},
	{
		id:6,
		imageSrc:"./thumbnail/Stronger-(feat.-Kesha)-Sam-Feldt.jpg",
		audioSrc:"./audio/stronger-(feat.-kesha)-sam-feldt.mp3",
		title:"You-Benny-Blanco"
	},
	{
		id:7,
		imageSrc:"./thumbnail/beat-it-michael-jackson.jpg",
		audioSrc:"./audio/beat-it-michael-jackson.mp3",
		title:"You-Benny-Blanco"
	},
	{
		id:8,
		imageSrc:"./thumbnail/Electric-Katy-Perry.jpg",
		audioSrc:"./audio/electric-katy-perry.mp3",
		title:"You-Benny-Blanco"
	},
	{
		id:9,
		imageSrc:"./thumbnail/The-World-We-Left-Behind.jpg",
		audioSrc:"./audio/the-world-we-left-behind.mp3",
		title:"You-Benny-Blanco"
	},


]

function playAudio(songid) {
	var song=songs.find(function(song,index){
		return song.id===songid
	});

	document.getElementById("thumbnail").src=song.imageSrc;
	document.getElementById("audio_player").src=song.audioSrc;
	document.getElementById("audio_player_title").innerText=song.title;
	document.getElementById("audio_player").play();
}
 