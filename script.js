/* =========================================================
   GAME DATA & LOGIC
   ========================================================= */

const GAMES = [
    // ==================== ORIGINAL GAMES ====================
    {
        id: 1,
        name: "Nioh 3",
        icon: "images icons/Nioh_3_LOGO.jpg",
        rating: 4.8,
        downloads: "5M+",
        author: "Koei Tecmo",
        description: "Nioh 3 Mobile brings brutal samurai action to your fingertips. Master the art of the sword, face terrifying Yokai, and conquer feudal Japan.",
        subtitle: "Nioh 3 Download APK — Nioh 3 Mobile"
    },
    {
        id: 2,
        name: "Resident Evil Requiem",
        icon: "images icons/resident evil requiem logo .PNG",
        rating: 4.9,
        downloads: "12M+",
        author: "Capcom",
        description: "Survive the ultimate horror experience. Resident Evil Requiem delivers spine-chilling survival horror optimized for mobile devices.",
        subtitle: "RE Requiem Download APK — RE Mobile"
    },
    {
        id: 3,
        name: "Grand Theft Auto V",
        icon: "images icons/GTA-v-logo.jpg",
        rating: 4.9,
        downloads: "9M+",
        author: "Rockstar Games",
        description: "GTA 5 mobile is not a regular game, it's a true blockbuster finally delivered on mobile devices. Explore Los Santos like never before.",
        subtitle: "GTA 5 Download APK — GTA 5 Mobile"
    },
    {
        id: 4,
        name: "Ghost of Tsushima",
        icon: "images icons/Ghost of Tsushima logo .PNG",
        rating: 4.9,
        downloads: "7M+",
        author: "Sucker Punch",
        description: "Become the legendary Ghost. Explore the beautiful open world of Tsushima island and fight the Mongol invaders in this stunning mobile port.",
        subtitle: "Ghost of Tsushima APK — GoT Mobile"
    },
    {
        id: 5,
        name: "FORTNITE",
        icon: "images icons/FORTNITE LOGO .jpg",
        rating: 4.7,
        downloads: "25M+",
        author: "Epic Games",
        description: "Drop in, gear up, and compete! Fortnite mobile delivers the full Battle Royale experience with cross-platform play and constant updates.",
        subtitle: "Fortnite Download APK — Fortnite Mobile"
    },
    {
        id: 6,
        name: "Crimson Desert",
        icon: "images icons/crimson desert logo.PNG",
        rating: 4.8,
        downloads: "3M+",
        author: "Pearl Abyss",
        description: "Crimson Desert brings a massive open world RPG to mobile. Explore vast landscapes, engage in epic combat, and uncover a deep story.",
        subtitle: "Crimson Desert APK — CD Mobile"
    },
    {
        id: 7,
        name: "HITMAN 3",
        icon: "images icons/HITMAN_3_logo.png",
        rating: 4.8,
        downloads: "8M+",
        author: "IO Interactive",
        description: "Become Agent 47 on your mobile device. Plan and execute the perfect assassination across stunning locations around the globe.",
        subtitle: "Hitman 3 Download APK — Hitman 3 Mobile"
    },
    {
        id: 8,
        name: "Marathon",
        icon: "images icons/marathon logo.PNG",
        rating: 4.6,
        downloads: "4M+",
        author: "Bungie",
        description: "Marathon is a sci-fi extraction shooter brought to mobile. Dive into a mysterious world, loot, survive, and escape in this intense experience.",
        subtitle: "Marathon Download APK — Marathon Mobile"
    },
    // ==================== NEW GAMES ====================
    {
        id: 9,
        name: "GTA VI",
        icon: "images icons/grand-theft-auto-vi-logo-icon-free-vector.jpg",
        rating: 4.9,
        downloads: "50M+",
        author: "Rockstar Games",
        description: "Grand Theft Auto VI takes you to the neon-soaked streets of Vice City. Experience the most ambitious open world ever created, now on mobile.",
        subtitle: "GTA VI Download APK — GTA 6 Mobile"
    },
    {
        id: 10,
        name: "Reanimal",
        icon: "images icons/Reanimal_cover_art.jpg",
        rating: 4.8,
        downloads: "8M+",
        author: "Tarsier Studios",
        description: "From the creators of Little Nightmares, Reanimal is a hauntingly beautiful co-op adventure. Guide two siblings through a dark, mysterious world.",
        subtitle: "Reanimal Download APK — Reanimal Mobile"
    },
    {
        id: 11,
        name: "Highguard",
        icon: "images icons/Highguard.jpg",
        rating: 4.7,
        downloads: "6M+",
        author: "Wildlight Entertainment",
        description: "Highguard is an intense PvP raid shooter. Team up, strategize, and dominate in fast-paced combat across futuristic arenas.",
        subtitle: "Highguard Download APK — Highguard Mobile"
    },
    {
        id: 12,
        name: "Marvel Tōkon: Fighting Souls",
        icon: "images icons/Marvel-Tokon-Fighting-Souls.jpg",
        rating: 4.9,
        downloads: "15M+",
        author: "Arc System Works",
        description: "Marvel Tōkon brings anime-style tag-team fighting to mobile. Assemble your team of Marvel heroes and unleash devastating combos.",
        subtitle: "Marvel Tōkon APK — Marvel Fighting Mobile"
    },
    {
        id: 13,
        name: "Tomodachi Life: Living the Dream",
        icon: "images icons/tomodachi-life-living-the-dream_a1tn.600.webp",
        rating: 4.6,
        downloads: "12M+",
        author: "Nintendo",
        description: "Create Mii characters, build relationships, and watch hilarious scenarios unfold in this charming life simulation game.",
        subtitle: "Tomodachi Life APK — Tomodachi Mobile"
    },
    {
        id: 14,
        name: "Cairn",
        icon: "images icons/Cairn_cover_art.jpg",
        rating: 4.8,
        downloads: "4M+",
        author: "The Game Bakers",
        description: "Cairn is a survival-climbing simulation. Control every limb as you ascend the treacherous Mount Kami in this breathtaking adventure.",
        subtitle: "Cairn Download APK — Cairn Mobile"
    },
    {
        id: 15,
        name: "Dragon Quest 7 Reimagined",
        icon: "images icons/Dragon Quest 7 Reimagined.jpg",
        rating: 4.9,
        downloads: "10M+",
        author: "Square Enix",
        description: "The classic JRPG reimagined with stunning diorama art style. Explore forgotten lands, restore lost civilizations, and save the world.",
        subtitle: "DQ7 Reimagined APK — Dragon Quest Mobile"
    },
    {
        id: 16,
        name: "Wolverine",
        icon: "images icons/Wolverine.jpg",
        rating: 4.9,
        downloads: "18M+",
        author: "Insomniac Games",
        description: "Unleash your claws as Wolverine. Experience brutal, visceral combat in this action-packed adventure from the makers of Spider-Man.",
        subtitle: "Wolverine Download APK — Wolverine Mobile"
    },
    {
        id: 17,
        name: "Fable",
        icon: "images icons/Fable.jpg",
        rating: 4.8,
        downloads: "7M+",
        author: "Playground Games",
        description: "Return to the magical world of Albion in this stunning reboot. Shape your destiny through choices, combat, and exploration.",
        subtitle: "Fable Download APK — Fable Mobile"
    },
    {
        id: 18,
        name: "Witchbrook",
        icon: "images icons/Witchbrook.jpg",
        rating: 4.7,
        downloads: "5M+",
        author: "Chucklefish",
        description: "Attend a school of witchcraft in this enchanting pixel-art RPG. Brew potions, cast spells, make friends, and uncover magical secrets.",
        subtitle: "Witchbrook Download APK — Witchbrook Mobile"
    },
    {
        id: 19,
        name: "PRAGMATA",
        icon: "images icons/PRAGMATA.webp",
        rating: 4.8,
        downloads: "6M+",
        author: "Capcom",
        description: "PRAGMATA is a sci-fi action adventure set in a dystopian near-future. Unravel the mystery alongside a mysterious girl on the Moon.",
        subtitle: "PRAGMATA Download APK — PRAGMATA Mobile"
    },
    {
        id: 20,
        name: "Mio: Memories in Orbit",
        icon: "images icons/Mio Memories in Orbit.jpg",
        rating: 4.7,
        downloads: "3M+",
        author: "Focus Entertainment",
        description: "Mio is a hand-painted adventure set aboard a space station. Solve puzzles, explore stunning environments, and uncover lost memories.",
        subtitle: "Mio Download APK — Mio Mobile"
    },
    {
        id: 21,
        name: "Far Far West",
        icon: "images icons/Far Far West.webp",
        rating: 4.6,
        downloads: "4M+",
        author: "Evil Raptor",
        description: "Become a robot cowboy in this wild co-op shooter. Battle monsters, cast spells, and collect bounties in a supernatural Wild West.",
        subtitle: "Far Far West APK — Far Far West Mobile"
    },
    {
        id: 22,
        name: "Timberborn",
        icon: "images icons/Timberborn.webp",
        rating: 4.8,
        downloads: "9M+",
        author: "Mechanistry",
        description: "Build a thriving beaver civilization in this unique city-building game. Manage resources, control water, and survive droughts.",
        subtitle: "Timberborn Download APK — Timberborn Mobile"
    },
    {
        id: 23,
        name: "Pokemon Pokopia",
        icon: "images icons/Pokemon Pokopia.jpg",
        rating: 4.9,
        downloads: "25M+",
        author: "Game Freak",
        description: "Explore a brand-new region in Pokopia! Catch, train, and battle with hundreds of Pokémon in this exciting new generation adventure.",
        subtitle: "Pokemon Pokopia APK — Pokemon Mobile"
    },
    {
        id: 24,
        name: "Resident Evil 7: biohazard - Gold Edition",
        icon: "images icons/Resident Evil 7 biohazard - Gold Edition.jpg",
        rating: 4.9,
        downloads: "14M+",
        author: "Capcom",
        description: "Experience the horror of the Baker family estate. RE7 Gold Edition includes all DLC content for the ultimate survival horror experience.",
        subtitle: "RE7 Gold Edition APK — RE7 Mobile"
    },
    // ==================== ANDROID MOD GAMES ====================
    {
        id: 25,
        name: "Traffic Rider",
        icon: "images icons/Traffic Rider.png",
        rating: 4.5,
        downloads: "100M+",
        author: "Soner Kara",
        description: "Race through highway traffic on your motorbike. Experience the thrill of first-person motorcycle racing with stunning graphics.",
        subtitle: "Traffic Rider MOD APK — Unlimited Money"
    },
    {
        id: 26,
        name: "Melon Sandbox",
        icon: "images icons/Melon Sandbox.png",
        rating: 4.4,
        downloads: "50M+",
        author: "0101 Games",
        description: "A physics-based sandbox game where creativity has no limits. Build, destroy, and experiment with ragdoll physics and various tools.",
        subtitle: "Melon Sandbox MOD APK — Full Unlocked"
    },
    {
        id: 27,
        name: "Hill Climb Racing (MOD, Unlimited Money)",
        icon: "images icons/Hill Climb Racing (MOD, Unlimited Money).jpg",
        rating: 4.6,
        downloads: "200M+",
        author: "Fingersoft",
        description: "Drive over hills and through rough terrain in this addictive physics-based driving game. Upgrade vehicles and conquer every track.",
        subtitle: "Hill Climb Racing MOD APK — Unlimited Money"
    },
    {
        id: 28,
        name: "Shadow Fight 3",
        icon: "images icons/Shadow Fight 3 .webp",
        rating: 4.5,
        downloads: "100M+",
        author: "Nekki",
        description: "Enter the world of shadows and become a legendary warrior. Master martial arts, collect epic weapons, and fight in stunning 3D battles.",
        subtitle: "Shadow Fight 3 MOD APK — Unlimited Everything"
    },
    {
        id: 29,
        name: "Cooking Fever (MOD, Unlimited Coins/Gems)",
        icon: "images icons/Cooking Fever (MOD, Unlimited CoinsGems).jpg",
        rating: 4.5,
        downloads: "150M+",
        author: "Nordcurrent",
        description: "Cook delicious meals in restaurants around the world. Upgrade your kitchen, unlock new recipes, and become a master chef.",
        subtitle: "Cooking Fever MOD APK — Unlimited Coins/Gems"
    },
    {
        id: 30,
        name: "Sniper 3D: Fun Free Online FPS (MOD, Unlimited Coins)",
        icon: "images icons/Sniper 3D Fun Free Online FPS (MOD, Unlimited Coins).jpg",
        rating: 4.4,
        downloads: "100M+",
        author: "Fun Games For Free",
        description: "Take aim and shoot! Sniper 3D is the ultimate FPS sniper shooting game. Complete missions, upgrade weapons, and eliminate targets.",
        subtitle: "Sniper 3D MOD APK — Unlimited Coins"
    },
    {
        id: 31,
        name: "Monoposto (MOD, Unlocked)",
        icon: "images icons/Monoposto (MOD, Unlocked).jpg",
        rating: 4.6,
        downloads: "5M+",
        author: "SM Games",
        description: "Experience realistic single-seater racing. Push your limits on iconic circuits with precision driving and stunning visuals.",
        subtitle: "Monoposto MOD APK — Full Unlocked"
    },
    {
        id: 32,
        name: "Idle Supermarket Tycoon (MOD, Unlimited Money)",
        icon: "images icons/Idle Supermarket Tycoon (MOD, Unlimited Money).jpg",
        rating: 4.3,
        downloads: "50M+",
        author: "Codigames",
        description: "Build and manage your own supermarket empire. Hire staff, stock shelves, and expand your business from a small shop to a mega store.",
        subtitle: "Idle Supermarket Tycoon MOD APK — Unlimited Money"
    },
    {
        id: 33,
        name: "Left to Survive (MOD, Unlimited Ammo)",
        icon: "images icons/Left to Survive (MOD, Unlimited Ammo).jpg",
        rating: 4.4,
        downloads: "30M+",
        author: "MY.GAMES",
        description: "Survive the zombie apocalypse with intense shooting action. Build your base, rescue survivors, and fight hordes of undead enemies.",
        subtitle: "Left to Survive MOD APK — Unlimited Ammo"
    },
    {
        id: 34,
        name: "Drift Max Pro (MOD, Unlimited Money)",
        icon: "images icons/1711747849_drift-max-pro.png",
        rating: 4.5,
        downloads: "50M+",
        author: "Tiramisu",
        description: "Master the art of drifting in this realistic car racing game. Tune your ride, hit the track, and score insane drift combos.",
        subtitle: "Drift Max Pro MOD APK — Unlimited Money"
    },
    {
        id: 35,
        name: "SimCity BuildIt",
        icon: "images icons/SimCity BuildIt.jpg",
        rating: 4.5,
        downloads: "100M+",
        author: "Electronic Arts",
        description: "Build and manage your own city from the ground up. Plan your layout, keep citizens happy, and trade with other mayors worldwide.",
        subtitle: "SimCity BuildIt MOD APK — Unlimited SimCash"
    },
    {
        id: 36,
        name: "CSR Racing 2 (MOD, Free Shopping)",
        icon: "images icons/CSR Racing 2 (MOD, Free Shopping).jpg",
        rating: 4.6,
        downloads: "80M+",
        author: "NaturalMotion",
        description: "Experience hyper-real drag racing with the most stunning cars. Customize supercars, compete online, and dominate the streets.",
        subtitle: "CSR Racing 2 MOD APK — Free Shopping"
    },
    {
        id: 37,
        name: "Spider Fighter 3 (MOD, Unlimited Money)",
        icon: "images icons/Spider Fighter 3 (MOD, Unlimited Money).jpg",
        rating: 4.3,
        downloads: "20M+",
        author: "Starter Game",
        description: "Swing through the city as a spider hero! Fight villains, complete missions, and protect the city with amazing superpowers.",
        subtitle: "Spider Fighter 3 MOD APK — Unlimited Money"
    }
];

