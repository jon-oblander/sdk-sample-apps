/*
 * angular-todo-prototype
 *
 * flow-button.component.ts
 *
 * Copyright (c) 2021 ForgeRock. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flow-button',
  templateUrl: './flow-button.component.html',
})
export class FlowButtonComponent {
  // TODO: Resolve this
  /* eslint-disable @typescript-eslint/no-explicit-any */

  @Input() collector: any;
  @Input() flow: any;
  @Input() renderForm: any;

  async handleClick(): Promise<void> {
    const node = await this.flow(this.collector.output.key);
    this.renderForm(node);
  }
}
