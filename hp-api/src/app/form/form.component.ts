import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']

})
export class FormComponent implements OnInit {
  li: any;
  newCharacter: any;
  characterID: any | undefined;

  nev: any;
  haz: any;
  szuli: any;
  patronus: any;

  editor = new FormGroup({
    name: new FormControl('', Validators.required), // szükséges, biztos ismert
    house: new FormControl(''), // lehet ismeretlen
    birthday: new FormControl(''), // lehet ismeretlen
    patronus: new FormControl('') // lehet ismeretlen
  });

  constructor(private route: ActivatedRoute,  private router: Router) { }


  ngOnInit(): void {
    this.li = LoadData(this.li);
    this.characterID = this.route.snapshot.paramMap.get('id');
    if (isNaN(this.characterID) === true){
      this.router.navigate(['listing-component']);
    }else{
      // @ts-ignore
      this.characterID = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    }

    if (!isNaN(this.characterID)) {
      this.editor.controls.name.setValue(this.li[this.characterID].name);
      this.editor.controls.house.setValue(this.li[this.characterID].house);
      const datum = DateChanger(this.li[this.characterID].dateOfBirth);
      this.editor.controls.birthday.setValue(datum);
      this.editor.controls.patronus.setValue(this.li[this.characterID].patronus);
    }

  }

  onSubmit() {
  if (isNaN(this.characterID)){
      this.newCharacter = ({name: this.editor.controls.name.value, house: this.editor.controls.house.value,
        dateOfBirth: DateChanger(this.editor.controls.birthday.value.toString()), patronus: this.editor.controls.patronus.value});
      this.li.push(this.newCharacter);
      SaveData(this.li);
      this.router.navigate(['listing-component']);
    }else{
    if (!isNaN(this.characterID)){
      this.li[this.characterID].name = this.editor.controls.name.value;
      this.li[this.characterID].house = this.editor.controls.house.value;
      this.li[this.characterID].dateOfBirth = DateChanger(this.editor.controls.birthday.value.toString());
      this.li[this.characterID].patronus = this.editor.controls.patronus.value;
    }
    SaveData(this.li);
    this.router.navigate(['listing-component']);
    }
  }
}
function LoadData(li: any){
  const json = localStorage.getItem('api_data');
  if (json) {
    li = JSON.parse(json);
    return li;
  }
}

function SaveData(li: any){
  const json = JSON.stringify(li);
  localStorage.setItem('api_data', json);
}

function DateChanger(dateString: any){
  const p = dateString.split(/\D/g);
  dateString = [p[2], p[1], p[0] ].join('-');
  return dateString;
}


