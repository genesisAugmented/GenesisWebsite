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
  characters: FirebaseListObservable<any[]>;

  msgVal: string = '';
  myimage: string = 'http://i1002.photobucket.com/albums/af148/igard/planets/Desert-0010.png';
  itemname: string = 'Xitarea';
  itemlvl: string = '4';
  profile: boolean;

  c_name: string = 'Osirus';
  c_secondary: string = 'Intergalactic Sheriff';
  c_img_url: string = 'http://i.imgur.com/DvqyCFn.png';
  c_icon_url: string = '';

  constructor(public af: AngularFireDatabase) {
    this.items = af.list('/Planets');
    console.log(this.items)

    this.profile = true

    this.characters = af.list('/Characters');
  }

  select(item: any) {
    console.log(item)
    this.myimage = item.URL
    this.itemname = item.Name
    this.itemlvl = item.lvl
  }

  character_select(character: any) {
    this.c_img_url = character.c_image_url;
    this.c_name = character.c_name;
    this.c_secondary = character.c_secondary;
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
