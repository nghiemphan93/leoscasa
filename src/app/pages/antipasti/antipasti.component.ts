import {Angebot} from '../../models/Angebot';
import {AngebotService} from '../../services/angebot.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-antipasti',
  templateUrl: './antipasti.component.html',
  styleUrls: ['./antipasti.component.scss']
})
export class AntipastiComponent implements OnInit {
  antipastis: Angebot[];
  crostinis: Angebot[];
  insalates: Angebot[];

  displayedColumns: string[] = ['title', 'desc', 'price', 'order'];
  // dataSource = new MatTableDataSource<Angebot>(this.antipastis);
  dataSource: MatTableDataSource<Angebot>;

  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private angebotService: AngebotService) {
  }

  ngOnInit() {
    this.antipastis = this.angebotService.getAntipastis();
    this.crostinis = this.angebotService.getCrostinis();
    this.insalates = this.angebotService.getInsalates();

    // this.dataSource = new MatTableDataSource<Angebot>(this.antipastis);
    // this.dataSource.paginator = this.paginator;
  }
}
