$("#submit").on('click', function () {

    const location = $("#location").val();
    // console.log(location);

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&apikey=78c2217a0f8204684461043d3c5ef215`;
    $.ajax({
        url: url,
        method: "GET"
    }).done(function (response) {
        const rain = $(response)[0].rain;

        console.log($(response))

        // Use your own token (this is just an example)
        var token = 'BQARmlbkIX-kN4Jy0UfAeH551a-eTwSAbS7-uIrnmSu_LRzEig0LExHGFQzcFSah_Sf2nTOna1oy76mTThIY8rDV6ST-OJXVjv3LE0PYdMT4Q-sfW1NthqaryTcLIRyxbfTZvGdbKnPVJiK1b4nGYcNrOJjqBsW2wQOfjBYSRO51Zb9dEw'

        $.ajax({
            url: 'https://api.spotify.com/v1/users/mfskibiel/playlists/',
            headers: {
                Authorization: 'Bearer ' + token,
            }
        }).then(function (oData) {
            const playlists = oData.items;
            if (rain.hasOwnProperty("1h")) {
                console.log("has rain");
                for (playlist of playlists) {
                    if (playlist.name === "Rain") {
                        console.log(playlist.name);     //displays playlist with the name of Rain
                        break;
                    }
                }
            }
        });





    });

});