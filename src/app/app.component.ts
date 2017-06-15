import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '.././animate.css'
  ]
})

export class AppComponent {

  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
  myimage: string = 'http://i1002.photobucket.com/albums/af148/igard/planets/Desert-0010.png';
  itemname: string = 'Xitarea';
  itemlvl: string = '4';
  profile: boolean;

  constructor(public af: AngularFireDatabase) {
    this.items = af.list('/Planets');
    console.log(this.items)

    this.profile = false
  }

  select(item: any) {
    console.log(item)
    this.myimage = item.URL
    this.itemname = item.Name
    this.itemlvl = item.lvl
  }

  planetpage() {

  	if(this.profile){
  		this.profile = false;
  	}else{
  		this.profile = true;
  	}

  	console.log(this.profile)
  }
}
