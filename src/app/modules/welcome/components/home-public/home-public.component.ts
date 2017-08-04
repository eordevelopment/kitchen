import { Component, OnInit } from '@angular/core';
import { StorageService } from 'app/services/storage.service';

@Component({
  selector: 'app-home-public',
  templateUrl: './home-public.component.html',
  styleUrls: ['./home-public.component.less']
})
export class HomePublicComponent implements OnInit {

  constructor(private storage: StorageService) { }

  ngOnInit() {
    this.storage.clear();
  }

}