/* =========================================================
   DOM REFERENCES
   ========================================================= */
const trendingScroll  = document.getElementById('trending-scroll');
const gamesGrid       = document.getElementById('games-grid');
const searchInput     = document.getElementById('search-input');
const noResults       = document.getElementById('no-results');
const modal           = document.getElementById('game-modal');
const modalClose      = document.getElementById('modal-close');
const modalIcon       = document.getElementById('modal-icon');

/* =========================================================
   RENDER TRENDING CARDS
   ========================================================= */
function renderTrending() {
    trendingScroll.innerHTML = GAMES.map((game, i) => `
        <div class="trending-card fade-in" data-game-id="${game.id}" style="transition-delay: ${i * 0.07}s">
            <div class="trending-icon-wrapper">
                <img src="${game.icon}" alt="${game.name}" loading="lazy">
            </div>
            <div class="trending-card-name">${game.name}</div>
            <div class="trending-card-rating">
                <svg class="star-icon" viewBox="0 0 24 24" fill="#fbbf24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
                ${game.rating}
            </div>
        </div>
    `).join('');

    // attach click listeners
    trendingScroll.querySelectorAll('.trending-card').forEach(card => {
        card.addEventListener('click', () => openModal(Number(card.dataset.gameId)));
    });
}

/* =========================================================
   RENDER ALL GAMES CARDS
   ========================================================= */
