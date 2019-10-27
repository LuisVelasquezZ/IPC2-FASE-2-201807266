import { Routes } from '@angular/router';
import { CursosAuxComponent} from './cursos-aux/cursos-aux.component';
import { ForosComponent } from './foros/foros.component';
import { PublicacionComponent} from './foros/publicacion/publicacion.component';
import { from } from 'rxjs';

export const Auxiliar_routes : Routes = [
  { path: 'cursosAux', component: CursosAuxComponent },
  { path: 'foros/:idSeccion', component: ForosComponent },
  { path: 'publicacion/:idPublicacion', component: PublicacionComponent },
  { path: '', pathMatch: 'full', redirectTo:'cursosAux'}
];
