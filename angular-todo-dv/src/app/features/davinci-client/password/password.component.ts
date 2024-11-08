/*
 * angular-todo-prototype
 *
 * password.component.ts
 *
 * Copyright (c) 2021 ForgeRock. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
})
export class PasswordComponent {
  // TODO: Resolve this
  /* eslint-disable @typescript-eslint/no-explicit-any */

  @Input() collector: any;
  @Input() updater: any;

  isVisible = false;

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }

  updateValue(event): void {
    this.updater(event.target.value);
  }
}
