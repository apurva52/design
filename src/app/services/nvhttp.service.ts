import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class NvhttpService {

  constructor(private http: HttpClient) { }

  static apiUrls: any = {
    showDiskData: '/netvision/rest/webapi/disksummarydata?access_token=563e412ab7f5a282c15ae5de1732bfd1',
    showMultiDiskData: '/netvision/rest/webapi/getconfiguimultidisk?access_token=563e412ab7f5a282c15ae5de1732bfd1',
    showRumData: '/netvision/rest/webapi/getconfigui?access_token=563e412ab7f5a282c15ae5de1732bfd1',
    SaveDiskAllocationData: '/netvision/rest/webapi/postdiskallocation?access_token=563e412ab7f5a282c15ae5de1732bfd1',
    UpdateParserTableAllocation: '/netvision/rest/webapi/postparsertablespace?access_token=563e412ab7f5a282c15ae5de1732bfd1',
    getSlaveList: '/netvision/rest/webapi/slavenodename?access_token=563e412ab7f5a282c15ae5de1732bfd1',
    parsers: '/netvision/rest/webapi/getparsers?access_token=563e412ab7f5a282c15ae5de1732bfd1',
    addparser: '/netvision/rest/webapi/addparser?',
    UpdateRumData: '/netvision/rest/webapi/postconfigui?access_token=563e412ab7f5a282c15ae5de1732bfd1',
    showcheckpoint: '/netvision/rest/webapi/showcheckpoint?access_token=563e412ab7f5a282c15ae5de1732bfd1',
    showpagebaselinedata: '/netvision/rest/webapi/pageBaseline?access_token=563e412ab7f5a282c15ae5de1732bfd1',
    postbaselinedata: '/netvision/rest/webapi/pageBaseline?access_token=563e412ab7f5a282c15ae5de1732bfd1',
    showdomainbaselinedata: '/netvision/rest/webapi/domainBaseline?access_token=563e412ab7f5a282c15ae5de1732bfd1',
    generatebaslinedata: '/netvision/rest/webapi/baseline?access_token=563e412ab7f5a282c15ae5de1732bfd1',
    postdomainbaselinedata: '/netvision/rest/webapi/domainBaseline?access_token=563e412ab7f5a282c15ae5de1732bfd1'

    // getnodedata :'/netvision/rest/webapi/getslavedata?access_token=563e412ab7f5a282c15ae5de1732bfd1'


  };

  // for testing set machine ip,port,protocol
  //  ip = '10.20.0.81';
  //   port = '8001';
  //  ip = '10.20.0.64';
  // port = '4444';


  // port = '8005';
  //  ip = '10.20.0.64';
  // port = '4444';

  ip = '10.20.0.81';
  port = '8003';
  // ip = '10.20.0.102';
  // port = '4432';
  // ip = '10.20.0.66';
  //    port = '8443';
  // ip = '10.20.0.112';
  // port = '4431';
  protocol = 'http';

  // TODO: Move this in a seperate file and add as provider.
  getRequestUrl(path) {
    // uncomment for testing.
    return this.protocol + '://' + this.ip + ':' + this.port + path;
    // return path;
  }

  getMetaData() {
    return this.http.get(this.getRequestUrl(NvhttpService.apiUrls.metadata)).pipe(map((response: Response) => response));
  }


  getDiskData(slaveid) {
    let url = this.getRequestUrl(NvhttpService.apiUrls.showDiskData);
    url += "&slaveid=" + slaveid;
    return this.http.get(url).pipe(map((response: Response) => response));
  }

  getRumDataformultidisk(slaveid) {
    let url = this.getRequestUrl(NvhttpService.apiUrls.showMultiDiskData);
    url += "&slaveid=" + slaveid;
    return this.http.get(url).pipe(map((response: Response[]) => response));
  }

  getRumData(slaveid) {
    let url = this.getRequestUrl(NvhttpService.apiUrls.showRumData);
    url += "&slaveid=" + slaveid;
    return this.http.get(url).pipe(map((response: Response) => response));
  }

  SaveDiskAllocation(diskallocatedata, slaveid) {
    let url = this.getRequestUrl(NvhttpService.apiUrls.SaveDiskAllocationData);
    url += "&slaveid=" + slaveid;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers
    };
    const data = (diskallocatedata);
    return this.http.post(url, data, options).pipe(map((response: Response) => response));

  }

  UpdateParerTablespace(parserdata) {
    let url = this.getRequestUrl(NvhttpService.apiUrls.UpdateParserTableAllocation);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers
    };
    const data = (parserdata);
    return this.http.post(url, data, options).pipe(map((response: Response) => response));

  }


  GetSlaveNodeList() {
    const url = this.getRequestUrl(NvhttpService.apiUrls.getSlaveList);
    return this.http.get(url).pipe(map((response: Response) => response));
  }

  getParsers() {
    const url = this.getRequestUrl(NvhttpService.apiUrls.parsers);
    return this.http.get(url).pipe(map((response: Response) => response));
  }
  postParserData(data) {
    let filters = "&enable=" + data.enable + "&cronexpression=" + encodeURIComponent(data.cronExpression)
      + "&progressinterval=" + data.progressinterval + "&processolddata=" + data.processolddata + "&mladayenable=" + data.mladayenable
      + "&mladayprogressinterval=" + data.mladayprogressinterval + "&mlamonthenable=" + data.mlamonthenable
      + "&mlamonthprogressinterval=" + data.mlamonthprogressinterval + "&mlaweekenable="
      + data.mlaweekenable + "&mlaweekprogressinterval=" + unescape(data.mlaweekprogressinterval) + "&aprof_file=" + data.aprofFile;
    let url = this.getRequestUrl(NvhttpService.apiUrls.addparser) + "access_token=563e412ab7f5a282c15ae5de1732bfd1" + filters;
    return this.http.get(url).pipe(map((response: Response) => response));
  }


  UpdateRumData(rumdata) {
    let url = this.getRequestUrl(NvhttpService.apiUrls.UpdateRumData);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: headers
    }
    let data = JSON.stringify(rumdata);
    return this.http.post(url, data, options).pipe(map((response: Response) => response));
  }


  getCheckpointData() {
    let url = this.getRequestUrl(NvhttpService.apiUrls.showcheckpoint);
    return this.http.get(url).pipe(map((response: Response) => response));
  }

  getPageBaselineData() {
    let url = this.getRequestUrl(NvhttpService.apiUrls.showpagebaselinedata);
    return this.http.get(url).pipe(map((response: Response) => response));
  }

  PostBaselinedata(baselinepostdata) {
    let url = this.getRequestUrl(NvhttpService.apiUrls.postbaselinedata);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers
    };
    const data = (baselinepostdata);
    return this.http.put(url, data, options).pipe(map((response: Response) => response));

  }
  getDomainBaselineData() {
    let url = this.getRequestUrl(NvhttpService.apiUrls.showdomainbaselinedata);
    return this.http.get(url).pipe(map((response: {}) => response));
  }

  generatebaselinedata(postdata) {
    let url = this.getRequestUrl(NvhttpService.apiUrls.generatebaslinedata);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers
    };
    const data = (postdata);
    return this.http.post(url, data, options).pipe(map((response: {}) => response));

  }

  PostDomainBaselinedata(domainbaselinepostdata) {
    let url = this.getRequestUrl(NvhttpService.apiUrls.postdomainbaselinedata);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers
    };
    const data = (domainbaselinepostdata);
    return this.http.put(url, data, options).pipe(map((response: {}) => response));

  }



}
