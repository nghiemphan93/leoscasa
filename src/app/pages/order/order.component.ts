import {Component, OnInit} from '@angular/core';
import {RestAngebotService} from '../../services/rest-angebot.service';
import {Angebot} from '../../models/Angebot';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  angebots: Angebot[];

  constructor(private restAngebotService: RestAngebotService) {
  }

  async ngOnInit() {
    this.angebots = await this.restAngebotService.getAngebots();


    // this.restAngebotService.getAngebots().subscribe(angebots => {
    //   this.angebots = angebots;
    //   console.log(this.angebots);
    // });

  }

  // deleteOrder(toDeleteAngebot: Angebot) {
  //   console.log(`${toDeleteAngebot.title} ${toDeleteAngebot.desc}`);
  //
  //   this.angebots.splice(this.angebots.indexOf(toDeleteAngebot), 1);
  //   this.restAngebotService.deleteAngebot(toDeleteAngebot);
  // }
}
