module.exports = {

  // Antwort wenn ein neue User den Lunch Roulette Channel betritt
  enter_channel: [
    'Moin Moin',
    'Hallo junger Padawan',
    'Ein neue Mitstreiter... oder soll ich Mitesser sagen?'
  ],

  // Antwort wenn ein User den Lunch Roulette Channel verlässt
  leave_channel: [
    'Shit, wir haben dich verloren',
    'War das Absicht oder zwingt dich die Regierung hier auszusteigen?'
  ],

  // Einleitende Antwort für die Auflistung der Kommandos
  help: [
    'Viel zu lernen du noch hast junger Padawan!',
    'Ich spreche nur meine Sprache und selbst damit hab ich schon Probleme!'
  ],

  // Nachricht an alle Lunch Roulette Channel Mitglieder, wenn ein neues Roulette Spiel gestartet wird.
  init: [
    'Hey, ein neuer Tag ein neues Lunch Roulet. Wer ist dabei?' ,
    'Mann ich hab jetzt schon Hunger wie ein Bär nach dem Winterschlaf. Die Kugel im Lunchroulet rollt... wer ist dabei?' ,
    'Und täglich grüßt das Murmeltier... ääh... Lunch Roulette. Wer macht mit?'
  ],

  // Antwort an einen User, wenn er zu einem zuvor gestarteten Lunch Roulette Spiel beitritt
  join: [
    'Herzlichen Glückwunsch... du bist im Recall' ,
    'Vergiss niemals: Aus großer Macht, folgt große Verantwortung! Du bist dabei :-)' ,
    'Guten Morgen, und guten Appetit... Oh, und falls wir uns nicht mehr sehen, guten Tag, guten Abend und gute Nacht!' ,
    'Warum denn so ernst? Na gut das kann ich auch: Hiermit teilen ich ihnen offiziell mit, das sie am Lunch Roulette teilnehmen.',
    'Lord Vader... äääh #{res.user.name}, euer Besuch ehrt uns! Welch unerwartetes Vergnügen.'
  ],

  // Antwort, wenn ein Teilnehmer das Lunch Roulette Spiel vor der Auslosung verlässt
  leave: [
    'Oh wie schade... ich habe dann heute leider keine Rose für dich!' ,
    'Digga... du bist raus!' ,
    'Ok, du bist raus, aber hüte dich vor der dunklen Seite der Macht.' ,
    'Es gibt Gute Zeiten und Schlechte Zeiten... diesmal sind es bei dir schlechte Zeiten' ,
    'Was ist denn mit Dir heute? Therapie schlecht gelaufen?' ,
    'Na gut, aber eigentlich gilt hier Regel 3: Komm nie auf die unendlich dumme Idee weg zu laufen, denn ich hab 6 kleine Freunde, die alle schneller laufen können als du...'
  ],

  // Nachricht in den Channel vom Bot wie der aktuelle Status des Spiels ist
  status: [
    'Alles läuft nach Wunsch. Wir sind N Luncher und es sind noch X Minuten bis zur Auslosung.'
  ],

  // Kurz vor der Auslosung wird eine Nachricht an alle Channel Mitglieder geschickt um noch an der Auslosung teilzunehmen
  reminder: [
    'Alles was einen Anfang hat, hat auch ein Ende! In kürze beginnt die Lunch Roulette Auslosung. Letzte Chance mitzumachen...'
  ],

  // Nachricht in den Channel, das die Auslosung nun gestartet wird
  roulette: [
    'Rien ne va plus... Nichts geht mehr! Die Auslosung wird gestartet...' ,
    'Die Jury zieht sich nun zur Auslosung zurück... Wir gehen in der Zwischenzeit in die Werbung...'
  ]
}
