import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { CopirightComponent } from './componentes/copiright/copiright.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { PresidenteComponent } from './presidente/presidente.component';
import { GobernadorComponent } from './gobernador/gobernador.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    EstudiosComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    CopirightComponent,
    RedesComponent, 
    PresidenteComponent, GobernadorComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
