import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ArrowDownRight, ArrowUpRight, Check, ChevronDown, Instagram, Menu, MessageCircle, MoveUpRight, Play, Quote, ShieldCheck, Sparkles, X } from 'lucide-react';
import { SITE_CONFIG, benefits } from './config';

const queryClient = new QueryClient();
const openWhatsApp = () => window.open(SITE_CONFIG.whatsappUrl, '_blank', 'noopener,noreferrer');
const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

function Header() {
  const [open, setOpen] = useState(false);
  const links = [['Início', 'inicio'], ['Sobre', 'sobre'], ['Planos', 'planos'], ['E-book', 'ebook'], ['FAQ', 'faq']];
  return (
    <header className="sticky top-0 z-40 border-b border-[hsl(var(--foreground)/.08)] bg-[hsl(var(--background)/.88)] backdrop-blur-xl">
      <div className="container-page flex h-[76px] items-center justify-between">
        <button data-testid="button-brand" onClick={() => goTo('inicio')} className="flex items-center gap-2 text-left">
          <img src={SITE_CONFIG.brandLogo} alt="Giga Kitty" className="h-10 w-[128px] object-contain object-left" />
          <span className="hidden leading-none sm:block"><strong className="block text-[15px] tracking-[-.02em]">{SITE_CONFIG.specialistName}</strong><small className="mono text-[8px] uppercase tracking-[.14em] text-[hsl(var(--muted-foreground))]">fitness & rotina</small></span>
        </button>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {links.map(([label, id]) => <button data-testid={`link-nav-${id}`} key={id} onClick={() => goTo(id)} className="text-[11px] font-semibold uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--primary))]">{label}</button>)}
        </nav>
        <button data-testid="button-header-whatsapp" onClick={openWhatsApp} className="btn btn-ink hidden min-h-[42px] px-4 text-[10px] md:inline-flex">Quero ser do time Giga Kitty <ArrowUpRight size={14} /></button>
        <button data-testid="button-mobile-menu" className="grid h-10 w-10 place-items-center rounded-full border border-[hsl(var(--foreground)/.12)] md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>{open ? <X size={19} /> : <Menu size={19} />}</button>
      </div>
      {open && <nav className="border-t border-[hsl(var(--foreground)/.08)] bg-[hsl(var(--background))] px-5 py-4 md:hidden" aria-label="Navegação mobile">
        {links.map(([label, id]) => <button data-testid={`link-mobile-${id}`} key={id} onClick={() => { goTo(id); setOpen(false); }} className="block w-full border-b border-[hsl(var(--foreground)/.08)] py-3 text-left text-xs font-semibold uppercase tracking-[.12em]">{label}</button>)}
        <button data-testid="button-mobile-whatsapp" onClick={openWhatsApp} className="btn btn-primary mt-4 w-full">Falar com a especialista <ArrowUpRight size={15} /></button>
      </nav>}
    </header>
  );
}

