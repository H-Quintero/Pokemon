import { Component, OnInit } from '@angular/core';
import { PokemonListService } from './pokemon-list.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  public pokemons: any[] = []
  public isActive: boolean = false
  constructor(
    private pokemonListService: PokemonListService
  ) { }

  ngOnInit(): void {
    this.getPokemonList()
  }

  getPokemonList() {
    this.pokemonListService.getPokemons()
      .subscribe((res: any) => {
        res.results.forEach((data: { name: string; }) => {
          this.pokemonListService.getMoreData(data.name)
            .subscribe((result: any) => {
              this.pokemons.push(result);
              // console.log(this.pokemons);
            })
          });
        })
  }

  toggleActiveDetail() {
    this.isActive = !this.isActive
  }
}
