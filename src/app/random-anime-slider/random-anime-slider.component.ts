import { Component, Input } from '@angular/core';
import { JikanAPIService,JikanAPIGetAnimeSearchResult } from '../services/jikan-api/jikan-api.service';

@Component({
  selector: 'app-random-anime-slider',
  templateUrl: './random-anime-slider.component.html',
  styleUrls: ['./random-anime-slider.component.css'],
})
export class RandomAnimeSliderComponent {
  @Input() count: number = 3;
  animes: JikanAPIGetAnimeSearchResult[] = [];
  errorMessage: string = '';

  constructor(private jikanAPI: JikanAPIService) {}

  async ngOnInit(): Promise<void> {
    if (this.count <= 0) {
      this.errorMessage = 'Count must be greater than 0.';
      throw new Error(this.errorMessage);
    }

    for (let i = 0; i < this.count; i++) {
      try {
        const response = await this.jikanAPI.getAnimeSearch('', 1, 1); 
        const randomAnime = response.data[0]; 
        if (randomAnime) this.animes.push(randomAnime);
      } catch (error: any) {
        this.errorMessage = error.message;
        console.error('Error fetching random anime:', error);
      }
    }
  }
}
