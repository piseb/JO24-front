import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BurgerComponent } from './burger.component';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';

describe('BurgerComponent', () => {
  let component: BurgerComponent;
  let fixture: ComponentFixture<BurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurgerComponent],
      providers: [provideRouter(routes)]
    })
      .compileComponents();
    fixture = TestBed.createComponent(BurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit closeBurgerButtonClick when clicked on the close button', fakeAsync(() => {
    spyOn(component.closeBurgerButtonClick, 'emit');
    let button = fixture.debugElement.nativeElement.querySelector('mat-icon');
    button.click();
    tick();
    expect(component.closeBurgerButtonClick.emit).toHaveBeenCalled();
  }));
});
