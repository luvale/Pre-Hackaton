import { Component, OnInit, AfterViewInit } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    const search = document.getElementById('search')!;
    const keyup = fromEvent(search, 'keyup');
    keyup.pipe(
      map((e:any) => e.currentTarget.value),
      debounceTime(400)
    ).subscribe(res => console.log(res));
  }

}
