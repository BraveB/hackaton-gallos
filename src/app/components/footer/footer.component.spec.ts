import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the FooterComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should emit getServices event when getTime is called', () => {
    spyOn(component.getServices, 'emit');
    component.getTime();
    expect(component.getServices.emit).toHaveBeenCalled();
  });

  it('should update timeToCallFunc when updateTime is called', () => {
    component.timeToCallFunc = 5;
    component.updateTime();
    expect(component.timeToCallFunc).toBe(4);
  });

  it('should call getTime when updateTime reaches 0', () => {
    spyOn(component, 'getTime');
    component.timeToCallFunc = 1;
    component.updateTime();
    expect(component.getTime).toHaveBeenCalled();
  });

  it('should clearInterval on ngOnDestroy', () => {
    spyOn(window, 'clearInterval');
    component.ngOnDestroy();
    expect(window.clearInterval).toHaveBeenCalled();
  });
});
