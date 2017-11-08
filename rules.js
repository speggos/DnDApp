export const rules = {
	classes: [
		{name: 'Barbarian'},
		{name: 'Bard'},
		{name: 'Cleric'},
		{name: 'Druid'},
		{name: 'Fighter'},
		{name: 'Monk'},
		{name: 'Paladin'},
		{name: 'Ranger'},
		{name: 'Rogue'},
		{name: 'Sorcerer'},
		{name: 'Warlock'},
		{name: 'Wizard'},
		{name: 'Custom'}
	],
	races: [
		{name: 'Dragonborn'},
		{name: 'Dwarf'},
		{name: 'Elf'},
		{name: 'Gnome'},
		{name: 'Half-Elf'},
		{name: 'Half-Orc'},
		{name: 'Halfling'},
		{name: 'Human'},
		{name: 'Tiefling'},
		{name: 'Custom'},
	],
	weapons: {
		simpleMeelee: [
			{name: 'Club', damage: [4], damageType: 'Bludgeoning', properties:	'Light'},
			{name: 'Dagger', damage: [4], damageType: 'Piercing', properties: 'Finesse, light, thrown (range 20/60)'},
			{name: 'Greatclub', damage: [8], damageType: 'Bludgeoning', properties: 'Two-handed'},
			{name: 'Handaxe', damage: [6], damageType: 'Slashing', properties: 'Light, thrown (range 20/60)'},
			{name: 'Light Hammer', damage: [4], damageType: 'Bludgeoning', properties: 'Light, thrown(range 20/60'},
			{name: 'Mace', damage: [6], damageType: 'Bludgeoning', properties: ''},
			{name: 'Quarterstaff', damage: [6], damageType: 'Bludgeoning', properties: 'Versatile(1d8)'},
			{name: 'Sickle', damage: [4], damageType: 'Slashing', properties: 'Light'},
			{name: 'Spear', damage: [6], damageType: 'Piercing', properties: 'Thrown (range 20/60), versatile (1d8)'},
		],
		simpleRanged: [
			{name: 'Crossbow, light', damage: [8], damageType: 'Piercing', properties: 'Ammunition (range 80/320), loading, two-handed'},
			{name: 'Dart', damage: [4], damageType: 'Piercing', properties: 'Finesse, thrown (range 20/60)'},
			{name: 'Shortbow', damage: [6], damageType: 'Piercing', properties: 'Ammunition (range 80/320), two-handed'},
			{name: 'Sling', damage: [4], damageType: 'Bludgeoning', properties: 'Ammunition (range 30/120)'},
		],
		martialMeelee: [
			{name: 'Battleaxe', damage: [8], damageType: 'Slashing', properties: 'Versatile (1d10)'},
			{name: 'Flail', damage: [8], damageType: 'Bludgeoning', properties: ''},
			{name: 'Glaive', damage: [10], damageType: 'Slashing', properties: 'Heavy, reach, two-handed'},
			{name: 'Greataxe', damage: [12], damageType: 'Slashing', properties: '	Heavy, two-handed'},
			{name: 'Greatsword', damage: [6,6], damageType: 'Slashing', properties: 'Heavy, two-handed'},
			{name: 'Halberd', damage: [10], damageType: 'Slashing', properties: 'Heavy, reach, two-handed'},
			{name: 'Lance', damage: [12], damageType: 'Piercing', properties: 'Reach, special'},
			{name: 'Longsword', damage: [8], damageType: 'Slashing', properties: 'Versatile (1d10)'},
			{name: 'Maul', damage: [6,6], damageType: 'Bludgeoning', properties: '	Heavy, two-handed'},
			{name: 'Morningstar', damage: [8], damageType: 'Piercing', properties: ''},
			{name: 'Pike', damage: [10], damageType: 'Piercing', properties: 'Heavy, reach, two-handed'},
			{name: 'Rapier', damage: [8], damageType: 'Piercing', properties: 'Finesse'},
			{name: 'Scimitar', damage: [6], damageType: 'Slashing', properties: 'Finesse, light'},
			{name: 'Shortsword', damage: [6], damageType: 'Piercing', properties: 'Finesse, light'},
			{name: 'Trident', damage: [6], damageType: 'Piercing', properties: 'Thrown (range 20/60), versatile (1d8)'},
			{name: 'War pick', damage: [8], damageType: 'Piercing', properties: ''},
			{name: 'Warhammer', damage: [8], damageType: 'Bludgeoning', properties: 'Versatile (1d10)'},
			{name: 'Whip', damage: [4], damageType: 'Slashing', properties: 'Finesse, reach'},
		],
		martialRanged: [
			{name: 'Blowgun', damage: [1], damageType: 'Piercing', properties: 'Ammunition (range 25/100), loading'},
			{name: 'Crossbow, hand', damage: [6], damageType: 'Piercing', properties: 'Ammunition (range 30/120), light, loading'},
			{name: 'Crossbow, heavy', damage: [10], damageType: 'Piercing', properties: 'Ammunition (range 100/400), heavy, loading, two-handed'},
			{name: 'Longbow', damage: [8], damageType: 'Piercing', properties: 'Ammunition (range 150/600), heavy, two-handed'},
			{name: 'Net', damage: [0], damageType: '', properties: 'Special, thrown (range 5/15)'},

		]
	}
}

global.rules = rules;