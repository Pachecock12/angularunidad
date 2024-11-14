import {Component, signal} from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Testing with MatBadgeHarness
 */
@Component({
  selector: 'badge-harness-example',
  templateUrl: 'badge.component.html',
  standalone: true,
  imports: [MatButtonModule, MatBadgeModule],
})
export class BadgeHarnessExample {
  simpleContent = signal('S');
  overlap = signal(true);
  disabled = signal(true);
}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */