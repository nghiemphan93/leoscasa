import {Component, OnInit} from '@angular/core';
import {Angebot} from '../../models/Angebot';
import {AngebotService} from '../../services/angebot.service';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.scss']
})
export class PastaComponent implements OnInit {
  pastas: Angebot[];
  piattis: Angebot[];
  desserts: Angebot[];

  constructor(private angebotService: AngebotService) {
  }

  ngOnInit() {
    this.pastas = this.angebotService.getPastas();
    this.piattis = this.angebotService.getPiattis();
    this.desserts = this.angebotService.getDesserts();
  }

}
