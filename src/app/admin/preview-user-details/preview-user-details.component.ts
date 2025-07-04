import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../../model/user.model';

@Component({
  selector: 'app-preview-user-details',
  standalone: false,
  templateUrl: './preview-user-details.component.html',
  styleUrl: './preview-user-details.component.scss'
})
export class PreviewUserDetailsComponent {
  constructor(
    public dialogRef: MatDialogRef<PreviewUserDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User
  ) { }

  close(): void {
    this.dialogRef.close();
  }
}
