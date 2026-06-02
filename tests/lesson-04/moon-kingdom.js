function createCharacters(){
    // khai báo mảng các object
    const characters = [
        {"name": "Thu", "level": 2, "health": 2000},
        {"name": "Thắm", "level": 3, "health": 300},
        {"name": "Phong", "level": 4, "health": 5000},
        {"name": "Đức", "level": 1, "health": 1500}, 
    ];
    //dùng hàm map tạo mảng
    const charactersPowerup = characters.map((item) =>
    ({
        name: item.name.toUpperCase(),
        level: item.level * 2,
        health: item.health * 3,
    }))
    // in ra mảng mới của hàm map
    console.log(charactersPowerup);

    //filter heal > 1000 và in ra
    const possibleWinners = characters.filter(character => character.health > 1000);
    console.log(possibleWinners);
}
// gọi lại function để in ra kết quả
createCharacters();

function printLeaderboard(){
    // khai báo mảng các object
    const players = [
        {name: "Mario1", score: 1000},
        {name: "Mario2", score: 2000},
        {name: "Mario3", score: 500},
        {name: "Mario4", score: 300},
    ];
    // b-a = sort giảm dần
    players.sort((a,b) => b.score - a.score );
    console.log(players);
}
// gọi lại function để in ra kết quả
printLeaderboard();