import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

const GEOLOCATION_ERRORS = {
	'errors.location.unsupportedBrowser': 'Browser does not support location services',
	'errors.location.permissionDenied': 'You have rejected access to your location',
	'errors.location.positionUnavailable': 'Unable to determine your location',
	'errors.location.timeout': 'Service timeout has been reached'
};

@Injectable({
  providedIn: 'root'
})
export class LocationService {
	
	public getLocation(geoLocationOptions?: any): Observable<any> {
		geoLocationOptions = geoLocationOptions || { timeout: 5000 };
		return Observable.create(observer => {
			if (window.navigator && window.navigator.geolocation) {
				window.navigator.geolocation.getCurrentPosition(
					(position) => {
						observer.next(position);
						observer.complete();
					},
					(error) => {
						switch (error.code) {
							case 1:
								observer.error(GEOLOCATION_ERRORS['errors.location.permissionDenied']);
								break;
							case 2:
								observer.error(GEOLOCATION_ERRORS['errors.location.positionUnavailable']);
								break;
							case 3:
								observer.error(GEOLOCATION_ERRORS['errors.location.timeout']);
								break;
						}
					},
					geoLocationOptions);
			} else {
				observer.error(GEOLOCATION_ERRORS['errors.location.unsupportedBrowser']);
			}
		});



	}

}

export let geolocationServiceInjectables: Array<any> = [
	{ provide: LocationService, useClass: LocationService }
];

/*
///////////////////////////////////////

// Recuperation des donnée de localisation 
	public getPositionInfo(lon, lat): Observable < Location > {

	let apiUrl = "https://api-adresse.data.gouv.fr/reverse/?lon=" + lon + "&lat=" + lat;
	return this.serviceHttp.get(apiUrl).pipe(
		map(
			(data: any) => {
				let adressInfo: Location = new Location();
				adressInfo.city = data.features[0]['properties']['city'];
				adressInfo.street = data.features[0]['properties']['street'];
				adressInfo.region = data.features[0]['properties']['context'];
				adressInfo.adresse = data.features[0]['properties']['label'];
				adressInfo.cityCode = data.features[0]['properties']['citycode'];

				return adressInfo;
			}))
}


*/
//////////////////////////////////////////////////