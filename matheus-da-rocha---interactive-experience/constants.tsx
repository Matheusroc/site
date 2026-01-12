
import { Skill, Experience } from './types';

export const SKILLS: Skill[] = [
  { name: 'Office 365', category: 'Tech', level: 90 },
  { name: 'Sienge', category: 'Software', level: 85 },
  { name: 'IA & Automação', category: 'Futuro', level: 85 },
  { name: 'Robótica', category: 'Eng', level: 80 },
  { name: 'Web Dev', category: 'Dev', level: 70 },
  { name: 'Marketing Digital', category: 'Mkt', level: 65 },
  { name: 'Adobe Suite', category: 'Design', level: 70 },
  { name: 'Gestão de Pessoas', category: 'Soft Skill', level: 85 }
];

export const OTHER_SKILLS = [
  "Comunicação Empresarial", "Windows 10 & 11", "Manus Fundamentals", "Google Ads", "Liderança de Equipes", "Organização de Almoxarifado", "AutoCAD (Noções)", "Logística Aplicada"
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Auxiliar de Escritório',
    company: 'Progresso Ambiental LTDA',
    period: '2024 - Presente',
    description: [
      'Eu implementei uma nova logística que resultou em 50% mais agilidade na entrega de materiais.',
      'Eu reformulei do zero o sistema de controle, garantindo precisão total nos gastos.',
      'Eu otimizei a comunicação entre setores, eliminando gargalos em relatórios e notas.',
      'Responsável direto pelo lançamento de faturas, reembolsos e gestão de EPIs.'
    ]
  }
];

export const TIMELINE_DATA = [
  // FUTURO / ATUAL
  { title: "Ensino Médio", place: "COOEPE", year: "Cursando (Prev. 2026)", type: "base" },
  { title: "Carreira Profissional", place: "Progresso Ambiental", year: "Início 2024", type: "base" },

  // 2025
  { title: "Manus Fundamentals Certificate", place: "Manus AI", year: "Dez 2025", type: "extra" },
  { title: "Business Analysts Certificate", place: "Manus AI", year: "Dez 2025", type: "extra" },
  { title: "Manus para Finanças", place: "Manus AI", year: "Dez 2025", type: "extra" },
  { title: "Manus para Gerentes de Produto", place: "Manus AI", year: "Dez 2025", type: "extra" },
  { title: "Dispensado do Exército", place: "Exército Brasileiro", year: "Out 2025", type: "extra" },
  { title: "Como Conseguir um Emprego", place: "Microsoft", year: "Jun 2025", type: "extra" },
  { title: "Comunicação Empresarial", place: "Bradesco", year: "Jun 2025", type: "extra" },
  { title: "Introdução à Inteligência Artificial", place: "IBM", year: "Jun 2025", type: "extra" },

  // 2024
  { title: "Inteligência Artificial", place: "Escola VMF", year: "Dez 2024", type: "extra" },
  { title: "Ensino Fundamental II", place: "E.B.M Francisco Lanser", year: "Dez 2024", type: "extra" },
  { title: "Marketing Digital", place: "Escola VMF", year: "Dez 2024", type: "extra" },
  { title: "Campanha Social Sales", place: "Escola VMF", year: "Nov 2024", type: "extra" },
  { title: "Gestão de Pessoas", place: "Escola VMF", year: "Nov 2024", type: "extra" },
  { title: "Trabalho em Equipe", place: "Escola VMF", year: "Nov 2024", type: "extra" },
  { title: "Como Vender por WhatsApp", place: "Escola VMF", year: "Out 2024", type: "extra" },
  { title: "Líder do Amanhã", place: "Escola VMF", year: "Out 2024", type: "extra" },
  { title: "Desenvolvedor de Apps", place: "Escola VMF", year: "Jun 2024", type: "extra" },
  { title: "Desenvolvedor de Games 2D e 3D", place: "Escola VMF", year: "Jun 2024", type: "extra" },
  { title: "Desenvolvedor de Sistema C# e SQL", place: "Escola VMF", year: "Jun 2024", type: "extra" },
  { title: "Design Digital", place: "Escola VMF", year: "Jun 2024", type: "extra" },
  { title: "Tecnologia Fundamental Completo", place: "Escola VMF", year: "Jun 2024", type: "extra" },

  // 2023 - 2022
  { title: "Google Ads", place: "Escola VMF", year: "Ago 2023", type: "extra" },
  { title: "Desenvolvimento Web", place: "Escola VMF", year: "Dez 2022", type: "extra" },
  { title: "Montagem e Manutenção", place: "Escola VMF", year: "Dez 2022", type: "extra" },

  // FINAL DA LISTA
  { title: "Ensino Fundamental I", place: "E.B.M Francisco Lanser", year: "2010 - 2018", type: "extra" }
];

export const DISCIPLINE_DATA = [
  { label: 'Escoteiro', time: '6 Anos', icon: 'fa-campground', detail: 'Liderança e resiliência.' },
  { label: 'Jiu-Jitsu', time: '5 Anos', icon: 'fa-user-ninja', detail: 'Constância e foco.' },
  { label: 'Vôlei', time: '3 Anos', icon: 'fa-volleyball', detail: 'Estratégia coletiva.' },
  { label: 'Badminton', time: '6 Meses', icon: 'fa-shuttlecock', detail: 'Agilidade e reflexo.' }
];
