import {Component, OnInit} from '@angular/core';
import {Angebot} from '../../models/Angebot';
import {AngebotService} from '../../services/angebot.service';

@Component({
  selector: 'app-kaffe',
  templateUrl: './kaffe.component.html',
  styleUrls: ['./kaffe.component.scss']
})
export class KaffeComponent implements OnInit {
  kaffees: Angebot[];
  alkoholfreis: Angebot[];
  biere: Angebot[];


  constructor(private angebotService: AngebotService) {
  }

  ngOnInit() {
    this.kaffees = this.angebotService.getKaffees();
    this.alkoholfreis = this.angebotService.getBiere();
    this.biere = this.angebotService.getBiere();
  }

}
