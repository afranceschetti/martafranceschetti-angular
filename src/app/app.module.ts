import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import localeIt from '@angular/common/locales/it';
import { LOCALE_ID, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFooterComponent } from './components/common/main-footer/main-footer.component';
import { MainHeaderComponent } from './components/common/main-header/main-header.component';
import { CollaborationsComponent } from './pages/collaborations/collaborations.component';
import { HomeComponent } from './pages/home/home.component';
import { PageTitleComponent } from './components/common/page-title/page-title.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { DomainsComponent } from './pages/domains/domains.component';
import { TeamComponent } from './pages/team/team.component';
import { MissionComponent } from './pages/mission/mission.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainSideMenuComponent } from './components/common/main-side-menu/main-side-menu.component';


export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json?t=' + new Date().getTime());
}

registerLocaleData(localeIt, 'it');

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'collaborations', component: CollaborationsComponent },
  { path: 'domains', component: DomainsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contacts', component: ContactsComponent },
]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CollaborationsComponent,
    MainHeaderComponent,
    MainFooterComponent,
    PageTitleComponent,
    ContactsComponent,
    AboutusComponent,
    DomainsComponent,
    TeamComponent,
    MissionComponent,
    MainSideMenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),

    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    FontAwesomeModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: LOCALE_ID, useValue: 'it-IT' },
  ], bootstrap: [AppComponent]
})
export class AppModule { }
