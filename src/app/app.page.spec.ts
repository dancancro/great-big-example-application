/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppPage } from './app.page';
import { AppModule } from './app.module';

describe('App: Ng2StateTalk', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppPage);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have as title \'Angular2 State Management Demo\'', async(() => {
    let fixture = TestBed.createComponent(AppPage);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular2 State Management Demo');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppPage);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Angular2 State Management Demo');
  }));
});
