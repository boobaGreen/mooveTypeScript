import { Citta, Mezzo, Utente } from "./class ";
import {
  ICitta,
  IMezzo,
  IUtente,
  TMetodoPagamento,
  TMezzo,
  TStatoMezzo,
} from "./types";

// Istanzia oggetti Mezzo per rappresentare bici, scooter e monopattini elettrici
const bici1: IMezzo = new Mezzo(TMezzo.bici, "bici1", TStatoMezzo.Disponibile);
const scooter1: IMezzo = new Mezzo(TMezzo.scooter, "scoo1");
const monopattino1: IMezzo = new Mezzo(TMezzo.monopattino, "mono1");

// Istanzia oggetti Utente per rappresentare gli utenti del servizio
const utente1: IUtente = new Utente(
  "Mario",
  "Rossi",
  "mario.rossi@example.com",
  TMetodoPagamento.CC
);
const utente2: IUtente = new Utente(
  "Luca",
  "Bianchi",
  "luca.bianchi@example.com",
  TMetodoPagamento.GooglePay
);

// Crea un'istanza della classe Citta per una città in cui Moove opera
const milano: ICitta = new Citta("Milano");

// Aggiungi i mezzi istanziati all'elenco dei mezzi disponibili nella città
milano.aggiungiMezzo(bici1); // Output: bici B12345 aggiunto a Milano.
milano.aggiungiMezzo(scooter1); // Output: scooter S12345 aggiunto a Milano.
milano.aggiungiMezzo(monopattino1); // Output: monopattino M12345 aggiunto a Milano.

// Testa la logica di prenotazione dei mezzi da parte degli utenti
utente1.prenotaMezzo(bici1); // Output: bici B12345 assegnato a Mario Rossi.
utente2.prenotaMezzo(bici1); // Output: bici B12345 non è disponibile. (già prenotato)
utente2.prenotaMezzo(scooter1); // Output: scooter S12345 assegnato a Luca Bianchi.

// Testa l'aggiunta di nuovi mezzi alla città
const monopattino2: IMezzo = new Mezzo(TMezzo.monopattino, "mono2");
milano.aggiungiMezzo(monopattino2); // Output: monopattino M54321 aggiunto a Milano.

// Verifica dello stato dei mezzi e dell'elenco dei mezzi disponibili nella città
console.log(milano.mezziDisponibili); // Output: Array di mezzi disponibili nella città di Milano.
console.log(bici1.stato); // Output: "in uso"
console.log(scooter1.stato); // Output: "in uso"
console.log(monopattino1.stato); // Output: "disponibile"
console.log(monopattino2.stato); // Output: "disponibile"
console.log(utente1); // Output: Dati utente Mario Rossi.)
