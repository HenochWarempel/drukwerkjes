const storyContainer = document.querySelector('.story');
const buttons = document.querySelectorAll('button');

const stories1Minute = [
    {
        title: "De krekel en de mier",
        author: "Jean de La Fontaine",
        source: "https://www.beleven.org/verhaal/de_krekel_en_de_mier",
        content: `
    De krekel sjirpte dag en nacht, zo lang het zomer was,<br>
    Wijl buurvrouw mier bedrijvig op en neer kroop door 't gras<br>
    'Ik vrolijk je wat op,' zei hij. 'Kom, luister naar mijn lied.'<br>
    Zij schudde nijdig met haar kop: 'Een mier die luiert niet!'<br><br>
    Toen na een tijd de vrieswind kwam, hield onze krekel op.<br>
    Geen larfje of geen sprietje meer: droef schudde hij zijn kop.<br>
    Doorkoud en hongerig kroop hij naar 't warme mierennest.<br>
    'Ach, juffrouw mier, geef alsjeblieft wat eten voor de rest<br><br>
    Van deze barre winter. Ik betaal met rente terug,<br>
    Nog vóór augustus, krekelwoord en zweren doe 'k niet vlug!'<br>
    'Je weet dat ik aan niemand leen,'<br>
    Zei buurvrouw mier toen heel gemeen.<br><br>
    'Wat deed je toen de zon nog straalde<br>
    En ik mijn voorraad binnenhaalde?'<br>
    'Ik zong voor jou,' zei zacht de krekel.<br>
    'Daaraan heb ik als mier een hekel!'<br>
    Toen zong je en nu ben je arm.<br>
    Dus dans nu maar, dan krijg je 't warm!'<br><br>
    Wie leeft van kunst gaat door voor gek.<br>
    Vaak lijdt hij honger en gebrek.
        `
    },

    {
        title: "Grand Prix",
        author: "Driek van Wissen",
        source: "https://www.dbnl.org/tekst/_twe007198101_01/_twe007198101_01_0091.php",
        content: `
Als wij rechtstreeks met Zandvoort zijn verbonden,<br>dan is, als men ons op de man af vraagt,<br>de autorace pas dan finaal geslaagd,<br>wanneer er doden vallen en gewonden.<br><br>Wij kijken uit naar de fatale ronde,<br>als een coureur zich iets te driest gedraagt<br>en roekeloos zijn jonge leven waagt<br>in ruil voor winst van luttele seconden.<br><br>Dan wordt met gretig oog het beeld verslonden<br>hoe onze held zichzelf de dood injaagt<br>en uit het smeulend wrak wordt uitgezaagd,<br>waar hij zijn Waterloo in heeft gevonden.<br><br>Geen schouwspel immers dat ons meer behaagt<br>dan als het doodgaan live wordt uitgezonden.
        `
    },

    {
        title: "Letterlijk",
        author: "Daan Zonderland",
        source: "http://hetmooistegedicht.blogspot.com/search/label/Daan%20Zonderland%20-%20Letterlijk",
        content: `
Geachte Heer, ik moet u danken<br>voor het postpakket dat ik ontving.<br>Maar u vergeeft mij ongetwijfeld<br>een zekere teleurstelling.<br><br>Toen ik de hand vroeg van uw dochter<br>die ik hartstochtelijk bemin,<br>deed ik zulks niet in letterlijke,<br>doch overdrachtelijke zin.<br><br>
        `
    },

        {
        title: "Anti-Fries",
        author: "Driek van Wissen",
        source: "https://www.dbnl.org/tekst/_twe007198101_01/_twe007198101_01_0091.php",
        content: `
Als Holland winters is getooid<br>en wij van kou welhaast verrekken,<br>blijkt Friesland dichtbevolkt met gekken,<br>die 's winters gekker zijn dan ooit.<br><br>De maffe koppen, strak gelooid, <br>ontspannen plots in losser trekken,<br>terwijl zich rond de stuurse bekken<br>een soortement van glimlach plooit.<br> <br>In onverstaanbare gesprekken<br>worden dan praatjes rondgestrooid,<br>die ijdele verwachting wekken,<br><br>totdat de goden, als het dooit,<br>de hoop der dwaze halzen nekken.<br>Nee, de elfstedentocht komt nooit!
        `
    },
    
        // Voeg meer verhalen toe op dezelfde manier
];

