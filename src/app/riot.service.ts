import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RiotService {

  constructor(private httpClient: HttpClient) { }

  buscaInvocador(
    nomeDeInvocador: string,
    apiKey: string
  ): Observable<Account>{
    return this.httpClient.get<Account>(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nomeDeInvocador}?api_key=${apiKey}`);
  }

  buscaPartidas(
    accountId: string
  ){
    return this.httpClient.get(`https://br1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}`)
  }
}
