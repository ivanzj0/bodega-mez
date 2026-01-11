const translations = {
    es: {
        nav_home: "Inicio",
        nav_experience: "Experiencia",
        nav_reviews: "Opiniones",
        nav_contact: "Visítanos",
        hero_title: "Más que un Vino,\nUna Experiencia Familiar",
        hero_subtitle: "Descubre el encanto de Chacras de Coria. Asado, amigos y nuestro exclusivo Gran Corte.",
        hero_btn: "Reservar mi Visita",
        gallery_title: "Momentos Únicos",
        gallery_subtitle: "Naturaleza, buena compañía y sabores auténticos.",
        reviews_title: "Ellos ya lo vivieron",
        contact_title: "Te esperamos",
        contact_desc: "Estamos en el corazón de Chacras de Coria. Ven a conocer nuestra cava subterránea y disfruta de un día inolvidable.",
    },
    en: {
        nav_home: "Home",
        nav_experience: "Experience",
        nav_reviews: "Reviews",
        nav_contact: "Visit Us",
        hero_title: "More Than a Wine,\nA Family Experience",
        hero_subtitle: "Discover the charm of Chacras de Coria. BBQ, friends, and our exclusive Gran Corte.",
        hero_btn: "Book My Visit",
        gallery_title: "Unique Moments",
        gallery_subtitle: "Nature, good company, and authentic flavors.",
        reviews_title: "They Lived It",
        contact_title: "We Are Waiting For You",
        contact_desc: "We are in the heart of Chacras de Coria. Come visit our underground cellar and enjoy an unforgettable day.",
    }
};

const langBtn = document.getElementById('lang-toggle');
let currentLang = 'es';

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    langBtn.textContent = currentLang === 'es' ? '🇺🇸 EN' : '🇪🇸 ES';
    updateText();
});

function updateText() {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLang][key]) {
            // Preservar saltos de línea si existen
            element.innerText = translations[currentLang][key];
        }
    });
}