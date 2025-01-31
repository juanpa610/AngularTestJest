import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let compoponent: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    compoponent = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(compoponent).toBeTruthy();
  });

  it(`should have the 'JestAngular-17-2-0' title`, () => {
    expect(compoponent.title).toEqual('JestAngular-17-2-0');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, JestAngular-17-2-0');
  });

  it('should do match with snapshot', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled).toMatchSnapshot();
  });
});
