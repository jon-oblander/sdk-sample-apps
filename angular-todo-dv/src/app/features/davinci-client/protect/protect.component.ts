/*
 * angular-todo-prototype
 *
 * protect.component.ts
 *
 * Copyright (c) 2021 ForgeRock. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-protect',
  templateUrl: './protect.component.html',
})
export class ProtectComponent {
  // TODO: Resolve this
  /* eslint-disable @typescript-eslint/no-explicit-any */

  @Input() collector: any;
  @Input() updater: any;

  constructor() {
    this.updater('fakeprofile');
  }
}
