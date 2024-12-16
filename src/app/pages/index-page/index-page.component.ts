import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JikanAPIService } from '../../services/jikan-api/jikan-api.service';

@Component({
  selector: 'app-index-page',
  imports: [RouterLink],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.css'
})
export class IndexPageComponent {
  constructor(
    private jikanAPI : JikanAPIService
  ) {
    jikanAPI.status().then(console.log);
    jikanAPI.getAnimeSearch('attack on titan').then(console.log);
  }
}
