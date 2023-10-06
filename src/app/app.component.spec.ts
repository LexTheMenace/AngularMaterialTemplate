import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';

describe('AppComponent', () => {
  let fixture: any;
  let component: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatListModule],
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

  it(`should sort asc by default`, () => {
    component.items = [{ id: 2 }, { id: 3 }, { id: 1 }];
    component.sortItems();
    expect(component.items[0].id).toEqual(1);
  });

  it('should sort desc', () => {
    component.items = [{ id: 2 }, { id: 3 }, { id: 1 }];
    component.sortItems('desc');
    expect(component.items[0].id).toEqual(3);
  });
  it('should delete', () => {
    component.items = [{ id: 2 }, { id: 3 }, { id: 1 }];
    component.removeItem(2);
    expect(component.items.length).toEqual(2);
  });
});
