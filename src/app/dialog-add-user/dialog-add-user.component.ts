import { Component, OnInit } from '@angular/core';
import {AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  user = new User(); 
  birthDate: Date; 
  loading =false;
  
  constructor(private _snackBar: MatSnackBar, public firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogAddUserComponent>) {

    
   }

  ngOnInit(): void {
    
  }
  openSnackBar(message: string, action: string, time: number) {
    this._snackBar.open(message, action, {
      duration: time
    });
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current user ist :', this.user);
    this.loading = true;
   this.firestore
   .collection('users')
   .add(this.user.toJSON())
   .then((result: any)=> {
          this.loading = false;
          console.log('Adding user finished', result);
          this.dialogRef.close();
          this.openSnackBar('User Successfully Added', 'OK', 1500);
    })
    .catch(error=>{
        console.error(error);
    })
  }
  }