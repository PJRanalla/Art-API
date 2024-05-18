var cards = document.querySelectorAll('.gallery__card');
cards.forEach(function(card) {
    card.addEventListener('click', function() {
        card.classList.toggle('is-flipped');
    });
});

async function clickedEvent(img_index, infoId) {
    // Get the artwork id
    let artwork = document.getElementsByTagName('img')[img_index].attributes[2].value;

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json'],
        ['AIC-User-Agent', 'aic-bash (patrickranalla@gmail.com']
    ]);

    // Request artwork info from API
    let request = new Request(`https://api.artic.edu/api/v1/artworks/${artwork}?fields=artist_display,title,place_of_origin,date_display,medium_display`, {
        method: 'GET',
        headers: headers
    });

    let result = await fetch(request);
    let response = await result.json();

    // Save data to variables
    const image = response.data;
    let artist = image.artist_display;
    let title = image.title;
    let origin = image.place_of_origin;
    let date = image.date_display;
    let medium = image.medium_display;

    function showInfo(infoId, artist, title, origin, date, medium) {
      let info = document.getElementById(infoId);
      document.getElementById(infoId + '-artist').innerHTML = artist;
      document.getElementById(infoId + '-title').innerHTML = title;
      document.getElementById(infoId + '-place').innerHTML = origin;
      document.getElementById(infoId + '-date').innerHTML = date;
      document.getElementById(infoId + '-medium').innerHTML = medium;
      info.classList.toggle('is-flipped');
    }
    showInfo(infoId, artist, title, origin, date, medium);
}

function getArt(id, event) {
    switch (id) {
        case 'fig1': {
            event.stopPropagation();
            clickedEvent(0, 'info1');
            break;
        }
        case 'fig2': {
            event.stopPropagation();
            clickedEvent(1, 'info2');
            break;
        }
        case 'fig3': {
            event.stopPropagation();
            clickedEvent(2, 'info3');
            break;
        }
        case 'fig4': {
            event.stopPropagation();
            clickedEvent(3, 'info4');
            break;
        }
        case 'fig5': {
            event.stopPropagation();
            clickedEvent(4, 'info5');
            break;
        }
        case 'fig6': {
            event.stopPropagation();
            clickedEvent(5, 'info6');
            break;
        }
        case 'fig7': {
            event.stopPropagation();
            clickedEvent(6, 'info7');
            break;
        }
        case 'fig8': {
            event.stopPropagation();
            clickedEvent(7, 'info8');
            break;
        }
        case 'fig9': {
            event.stopPropagation();
            clickedEvent(8, 'info9');
            break;
        }
    }
}
