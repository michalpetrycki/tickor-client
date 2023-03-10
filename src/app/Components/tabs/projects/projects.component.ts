import { Component, OnInit } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  displayedColumns: { field: string, headerText: string }[] = [];
  currentProjects!: {}[];
  pageSettings: PageSettingsModel = {
    pageSize: 6
  };
  allowPaging = true;
  allowSelection = true;
  allowSorting = true;

  constructor() { }

  ngOnInit(): void {
    this.currentProjects = [
      { title: 'Title1', category: 'Category1', startDate: 'Start Date' },
      { title: 'Title1', category: 'Category1', startDate: 'Start Date' },
      { title: 'Title1', category: 'Category1', startDate: 'Start Date' }
    ];
    this.displayedColumns = [
      { field: 'title', headerText: 'Title' },
      { field: 'category', headerText: 'Category' },
      { field: 'startDate', headerText: 'Start Date' },
    ];
  }

}
