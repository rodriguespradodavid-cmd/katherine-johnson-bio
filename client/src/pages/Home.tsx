import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDot,
  Copy,
  ExternalLink,
  GraduationCap,
  Medal,
  Orbit,
  Quote,
  Rocket,
  ScrollText,
  Sparkles,
  Users,
} from "lucide-react";

const timeline = [
  {
    year: "1918",
    title: "Uma curiosidade sem tamanho",
    text: "Katherine nasce em White Sulphur Springs, na Virgínia Ocidental. Desde criança, gostava de contar tudo ao redor — passos, pratos e objetos.",
    icon: CalendarDays,
  },
  {
    year: "1937",
    title: "Formação em matemática",
    text: "Aos 18 anos, conclui com distinção a graduação em Matemática e Francês na West Virginia State College.",
    icon: GraduationCap,
  },
  {
    year: "1939",
    title: "Abrindo portas",
    text: "É escolhida como uma das três primeiras pessoas negras a integrar a pós-graduação da West Virginia University.",
    icon: Sparkles,
  },
  {
    year: "1953",
    title: "O caminho até Langley",
    text: "Começa a trabalhar como “computador humano” no centro de pesquisa da NACA, organização que daria origem à NASA.",
    icon: Orbit,
  },
  {
    year: "1961–1962",
    title: "Os números que ganharam o céu",
    text: "Calcula a trajetória de Freedom 7 e confere pessoalmente as equações usadas na missão Friendship 7, de John Glenn.",
    icon: Rocket,
  },
  {
    year: "1969",
    title: "Rumo à Lua",
    text: "Contribui para os cálculos que ajudaram a sincronizar o módulo lunar e o módulo de comando do programa Apollo.",
    icon: CircleDot,
  },
  {
    year: "1986",
    title: "Uma carreira inteira na pesquisa",
    text: "Aposenta-se depois de 33 anos no Langley Research Center, deixando 26 relatórios de pesquisa como autora ou coautora.",
    icon: ScrollText,
  },
  {
    year: "2015–2019",
    title: "Reconhecimento em vida",
    text: "Recebe a Presidential Medal of Freedom e, depois, a Congressional Gold Medal — duas das maiores honrarias civis dos Estados Unidos.",
    icon: Medal,
  },
];

const achievements = [
  {
    number: "01",
    title: "Freedom 7",
    eyebrow: "1961 · Projeto Mercury",
    text: "Katherine calculou a trajetória da missão de Alan Shepard, o primeiro voo espacial tripulado dos Estados Unidos.",
    icon: Rocket,
  },
  {
    number: "02",
    title: "Friendship 7",
    eyebrow: "1962 · A confiança nos cálculos",
    text: "John Glenn pediu que ela conferisse à mão os números do computador antes de sua missão orbital. “Se ela disser que está certo, eu vou.”",
    icon: CircleDot,
  },
  {
    number: "03",
    title: "Apollo e além",
    eyebrow: "1960–1980 · Pesquisa aplicada",
    text: "Ela também trabalhou em cálculos do programa Apollo, do ônibus espacial e do satélite que se tornaria o Landsat.",
    icon: Orbit,
  },
];

const curiosities = [
  {
    label: "01",
    title: "Ela contava tudo",
    text: "A própria Katherine dizia que contava os passos até a estrada, os degraus da igreja e até o número de pratos que lavava.",
  },
  {
    label: "02",
    title: "“Computador” era uma profissão",
    text: "Antes dos computadores eletrônicos, mulheres matemáticas eram chamadas de “computadoras” porque faziam cálculos complexos manualmente.",
  },
  {
    label: "03",
    title: "Uma história que virou filme",
    text: "A trajetória de Katherine aparece em Hidden Figures, filme de 2016 que ajudou a apresentar essas cientistas a novas gerações.",
  },
];

const sources = [
  { label: "NASA · Biografia", href: "https://www.nasa.gov/centers-and-facilities/langley/katherine-johnson-biography/" },
  { label: "NASA Science · Entrevista", href: "https://science.nasa.gov/people/katherine-johnson/" },
  { label: "Smithsonian · Friendship 7", href: "https://airandspace.si.edu/stories/editorial/glenn-johnson-hidden-figures" },
];

