import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{
  
  @Input()
  titulo: string =''

  @Input()
  preco: string ='' 

  @Input()
  conteudo1: string =''

  @Input()
  conteudo2: string =''

  @Input()
  conteudo3: string =''

  @Input()
  background: string=''

  @Input()
  colort:string=''

  @Input()
  btnc:string=''

  @Input()
  precoc:string=''
 
  @Output()
  ODoClicarBotao: EventEmitter<any> = new EventEmitter <any>()//que tipo de adodos vamos retirnar ao emitir o evento
   //quando eu emitir esse evento, eu posso retornar para ele qualquer coisa, a primeira parte é só a tipagem, a segunda é o valor (que é um novo objeto)
  
   ClicarBotao(): void{
   this.ODoClicarBotao.emit()
  }//gatiho para poder emitir esse evento, metodo personalizadp
   //tenho que chamar a prorpiedade
   //emit- para emitir o evento: propriedade especial

  //crirar o metodo de executar o alert
  } 


