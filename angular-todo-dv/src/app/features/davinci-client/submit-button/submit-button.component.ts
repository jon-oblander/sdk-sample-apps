/*
 * angular-todo-prototype
 *
 * submit-button.component.ts
 *
 * Copyright (c) 2021 ForgeRock. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
})
export class SubmitButtonComponent {
  // TODO: Resolve this
  /* eslint-disable @typescript-eslint/no-explicit-any */

  @Input() collector: any;
  @Input() submittingForm: boolean;
}