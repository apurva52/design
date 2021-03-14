import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { EditorComponent } from '../components/editor/editor.component';

import { DavHehalComponent } from '../components/dav-hehal/dav-hehal.component';
import { FeatruresComponent } from '../components/dav-hehal/featrures/featrures.component';
import { PricingComponent } from '../components/dav-hehal/pricing/pricing.component';
import { ResourcesComponent } from '../components/dav-hehal/resources/resources.component';
import { ShortlyComponent } from '../components/dav-hehal/shortly/shortly.component';

const routes: Routes = [
  { path: '', redirectTo: 'dav-hehal', pathMatch: 'full' },
  {
    path: 'dav-hehal', component: DavHehalComponent,
    children: [
      { path: '', redirectTo: 'shortly', pathMatch: 'full' },
      { path: 'shortly', component: ShortlyComponent },
      { path: 'features', component: FeatruresComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'resources', component: ResourcesComponent },
    ]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
