const coresArray = ["aliceblue",
"antiquewhite",
"aqua",
"aquamarine",
"azure",
"beige",
"bisque",
"black",
"blanchedalmond",
"blue",
"blueviolet",
"brown",
"burlywood",
"cadetblue",
"chartreuse",
"chocolate",
"coral",
"cornflowerblue",
"cornsilk",
"crimson",
"cyan",
"darkblue",
"darkcyan",
"darkgoldenrod",
"darkgray",
"darkgreen",
"darkgrey",
"darkkhaki",
"darkmagenta",
"darkolivegreen",
"darkorange",
"darkorchid",
"darkred",
"darksalmon",
"darkseagreen",
"darkslateblue",
"darkslategray",
"darkslategrey",
"darkturquoise",
"darkviolet",
"deeppink",
"deepskyblue",
"dimgray",
"dodgerblue",
"firebrick",
"floralwhite",
"forestgreen",
"fuchsia",
"gainsboro",
"ghostwhite",
"gold",
"goldenrod",
"gray",
"green",
"greenyellow",
"grey",
"honeydew",
"hotpink",
"indianred",
"indigo",
"ivory",
"khaki",
"lavender",
"lavenderblush",
"lawngreen",
"lemonchiffon",
"lightblue",
"lightcoral",
"lightcyan",
"lightgoldenrodyellow",
"lightgray",
"lightgreen",
"lightpink",
"lightsalmon",
"lightseagreen	",
"lightskyblue	",
"lightslategray	",
"lightslategrey",
"lightsteelblue",
"lightyellow",
"lime",
"limegreen",
"linen",
"magenta",
"maroon",
"mediumaquamarine",
"mediumblue",
"mediumorchid",
"mediumpurple",
"mediumseagreen",
"mediumslateblue",
"mediumspringgreen",
"mediumturquoise",
"mediumvioletred",
"midnightblue",
"mintcream",
"mistyrose",
"moccasin",
"navajowhite",
"navy",
"oldlace",
"olive",
"olivedrab",
"orange",
"orangered",
"orchid",
"palegoldenrod",
"palegreen",
"paleturquoise",
"palevioletred",
"papayawhip",
"peachpuff",
"peru",
"pink",
"plum",
"powderblue",
"purple",
"red",
"rosybrown",
"royalblue",
"saddlebrown",
"salmon",
"sandybrown",
"seagreen",
"seashell",
"sienna",
"silver",
"skyblue",
"slateblue",
"slategray",
"slategrey",
"snow",
"springgreen",
"steelblue",
"tan",
"teal",
"thistle",
"tomato",
"turquoise",
"violet",
"wheat",
"white",
"whitesmoke",
"yellow",
"yellowgreen"]

function pegarCores() {
    let cor = coresArray[Math.floor(Math.random() * coresArray.length)];
    return cor;
}
let novoarray = []
for (let i = 0; i < 10; i++) {
  let cor = pegarCores();
  novoarray.push(cor);
  for (let j = 0; j < novoarray.length; j++) {
    if (novoarray[i]===novoarray[j]) {
      novoarray.pop();
      novoarray.push(pegarCores());
    }
  }
}
novoarray.sort();
console.log(novoarray)
function check(ganhou) {
  if (novoarray.includes(ganhou)){
      return true;
  }
  return false;
}

function init(){
  let escolhida = novoarray[Math.floor(Math.random() * novoarray.length)];
  while (true){

    let opcao = prompt("Chute uma opção do display: \n" +
    novoarray[0]+" , "+novoarray[1]+" , "+novoarray[2]+" , "+novoarray[3]+" , "+novoarray[4]+" , "+novoarray[5]+" , "+
    novoarray[6]+" , "+novoarray[7]+" , "+novoarray[8]+" , "+novoarray[9]);
    
    if (escolhida === opcao) {
      document.body.style.backgroundColor = escolhida;
      alert("acertou");
      return true;
  }
    if (!check(opcao)){
      alert( "Opção inválida");
  } else if (opcao > escolhida) {
    alert("A cor escolhida é alfabeticamente menor");
  } else if (opcao < escolhida){
    alert("A cor escolhida é alfabeticamente maior");
  }  
  }
}

