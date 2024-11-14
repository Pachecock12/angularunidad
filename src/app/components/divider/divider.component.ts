import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

/**
 * @title Basic divider
 */
@Component({
  selector: 'divider-overview-example',
  templateUrl: 'divider.component.html',
  standalone: true,
  imports: [MatListModule, MatDividerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerOverviewExample {}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */