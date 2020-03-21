import { environment } from './../environments/environment';

import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RedirectionResolver } from './Core/Resolvers/redirection-resolver.service';
import { DataInitResolver } from './Core/Resolvers/data-init-resolver.service';
import { NotFoundComponent } from './Core/Pages/NotFound/NotFound.component';
import { EmptyComponent } from './Core/Pages/Empty/Empty.component';


export const AppRoutes: Routes = [
   {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
   },
   {
      path: 'home',
      component: MainComponent,
      resolve: { initialDataFetched: DataInitResolver },
      children: [
         {
            path: '',
            loadChildren: './Modules/Home/home.module#HomeModule'
         }
      ]
   }
   
]
