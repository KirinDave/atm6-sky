var ores = [
  'Allthemodium',
  'Vibranium',
  'Unobtainium',
  'Aluminum',
  'Copper',
  'Lead',
  'Nickel',
  'Osmium',
  'Platinum',
  'Silver',
  'Tin',
  'Uranium',
  'Zinc'
];

onEvent('item.registry', e => {
  e.create('mass_of_wills').displayName('§6Mass of Wills').tooltip('§8Combination of the six wills of the ancients').unstackable();
  e.create('rune_of_sins').displayName('§6Rune of Sins').tooltip('§8Rune that contains the power of the seven sins').unstackable();
  e.create('rotten_leather').displayName('Rotten Leather');
  e.create('uu_matter').displayName('§dUU-Matter');

  e.create('piece_mod').displayName('Allthemodium Ore Piece');
  e.create('piece_vib').displayName('Vibranium Ore Piece');
  e.create('piece_unob').displayName('Unobtanium Ore Piece');
  e.create('chunk_mod').displayName('Allthemodium Ore Chunk');
  e.create('chunk_vib').displayName('Vibranium Ore Chunk');
  e.create('chunk_unob').displayName('Unobtanium Ore Chunk');

  /*
  e.create('example_food').food(function(food){
    food.hunger(10);
    food.saturation(1);
    food.meat();
    food.alwaysEdible();
    food.fastToEat();
    food.effect('minecraft:regeneration', 400, 1, 1.0);
  }).add();
  */
  //Script for making items for the mekanism 5x process
  /*
  ores.forEach(ore => {
    var oreForm = ore.toLowerCase();
    e.create('clump_' + oreForm).displayName(ore + ' Clump').texture('kubejs:item/oreStuff/clump_' + oreForm);
    e.create('shard_' + oreForm).displayName(ore + ' Shard').texture('kubejs:item/oreStuff/shard_' + oreForm);
    e.create('dirty_' + oreForm).displayName('Dirty ' + ore + ' Dust').texture('kubejs:item/oreStuff/dirty_' + oreForm);
    e.create('crystal_' + oreForm).displayName(ore + ' Crystal').texture('kubejs:item/oreStuff/crystal_' + oreForm);
  });
  */
});

onEvent('block.registry', e => {
  e.create('magical_soil').displayName('§bMagical Soil').material(block.material.organic).hardness(0.6);
  e.create('nether_star_block').displayName('§eNether Star Block').material(block.material.iron).hardness(2).lightLevel(2);
  e.create('aquamarine_block').displayName('Aquamarine Block').material(block.material.rock).hardness(2).lightLevel(1);
  e.create('fluorite_block').displayName('Fluorite Block').material(block.material.ice).hardness(1.2);
  e.create('lithium_block').displayName('Lithium Block').material(block.material.iron).hardness(1);
});