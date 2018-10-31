import { Component, OnInit } from '@angular/core';
import { Candies } from "src/app/models/candies";
import { CandyListService} from "src/app/services/candy-list.service";
@Component({
  selector: 'app-liste-bonbons',
  templateUrl: './liste-bonbons.component.html',
  styleUrls: ['./liste-bonbons.component.css']
})
export class ListeBonbonsComponent implements OnInit {
	
	public collectedClass:string;
	public bonbonTape;
	public idStock:string;
	public showDetail:boolean = false;

  public allCandies = new Array();
	public infoCandy: Candies = new Candies();

	public apiUrl = "https://fr-en.openfoodfacts.org/category/candies.json";
	public pageTwo = "https://fr-en.openfoodfacts.org/category/candies/2.json";
	public pageThree = "https://fr-en.openfoodfacts.org/category/candies/3.json";
	public pageFour = "https://fr-en.openfoodfacts.org/category/candies/4.json";
	public pageFive = "https://fr-en.openfoodfacts.org/category/candies/5.json";
	
	public pageSix = "https://fr-en.openfoodfacts.org/category/candies/6.json";
	public pageSeven = "https://fr-en.openfoodfacts.org/category/candies/7.json";
	public pageEight = "https://fr-en.openfoodfacts.org/category/candies/8.json";
	public pageNine = "https://fr-en.openfoodfacts.org/category/candies/9.json";
	public pageTen = "https://fr-en.openfoodfacts.org/category/candies/10.json";

	public pageEleven = "https://fr-en.openfoodfacts.org/category/candies/11.json";

	constructor( private candyService: CandyListService) {}

