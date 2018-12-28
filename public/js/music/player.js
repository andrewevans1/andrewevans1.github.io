songs = {
	1: {
		title: 'Whisper',
		artist: 'Richie Wirz',
		link: 'Beethoven_12_Variation.mp3',
		albumCover: ''
	},
	2: {
		title: 'My Angel',
		artist: 'Richie Wirz',
		link: 'Tchaikovsky_Nocturne__orch.mp3',
		albumCover: ''
	},
	3: {
		title: 'Hartford Cars',
		artist: 'Richie Wirz',
		link: 'Tchaikovsky_Rococo_Var_orch.mp3',
		albumCover: ''
	}
}


class musicPlayer {
	constructor(songList) {
		this.songList = songList;

		this.play = this.play.bind(this);
		this.prev = this.prev.bind(this);
		this.next = this.next.bind(this);
		this.showInfo = this.showInfo.bind(this);
		this.updateProgress = this.updateProgress.bind(this);
		this.updateSong = this.updateSong.bind(this);
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

	updateSong(){
		let song = this.songList[this.trackNumber]
		this.audio = new Audio(song['link'])
		this.audio.addEventListener('ended',this.next)

		this.title = song['title']
		this.artist = song['artist']
		document.getElementById("title").innerHTML = this.title
		document.getElementById("artist").innerHTML = this.artist
		this.duration = this.audio.duration
		this.time = 0;
		document.getElementById("bar").style.width = '1%';
	}

	updateProgress(){
		this.time = this.audio.currentTime;
		let minutes = Math.floor(this.time/60)
		let seconds = Math.round(this.time % 60)
		seconds = (seconds<10 ? "0" + seconds : seconds);
		if(floating){
			document.getElementById("float_time").innerHTML = `${minutes}:${seconds}`
			let percent = (this.time/this.audio.duration)*100
			document.getElementById("float_bar").style.width = `${percent}%`;
		}
		else{

		}
	}
}

const newMusicplayer = new musicPlayer(songs);
