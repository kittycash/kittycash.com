import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';
import { environment } from '@env/environment';
import { DeviceDetectorService } from 'ngx-device-detector';

const routes = {
  releases: () => `https://api.github.com/repos/kittycash/wallet/releases`
};


@Injectable()
export class DownloadService {

  constructor(private httpClient: HttpClient,
              private deviceService: DeviceDetectorService) { }

  getDownloadLink():Promise<string> {
    return new Promise<string>((resolve, reject) => {
      let url = 'https://github.com/kittycash/wallet/releases';

      //Download all releases from github
       this.getReleases()
        .subscribe((releases: any) => { 
          //Get the latest release (/latest doesn't work with pre-releases)
          if (releases && releases.length > 0)
          {
            let latest = releases[0];

            //Detect the operating system
            let deviceInfo = this.deviceService.getDeviceInfo();
            
            switch(deviceInfo.os) {
              case 'mac':
                  //Find a dmg
                  url = this.find_ext(latest, "dmg");
                  break;
              case 'windows':
                  url = this.find_ext(latest, "exe");
                  break;
              case 'linux':
                  url = this.find_ext(latest, "AppImage");
                  break;
              default:
                  url = 'https://github.com/kittycash/wallet/releases';
              }

              resolve(url);
          }
          else
          {
            resolve(url);
          }
        });
    });
  }
  
  private find_ext(latest:any, desired_ext:string)
  {
    for (let i = 0; i < latest.assets.length; i++)
    {
      let re = /(?:\.([^.]+))?$/;
      let ext = re.exec(latest.assets[i].name)[1];

      if (ext.toLowerCase() == desired_ext.toLowerCase())
      {
        return latest.assets[i].browser_download_url;
      }
    }

    return false;
  }
  private getReleases(): Observable<object> {
    return this.httpClient
      .get(routes.releases());
  }

}
