import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  contactEmail: string | null = null;
  error: string | null = null;

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.configService.getConfig().subscribe({
      next: (config) => {
        this.contactEmail = config.contactEmail || null;
      },
      error: (err) => {
        this.error = err.message || 'Failed to load contact email';
      },
    });
  }
}
