//1. Imprimir los impares del 1 al 50

for (i = 1; i < 51; i++){
    if(i % 2 != 0){
        console.log(i)
    }
}

//2. Pide al usuario un numero, y muestra todos los pokemon que sean multiplos de 5, empezando por 1 hasta el numero introducido por el usuario

var pokemons = 
[ 'bulbasaur',
  'ivysaur',
  'venusaur',
  'charmander',
  'charmeleon',
  'charizard',
  'squirtle',
  'wartortle',
  'blastoise',
  'caterpie',
  'metapod',
  'butterfree',
  'weedle',
  'kakuna',
  'beedrill',
  'pidgey',
  'pidgeotto',
  'pidgeot',
  'rattata',
  'raticate',
  'spearow',
  'fearow',
  'ekans',
  'arbok',
  'pikachu',
  'raichu',
  'sandshrew',
  'sandslash',
  'nidoran-f',
  'nidorina',
  'nidoqueen',
  'nidoran-m',
  'nidorino',
  'nidoking',
  'clefairy',
  'clefable',
  'vulpix',
  'ninetales',
  'jigglypuff',
  'wigglytuff',
  'zubat',
  'golbat',
  'oddish',
  'gloom',
  'vileplume',
  'paras',
  'parasect',
  'venonat',
  'venomoth',
  'diglett',
  'dugtrio',
  'meowth',
  'persian',
  'psyduck',
  'golduck',
  'mankey',
  'primeape',
  'growlithe',
  'arcanine',
  'poliwag',
  'poliwhirl',
  'poliwrath',
  'abra',
  'kadabra',
  'alakazam',
  'machop',
  'machoke',
  'machamp',
  'bellsprout',
  'weepinbell',
  'victreebel',
  'tentacool',
  'tentacruel',
  'geodude',
  'graveler',
  'golem',
  'ponyta',
  'rapidash',
  'slowpoke',
  'slowbro',
  'magnemite',
  'magneton',
  'farfetchd',
  'doduo',
  'dodrio',
  'seel',
  'dewgong',
  'grimer',
  'muk',
  'shellder',
  'cloyster',
  'gastly',
  'haunter',
  'gengar',
  'onix',
  'drowzee',
  'hypno',
  'krabby',
  'kingler',
  'voltorb' ]
var usuario = prompt('Dame un numero entre 1 y 101:') 
for (i = 1; i <= usuario; i++){
    if(i % 5 == 0){
        console.log(pokemons[i-1])
        //el 'i - 1' es para arreglar el problema por asignacion. Al iniciar en 0, tecnicamente mostraria el pokemon 6 en vez del 5
    }
}

//3. Del arreglo ' [4, ”dos”, 8, ”tres”, 5, 9, 1, ”cero”] ', muestra en consola solo los elementos tipo numero

var array = [4, 'dos', 8, 'tres', 5, 9, 1, 'cero']

for (i = 0; i < 8; i++){
    if(parseInt(array[i])){
        console.log(array[i])
    }
}