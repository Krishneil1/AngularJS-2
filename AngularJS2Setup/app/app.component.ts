import { Component } from '@angular/core';
import { MovieListComponent } from './movies/movie-list.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MovieService } from './movies/movie.service';
import { HTTP_PROVIDERS } from "@angular/http";
import 'rxjs/Rx';
 
@Component({
    selector: "my-app",//using back tick allows multiple  
    template: `<h1>{{welcomeMessage}}</h1>
                <div>
                    <mm-movies></mm-movies>
                </div>`,
    directives: [MovieListComponent],
    providers:[MovieService,HTTP_PROVIDERS]

})
export class AppComponent {
    welcomeMessage: string = "Welcome to .NET Angular 2 project!!!";
}

