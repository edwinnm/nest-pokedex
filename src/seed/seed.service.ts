import { PokeResponse } from './interfaces/poke-response.interface';
import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance }  from 'axios';


@Injectable()
export class SeedService {

  private readonly axios: AxiosInstance = axios;
    
  async executeSeed(){
    const { data } = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v1/pokemon?limit=650')
    data.results.forEach( ({name, url})  => {
      const segment = url.split('/')
      const no:number = +segment[ segment.length - 2 ]
    })
    return data.results[0];
  }
}
