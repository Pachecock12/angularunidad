import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';

/**
 * @title Button toggle selection mode
 */
@Component({
  selector: 'button-toggle-mode-example',
  templateUrl: 'button-toggle.component.html',
  standalone: true,
  imports: [MatButtonToggleModule, MatCheckboxModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonToggleModeExample {
  hideSingleSelectionIndicator = signal(false);
  hideMultipleSelectionIndicator = signal(false);

  toggleSingleSelectionIndicator() {
    this.hideSingleSelectionIndicator.update(value => !value);
  }

  toggleMultipleSelectionIndicator() {
    this.hideMultipleSelectionIndicator.update(value => !value);
  }
}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */