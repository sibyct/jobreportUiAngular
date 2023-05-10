import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JrComponent } from './jr.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [JrComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(JrComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'jobreport'`, () => {
    const fixture = TestBed.createComponent(JrComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('jobreport');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(JrComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'jobreport app is running!'
    );
  });
});