	ngOnInit() : void{
//	Premiere Page ======================================================================
		this.candyService.getAllCandies(this.apiUrl).subscribe(
			(dataCandy: any) => { 
				this.infoCandy = dataCandy;

				for(let i = 0; i < 20 ; i += 1 ){
					this.allCandies[i] = 
						{
							'productName': this.infoCandy.productName[i] ,
							'candyId': this.infoCandy.candyId[i] ,
							'imgUrl': this.infoCandy.imgUrl[i],
							'collected': false 
						}	
				}
			})
//	Deuxieme Page ======================================================================
		this.candyService.getAllCandies(this.pageTwo).subscribe(
			(dataCandy: any) => { 
				this.infoCandy = dataCandy;

				for(let i = 0; i < 20 ; i += 1 ){
					this.allCandies[i + 20] = 
						{
							'productName': this.infoCandy.productName[i] ,
							'candyId': this.infoCandy.candyId[i] ,
							'imgUrl': this.infoCandy.imgUrl[i],
							'collected': false 
						}	
				}
			})
//	Troisieme Page ======================================================================
		this.candyService.getAllCandies(this.pageThree).subscribe(
			(dataCandy: any) => { 
				this.infoCandy = dataCandy;

				for(let i = 0; i < 20 ; i += 1 ){
					this.allCandies[i + 40] = 
						{
							'productName': this.infoCandy.productName[i] ,
							'candyId': this.infoCandy.candyId[i] ,
							'imgUrl': this.infoCandy.imgUrl[i],
							'collected': false 
						}	
				}
				console.log(this.allCandies)
			})
//	Quatrieme Page ======================================================================
		this.candyService.getAllCandies(this.pageFour).subscribe(
			(dataCandy: any) => { 
				this.infoCandy = dataCandy;

				for(let i = 0; i < 20 ; i += 1 ){
					this.allCandies[i + 60] = 
						{
							'productName': this.infoCandy.productName[i] ,
							'candyId': this.infoCandy.candyId[i] ,
							'imgUrl': this.infoCandy.imgUrl[i],
							'collected': false 
						}	
				}
				console.log(this.allCandies)
			})
//	Cienquieme Page ======================================================================
		this.candyService.getAllCandies(this.pageFive).subscribe(
			(dataCandy: any) => { 
				this.infoCandy = dataCandy;

				for(let i = 0; i < 20 ; i += 1 ){
					this.allCandies[i + 80] = 
						{
							'productName': this.infoCandy.productName[i] ,
							'candyId': this.infoCandy.candyId[i] ,
							'imgUrl': this.infoCandy.imgUrl[i],
							'collected': false 
						}	
				}
			})
//	Sixieme Page ======================================================================
		this.candyService.getAllCandies(this.pageSix).subscribe(
			(dataCandy: any) => { 
				this.infoCandy = dataCandy;

				for(let i = 0; i < 20 ; i += 1 ){
					this.allCandies[i + 100] = 
						{
							'productName': this.infoCandy.productName[i] ,
							'candyId': this.infoCandy.candyId[i] ,
							'imgUrl': this.infoCandy.imgUrl[i],
							'collected': false 
						}	
				}
			})
//	Septieme Page ======================================================================
this.candyService.getAllCandies(this.pageSeven).subscribe(
	(dataCandy: any) => { 
		this.infoCandy = dataCandy;

		for(let i = 0; i < 20 ; i += 1 ){
			this.allCandies[i + 120] = 
				{
					'productName': this.infoCandy.productName[i] ,
					'candyId': this.infoCandy.candyId[i] ,
					'imgUrl': this.infoCandy.imgUrl[i],
					'collected': false 
				}	
		}
	})




//	Huitiem Page ======================================================================
		this.candyService.getAllCandies(this.pageEight).subscribe(
			(dataCandy: any) => { 
				this.infoCandy = dataCandy;

				for(let i = 0; i < 20 ; i += 1 ){
					this.allCandies[i + 140] = 
						{
							'productName': this.infoCandy.productName[i] ,
							'candyId': this.infoCandy.candyId[i] ,
							'imgUrl': this.infoCandy.imgUrl[i],
							'collected': false 
						}	
				}
			})
//	Neuviem Page ======================================================================
		this.candyService.getAllCandies(this.pageNine).subscribe(
			(dataCandy: any) => { 
				this.infoCandy = dataCandy;

				for(let i = 0; i < 20 ; i += 1 ){
					this.allCandies[i + 160] = 
						{
							'productName': this.infoCandy.productName[i] ,
							'candyId': this.infoCandy.candyId[i] ,
							'imgUrl': this.infoCandy.imgUrl[i],
							'collected': false
						}	
				}
			})
//	Dixieme Page ======================================================================
		this.candyService.getAllCandies(this.pageTen).subscribe(
			(dataCandy: any) => { 
				this.infoCandy = dataCandy;

				for(let i = 0; i < 20 ; i += 1 ){
					this.allCandies[i + 180] = 
						{
							'productName': this.infoCandy.productName[i] ,
							'candyId': this.infoCandy.candyId[i] ,
							'imgUrl': this.infoCandy.imgUrl[i],
							'collected': false 
						}	
				}
			})
//	Onzieme Page ======================================================================
this.candyService.getAllCandies(this.pageEleven).subscribe(
	(dataCandy: any) => { 
		this.infoCandy = dataCandy;

		for(let i = 0; i < 20 ; i += 1 ){
			this.allCandies[i + 180] = 
				{
					'productName': this.infoCandy.productName[i] ,
					'candyId': this.infoCandy.candyId[i] ,
					'imgUrl': this.infoCandy.imgUrl[i],
					'collected': false 
				}	
		}
	})
	}

	public displayDetails (id) {
		if (this.showDetail) {
			this.showDetail = false;
		}
		else {
			this.showDetail = true;
		}
		console.log(id)
		this.idStock = id;
		return id
	}
	
	public updateCandyStatus(param_boolean){
		
		if (param_boolean) {
			return this.collectedClass="fas fa-check";
		}
		else {
			return this.collectedClass="fas fa-times";
		}
	}


}
