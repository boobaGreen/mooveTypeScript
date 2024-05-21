// Enum metodo di pagamento
export enum TMetodoPagamento {
  CC = 0,
  PayPal = 1,
  ApplePay = 2,
  GooglePay = 3,
}
// Enum Tipo mezzo
export enum TMezzo {
  bici = 0,
  scooter = 1,
  monopattino = 2,
}
// Enum Stato mezzo
export enum TStatoMezzo {
  Disponibile = 0,
  InUso = 1,
}

// Definizione dell'interfaccia IMezzo
export interface IMezzo {
  tipo: TMezzo;
  ID: string;
  stato: TStatoMezzo;

  assegnaUtente(utente: IUtente): void;
}

// Definizione dell'interfaccia IUtente
export interface IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamentoPreferito: TMetodoPagamento;

  prenotaMezzo(mezzo: IMezzo): void;
}

// Definizione dell'interfaccia ICitta
export interface ICitta {
  nome: string;
  mezziDisponibili: IMezzo[];

  aggiungiMezzo(mezzo: IMezzo): void;
}
