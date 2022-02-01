import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { FormControl } from '@angular/forms';
import { QuoteService } from './quote.service';

import { FirebaseService } from '@app/services/firebase.service';
import { ArrayType } from '@angular/compiler';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  numberCtrl = new FormControl('', []);
  resultado = '';
  color = '';

  constructor(private quoteService: QuoteService, private firebaseService: FirebaseService) {
    this.getAllNumbers();
  }

  ngOnInit() {}

  getNumber(event: Event) {
    event.preventDefault();

    //Variable que guardara los multiplos del numero dado
    var multiplos = [];
    var number = this.numberCtrl.value;

    if (number) {
      if (number % 7 == 0) {
        //divisible entre 7
        multiplos.push(7);
        this.color = 'blue';
      }
      if (number % 5 == 0) {
        //divisible entre 5
        multiplos.push(5);
        this.color = 'red';
      }
      if (number % 3 == 0) {
        //divisible entre 3
        multiplos.push(3);
        this.color = 'green';
      }
      this.resultado = `${number} [${multiplos}]`;
      this.addNumber(number, multiplos);
    } else {
      this.resultado = 'no se ingreso numero';
      this.color = 'black';
    }
  }

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
}
