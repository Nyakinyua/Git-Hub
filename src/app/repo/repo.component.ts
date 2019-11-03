import { Component, OnInit } from '@angular/core';
import { UserHtttpService } from "../user-http/user-htttp.service";
import { User } from '../user';
import { Repo } from "../repo";


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  users: User;
  repos: Repo[] = [];
  
  constructor( public userHttpService:UserHtttpService ) { }

 
  searchUser(searchTerm) {

    this.userHttpService.searchUsers(searchTerm).then(
      (success) => {
        this.users = this.userHttpService.user;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getRepos(searchTerm) {
    this.userHttpService.getRepos(searchTerm).then(
      (results) => {
        this.repos = this.userHttpService.repos;
        console.log(this.repos);
    },
    (error) => {
        console.log(error);
    }
    );
  }

 
 
 ngOnInit() {

    this.searchUser('Nyakinyua');
    this.getRepos('Nyakinyua');
  }

}
