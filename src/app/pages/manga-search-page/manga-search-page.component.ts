import { Component } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { JikanAPIGetMangaSearchResult, JikanAPIService } from '../../services/jikan-api/jikan-api.service';
import { MangaSearchResultComponent } from '../../components/manga-search-result/manga-search-result.component';

@Component({
  selector: 'app-manga-search-page',
  imports: [SearchBarComponent, MangaSearchResultComponent],
  templateUrl: './manga-search-page.component.html',
  styleUrl: './manga-search-page.component.css'
})
export class MangaSearchPageComponent {
  results:JikanAPIGetMangaSearchResult[] = [];

  constructor(
    private jikanAPI: JikanAPIService,
  ) { }

  async searchManga(query:string):Promise<void>{
    const response = await this.jikanAPI.getMangaSearch(query);
    this.results = response.data;  
  }
  
}
