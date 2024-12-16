import { Component, Input } from '@angular/core';
import { JikanAPIGetAnimeSearchResult } from '../../services/jikan-api/jikan-api.service';

@Component({
  selector: 'app-anime-search-result',
  imports: [],
  templateUrl: './anime-search-result.component.html',
  styleUrl: './anime-search-result.component.css'
})
export class AnimeSearchResultComponent {
  @Input({ required: true }) result!: JikanAPIGetAnimeSearchResult;
}
