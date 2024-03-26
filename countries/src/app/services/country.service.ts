import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private apollo: Apollo,
    private http: HttpClient
  ) { }

  findAll() {
    return this.apollo.watchQuery({
      query: gql`
    query{
        countries{
            name
            code
            continent {
              code
              name
            }
        }
        
    }`
    })
  }

  find(code:string) {
    return this.apollo.watchQuery({
      query: gql`
      query{
        country(code: "${code}") {
            awsRegion
            capital
            languages {
              code
              name
            }
            code
            currencies
            currency
            emoji
            emojiU
            name
            native
            phone
            phones
            states {
              name
            }
        }
    }
      `
    })
  }

  getPopulation(code: string) {
    const baseUrl = 'https://restcountries.com/v3.1/alpha/' + code
    return this.http.get(baseUrl)
  }
}
