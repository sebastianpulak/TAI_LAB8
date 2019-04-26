import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'blog-item-details',
  templateUrl: './blog-item-details.component.html',
  styleUrls: ['./blog-item-details.component.css']
})
export class BlogItemDetailsComponent implements OnInit {

  public image = '';
  public text: string;
  public id: number;


  
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id: string;
  	this.route.paramMap
  	   .subscribe(params => {
    	 id = params.get('id');
  	});
	if (id) {
  	  this.dataService.getById(id).subscribe(res => {
      this.image = res['url'];
    	this.text = res['text'];
  	});
	} else {
  	   this.id = 0;
	}
  }

}
