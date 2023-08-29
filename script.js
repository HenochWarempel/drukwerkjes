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
        title: "De hond en het bot",
        author: "Jean de La Fontaine",
        source: "https://www.beleven.org/verhaal/de_hond_en_het_bot",
        content: `
Een magere, sterke hond, die niet erg goed bekend stond,<br>
kwam eens op een dag langs een slagerswinkel.<br>
Daar zag hij een hoop smakelijke botten op de toonbank liggen.<br>
Hij pakte er een en rende weg.<br><br>
Later, onderweg, passeerde hij een rivier.<br>
Halfweg de brug zag hij toevallig zijn spiegelbeeld in het water beneden zich.<br>
Omdat hij dacht, dat het een andere hond was,<br>
die een even smakelijk kluifje in zijn bek had, besloot hij handelend op te treden.<br><br>
Hij gromde en hapte naar de hond in het water.<br>
Hij deed zijn kaken van elkaar om zijn scherpe tanden te laten zien<br>
en zo zijn vijand bang te maken.<br>
Natuurlijk viel het bot toen prompt uit zijn bek en plonsde het in het water.<br>
Het bot zonk naar de bodem buiten zijn bereik en het was voor altijd weg.<br><br>
<em>Wees tevreden met wat je hebt.</em>        `
    },
    // Voeg meer verhalen toe op dezelfde manier
];

const stories2Minutes = [
    {
        title: "Verhaal van 2 minuten",
        author: "Henoch",
        source: "https://www.warempel.media",
        content: `
Een os stond in de wei te dromen bij een beek<br>En zag hoe daar vlakbij een kikker hem bekeek.<br>Hij was zichtbaar jaloers, niet groter dan een ei,<br>Maar kwaakte kwaad:<br>"Kijk, kijk! 'k Word net zo groot als jij!"<br>De os sloeg met zijn staart en stond zich te verbazen.<br>De kikker rekte zich, begon zich op te blazen.<br>Hij blies en blies, hield zich even in<br>En vroeg: "Is dit geen goed begin?<br>Ben ik op weinig tijd niet reuze aangekomen?"<br>De os zei: "Boe!" En bleef maar voor zich uit staan dromen.<br><br>De kikker wond zich op, begon met nieuwe moed<br>Hij voelde alles spannen. "Is het nu nog niet goed?"<br>"Boe!" deed de os bedroefd. "Het lijkt er echt niet op.<br>Niet groter dan een pad, maar met een dikke kop!"<br>Nu werd de kikker woest, hij duwde, blies en balde<br>Zijn spieren plots zo hard dat hij aan flarden knalde<br><br>De wereld barst van waan en nijd<br>Om wie de snelste auto rijdt<br>Het grootste huis. De verste reis.<br>Ach, is dat allemaal wel wijs?
        `
    },
{ title: "De zoete pap", author: "De gebroeders Grimm", source: "https://www.beleven.org/verhaal/de_zoete_pap", content: ` Er was eens een arm vroom meisje dat alleen met haar moeder leefde en ze hadden niets meer te eten. Toen ging het kind naar het bos en daar zag ze een oude vrouw die al wist wat het meisje nodig had en ze gaf haar een pannetje en als ze daar tegen zei:<br>"Potje, kook!"<br>dan kookte het heerlijke zoete gerstepap, en als ze zei:<br>"Potje, stop!"<br>dan hield het weer op met koken.<br><br>Het meisje bracht het pannetje naar haar moeder en nu was de armoede en de honger voorbij en ze aten zoete pap zo vaak ze wilden.<br><br>Toen op een keer het meisje was uitgegaan, zei de moeder:<br>"Potje, kook!"<br>en het kookte en ze at tot ze genoeg had, maar nu wilde ze dat het pannetje weer ophield, maar ze wist het woord niet meer. Dus kookte het door, en de pap kwam over de rand en het kookte steeds maar door. De keuken vol pap en het hele huis vol pap, en het huis ernaast vol pap en de straat vol pap, alsof het de hele wereld wilde verzadigen. En er heerste de grootste nood en niemand wist raad. Eindelijk, toen er nog maar een enkel huis over was, kwam het meisje thuis en zei:<br>"Potje, stop!"<br>en toen hield het op met koken en wie naderhand weer de stad in wilde, moest zich door de pap heen eten. ` },

    {
        title: "Het mannetje in de maan",
        author: "Onbekend",
        source: "https://www.beleven.org/verhaal/het_mannetje_in_de_maan",
        content: `
Lang geleden ging een man op een zondagmorgen naar het bos om hout te hakken. Van het gehakte hout maakte hij een grote takkenbos, wierp die op zijn schouders en keerde huiswaarts.<br><br>Onderweg ontmoette hij een kluizenaar, die met toverkracht was begaafd. Deze bleef voor de houthakker staan en sprak tot hem: "Wel man, hoe durf je om op zondag te werken! Weet je dan niet, dat er geschreven staat: zes dagen zul je werken, maar op de zevende dag zul je rusten?"<br><br>"Och kom," zei de houthakker vloekend, "wat kan het mij schelen, of het zondag of maandag is! Als ik op zondag werken wil, dan doe ik het." En met een vloek in plaats van een groet wilde hij zich verwijderen.<br><br>Maar de kluizenaar sprak: "Dan zal je voor straf en als waarschuwing voor anderen voor eeuwig met uw takkenbos op de rug in de maan zitten."<br><br>Hij raakte hem even met zijn toverstaf aan en daar vloog de houthakker naar de maan. Op heldere avonden kunt je hem daar nog altijd met zijn takkenbos zien zitten.
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
    'Ik vrolijk je wat op,' zei hij. 'Kom, luister naar mijn lied.'<br>
        `
    },
    {
        title: "Titel van Verhaal 2",
        author: "Auteur Naam 2",
        source: "Bron link 2",
        content: `
            Er was eens een prachtige zonnige dag.<br>
            Dit verhaal heeft veel te bieden.<br>Hopelijk geniet je ervan.
        `
    },
    // Voeg meer verhalen toe op dezelfde manier
];

const stories4Minutes = [
    {
        title: "Verhaal van 4 minuten",
        author: "Henoch",
        source: "https://www.warempel.media",
        content: `
    Hallo<br>
    Leuk verhaal<br>
    'Ik vrolijk je wat op,' zei hij. 'Kom, luister naar mijn lied.'<br>
        `
    },
    {
        title: "Titel van Verhaal 2",
        author: "Auteur Naam 2",
        source: "Bron link 2",
        content: `
            Er was eens een prachtige zonnige dag.<br>
            Dit verhaal heeft veel te bieden.<br>Hopelijk geniet je ervan.
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

const customShareText = "Ik heb zojuist een kort verhaal gelezen om de tijd te doden terwijl ik afscheid nam van een 💩 - Lees ook drukwerk via drukwerkjes.nl #drukwerkjes #poep #wc";

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
