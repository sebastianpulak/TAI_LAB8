import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {DataService} from '../../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
    @Input() filterText: string;
    @Input() id: number;
    public items$: any;

  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(response=> {this.items$ = response})
  }

  goToDetails(){
    this.router.navigate(['/blog/detail/:id']);
  }

}
