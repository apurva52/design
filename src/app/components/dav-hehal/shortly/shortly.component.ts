import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shortly',
  templateUrl: './shortly.component.html',
  styleUrls: ['./shortly.component.css']
})
export class ShortlyComponent implements OnInit {
  validate = false;
  urlvalue: any;
  ShowBaselineData = true;
  invalid = false;
  loader = false;
  msg: any;
  shortenlink: any = [];
  feature = false;
  pricing = false;
  resources = false;
  routing = true;

  constructor(private http: HttpClient,) { }

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
}
