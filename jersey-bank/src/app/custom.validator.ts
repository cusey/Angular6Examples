import { FormGroup } from '@angular/forms';

// custom validator to check string does not contains a space
export function CannotContainSpace(controlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    // set error on control if validation fails
    if (control.value.indexOf('') >= 0) {
      control.setErrors({cannotContainSpace: true});
    } else {
      control.setErrors(null);
    }
  };
}
