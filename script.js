/* =========================================================
   GAME DATA & LOGIC
   ========================================================= */

const GAMES = [
    {
        id: 1,
        name: "Nioh 3",
        icon: "images icons/Nioh_3_LOGO.jpg",
        rating: 4.8,
        downloads: "5M+",
        author: "Koei Tecmo",
        description: "Nioh 3 Mobile brings brutal samurai action to your fingertips. Master the art of the sword, face terrifying Yokai, and conquer feudal Japan.",
        subtitle: "Nioh 3 Available on Android & iOS"
    },
    {
        id: 2,
        name: "Resident Evil Requiem",
        icon: "images icons/resident evil requiem logo .PNG",
        rating: 4.9,
        downloads: "12M+",
        author: "Capcom",
        description: "Survive the ultimate horror experience. Resident Evil Requiem delivers spine-chilling survival horror optimized for mobile devices.",
        subtitle: "RE Requiem Available on Android & iOS"
    },
    {
        id: 3,
        name: "Grand Theft Auto V",
        icon: "images icons/GTA-v-logo.jpg",
        rating: 4.9,
        downloads: "9M+",
        author: "Rockstar Games",
        description: "GTA 5 mobile is not a regular game, it's a true blockbuster finally delivered on mobile devices. Explore Los Santos like never before.",
        subtitle: "GTA 5 Available on Android & iOS"
    },
    {
        id: 4,
        name: "Ghost of Tsushima",
        icon: "images icons/Ghost of Tsushima logo .PNG",
        rating: 4.9,
        downloads: "7M+",
        author: "Sucker Punch",
        description: "Become the legendary Ghost. Explore the beautiful open world of Tsushima island and fight the Mongol invaders in this stunning mobile port.",
        subtitle: "Ghost of Tsushima Available on Android & iOS"
    },
    {
        id: 5,
        name: "FORTNITE",
        icon: "images icons/FORTNITE LOGO .jpg",
        rating: 4.7,
        downloads: "25M+",
        author: "Epic Games",
        description: "Drop in, gear up, and compete! Fortnite mobile delivers the full Battle Royale experience with cross-platform play and constant updates.",
        subtitle: "Fortnite Available on Android & iOS"
    },
    {
        id: 6,
        name: "Crimson Desert",
        icon: "images icons/crimson desert logo.PNG",
        rating: 4.8,
        downloads: "3M+",
        author: "Pearl Abyss",
        description: "Crimson Desert brings a massive open world RPG to mobile. Explore vast landscapes, engage in epic combat, and uncover a deep story.",
        subtitle: "Crimson Desert Available on Android & iOS"
    },
    {
        id: 7,
        name: "HITMAN 3",
        icon: "images icons/HITMAN_3_logo.png",
        rating: 4.8,
        downloads: "8M+",
        author: "IO Interactive",
        description: "Become Agent 47 on your mobile device. Plan and execute the perfect assassination across stunning locations around the globe.",
        subtitle: "Hitman 3 Available on Android & iOS"
    },
    {
        id: 8,
        name: "Marathon",
        icon: "images icons/marathon logo.PNG",
        rating: 4.6,
        downloads: "4M+",
        author: "Bungie",
        description: "Marathon is a sci-fi extraction shooter brought to mobile. Dive into a mysterious world, loot, survive, and escape in this intense experience.",
        subtitle: "Marathon Available on Android & iOS"
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
const modalTitle      = document.getElementById('modal-title');
const modalSubtitle   = document.getElementById('modal-subtitle');
const modalRating     = document.getElementById('modal-rating-value');
const modalDownloads  = document.getElementById('modal-downloads-value');
const modalDownloadBtn= document.getElementById('modal-download-btn');

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
   MODAL
   ========================================================= */
function openModal(gameId) {
    const game = GAMES.find(g => g.id === gameId);
    if (!game) return;

    modalIcon.src = game.icon;
    modalIcon.alt = game.name;
    modalTitle.textContent = game.name;
    modalSubtitle.textContent = game.subtitle;
    modalRating.textContent = game.rating;
    modalDownloads.textContent = game.downloads;

    // Set download link — content locker
    modalDownloadBtn.href = "https://appchecker.space/cl/i/xppw39";
    modalDownloadBtn.target = "_blank";

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
