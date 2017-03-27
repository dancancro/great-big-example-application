/* tslint:disable:no-unused-variable */

// angular
import { TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterOutletStubComponent } from './shared/test/util';
import { RouterLinkStubDirective } from './shared/test/util';
import { RouterStub } from './shared/test/util';
import { TitleComponent } from './core/title/title.component';

// libs
import { StoreModule } from '@ngrx/store';

// app
import { t } from './shared/test/util';
import { TEST_CORE_PROVIDERS, TEST_HTTP_PROVIDERS } from './shared/test/util';

// module

import { AppPage } from './app.page';
import { SharedModule } from './shared/shared.module';
import { NavigatorModule } from './core/navigator/navigator.module';

const config: Route[] = [
  { path: '', redirectTo: 'core', pathMatch: 'full' },
  { path: 'bernie', loadChildren: 'app/bernie/bernie.module#BernieModule' },
  { path: 'books', loadChildren: 'app/books/books.module#BooksModule' },
  { path: 'contacts', loadChildren: 'app/contact/contact.module#ContactModule' },
  { path: 'counter', loadChildren: 'app/counter/counter.module#CounterModule' },
  { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
  { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' },
  { path: 'notes', loadChildren: 'app/notes/notes.module#NotesModule' },
  { path: 'wiki', loadChildren: 'app/wiki/wiki.module#WikiModule' },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];


// Stubs
@Component({ selector: 'rio-login-modal', template: '' })
class RioLoginModalStubComponent {
  @Input() isPending: boolean = false;
  @Input() hasError: boolean = false;
}

// test module configuration for each test
const testModuleConfig = () => {
  TestBed.configureTestingModule({
    imports: [
      FormsModule,
      StoreModule.provideStore({}),
      RouterTestingModule.withRoutes(config),
      SharedModule
    ],
    declarations: [
      TestComponent, AppPage,
      TitleComponent,
      RioLoginModalStubComponent,
      RouterLinkStubDirective,
      RouterOutletStubComponent
    ],
    providers: [
      TEST_CORE_PROVIDERS(),
      TEST_HTTP_PROVIDERS()
    ]
  });
};

export function main() {
  t.describe('@Component: AppComponent', () => {

    t.be(testModuleConfig);

    t.it('should build without a problem',
      t.async(() => {
        TestBed.compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            t.e(fixture.nativeElement).toBeTruthy();
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-app></sd-app>'
})
class TestComponent { }










/*

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Component } from '@angular/core';
import { RouterLinkStubDirective } from '../testing';
import { RouterOutletStubComponent } from '../testing';
import { RouterStub } from '../testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Route } from '@angular/router';

// libs
import { StoreModule } from '@ngrx/store';

import { AppPage } from './app.page';
import { SharedModule } from './shared/shared.module';
import { NavigatorModule } from './core/navigator/navigator.module';
/*
import { LayoutComponent } from './core/navigator/layout.component';
import { ToolbarComponent } from './core/navigator/toolbar.component';
import { SidenavComponent } from './core/navigator/sidenav.component';
import { NavItemComponent } from './core/navigator/nav-item.component';
import { RioButtonComponent } from './shared/button/button.component';
import { RioLoginFormComponent } from './login/login-form/login-form.component';
import { RioModalComponent } from './shared/modal/modal.component';
import { RioModalContentComponent } from './shared/modal-content/modal-content.component';
import { RioFormGroupComponent } from './shared/form-group/form-group.component';
import { RioInputComponent } from './shared/input/input.component';
import { RioLabelComponent } from './shared/label/label.component';
import { RioFormErrorComponent } from './shared/form-error/form-error.component';
import { RioAlertComponent } from './shared/alert/alert.component';

import { RioFormComponent } from './shared/form/form.component';
import { TitleComponent } from './core/title/title.component';

// Stubs
@Component({ selector: 'rio-login-modal', template: '' })
class RioLoginModalStubComponent {
  @Input() isPending: boolean = false;
  @Input() hasError: boolean = false;
}

let comp: AppPage;
let fixture: ComponentFixture<AppPage>;

describe('AppPage & TestModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppPage,
        TitleComponent,
        RioLoginModalStubComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent
      ],
      imports: [
        SharedModule,
        NavigatorModule
      ],
      providers: [
        RioFormComponent,
        RouterStub
      ]
    })

      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppPage);
        comp = fixture.componentInstance;
      });
  }));
  tests();
});

//////// Testing w/ NO_ERRORS_SCHEMA //////
describe('AppPage & NO_ERRORS_SCHEMA', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppPage,
        TitleComponent,
        RioLoginModalStubComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent,
      ],
      imports: [
        SharedModule
      ],
      providers: [
        RioFormComponent,
        RouterStub
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })

      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppPage);
        comp = fixture.componentInstance;
      });
  }));
  tests();
});

//////// Testing w/ real root module //////
// Tricky because we are disabling the router and its configuration
// Better to use RouterTestingModule
import { AppModule } from './app.module';
import { AppRouting } from './app-routing.module';

describe('AppPage & AppModule', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      providers: [
        RioFormComponent,
        RouterStub
      ]
    })

      // Get rid of app's Router configuration otherwise many failures.
      // Doing so removes Router declarations; add the Router stubs
      .overrideModule(AppModule, {
        remove: {
          imports: [AppRouting]
        },
        add: {
          declarations: [RouterLinkStubDirective, RouterOutletStubComponent]
        }
      })

      .compileComponents()

      .then(() => {
        fixture = TestBed.createComponent(AppPage);
        comp = fixture.componentInstance;
      });
  }));

  tests();
});

function tests() {
  let links: RouterLinkStubDirective[];
  let linkDes: DebugElement[];

  beforeEach(() => {
    // trigger initial data binding
    fixture.detectChanges();

    // find DebugElements with an attached RouterLinkStubDirective
    linkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkStubDirective));

    // get the attached link directive instances using the DebugElement injectors
    links = linkDes
      .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  });

  it('can instantiate it', () => {
    expect(comp).not.toBeNull();
  });

  it('can get RouterLinks from template', () => {
    expect(links.length).toBe(9, 'should have 9 links');
    expect(links[0].linkParams).toBe('/books"', '1st link should go to Books');
    expect(links[1].linkParams).toBe('/books/book/find', '2nd link should go to Find Books');
  });

  it('can click Heroes link in template', () => {
    const heroesLinkDe = linkDes[6];
    const heroesLink = links[6];

    expect(heroesLink.navigatedTo).toBeNull('link should not have navigated yet');

    heroesLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(heroesLink.navigatedTo).toBe('/heroes');
  });
}





import { TestBed, async } from '@angular/core/testing';
import { MdSidenav, MdSidenavContainer, MdToolbar, MdIcon, MdList } from '@angular/material';

import { AppPage } from './app.page';
import { LayoutComponent } from './core/navigator/layout.component';
import { ToolbarComponent } from './core/navigator/toolbar.component';
import { SidenavComponent } from './core/navigator/sidenav.component';
import { NavItemComponent } from './core/navigator/nav-item.component';
import { RioLoginModalComponent } from './login/login-modal/login-modal.component';
import { RioButtonComponent } from './shared/button/button.component';
import { RioLoginFormComponent } from './login/login-form/login-form.component';
import { RioModalComponent } from './shared/modal/modal.component';
import { RioModalContentComponent } from './shared/modal-content/modal-content.component'
import { RioFormComponent } from './shared/form/form.component';
import { RioFormGroupComponent } from './shared/form-group/form-group.component';
import { RioInputComponent } from './shared/input/input.component';
import { RioLabelComponent } from './shared/label/label.component';
import { RioFormErrorComponent } from './shared/form-error/form-error.component';
import { RioAlertComponent } from './shared/alert/alert.component';
import { TitleComponent } from './core/title/title.component';
import { RouterLinkStubDirective } from '../testing';
import { RouterOutletStubComponent } from '../testing';

describe('AppPage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppPage,
        LayoutComponent,
        ToolbarComponent,
        SidenavComponent,
        NavItemComponent,
        RioLoginModalComponent,
        RioLoginFormComponent,
        RioModalContentComponent,
        RioModalComponent,
        RioButtonComponent,
        RioFormComponent,
        RioFormGroupComponent,
        RioInputComponent,
        RioLabelComponent,
        RioFormErrorComponent,
        RioAlertComponent,
        TitleComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent,
        MdSidenavContainer,
        MdToolbar,
        MdIcon,
        MdSidenav,
        MdList
      ],
    });
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppPage);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Angular2 Redux Combination Application'`, async(() => {
    const fixture = TestBed.createComponent(AppPage);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular2 Redux Combination Application');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppPage);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Angular2 Redux Combination Application');
  }));
});
*/
