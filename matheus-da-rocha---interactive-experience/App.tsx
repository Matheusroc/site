
import React, { useState, useEffect } from 'react';
import { SKILLS, EXPERIENCES, DISCIPLINE_DATA, TIMELINE_DATA, OTHER_SKILLS } from './constants';
import { GoogleGenAI } from "@google/genai";

const App: React.FC = () => {
  const [aiInsight, setAiInsight] = useState('');
  const [isTimelineExpanded, setIsTimelineExpanded] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  
  useEffect(() => {
    const fetchInsight = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: "Crie uma frase de 3 palavras para um portfólio de um jovem de 18 anos proativo em logística e tecnologia. Sem introduções.",
        });
        setAiInsight(response.text?.replace(/[.*]/g, '') || "Foco • Ordem • Impacto");
      } catch {
        setAiInsight("Logística • Tecnologia • Estratégia");
      }
    };
    fetchInsight();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const CONTACT_LINKS = {
    email: "mailto:matheusdarocha21@gmail.com",
    whatsapp: "https://wa.me/5547991222110",
    linkedin: "https://www.linkedin.com/in/matheusdarocha21"
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden selection:bg-black selection:text-white font-light text-black bg-white">
      <div className="frame" />

      {/* Modal de Contato */}
      {showContactModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-white/90 backdrop-blur-md" onClick={() => setShowContactModal(false)}></div>
          <div className="relative thin-card bg-white p-12 max-w-sm w-full text-center space-y-8 animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-[10px] opacity-20 hover:opacity-100 uppercase tracking-widest"
            >
              Fechar [x]
            </button>
            <h3 className="serif text-3xl italic">Como deseja<br/>se conectar?</h3>
            <div className="flex flex-col gap-4">
              <a href={CONTACT_LINKS.email} className="border border-black px-6 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all font-bold">
                Via E-mail
              </a>
              <a href={CONTACT_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="border border-black px-6 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all font-bold">
                Via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Navbar Responsiva */}
      <nav className="fixed top-[20px] md:top-[60px] left-[20px] md:left-[60px] right-[20px] md:right-[60px] z-[60] flex flex-wrap justify-between items-center pointer-events-none text-black bg-white/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-2 md:p-0 border-b border-black/5 md:border-none">
        <div className="flex gap-4 md:gap-12 pointer-events-auto overflow-x-auto no-scrollbar pb-1 md:pb-0">
          <button onClick={() => scrollTo('home')} className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] hover:opacity-40 transition-opacity font-bold whitespace-nowrap">Início</button>
          <button onClick={() => scrollTo('experiencia')} className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] hover:opacity-40 transition-opacity whitespace-nowrap">Experiência</button>
          <button onClick={() => scrollTo('habilidades')} className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] hover:opacity-40 transition-opacity whitespace-nowrap">Habilidades</button>
        </div>
        <div className="flex gap-4 md:gap-12 pointer-events-auto">
          <button onClick={() => scrollTo('formacao')} className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] hover:opacity-40 transition-opacity whitespace-nowrap">Trajetória</button>
          <button 
            onClick={() => setShowContactModal(true)} 
            className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold underline underline-offset-4 md:underline-offset-8 whitespace-nowrap"
          >
            Contato
          </button>
        </div>
      </nav>

      <div className="section-container scroll-hide h-screen w-full">
        
        {/* SECTION 1: HERO */}
        <section id="home" className="section px-6 md:px-40">
          <div className="text-center w-full">
            <h1 className="serif text-4xl md:text-[9rem] font-light tracking-tighter leading-tight md:leading-none mb-8 md:mb-12">
              MATHEUS<br/>DA ROCHA
            </h1>
            <div className="flex flex-col items-center gap-6">
              <p className="text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] opacity-40 uppercase px-4">{aiInsight}</p>
              <button 
                onClick={() => scrollTo('sobre')}
                className="mt-8 md:mt-12 bg-black text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] hover:scale-105 transition-all flex items-center shadow-lg"
              >
                Conheça minha história <i className="fas fa-chevron-down ml-3 text-[8px]"></i>
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 2: SOBRE */}
        <section id="sobre" className="section px-6 md:px-40">
          <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
               <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] opacity-30">01 / Perfil</span>
               <h2 className="serif text-4xl md:text-6xl italic">Atitude &<br/>Prontidão</h2>
               <div className="text-base md:text-lg leading-relaxed opacity-70 serif italic font-light">
                  "Tenho 18 anos e acredito que a tecnologia só faz sentido quando acompanhada de disciplina. No escotismo e nos esportes, forjei o caráter que hoje aplico no mundo corporativo."
               </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
               {[
                 { label: 'Eficiência', desc: 'Foco no resultado', icon: 'fa-bolt' },
                 { label: 'Colaboração', desc: 'Mentalidade de time', icon: 'fa-users' },
                 { label: 'Estudo', desc: 'Busca constante', icon: 'fa-graduation-cap' },
                 { label: 'Rigor', desc: 'Organização extrema', icon: 'fa-list-check' }
               ].map((item, i) => (
                 <div key={i} className="thin-card p-6 md:p-10 text-center hover:bg-black hover:text-white group">
                    <i className={`fas ${item.icon} text-xs md:text-sm mb-4 md:mb-6 opacity-40 group-hover:opacity-100`}></i>
                    <h4 className="font-bold text-[9px] md:text-[11px] uppercase tracking-widest mb-1 md:mb-2">{item.label}</h4>
                    <p className="text-[7px] md:text-[9px] opacity-40 uppercase group-hover:text-white/60">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: EXPERIENCIA */}
        <section id="experiencia" className="section px-6 md:px-40 bg-[#fcfcfc]">
          <div className="max-w-5xl w-full">
            <div className="mb-12 md:mb-20 text-center">
               <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] opacity-30 block mb-2 md:mb-4 text-center">02 / Carreira</span>
               <h2 className="serif text-4xl md:text-5xl italic font-light">Impacto Real</h2>
            </div>
            
            <div className="thin-card p-8 md:p-16 relative">
               <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-12 border-b border-black/10 pb-8 md:pb-12">
                  <div className="flex gap-4 md:gap-8 items-center">
                     <div className="w-px h-8 md:h-12 bg-black"></div>
                     <div>
                        <h3 className="serif text-xl md:text-3xl mb-1">Auxiliar de Escritório</h3>
                        <p className="text-[8px] md:text-[10px] uppercase tracking-widest opacity-40 italic">Progresso Ambiental LTDA</p>
                     </div>
                  </div>
                  <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold mt-4 md:mt-0 italic opacity-40">2024 — ATUAL</span>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-16">
                  {[
                    { title: 'EU REFORMULEI', desc: 'Desenvolvi um sistema de controle do zero, garantindo precisão e eliminando erros de estoque.' },
                    { title: 'EU OTIMIZEI', desc: 'Implementei novos fluxos logísticos que aceleraram a entrega de materiais em 50%.' },
                    { title: 'EU CONECTEI', desc: 'Criei canais de comunicação dinâmica entre almoxarifado e administrativo.' }
                  ].map((feat, i) => (
                    <div key={i} className="space-y-2 md:space-y-4">
                       <h4 className="text-[9px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.5em] font-bold">{feat.title}</h4>
                       <p className="text-[10px] md:text-[11px] opacity-60 leading-relaxed italic">{feat.desc}</p>
                    </div>
                  ))}
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-y-4 gap-x-12">
                  {EXPERIENCES[0].description.map((item, i) => (
                    <div key={i} className="text-[10px] md:text-[11px] leading-relaxed opacity-50 flex gap-3">
                       <span className="font-bold">/</span> {item}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: HABILIDADES */}
        <section id="habilidades" className="section px-6 md:px-40">
           <div className="max-w-6xl w-full">
              <div className="text-center mb-12 md:mb-16">
                 <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] opacity-30 block mb-2 md:mb-4">03 / Competências</span>
                 <h2 className="serif text-4xl md:text-6xl">Domínios</h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/10 border-[0.5px] border-black/10 mx-auto">
                 {SKILLS.map((skill, i) => (
                   <div key={i} className="bg-white p-6 md:p-12 hover:bg-black hover:text-white transition-all duration-500 text-center flex flex-col justify-center h-40 md:h-64">
                      <div className="text-[7px] md:text-[8px] uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-8 opacity-30">{skill.category}</div>
                      <h4 className="serif text-lg md:text-2xl mb-2 md:mb-4 leading-tight">{skill.name}</h4>
                      <div className="w-6 md:w-8 h-[1px] bg-current opacity-20 mx-auto"></div>
                   </div>
                 ))}
              </div>

              {/* LISTA DE HABILIDADES EXTRAS - CORREÇÃO DE ALINHAMENTO */}
              <div className="mt-8 md:mt-16 pt-8 md:pt-12 border-t border-black/5 text-center">
                 <div className="flex flex-wrap justify-center items-center gap-x-4 md:gap-x-10 gap-y-3 md:gap-y-6 max-w-4xl mx-auto px-4">
                    {OTHER_SKILLS.map((s, i) => (
                      <span key={i} className="text-[7px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-30 hover:opacity-100 transition-opacity italic whitespace-normal md:whitespace-nowrap inline-block">
                        {s}
                      </span>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* SECTION 5: DISCIPLINA */}
        <section id="disciplina" className="section px-6 md:px-40 bg-[#f9f9f9]">
           <div className="max-w-6xl w-full">
              <div className="text-center mb-12 md:mb-24">
                 <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] opacity-30 block mb-2 md:mb-4">04 / Estilo de Vida</span>
                 <h2 className="serif text-4xl md:text-6xl italic">Disciplina & Constância</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                 {DISCIPLINE_DATA.map((item, i) => (
                   <div key={i} className="thin-card p-8 md:p-12 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                      <div className="w-8 h-8 md:w-10 md:h-10 border border-black/5 rounded-full flex items-center justify-center mb-4 md:mb-8 opacity-40">
                        <i className={`fas ${item.icon === 'fa-shuttlecock' ? 'fa-table-tennis-paddle-ball' : item.icon} text-[10px]`}></i>
                      </div>
                      <h4 className="serif text-xl md:text-2xl mb-1 md:mb-2">{item.label}</h4>
                      <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.4em] font-bold text-black mb-2 md:mb-4">{item.time}</span>
                      <p className="text-[9px] md:text-[10px] opacity-40 italic">{item.detail}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* SECTION 6: FORMAÇÃO */}
        <section id="formacao" className="section px-6 md:px-40">
           <div className="max-w-4xl w-full relative">
              <div className="text-center mb-16 md:mb-24">
                 <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] opacity-30 block mb-2 md:mb-4 text-center">05 / Trajetória</span>
                 <h2 className="serif text-4xl md:text-6xl italic">Evolução</h2>
              </div>
              
              {/* Linha vertical centralizada */}
              <div className="hidden md:block absolute left-1/2 top-[180px] bottom-0 w-[0.5px] bg-black opacity-10 -translate-x-1/2"></div>
              
              <div className="space-y-12 md:space-y-24 py-8 md:py-12">
                 {TIMELINE_DATA.filter(t => isTimelineExpanded || t.type === 'base').map((item, i) => (
                   <div key={i} className={`relative flex flex-col md:flex-row w-full ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                      {/* Ponto na linha - PRETO SÓLIDO */}
                      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 w-[7px] h-[7px] rounded-full bg-black z-20"></div>
                      
                      {/* Versão Mobile */}
                      <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-black/10"></div>
                      <div className="md:hidden absolute left-[-3px] top-1 w-[7px] h-[7px] rounded-full bg-black"></div>
                      
                      {/* Conteúdo - Afastado da linha para não sobrepor */}
                      <div className={`w-full md:w-1/2 px-6 md:px-16 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                         <h3 className="serif text-2xl md:text-3xl mb-1 leading-tight">{item.title}</h3>
                         <p className="text-[9px] md:text-[10px] uppercase tracking-widest opacity-40 italic mb-1">{item.place}</p>
                         <p className="text-[9px] md:text-[10px] font-bold">{item.year}</p>
                      </div>
                      
                      {/* Espaçador para o lado oposto */}
                      <div className="hidden md:block md:w-1/2"></div>
                   </div>
                 ))}
              </div>

              <div className="mt-12 md:mt-24 text-center px-4">
                 <button 
                  onClick={() => setIsTimelineExpanded(!isTimelineExpanded)}
                  className="w-full md:w-auto text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.5em] border border-black px-8 md:px-12 py-4 md:py-5 hover:bg-black hover:text-white transition-all font-bold"
                 >
                    {isTimelineExpanded ? 'Retrair' : 'Ver Todos os Cursos'}
                 </button>
              </div>
           </div>
        </section>

        {/* SECTION 7: CONTATO */}
        <section id="contato" className="section px-6 md:px-40">
           <div className="max-w-4xl w-full text-center">
              <h2 className="serif text-5xl md:text-9xl font-light mb-12 md:mb-20 tracking-tighter">Conectar?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/5 border-[0.5px] border-black/5 mb-12 md:mb-16">
                 <a href={CONTACT_LINKS.email} className="bg-white p-8 md:p-12 group hover:bg-black transition-all cursor-pointer">
                    <p className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-30 group-hover:text-white transition-colors mb-2 md:mb-4 text-center">Email</p>
                    <p className="text-[10px] md:text-xs font-medium group-hover:text-white transition-colors break-words text-center">matheusdarocha21@gmail.com</p>
                 </a>
                 <a href={CONTACT_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-white p-8 md:p-12 group hover:bg-black transition-all cursor-pointer">
                    <p className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-30 group-hover:text-white transition-colors mb-2 md:mb-4 text-center">WhatsApp</p>
                    <p className="text-[10px] md:text-xs font-medium group-hover:text-white transition-colors break-words text-center">(47) 9 9122-2110</p>
                 </a>
                 <a href={CONTACT_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white p-8 md:p-12 group hover:bg-black transition-all cursor-pointer">
                    <p className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-30 group-hover:text-white transition-colors mb-2 md:mb-4 text-center">LinkedIn</p>
                    <p className="text-[10px] md:text-xs font-medium group-hover:text-white transition-colors break-words text-center">/in/matheusdarocha21</p>
                 </a>
                 <div className="bg-white p-8 md:p-12">
                    <p className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-30 mb-2 md:mb-4 text-center">Localização</p>
                    <p className="text-[10px] md:text-xs font-medium break-words text-center">Blumenau, SC</p>
                 </div>
              </div>

              <a 
                href={CONTACT_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-block px-12 md:px-16 py-5 md:py-6 border border-black text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] hover:bg-black hover:text-white transition-all font-bold"
              >
                Enviar Mensagem (WhatsApp)
              </a>
           </div>
        </section>

        <footer className="py-20 text-center opacity-20 text-[7px] md:text-[8px] uppercase tracking-[0.5em]">
          Matheus da Rocha • MMXVIII - MMXXV
        </footer>
      </div>

      <div className="hidden sm:block fixed bottom-[60px] left-[60px] z-[60] pointer-events-none">
         <div className="text-[8px] uppercase tracking-[0.5em] origin-left -rotate-90 opacity-10 italic">MATHEUS — SISTEMAS & DISCIPLINAS</div>
      </div>
    </div>
  );
};

export default App;
