import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueDetailPage } from './issue-detail.page';

describe('IssueDetailPage', () => {
  let component: IssueDetailPage;
  let fixture: ComponentFixture<IssueDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IssueDetailPage]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
