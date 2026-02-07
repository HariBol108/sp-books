const galleryItems = [
    { src: 'img/BGKC_E1.jpg', alt: 'Beginners Guide To Krsna Conciousness  - English ', price: '40' },
    { src: 'img/BGKC_H1.jpg', alt: 'Beginners Guide To Krsna Conciousness  - Hindi', price: '40' },
    { src: 'img/BGKC_M1.jpg', alt: 'Beginners Guide To Krsna Conciousness  - Marathi ', price: '40' },
    { src: 'img/BBD_E1.jpg', alt: 'Beyond Birth & Death  - English ', price: '40' },
    { src: 'img/BBD_H1.jpg', alt: 'Beyond Birth & Death  - Hindi ', price: '20' },
    { src: 'img/BBD_M1.jpg', alt: 'Beyond Birth & Death  - Marathi ', price: '20' },
    { src: 'img/BG_E1.jpg', alt: 'Bhagavad-gita As It Is  - English ', price: '310' },
    { src: 'img/BG_H1.jpg', alt: 'Bhagavad-gita As It Is  - Hindi ', price: '250' },
    { src: 'img/BG_M1.jpg', alt: 'Bhagavad-gita As It Is  - Marathi', price: '270' },
    { src: 'img/CT_E1.jpg', alt: 'Civilization and Transcendence  - English ', price: '20' },
    { src: 'img/CT_H1.jpg', alt: 'Civilization and Transcendence  - Hindi ', price: '30' },
    { src: 'img/CT_M1.jpg', alt: 'Civilization and Transcendence - Marathi ', price: '20' },
    { src: 'img/CB_E1.jpg', alt: 'Coming Back  - English ', price: '50' },
    { src: 'img/CB_H1.jpg', alt: 'Coming Back  - Hindi ', price: '50' },
    { src: 'img/CB_M1.jpg', alt: 'Coming Back  - Marathi ', price: '40' },
    { src: 'img/Dharma_M1.jpg', alt: 'Dharma  - Marathi ', price: '60' },
    { src: 'img/EJOP_E1.jpg', alt: 'Easy Journey to Other Planets  - English ', price: '30' },
    { src: 'img/EJOP_H1.jpg', alt: 'Easy Journey to Other Planets  - Hindi ', price: '30' },
    { src: 'img/EJOP_M1.jpg', alt: 'Easy Journey to Other Planets - Marathi ', price: '40' },
    { src: 'img/ELC_E1.jpg', alt: 'Elevation to Krishna Consciousness  - English ', price: '30' },
    { src: 'img/ELC_H1.jpg', alt: 'Elevation to Krishna Consciousness  - Hindi ', price: '40' },
    { src: 'img/ELC_M1.jpg', alt: 'Elevation to Krishna Consciousness  - Marathi ', price: '40' },
    { src: 'img/KKC_E1.jpg', alt: 'Hare Krishna Challenge  - English ', price: '40' },
    { src: 'img/KKC_H1.jpg', alt: 'Hare Krishna Challenge  - Hindi ', price: '40' },
    { src: 'img/KKC_M1.jpg', alt: 'Hare Krishna Challenge  - Marathi ', price: '30' },
    { src: 'img/IntroBG_E1.jpg', alt: 'Introduction to Bhagavad Gita  - English ', price: '30' },
    { src: 'img/IntroBG_H1.jpg', alt: 'Introduction to Bhagavad Gita  - Hindi ', price: '30' },
    { src: 'img/IntroBG_M1.jpg', alt: 'Introduction to Bhagavad Gita  - Marathi ', price: '20' },
    { src: 'img/JSD_E1.jpg', alt: 'Journey of Self Discovery  - English ', price: '100' },
    { src: 'img/JSD_H1.jpg', alt: 'Journey of Self Discovery  - Hindi ', price: '100' },
    { src: 'img/KB_E1.jpg', alt: 'Krishna Book  - English ', price: '330' },
    { src: 'img/KB_M1.jpg', alt: 'Krishna Book  - Marathi ', price: '290' },
    { src: 'img/KB_H1.jpg', alt: 'Krishna Book  - Hindi ', price: '290' },
    { src: 'img/KRP_E1.jpg', alt: 'Krishna, The Reservoir of Pleasure  - English ', price: '15' },
    { src: 'img/KRP_H1.jpg', alt: 'Krishna, The Reservoir of Pleasure  - Hindi ', price: '20' },
    { src: 'img/KRP_M1.jpg', alt: 'Krishna, The Reservoir of Pleasure  - Marathi ', price: '20' },
    { src: 'img/LN_M1.jpg', alt: 'Laws of Nature  - Marathi ', price: '40' },
    { src: 'img/LCFL_E1.jpg', alt: 'Life Comes From Life  - English ', price: '60' },
    { src: 'img/LCFL_H1.jpg', alt: 'Life Comes From Life  - Hindi ', price: '60' },
    { src: 'img/LCFL_M1.jpg', alt: 'Life Comes From Life  - Marathi ', price: '70' },
    { src: 'img/LC_M1.jpg', alt: 'Lord Caitanya: His Life And Teachings - Marathi ', price: '50' },
    { src: 'img/MG_E1.jpg', alt: 'Matchless Gift  - English ', price: '30' },
    { src: 'img/MG_H1.jpg', alt: 'Matchless Gift  - Hindi ', price: '40' },
    { src: 'img/MG_M1.jpg', alt: 'Matchless Gift  - Marathi ', price: '40' },
    { src: 'img/MG_E1.jpg', alt: 'Message of Godhead  - English ', price: '30' },
    { src: 'img/MG_H1.jpg', alt: 'Message of Godhead  - Hindi ', price: '30' },
    { src: 'img/MG_M1.jpg', alt: 'Message of Godhead  - Marathi ', price: '40' },
    { src: 'img/NOD_E1.jpg', alt: 'Nectar of Devotion  - English ', price: '240' },
    { src: 'img/NOD_H1.jpg', alt: 'Nectar of Devotion  - Hindi ', price: '230' },
    { src: 'img/NOD_M1.jpg', alt: 'Nectar of Devotion  - Marathi ', price: '160' },
    { src: 'img/NOI_E1.jpg', alt: 'Nectar of Instruction  - English ', price: '40' },
    { src: 'img/NOI_H1.jpg', alt: 'Nectar of Instruction  - Hindi ', price: '40' },
    { src: 'img/NOI_M1.jpg', alt: 'Nectar of Instruction  - Marathi ', price: '30' },
    { src: 'img/OWTK_E1.jpg', alt: 'On the Way To Krishna  - English ', price: '30' },
    { src: 'img/OWTK_H1.jpg', alt: 'On the Way To Krishna  - Hindi ', price: '30' },
    { src: 'img/OWTK_M1.jpg', alt: 'On the Way To Krishna  - Marathi ', price: '30' },
    { src: 'img/POP_E1.jpg', alt: 'Path of Perfection  - English ', price: '60' },
    { src: 'img/PQPA_E1.jpg', alt: 'Perfect Question Perfect Answers  - English ', price: '40' },
    { src: 'img/PQPA_H1.jpg', alt: 'Perfect Question Perfect Answers  - Hindi ', price: '40' },
    { src: 'img/PQPA_M1.jpg', alt: 'Perfect Question Perfect Answers  - Marathi ', price: '40' },
    { src: 'img/POY_E1.jpg', alt: 'Perfection of Yoga  - English ', price: '20' },
    { src: 'img/POY_H1.jpg', alt: 'Perfection of Yoga  - Hindi ', price: '20' },
    { src: 'img/POY_M1.jpg', alt: 'Perfection of Yoga  - Marathi ', price: '20' },
    { src: 'img/PC_E1.jpg', alt: 'Prabhupada Condensed  - English ', price: '190' },
    { src: 'img/PC_H1.jpg', alt: 'Prabhupada Condensed  - Hindi ', price: '180' },
    { src: 'img/PC_M1.jpg', alt: 'Prabhupada Condensed  - Marathi ', price: '260' },
    { src: 'img/RV_E1.jpg', alt: 'Raja Vidya  - English ', price: '40' },
    { src: 'img/RV_H1.jpg', alt: 'Raja Vidya  - Hindi ', price: '40' },
    { src: 'img/RV_M1.jpg', alt: 'Raja Vidya  - Marathi ', price: '40' },
    { src: 'img/SSR_E1.jpg', alt: 'Science of Self Realization  - English ', price: '120' },
    { src: 'img/SSR_H1.jpg', alt: 'Science of Self Realization  - Hindi ', price: '130' },
    { src: 'img/SSR_M1.jpg', alt: 'Science of Self Realization  - Marathi ', price: '110' },
    { src: 'img/SC_E1.jpg', alt: 'Second Chance  - English ', price: '70' },
    { src: 'img/SC_H1.jpg', alt: 'Second Chance  - Hindi ', price: '70' },
    { src: 'img/SC_M1.jpg', alt: 'Second Chance  - Marathi ', price: '90' },
    { src: 'img/ISO_E1.jpg', alt: 'Sri Isopanishad  - English ', price: '40' },
    { src: 'img/ISO_H1.jpg', alt: 'Sri Isopanishad  - Hindi ', price: '40' },
    { src: 'img/ISO_M1.jpg', alt: 'Sri Isopanishad  - Marathi ', price: '40' },
    { src: 'img/SB1_E1.jpg', alt: 'Srimad Bhagavatam Canto 1  - English ', price: '680' },
    { src: 'img/SB1_H1.jpg', alt: 'Srimad Bhagavatam Canto 1  - Hindi ', price: '590' },
    { src: 'img/SB1_M1.jpg', alt: 'Srimad Bhagavatam Canto 1  - Marathi ', price: '570' },
    { src: 'img/SK_H1.jpg', alt: 'Sword of Knowledge  - Hindi ', price: '90' },
    { src: 'img/TLC_E1.jpg', alt: 'Teachings of Lord Chaitanya  - English ', price: '120' },
    { src: 'img/TLC_H1.jpg', alt: 'Teachings of Lord Chaitanya  - Hindi ', price: '130' },
    { src: 'img/TLC_M1.jpg', alt: 'Teachings of Lord Chaitanya  - Marathi ', price: '90' },
    { src: 'img/TLK_E1.jpg', alt: 'Teachings of Lord Kapila  - English ', price: '100' },
    { src: 'img/TLK_H1.jpg', alt: 'Teachings of Lord Kapila  - Hindi ', price: '90' },
    { src: 'img/TQK_E1.jpg', alt: 'Teachings of Queen Kunti  - English ', price: '80' },
    { src: 'img/TQK_H1.jpg', alt: 'Teachings of Queen Kunti  - Hindi ', price: '90' },
    { src: 'img/TQK_M1.jpg', alt: 'Teachings of Queen Kunti  - Marathi ', price: '60' },
    { src: 'img/TYS_E1.jpg', alt: 'Topmost Yoga System  - English ', price: '30' },
    { src: 'img/TYS_H1.jpg', alt: 'Topmost Yoga System  - Hindi ', price: '40' },
    { src: 'img/TYS_M1.jpg', alt: 'Topmost Yoga System  - Marathi ', price: '30' },
    { src: 'img/TPM_E1.jpg', alt: 'Transcendental Teachings of Prahlada Maharaj  - English ', price: '20' },
    { src: 'img/TPM_H1.jpg', alt: 'Transcendental Teachings of Prahlada Maharaj  - Hindi ', price: '20' },
    { src: 'img/TPM_M1.jpg', alt: 'Transcendental Teachings of Prahlada Maharaj  - Marathi ', price: '30' }
];

const galleryContainer = document.querySelector('.gallery');
const filterInput = document.getElementById('filterInput');

// Sort galleryItems by alt field
galleryItems.sort((a, b) => a.alt.localeCompare(b.alt));

function renderGallery(items) {
    galleryContainer.innerHTML = '';
    items.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.innerHTML = `
<img src="${item.src}" alt="${item.alt}">
<div class="alt-text">${item.alt}</div>
<div class="price">₹${item.price}</div>
`;
        galleryContainer.appendChild(galleryItem);
    });
}

// Initial render
renderGallery(galleryItems);

// Add filter event listener
filterInput.addEventListener('keyup', (e) => {
    const filterText = e.target.value.toLowerCase();
    const filtered = galleryItems.filter(item => 
        item.alt.toLowerCase().includes(filterText)
    );
    renderGallery(filtered);
});