function createGameCard(game, i) {
    return `
        <div class="game-card fade-in" data-game-id="${game.id}" style="transition-delay: ${i * 0.08}s">
            <div class="game-card-top">
                <div class="game-card-author">Author: <span>${game.author}</span></div>
                <div class="game-card-platforms">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 2c-.587.006-1.266.16-2.014.512C14.39 3.08 13.2 4.12 12.003 5.6 10.806 4.12 9.616 3.08 8.497 2.512 7.155 1.832 5.993 1.856 5.17 2.52c-.892.72-1.075 1.825-.95 2.74.124.91.507 1.82.93 2.546.42.726.873 1.27 1.15 1.58H3.5A1.5 1.5 0 0 0 2 10.886v2a1.5 1.5 0 0 0 1.5 1.5h.5v6.228a1.5 1.5 0 0 0 1.5 1.5h13a1.5 1.5 0 0 0 1.5-1.5v-6.229h.5a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5H17.7c.277-.31.73-.854 1.15-1.58.423-.726.806-1.635.93-2.545.125-.916-.058-2.022-.95-2.74A2.034 2.034 0 0 0 17.523 2z"/></svg>
                    <svg viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                </div>
            </div>
            <div class="game-card-body">
                <div class="game-card-icon">
                    <img src="${game.icon}" alt="${game.name}" loading="lazy">
                </div>
                <div class="game-card-info">
                    <div class="game-card-name-row">
                        <div class="game-card-name">${game.name}</div>
                        <div class="game-card-rating">
                            <svg class="star-icon" viewBox="0 0 24 24" fill="#fbbf24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
                            <span>${game.rating}</span>
                        </div>
                    </div>
                    <p class="game-card-desc">${game.description}</p>
                </div>
            </div>
            <div class="game-card-footer">
                <div class="install-btn">Install</div>
            </div>
        </div>
    `;
}

