import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/models/pokemon.model';
import { ModalController, AlertController } from '@ionic/angular';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() name:string;
  pokemon?:Pokemon;
  constructor(private pokemonService:PokemonService, private modalCtrl: ModalController, private dataLocal: DataLocalService, public alertCtrl: AlertController) { }
  
  ngOnInit() {
    if(this.name){
      this.pokemonService.getPokemonByName(this.name).subscribe(
        pokemon =>{
          this.pokemon = pokemon;
        }
      );
    }
  }

  regresar(){
    this.modalCtrl.dismiss();
  }
  async mensaje(){
    await this.dataLocal.guardarPokemon(this.pokemon).then( data =>{
      this.dataLocal.buscarPokemon(this.pokemon.name).then(
        pokemon =>{
          console.log(pokemon);
          if(pokemon){
            this.presentAlert(pokemon.base_experience);
          }
        }
      );
    });
  }

  async presentAlert(xp){
    const alert = await this.alertCtrl.create({
      header: 'Pokemon',
      subHeader: 'Experiencia',
      message: xp,
      buttons: ['OK']
    });
    await alert.present();
  }
}
