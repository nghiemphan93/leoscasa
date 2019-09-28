import {Component, OnInit} from '@angular/core';
import {Angebot} from '../../models/Angebot';
import {AngebotService} from '../../services/angebot.service';

@Component({
  selector: 'app-sommer',
  templateUrl: './sommer.component.html',
  styleUrls: ['./sommer.component.scss']
})
export class SommerComponent implements OnInit {
  dessertSommers: Angebot[];
  vorspeise: Angebot[];
  frishSalats: Angebot[];
  pastaVomFeinstens: Angebot[];
  paneLeos: Angebot[];
  ciabattas: Angebot[];


  constructor(private angebotService: AngebotService) {
  }

  ngOnInit() {
    this.dessertSommers = this.angebotService.getDessertSommers();
    this.vorspeise = this.angebotService.getVorspeise();
    this.frishSalats = this.angebotService.getFrishSalats();
    this.pastaVomFeinstens = this.angebotService.getPastaVomFeinstens();
    this.paneLeos = this.angebotService.getPaneLeos();
    this.ciabattas = this.angebotService.getCiabattas();
  }

}
