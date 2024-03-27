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
            capital
            languages {
              name
            }
            code
            currency
            name
            states {
              name
            }
            continent {
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
