import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  hotelName = 'Niku-Niku Hotel';

  numberOfrooms = 10;

  hiderooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomsList : RoomList[] = [{
    roomType: 'Deluxe Room',
    amenities: 'Air Conditioner, Free Wi-Fi,TV, Bathroom,Kitchen',
    price: 5000,
    photo: 'https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg',
    checkinTime: new Date('24-Oct-2023'),
    checkoutTime: new Date('25-Oct-2023'),
  },{
    roomType: 'Deluxe Room',
    amenities: 'Air Conditioner, Free Wi-Fi,TV, Bathroom,Kitchen',
    price: 10000,
    photo: 'https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg',
    checkinTime: new Date('24-Oct-2023'),
    checkoutTime: new Date('25-Oct-2023'),
  },{
    roomType: 'Private Suite',
    amenities: 'Air Conditioner, Free Wi-Fi,TV, Bathroom,Kitchen',
    price: 15000,
    photo: 'https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg',
    checkinTime: new Date('24-Oct-2023'),
    checkoutTime: new Date('25-Oct-2023'),
  }]

  toggle() {
    this.hiderooms = !this.hiderooms;
  }

}
