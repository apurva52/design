import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { distinctUntilKeyChanged } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';



declare var require: any;
@Component({
  selector: 'app-dav-hehal',
  templateUrl: './dav-hehal.component.html',
  styleUrls: ['./dav-hehal.component.css']
})
export class DavHehalComponent implements OnInit {
  items: MegaMenuItem[];
  sideitems: MenuItem[];
  @ViewChild('du', { static: true }) du: ElementRef;
  title = 'test-project';
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

  constructor(private http: HttpClient, route: ActivatedRoute, private router: Router) {
    console.log("MULTI", this.du);
  }

  ngOnInit() {
    if (sessionStorage.getItem("data") != null) {
      let obdata: any = sessionStorage.getItem("data");
      this.shortenlink = JSON.parse(obdata);
    }
    this.items = [
      {
        label: 'Shortly',
        command: (event) => {
          this.router.navigate(['/dav-hehal/shortly']);

        },
      },
      {
        label: 'Features',
        command: (event) => {
          console.log('wesfjfvjk');
          this.feature = true;
          this.router.navigate(['/dav-hehal/features'])
        },
      },
      {
        label: 'Pricing',
        command: (event) => {
          this.router.navigate(['/dav-hehal/pricing']);
          this.pricing = true;
        },
      },
      {
        label: 'Resources',
        command: (event) => {
          this.router.navigate(['/dav-hehal/resources']);
          this.resources = true;
        },
      },
    ]
    this.sideitems = [
      { label: 'Quick Links' },
      { label: 'Dav University' },
      { label: 'CCA Calendar' },
      { label: 'Assignment & H.W' },
      { label: 'Exam Schedules' },
      { label: 'Syllabus' },
      { label: 'Fee Structure' },
      { label: 'Our Pride' },
      { label: 'Online Text Books' },
    ];
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
  // validateurl(value: any) {
  //   var validUrl = require('valid-url');
  //   if (validUrl.isUri(value)) {
  //     this.validate = false;
  //     console.log('Looks like an URI');
  //   }
  //   else {
  //     this.validate = true;
  //   }
  // }
  // inputchange(e: any) {
  //   this.validateurl(e.target.value)
  // }

}