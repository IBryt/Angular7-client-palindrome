import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalindromeMainComponent } from './components/palindrome-main/palindrome-main.component';
import { PalindromeCreateComponent } from './components/palindrome-create/palindrome-create.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PalindromeHistoryComponent } from './components/palindrome-history/palindrome-history.component';
import { PalindromeItemComponent } from './components/palindrome-item/palindrome-item.component';
import { PalindromeInfoComponent } from './components/palindrome-info/palindrome-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PalindromeMainComponent,
    PalindromeCreateComponent,
    PalindromeHistoryComponent,
    PalindromeItemComponent,
    PalindromeInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