function Hero() {
  return <section id="inicio" className="relative overflow-hidden bg-[hsl(var(--background))]">
    <div className="container-page grid min-h-[680px] items-center gap-10 py-14 md:grid-cols-[.92fr_1.08fr] md:py-20">
      <div className="relative z-10 reveal">
        <div className="eyebrow mb-7 flex items-center gap-3 text-[hsl(var(--primary))]"><span className="h-px w-8 bg-[hsl(var(--primary))]" /> consultoria fitness personalizada</div>
        <h1 data-testid="text-hero-headline" className="max-w-[610px] text-[clamp(3.35rem,7vw,6.8rem)] leading-[.9] tracking-[-.06em]">Seu corpo muda quando sua rotina <em className="serif font-normal text-[hsl(var(--primary))]">começa</em> a mudar.</h1>
        <p className="mt-7 max-w-[480px] text-[17px] leading-7 text-[hsl(var(--muted-foreground))]">Tenha acompanhamento, estratégia e direcionamento para treinar melhor, organizar sua rotina e evoluir de forma mais consistente.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <button data-testid="button-hero-consultoria" onClick={openWhatsApp} className="btn btn-primary">Quero conhecer a consultoria <ArrowUpRight size={15} /></button>
          <button data-testid="button-hero-especialista" onClick={openWhatsApp} className="btn btn-outline">Falar com a especialista <MessageCircle size={15} /></button>
        </div>
        <div className="mt-7 flex items-center gap-3 text-xs text-[hsl(var(--muted-foreground))]"><MessageCircle size={15} className="text-[hsl(var(--primary))]" /> Atendimento personalizado pelo WhatsApp</div>
        <div className="mt-12 flex items-center gap-4 border-t border-[hsl(var(--foreground)/.11)] pt-5">
          <span className="text-[12px] tracking-[.22em] text-[hsl(var(--primary))]">★★★★★</span>
          <span className="text-xs text-[hsl(var(--muted-foreground))]">Atendimento próximo. Estratégia possível.</span>
        </div>
      </div>
      <div className="hero-art relative mx-auto w-full max-w-[540px] reveal delay-2">
        <div className="hero-halo absolute -right-3 top-8 h-[82%] w-[82%] rounded-t-full bg-[hsl(var(--secondary))]" />
        <div className="relative aspect-[.84] overflow-hidden rounded-t-[48%] rounded-b-[12px] bg-[hsl(var(--secondary))]">
          <img data-testid="img-hero-specialist" src={SITE_CONFIG.photos.hero} alt={`${SITE_CONFIG.specialistName}, especialista em consultoria fitness`} className="h-full w-full object-cover object-[center_18%]" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          <div className="image-placeholder absolute inset-0 -z-10"><span className="eyebrow">foto principal<br />substitua por um retrato editorial</span></div>
        </div>
        <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl bg-[hsl(var(--card))] px-4 py-3 shadow-[0_14px_40px_hsl(337_18%_16%/.12)]">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[hsl(var(--primary))] text-white"><Sparkles size={17} /></span>
          <span><strong className="block text-sm">Rotina real, evolução real</strong><small className="text-xs text-[hsl(var(--muted-foreground))]">sem fórmulas prontas</small></span>
        </div>
      </div>
    </div>
    <div className="hero-orbit pointer-events-none absolute -right-28 top-20 h-56 w-56 rounded-full border border-[hsl(var(--primary)/.16)] md:h-96 md:w-96" />
  </section>;
}

function Identification() {
  const pains = ['Treina, mas sente que está sem direção', 'Não sabe exatamente como organizar sua rotina', 'Começa motivada e acaba perdendo a constância', 'Fica perdida com tantas informações diferentes'];
  return <section className="section-pad bg-[hsl(var(--foreground))] text-[hsl(var(--background))]">
    <div className="container-page">
      <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr]">
        <div className="reveal"><div className="eyebrow mb-5 text-[hsl(var(--accent))]">talvez você se reconheça</div><h2 className="max-w-[430px] text-4xl leading-[.98] tracking-[-.045em] md:text-6xl">Você sente que está fazendo tudo certo, mas não consegue evoluir?</h2></div>
        <div className="grid gap-3 sm:grid-cols-2">
          {pains.map((pain, i) => <div key={pain} className={`reveal delay-${(i % 4) + 1} border-t border-[hsl(var(--background)/.18)] py-5`}><span className="mono text-xs text-[hsl(var(--accent))]">0{i + 1}</span><p className="mt-6 max-w-[220px] text-lg leading-snug">{pain}</p></div>)}
        </div>
      </div>
      <div className="mt-20 grid items-end gap-8 border-t border-[hsl(var(--background)/.18)] pt-9 md:grid-cols-[1fr_auto]">
        <div><h3 className="serif text-5xl italic text-[hsl(var(--accent))]">Você não precisa fazer tudo sozinha.</h3><p className="mt-4 max-w-[550px] leading-7 text-[hsl(var(--background)/.68)]">A consultoria foi criada para as pessoas que querem parar de depender de tentativa e erro e ter um direcionamento mais claro para sua rotina.</p></div>
        <button data-testid="button-identification-cta" onClick={openWhatsApp} className="btn btn-primary">Quero saber como funciona <ArrowDownRight size={15} /></button>
      </div>
    </div>
  </section>;
}

