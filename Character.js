class Character {
	
	constructor () {
		this.name = "";
		this.level = 1;
		this.race = "";
		this.class = "";
		this.background = "";
		this.hp = {
			current: 1,
			max: 1,
			temp: 0
		};
		this.hitDice = {
			current: 1,
			max: 1
		};
		this.ac = 10;
		this.speed = 15;
		this.proficiencyBonus = 2;
		this.stats = {
			strength: {
				value: 0,
				mod: 0,
				savingThrow: false,
				athletics: false
			},
			dexterity: {
				value: 0,
				mod: 0,
				savingThrow: false,
				acrobatics: false,
				sleightOfHand: false,
				stealth: false
			},
			constitution: {
				value: 0,
				mod: 0,
				savingThrow: false
			},
			intelligence: {
				value: 0,
				mod: 0,
				savingThrow: false,
				arcana: false,
				history: false,
				investigation: false,
				nature: false,
				religion: false
			},
			wisdom: {
				value: 0,
				mod: 0,
				savingThrow: false,
				animalHandling: false,
				insight: false,
				medicine: false,
				perception: false,
				survival: false
			},
			charisma: {
				value: 0,
				mod: 0,
				savingThrow: false,
				deception: false,
				intimidation: false,
				performance: false,
				persuasion: false
			}
		}
		this.armour = []
		this.weapons = []
		this.classFeature = {
			name: "",
			current: 1,
			max: 1
		}
		this.spells = [];
	}

}

module.exports = Character;