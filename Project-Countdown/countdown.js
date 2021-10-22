const spanItems = document.querySelectorAll('#time > div > span'),
      data_scadenza = new Date(2022, 06, 04, 6, 00, 0), //anno, mese, giorno, ore, minuti, secondi
      ms_scadenza = data_scadenza.getTime(), //tempo in millisecondi da epoca Unix
      ms_in_giorno = 24 * 60 * 60 * 1000,
      ms_in_ora = 60 * 60 * 1000,
      ms_in_minuto = 60 * 1000;

function countdown() {
    const ms_adesso = new Date().getTime(),
          ms_rimanenti = ms_scadenza - ms_adesso;

    let giorni = ~~(ms_rimanenti / ms_in_giorno),
        ore = ~~((ms_rimanenti % ms_in_giorno) / ms_in_ora),
        minuti = ~~((ms_rimanenti % ms_in_ora) / ms_in_minuto),
        secondi = ~~((ms_rimanenti % ms_in_minuto) / 1000),
        time = [giorni,ore,minuti,secondi];

    if(ms_rimanenti<=0) {
	clearInterval(countdownInterval);
        return;
    }
    spanItems.forEach((span, index) => {
	span.textContent = time[index];
    });
}

const countdownInterval = setInterval(countdown, 1000);
countdown(); //Prima invocazione manuale, dato che setInterval invoca per la prima volta la funzione dopo 1 secondo
