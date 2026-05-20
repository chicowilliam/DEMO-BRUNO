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

const mediaAssets = {
  facade: {
    src: new URL('./assets/hero.png', import.meta.url).href,
    type: 'image',
    label: 'Fachada e identidade da casa',
  },
  prato: {
    src: new URL('./assets/prato vegano.jpg', import.meta.url).href,
    type: 'image',
    label: 'Prato vegano',
  },
  calcada: {
    src: new URL('./assets/calçada do cafe.mp4', import.meta.url).href,
    type: 'video',
    label: 'Calcada do cafe',
  },
  carpaccio: {
    src: new URL('./assets/video do carpaccio.mp4', import.meta.url).href,
    type: 'video',
    label: 'Video do carpaccio',
  },
}

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
      <header className="sticky top-0 z-30 border-b border-grafite/15 bg-linho/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 md:px-10">
          <a href="#inicio" className="font-display text-xl tracking-[0.18em] md:text-2xl">
            CAFE COM LETRAS
          </a>
          <nav className="hidden gap-8 text-[11px] uppercase tracking-[0.24em] md:flex">
            <a href="#cardapio" className="opacity-75 transition hover:opacity-100">Cardapio</a>
            <a href="#programacao" className="opacity-75 transition hover:opacity-100">Programacao</a>
            <a href="#sobre" className="opacity-75 transition hover:opacity-100">Sobre</a>
            <a href="#contato" className="opacity-75 transition hover:opacity-100">Contato</a>
          </nav>
        </div>
      </header>

      <main className="pb-24">
        <section id="inicio" className="mx-auto max-w-7xl px-4 pb-20 pt-14 md:px-10 md:pt-20">
          <p className="editorial-ticker">CAFE COM LETRAS • SAVASSI • CULTURA + GASTRONOMIA • CAFE COM LETRAS • SAVASSI • CULTURA + GASTRONOMIA</p>

          <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div className="reveal-up">
              <p className="section-kicker">Belo Horizonte desde 1996</p>
              <h1 className="font-display text-[2.8rem] leading-[0.95] tracking-tight md:text-[6.1rem]">
                O encontro entre literatura, cozinha e noites que ficam na memoria.
              </h1>
            </div>

            <div className="reveal-up animation-delay-1 space-y-8">
              <p className="max-w-md text-base leading-relaxed text-grafite/80">
                Uma versao com direcao visual editorial: ritmo de revista, tipografia marcante, narrativa autoral e fluxo continuo entre cardapio, agenda e historia.
              </p>
              <div className="space-y-3 text-sm uppercase tracking-[0.2em]">
                <div className="flex items-center justify-between border-b border-grafite/15 pb-3">
                  <span className="text-grafite/60">Dom a qui</span>
                  <span className="font-semibold">12h - 22h</span>
                </div>
                <div className="flex items-center justify-between border-b border-grafite/15 pb-3">
                  <span className="text-grafite/60">Sex e sab</span>
                  <span className="font-semibold">12h - 23h</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cardapio" className="mx-auto max-w-7xl px-4 py-16 md:px-10">
          <div className="editorial-grid">
            <div>
              <p className="section-kicker">Cardapio</p>
              <h2 className="font-display text-4xl leading-tight md:text-6xl">Sabores sazonais com acento autoral.</h2>
            </div>
            <div className="space-y-8 pt-2">
              {menuHighlights.map((item) => (
                <article key={item.date} className="border-t border-grafite/15 pt-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-vinho">{item.day} • {item.date}</p>
                  <p className="mt-3 text-lg leading-relaxed">{item.dish}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="programacao" className="mx-auto max-w-7xl px-4 py-16 md:px-10">
          <div className="editorial-grid">
            <div>
              <p className="section-kicker">Programacao</p>
              <h2 className="font-display text-4xl leading-tight md:text-6xl">Uma casa em movimento, todos os dias.</h2>
            </div>
            <div className="space-y-7 pt-2">
              {schedule.map((item) => (
                <div key={item.title} className="border-t border-grafite/15 pt-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-vinho">{item.date}</p>
                  <p className="mt-2 text-xl leading-snug">{item.title}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-grafite/60">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="noticias" className="mx-auto max-w-7xl px-4 py-16 md:px-10">
          <div className="editorial-grid">
            <div>
              <p className="section-kicker">Noticias</p>
              <h2 className="font-display text-4xl leading-tight md:text-6xl">Comunicados e movimentos da casa.</h2>
            </div>
            <ul className="space-y-7 pt-2">
              {news.map((item) => (
                <li key={item} className="border-t border-grafite/15 pt-5 text-lg leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="sobre" className="mx-auto max-w-7xl px-4 py-16 md:px-10">
          <div className="editorial-grid">
            <div>
              <p className="section-kicker">Sobre</p>
              <h2 className="font-display text-4xl leading-tight md:text-6xl">Um polo cultural no coracao da Savassi.</h2>
            </div>
            <div className="space-y-8 pt-2">
              <p className="leading-relaxed text-grafite/80">
                Fundado em 1996, o Cafe com Letras se consolidou como ponto de convergencia entre gastronomia, literatura e musica. Esta demo unifica o conteudo existente em uma linguagem mais sofisticada e contemporanea.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {gallery.map((item) => (
                  <p key={item} className="border-t border-grafite/15 pt-3 text-[11px] uppercase tracking-[0.2em] text-grafite/65">{item}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="fotos" className="mx-auto max-w-7xl px-4 py-16 md:px-10">
          <p className="section-kicker">Assets</p>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">Galeria do cafe.</h2>
          <p className="mt-4 max-w-2xl text-grafite/75">
            Midias ja conectadas diretamente da pasta assets para apresentar atmosfera, pratos e movimento da casa.
          </p>

          <div className="media-composition mt-10">
            <figure className="photo-slot media-lead">
              <video className="media-frame media-frame-lead" src={mediaAssets.carpaccio.src} autoPlay loop muted playsInline controls={false} />
              <figcaption>{mediaAssets.carpaccio.label}</figcaption>
            </figure>

            <div className="media-side-stack">
              <figure className="photo-slot">
                <img className="media-frame media-frame-tall" src={mediaAssets.facade.src} alt={mediaAssets.facade.label} loading="lazy" />
                <figcaption>{mediaAssets.facade.label}</figcaption>
              </figure>
              <figure className="photo-slot">
                <video className="media-frame" src={mediaAssets.calcada.src} autoPlay loop muted playsInline controls={false} />
                <figcaption>{mediaAssets.calcada.label}</figcaption>
              </figure>
            </div>
          </div>

          <div className="media-strip mt-6">
            <figure className="photo-slot media-strip-item">
              <img className="media-frame media-frame-wide" src={mediaAssets.prato.src} alt={mediaAssets.prato.label} loading="lazy" />
              <figcaption>{mediaAssets.prato.label}</figcaption>
            </figure>
            <p className="media-note">
              Fluxo visual recomendado: abrir com movimento do preparo, apresentar o espaco e fechar com assinatura de prato.
            </p>
          </div>
        </section>

        <section id="contato" className="mx-auto max-w-7xl px-4 pt-16 md:px-10">
          <div className="border-t border-grafite/20 py-12">
            <p className="section-kicker">Contato</p>
            <h2 className="font-display text-4xl leading-tight md:text-6xl">Rua Antonio de Albuquerque, 781.</h2>
            <div className="mt-10 grid gap-8 text-sm uppercase tracking-[0.16em] text-grafite/70 md:grid-cols-3">
              <p>Telefones<br /><span className="normal-case tracking-normal text-base text-grafite">(31) 98424-4285<br />(31) 2555-1610</span></p>
              <p>Presencial<br /><span className="normal-case tracking-normal text-base text-grafite">Dom a qui: 12h as 22h<br />Sex e sab: 12h as 23h</span></p>
              <p>Delivery<br /><span className="normal-case tracking-normal text-base text-grafite">Seg a dom: 11h as 21h30</span></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
