import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueBuilderComponent } from './issue-builder.component';

describe('IssueBuilderComponent', () => {
  let component: IssueBuilderComponent;
  let fixture: ComponentFixture<IssueBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
