import { Component, Input } from '@angular/core';
import { JikanAPIService,JikanAPIGetMangaSearchResult } from '../services/jikan-api/jikan-api.service';

@Component({
  selector: 'app-random-manga-slider',
  templateUrl: './random-manga-slider.component.html',
  styleUrls: ['./random-manga-slider.component.css'],
})
export class RandomMangaSliderComponent {
  @Input() count: number = 3;
  mangas: JikanAPIGetMangaSearchResult[] = [];
  errorMessage: string = '';

  constructor(private jikanAPI: JikanAPIService) {}

  async ngOnInit(): Promise<void> {
    if (this.count <= 0) {
      this.errorMessage = 'Count must be greater than 0.';
      throw new Error(this.errorMessage);
    }

    for (let i = 0; i < this.count; i++) {
      try {
        const response = await this.jikanAPI.getMangaSearch('', 1, 1); 
        const randomManga = response.data[0];
        if (randomManga) this.mangas.push(randomManga);
      } catch (error: any) {
        this.errorMessage = error.message;
        console.error('Error fetching random manga:', error);
      }
    }
  }
}
