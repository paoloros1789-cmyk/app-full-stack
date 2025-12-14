import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlaskService } from './services/flask-service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  profilo: any = {}; //dove salveremo il JSON ricevuto
  constructor(private flaskService: FlaskService) {}
ngOnInit(): void {
//quando il componente si avvia chiama il service
this.flaskService.getProfilo().subscribe((dati) => {
  this.profilo = dati; //assegna il JSON ricevuto
  console.log("Dati arrivati:", this.profilo);
    });
  }

  export class App implements OnInit {
      lista = signal<any[]>([]);
    nuovoElemento = signal('');
constructor(private spesa: SpesaService) {}
ngOnInit() {
  this.caricaLista();
}

caricaLista() {
  this.spesa.getLista().subscribe((dati: any) => {
  this.lista.set(dati);
  });
}
aggiungi() {
  const val = this.nuovoElemento().trim();
  if (!val) return;
  this.spesa.aggiungiElemento(val).subscribe(() => {
  this.nuovoElemento.set('');
  this.caricaLista();
    });
  }
}