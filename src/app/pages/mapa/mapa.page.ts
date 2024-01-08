import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit{

  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;

  newMap: GoogleMap;
  currentPosition: any;
  miPos: any;
  map: any;
  myMarker: any;
  secondMarker: any;

  layers: any[] = [];

  constructor (private alertController: AlertController) {}

  ngAfterViewInit() {
    this.crearMapa();
  }

  ngOnInit(){
    this.ubicacionActual();
  }

  //Creacion de mapa y ubicación actual de usuario
  //-----------------------------------------------------------------------------------------------------------------------------------------------------

  async crearMapa(){
    var myLatLng = new google.maps.LatLng(-38.73383,-72.584496);
    if(this.mapRef){
      this.map = document.getElementById('map');
      this.map = new google.maps.Map(this.mapRef.nativeElement, {
        zoom: 10,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        gestureHandling : 'cooperative'
      });
      this.layers[0] = new google.maps.KmlLayer({url:'https://www.temucotemueve.cl/ttm/servicio_mapa/kmz/colectivos/L17/17A_ida.kml', suppressInfoWindows: true, map: this.map});
      this.layers[1] = new google.maps.KmlLayer({url:'https://www.temucotemueve.cl/ttm/servicio_mapa/kmz/colectivos/L17/17_ida.kml', suppressInfoWindows: true, map: this.map});
      this.layers[2] = new google.maps.KmlLayer({url:'https://www.temucotemueve.cl/ttm/servicio_mapa/kmz/colectivos/L17/17A_retorno.kml', suppressInfoWindows: true, map: this.map});
      this.layers[3] = new google.maps.KmlLayer({url:'https://www.temucotemueve.cl/ttm/servicio_mapa/kmz/colectivos/L17/17_retorno.kml', suppressInfoWindows: true, map: this.map});
      for (var i = 0; i < this.layers.length; i++) {
        this.layers[i].setMap(null);
	    }

      //Creación del segundo marcador con texto 
      const secondMarkerLatLng = new google.maps.LatLng(-38.71490521805217, -72.55952838588071);
      this.secondMarker = new google.maps.Marker({
        position: secondMarkerLatLng,
        map: this.map,
        title: "Segundo Marcador"
      });
      const secondMarkerInfoContent = '<div style="color: black;"><strong>Información del vehículo:</strong><br>Patente: GWKG64<br>Modelo: TOYOTA</div>';
      const secondMarkerInfoWindow = new google.maps.InfoWindow({
        content: secondMarkerInfoContent
      });
      this.secondMarker.addListener('click', () => {
        secondMarkerInfoWindow.open(this.map, this.secondMarker);
      });

      this.moverMarcador(this.secondMarker, {secondMarkerLatLng}, { lat: -38.71368993253038, lng: -72.56132546568814 }, 90000);
    }else{
      console.log("Error")
    }
    this.ubicacionActual();
  }

  async ubicacionActual() {
    const permission = await Geolocation.checkPermissions();

      const coordinates = await Geolocation.getCurrentPosition();
      this.miPos = {
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude
      }
      this.map.setCenter(this.miPos);
      this.myMarker = new google.maps.Marker({
        position: this.miPos,
        map: this.map,
        title: "Estas aquí",
      });
      const infoWindowContent = '<div style="color: black;"><strong>Estas aquí actualmente.</strong></div>';
      const infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
      });
      
      this.myMarker.addListener('click', () => {
        infoWindow.open(this.map, this.myMarker);
      });
      this.map.setCenter(this.miPos);
    //this.mostrarAlerta('Para ver tu ubicación actual, por favor, concede los permisos de ubicación.');
    //setTimeout(async () => {
    //  await Geolocation.requestPermissions();
    //  this.ubicacionActual();
    //}, 1000);

  }

  //usuario rechaza aceptar ubicación
  //async mostrarAlerta(mensaje: string) {
  //  const alert = await this.alertController.create({
  //    header: 'Permisos de ubicación',
  //    message: mensaje,
  //    buttons: ['OK']
  //  }).then(alert => alert.present());
  //}

  //Mostrar rutas
  toggleLayer(i: number) {
	
    if (this.layers[i].getMap() === null) {
      this.layers[i].setMap(this.map);
    }
    else {
      this.layers[i].setMap(null);
    }
  }

  //Mover marcador
  moverMarcador(marker: any, from: any, to: any, duration: number) {
    const numDeltas = 100;
    const delay = duration / numDeltas;
    const deltaLat = (to.lat() - from.lat()) / numDeltas;
    const deltaLng = (to.lng() - from.lng()) / numDeltas;

    let i = 0;
    const moveInterval = setInterval(() => {
      i++;
      const newLat = from.lat() + (i * deltaLat);
      const newLng = from.lng() + (i * deltaLng);
      marker.setPosition(new google.maps.LatLng(newLat, newLng));
      if (i === numDeltas) {
        clearInterval(moveInterval);
      }
    }, delay);
  }

}

