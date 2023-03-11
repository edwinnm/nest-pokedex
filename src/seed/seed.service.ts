import { AxiosAdapter } from './../common/adapters/axios.adapter';
import { CreatePokemonDto } from './../pokemon/dto/create-pokemon.dto';
import { PokemonService } from './../pokemon/pokemon.service';
import { PokeResponse } from './interfaces/poke-response.interface';
import { Injectable } from '@nestjs/common';



@Injectable()
export class SeedService {

  constructor( private readonly pokemonService:PokemonService,
    private readonly http: AxiosAdapter,
    ){}

  
  async executeSeed(){

    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v1/pokemon?limit=650')

    await this.pokemonService.removeAllCollection();

    const pokemonToInsert: CreatePokemonDto [] = []
    ;
    data.results.forEach( ({name, url})  => {
      const segment = url.split('/')
      const no:number = +segment[ segment.length - 2 ]
      const createPokemon:CreatePokemonDto = {no, name}
      pokemonToInsert.push(createPokemon);

    })

    await this.pokemonService.addMany(pokemonToInsert);
    return "Seed executed.";
  }
}
