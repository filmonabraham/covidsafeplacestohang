let myMap;
let popup;
let canvas;
let z = 11.5;
const mappa = new Mappa('Leaflet');
let placement = {
  lat: 40.74335535,
  lng: -73.93489838,
  zoom: z,

  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function setup() {
  canvas = createCanvas(640, 640);
  myMap = mappa.tileMap(placement);
  myMap.overlay(canvas)


  // Only redraw the point when the map changes and not every frame.
  //myMap.onChange(drawPoint);

}

function draw() {

  clear();

  // text at the top: "covid safe places to hang out"  
  textSize(50);
  fill('black');
  stroke('pink');

  text('covid safe places to hang', 50, 50);
  text('out with friends', 50, 100);


  // LOCATIONS //

  // 285 PULASKI

  pulaski = new Places(40.6935606, -73.9398477);
  pulaski.point(myMap.latLngToPixel(40.6935606, -73.9398477));
  pulaski.clicked(myMap.latLngToPixel(40.6935606, -73.9398477));

  // Erzulie Cafe

  erzulie = new Places(40.69784575, -73.93720562);
  erzulie.point(myMap.latLngToPixel(40.69784575, -73.93720562));
  erzulie.clicked(myMap.latLngToPixel(40.69784575, -73.93720562));

  // central park

  central = new Places(40.78086639, -73.96674156);
  central.point(myMap.latLngToPixel(40.78086639, -73.96674156));
  central.clicked(myMap.latLngToPixel(40.78086639, -73.96674156));


  // omonia cafe

  omonia = new Places(40.7611903, -73.9240141);
  omonia.point(myMap.latLngToPixel(40.7611903, -73.9240141));
  omonia.clicked(myMap.latLngToPixel(40.7611903, -73.9240141));

  // met

  met = new Places(40.7794396, -73.96338248);
  met.point(myMap.latLngToPixel(40.7794396, -73.96338248));
  met.clicked(myMap.latLngToPixel(40.7794396, -73.96338248));

  // mandarin hotel

  mandarin = new Places(40.7680943, -73.9818907);
  mandarin.point(myMap.latLngToPixel(40.7680943, -73.9818907));
  mandarin.clicked(myMap.latLngToPixel(40.7680943, -73.9818907));

  // brooklyn bridge

  bridge = new Places(40.70569125, -73.99635787);
  bridge.point(myMap.latLngToPixel(40.70569125, -73.99635787));
  bridge.clicked(myMap.latLngToPixel(40.70569125, -73.99635787));

  // herbert von king park

  herbert = new Places(40.68983375, -73.94665233);
  herbert.point(myMap.latLngToPixel(40.68983375, -73.94665233));
  herbert.clicked(myMap.latLngToPixel(40.68983375, -73.94665233));




  mouseClicked();


}

function mouseClicked() {

  // DESCRIPTIONS //


  // 285 PULASKI

  if (pulaski.clicked(myMap.latLngToPixel(40.6935606, -73.9398477)) < 10 && pulaski.lat == 40.6935606) {

    popup = ("285 PULAKSI. my old apartment rooftop. there's a code to get into the building and then we can go to the top floor where there is a beautiful view of both brooklyn and manhatten");
    //console.log("hi");

    textSize(20);
    fill("black")
    stroke("white");
    text(popup, 50, 500, 500, 600);
  }

  // Erzulie Cafe


  if (erzulie.clicked(myMap.latLngToPixel(40.69784575, -73.93720562)) < 10 && erzulie.lat == 40.69784575) {


    popup = ("CAFE ERZULIE. 894 Broadway, Brooklyn, NY 11206. Haitan style cafe with outdoor seating.")

    textSize(20);
    fill("black")
    stroke("white")
    text(popup, 50, 500, 500, 600);

  }

  // central park


  if (central.clicked(myMap.latLngToPixel(40.78086639, -73.96674156)) < 10 && central.lat == 40.78086639) {


    popup = ("CENTRAL PARK. from 59th to 110th street. can spend all day outdoors!")

    textSize(20);
    fill("black")
    stroke("white")
    text(popup, 50, 500, 500, 600);

  }

  // omonia cafe

  if (omonia.clicked(myMap.latLngToPixel(40.7611903, -73.9240141)) < 10 && omonia.lat == 40.7611903) {


    popup = ("OMONIA CAFE. 32-20 Broadway, Queens, NY 11106. greek coffehouse for fredo cappucino")

    textSize(20);
    fill("black")
    stroke("white")
    text(popup, 50, 500, 500, 600);

  }

  // met

  if (met.clicked(myMap.latLngToPixel(40.7794396, -73.96338248)) < 10 && met.lat == 40.7794396) {


    popup = ("The Metropolitan Museum of Art.1000 5th Ave, New York, NY 10028. check online to see if it's open. reservation is required")

    textSize(20);
    fill("black")
    stroke("white")
    text(popup, 50, 500, 500, 600);

  }

  // mandarin hotel

  if (mandarin.clicked(myMap.latLngToPixel(40.7680943, -73.9818907)) < 10 && mandarin.lat == 40.7680943) {


    popup = ("Mandarin Oriental hotel.80 Columbus Cir, New York, NY 10023. sneak on roof for a beautiful view. if unsuccessful try the time warner building... you didnt hear this from me..")

    textSize(20);
    fill("black")
    stroke("white")
    text(popup, 50, 500, 500, 600);

  }


  // brooklyn bridge

  if (bridge.clicked(myMap.latLngToPixel(40.70569125, -73.99635787)) < 10 && bridge.lat == 40.70569125) {


    popup = ("Brooklyn bridge. walk the bridge if ur realllllly bored.")

    textSize(20);
    fill("black")
    stroke("white")
    text(popup, 50, 500, 500, 600);

  }

  // herbert von king park

  if (herbert.clicked(myMap.latLngToPixel(40.68983375, -73.94665233)) < 10 && herbert.lat == 40.68983375) {


    popup = ("Herbert von king park. 670 Lafayette Ave, Brooklyn, NY 11216. this park has the right vibes but bee careful cause people host a lot of parties here and they dont always wear masks.")

    textSize(20);
    fill("black")
    stroke("white")
    text(popup, 50, 500, 500, 600);

  }


}


/////////////////////////////////////////


class Places {
  constructor(lat, long) {
    this.lat = lat;
    this.long = long;

  }

  point(latLong, c) {
    this.latLong = latLong;
    this.c = c;

    this.c = ("pink");
    fill(this.c);
    stroke("black");
    ellipse(this.latLong.x, this.latLong.y, 20, 20);
    return c;

  }

  clicked(latLong, d) {
    this.latLong = latLong;
    this.d = d;

    d = dist(mouseX, mouseY, this.latLong.x, this.latLong.y);
    return d;
  }
}
