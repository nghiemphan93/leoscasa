import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {DrinkTableDataSource} from './drink-table-datasource';
import {Angebot} from '../../models/Angebot';
import {RestAngebotService} from '../../services/rest-angebot.service';

@Component({
  selector: 'app-drink-table',
  templateUrl: './drink-table.component.html',
  styleUrls: ['./drink-table.component.scss']
})
export class DrinkTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Angebot>;
  dataSource: DrinkTableDataSource;
  @Input()
  angebots: Angebot[];
  @Input()
  heading: string;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['title', 'desc', 'volume', 'price', 'order'];

  constructor(private restAngebotService: RestAngebotService) {
  }

  ngOnInit() {
    this.dataSource = new DrinkTableDataSource(this.angebots);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  addToCart(toAddAngebot: Angebot) {
    this.restAngebotService.createAngebot(toAddAngebot);
  }
}