function About() {
  return <section id="sobre" className="section-pad bg-[hsl(var(--secondary)/.45)]">
    <div className="container-page grid items-center gap-14 md:grid-cols-[.88fr_1.12fr]">
      <div className="relative mx-auto w-full max-w-[450px] reveal">
        <div className="absolute -bottom-5 -left-5 h-36 w-36 rounded-full bg-[hsl(var(--accent)/.7)]" />
        <div className="relative aspect-[.83] overflow-hidden rounded-[12px_12px_48%_12px] bg-[hsl(var(--secondary))]">
          <img data-testid="img-about-specialist" src={SITE_CONFIG.photos.about} alt={`Retrato de ${SITE_CONFIG.specialistName}`} className="h-full w-full object-cover object-[center_18%]" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          <div className="image-placeholder absolute inset-0 -z-10"><span className="eyebrow">foto sobre<br />substitua por sua imagem</span></div>
        </div>
        <span className="absolute -right-4 top-10 rotate-90 text-[10px] font-bold uppercase tracking-[.24em] text-[hsl(var(--primary))]">movimento com propósito</span>
      </div>
      <div className="reveal delay-2"><div className="eyebrow mb-5 text-[hsl(var(--primary))]">prazer, eu sou</div><h2 className="text-5xl leading-[.95] tracking-[-.05em] md:text-7xl">{SITE_CONFIG.specialistName}<br /><em className="serif font-normal text-[hsl(var(--primary))]">e acredito em processo.</em></h2><p className="mt-8 max-w-[510px] text-lg leading-8 text-[hsl(var(--muted-foreground))]">Sou especialista em ajudar homens e mulheres a construírem uma rotina mais organizada de treino e hábitos saudáveis, respeitando a realidade e os objetivos de cada pessoa.</p><div className="mt-10 grid max-w-[560px] grid-cols-3 border-y border-[hsl(var(--foreground)/.13)] py-6"><div><strong className="block text-3xl tracking-[-.05em] text-[hsl(var(--primary))]">{SITE_CONFIG.students}+</strong><span className="text-xs text-[hsl(var(--muted-foreground))]">alunas acompanhadas</span></div><div className="border-l border-[hsl(var(--foreground)/.13)] pl-4"><strong className="block text-3xl tracking-[-.05em] text-[hsl(var(--primary))]">{SITE_CONFIG.experience}</strong><span className="text-xs text-[hsl(var(--muted-foreground))]">anos de experiência</span></div><div className="border-l border-[hsl(var(--foreground)/.13)] pl-4"><strong className="block text-3xl tracking-[-.05em] text-[hsl(var(--primary))]">01:01</strong><span className="text-xs text-[hsl(var(--muted-foreground))]">olhar para cada rotina</span></div></div></div>
    </div>
  </section>;
}

function Consulting() {
  const steps = [['01', 'Avaliação', 'Entendemos sua rotina, objetivos e momento atual.'], ['02', 'Estratégia', 'Definimos os direcionamentos de acordo com suas necessidades.'], ['03', 'Acompanhamento', 'Você recebe orientação e suporte durante o processo.'], ['04', 'Evolução', 'Analisamos sua evolução e ajustamos o planejamento quando necessário.']];
  return <section id="consultoria" className="section-pad">
    <div className="container-page">
      <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><div className="eyebrow mb-5 text-[hsl(var(--primary))]">o produto principal</div><h2 className="max-w-[650px] text-5xl leading-[.94] tracking-[-.05em] md:text-7xl">Conheça minha <em className="serif font-normal text-[hsl(var(--primary))]">Consultoria Fitness</em></h2></div><p className="max-w-[290px] text-sm leading-6 text-[hsl(var(--muted-foreground))]">Um acompanhamento pensado para você parar de treinar no automático e começar a seguir uma estratégia.</p></div>
      <div className="grid gap-4 md:grid-cols-4">{steps.map(([number, title, text], i) => <div key={number} className={`reveal delay-${i + 1} soft-card p-6 transition-transform duration-300 hover:-translate-y-2`}><div className="flex items-center justify-between"><span className="mono text-xs text-[hsl(var(--primary))]">{number}</span><ArrowUpRight size={15} className="text-[hsl(var(--muted-foreground))]" /></div><h3 className="mt-14 text-xl">{title}</h3><p className="mt-3 text-sm leading-6 text-[hsl(var(--muted-foreground))]">{text}</p></div>)}</div>
      <div className="mt-5 grid overflow-hidden rounded-[26px] bg-[hsl(var(--foreground))] text-[hsl(var(--background))] md:grid-cols-[1fr_1fr]">
        <div className="relative min-h-[310px] overflow-hidden p-8 md:min-h-[390px] md:p-12"><div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-[hsl(var(--accent)/.4)]" /><div className="eyebrow relative text-[hsl(var(--accent))]">por dentro do processo</div><h3 className="relative mt-24 max-w-[350px] text-3xl leading-tight md:text-5xl">A estratégia precisa caber na sua <em className="serif font-normal text-[hsl(var(--accent))]">vida real.</em></h3><button data-testid="button-consulting-cta" onClick={openWhatsApp} className="btn btn-primary relative mt-7">Conversar sobre a consultoria <ArrowUpRight size={15} /></button></div>
        <div className="relative min-h-[310px] bg-[hsl(var(--secondary))] p-8 text-[hsl(var(--foreground))] md:min-h-[390px] md:p-12"><div className="absolute right-10 top-10 grid h-16 w-16 place-items-center rounded-full border border-[hsl(var(--primary)/.4)] text-[hsl(var(--primary))]"><Play size={16} fill="currentColor" /></div><div className="absolute bottom-10 left-10 right-10"><div className="mono text-[10px] uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">consultoria 01 / acompanhamento</div><div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-[hsl(var(--foreground)/.1)]"><div className="h-full w-[72%] rounded-full bg-[hsl(var(--primary))]" /></div><div className="mt-3 flex justify-between text-xs text-[hsl(var(--muted-foreground))]"><span>clareza</span><span>constância</span><span>evolução</span></div></div></div>
      </div>
    </div>
  </section>;
}

