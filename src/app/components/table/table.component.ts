import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {TableDataSource} from './table-datasource';
import {Angebot} from '../../models/Angebot';
import {RestAngebotService} from '../../services/rest-angebot.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Angebot>;
  dataSource: TableDataSource;
  @Input()
  angebots: Angebot[];
  @Input()
  heading: string;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['title', 'desc', 'price', 'order'];

  constructor(private restAngebotService: RestAngebotService) {
  }

  ngOnInit() {
    this.dataSource = new TableDataSource(this.angebots);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  async addToCart(toAddAngebot: Angebot) {
    // console.log(`${toAddAngebot.title} ${toAddAngebot.desc}`);

    const angebotFromServer = await this.restAngebotService.createAngebot(toAddAngebot);
    // console.log(`${angebotFromServer.title} ${angebotFromServer.desc}`);
  }
}
