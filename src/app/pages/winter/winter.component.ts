import {Component, OnInit} from '@angular/core';
import {Angebot} from '../../models/Angebot';
import {AngebotService} from '../../services/angebot.service';

@Component({
  selector: 'app-winter',
  templateUrl: './winter.component.html',
  styleUrls: ['./winter.component.scss']
})
export class WinterComponent implements OnInit {
  heissGetraenke: Angebot[];
  soSchmecktWinters: Angebot[];
  ohDuSuessWinters: Angebot[];

  constructor(private angebotService: AngebotService) {
  }

  ngOnInit() {
    this.heissGetraenke = this.angebotService.getHeissGetraenke();
    this.soSchmecktWinters = this.angebotService.getSoSchmecktWinters();
    this.ohDuSuessWinters = this.angebotService.getOhDuSuessWinters();
  }

}
