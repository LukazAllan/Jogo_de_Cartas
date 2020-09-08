// Author: Allan Lucas
// Implementando a lógica do jogo
// Node 12.18.3

// void setup()
// Here will be the variables which will be used by the game.
// Disclaimer: all my variables here are declared with "let",
// because I want to define them at this point of the code. 
let p1 = {"name": null, "cards": []};
var p1 = {"name": "Allan", "cards": [{"name":"Megumin", "type":"fire", "hp":100, "atks":[["Explosion", 10]], "def": 10}]}
let p2 = {"name": null, "cards": []};
var p2 = {"name": "Luan", "cards": [{"name":"Dava Jonas", "type":"tech", "hp":150, "atks":[["Pimba", 5], ["Pimbada", 12]], "def":10}]}
/*p1 and p2 are object(dictionary) which are containing only
2 keys:
Key "name": store the name in it
Key "cards": store only an array of *card*s
---->*card*: object that stores "name", "hp", "atks", "def"
*/
p1.push(
    {"name": "Megumin", // String("Card Name")
    "type" : "fire",    // String("*Type*"")
    "hp"   : 100,       // Number.parseInt("heal points")
    "atks" : {          // Object("Atacks")
        "Explosion": 10 // key: String("Attack Name"); value: Number.parseInt("Damage")
    },
    "def"  : 10}        // Number.parseInt("Defense")
)

// void loop()
// Here will be the loop, and asking for inputs from the user.
while (true) {

}