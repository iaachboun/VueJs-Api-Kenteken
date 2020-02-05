<template>

    <div id="app">
        <h1>Kenteken Checker</h1>
        <input title="kentekenInputField" type="text" v-model="kenteken" class="inputField"
               style="text-transform: uppercase"
               v-on:keyup="validateEnterkey">
        <button @click=" getKenteken(); " class="inputButton">Send</button>
        <p v-if="geenKenteken" class="errorMelding">Voer een kenteken in</p>
        <autoInfoLijst v-if="isOpen" v-bind:kentekenImage="kentekenImage" v-bind:kentekenInfo="kentekenInfo"
                       v-bind:brandstofInfo="brandstofInfo" v-bind:laadpalen="laadpalen"></autoInfoLijst>
        <hr v-if="isOpen">
        <router-link to="/" v-if="isOpen" class="hoverBorder">Show less |</router-link>
        <router-link to="autoInfoExtra" v-if="isOpen"> Show more</router-link>
        <hr v-if="isOpen">
        <router-view v-if="isOpen" v-bind:kentekenInfo="kentekenInfo"></router-view>

    </div>
</template>

<script>
    import autoInfoLijst from "./components/autoInfo"
    import axios from "axios"

    export default {
        components: {
            'autoInfoLijst': autoInfoLijst,
        },

        data() {
            return {
                isOpen: false,
                isClosed: false,
                kentekenInfo: [],
                kenteken: "61RGX2",
                laadpalen: [],
                brandstofInfo: [],
                kentekenImage: [],
                geenKenteken: false,
                result: [],
                infowindow: ""
            }
        },

        methods: {
            //voor wanneer er geen kenteken ingevuld is
            kentekenError() {
                if (this.kenteken.trim() === "") {
                    this.geenKenteken = true;
                } else {
                    this.geenKenteken = false;
                }
            },

            //Op enter drukken is hetzelfde als op submit klikken
            validateEnterkey: function (enterKey) {
                if (enterKey.keyCode === 13) {
                    this.getKenteken();
                    this.getBrandstof();
                    this.kentekenError();
                }
            },

            //Haalt alle data van de auto op
            getKenteken() {
                this.kentekenError();

                axios.get('https://opendata.rdw.nl/resource/m9d7-ebf2.json?', {
                    params: {
                        kenteken: this.kenteken.trim()
                    }
                })
                    .then(response => {
                        this.kentekenInfo = response.data[0];
                        this.getKentekenImage();
                        this.kentekenError();
                        this.getBrandstof();
                        this.getLaadpaal();

                        this.isOpen = true;
                    });
            },

            //Haalt op welke type brandstof de auto gebruikt
            getBrandstof() {
                axios.get('https://opendata.rdw.nl/resource/8ys7-d773.json?', {
                    params: {
                        kenteken: this.kenteken.trim()
                    }
                })
                    .then(response => {
                        this.brandstofInfo = response.data[0];
                    })
            },

            //Haalt alle data op maar er wordt alleen longitude en latitude gebruikt
            getLaadpaal() {
                axios.get('http://lumen.test/api/laadpaal')
                    .then(response => {
                        var arrayLength = response.data.data.length;
                        for (var i = 0; i < arrayLength; i++) {
                            this.laadpalen.push(response.data.data[i]);
                        }
                        this.initMap();
                    })
            },

            //Maakt de map met markers
            initMap() {
                var map = new google.maps.Map(
                    document.getElementById('map'), {zoom: 14, center: {lat: 52.0855299, lng: 5.034255898}});
                this.laadpalen.forEach((value, index) => {
                    var marker = new google.maps.Marker({
                        position: {lat: parseFloat(value.latitude), lng: parseFloat(value.longitude)},
                        map: map,
                        title: 'click for more details',
                    });
                    var infoWindow = new google.maps.InfoWindow({
                        content: value.straat + " " + value.huisnummer + " " + value.gemeente
                    });
                    google.maps.event.addListener(marker, 'click', function () {
                        infoWindow.open(map, marker);
                    })
                });

            },

            //haalt een plaatje van de auto op , de kleur kan afwijken.
            getKentekenImage() {
                //let bouwjaar = this.kentekenInfo.datum_eerste_toelating.split('/')[2]; gebruikt alleen Jaar
                let handelsbenaming = this.kentekenInfo.handelsbenaming;
                let merk = this.kentekenInfo.merk + " " + handelsbenaming;
                axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyDzF-CHCM1ap6fWWnT_mU5eE4VcO1KsiPI&cx=018349847168844119981:oci5fzxhw-q&q=${merk}`)

                    .then(response => {
                        response.data.items.forEach((data) => {
                            if (data.pagemap) {
                                if (data.pagemap.cse_thumbnail) {
                                    this.kentekenImage = data.pagemap.cse_thumbnail[0].src
                                }
                            }
                        })
                    });
            },


        },

    }


</script>

<style>
    #map {
        margin: 0 auto 20px auto;
        height: 50%;
        width: 50%;
    }

    html {
        height: 100%;
    }

    body {
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
    }

    hr {
        border-style: none;
        border: 1.2px solid white;
    }

    .errorMelding {
        color: red;
        margin: 19px 0 -5px 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: white;
        margin: 90px auto 30px auto;
        border-radius: 10px;
        background: #FFC312;
        width: fit-content;
        padding: 10px 20px 25px 20px;
        transition: all 0.25s ease;
        min-height: 120px;
        box-shadow: 5px 5px 10px gray;

    }

    .inputButton {
        padding: 10px;
        font-size: 110%;
        border-style: none;
        color: #FFC312;
        background: white;
        font-weight: bold;
        border-left: 1px solid #FFC312;
    }

    .inputField {
        padding: 10px;
        font-size: 110%;
        border: none;
        color: black;
    }

    a {
        text-decoration: none;
        color: white;
    }

</style>
