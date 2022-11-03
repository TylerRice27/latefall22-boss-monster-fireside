const hero =
{
    name: 'Spider-man',
    type: 'Rouge',
    damage: 10,
    health: 100,
    credit: 0,
    // img: 'Spider-Man/Spider-Man 00.png'
}

const companion =
{
    name: 'Wolverine',
    type: 'Tank',
    damage: 5,
    health: 100,
    img: 'Wolverine/Wolverine 01.png'
}

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