function renderAllGames(filter = '') {
    const filtered = GAMES.filter(g =>
        g.name.toLowerCase().includes(filter.toLowerCase())
    );

    if (filtered.length === 0) {
        gamesGrid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';
    gamesGrid.innerHTML = filtered.map((game, i) => createGameCard(game, i)).join('');

    // attach click listeners
    gamesGrid.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('click', () => openModal(Number(card.dataset.gameId)));
    });

    // trigger scroll animations for new cards
    requestAnimationFrame(() => observeFadeIns());
}

/* =========================================================
   MODAL — Content Locker
   ========================================================= */
function openModal(gameId) {
    const game = GAMES.find(g => g.id === gameId);
    if (!game) return;

    // Set the game icon in the locker page
    modalIcon.src = game.icon;
    modalIcon.alt = game.name;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

/* =========================================================
   SEARCH
   ========================================================= */
searchInput.addEventListener('input', (e) => {
    renderAllGames(e.target.value.trim());
});

/* =========================================================
   TRENDING SCROLL HINT
   ========================================================= */
const scrollHint = document.getElementById('scroll-hint');

function updateScrollHint() {
    const sl = trendingScroll;
    // Hide hint once user has scrolled past the start
    scrollHint.classList.toggle('hidden', sl.scrollLeft > 30);
}

scrollHint.addEventListener('click', () => {
    trendingScroll.scrollBy({ left: 300, behavior: 'smooth' });
});

trendingScroll.addEventListener('scroll', updateScrollHint, { passive: true });

/* =========================================================
   SCROLL ANIMATIONS (Intersection Observer)
   ========================================================= */
function observeFadeIns() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => observer.observe(el));
}

/* =========================================================
   NAV ACTIVE STATE
   ========================================================= */
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('#trending, #all-games');

function updateNav() {
    let current = '';
    sections.forEach(sec => {
        const top = sec.offsetTop - 120;
        if (window.scrollY >= top) current = sec.id;
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
}

window.addEventListener('scroll', updateNav, { passive: true });

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
    renderTrending();
    updateScrollHint();
    renderAllGames();
    observeFadeIns();
});
