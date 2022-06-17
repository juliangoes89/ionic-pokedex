import { Component, OnInit } from '@angular/core';
import { PokemonList } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from 'src/app/components/detalle/detalle.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  pokemones: PokemonList[] = [];
  constructor(private pokemonService: PokemonService, private modalctr: ModalController) {
  }

  ngOnInit() {
    this.pokemonService.getTopPokemons().subscribe(
      pokemons => {
        if(pokemons.results.length > 0 ){
          this.pokemones = pokemons.results;
        }
      }
    );
  }

  async verDetalle( name: string){
    const modal = await this.modalctr.create({
      component: DetalleComponent,
      componentProps:{
        name : name
      }
    });
    modal.present();
  }

}