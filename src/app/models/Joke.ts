// interfaccia/modello barzelletta e valori di alcuni campi dell'oggetto
export type categoria =
  | 'Programming'
  | 'Spooky'
  | 'Dark'
  | 'Pun'
  | 'Misc'
  | 'Christmas';
export type tipo = 'twopart' | 'single';
// interfaccia/modello barzelletta
export interface IJoke {
  error: boolean;
  category: categoria;
  type: tipo;
  setup?: string; // opzionale a seconda del type=twopart
  delivery?: string; // opzionale a seconda del type=twopart
  joke?: string; // opzionale a seconda del type=single
  flags: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  };
  safe: boolean;
  id: number;
  lang: string;
}
