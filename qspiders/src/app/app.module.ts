import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { coursersComponent } from './coursers.components';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule} from '@angular/common/http'
import{RouterModule} from '@angular/router';
import { customDirective } from './custom.directive';
@NgModule({
  declarations: [
    AppComponent,
    coursersComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    HeaderComponent,
    ContactComponent,
    PagenotfoundComponent,
    customDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([{path:'login',component:LoginComponent},
                          {path:'register',component:RegisterComponent},
                          {path:'about',component:AboutComponent},
                          {path:'header',component:HeaderComponent},
                          {path:'contact',component:ContactComponent},
                          {path:'**',component:PagenotfoundComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
