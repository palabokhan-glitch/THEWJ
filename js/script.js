document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('.form-success');
      if (note) {
        note.style.display = 'block';
      }
      form.reset();
    });
  }

  var faqItems = document.querySelectorAll('.faq-item h3');
  faqItems.forEach(function (item) {
    item.addEventListener('click', function () {
      var body = item.nextElementSibling;
      if (body) {
        body.style.display = body.style.display === 'none' ? 'block' : 'none';
      }
    });
  });
});
