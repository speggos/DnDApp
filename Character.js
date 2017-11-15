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
				savingThrow: false,
			},
			dexterity: {
				value: 0,
				savingThrow: false,
			},
			constitution: {
				value: 0,
				savingThrow: false
			},
			intelligence: {
				value: 0,
				savingThrow: false,
			},
			wisdom: {
				value: 0,
				savingThrow: false,
			},
			charisma: {
				value: 0,
				savingThrow: false,
			}
		}
		this.skills = {
			strength: [
				{name: "Athletics", proficient: false},
			],
			dexterity: [
				{name: "Acrobatics", proficient: false},
				{name: "Sleight Of Hand", proficient: false},
				{name: "Stealth", proficient: false},
			],
			intelligence: [
				{name: "Arcana", proficient: false},
				{name: "History", proficient: false},
				{name: "Investigation", proficient: false},
				{name: "Nature", proficient: false},
				{name: "Religion", proficient: false},
			],
			wisdom: [
				{name: "Animal Handling", proficient: false},
				{name: "Insight", proficient: false},
				{name: "Medicine", proficient: false},
				{name: "Perception", proficient: false},
				{name: "Survival", proficient: false},
			],
			charisma: [
				{name: "Deception", proficient: false},
				{name: "Intimidation", proficient: false},
				{name: "Performance", proficient: false},
				{name: "Persuasion", proficient: false},
			]

		}
		this.armour = []
		this.weapons = []
		this.classFeature = {
			name: "",
			current: 1,
			max: 1
		}
		this.spells = [];
		this.abilities = "";
	}

}

module.exports = Character;