function Plans() {
  return <section id="planos" className="section-pad bg-[hsl(0_0%_5%)] text-white">
    <div className="container-page">
      <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
        <div><div className="eyebrow mb-5 text-[hsl(var(--primary))]">escolha seu nível</div><h2 className="max-w-[700px] text-5xl leading-[.92] tracking-[-.05em] md:text-7xl">Planos para cada fase da sua <em className="serif font-normal text-[hsl(var(--primary))]">evolução.</em></h2></div>
        <p className="max-w-[290px] text-sm leading-6 text-white/60">Escolha o acompanhamento que combina com seu momento e comece a treinar com estratégia.</p>
      </div>
      <div className="mb-7 overflow-hidden rounded-[22px] border border-[hsl(var(--primary)/.35)] bg-black shadow-[0_20px_60px_hsl(var(--primary)/.12)]"><img src="/planos-consultoria.jpg" alt="Planos da consultoria Giga Kitty" className="mx-auto max-h-[420px] w-full object-cover object-center md:max-h-[520px]" /></div>
      <div className="grid gap-5 lg:grid-cols-3">
        {SITE_CONFIG.plans.map((plan, i) => <article key={plan.name} className={`plan-card reveal plan-${plan.color} ${i === 2 ? 'lg:-translate-y-5' : ''}`}>
          <div className="relative aspect-[.75] overflow-hidden"><img src={plan.image} alt={`Plano ${plan.name} Giga Kitty`} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" /><div className="absolute bottom-5 left-5 right-5"><span className="eyebrow text-white/70">plano {plan.name.toLowerCase()}</span><div className="mt-2 flex items-end justify-between gap-3"><h3 className="text-4xl font-black uppercase italic tracking-[-.05em]">{plan.name}</h3><strong className="text-xl text-[hsl(var(--accent))]">{plan.price}</strong></div></div></div>
          <div className="p-6"><p className="mb-5 text-sm text-white/65">{plan.summary}</p><ul className="grid gap-3">{plan.features.map(feature => <li key={feature} className="flex gap-3 text-sm leading-5 text-white/85"><Check size={16} className="mt-0.5 shrink-0 text-[hsl(var(--primary))]" />{feature}</li>)}</ul><button onClick={openWhatsApp} className={`btn mt-7 w-full ${i === 2 ? 'btn-gold' : 'btn-pink'}`}>Quero este plano <ArrowUpRight size={15} /></button></div>
        </article>)}
      </div>
    </div>
  </section>;
}

