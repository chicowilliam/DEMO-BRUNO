const menuHighlights = [
  {
    day: 'Quarta',
    date: '20/05',
    dish: 'Arroz de açafrão, frango assado com ervas, salada da horta e brownie de café',
  },
  {
    day: 'Quinta',
    date: '21/05',
    dish: 'Risoto de limão-siciliano, peixe grelhado, legumes tostados e mousse de chocolate',
  },
  {
    day: 'Sexta',
    date: '22/05',
    dish: 'Nhoque de batata baroa, ragú de cogumelos, rúcula fresca e torta de doce de leite',
  },
]

const schedule = [
  { date: '21/05 • 19:00', title: 'Happy Hour Blue Moon: DJ Robinho', price: 'R$ 7' },
  { date: '22/05 • 20:00', title: 'DJ Amplis', price: 'R$ 7' },
  { date: '23/05 • 20:00', title: 'DJ Seu Muniz', price: 'R$ 7' },
  { date: '24/05 • 13:00', title: 'Contraponto de Encontro: Brás Cubas', price: 'R$ 40 ou livro' },
]

const upcomingEvents = [
  {
    title: 'Oficina de Carimbos com Lívia Cristina LC',
    when: '21/05/2026 • 16:00',
    description:
      'Uma experiência prática de 2h que conecta livro, arte e criação manual. Vagas limitadas para manter o formato intimista.',
  },
  {
    title: 'Savassi Festival: Nova Onda + Trinka (Portugal)',
    when: '25/05/2026 • 20:00',
    description:
      'Uma noite em diálogo entre música afro-brasileira e sonoridades lusófonas, trazendo repertório autoral e atmosfera de celebração.',
  },
  {
    title: 'Matheus Avelar Quarteto + Quarteto Crescente',
    when: '26/05/2026 • 19:30',
    description:
      'Duas formações instrumentais da nova cena mineira no mesmo couvert, com forte presença de jazz contemporâneo.',
  },
]

const news = [
  'Manual de Conduta do Café com Letras em versão preliminar para discussão interna.',
  'Nova temporada do projeto Blue Moon com residência de DJs convidados.',
  'Programação especial do Savassi Festival ocupando toda a semana.',
]

const gallery = [
  'Noites de jazz no salão principal',
  'Mesas externas na Savassi',
  'Lançamentos e encontros literários',
  'Clube de leitura Contraponto',
  'DJ sets de quinta e sexta',
  'Brunch cultural de domingo',
]

