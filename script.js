const CR_DATA = {
    'hog-rider': {
        name: 'هوج رايدر 2.6',
        elixir: '2.6',
        cards: [
            {id: 'hog-rider', n: 'Hog Rider'}, {id: 'musketeer', n: 'Musketeer'},
            {id: 'ice-spirit', n: 'Ice Spirit'}, {id: 'ice-golem', n: 'Ice Golem'},
            {id: 'skeletons', n: 'Skeletons'}, {id: 'fireball', n: 'Fireball'},
            {id: 'the-log', n: 'The Log'}, {id: 'cannon', n: 'Cannon'}
        ],
        offense: 'ارسل الهوج مع روح الثلج باستمرار للضغط. استخدم كرة النار لتدمير مباني الخصم.',
        defense: 'استخدم المسكيتير والمدفع كقاعدة دفاعية أساسية، والآيس غولم لتشتيت القوات.'
    },
    'pekka': {
        name: 'بيكا بريدج سبام',
        elixir: '3.9',
        cards: [
            {id: 'pekka', n: 'P.E.K.K.A'}, {id: 'battle-ram', n: 'Battle Ram'},
            {id: 'royal-ghost', n: 'Royal Ghost'}, {id: 'bandit', n: 'Bandit'},
            {id: 'electro-wizard', n: 'Electro Wizard'}, {id: 'magic-archer', n: 'Magic Archer'},
            {id: 'zap', n: 'Zap'}, {id: 'poison', n: 'Poison'}
        ],
        offense: 'اعتمد على الهجوم المزدوج في المسارين. استغل سرعة البانديت والباتل رام.',
        defense: 'البيكا تدمر أي دبابة أرضية، واليكترو ويزارد يوقف كروت الشحن مثل السباركي.'
    },
    'mega-knight': {
        name: 'ميجا نايت بايت',
        elixir: '3.6',
        cards: [
            {id: 'mega-knight', n: 'Mega Knight'}, {id: 'goblin-barrel', n: 'Goblin Barrel'},
            {id: 'goblin-gang', n: 'Goblin Gang'}, {id: 'inferno-dragon', n: 'Inferno Dragon'},
            {id: 'valkyrie', n: 'Valkyrie'}, {id: 'skeleton-barrel', n: 'Skeleton Barrel'},
            {id: 'spear-goblins', n: 'Spear Goblins'}, {id: 'arrows', n: 'Arrows'}
        ],
        offense: 'استنزف تعاويذ الخصم بالبراميل، ثم فاجئه بالميجا نايت عند الهجوم.',
        defense: 'الانفيرنو دراجون هو سلاحك السري ضد العمالقة والبيكا.'
    }
};

const IMG_BASE = "https://royaleapi.github.io/cr-api-assets/cards/";

document.getElementById('generateBtn').addEventListener('click', () => {
    const val = document.getElementById('mainCard').value;
    const data = CR_DATA[val];
    
    document.getElementById('loader').classList.remove('hidden');
    document.getElementById('resultArea').classList.add('hidden');

    setTimeout(() => {
        const grid = document.getElementById('deckGrid');
        grid.innerHTML = '';
        
        data.cards.forEach(card => {
            grid.innerHTML += `
                <div class="card-item">
                    <img src="${IMG_BASE}${card.id}.png" alt="${card.n}">
                    <span>${card.n}</span>
                </div>
            `;
        });

        document.getElementById('avgElixir').innerText = data.elixir;
        document.getElementById('offenseText').innerText = data.offense;
        document.getElementById('defenseText').innerText = data.defense;

        document.getElementById('loader').classList.add('hidden');
        document.getElementById('resultArea').classList.remove('hidden');
    }, 1000);
});