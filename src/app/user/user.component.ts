import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {MatDialog} from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
    user = new User(); 
    allUsers =[];

  constructor(public dialog: MatDialog, public firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
    .collection('users')
    .valueChanges({idField: 'userID'})
    .subscribe(results =>{
        console.log('Received changes from DB', results);
        this.allUsers = results;
    });
  }

  openDialog() {
      this.dialog.open(DialogAddUserComponent);
  }
}
