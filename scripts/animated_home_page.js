
  /*   `מבינים,  מנתחים,  מגדירים,

    מציעים,  מחליטים,  מיישמים,
    
    מקשיבים,  מגיבים,  מעדכנים...

   ברוכים הבאים ל AVS` */
    
   new TypeIt("#main_animation", {
    speed: 100,
    cursor: false,
  })
    .type("מבינים", { delay: 100 })
    .break()
    .type("מנתחים", { delay: 100 })
    .break()
    .type("מגדירים", { delay: 100 })
    .break()
    .type("מציעים", { delay: 100 })
    .break()
    .type("מחליטים", { delay: 100 })
    .break()
    .type("מיישמים", { delay: 100 })
    .break()
    .type("מקשיבים", { delay: 100 })
    .break()
    .type("מגיבים", { delay: 100 })
    .break()
    .type("מעדכנים", { delay: 100 })
    .break()
    .break()
    .type("ברוכים הבאים ל AVS", { delay: 100 })

    /* .move(-8, { delay: 100 })
    .type("s", { delay: 400 })
  
    .move(null, { to: "START", instant: false, delay: 300 })
    .move(1, { delay: 200 })
    .delete(1)
    .type("T", { delay: 225 })
    .pause(200)
    .move(2, { instant: true })
    .pause(200)
    .move(5, { instant: true })
    .move(5, { delay: 200 })
    .type("a", { delay: 350 })
    .move(null, { to: "END" })
    .type("le typing utlity")
    .move(-4, { delay: 150 })
    .type("i")
    .move(null, { to: "END" })
    .type(' on the <span class="place">internet</span>', { delay: 400 })
    .delete(".place", { delay: 800, instant: true })
    .type('<em><strong class="font-semibold">planet.</strong></em>', {
      speed: 100,
    }) */
    .go();