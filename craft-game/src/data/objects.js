import iron from "@assets/iron.png";
import copper from "../assets/copper.png";
import wood from "../assets/wood.png";
import stick from "../assets/stick.png";
import steelSheet from "../assets/steel-sheet.png";
import picaxe from "../assets/picaxe.png";
import gold from "../assets/gold.png";
import diamond from "../assets/diamond.png";
import ruby from "../assets/ruby.png";

export const objects = [
    {
        id: 1,
        name: "Iron", 
        icon: iron,
        description: "Obiect de rang 1.",
        type: "primary"
    },
    {
        id: 2,
        name: "Copper",
        icon: copper,
        description: "Obiect de rang 1.",
        type: "primary"
    },
    {
        id: 3,
        name: "Wood",
        icon: wood,
        description: "Obiect de rang 1.",
        type: "primary"
    },
        {
        id: 4,
        name: "Stick",
        icon: stick,
        description: "Obiect de rang 2 obtinut prin craftare.",
        type: "crafted",
        chance: 1,
        ingredients: [null, 3, null, null, 3, null, null, null, null]
    },
    {
        id: 5,
        name: "Steel Sheet",
        icon: steelSheet,
        description: "Obiect de rang 2 obtinut prin craftare.",
        type: "crafted",
        chance: 0.9,
        ingredients: [1, 1, 1, null, null, null, null, null, null]
    },
    {
        id: 6,
        name: "Steel Picaxe",
        icon: picaxe,
        description: "Obiect de rang 3 obtinut prin craftare.",
        type: "crafted",
        chance: 0.6,
        ingredients: [5, 5, 5, null, 4, null, null, 4, null]
    },
    {
        id: 7,
        name: "Gold",
        icon: gold,
        description: "Obiect rar cu sansa mica de obtinere.",
        type: "crafted",
        chance: 0.2,
        ingredients: [2, 1, 2, 1, 2, 1, 2, 1, 2]
    },
    {
        id: 8,
        name: "Diamond",
        icon: diamond,
        description: "Obiect foarte rar cu sansa foarte mica de obtinere.",
        type: "crafted",
        chance: 0.1,
        ingredients: [6, 7, 7, 7, 7, 7, 7, 7, 7]
    },
    {
        id: 9,
        name: "Ruby",
        icon: ruby,
        description:"Un obiect de raritate extrema.",
        type: "crafted",
        chance: 1,
        ingredients: [8, 8, 8, 8, 8, 8, 8, 8, 8]
    },
    
]