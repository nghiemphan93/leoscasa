import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {OrderTableDataSource} from './order-table-datasource';
import {Angebot} from '../../models/Angebot';
import {RestAngebotService} from '../../services/rest-angebot.service';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Angebot>;
  dataSource: OrderTableDataSource;
  @Input()
  angebots: Angebot[];
  @Input()
  heading: string;

  // @Output()
  // deleteOrderEmitter: EventEmitter<Angebot> = new EventEmitter<Angebot>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['title', 'desc', 'volume', 'price', 'remove'];

  constructor(private restAngebotService: RestAngebotService) {
  }

  ngOnInit() {
    this.dataSource = new OrderTableDataSource(this.angebots);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  deleteOrder(toDeleteAngebot: Angebot) {
    console.log(`${toDeleteAngebot.title} ${toDeleteAngebot.desc}`);

    // Clear UI
    this.angebots.splice(this.angebots.indexOf(toDeleteAngebot), 1);
    this.dataSource = new OrderTableDataSource(this.angebots);
    this.ngAfterViewInit();

    // Clear from Server
    this.restAngebotService.deleteAngebot(toDeleteAngebot);

    // this.deleteOrderEmitter.emit(toDeleteAngebot);
  }
}