const stories2Minutes = [

    {
        title: "Koekjes",
        author: "Mark Verhees",
        source: "https://www.voorpositiviteit.nl/koekjes/",
        content: `
Een vrouw stond te wachten op het vliegveld.<br>Ze kocht een boek en een zak met koekjes.<br>En ze vond een plek om rustig te gaan zitten.<br><br>Ze begon met lezen en het boek greep haar aandacht.<br>Naast haar kwam een stevige man zitten.<br>De man pakte een koekje uit de zak, die tussen hen in lag.<br>De vrouw probeerde dit te negeren om een scène te vermijden.<br><br>Dus nam ze zelf ook nog menig koekje.<br>En de man naast haar, de koekjesdief, bleef ook lekker door eten.<br>De vrouw raakte geïrriteerd.<br>Ze dacht: ‘het is dat ik zo’n aardig persoon ben, anders zou ik hem eens goed de les leren…’<br><br>Met elk koekje dat ze at, nam de man ook een koekje.<br>Toen er uiteindelijk nog één koekje over was, pakte de man het koekje en brak het in twee stukjes.<br>Hij bood haar de ene helft en at zelf de andere helft op.<br>De vrouw werd nijdig.<br>‘Ahh, wat is hij onbeleefd, ongelofelijk.<br>Hij toont niet eens een klein teken van dankbaarheid…’<br><br>De vrouw zuchtte uiteindelijk van opluchting toen haar vlucht werd omgeroepen.<br>Ze stond zonder blikken of blozen op en liep snel weg.<br><br>Eenmaal in het vliegtuig ging de vrouw zitten in haar stoel.<br>Ze pakte haar boek en wat vond ze in haar tas… haar eigen zak met koekjes.<br>Vol verdriet realiseerde ze zich: ‘Ohh, het was te laat voor excuses.<br>Ze was zelf de dief geweest.<br>En nog wel een hele ondankbare ook…’
        `
    },
    {
        title: "Onbekende titel",
        author: "Onbekend",
        source: "https://warempel.media",
        content: `
Hier komt nog een verhaal.<br>Ooit.<br>Of niet.
        `
    },
    
    // Voeg meer verhalen toe op dezelfde manier
];


const stories3Minutes = [
    {
        title: "Verhaal van 3 minuten",
        author: "Henoch",
        source: "https://www.warempel.media",
        content: `
    Hallo<br>
    Leuk verhaal<br>
    Lekker kort ook.
        `
    },
    {
        title: "Onbekende titel",
        author: "Onbekend",
        source: "https://warempel.media",
        content: `
Hier komt nog een verhaal.<br>Ooit.<br>Of niet.
        `
    },    // Voeg meer verhalen toe op dezelfde manier
];

const stories4Minutes = [
    {
        title: "Verhaal van 4 minuten",
        author: "Henoch",
        source: "https://www.warempel.media",
        content: `
    Hallo<br>
    Leuk verhaal<br>
    Maar dit verhaal duurt écht geen 4 minuten!<br>
    Ik wil mijn geld terug.
        `
    },
    {
        title: "Onbekende titel",
        author: "Onbekend",
        source: "https://warempel.media",
        content: `
Hier komt nog een verhaal.<br>Ooit.<br>Of niet.
        `
    },
    // Voeg meer verhalen toe op dezelfde manier
];



buttons.forEach(button => {
    button.addEventListener('click', () => {
        const time = parseInt(button.getAttribute('data-time'));
        let selectedStory;

switch (time) {
    case 1:
        selectedStory = stories1Minute[Math.floor(Math.random() * stories1Minute.length)];
        break;
    case 2:
        selectedStory = stories2Minutes[Math.floor(Math.random() * stories2Minutes.length)];
        break;
    case 3:
        selectedStory = stories3Minutes[Math.floor(Math.random() * stories3Minutes.length)];
        break;
    case 4:
        selectedStory = stories4Minutes[Math.floor(Math.random() * stories4Minutes.length)];
        break;
    default:
        selectedStory = { title: "Geen verhaal gevonden", content: "Geen verhaal beschikbaar." };
}

const storyHTML = `
    <h2>${selectedStory.title}</h2>
    <p class="story">${selectedStory.content}</p>
    <div class="author-source">
        <p class="author">Auteur: ${selectedStory.author}</p>
        <p class="source"><a href="${selectedStory.source}" target="_blank">Bron</a></p>
    </div>
`;

        storyContainer.innerHTML = storyHTML;

        setTimeout(() => {
            storyContainer.innerHTML = '';
        }, time * 60 * 1000); // Convert minutes to milliseconds
    });
});

// Voeg dit toe aan het einde van je bestaande script.js

// Deelknoppen
const facebookShareButton = document.getElementById('facebook-share');
const twitterShareButton = document.getElementById('twitter-share');

const customShareText = "Ik heb zojuist een kort verhaal gelezen om de tijd te doden terwijl ik afscheid nam van een 💩 - Lees ook drukwerk via ";

facebookShareButton.addEventListener('click', () => {
    const url = encodeURIComponent(window.location.href);
    const shareText = encodeURIComponent(customShareText);

    const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${shareText}`;
    window.location.href = facebookShareURL;
});

twitterShareButton.addEventListener('click', () => {
    const url = encodeURIComponent(window.location.href);
    const shareText = encodeURIComponent(customShareText);

    const twitterShareURL = `https://twitter.com/intent/tweet?url=${url}&text=${shareText}`;
    window.open(twitterShareURL);
});
