import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { Repo } from '../repo';
import { User } from '../user';



@Injectable({
  providedIn: 'root'
}) 
export class UserHtttpService{

  user: User;
  repos: Repo[]=[];
  constructor(private http:HttpClient) {
    this.user = new User (0,"","",0,0,"");
    // this.repos []= new Repo [("","","", new Date();
   }

  //  apiKey="3268d36076fd5b927c335e89b59855b3779800a2"

   searchUsers(searchTerm: string) {

    console.log(searchTerm);
  
    interface ApiResponse {
      id: number;       
      login: string;
      avatar_url: string;
      followers:number;
      following:number;
      email:string
    }

    let searchPoint = 'https://api.github.com/users/' + searchTerm + '?access_token=' + environment.apiKey;
   
    // console.log(searchPoint);

    let promise = new Promise((resolve, reject) => {

      this.http.get<ApiResponse>(searchPoint).toPromise().then(
        (results) => {

          console.log(results);
          this.user.id = results.id;
          this.user.login = results.login;
          this.user.avatar_url=results.avatar_url;
          this.user.followers=results.followers;
          this.user.following=results.followers;
          this.user.email=results.email;
         

          resolve();
        },
        (error) => {
          reject(error);
        });
    });
    return promise;
  
}

  getRepos(searchTerm:string) {

    interface ApiResponse {
     name: string;
     description: string;
     html_url: string;
     created_at: Date;
    }

    let searchEndPoint = 'https://api.github.com/users/'+ searchTerm + '/repos?access_token=' +environment.apiKey;
  
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse[]>(searchEndPoint).toPromise().then(
        (repoResults) => {
          console.log(repoResults);

           this.repos = []
          // this.repos = repoResults. description;
          // console.log(this.repos);

          for (let i = 0; i < repoResults.length; i++) {
            let repo = new Repo(repoResults[i].name, repoResults[i].description, repoResults[i].html_url, repoResults[i].created_at);
            this.repos.push(repo);
          }
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
    return promise;
  }

}