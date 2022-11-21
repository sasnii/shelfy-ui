import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  stats: any;

  constructor( private productService: ProductsService){ }

  ngOnInit(): void {
      this.productService.getStatistics().subscribe(stats => this.stats = stats);
  }

  

}
