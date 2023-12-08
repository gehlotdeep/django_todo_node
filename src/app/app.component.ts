import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'spotify';

  audio = new Audio();


  playAudio(fileUrl: any): void {
    console.log(fileUrl)
    
    this.audio.src=fileUrl;

    this.audio.load();
    this.audio.play();
  }


  stopAudio() {
    this.audio.pause();
  }

  songs = [
    { id: 1, name: 'song1', fileUrl: 'assets/song/1.mp3'},
    { id: 2, name: 'song2', fileUrl: 'assets/song/2.mp3'},
    { id: 3, name: 'song3', fileUrl: 'assets/song/3.mp3'},
    { id: 4, name: 'song4', fileUrl: 'assets/song/4.mp3'},
    { id: 5, name: 'song5', fileUrl: 'assets/song/5.mp3'},
    { id: 6, name: 'song6', fileUrl: 'assets/song/6.mp3'},
    { id: 7, name: 'song7', fileUrl: 'assets/song/7.mp3'},
    { id: 8, name: 'song8', fileUrl: 'assets/song/8.mp3'},
    { id: 9, name: 'song9', fileUrl: 'assets/song/9.mp3'},
    { id: 10, name: 'song10', fileUrl: 'assets/song/10.mp3'},
    
  ]

}
