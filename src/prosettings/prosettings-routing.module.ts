import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetaileddataComponent } from './detaileddata/detaileddata.component';
import { ProsettingsComponent } from './prosettings.component';

const routes: Routes = [
  { path: 'factsetting', component: ProsettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class prosettingsRoutingModule {}
