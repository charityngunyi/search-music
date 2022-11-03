import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// http modules
import { HttpClientModule } from '@angular/common/http';
// Routes modules
import {
  RouterModule,
  Routes
  } from '@angular/router';

  // Routing methods
  import {
    LocationStrategy,
    HashLocationStrategy,
    APP_BASE_HREF
    } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

// Routes configuration
const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' },
  // authentication demo
  { path: 'login', component: LoginComponent },
  // Search link
  { path: 'search', component: SearchComponent },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [ LoggedInGuard ]
    },

];
// Authentication
import { AUTH_PROVIDERS } from './services/auth.service';
import { LoggedInGuard } from './logged-in.guard';

// Import PrimeNG modules
import { ButtonModule } from "primeng/button";
import { SidebarModule } from "primeng/sidebar";
import { RippleModule } from "primeng/ripple";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";
import {TabMenuModule} from 'primeng/tabmenu';
import { HeaderComponent } from './header/header.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { SearchComponent } from './search/search.component';
import { ProtectedComponent } from './protected/protected.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    HeaderComponent,
    AlbumComponent,
    ArtistComponent,
    SearchComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ButtonModule,
    SidebarModule,
    RippleModule,
    InputTextModule,
    InputTextareaModule,
    ToastModule,
    TabMenuModule,
  ],
  providers: [MessageService, AUTH_PROVIDERS,
    LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
