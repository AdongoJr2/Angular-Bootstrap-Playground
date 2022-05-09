import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  issueCloseForm = this.fb.group({
    issueCloseComment: [null],
    issueCloseRating: [null],
    issueCloseRatingComment: [null],
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onIssueCloseSubmit(): void {
    const form = this.issueCloseForm;
    form.markAllAsTouched();
    if (form.invalid) return;

    let payload: any = {
      // comment: form.value.issueCloseComment,
      starRating: form.value.issueCloseRating,
      comment: form.value.issueCloseRatingComment,
    }

    console.log('Submit form with data: ', payload);

  }

  resetIssueCloseForm(): void {
    this.issueCloseForm.reset();
  }

  get issueCloseComment(): AbstractControl | null {
    return this.issueCloseForm.get('issueCloseComment')
  }
  get issueCloseRating(): AbstractControl | null {
    return this.issueCloseForm.get('issueCloseRating')
  }
  get issueCloseRatingComment(): AbstractControl | null {
    return this.issueCloseForm.get('issueCloseRatingComment')
  }

  // TODO: define once and reuse!
  fieldHasErrors(field: AbstractControl): boolean {
    return field?.invalid && (field?.dirty || field?.touched)
  }

}
