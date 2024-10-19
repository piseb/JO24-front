import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes'

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter(routes)]
    })
      .compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit openBurgerButtonClick when clicked on the burger button', fakeAsync(() => {
    spyOn(component.openBurgerButtonClick, 'emit');
    let button = fixture.debugElement.nativeElement.querySelector('mat-icon');
    button.click();
    tick();
    expect(component.openBurgerButtonClick.emit).toHaveBeenCalled();
  }));
});
