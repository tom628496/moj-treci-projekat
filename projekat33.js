const quotes = [
    "Svaki put kada zatvorite prodaju, pomažete svom kupcu da donese odluku koja mu koristi. Brajan Trejsi - Umenost zaključenja prodaje",
    "Sposobnost slušanja je jednako važna kao i sposobnost govora. Dejl Karnegi - Prodaj",
    "Gerila marketing nije o novcu koji trošite; radi se o kreativnosti koju primenjujete. Džej Konrad Levinson - Gerila marketing",
    "Ne dostižete nivo svojih ciljeva. Spuštate se na nivo svojih sistema. Džejms Klir - Atomske navike",
    "Morate da verujete u svoj proizvod pre nego što ga prodate drugima. Grant Kardon - Prodaj ili se predaj",
    "Vaša sposobnost pregovaranja određuje da li možete ili ne možete uticati na svoju okolinu. Herb Koen - O svemu se moze pregovarati",
    "Pobeđuj kroz svoje akcije, nikada kroz raspravu. Robert Grin - 48 zakona moci",
    "Vaš život je vaše delo. Sadguru - Karma",
    "Ne morate biti sjajni da biste počeli, ali morate početi da biste bili sjajni. Zig Ziglar - Prodaja 101"
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

document.getElementById('novi-citat').addEventListener('click', function() {
    const quoteDisplay = document.getElementById('citat');
    quoteDisplay.textContent = getRandomQuote();
});