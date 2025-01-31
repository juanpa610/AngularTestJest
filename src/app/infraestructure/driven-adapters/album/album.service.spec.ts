import { TestBed } from '@angular/core/testing';

import { AlbumService } from './album.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Album } from '../../../domain/interface/album.interface';


describe('AlbumService', () => {
  let service: AlbumService;
  let httpMock: HttpTestingController;
  let mockUrlApi: string = 'https://jsonplaceholder.typicode.com/albums/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AlbumService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
    TestBed.resetTestingModule();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get info from API', () => {
    const testValue: Album[] = [
      {userId: 1,id: 1,title: 'Test Post',color: 'red'},
      {userId: 1,id: 1,title: 'Test Post',color: 'red'},
      {userId: 1,id: 1,title: 'Test Post',color: 'red'},
    ]

    service.getAll().subscribe((value) => {
      expect(value).toBe(testValue);
    });

    let req = httpMock.expectOne(mockUrlApi);

    expect(req.request.method).toBe('GET');
    req.flush(testValue);
  });

  it(`should get album by id`,() => {
    const testValue: Album= {userId: 1,id: 1,title: 'Test Post',color: 'red'};

    service.getByID(testValue.id).subscribe((value) => {
      expect(value).toEqual(testValue);
    });

    let req = httpMock.expectOne(mockUrlApi + testValue.id);

    expect(req.request.method).toBe('GET');
    req.flush(testValue);
  })
});
