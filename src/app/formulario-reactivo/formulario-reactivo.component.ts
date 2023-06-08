import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router} from '@angular/router';


@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {
  // instanciamos de la clase formGroup, para identificar el formulario, y le pasamos un objeto que serán los inputs, para luego, dentro del div general de formulario, pasar este formGroup como propiedad [formGroup]="formUser"
  // formUser = new FormGroup({
  //   'name': new FormControl('', Validators.required),
  //   'email': new FormControl('', [Validators.required, Validators.email])
  // });

  //Forma mejorada para crear los grupos, luego de inyectar en el constructor la propiedad FormBuilder, esto nos permite no tener que instanciar cada objeto mediante el ''= new FormControl", sino que únicamente se pone una cadena vacía y sus validaciones dentro del array que acabamos de crear
  formUser = this.fb.group({
    'name': ['', Validators.required],
    'email': ['', [Validators.required, Validators.email]],
    'cedula': ['', Validators.required]
  });

  //CREAMOS GETTERS PARA CADA CAMPO DE LOS INPUTS, PARA NO ENSUCIAR EL CÓDIGO HTML
  // EN EL HTML SÓLO SE HARÁ EL LLAMADO AL GET. Ponemos as FormControl al final para evitar inconvenientes con valores nulos y no tener que preveerlos

  get name() {
    return this.formUser.get('name') as FormControl;
  }

  get email() {
    return this.formUser.get('email') as FormControl;
  }
  get cedula() {
    return this.formUser.get('cedula') as FormControl
  }


  //Creamos la función procesarDatos, que se encargará de imprimir en consola los valores que tengamos almacenados en el formUser al momento de hacer click en enviar. En la vista, esta función se pone dentro del form padre, mediante (ngSubmit)="procesarDatos()"
  procesarDatos() {
    console.log(this.formUser.value);
    this.RefrescarDatos();
  }
  RefrescarDatos() {
    this.router.navigate(['/formulario-reactivo']);
    this.formUser.reset();
  }


  constructor(private fb : FormBuilder, private router: Router) {

   }

  ngOnInit(): void {

  }



}
