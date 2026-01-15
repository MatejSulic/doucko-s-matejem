// Konfigurace recenzí
const reviews = [
    { 
        name: "Lucka", 
        age: 17, 
        goal: "Maturita", 
        text: "Matěj mi to vysvětlil líp než učitelka za rok. Doporučuju!", 
        stars: 5, 
        emoji: "👩‍🎓" 
    },
    { 
        name: "Petr", 
        age: 15, 
        goal: "Základka", 
        text: "Super přístup, všechno v klidu a bez stresu.", 
        stars: 5, 
        emoji: "🙋‍♂️" 
    },
    { 
        name: "Jakub", 
        age: 20, 
        goal: "Vysoká škola", 
        text: "Pomohl mi s matikou na ZČU, kterou jsem fakt nedával.", 
        stars: 5, 
        emoji: "👨‍💻" 
    }
];

// Vykreslení recenzí
const container = document.getElementById('testimonial-container');

if (container) {
    reviews.forEach(r => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div style="color: #FFCC00; margin-bottom: 15px;">${"★".repeat(r.stars)}</div>
            <p style="font-style: italic;">"${r.text}"</p>
            <div style="display: flex; align-items: center; margin-top: 25px; border-top: 1px solid #f0f0f0; padding-top: 20px;">
                <div style="width: 45px; height: 45px; background: #f5f5f7; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-size: 20px;">${r.emoji}</div>
                <div style="text-align: left;">
                    <strong style="display: block;">${r.name}, ${r.age} let</strong>
                    <small style="color: #86868b;">${r.goal}</small>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Intersection Observer (pro animace při scrollování)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));