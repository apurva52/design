import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
declare var require: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-project';
  validate = false;
  urlvalue: any;
  invalid = false;
  loader = false;
  msg: any;
  shortenlink: any = [];


  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    if (sessionStorage.getItem("data") != null) {
      let obdata: any = sessionStorage.getItem("data");
      this.shortenlink = JSON.parse(obdata);
    }

  }
  FormSubmit() {
    this.loader = true;
    if (this.shortenlink.length > 0) {
      for (var k of this.shortenlink) {
        if (k.name == this.urlvalue) {
          this.loader = false;
          alert("This Url is already sorted and its sorten link is present in below list")
          return;

        }
      }
    }
    this.http.get('https://api.shrtco.de/v2/shorten?url=' + this.urlvalue).subscribe((respondisk: any) => {
      console.log(respondisk)
      if (respondisk.ok) {
        this.loader = false;
        let obj: any = {};
        obj["name"] = this.urlvalue
        obj["shortenurl"] = respondisk.result.short_link;
        this.shortenlink.push(obj);
        sessionStorage.setItem("data", JSON.stringify(this.shortenlink));
      }
    },
      (e) => {
        this.msg = e.error.error
        this.validate = true;
        this.loader = false;
      });

  }
  validateurl(value: any) {
    var validUrl = require('valid-url');
    if (validUrl.isUri(value)) {
      this.validate = false;
      console.log('Looks like an URI');
    }
    else {
      this.validate = true;
    }
  }
  inputchange(e: any) {
    this.validateurl(e.target.value)
  }

}
