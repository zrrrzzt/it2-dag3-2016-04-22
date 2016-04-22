'use strict'

/*

Starter med å definere alle variabler og funksjoner som skal være med i oppgaven.

Deretter besvares oppgaven del for del.

Jeg bruker console.log() til å beskrive hva jeg svarer

 */

var fylkesliste = [
  'Østfold',
  'Akershus',
  'Oslo',
  'Hedmark',
  'Oppland',
  'Buskerud',
  'Vestfold',
  'Telemark',
  'Aust-Agder',
  'Vest-Agder',
  'Rogaland',
  'Hordaland',
  'Sogn og Fjordane',
  'Møre og Romsdal',
  'Sør-Trøndelag',
  'Nord-Trøndelag',
  'Nordland',
  'Troms',
  'Finnmark'
]

var fylkeslisteLengde = fylkesliste.length

var fylkesListeObjekter = [
  {
    fylkesnavn: 'Østfold',
    folketall: 287198,
    maalform: 'bokmål'
  },
  {
    fylkesnavn: 'Akershus',
    folketall: 584899,
    maalform: 'nøytral'
  },
  {
    fylkesnavn: 'Oslo',
    folketall: 647676,
    maalform: 'nøytral'
  },
  {
    fylkesnavn: 'Hedmark',
    folketall: 195153,
    maalform: 'nøytral'
  },
  {
    fylkesnavn: 'Oppland',
    folketall: 188807,
    maalform: 'nøytral'
  },
  {
    fylkesnavn: 'Buskerud',
    folketall: 274737,
    maalform: 'nøytral'
  },
  {
    fylkesnavn: 'Vestfold',
    folketall: 242662,
    maalform: 'bokmål'
  },
  {
    fylkesnavn: 'Telemark',
    folketall: 171953,
    maalform: 'nøytral'
  },
  {
    fylkesnavn: 'Aust-Agder',
    folketall: 114767,
    maalform: 'nøytral'
  },
  {
    fylkesnavn: 'Vest-Agder',
    folketall: 180877,
    maalform: 'nøytral'
  },
  {
    fylkesnavn: 'Rogaland',
    folketall: 466302,
    maalform: 'nøytral'
  },
  {
    fylkesnavn: 'Hordaland',
    folketall: 511357,
    maalform: 'nynorsk'
  },
  {
    fylkesnavn: 'Sogn og Fjordane',
    folketall: 109170,
    maalform: 'nynorsk'
  },
  {
    fylkesnavn: 'Møre og Romsdal',
    folketall: 263719,
    maalform: 'nynorsk'
  },
  {
    fylkesnavn: 'Sør-Trøndelag',
    folketall: 310047,
    maalform: 'nøytral'
  },
  {
    fylkesnavn: 'Nord-Trøndelag',
    folketall: 135738,
    maalform: 'nøytral'
  },
  {
    fylkesnavn: 'Nordland',
    folketall: 241682,
    maalform: 'nøytral'
  },
  {
    fylkesnavn: 'Troms',
    folketall: 163453,
    maalform: 'nøytral'
  },
  {
    fylkesnavn: 'Finnmark',
    folketall: 75605,
    maalform: 'bokmål'
  }
]

var fylkeslisteObjekterLengde = fylkesListeObjekter.length

var totaltAntallMennesker = 0

function sorterFylkesnavnAlfabetisk(a, b) {
  if ( a.fylkesnavn < b.fylkesnavn )
    return -1
  if ( a.fylkesnavn > b.fylkesnavn )
    return 1
  return 0
}

// Skriv ut alle fylkesnavnene
console.log('Skriv ut alle fylkesnavnene')

for (var i = 0; i < fylkeslisteLengde; i++) {
  console.log(fylkesliste[i])
}

// Sorter listen alfabetisk
fylkesliste.sort()

// Skriv ut alle fylkesnavnene fra den sorterte listen
console.log('Skriv ut alle fylkesnavnene fra den sorterte listen')

for (var i = 0; i < fylkeslisteLengde; i++) {
  console.log(fylkesliste[i])
}

// Reverser listen
fylkesliste.reverse()

// Skriv ut alle fylkesnavnene fra den reverserte listen
console.log('Skriv ut alle fylkesnavnene fra den reverserte listen')

for (var i = 0; i < fylkeslisteLengde; i++) {
  console.log(fylkesliste[i])
}

// Skriv ut alle oppføringene på formen <fylkesnavn> har <folketall> innbyggere og målformen er <målform>

console.log('Skriv ut alle oppføringene på formen <fylkesnavn> har <folketall> innbyggere og målformen er <målform>')

for (var i = 0; i < fylkeslisteObjekterLengde; i++) {
  var fylke = fylkesListeObjekter[i]
  console.log(fylke.fylkesnavn + ' har ' + fylke.folketall + ' innbyggere og målformen er ' + fylke.maalform)
}

// Sorter listen alfabetisk etter fylkesnavn
console.log('Sorterer liste')
fylkesListeObjekter.sort(sorterFylkesnavnAlfabetisk)

// Skriv ut alle oppføringene på formen <fylkesnavn> har <folketall> innbyggere og målformen er <målform>

console.log('Skriv ut alle oppføringene på formen <fylkesnavn> har <folketall> innbyggere og målformen er <målform>')

for (var i = 0; i < fylkeslisteObjekterLengde; i++) {
  var fylke = fylkesListeObjekter[i]
  console.log(fylke.fylkesnavn + ' har ' + fylke.folketall + ' innbyggere og målformen er ' + fylke.maalform)
}

// Skriv ut navn på alle fylker som har mer enn 300 000 innbyggere
console.log('Skriv ut navn på alle fylker som har mer enn 300 000 innbyggere')

for (var i = 0; i < fylkeslisteObjekterLengde; i++) {
  var fylke = fylkesListeObjekter[i]
  if (fylke.folketall > 300000) {
    console.log(fylke.fylkesnavn)
  }
}

// Skriv ut navn på alle fylker som benytter nynorsk
console.log('Skriv ut navn på alle fylker som benytter nynorsk')

for (var i = 0; i < fylkeslisteObjekterLengde; i++) {
  var fylke = fylkesListeObjekter[i]
  if (fylke.maalform === 'nynorsk') {
    console.log(fylke.fylkesnavn)
  }
}

// Regn ut det totale antall mennesker som bor i fylker hvor de benytter bokmål
console.log('Regn ut det totale antall mennesker som bor i fylker hvor de benytter bokmål')

for (var i = 0; i < fylkeslisteObjekterLengde; i++) {
  var fylke = fylkesListeObjekter[i]
  if (fylke.maalform === 'bokmål') {
    totaltAntallMennesker += fylke.folketall
  }
}

console.log(totaltAntallMennesker)
