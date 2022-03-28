import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {
  /* no construtor mostro o tipo de objeto que quero injetar no meu componente, neste caso Router */
  /* não basta apenas ter o nome do atributo (router), mais também o tipo, no caso o Router importado */
  constructor(
    private router: Router,
    private headerService: HeaderService
    ) {
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routerUrl: '/products'
    }
  }

  ngOnInit(): void {
  }

  /* método (ou função) criado para evento de clique, usando o atributo router que chama o import Router */
  navigateToProductCreate(): void {
    /* console.log('Navegando...') */
    this.router.navigate(['/products/create'])
  }

}
