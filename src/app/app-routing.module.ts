import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'receiver',
    loadChildren: () => {
      return import('./modules/receiver/receiver.module')
        .then((m) => {
          return m.ReceiverModule;
        });
    },
  },
  {
    path: 'transfer',
    loadChildren: () => {
      return import('./modules/transfer/transfer.module')
        .then((m) => {
          return m.TransferModule;
        });
    },
  },
  {
    path: 'historial',
    loadChildren: () => {
      return import('./modules/historial/historial.module')
        .then((m) => {
          return m.HistorialModule;
        });
    },
  },
  { path: '', redirectTo: 'historial', pathMatch: 'full', },
  { path: '**', redirectTo: 'historial', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
