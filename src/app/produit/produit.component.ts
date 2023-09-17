import { Component } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  title = 'Enfant';
   vue: Boolean = false;
   vue2: Boolean = false;
   isChecked = false;
   filteredItems: string[] = [];
   critereRecherche: string = '';
   toggleCheckbox() {
     this.isChecked = !this.isChecked;
   }

  
 
   
  
   HommeHabit =[
    {marque: 'Cahier Prestique',
    description:'Oumar NIAN',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    },
    {marque: 'Cahier Prestique',
    description:'Oumar NIAN',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    },
    {marque: 'Cahier Prestique',
    description:'Oumar NIAN',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    },
    {marque: 'Cahier Prestique',
    description:'Oumar NIAN',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    },
    {marque: 'Cahier Prestique',
    description:'Oumar NIAN',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    },
    {marque: 'Cahier Prestique',
    description:'Oumar NIAN',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    },
    {marque: 'Cahier Prestique',
    description:'Oumar NIAN',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    },
    {marque: 'Cahier Prestique',
    description:'Oumar NIAN',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    },
   
    {marque: 'Cahier Prestique',
    description:'Oumar NIAN',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    },
    {marque: 'Cahier Prestique',
    description:'Oumar NIAN',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    },
    {marque: 'Cahier Prestique',
    description:'Oumar NIAN',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    },
    {marque: 'Cahier Prestique',
    description:'Oumar NIAN',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    },
    {marque: 'Cahier Prestique',
    description:'Oumar NIAN',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    },
    {marque: 'Cahier Prestique',
    description:'Oumar NIAN',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    },
 
    
    {marque: 'Cahier Prestique',
    description:'Oumar NIAN',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    },
    {marque: 'Cahier Prestique',
    description:'Oumar NIAN',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    },
    {marque: 'Cahier Prestique',
    description:'Oumar NIAN',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    },
    {marque: 'Cahier Prestique',
    description:'Oumar NIAN',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    },
    {marque: 'Jean',
    description:'Jean slim leger',
    prix:'15.000F',
    img:'assets/img/pantalon2.jpg'
    },
    {marque: 'Ceinture',
    description:'Dior en cuir noir',
    prix:'20.000F',
    img:'assets/img/homme2.jpg'
    },
    {marque: 'Vaxe',
    description:'Ne pas oublier d où on vient',
    prix:'15.000F',
    img:'assets/img/femme1.jpg'
    },
    {marque: 'Fashion',
    description:'Confortable-Durable',
    prix:'30.000F',
    img:'assets/img/chaussure10.jpg'
    },
    {marque: 'Lunettes',
    description:'Pour completer votre outfit',
    prix:'20.000F',
    img:'assets/img/lunettes.jpg'
    },
    {marque: 'Pull ',
    description:'Simple et attrayant',
    prix:'15.000F',
    img:'assets/img/pull.jpg'
    },
    
    {marque: 'Cahier Prestique',
    description:'Oumar NIAN',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    },
    {marque: 'Cahier Prestique',
    description:'Oumar NIAN',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    },
    {marque: 'Cahier Prestique',
    description:'Oumar NIAN',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    },
    {marque: 'Cahier Prestique',
    description:'Oumar NIAN',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    },
    {marque: 'Cahier Prestique',
    description:'Oumar NIAN',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    },
    {marque: 'Cahier Prestique',
    description:'Oumar NIAN',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    },
    {marque: 'Cahier Prestique',
    description:'Oumar NIAN',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    },
    {marque: 'Cahier Prestique',
    description:'Oumar NIAN',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    },
    {marque: 'Cahier Prestique',
    description:'Oumar NIAN',
    prix:'15.000F',
    img:'assets/img/enfant.jpg'
    }
  ]
  
modif: string='';
Descrip: string='';
Prixx: string='';
Mark: string='';
Recherche: string='';
Nombre: number=10;
P: boolean=false;




  OnModif(produit: any){
    this.modif= produit.marque
    this.Descrip= produit.description
    this.Prixx= produit.prix
    this.Mark= produit.marque
this.vue=true


  }
  OnRetour(){
    if(this.modif){
      this.modif=''
      this.vue=false
   
    }
  }
  OnSupprimer(index: any){
    if (index !== -1) {
      // Utilisation de la méthode splice pour supprimer l'élément du tableau
      this.HommeHabit.splice(index, 1);
     
    }
  }


  transform(items: any[], critereRecherche: string): any[] {
    // Vérifier si la liste d'items et le critère de recherche sont définis
    if (!items || !critereRecherche) {
      return items; // Retourner la liste d'items sans filtrage si l'un des deux est vide
    }

    // Filtrer les items en fonction du critère de recherche
    critereRecherche = critereRecherche.toLowerCase(); // Convertir le critère de recherche en minuscules pour la comparaison insensible à la casse
    return items.filter(item => item.nom.toLowerCase().includes(critereRecherche)); // Filtrer les items dont le nom contient le critère de recherche
  }
}
