import { useState, useEffect } from "react";
import { DragCloseDrawer } from "./DragCloseDrawer";

export default function Footer() {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <footer
      id="footer"
      className="bg-augen-dark text-white font-light mt-[40vh] lg:mt-[80vh]"
    >
      <div className="mx-4 md:mx-8 py-12 w-auto">
        {/* Pages and Social Media Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 w-full">
          {/* Pages Column */}
          <div className="w-full">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-white text-lg font-semibold tracking-wide">
                Follow us
              </span>
            </div>
            <ul className="space-y-4 text-left">
              <li>
              <a
                className="hover:text-augen-blue transition-colors duration-300 tracking-wide cursor-pointer relative z-10"
                href="https://www.instagram.com/ukibidrygin/" 
              >
                Instagram
              </a>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-white text-lg tracking-wide font-semibold">
                Contact us
              </span>
            </div>
            <ul className="space-y-4 text-left">
              <li>
                <span className="tracking-wide w-4 h-4 font-mono">
                  +39 3477192135
                </span>
              </li>
              <li>
                <span className="tracking-wide w-4 h-4">example@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo and Policies Section */}
        <div className="border-gray-400 border-t-[0.001rem] pt-8 flex flex-col md:flex-row md:items-center justify-between w-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-sm font-light w-full md:w-auto text-left">
            <button
              className="hover:text-augen-blue transition-colors duration-300 tracking-wide cursor-pointer relative z-10 text-left"
              onClick={() => setOpen((prev) => !prev)}
            >
              Privacy Policy
            </button>
            <span className="text-augen-gray ml-0 md:ml-4 tracking-wide">
              Italy, Venice
            </span>
          </div>
        </div>
      </div>
      <DragCloseDrawer open={open} setOpen={setOpen}>
      <div className="mx-auto max-w-5xl space-y-4 text-white font-mono text-sm">
        <h2 className="text-xl font-bold text-neutral-200">
          Privacy Policy
        </h2>
