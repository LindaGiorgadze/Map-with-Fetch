
const ul = document.querySelector('#placeArray');

fetch('http://localhost:3000/places')
    .then(response => response.json())
    .then(data => {
        const obj = data;

        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 7,
            center: { lat: 42.3207845, lng: 43.3713615},
        });
        
        Object.keys(obj).forEach(key => {
            const li = document.createElement('li');
            ul.appendChild(li);
            const span = document.createElement('span');
            span.textContent = key.toUpperCase();
            li.appendChild(span);

            const latitude = obj[key].lat;
            const longitude = obj[key].lng;

            const location = {
                lat: latitude,
                lng: longitude
            };
            
            const marker = new google.maps.Marker({
                position: location,
                map: map,
            });

            // console.log(key);
            // console.log(obj[key])
        });

    })
    .catch (error => alert(error))