import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './filter.pipe';
import { LoggingService } from './logging.service';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'directory', component: DirectoryComponent},
    ]),
    HttpClientModule,
  ],
  providers: [LoggingService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
