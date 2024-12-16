import { Component } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { JikanAPIGetAnimeSearchResult, JikanAPIService } from '../../services/jikan-api/jikan-api.service';
import { AnimeSearchResultComponent } from '../../components/search-result/anime-search-result.component';

@Component({
  selector: 'app-anime-search-page',
  imports: [SearchBarComponent, AnimeSearchResultComponent],
  templateUrl: './anime-search-page.component.html',
  styleUrl: './anime-search-page.component.css'
})
export class AnimeSearchPageComponent {
  results: JikanAPIGetAnimeSearchResult[] = [];

  constructor(
    private jikanAPI: JikanAPIService,
  ) { }
  
  async searchAnime(query: string) : Promise<void> {
    const response = await this.jikanAPI.getAnimeSearch(query);
    console.log(response);

    this.results = response.data;
  }
}
