import { Component, OnInit } from '@angular/core';

import { IDropdownSettings } from 'ng-multiselect-dropdown';
import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  }
  roles = [
    { item_id: 1, item_text: 'a' },
    { item_id: 2, item_text: 'b' },
    { item_id: 3, item_text: 'c' }
  ]
  selectedItems: Array<object> = [];

  ngOnInit(): void {
    firebase.analytics();
    firebase.analytics().logEvent('page_view');
  }

  sendOptions() {
    firebase.analytics();
    firebase.analytics().logEvent('btn_click', { page: '/' });

    console.info('Send options', this.selectedItems)
  }
}