function Benefits() {
  return <section className="section-pad bg-[hsl(var(--secondary)/.5)]">
    <div className="container-page grid gap-14 md:grid-cols-[.75fr_1.25fr]"><div><div className="eyebrow mb-5 text-[hsl(var(--primary))]">feito para você</div><h2 className="text-5xl leading-[.94] tracking-[-.05em] md:text-6xl">O que você recebe na <em className="serif font-normal text-[hsl(var(--primary))]">consultoria?</em></h2><p className="mt-7 max-w-[330px] text-sm leading-6 text-[hsl(var(--muted-foreground))]">Todos os itens são ajustados de acordo com o que a sua fase pede. Sem pacotes engessados.</p></div><div className="grid grid-cols-1 sm:grid-cols-2">{benefits.map((benefit, i) => <div key={benefit} className="group flex items-center gap-4 border-b border-[hsl(var(--foreground)/.13)] py-5 transition-colors hover:text-[hsl(var(--primary))]"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[hsl(var(--primary)/.35)] text-[hsl(var(--primary))] transition-colors group-hover:bg-[hsl(var(--primary))] group-hover:text-white"><Check size={14} /></span><span className="text-[15px]">{benefit}</span><span className="mono ml-auto text-[10px] text-[hsl(var(--muted-foreground))]">0{i + 1}</span></div>)}</div></div>
  </section>;
}

function Audience() {
  const audience = ['Está começando agora', 'Já treina, mas sente que está estagnada', 'Quer mais organização', 'Precisa de acompanhamento', 'Quer deixar de fazer tudo no improviso', 'Busca mais consistência'];
  return <section className="section-pad"><div className="container-page"><div className="grid gap-10 md:grid-cols-[.75fr_1.25fr]"><div><div className="eyebrow mb-5 text-[hsl(var(--primary))]">para quem é</div><h2 className="text-5xl leading-[.94] tracking-[-.05em] md:text-6xl">A consultoria é para <em className="serif font-normal text-[hsl(var(--primary))]">você que...</em></h2></div><div className="grid gap-0 sm:grid-cols-2">{audience.map((item, i) => <div key={item} className="flex gap-4 border-t border-[hsl(var(--foreground)/.13)] py-5"><span className="mono text-xs text-[hsl(var(--primary))]">0{i + 1}</span><span className="text-lg">{item}</span></div>)}</div></div><div className="mt-12 flex justify-end"><button data-testid="button-audience-cta" onClick={openWhatsApp} className="btn btn-ink">Quero conversar sobre a consultoria <ArrowUpRight size={15} /></button></div></div></section>;
}

function Testimonials() {
  return <section className="section-pad bg-[hsl(var(--foreground))] text-[hsl(var(--background))]"><div className="container-page"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><div className="eyebrow mb-5 text-[hsl(var(--accent))]">prova social real</div><h2 className="text-5xl leading-[.94] tracking-[-.05em] md:text-7xl">Resultados que vão<br /><em className="serif font-normal text-[hsl(var(--accent))]">além da balança.</em></h2></div><p className="max-w-[250px] text-xs leading-5 text-[hsl(var(--background)/.58)]">Evoluções reais compartilhadas por clientes após o processo de consultoria.</p></div><div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{SITE_CONFIG.results.map((result, i) => <figure data-testid={`card-result-${i + 1}`} key={result.image} className="group overflow-hidden rounded-2xl border border-[hsl(var(--background)/.16)] bg-[hsl(var(--background)/.04)]"><div className="aspect-[4/5] overflow-hidden bg-[hsl(var(--secondary))]"><img src={result.image} alt={result.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" /></div><figcaption className="px-4 py-4 text-xs text-[hsl(var(--background)/.72)]"><span className="mono mr-2 text-[10px] text-[hsl(var(--accent))]">0{i + 1}</span>{result.label}{i === 1 && <span className="mt-1 block pl-7 text-[10px] text-[hsl(var(--background)/.45)]">mesma cliente da imagem seguinte</span>}</figcaption></figure>)}</div><div className="mt-20 flex items-end justify-between gap-6"><div><div className="eyebrow mb-5 text-[hsl(var(--accent))]">depoimentos</div><h3 className="text-3xl tracking-[-.04em] md:text-5xl">A experiência também <em className="serif font-normal text-[hsl(var(--accent))]">transforma.</em></h3></div><p className="hidden max-w-[250px] text-right text-xs leading-5 text-[hsl(var(--background)/.52)] md:block">Espaços editáveis para inserir relatos autorizados.</p></div><div className="mt-8 grid gap-4 md:grid-cols-3">{SITE_CONFIG.testimonials.slice(0, 3).map((testimonial, i) => <article data-testid={`card-testimonial-${i + 1}`} key={testimonial.name} className="relative rounded-2xl border border-[hsl(var(--background)/.16)] p-6 transition-transform duration-300 hover:-translate-y-2"><Quote size={25} className="text-[hsl(var(--accent))]" /><p className="mt-8 min-h-[96px] text-sm leading-6 text-[hsl(var(--background)/.76)]">{testimonial.text}</p><div className="mt-7 flex items-center gap-3 border-t border-[hsl(var(--background)/.13)] pt-4"><div className="h-9 w-9 overflow-hidden rounded-full bg-[hsl(var(--secondary))]"><img src={testimonial.image} alt="" className="h-full w-full object-cover" /></div><div><strong className="block text-xs">{testimonial.name}</strong><span className="text-[11px] tracking-[.16em] text-[hsl(var(--accent))]">★★★★★</span></div></div></article>)}</div><p className="mt-7 text-center text-[11px] text-[hsl(var(--background)/.45)]">Resultados individuais podem variar. <span className="underline">Use apenas depoimentos e imagens autorizados.</span></p></div></section>;
}

function WhatsAppCTA() {
  return <section className="relative overflow-hidden bg-[hsl(var(--primary))] py-20 text-white"><div className="container-page relative z-10 grid items-end gap-10 md:grid-cols-[1fr_auto]"><div><div className="eyebrow mb-6 text-[hsl(var(--accent))]">seu próximo capítulo</div><h2 className="max-w-[710px] text-5xl leading-[.92] tracking-[-.05em] md:text-7xl">Pronta para parar de fazer tudo sozinha?</h2><p className="mt-7 max-w-[510px] leading-7 text-white/75">Me conte um pouco sobre você, seus objetivos e sua rotina. Vamos conversar e descobrir se a consultoria faz sentido para você.</p></div><div><button data-testid="button-main-whatsapp" onClick={openWhatsApp} className="btn btn-ink bg-[hsl(var(--foreground))] text-white">Quero falar no WhatsApp <MessageCircle size={16} /></button><p className="mt-4 text-center text-[11px] text-white/65">Conversa inicial, sem compromisso.</p></div></div><div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/20" /><div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full border border-white/10" /></section>;
}

function Ebook() {
  const items = ['Receitas simples', 'Preparações práticas', 'Ingredientes fáceis de encontrar', 'Opções para diferentes momentos do dia', 'Passo a passo'];
  return <section id="ebook" className="section-pad bg-[hsl(var(--secondary))]"><div className="container-page"><div className="grid items-center gap-14 md:grid-cols-[1.08fr_.92fr]"><div className="reveal"><div className="eyebrow mb-5 text-[hsl(var(--primary))]">segunda oferta · e-book</div><h2 className="max-w-[600px] text-5xl leading-[.92] tracking-[-.05em] md:text-7xl">Alimentação saudável não precisa ser <em className="serif font-normal text-[hsl(var(--primary))]">complicada.</em></h2><p className="mt-7 max-w-[510px] text-lg leading-7 text-[hsl(var(--muted-foreground))]">Conheça meu e-book com receitas fáceis, práticas e deliciosas para deixar sua rotina muito mais simples.</p><h3 className="mt-9 text-2xl">Receitas Fáceis <span className="serif italic text-[hsl(var(--primary))]">& Saudáveis</span></h3><ul className="mt-5 grid gap-3">{items.map(item => <li key={item} className="flex items-center gap-3 text-sm"><Check size={15} className="text-[hsl(var(--primary))]" /> {item}</li>)}</ul><a data-testid="link-ebook-cta" href={SITE_CONFIG.ebookUrl} target="_blank" rel="noreferrer" className="btn btn-ink mt-9">Quero conhecer o e-book <MoveUpRight size={15} /></a></div><div className="relative reveal delay-2"><div className="absolute -right-5 top-8 h-[88%] w-4 rounded-r-xl bg-[hsl(337_25%_24%)]" /><div className="relative aspect-[.82] rotate-[-4deg] overflow-hidden rounded-[8px_18px_18px_8px] bg-[hsl(var(--foreground))] p-5 text-white shadow-[18px_24px_0_hsl(335_52%_86%)] md:p-8"><div className="absolute inset-x-5 top-5 h-2 rounded-full bg-[hsl(var(--accent))] md:inset-x-8 md:top-8" /><div className="relative flex h-full flex-col justify-between"><div className="pt-10 md:pt-14"><span className="eyebrow text-[hsl(var(--accent))]">ebook de receitas</span><h3 className="serif mt-5 text-5xl leading-[.9] md:text-7xl">Receitas<br /><span className="text-[hsl(var(--primary))]">Fáceis</span><br />& Saudáveis</h3></div><div className="relative overflow-hidden rounded-xl"><img data-testid="img-ebook-food" src={SITE_CONFIG.photos.ebook} alt="Receita saudável com omelete, abacate e frutas" className="h-36 w-full object-cover opacity-90 md:h-44" onError={(e) => { e.currentTarget.style.display = 'none'; }} /><div className="image-placeholder absolute inset-0 -z-10 text-white"><span className="eyebrow">imagem de receita<br />substitua por sua foto</span></div></div></div></div><div className="absolute -bottom-5 -left-5 rounded-xl bg-[hsl(var(--card))] px-4 py-3 shadow-xl"><span className="eyebrow text-[hsl(var(--primary))]">acesso digital</span></div></div></div></div></section>;
}

function EbookOffer() {
  return <section className="bg-[hsl(var(--background))] py-20"><div className="container-page"><div className="mx-auto max-w-[760px] rounded-[28px] border border-[hsl(var(--primary)/.25)] bg-[hsl(var(--card))] p-7 text-center shadow-[0_20px_60px_hsl(335_78%_52%/.08)] md:p-12"><div className="eyebrow text-[hsl(var(--primary))]">receitas fáceis & saudáveis</div><h2 className="serif mt-3 text-5xl italic md:text-6xl">Sua próxima refeição começa aqui.</h2><div className="mx-auto mt-8 grid max-w-[530px] gap-3 text-sm text-[hsl(var(--muted-foreground))] sm:grid-cols-3"><span className="flex items-center justify-center gap-2"><ShieldCheck size={15} className="text-[hsl(var(--primary))]" /> Acesso digital</span><span className="flex items-center justify-center gap-2"><ArrowUpRight size={15} className="text-[hsl(var(--primary))]" /> Acesso rápido</span><span className="flex items-center justify-center gap-2"><ShieldCheck size={15} className="text-[hsl(var(--primary))]" /> Pagamento seguro</span></div><a data-testid="link-ebook-offer" href={SITE_CONFIG.ebookUrl} target="_blank" rel="noreferrer" className="btn btn-primary mt-9">Quero meu e-book <MoveUpRight size={15} /></a></div></div></section>;
}

function FAQ() {
  const questions = [
    ['Qual plano combina mais comigo?', 'O Bronze é ideal para começar com uma ficha de treinos e acesso ao aplicativo. O Prata acrescenta acompanhamento a cada 15 dias e dicas personalizadas. O Ouro é o acompanhamento mais próximo, com suporte diário, desafios e e-book fitness.'],
    ['O que está incluso no Plano Bronze?', 'Você recebe sua ficha de treinos, acesso ao aplicativo, renovação da ficha a cada 2 meses e entrada nos grupos Bronze e Prata.'],
    ['O que muda no Plano Prata?', 'Além da ficha personalizada e do aplicativo, o Prata oferece acompanhamento pessoal a cada 15 dias, dicas personalizadas, renovação a cada 2 meses e acesso aos grupos Bronze e Prata.'],
    ['Como funciona o Plano Ouro?', 'O Ouro inclui ficha personalizada, aplicativo, renovação a cada 2 meses, acompanhamento pessoal diário, acesso ao grupo Ouro, desafios com premiações mensais e o e-book de receitas fitness.'],
    ['As fichas de treino são personalizadas?', 'Sim. Nos planos Prata e Ouro, a ficha é personalizada de acordo com seus objetivos. No Bronze, você também recebe uma ficha de treinos para começar com clareza.'],
    ['Com que frequência minha ficha é renovada?', 'A renovação da ficha acontece a cada 2 meses nos planos Bronze, Prata e Ouro. O acompanhamento do Prata acontece a cada 15 dias e o Ouro tem suporte diário.'],
    ['Preciso morar na mesma cidade que a Maria Eduarda?', 'Não. A consultoria é online e o acesso ao aplicativo permite acompanhar seus treinos de onde você estiver.'],
    ['Como faço para contratar um plano?', 'Clique no botão do plano escolhido e fale comigo pelo WhatsApp. Vou entender seu momento, confirmar os próximos passos e orientar você desde o início.'],
  ];
  const [active, setActive] = useState<number | null>(0);
  return <section id="faq" className="section-pad bg-[hsl(0_0%_9%)] text-white"><div className="container-page grid gap-12 md:grid-cols-[.75fr_1.25fr]"><div className="md:sticky md:top-32 md:self-start"><div className="eyebrow mb-5 text-[hsl(var(--primary))]">tire suas dúvidas</div><h2 className="text-5xl leading-[.94] tracking-[-.05em] md:text-6xl">Perguntas <em className="serif font-normal text-[hsl(var(--primary))]">frequentes.</em></h2><p className="mt-6 max-w-[290px] text-sm leading-6 text-white/60">Tudo o que você precisa saber antes de escolher seu plano Giga Kitty.</p></div><div>{questions.map(([question, answer], i) => <div key={question} className="border-t border-white/15"><button data-testid={`button-faq-${i + 1}`} onClick={() => setActive(active === i ? null : i)} className="flex w-full items-center justify-between py-5 text-left text-base font-semibold"><span><span className="mono mr-4 text-[10px] text-[hsl(var(--primary))]">0{i + 1}</span>{question}</span><ChevronDown size={17} className={`shrink-0 transition-transform ${active === i ? 'rotate-180 text-[hsl(var(--primary))]' : ''}`} /></button><div className={`grid transition-[grid-template-rows] duration-300 ${active === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}><p className="overflow-hidden pl-10 pr-8 pb-5 text-sm leading-6 text-white/60">{answer}</p></div></div>)}</div></div></section>;
}

function FinalCTA() {
  return <section className="relative overflow-hidden bg-[linear-gradient(135deg,hsl(335_78%_52%),hsl(335_59%_39%))] py-24 text-white"><div className="container-page relative z-10 text-center"><div className="eyebrow mb-6 text-[hsl(var(--accent))]">comece com uma conversa</div><h2 className="mx-auto max-w-[780px] text-5xl leading-[.9] tracking-[-.06em] md:text-8xl">Seu próximo passo pode começar <em className="serif font-normal text-[hsl(var(--accent))]">hoje.</em></h2><p className="mx-auto mt-7 max-w-[480px] leading-7 text-white/75">Converse comigo pelo WhatsApp e descubra como funciona a consultoria.</p><button data-testid="button-final-cta" onClick={openWhatsApp} className="btn btn-ink mt-9 bg-[hsl(var(--foreground))] text-white">Quero minha consultoria <ArrowUpRight size={15} /></button><div className="mt-7 flex justify-center gap-5 text-[11px] text-white/65"><span className="flex items-center gap-2"><MessageCircle size={13} /> Atendimento personalizado</span><span className="flex items-center gap-2"><ShieldCheck size={13} /> Conversa segura</span></div></div><div className="absolute left-[-10%] top-[-30%] h-[140%] w-[42%] rotate-12 border border-white/10" /></section>;
}

function Footer() {
  return <footer className="bg-[hsl(var(--foreground))] py-12 text-[hsl(var(--background))]"><div className="container-page"><div className="grid gap-10 md:grid-cols-[1fr_auto_auto]"><div><div className="flex items-center gap-3"><img src={SITE_CONFIG.brandLogo} alt="Giga Kitty" className="h-12 w-40 object-contain object-left" /><strong>{SITE_CONFIG.specialistName}</strong></div><p className="mt-5 max-w-[270px] text-xs leading-5 text-white/55">Movimento com propósito. Estratégia para uma rotina que é sua.</p></div><div><span className="eyebrow text-[hsl(var(--accent))]">navegue</span><div className="mt-4 grid gap-3 text-xs text-white/65"><button data-testid="link-footer-inicio" onClick={() => goTo('inicio')} className="text-left hover:text-white">Início</button><button data-testid="link-footer-consultoria" onClick={() => goTo('consultoria')} className="text-left hover:text-white">Consultoria</button><button data-testid="link-footer-ebook" onClick={() => goTo('ebook')} className="text-left hover:text-white">E-book</button><button data-testid="link-footer-faq" onClick={() => goTo('faq')} className="text-left hover:text-white">FAQ</button></div></div><div><span className="eyebrow text-[hsl(var(--accent))]">acompanhe</span><a data-testid="link-instagram" href={SITE_CONFIG.instagramUrl} target="_blank" rel="noreferrer" className="mt-4 flex items-center gap-2 text-xs text-white/65 hover:text-white"><Instagram size={15} /> Instagram</a></div></div><div className="mt-12 border-t border-white/15 pt-5 text-[10px] leading-5 text-white/40 md:flex md:justify-between"><span>© 2026 {SITE_CONFIG.specialistName}. Todos os direitos reservados.</span><span className="mt-3 block max-w-[600px] md:mt-0 md:text-right">Os conteúdos apresentados possuem caráter informativo e não substituem avaliação ou acompanhamento individual realizado por profissionais habilitados.</span></div></div></footer>;
}

function useScrollAnimations() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-in-view'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px' },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function Home() {
  useScrollAnimations();
  return <div className="grain min-h-[100dvh] overflow-x-hidden"><Header /><main><Hero /><Identification /><About /><Consulting /><Plans /><Benefits /><Audience /><Testimonials /><WhatsAppCTA /><Ebook /><EbookOffer /><FAQ /><FinalCTA /></main><Footer /><a data-testid="link-mobile-sticky-whatsapp" href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noreferrer" className="fixed bottom-0 left-0 right-0 z-30 flex h-14 items-center justify-center gap-2 bg-[hsl(0_0%_5%)] text-xs font-bold uppercase tracking-[.1em] text-white md:hidden">Quero minha consultoria <MessageCircle size={16} /></a></div>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><ErrorBoundary resetKey="home"><Home /></ErrorBoundary><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;