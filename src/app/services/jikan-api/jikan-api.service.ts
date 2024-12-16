import { Injectable } from '@angular/core';

type JikanAPIStatus = {
  author_url: string
  discord_url: string
  version: string
  parser_version: string
  website_url: string
  documentation_url: string
  github_url: string
  parser_github_url: string
  production_api_url: string
  status_url: string
  myanimelist_heartbeat: {
    status: string
    score: number,
    down: boolean,
    last_downtime: number
  }
}

type JikanAPIPagination = {
  last_visible_page: number
  has_next_page: boolean
  items : {
    count: number
    total: number
    per_page: number
  }
}

export type JikanAPIGetAnimeSearchResult = {
  id: number
  url: string
  images: {
    jpg: {
      image_url: string
      small_image_url: string
      large_image_url: string
    }
    webp : {
      image_url: string
      small_image_url: string
      large_image_url: string
    }
  }
  trailer: {
    url: string
  }
  title: string
  title_english: string
  title_japanese: string
  episodes: number
  popularity: number
}

export type JikanAPIGetMangaSearchResult = {
  id: number
  url: string
  images: {
    jpg: {
      image_url: string
      small_image_url: string
      large_image_url: string
    }
    webp : {
      image_url: string
      small_image_url: string
      large_image_url: string
    }
  }
  title: string
  title_english: string
  title_japanese: string
  volumes : number
  chapters: number
  popularity: number
}


type JikanAPIGetAnimeSearchResponse = {
  pagination: JikanAPIPagination
  data: JikanAPIGetAnimeSearchResult[]
}

type JikanAPIGetMangaSearchResponse = {
  pagination: JikanAPIPagination
  data: JikanAPIGetMangaSearchResult[]
}

@Injectable({
  providedIn: 'root'
})
export class JikanAPIService {
  private static readonly baseURL = "https://api.jikan.moe/v4";

  async status(): Promise<JikanAPIStatus> {
    const response = await fetch(JikanAPIService.baseURL, {
      method: "GET"
    });
    if (response.status !== 200) {
      throw new Error(`Jikan API Status BAD: ${response.status} - ${response.statusText}`);
    }

    const responseJSON = await response.json() as JikanAPIStatus;
    return responseJSON;
  }

  async getAnimeSearch(
    query: string = '',
    page: number = 1,
    limit: number = 25
  ) : Promise<JikanAPIGetAnimeSearchResponse> {
    const urlParams = new URLSearchParams({
      q: query,
      page: page.toString(),
      limit: limit.toString(),
    });
    const url = `${JikanAPIService.baseURL}/anime?${urlParams}`;
    const response = await fetch(url, {
      method: 'GET',
    });

    if (response.status !== 200) {
      throw new Error(`Jikan API Status BAD: ${response.status} - ${response.statusText}`);
    }

    const responseJSON = await response.json() as JikanAPIGetAnimeSearchResponse;
    return responseJSON;
  }

  async getMangaSearch(
    query: string = '',
    page: number = 1,
    limit: number = 25
  ) : Promise<JikanAPIGetMangaSearchResponse> {
    const urlParams = new URLSearchParams({
      q: query,
      page: page.toString(),
      limit: limit.toString(),
      sfw: "true"
    });
    const url = `${JikanAPIService.baseURL}/manga?${urlParams}`;
    const response = await fetch(url, {
      method: 'GET',
    });

    if (response.status !== 200) {
      throw new Error(`Jikan API Status BAD: ${response.status} - ${response.statusText}`);
    }

    const responseJSON = await response.json() as JikanAPIGetMangaSearchResponse;
    return responseJSON;
  }

}
