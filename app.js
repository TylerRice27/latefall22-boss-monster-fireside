const hero =
{
    name: 'Spider-man',
    type: 'Rouge',
    damage: 10,
    health: 100,
    credit: 0,
    // img: 'Spider-Man/Spider-Man 00.png'
}

const companions = [

    {
        name: 'Wolverine',
        type: 'Tank',
        value: 5,
        health: 150,
        cost: 100,
        img: 'Wolverine/Wolverine 01.png'
    },

    {
        name: 'Symbiote Spider-man',
        type: 'Evil Rouge',
        value: 15,
        health: 100,
        cost: 200,
        img: "img/Spider-Man 01.png"

    },
    {
        name: 'Deadpool',
        type: 'Support',
        value: 10,
        health: 100,
        cost: 500,
        img: "img/Deadpool 00.png"

    }
]


function update() {
    document.getElementById('boss-hp').innerText = boss.health
    document.getElementById('hero-hp').innerText = hero.health
    document.getElementById('boss-lvl').innerText = boss.level
    document.getElementById('credits').innerText = hero.credit



}

const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}

function attackBoss() {
    if (hero.health <= 0) {
        window.alert("You dead bro")
        return
    }
    // NOTE This doesn't work because the = sign
    // is assign the left hand thing to the right hand thing
    // hero.damage -= boss.health
    boss.health -= hero.damage
    hero.credit += boss.level
    if (boss.health < 0) {
        bossLevelUp()
    }
    update()

}

function bossLevelUp() {
    boss.level++
    boss.maxHealth = boss.level * 100
    boss.health = boss.maxHealth
    hero.credit += boss.level * 100

}

function bossAttack() {
    boss.damage = boss.damage * boss.level
    hero.health -= boss.level
    if (hero.health <= 0) {
        hero.health = 0

    }
    update()
}


setInterval(bossAttack, 2000)


// NOTE this is where the function for the companions
// Start that is need for the lecture
// I put my companions up to by my hero

function buy(name) {
    let companion = companions.find(f => f.name == name)
    console.log(companion);
    if (hero.credit < companion.cost) {
        window.alert("Go farm some more credits")
        return
    }
    hero.credit -= companion.cost
    update()
}