Informativa privacy e cookie policy, ai sensi dell’art 13 del Regolamento Generale per la Protezione
dei Dati UE 2016/679 (GDPR), in materia di protezione dei dati personali.
1. Titolare del trattamento
La DITTA, con sede legale in ___________, via _____________ n. ____ è titolare del
trattamento dei dati personali acquisiti attraverso il proprio sito web ed è costantemente
impegnata proteggere le informazioni personali dei propri utenti.
In questa pagina si descrivono le modalità generali del trattamento dei dati personali degli
utenti del sito e dei cookies.
L’informativa è resa solo per questo sito e non anche per altri siti web eventualmente consultati
dall’utente tramite link.
Il Titolare del Trattamento (di seguito Titolare) e/o il Responsabile della Protezione dei Dati
possono essere contattati scrivendo un’email all’indirizzo ________@_____.it oppure per via
telefonica al servizio di assistenza clienti al numero ____________.
2. Modalità del trattamento
Questo documento è stato redatto ai sensi dell’art. 13 del Regolamento UE 2016/679 (di seguito
GDPR), e riepiloga le modalità generali del trattamento dei tuoi dati personali e come le relative
informazioni (e.g. nome, cognome, indirizzo, indirizzo e-mail, numero di telefono, etc.) vengono
raccolte e gestite quando si utilizza il sito.
Le informazioni ed i dati forniti o altrimenti acquisiti nell'ambito dell’utilizzo dei servizi di DITTA,
saranno oggetto di trattamento nel rispetto delle disposizioni del predetto GDPR e degli obblighi
di riservatezza dei clienti che ispirano l'attività di DITTA.
Secondo le norme del GDPR, i trattamenti effettuati da DITTA saranno improntati ai principi di
liceità, correttezza, trasparenza, limitazione delle finalità e della conservazione, minimizzazione
dei dati acquisiti, esattezza, integrità e riservatezza.
Ti raccomandiamo di comunicare solo dati aggiornati, pertinenti e non eccedenti le specifiche
finalità del trattamento. Eventuali dati non necessari saranno immediatamente cancellati o
anonimizzati.
Per quanto attiene ai dati di navigazione, i sistemi informatici e le procedure software che
governano il funzionamento di questo sito acquisiscono automaticamente, nel corso del loro
normale esercizio, alcuni dati relativi ai protocolli di comunicazione di Internet ,ai fini del
corretto funzionamento dei servizi offerti, della risoluzione di eventuali problemi tecnici e della
sicurezza informatica.
In questa categoria rientrano i seguenti dati :
• indirizzi IP;
• data e ora in cui sono state ricevute le richieste al server;
• il codice numerico indicante lo stato della risposta data dal server (buon fine, errore, ecc.);
• indirizzo URI/URL della pagina di provenienza (referrer);
• stringa di riconoscimento del dispositivo che accede al sito (user agent);
3. Finalità del trattamento
Ad eccezione dei dati di navigazione, si precisa che per la sola consultazione del sito (in
“modalità vetrina”) nessun dato personale degli utenti viene in proposito acquisito.Tuttavia l’invio facoltativo, esplicito e volontario di dati forniti dall’utente, mediante moduli e
form sul sito ovvero mediante posta elettronica agli indirizzi indicati su questo sito, comporta la
successiva acquisizione dell’indirizzo del mittente, necessario per rispondere alle richieste,
nonché degli eventuali altri dati personali volontariamente comunicati.
In tal caso i dati personali dei clienti verranno trattati per le seguenti finalità:
a. studio delle tue scelte di consumo (profilazione).
I dati qualitativi e quantitativi degli acquisti effettuati e delle aree di interesse, qualora tu ci
abbia fornito espressamente il consenso, potranno essere trattati dal Titolare per l’analisi
degli acquisti nonché per adattare il più possibile la nostra offerta commerciale al tuo profilo
ed alle tue necessità;
b. marketing diretto (promozione).
Utilizziamo i dati raccolti, qualora tu ci abbia fornito espressamente il consenso, per
informarti riguardo ad attività promozionali, commerciali e pubblicitarie che potrebbero
interessarti;
c. protezione del sito (sicurezza informatica).
I dati di navigazione serviranno anche per evitare possibili azioni o minacce da parte di utenti
malevoli (hacker, bot, spam, ecc.) nonché per l’accertamento di responsabilità in caso di
ipotetici reati informatici ai danni del sito.
4. Base giuridica del trattamento
La base giuridica del trattamento si fonda sull’esecuzione di contratti di cui il cliente è parte
attiva ovvero sull’esecuzione di misure precontrattuali adottate su richiesta.
Il trattamento potrà effettuarsi anche per adempiere ad obblighi di legge ai quali è soggetto il
Titolare del trattamento ovvero nei casi in cui ricorrano condizioni di liceità del trattamento
determinate dall’art. 6 del GDPR e successive modifiche e integrazioni, anche introdotte dallo
Stato.
5. Informazioni a garanzia di un trattamento corretto e trasparente
Ai sensi dell’art. 13 comma 2 del GDPR, si forniscono al cliente le seguenti ulteriori informazioni
necessarie per garantire un trattamento corretto e trasparente:
a. per tenere traccia degli ordini e di ogni altra operazione registrata sul profilo personale, i dati
personali saranno conservati per il periodo necessario a garantire l’erogazione dei servizi
richiesti o per l’esercizio di diritti (quali, ad esempio, il diritto di garanzia sui prodotti
acquistati o l’adempimento di doveri verso lo stato, come quelli di natura fiscale);
b. il cliente ha il diritto:
(1) di chiedere al Titolare del trattamento l’accesso ai dati personali e la rettifica o la
cancellazione degli stessi o la limitazione dei trattamenti che lo riguardano o di opporsi al
loro trattamento, oltre al diritto alla portabilità dei dati;
(2) di proporre reclamo all’autorità di controllo ai sensi dell’art. 77 GDPR (il Garante per la
Protezione dei Dati Personali, in Italia);
c. Il conferimento dei dati personali è facoltativo, tuttavia:
(1) il mancato conferimento dei dati personali richiesti all’atto della registrazione al Portale
determinerà l’impossibilità di accedervi per effettuare acquisti e fruire dei servizi, delle
promozioni e dei programmi fedeltà annessi;(2) il mancato conferimento dei dati relativi alle tue aree di interesse determinerà
semplicemente l'impossibilità di trattare tali dati per le finalità di analisi delle tue scelte
di consumo (profilazione) e di marketing (promozione);
d. il trattamento dei dati per tutte le finalità sopra indicate avverrà sia con strumenti manuali,
sia sfruttando hardware e software dedicati.
Nel caso tu acconsenta al trattamento dei dati anche per le finalità di “profilazione” e di
“promozione”, saranno impiegati ulteriori processi decisionali automatizzati finalizzati
esclusivamente ad adattare il più possibile la nostra offerta commerciale al tuo profilo e alle tue
necessità.
6. Ambito di diffusione e comunicazione dei dati personali
Nessuno dei dati personali forniti sarà diffuso. I tuoi dati personali potranno essere comunicati
ai seguenti destinatari e categorie di destinatari nella misura in cui ciò sia strettamente
necessario al perseguimento delle finalità come sopra specificate:
a. DITTA, con sede legale in ___________, via _____________ n. ____
b. soggetti terzi della cui opera il Titolare si avvale per la fornitura di servizi, comunque connessi
al perseguimento delle finalità di cui alla presente informativa, fra cui l’invio delle
comunicazioni promozionali e le spedizioni dei beni;
c. spedizionieri e società di trasporto, che elaborano i dati necessari per organizzare ed
effettuare la spedizione, la consegna e la restituzione dei prodotti acquistati sul nostro sito;
d. operatori specializzati che elaborano i dati necessari per gestire e mantenere gli applicativi ed
i web server; per completare, gestire e monitorare gli ordini di acquisto per i prodotti venduti
sul nostro sito; per operare aggiornamenti e miglioramenti del sito, valutare l’utilizzo ed
apportare miglioramenti al funzionamento del sito e altri servizi necessari per la gestione del
portale di vendita e fornitura dei servizi correlati;
e. società proprietarie dei software di cui si avvale il Portale per l’esecuzione di alcune sue
funzioni, come i pagamenti elettronici (e.g.: SETEFI, Paypal);
f. fornitori di servizi di assistenza tecnica sui beni che hai acquistato.
App DITTA per dispositivi mobile
Nell’ambito delle finalità di cui sopra, i dati personali da te forniti possono essere trattati anche
attraverso l’installazione e l’utilizzo dell’App DITTA per dispositivi mobile.
Per la loro fruizione, alcune funzionalità dell’App richiedono il tuo consenso per accedere a
risorse presenti nel tuo apparecchio quali, ad esempio, foto, rubrica telefonica, sensore GPS.
L’App utilizzerà queste risorse ed i dati eventualmente ricavati esclusivamente in locale sul tuo
dispositivo per dare esecuzione alle tue richieste.
7. Diritti degli utenti
I diritti dei clienti sono disciplinati dagli articoli 15 e seguenti del GDPR.
In qualunque momento potrai rivolgerti al Titolare ed al suo Responsabile della Protezione dei
Dati per avere conferma che sia o meno in corso un trattamento di dati personali e, in caso
affermativo, ottenerne l’accesso, la copia ed esercitare i diritti previsti dall’art. 15 GDPR. Inoltre,
potrai integrarli e rettificarli ai sensi dell’art. 16 GDPR, ottenerne la cancellazione ai sensi
dell’art. 17 GDPR, ottenere la limitazione del trattamento ai sensi dell’art. 18 GDPR, ottenere in
un formato strutturato, di uso comune e leggibile da dispositivo automatico, i tuoi dati personali
secondo le modalità dell’art. 20 GDPR.8. Entrata in vigore della privacy policy e comunicazione di modifiche ed aggiornamenti
La presente privacy policy è in vigore dal __/__/2025.
DITTA si riserva di modificarne o semplicemente aggiornarne il contenuto, in parte o
completamente, anche in considerazione degli aggiornamenti della normativa applicabile.
Sarai informato di tali variazioni non appena verranno introdotte ed esse saranno vincolanti non
appena pubblicate sul sito.
Ti invitiamo quindi a visitare con regolarità questa sezione per prendere cognizione della più
recente ed aggiornata versione della privacy policy in modo da essere sempre aggiornato sui
dati raccolti e sul loro uso.</div>
      </DragCloseDrawer>
    </footer>
  );
}
