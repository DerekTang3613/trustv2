Loader.addToManifest(Loader.manifest, {
  //voice
  testVoice: "assets/sounds/coin_get.mp3"
});

SLIDES.push({
	id: "credits",
	onstart: function(self){	
		self.add({ id:"bg", type:"Background", color:"#222" });
    
    //voice over testing
    //Loader.sounds.testVoice.volume(0.5).play();
    
		// Circular Wordbox
		self.add({
			id:"text", type:"TextBox",
			x:0, y:35, width:960, height:400, align:"center",
			text_id:"credits", color:"#fff"
		});
	}
});