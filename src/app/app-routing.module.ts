import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';


const routes: Routes = [
    { path: 'formulario', component: FormularioComponent },
    { path: '', redirectTo: 'app-root', pathMatch: 'full' },
    { path: 'formulario-reactivo', component: FormularioReactivoComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
