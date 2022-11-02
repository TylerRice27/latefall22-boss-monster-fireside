const hero =
{
    name: 'Spider-man',
    type: 'Rouge',
    damage: 10,
    health: 100,
    credit: 0,
    img: 'Spider-Man/Spider-Man 00.png'
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
}

const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}

function attackBoss() {
    if (hero.health <= 0) {
        return window.alert("You dead bro")
    }
    // NOTE This doesn't work because the = sign
    // is assign the left hand thing to the right hand thing
    // hero.damage -= boss.health
    boss.health -= hero.damage
    if (boss.health < 0) {
        bossLevelUp()
        update()
    }

}

function bossLevelUp() {
    boss.level++
    boss.hp = boss.level * 100
    hero.credit += boss.level * 100

}

function bossAttack() {
    boss.damage = boss.damage * boss.level
    hero.health -= boss.level
    if (hero.health <= 0) {
        hero.health = 0

    }

}

