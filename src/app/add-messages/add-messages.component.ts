import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-add-messages',
  templateUrl: './add-messages.component.html',
  styleUrls: ['./add-messages.component.css']
})
export class AddMessagesComponent implements OnInit {

  constructor(public messagesService: MessagesService) {

  }
  //Propiedad que capturará el valor almacenado en el input, dentro el input de la vista usando name="mensaje" [(ngModel)]="mensaje"
  mensaje: string = '';

  //Este método se pasa por el ngSubmit del formulario
  addMessage() {
    //acedemos al servicio previamente inyectado, ejecutamos el método add del servicio y le pasamos por parámetro el mensaje de este componente
    this.messagesService.add(this.mensaje);
    this.mensaje = '';
  }

  ngOnInit(): void {
  }

}
