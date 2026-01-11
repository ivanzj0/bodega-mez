const translations = {
    es: {
        nav_home: "Inicio",
        nav_wines: "Nuestros Vinos",
        nav_experience: "Experiencia",
        nav_reviews: "Opiniones",
        nav_contact: "Visítanos",
        hero_title: "Más que un Vino,\nUna Experiencia Familiar",
        hero_subtitle: "Descubre el encanto de Chacras de Coria. Asado, amigos y nuestro exclusivo Gran Corte.",
        hero_btn: "Reservar mi Visita",
        wines_title: "Edición Limitada",
        wines_subtitle: "Vinos con identidad, criados en barrica y cuidados al detalle.",
        desc_gran_corte: "Un ensamble complejo y estructurado.",
        desc_malbec: "La expresión pura de nuestro terruño.",
        gallery_title: "Nuestro Lugar",
        gallery_subtitle: "Naturaleza, buena compañía y sabores auténticos en cada estación.",
        reviews_title: "Ellos ya lo vivieron",
        contact_title: "Te esperamos",
        // TEXTO ACTUALIZADO AQUÍ:
        contact_desc: "Estamos en el corazón de Chacras de Coria. Ven a disfrutar de un día inolvidable y sorpréndete con nuestro exclusivo baño inteligente japonés.",
    },
    en: {
        nav_home: "Home",
        nav_wines: "Our Wines",
        nav_experience: "Experience",
        nav_reviews: "Reviews",
        nav_contact: "Visit Us",
        hero_title: "More Than a Wine,\nA Family Experience",
        hero_subtitle: "Discover the charm of Chacras de Coria. BBQ, friends, and our exclusive Gran Corte.",
        hero_btn: "Book My Visit",
        wines_title: "Limited Edition",
        wines_subtitle: "Wines with identity, barrel-aged and cared for in detail.",
        desc_gran_corte: "A complex and structured blend.",
        desc_malbec: "The pure expression of our terroir.",
        gallery_title: "Our Place",
        gallery_subtitle: "Nature, good company, and authentic flavors in every season.",
        reviews_title: "They Lived It",
        contact_title: "We Are Waiting For You",
        // TEXTO ACTUALIZADO AQUÍ (INGLÉS):
        contact_desc: "We are in the heart of Chacras de Coria. Come enjoy an unforgettable day and be amazed by our exclusive Japanese smart toilet.",
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
            element.innerText = translations[currentLang][key];
        }
    });
}