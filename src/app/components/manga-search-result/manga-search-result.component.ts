import { Component, Input, input } from '@angular/core';
import { JikanAPIGetMangaSearchResult } from '../../services/jikan-api/jikan-api.service';

@Component({
  selector: 'app-manga-search-result',
  imports: [],
  templateUrl: './manga-search-result.component.html',
  styleUrl: './manga-search-result.component.css'
})
export class MangaSearchResultComponent {
  @Input({required:true}) result!:JikanAPIGetMangaSearchResult;
}
