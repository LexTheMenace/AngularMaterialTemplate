import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: any;
  let component: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'ng-mat-jest'`, () => {
    component.items = [{ id: 2 }, { id: 3 }, { id: 1 }];
    component.sortItems();
    expect(component.items[0].id).toEqual(1);
  });

  it('should render title', () => {
    component.items = [{ id: 2 }, { id: 3 }, { id: 1 }];
    component.sortItems('desc');
    expect(component.items[0].id).toEqual(3);
  });
});
