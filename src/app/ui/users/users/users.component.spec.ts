import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { UserUseCase } from '../../../application/use-cases/user-use-cases';
import { of } from 'rxjs';
import { User } from '../../../domain/interface/user.intefaces';
import { WebsitePipe } from '../../../share/pipes/website.pipe';
import { By } from '@angular/platform-browser';
import { NumbersOnlyDirective } from '../../../share/directives/numbers-only.directive';

const mockUsersUseCase = {
  getUsers: jest.fn(),
  getUserByID: jest.fn(),
};

const usersMock: User[] = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618"
      }
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
    }
  }
];

const usersMockSecond: User[] = [
  {
    id: 1,
    name: "Juan Jaramillo",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618"
      }
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
    }
  }
];

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
      providers: [
        {
          provide: UserUseCase,
          useValue: mockUsersUseCase
        }
      ],
      imports: [
        WebsitePipe,
        NumbersOnlyDirective
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call method getUsers in OnInit', () => {
    mockUsersUseCase.getUsers.mockReturnValue(of(usersMock));
    component.ngOnInit();
    expect(mockUsersUseCase.getUsers).toHaveBeenCalled();
  });
  
  it('should render all users in the template', () => {
    mockUsersUseCase.getUsers.mockReturnValue(of(usersMock));
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const divUsers = compiled.querySelectorAll('.container__users .container__users__user');
    
    expect(divUsers.length).toBe(usersMock.length);
  });

  it('should render the first user in the template with the correct website', () => {
    mockUsersUseCase.getUsers.mockReturnValue(of(usersMockSecond));
    fixture.detectChanges(); // ejecuta el clico de vida de angular, exceptuando el constructor

    // const compiled = fixture.nativeElement as HTMLElement;
    // const divUsers = compiled.querySelectorAll('.container__users .container__users__user');

    const divUsers = fixture.debugElement.queryAll(By.css('.container__users .container__users__user'));
   
    expect(divUsers[0].nativeElement.textContent).toContain(usersMockSecond[0].website);
  });
  
});
