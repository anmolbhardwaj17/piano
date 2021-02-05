

Synth instanceof AudioSynth; // true

var testInstance = new AudioSynth;
testInstance instanceof AudioSynth; // true

testInstance === Synth; // true

var piano = Synth.createInstrument('piano');




///Mouse click------------------------------------------------------------------------


function c4()
    {
      piano.play('C', 4, 2);  
    }
    function d4()
    {
      piano.play('D', 4, 2);  
    }
    function e4()
    {
      piano.play('E', 4, 2);  
    }
    function f4()
    {
      piano.play('F', 4, 2);  
    }
    function g4()
    {
      piano.play('G', 4, 2);  
    }
    function a4()
    {
      piano.play('A', 4, 2);  
    }
    function b4()
    {
      piano.play('B', 4, 2);  
    }
    function c5()
    {
      piano.play('C', 5, 2);  
    }
    function d5()
    {
      piano.play('D', 5, 2);  
    }
    function e5()
    {
      piano.play('E', 5, 2);  
    }

    //black keys ------------------------------------------
    function w(){
      piano.play('C#', 4, 2);
    }
    function e(){
      piano.play('D#', 4, 2);
    }
    function t(){
      piano.play('F#', 4, 2);
    }
    function y(){
      piano.play('G#', 4, 2);
    }
    function u(){
      piano.play('A#', 4, 2);
    }
    function o(){
      piano.play('C#', 5, 2);
    }
    function p(){
      piano.play('D#', 5, 2);
    }


///key presses--------------------------------------------------------------------------

window.onkeydown = function(event) {
  if (event.keyCode == 65 || event.keyCode == 97) {
    piano.play('C', 4, 2);  
    document.getElementById('c4').classList.add("white-active");
  }
  if (event.keyCode == 83 || event.keyCode == 115) {
    piano.play('D', 4, 2);  
    document.getElementById('d4').classList.add("white-active");
  }
  if (event.keyCode == 68 || event.keyCode == 100) {
    piano.play('E', 4, 2);  
    document.getElementById('e4').classList.add("white-active");
  }
  if (event.keyCode == 70 || event.keyCode == 102) {
    piano.play('F', 4, 2);  
    document.getElementById('f4').classList.add("white-active");
  }
  if (event.keyCode == 71 || event.keyCode == 103) {
    piano.play('G', 4, 2);  
    document.getElementById('g4').classList.add("white-active");
  }
  if (event.keyCode == 72 || event.keyCode == 104) {
    piano.play('A', 4, 2);  
    document.getElementById('a4').classList.add("white-active");
  }
  if (event.keyCode == 74 || event.keyCode == 106) {
    piano.play('B', 4, 2);  
    document.getElementById('b4').classList.add("white-active");
  }
  if (event.keyCode == 75 || event.keyCode == 107) {
    piano.play('C', 5, 2);  
    document.getElementById('c5').classList.add("white-active");
  }
  if (event.keyCode == 76 || event.keyCode == 108) {
    piano.play('D', 5, 2);  
    document.getElementById('d5').classList.add("white-active");
  }
  if (event.keyCode == 186) {
    piano.play('E', 5, 2);  
    document.getElementById('e5').classList.add("white-active");
  }
  //BLACK KEYS----------------------------------

  if (event.keyCode == 87 || event.keyCode == 119) {
    piano.play('C#', 4, 2);  
    document.getElementById('one').classList.add("black-active");
  }
  if (event.keyCode == 69 || event.keyCode == 101) {
    piano.play('D#', 4, 2); 
    document.getElementById('two').classList.add("black-active");
  }
  if (event.keyCode == 84 || event.keyCode == 116) {
    piano.play('F#', 4, 2); 
    document.getElementById('three').classList.add("black-active");
  }
  if (event.keyCode == 89 || event.keyCode == 121) {
    piano.play('G#', 4, 2); 
    document.getElementById('four').classList.add("black-active");
  }
  if (event.keyCode == 85 || event.keyCode == 117) {
    piano.play('A#', 4, 2); 
    document.getElementById('five').classList.add("black-active");
  }
  if (event.keyCode == 79 || event.keyCode == 111) {
    piano.play('C#', 5, 2);
    document.getElementById('six').classList.add("black-active");
  }
  if (event.keyCode == 80 || event.keyCode == 112) {
    piano.play('D#', 5, 2); 
    document.getElementById('seven').classList.add("black-active");
  }

}

window.onkeyup = function(event) {
if (event.keyCode == 65 || event.keyCode == 97) {
  document.getElementById('c4').classList.remove("white-active");
}
if (event.keyCode == 83 || event.keyCode == 115) {
  document.getElementById('d4').classList.remove("white-active");
}
if (event.keyCode == 68 || event.keyCode == 100) {
  document.getElementById('e4').classList.remove("white-active");
}
if (event.keyCode == 70 || event.keyCode == 102) {
  document.getElementById('f4').classList.remove("white-active");
}
if (event.keyCode == 71 || event.keyCode == 103) {
  document.getElementById('g4').classList.remove("white-active");
}
if (event.keyCode == 72 || event.keyCode == 104) {
  document.getElementById('a4').classList.remove("white-active");
}
if (event.keyCode == 74 || event.keyCode == 106) {
  document.getElementById('b4').classList.remove("white-active");
}
if (event.keyCode == 75 || event.keyCode == 107) {
  document.getElementById('c5').classList.remove("white-active");
}
if (event.keyCode == 76 || event.keyCode == 108) {
  document.getElementById('d5').classList.remove("white-active");
}
if (event.keyCode == 186) {
  document.getElementById('e5').classList.remove("white-active");
}

//BLACK KEYS ------------------------------------------------------

if (event.keyCode == 87 || event.keyCode == 119) {
  document.getElementById('one').classList.remove("black-active");
}
if (event.keyCode == 69 || event.keyCode == 101) {
  document.getElementById('two').classList.remove("black-active");
}
if (event.keyCode == 84 || event.keyCode == 116) {
  document.getElementById('three').classList.remove("black-active");
}
if (event.keyCode == 89 || event.keyCode == 121) {
  document.getElementById('four').classList.remove("black-active");
}
if (event.keyCode == 85 || event.keyCode == 117) {
  document.getElementById('five').classList.remove("black-active");
}
if (event.keyCode == 79 || event.keyCode == 111) {
  document.getElementById('six').classList.remove("black-active");
}
if (event.keyCode == 80 || event.keyCode == 112) {
  document.getElementById('seven').classList.remove("black-active");
}

}

