import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { FormControl } from '@angular/forms';
import { QuoteService } from './quote.service';

import { FirebaseService } from '@app/services/firebase.service';
import { ArrayType } from '@angular/compiler';
import { multiply } from '@angular/flex-layout/core/multiply/multiplier';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  numberCtrl = new FormControl('', []);
  resultado = 'Resultado';
  multiplos = [1];
  color = '';

  constructor(private quoteService: QuoteService, private firebaseService: FirebaseService) {
    this.getAllNumbers();
  }

  ngOnInit() {}

  getNumber(event: Event) {
    event.preventDefault();

    //Variable que guardara los multiplos del numero dado
    this.multiplos = [1]; //reiniciar variable de multiplos guardados
    var number = this.numberCtrl.value;

    if (number) {
      if (number % 7 == 0) {
        //divisible entre 7
        this.multiplos?.push(7);
        this.color = 'rgb(67, 110, 230)'; //blue
      }
      if (number % 5 == 0) {
        //divisible entre 5
        this.multiplos?.push(5);
        this.color = 'rgb(230, 113, 67)'; //red
      }
      if (number % 3 == 0) {
        //divisible entre 3
        this.multiplos?.push(3);
        this.color = 'rgb(53, 182, 143)'; //green
      }
      this.resultado = number;
      this.addNumber(number, this.multiplos!);
    } else {
      this.resultado = 'no se ingreso numero';
      this.color = 'black';
    }
  }

  /* Enviar al Servicio de Firebase para guardar numero en base de datos*/
  addNumber(number: Number, multiplos: Number[]) {
    this.firebaseService
      .addNumber(number, multiplos)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getAllNumbers() {
    this.firebaseService.getData().subscribe(
      (res) => {
        res.map((e: any) => {
          console.log(e.payload.doc.data().number);
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // setNumberStyle(number: Number){
  //   if(this.multiplos?.includes()){

  //   }
  // }
}
