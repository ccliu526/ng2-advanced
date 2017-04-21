import { AbstractControl } from '@angular/forms';
export function mustHaveWillValidator(control: AbstractControl) {
  if (control.value.indexOf('Will') > -1) {
    return null;
  } else {
    return {
      'must-have-will': true
    };
  }
}
