import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { CommonModule } from '@angular/common';

const GET_USERS = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <header>
        <h1>User Directory</h1>
      </header>
      <main>
        <div class="user-list">
          <div *ngFor="let user of users" class="user-card">
            <h2>{{ user.name }}</h2>
            <p>{{ user.email }}</p>
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 MEAN Stack Demo</p>
      </footer>
    </div>
  `,
  styles: [`
    .container {
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    header {
      background-color: #3498db;
      color: white;
      padding: 20px;
      border-radius: 8px 8px 0 0;
      text-align: center;
    }

    h1 {
      margin: 0;
    }

    main {
      padding: 20px;
      background-color: white;
    }

    .user-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
    }

    .user-card {
      background-color: #ecf0f1;
      border-radius: 8px;
      padding: 15px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .user-card:hover {
      transform: translateY(-5px);
    }

    .user-card h2 {
      color: #2c3e50;
      margin-top: 0;
    }

    .user-card p {
      color: #7f8c8d;
    }

    footer {
      text-align: center;
      padding: 10px;
      background-color: #34495e;
      color: white;
      border-radius: 0 0 8px 8px;
    }
  `]
})
export class AppComponent implements OnInit {
  users: any[] = [];

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: GET_USERS,
      })
      .valueChanges.subscribe((result: any) => {
        this.users = result?.data?.users;
      });
  }
}