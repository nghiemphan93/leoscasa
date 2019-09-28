import {Component, OnInit} from '@angular/core';
import {Angebot} from '../../models/Angebot';
import {AngebotService} from '../../services/angebot.service';

@Component({
  selector: 'app-crossover',
  templateUrl: './crossover.component.html',
  styleUrls: ['./crossover.component.scss']
})
export class CrossoverComponent implements OnInit {
  pizzas: Angebot[];
  heading = 'Cross Over Pizza aus dem Steinofen'

  constructor(private angebotService: AngebotService) {
  }

  ngOnInit() {
    this.pizzas = this.angebotService.getPizzas();
  }
}
