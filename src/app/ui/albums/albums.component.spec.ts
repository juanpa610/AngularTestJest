import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumsComponent } from './albums.component';
import { GetAlbumUseCases } from '../../application/use-cases/album-use-cases';
import { AlbumGateway } from '../../domain/gateway/album.gateway';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HoverDinamicColorDirective } from '../../share/directives/hover-dinamic-color.directive';
import { Album } from '../../domain/interface/album.interface';
import { of } from 'rxjs';
import { AlbumService } from '../../infraestructure/driven-adapters/album/album.service';


jest.mock('../../application/use-cases/album-use-cases');

describe('AlbumsComponent', () => {
  let dummyAlbumsResponse: Album[] = [
    { userId: 1, id: 1, title: "quidem molest ", color: "red" },
    { userId: 1, id: 2, title: "sunt qui exger", color: "green" },
    { userId: 1, id: 3, title: "omnis laborum ", color: "blue" },
    { userId: 1, id: 4, title: "non esse culpa", color: "yellow" },
    { userId: 1, id: 5, title: "eaque aut omni", color: "cyan" }
  ];

  let component: AlbumsComponent;
  let fixture: ComponentFixture<AlbumsComponent>;
  let compile: HTMLElement;
  let service: jest.Mocked<GetAlbumUseCases>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [AlbumsComponent],
      imports: [
        CommonModule,
        HoverDinamicColorDirective,
        HttpClientTestingModule
      ],
      providers: [GetAlbumUseCases, AlbumService]
    }).compileComponents();
    fixture = TestBed.createComponent(AlbumsComponent);
    component = fixture.componentInstance;

    service = TestBed.inject(GetAlbumUseCases) as jest.Mocked<GetAlbumUseCases>;
    httpMock = TestBed.inject(HttpTestingController);

    compile = fixture.nativeElement;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should get all albums in ngOnInit`, () => {
    const dummyAlbums: Album[] = [
      { userId: 1, id: 1, title: "Álbum 1", color: "red" },
      { userId: 1, id: 2, title: "Álbum 2", color: "green" }
    ];

    service.getAllAlbum.mockReturnValue(of(dummyAlbums));

    fixture.detectChanges();
    expect(service.getAllAlbum).toHaveBeenCalled();
    expect(component.albums.length).toEqual(dummyAlbums.length);
  });
});
