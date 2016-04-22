# Hjeeeeeeeeeeeeeeeeeelp .... og hint

Prøv å løse oppgavene uten disse først.

## Oppgave 1

Liste av objekter
```
[
  {
    a: 'hei',
    b: 42,
    c: 'hei igjen'
  },
  {
    a: 'hå',
    b: 4711,
    c: 'freeeeeeeedaaaaaaaaaaaaag'
  }
]
```

Les mer om object [properties](http://www.w3schools.com/js/js_properties.asp)

## Oppgave 2

Alternativ tekst på bilder ```alt="Her skriver du alternativ tekst"```

Skal inneholde en tekstlig beskrivelse av bildet slik at f.eks. besøkende som benytter skjermleser skal får samme brukeropplevelse som andre.
Dersom bildet brukes som link skal den alternative bildeteksten fortelle hva som skjer dersom man trykker på linken.

```
<a href="http://www.klassekampen.no/">
  <img src="klassekampenlogo.png" alt="Trykk her for å lese Klassekampen">
</a>
```
Hente valgt verdi ut fra en nedtrekksmeny

```
var nedtrekksmeny = document.getElementById('idForNedtrekksmeny')
var valgtVerdi = nedtrekksmeny.options[nedtrekksmeny.selectedIndex].value;
```