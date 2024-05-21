import {
  ICitta,
  IMezzo,
  IUtente,
  TMetodoPagamento,
  TMezzo,
  TStatoMezzo,
} from "./types";

// Implementazione della classe Mezzo
export class Mezzo implements IMezzo {
  tipo: TMezzo;
  ID: string;
  stato: TStatoMezzo;

  constructor(
    tipo: TMezzo,
    ID: string,
    stato: TStatoMezzo = TStatoMezzo.Disponibile
  ) {
    this.tipo = tipo;
    this.ID = ID;
    this.stato = stato;
  }

  assegnaUtente(utente: IUtente): void {
    if (this.stato === TStatoMezzo.Disponibile) {
      this.stato = TStatoMezzo.InUso;
      console.log(
        `${this.tipo} ${this.ID} assegnato a ${utente.nome} ${utente.cognome}.`
      );
    } else {
      console.log(`${this.tipo} ${this.ID} non disponibile.`);
    }
  }
}

// Implementazione della classe Utente
export class Utente implements IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamentoPreferito: TMetodoPagamento;

  constructor(
    nome: string,
    cognome: string,
    email: string,
    metodoPagamentoPreferito: TMetodoPagamento
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.metodoPagamentoPreferito = metodoPagamentoPreferito;
  }

  prenotaMezzo(mezzo: IMezzo): void {
    if (mezzo.stato === TStatoMezzo.Disponibile) {
      mezzo.assegnaUtente(this);
      console.log(
        `${mezzo.tipo} ${mezzo.ID} assegnato a ${this.nome} ${this.cognome}.`
      );
    } else {
      console.log(`${mezzo.tipo} ${mezzo.ID} non è disponibile.`);
    }
    console.log("**********************************");
  }
}

// Implementazione della classe Citta
export class Citta implements ICitta {
  nome: string;
  mezziDisponibili: IMezzo[];

  constructor(nome: string) {
    this.nome = nome;
    this.mezziDisponibili = [];
  }

  aggiungiMezzo(mezzo: IMezzo): void {
    this.mezziDisponibili.push(mezzo);
    console.log(`${mezzo.tipo} ${mezzo.ID} aggiunto a ${this.nome}.`);
  }
}
