import { Component, OnInit } from '@angular/core';
import { Album } from '../../domain/interface/album.interface';
import { Router } from '@angular/router';
import { GetAlbumUseCases } from '../../application/use-cases/album-use-cases';

@Component({
  selector: 'app-albums',
  standalone: false,
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss'
})
export class AlbumsComponent implements OnInit {

  albums: Array<Album> = [];

  constructor(private albumUseCases: GetAlbumUseCases, private route: Router) {
  }
  
  ngOnInit(): void {
    console.log("Ejecutando ngOnInit...");
    this.getAlbums();
  }

  getAlbums() {
    this.albumUseCases.getAllAlbum().subscribe((albums) => {
      this.albums = albums;
      this.setColorsAlbums();
    });
  }

  setColorsAlbums() {
    let colors = ['red', 'green', 'blue', 'yellow', 'cyan', 'gray', 'orange', 'purple', 'aquamarine', 'deeppink', 'lawngreen'];
    let index = 0;
    this.albums.forEach((album) => {
      album.color = colors[index];
      index++;
      if (index == colors.length) index = 0;
    });
  }
}
