import {Component} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

/**
 * @title Basic grid-list
 */
@Component({
  selector: 'grid-list-overview-example',
  styleUrl: 'grid-list.component.css',
  templateUrl: 'grid-list.component.html',
  standalone: true,
  imports: [MatGridListModule],
})
export class GridListOverviewExample {}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */