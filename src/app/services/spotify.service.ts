import { Injectable } from '@angular/core';
// import https
import {
  HttpClient,
  HttpRequest,
  HttpHeaders
} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(public http: HttpClient) { }
  searchTrack(query: string) {
    let params: string = [
    `q=${query}`,
    `type=track`
    ].join("&");
    let queryURL: any = `https://api.spotify.com/v1/search?${params}`;
    return this.http.request(queryURL)
    }
}
