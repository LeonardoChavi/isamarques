// TABS
    document.querySelectorAll('.tab-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
        document.querySelectorAll('.tab-panel').forEach(function(p) { p.classList.remove('active'); });
        btn.classList.add('active');
        document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
      });
    });

    // CHECKBOXES
    document.querySelectorAll('#bookingList input[type="checkbox"]').forEach(function(cb) {
      cb.addEventListener('change', function() {
        cb.closest('.booking-item').classList.toggle('checked', cb.checked);
      });
    });

    // WHATSAPP FORM
    function enviarWhatsApp() {
      var nome = document.getElementById('f-nome').value.trim();
      var tel  = document.getElementById('f-tel').value.trim();
      var obs  = document.getElementById('f-obs').value.trim();
      if (!nome || !tel) { alert('Por favor, preencha seu nome e número de WhatsApp.'); return; }
      var servicos = [];
      document.querySelectorAll('#bookingList input[type="checkbox"]:checked').forEach(function(c) { servicos.push(c.value); });
      var msg = 'Olá Isabela! 😊%0A%0AMeu nome é *' + encodeURIComponent(nome) + '* e gostaria de agendar.%0A%0AMeu WhatsApp: *' + encodeURIComponent(tel) + '*';
      if (servicos.length > 0) { msg += '%0A%0AServiços de interesse:%0A' + servicos.map(function(s) { return '✦ ' + encodeURIComponent(s); }).join('%0A'); }
      if (obs) msg += '%0A%0AComentários: ' + encodeURIComponent(obs);
      window.open('https://wa.me/5512981981418?text=' + msg, '_blank');
    }