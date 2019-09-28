import {Component, OnInit} from '@angular/core';
import {Angebot} from '../../models/Angebot';
import {AngebotService} from '../../services/angebot.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss']
})
export class CocktailsComponent implements OnInit {
  cocktails: Angebot[];

  constructor(private angebotService: AngebotService) {
  }

  ngOnInit() {
    this.cocktails = this.angebotService.getCocktails();
  }

}
