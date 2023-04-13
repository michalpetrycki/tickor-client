import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueListPage } from './issue-list.page';

describe('ProjectListPage', () => {
  let component: IssueListPage;
  let fixture: ComponentFixture<IssueListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueListPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
