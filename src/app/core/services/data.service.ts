import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICard, ICardData, ICardDetail } from 'src/app/shared/card';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'https://api.pokemontcg.io/';
  constructor(private http: HttpClient) { }

  public getCards(pageSize: number, select: string) {
    return this.http.get<ICard>(`${this.baseUrl}v2/cards?pageSize=${pageSize}&select=${select}&orderBy=name`)
  }

  public getCard(id: string, select: string) {
    return this.http.get<ICardDetail>(`${this.baseUrl}v2/cards/${id}?select=${select}`)
  }

}