export default function Home() {
  const [members, setMembers] = useState(["Nome da pessoa 1", "Nome da pessoa 2", "Nome da pessoa 3", "Nome da pessoa 4"]);
  const [copied, setCopied] = useState(false);

  const groupMessage = useMemo(() => {
    const filledMembers = members.filter((member) => member.trim().length > 0);
    return `Grupo: ${filledMembers.join(", ")} | Pessoa escolhida: Katherine Johnson`;
  }, [members]);

  const updateMember = (index: number, value: string) => {
    setMembers((current) => current.map((member, memberIndex) => (memberIndex === index ? value : member)));
  };

  const copyGroupMessage = async () => {
    try {
      await navigator.clipboard.writeText(groupMessage);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="site-shell">
      <div className="top-ruler" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Katherine Johnson — início">
          <span className="brand-mark"><Orbit size={18} strokeWidth={1.8} /></span>
          <span><strong>KJ</strong><small>ÓRBITA 01</small></span>
        </a>
        <nav className="site-nav" aria-label="Navegação principal">
          <a href="#historia">história</a>
          <a href="#feitos">feitos</a>
          <a href="#legado">legado</a>
          <a href="#grupo">grupo</a>
        </nav>
        <a className="header-index" href="#fontes">[ fontes ]</a>
      </header>

      <main id="top">
        <section className="hero-section section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> BIOGRAFIA · TECNOLOGIA E INFORMAÇÃO</div>
            <h1>A matemática que ajudou a colocar pessoas <em>no espaço.</em></h1>
            <p className="hero-lede">Conheça Katherine Johnson: uma mulher negra que transformou precisão, coragem e curiosidade em trajetórias que mudaram a história.</p>
            <a className="scroll-cta" href="#historia"><span>explorar trajetória</span><ArrowDownRight size={19} /></a>
          </div>

          <div className="hero-portrait-wrap">
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
            <div className="orbit-satellite" aria-hidden="true"><span /></div>
            <div className="hero-portrait-frame">
              <img src="/images/katherine-johnson-at-work.jpeg" alt="Katherine Johnson trabalhando em uma mesa de cálculos" />
              <span className="image-stamp">NASA / LANGLEY<br />ARCHIVE · 1960s</span>
            </div>
            <div className="portrait-caption"><span>01</span><span>uma vida<br />em órbita</span></div>
          </div>
        </section>

        <section className="facts-strip section-wrap" aria-label="Resumo biográfico">
          <div className="fact"><strong>1918—2020</strong><span>vida dedicada ao conhecimento</span></div>
          <div className="fact"><strong>33 anos</strong><span>no Langley Research Center</span></div>
          <div className="fact"><strong>26</strong><span>relatórios de pesquisa</span></div>
          <div className="fact"><strong>2</strong><span>grandes honrarias civis</span></div>
        </section>

        <section id="historia" className="story-section section-wrap section-grid">
          <div className="section-kicker"><span>01</span><span>história</span></div>
          <div className="story-intro">
            <h2>Antes de os computadores calcularem, <em>Katherine já calculava.</em></h2>
            <p>Filha de um agricultor e de uma educadora, Katherine cresceu em uma época em que o acesso de pessoas negras à educação era limitado. Seu pai percorreu quilômetros para que os filhos pudessem continuar estudando.</p>
            <p>O talento para a matemática a levou da sala de aula ao centro de pesquisa de Langley. Lá, ela fez parte de uma equipe de mulheres negras que transformava números em decisões para a aviação e, depois, para a exploração espacial.</p>
          </div>
          <aside className="quote-card">
            <Quote size={24} className="quote-icon" />
            <blockquote>“Se ela disser que estão bons, então estou pronto para partir.”</blockquote>
            <p>— John Glenn, sobre a conferência dos cálculos de Katherine</p>
            <span className="quote-rule" />
            <small>confiança construída<br />com precisão</small>
          </aside>
        </section>

        <section className="timeline-section section-wrap">
          <div className="section-heading-row">
            <div><div className="section-kicker"><span>02</span><span>linha do tempo</span></div><h2>Uma trajetória que <em>abriu caminhos.</em></h2></div>
            <p className="heading-note">Da infância curiosa aos cálculos que guiaram missões históricas.</p>
          </div>
          <div className="timeline-list">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className="timeline-item" key={item.year}>
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-node"><Icon size={17} strokeWidth={1.8} /></div>
                  <div className="timeline-copy"><h3>{item.title}</h3><p>{item.text}</p></div>
                  <span className="timeline-index">0{index + 1}</span>
                </article>
              );
            })}
          </div>
        </section>

        <section id="feitos" className="achievements-section section-wrap">
          <div className="section-heading-row light-heading">
            <div><div className="section-kicker"><span>03</span><span>principais feitos</span></div><h2>Números que ganharam <em>o céu.</em></h2></div>
            <p className="heading-note">O trabalho de Katherine conectou pessoas, máquinas e lugares a milhares de quilômetros de distância.</p>
          </div>
          <div className="achievement-grid">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <article className="achievement-card" key={achievement.number}>
                  <div className="card-topline"><span>{achievement.number}</span><Icon size={20} strokeWidth={1.6} /></div>
                  <p className="card-eyebrow">{achievement.eyebrow}</p>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.text}</p>
                  <span className="card-arrow"><ChevronRight size={17} /></span>
                </article>
              );
            })}
          </div>
          <div className="equation-band" aria-label="Equação decorativa">
            <span>trajectory / courage / precision</span><strong>∴</strong><span>the future is calculated by many hands</span><strong>✦</strong><span>NASA · 1961—1986</span>
          </div>
        </section>

        <section id="legado" className="legacy-section section-wrap section-grid">
          <div className="section-kicker"><span>04</span><span>legado</span></div>
          <div className="legacy-copy">
            <h2>Quando uma porta se abre, <em>outras pessoas passam por ela.</em></h2>
            <p>Katherine não foi importante apenas porque seus cálculos funcionaram. Ela também mostrou que inteligência e criatividade não têm uma única aparência — e que o futuro da tecnologia precisa de muitas vozes.</p>
            <div className="legacy-pillars">
              <div><span>01</span><h3>Precisão</h3><p>Transformar perguntas difíceis em respostas verificáveis.</p></div>
              <div><span>02</span><h3>Representatividade</h3><p>Ocupar espaços onde poucas mulheres negras eram vistas.</p></div>
              <div><span>03</span><h3>Colaboração</h3><p>Construir descobertas com equipes e conhecimento compartilhado.</p></div>
            </div>
          </div>
          <div className="legacy-aside"><div className="big-star">✦</div><p>“Faça o seu melhor. Mas goste do que faz. Assim, você fará o seu melhor.”</p><small>— Katherine Johnson</small></div>
        </section>

        <section className="curiosities-section section-wrap">
          <div className="section-heading-row">
            <div><div className="section-kicker"><span>05</span><span>curiosidades</span></div><h2>Mais do que uma história de <em>números.</em></h2></div>
          </div>
          <div className="curiosities-grid">
            {curiosities.map((curiosity) => <article className="curiosity-card" key={curiosity.label}><span>{curiosity.label}</span><h3>{curiosity.title}</h3><p>{curiosity.text}</p></article>)}
          </div>
        </section>

        <section id="grupo" className="group-section section-wrap">
          <div className="group-intro">
            <div className="section-kicker"><span>06</span><span>nosso grupo</span></div>
            <h2>Agora é a vez de <em>vocês.</em></h2>
            <p>Edite os campos com os nomes do grupo. Depois, copie a frase pronta e publique no comentário aberto da turma.</p>
            <div className="chosen-person"><span>pessoa escolhida</span><strong>Katherine Johnson</strong><small>não repetir entre os grupos</small></div>
          </div>
          <div className="group-form-card">
            <div className="form-header"><Users size={21} /><div><strong>integrantes</strong><span>até 4 pessoas</span></div></div>
            <div className="member-fields">
              {members.map((member, index) => <label key={index}><span>0{index + 1}</span><input value={member} onChange={(event) => updateMember(index, event.target.value)} aria-label={`Nome da pessoa ${index + 1}`} /></label>)}
            </div>
            <div className="copy-preview"><span>comentário pronto</span><p>{groupMessage}</p></div>
            <button className="copy-button" type="button" onClick={copyGroupMessage}>{copied ? <><Check size={17} /> copiado</> : <><Copy size={17} /> copiar comentário</>}</button>
          </div>
        </section>

        <section id="fontes" className="sources-section section-wrap">
          <div className="sources-label"><ScrollText size={19} /><span>fontes consultadas</span></div>
          <div className="sources-list">{sources.map((source) => <a href={source.href} target="_blank" rel="noreferrer" key={source.href}>{source.label}<ExternalLink size={14} /></a>)}</div>
        </section>
      </main>

      <footer className="site-footer section-wrap"><div className="footer-brand"><span className="brand-mark"><Orbit size={18} strokeWidth={1.8} /></span><span><strong>KJ</strong><small>ÓRBITA 01</small></span></div><p>Uma biografia escolar sobre ciência, tecnologia e caminhos que continuam se abrindo.</p><span className="footer-year">© 2026 · feito para aprender</span></footer>
    </div>
  );
}
