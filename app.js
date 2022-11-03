const hero =
{
    name: 'Spider-man',
    damage: 10,
    health: 100,
    credit: 0,
}

const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}

const companions = [

    {
        name: 'Wolverine',
        type: 'dmg',
        value: 5,
        health: 150,
        cost: 100,
        power: 0,
        img: 'https://media2.giphy.com/media/HTy0GcFDvOVi0/giphy.gif'
    },

    {
        name: 'Iron-man',
        type: 'dmg',
        value: 15,
        health: 100,
        cost: 200,
        power: 0,
        img: "https://media1.giphy.com/media/7EiixpldfkXni/giphy.gif?cid=ecf05e470ymdtyll84dy0v9d66xiq0et3sqlzux9sf9ifv9c&rid=giphy.gif&ct=s"

    },
    {
        name: 'Deadpool',
        type: 'heal',
        value: 10,
        health: 100,
        cost: 500,
        power: 0,
        img: "https://media3.giphy.com/media/TAbghspb8GP4I/200w.webp?cid=ecf05e47iusv43aubq8g15qe54v33cvtt327gqjf7nbaaouo&rid=200w.webp&ct=s"

    }
]


function update() {
    document.getElementById('boss-hp').innerText = boss.health
    document.getElementById('hero-hp').innerText = hero.health
    document.getElementById('boss-lvl').innerText = boss.level
    document.getElementById('credits').innerText = hero.credit



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

    // let audio = new Audio('imgs/Spider-Man web shoot sound effect.mp3')
    // audio.play()
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
    hero.health -= boss.damage
    if (hero.health <= 0) {
        hero.health = 0

    }
    update()
}


setInterval(bossAttack, 2000)


// NOTE this is where the function for the companions
// Start that is need for the lecture
// I put my companions up to by my hero

function drawCompanions(companion) {

    let template =
        /*html*/
        ` 
        <div class="d-flex flex-column align-items-center">
        <div class="bg-dark rounded p-1">
                <h3 class="text-light  m-0 pt-2 text-center text-shadow">Level: ${companion.power} | HP: ${companion.health}</span></h3>
                </div>
                <img class="comp-img " src="${companion.img}" alt="">

            </div>`
    document.getElementById(`${companion.name}`).innerHTML = template

}
function buy(name) {
    let companion = companions.find(f => f.name == name)
    console.log(companion);

    if (hero.credit < companion.cost) {
        window.alert("Go farm some more credits")
        return
    }
    // @ts-ignore
    hero.credit -= companion.cost
    // @ts-ignore
    companion.power++

    drawCompanions(companion)
    companionsActions()
    update()
}

function damageBoss(damage) {
    boss.health -= damage
    if (boss.health < 0) {
        bossLevelUp()
    }
    update()
}

function healHero(val) {
    hero.health += val
    if (hero.health >= 100) {
        hero.health = 100
    }
    update()
}

function companionsActions() {
    companions.forEach(c => {

        console.log(c);
        if (c.health <= 0) {
            c.health = 0
            return
        }
        if (c.type == "dmg") {
            let damage = c.power * c.value
            damageBoss(damage)
        } else {
            let heal = c.power * c.value
            healHero(heal)
        }
    }

    )

    update()
}



setInterval(companionsActions, 3000)