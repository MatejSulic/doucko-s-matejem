// Konfigurace recenzí
const reviews = [
    { 
        name: "Tereza Š.", 
        age: 20, 
        goal: "Maturitní zkouška z informatiky", 
        text: "Doučování bylo pro mě velkým přínosem (odmaturovala jsem díky tomu). Matěj byl profesionální, ale zároveň to bylo ve velmi příjemné a přátelské atmosféře. Nic mě neučil na sílu a podle napsaných textů z googlu, ale vše mi vysvětlil jednoduše, s různými příklady, tak, abych to pochopila. Je velmi trpělivý, milý a přátelský. Doučování můžu jen doporučit, ať už se jedná o jednoduché zvládání základů nebo složitějších zadání. ", 
        stars: 5, 
        emoji: "👩‍🎓" 
    },
    { 
        name: "Antonín Š.", 
        age: 14, 
        goal: "9. třída ZŠ, přijímačky", 
        text: "Na tomto doučování se mi nejvíc líbí, že lektor nespěchá. I když se u jedné úlohy zaseknu třeba na 15 minut, snaží se mi ji trpělivě vysvětlit nejrůznějšími způsoby, dokud ji opravdu nepochopím. Zkrátka si myslím, že je tohle doučování výborné.", 
        stars: 5, 
        emoji: "🙋‍♂️" 
    },
    { 
        name: "Denis V.", 
        age: 18, 
        goal: "3. ročník SŠ přijímačky", 
        text: "Za mě skvělý přístup a výborné znalosti. Matěj dokáže doučování pojmout tak, abych se rychle naučil co největší objem učiva, což se mu zatím daří na jedničku. Spoustu vzorců a výpočtů dokáže vysvětlit do detailu tak, aby mi bylo vše zcela jasné.", 
        stars: 5, 
        emoji: "👨‍🦱" 
    },
    { 
        name: "Vojtěch G.", 
        age: 19, 
        goal: "4. ročník SŠ, průběžné doučování", 
        text: "Doučování je úplně v pohodě. Látku velmi rychle pochopím a jen tak ji nezapomenu. Matěj je navíc sympatický a dá se s ním i dobře pokecat.", 
        stars: 5, 
        emoji: "🙋🏻" 
    },
    {
        name: "Ondra D.",
        age: 17,
        goal: "Sexta Gymnázium, průběžné doučování",
        text: "S doučováním jsem nadmíru spokojený. Oceňuji zejména srozumitelný způsob vysvětlování – kdykoliv narazím na nejasnosti, vždy mi je trpělivě vysvětlen přesný postup řešení. Velkým plusem je pro mě flexibilita; oceňuji možnost přizpůsobit náplň hodiny aktuálním potřebám, ať už jde o hloubkové pochopení látky, nebo rychlou přípravu na test. Komunikace a plánování termínů navíc funguje bezproblémově. Doporučuji!",
        stars: 5,
        emoji: "👨‍🎓"
    }
];

// Vykreslení recenzí
const container = document.getElementById('testimonial-container');

if (container) {
    container.innerHTML = ""; 
    
    // Zdvojnásobíme pole recenzí pro nekonečný efekt
    const infiniteReviews = [...reviews, ...reviews];

    infiniteReviews.forEach(r => {
        const card = document.createElement('div');
        card.className = 'card'; // Tady už nedávej reveal, animaci řeší slider
        card.innerHTML = `
            <div style="color: #FFCC00; margin-bottom: 15px;">${"★".repeat(r.stars)}</div>
            <p style="font-style: italic; line-height: 1.6;">"${r.text}"</p>
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