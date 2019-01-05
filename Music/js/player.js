/*
Dictionary of all songs to be in player.
To load a song into player, a title, artist,
link to audio file, and link to album cover are needed
*/

songs = {
	1: {
		title: 'Whisper',
		artist: 'Richie Wirz',
		artists_extended: 'Richie Wirz - Gtr/Voice/Piano, Marc Allen-Gtr, Mike Ferrara-Drums, Gary Davenport-Bass',
		link: 'audio/Beethoven_12_Variation.mp3',
		albumCover: "url('images/album_cover.jpg')"
	},
	2: {
		title: 'My Angel',
		artist: 'Richie Wirz',
		artists_extended: 'Richie Wirz - Gtr/Voice/Mandolin, Marc Allen-Gtr, Mike Ferrara-Drums, Gary Davenport-Bass',
		link: 'audio/Tchaikovsky_Nocturne__orch.mp3',
		albumCover: "url('images/album_cover.jpg')"
	},
	3: {
		title: 'Hartford Cars',
		artist: 'Richie Wirz',
		artists_extended: 'Richie Wirz - Gtr/Voice/Bass',
		link: 'audio/Tchaikovsky_Rococo_Var_orch.mp3',
		albumCover: "url('images/album_cover.jpg')"
	}
}

/*
The music player loads in songs from the above dictionary,
creates an Audio object from the song link, and renders the referenced
information in an html element.
Controls for play/pause and move to previous or next song.
Tracks the song position to display, but no scrubbing ability.
Player loops through playlist, so it can play indefinitely.
*/

class musicPlayer {
	constructor(songList) {
		this.songList = songList;

		this.play = this.play.bind(this);
		this.prev = this.prev.bind(this);
		this.next = this.next.bind(this);
		this.showInfo = this.showInfo.bind(this);
		this.updateProgress = this.updateProgress.bind(this);
		this.updateSong = this.updateSong.bind(this);
		this.renderSongList = this.renderSongList.bind(this);
		this.jump = this.jump.bind(this);
		this.listPlay = this.listPlay.bind(this);

		this.playBtn = document.getElementById('play');
		this.prevBtn = document.getElementById('prev');
		this.nextBtn = document.getElementById('next');
		this.playBtn.addEventListener('click', this.play);
		this.prevBtn.addEventListener('click', this.prev);
		this.nextBtn.addEventListener('click', this.next);
		this.controlPanel = document.getElementById('control-panel');
		this.infoBar = document.getElementById('info');
		this.slideBar = document.getElementById('bar');

		this.tracks = Object.keys(this.songList).length;
		this.trackNumber = 1;
		this.audio = new Audio(songList[this.trackNumber]['link']);
		this.audio.addEventListener('ended',this.next)

		this.live = false;

		this.renderSongList()
	}

	play() {
		this.showInfo()

		if(this.live == false){
			this.audio.play();
			this.live = true;
			this.timer = setInterval(this.updateProgress, 1000);
		}
		else{
			this.audio.pause();
			this.live = false;
			clearInterval(this.timer)
		}
	}

	showInfo(){
		let controlPanelObj = this.controlPanel,
		infoBarObj = this.infoBar
		Array.from(controlPanelObj.classList).find(function(element){
					return element !== "active" ? controlPanelObj.classList.add('active') : 		controlPanelObj.classList.remove('active');
			});

		Array.from(infoBarObj.classList).find(function(element){
					return element !== "active" ? infoBarObj.classList.add('active') : 		infoBarObj.classList.remove('active');
			});
	}

	prev() {
		this.play();
		this.trackNumber -=1;
		this.trackNumber < 1 ? this.trackNumber = this.tracks : console.log("in range") ;
		this.updateSong()
		this.play();
	}

	next() {
		this.play();
		this.trackNumber +=1;
		this.trackNumber > this.tracks ? this.trackNumber = 1 : console.log("in range");
		this.updateSong()
		this.play();
	}

	jump(track) {
		this.play();
		this.trackNumber = track;
		this.updateSong()
		this.play();
	}

	updateSong(){
		let song = this.songList[this.trackNumber]
		this.audio = new Audio(song['link'])
		this.audio.addEventListener('ended',this.next)

		this.title = song['title']
		this.artist = song['artist']
		this.art = song['albumCover']
		document.getElementById("title").innerHTML = this.title
		document.getElementById("artist").innerHTML = this.artist
		document.getElementById("album-art").style.backgroundImage = this.art
		this.duration = this.audio.duration
		this.time = 0;
		document.getElementById("bar").style.width = '1%';
	}

	updateProgress(){
		this.time = this.audio.currentTime;
		let minutes = Math.floor(this.time/60)
		let seconds = Math.round(this.time % 60)
		seconds = (seconds<10 ? "0" + seconds : seconds);

		document.getElementById("time").innerHTML = `${minutes}:${seconds}`
		let percent = (this.time/this.audio.duration)*100
		document.getElementById("bar").style.width = `${percent}%`;
	}

	/*
	Dynamically load in songs from the songList
	*/
	updateDuration(){
		let duration = this.duration
		let minutes = Math.floor(duration/60)
		let seconds = Math.round(duration % 60)
		seconds = (seconds<10 ? "0" + seconds : seconds);

		document.getElementById(`duration-${this.trackNumber}`).innerHTML = `${minutes}:${seconds}`
	}
	renderSongList(){
		for (var key in this.songList) {
			let song = this.songList[key]
			let audio = new Audio(song['link'])
			let newElement = `
				<div class="songItem">
					<div>
						<h3 class="title">${song['title']}</h3>
						<p class="artists">${song['artists_extended']}</p>
					</div>
					<div>
						<p class="duration" id="duration-${key}">0:00</p>
						<div class="play-pause play" id="play-pause-${key}"></div>
					</div>
				</div>
				`
			$(".songList").append(newElement)
			document.getElementById(`play-pause-${key}`).addEventListener('click', this.listPlay)

			audio.trackNumber = key
			audio.addEventListener('loadedmetadata', this.updateDuration)
		}
	}
	listPlay(evt){
		let target = evt.target

		if ($(target).hasClass("play")) {
			console.log("play")
			let id = target.id
			let track = id.split("-")[2]
			console.log(track)
			this.jump(track)
		}
		else {
			console.log("pause")
			this.play()
		}
		$(target).toggleClass("play").toggleClass("pause")
	}
}

/*
on file load, create a musicPlayer
*/
const newMusicplayer = new musicPlayer(songs);