function App() {
  return (
    <div className="min-h-screen bg-linho text-grafite">
      <div className="ambient-shape ambient-shape-left" aria-hidden="true" />
      <div className="ambient-shape ambient-shape-right" aria-hidden="true" />

      <header className="sticky top-0 z-30 border-b border-grafite/10 bg-linho/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <a href="#inicio" className="font-display text-xl tracking-wide md:text-2xl">
            CAFE COM LETRAS
          </a>
          <nav className="hidden gap-6 text-sm uppercase tracking-widest md:flex">
            <a href="#cardapio" className="hover:text-vinho">Cardapio</a>
            <a href="#programacao" className="hover:text-vinho">Programacao</a>
            <a href="#eventos" className="hover:text-vinho">Eventos</a>
            <a href="#noticias" className="hover:text-vinho">Noticias</a>
            <a href="#sobre" className="hover:text-vinho">Sobre</a>
            <a href="#contato" className="hover:text-vinho">Contato</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="mx-auto grid max-w-6xl gap-8 px-4 pb-14 pt-14 md:grid-cols-2 md:px-8 md:pt-20">
          <div className="space-y-6 reveal-up">
            <span className="inline-block rounded-full border border-vinho/30 bg-vinho/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-vinho">
              Demo conceitual 2026
            </span>
            <h1 className="font-display text-4xl leading-tight md:text-6xl">
              Cultura, gastronomia e noite viva no coracao da Savassi.
            </h1>
            <p className="max-w-xl text-base text-grafite/80 md:text-lg">
              Estrutura inspirada em referenciais premium de lifestyle: narrativa forte, ritmo visual, blocos editoriais e foco em experiencia mobile-first.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#eventos" className="rounded-full bg-vinho px-6 py-3 text-sm font-semibold uppercase tracking-wider text-linho transition hover:bg-vinho/90">
                Ver eventos
              </a>
              <a href="#contato" className="rounded-full border border-grafite/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider transition hover:border-vinho hover:text-vinho">
                Reservar mesa
              </a>
            </div>
          </div>

          <div className="reveal-up animation-delay-1 flex flex-col gap-8 md:gap-12">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-vinho mb-2">Destaque da semana</p>
              <h2 className="font-display text-3xl md:text-4xl leading-tight max-w-lg">Savassi Festival ocupando a casa com jazz contemporâneo.</h2>
            </div>
            <div className="flex flex-wrap gap-8 text-lg">
              <div>
                <span className="block text-xs uppercase tracking-widest text-grafite/60">Dom a qui</span>
                <span className="block font-display text-2xl">12h - 22h</span>
                <span className="block text-sm text-grafite/70">Presencial</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-grafite/60">Sex e sáb</span>
                <span className="block font-display text-2xl">12h - 23h</span>
                <span className="block text-sm text-grafite/70">Casa aberta até tarde</span>
              </div>
            </div>
          </div>
        </section>

        <section id="cardapio" className="mx-auto max-w-4xl px-4 py-14 md:px-8">
          <h2 className="font-display text-3xl md:text-4xl mb-8">Cardápio da semana</h2>
          <div className="space-y-8">
            {menuHighlights.map((item) => (
              <div key={item.date} className="flex flex-col md:flex-row md:items-baseline md:gap-8">
                <span className="text-xs uppercase tracking-widest text-vinho min-w-[120px]">{item.day} • {item.date}</span>
                <span className="font-medium text-lg leading-relaxed">{item.dish}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="programacao" className="mx-auto max-w-4xl px-4 py-14 md:px-8">
          <h2 className="font-display text-3xl md:text-4xl mb-8">Programação</h2>
          <div className="space-y-6">
            {schedule.map((item) => (
              <div key={item.title} className="flex flex-col md:flex-row md:items-baseline md:gap-8">
                <span className="text-xs uppercase tracking-widest text-vinho min-w-[140px]">{item.date}</span>
                <span className="font-medium text-lg leading-relaxed">{item.title}</span>
                <span className="text-sm text-grafite/60 ml-2">{item.price}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="eventos" className="mx-auto max-w-4xl px-4 py-14 md:px-8">
          <h2 className="font-display text-3xl md:text-4xl mb-8">Eventos em destaque</h2>
          <div className="space-y-10">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-widest text-vinho">{event.when}</span>
                <span className="font-display text-2xl md:text-3xl leading-snug">{event.title}</span>
                <span className="text-base text-grafite/80 max-w-2xl">{event.description}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="noticias" className="mx-auto max-w-4xl px-4 py-14 md:px-8">
          <h2 className="font-display text-3xl md:text-4xl mb-8">Notícias</h2>
          <ul className="space-y-6">
            {news.map((item) => (
              <li key={item} className="text-base leading-relaxed border-l-4 border-vinho pl-4">{item}</li>
            ))}
          </ul>
        </section>

        <section id="sobre" className="mx-auto max-w-4xl px-4 py-14 md:px-8">
          <h2 className="font-display text-3xl md:text-4xl mb-8">Sobre o Café</h2>
          <div className="space-y-6">
            <p className="leading-relaxed text-grafite/80">
              Fundado em 1996, o Café com Letras se consolidou como um polo cultural em Belo Horizonte. Esta versão demo prioriza narrativa editorial, clareza de navegação e uma atmosfera visual mais sofisticada para valorizar marca, história e programação.
            </p>
            <div className="flex flex-wrap gap-6">
              {gallery.map((item) => (
                <span key={item} className="text-xs uppercase tracking-widest text-grafite/60 bg-linho px-3 py-2 rounded-full shadow-sm">{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="mx-auto max-w-4xl px-4 pb-20 pt-14 md:px-8">
          <h2 className="font-display text-3xl md:text-4xl mb-8">Contato</h2>
          <div className="flex flex-col md:flex-row gap-12 text-base">
            <div>
              <span className="block text-xs uppercase tracking-widest text-grafite/60 mb-2">Endereço</span>
              <span className="block">Rua Antonio de Albuquerque, 781<br />Savassi - Belo Horizonte</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest text-grafite/60 mb-2">Telefones</span>
              <span className="block">(31) 98424-4285<br />(31) 2555-1610</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest text-grafite/60 mb-2">Horários</span>
              <span className="block">Presencial: 12h - 22h/23h<br />Delivery: 11h - 21h30</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
