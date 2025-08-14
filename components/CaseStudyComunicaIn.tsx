import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, RadialBarChart, RadialBar } from 'recharts';
import { Button } from './ui/button';
import { Download } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export function CaseStudyComunicaIn() {
  const { t, language } = useLanguage();

  const handleDownloadCase = async () => {
    // URLs dos PDFs do case Comunica.In para cada idioma
    const caseUrls = {
      pt: '/pdfs/cases/Case_Comunica_In_PT.pdf',
      en: '/pdfs/cases/Case_Comunica_In_EN.pdf',
      es: '/pdfs/cases/Case_Comunica_In_ES.pdf',
      fr: '/pdfs/cases/Case_Comunica_In_FR.pdf'
    };
    
    const pdfUrl = caseUrls[language] || caseUrls.pt;
    
    try {
      // Verificar se o arquivo existe antes de tentar baixar
      const response = await fetch(pdfUrl, { method: 'HEAD' });
      
      if (response.ok) {
        // Arquivo existe, proceder com o download
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = `Case_Comunica_In_${language.toUpperCase()}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // Fallback para o case em português se o idioma específico não existir
        const fallbackUrl = caseUrls.pt;
        const fallbackResponse = await fetch(fallbackUrl, { method: 'HEAD' });
        
        if (fallbackResponse.ok) {
          const link = document.createElement('a');
          link.href = fallbackUrl;
          link.download = 'Case_Comunica_In_PT.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          console.warn('Arquivo de case não encontrado');
          alert('Case study temporariamente indisponível. Tente novamente mais tarde.');
        }
      }
    } catch (error) {
      // Em caso de erro na verificação, tentar o download direto
      console.warn('Erro ao verificar arquivo:', error);
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = `Case_Comunica_In_${language.toUpperCase()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  // Dados para gráficos
  const satisfactionData = [
    { month: 'Baseline', satisfaction: 65, meta: 80 },
    { month: 'Mês 1', satisfaction: 68, meta: 80 },
    { month: 'Mês 2', satisfaction: 72, meta: 80 },
    { month: 'Mês 3', satisfaction: 78, meta: 80 },
    { month: 'Mês 4', satisfaction: 82, meta: 80 },
    { month: 'Mês 5', satisfaction: 85, meta: 80 },
    { month: 'Mês 6', satisfaction: 88, meta: 80 },
    { month: 'Mês 7', satisfaction: 91, meta: 80 },
    { month: 'Mês 8', satisfaction: 93, meta: 80 }
  ];

  const supportReductionData = [
    { feature: 'Dashboard Principal', before: 45, after: 20, reduction: 56 },
    { feature: 'Relatórios', before: 32, after: 18, reduction: 44 },
    { feature: 'Configurações', before: 28, after: 12, reduction: 57 },
    { feature: 'Integrações', before: 38, after: 15, reduction: 61 },
    { feature: 'Fluxo de Aprovação', before: 42, after: 18, reduction: 57 }
  ];

  const kpiMetrics = [
    { name: 'Satisfação', current: 93, target: 80, color: '#646cff' },
    { name: 'Eficiência', current: 75, target: 60, color: '#398007' },
    { name: 'Adoção', current: 68, target: 50, color: '#8b8b8b' }
  ];

  const beforeAfterData = [
    { metric: 'Tempo médio de onboarding', before: '5 dias', after: '2 dias' },
    { metric: 'Componentes únicos', before: '47', after: '12' },
    { metric: 'Consistency Score', before: '34%', after: '91%' },
    { metric: 'Developer Velocity', before: '1.2x', after: '2.1x' }
  ];

  const ProcessIllustration = ({ step, title, description }: { step: number; title: string; description: string }) => (
    <div className="bg-muted p-8 text-center">
      <div className="w-20 h-20 bg-chart-1 rounded-full mx-auto mb-6 flex items-center justify-center text-background font-light text-2xl">
        {step}
      </div>
      <h4 className="text-lg font-medium mb-4 text-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );

  const DesignSystemIllustration = () => (
    <div className="bg-muted p-8">
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="aspect-square bg-chart-1 rounded-none opacity-80"></div>
        <div className="aspect-square bg-chart-3 rounded-none opacity-80"></div>
        <div className="aspect-square bg-chart-2 rounded-none opacity-80"></div>
        <div className="aspect-square bg-chart-5 rounded-none opacity-80"></div>
        <div className="aspect-square bg-chart-4 rounded-none opacity-80"></div>
        <div className="aspect-square bg-chart-1 rounded-none opacity-80"></div>
      </div>
      <div className="text-center">
        <h4 className="text-lg font-medium mb-2 text-foreground">Design System</h4>
        <p className="text-sm text-muted-foreground">Componentes unificados e reutilizáveis</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-2 pb-8">
        <div className="max-w-4xl mx-auto px-8">
          <div className="mb-4">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Case Study · Liderança de Design
            </div>
            <div className="editorial-divider-short"></div>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-light leading-none tracking-tight mb-8 text-foreground">
            Liderando a Transformação do Design na Comunica.In
          </h1>
          
          <p className="text-xl leading-relaxed text-muted-foreground mb-8">
            Estruturando Processos para Escalar o Produto
          </p>

          {/* Download Case Study Button */}
          <div className="mb-12">
            <Button 
              onClick={handleDownloadCase}
              className="text-sm uppercase tracking-widest bg-foreground text-background hover:bg-foreground/90 transition-colors px-6 py-3"
            >
              <Download className="w-4 h-4 mr-2" />
              {t('projects.download.individual')}
            </Button>
          </div>

          {/* Context Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Empresa
              </div>
              <div className="text-foreground">Comunica.In</div>
            </div>
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Papel
              </div>
              <div className="text-foreground">Product Design Leader</div>
            </div>
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Duração
              </div>
              <div className="text-foreground">18 meses</div>
            </div>
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Resultado
              </div>
              <div className="text-foreground">93% satisfação</div>
            </div>
          </div>
        </div>
      </section>

      <div className="editorial-divider"></div>

      {/* Context & Challenge */}
      <section className="pt-2 pb-8">
        <div className="max-w-4xl mx-auto px-8">
          <div className="mb-8">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Contexto & Desafio
            </div>
            <h2 className="text-3xl lg:text-4xl font-light mb-8 text-foreground">
              O Cenário Encontrado
            </h2>
            <div className="editorial-divider-short"></div>
          </div>

          <div className="space-y-12">
            <div className="space-y-8 text-lg leading-relaxed">
              <p className="text-foreground">
                A Comunica.in oferece uma plataforma robusta de gerenciamento de comunicação corporativa 
                multicanal (e-mail, Slack, WhatsApp), fornecendo métricas detalhadas de engajamento. 
                Ao entrar na empresa, encontrei um cenário de grande potencial, mas com uma área de 
                Design ainda imatura.
              </p>
            </div>

            {/* Problem Illustration */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-medium mb-6 text-foreground">Principais Problemas Identificados</h3>
                <div className="space-y-4">
                  <div className="flex items-start border-l-2 border-destructive pl-4">
                    <div>
                      <div className="font-medium text-foreground">Processos Inexistentes</div>
                      <div className="text-sm text-muted-foreground">Falta de workflow estruturado para design</div>
                    </div>
                  </div>
                  <div className="flex items-start border-l-2 border-destructive pl-4">
                    <div>
                      <div className="font-medium text-foreground">Interface Inconsistente</div>
                      <div className="text-sm text-muted-foreground">47 componentes únicos sem padronização</div>
                    </div>
                  </div>
                  <div className="flex items-start border-l-2 border-destructive pl-4">
                    <div>
                      <div className="font-medium text-foreground">Fluxos Complexos</div>
                      <div className="text-sm text-muted-foreground">Curva de aprendizado de 5 dias para novos usuários</div>
                    </div>
                  </div>
                  <div className="flex items-start border-l-2 border-destructive pl-4">
                    <div>
                      <div className="font-medium text-foreground">Equipe Desmotivada</div>
                      <div className="text-sm text-muted-foreground">Ausência de plano de carreira e rituais</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted p-8">
                <h4 className="text-lg font-medium mb-6 text-foreground text-center">
                  Impacto dos Problemas
                </h4>
                <div className="space-y-4 text-center">
                  <div className="text-3xl font-light text-destructive">65%</div>
                  <div className="text-sm text-muted-foreground">Satisfação inicial dos usuários</div>
                  <div className="text-3xl font-light text-destructive">5 dias</div>
                  <div className="text-sm text-muted-foreground">Tempo médio de onboarding</div>
                  <div className="text-3xl font-light text-destructive">47</div>
                  <div className="text-sm text-muted-foreground">Componentes únicos criados</div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-chart-1 pl-8">
              <h3 className="text-xl font-medium mb-4 text-foreground">O Desafio Central</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Evoluir a maturidade do Design na organização, transformando-o de um mero executor 
                de telas para um parceiro estratégico essencial para o crescimento do produto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="editorial-divider"></div>

      {/* Hypothesis & Approach */}
      <section className="pt-2 pb-8">
        <div className="max-w-4xl mx-auto px-8">
          <div className="mb-8">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Estratégia
            </div>
            <h2 className="text-3xl lg:text-4xl font-light mb-8 text-foreground">
              Hipótese e Abordagem
            </h2>
            <div className="editorial-divider-short"></div>
          </div>

          <div className="space-y-12">
            <div className="border-l-4 border-chart-1 pl-8">
              <h3 className="text-xl font-medium mb-4 text-foreground">A Hipótese</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Ao implementar um processo de design claro, introduzir um Design System para garantir 
                consistência e criar rituais de colaboração e mentoria, conseguiríamos não apenas 
                melhorar a qualidade e a usabilidade do produto, mas também aumentar a eficiência 
                e o engajamento da equipe de design, permitindo que eles focassem em desafios mais 
                complexos e estratégicos.
              </p>
            </div>

            {/* Process Steps */}
            <div>
              <h3 className="text-xl font-medium mb-8 text-foreground text-center">
                Processo de Design: Da Análise à Ação Estruturada
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ProcessIllustration
                  step={1}
                  title="Pesquisa e Descoberta"
                  description="Diagnosticando a raiz da inconsistência através de conversas com desenvolvimento e análise de componentes existentes."
                />
                <ProcessIllustration
                  step={2}
                  title="Definição e Arquitetura"
                  description="Desenhando colaborativamente o novo modelo de trabalho com workflow iterativo e KPIs claros."
                />
                <ProcessIllustration
                  step={3}
                  title="Ideação e Colaboração"
                  description="Implementando Design Collab como coração do processo, criando componentes de forma colaborativa."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="editorial-divider"></div>

      {/* Detailed Process */}
      <section className="pt-2 pb-8">
        <div className="max-w-4xl mx-auto px-8">
          <div className="mb-8">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Processo Detalhado
            </div>
            <h2 className="text-3xl lg:text-4xl font-light mb-8 text-foreground">
              Implementação Passo a Passo
            </h2>
            <div className="editorial-divider-short"></div>
          </div>

          <div className="space-y-16">
            {/* Step 1: Research */}
            <div className="space-y-8">
              <div className="border-l-4 border-chart-1 pl-8">
                <h3 className="text-2xl font-light mb-4 text-foreground">
                  1. Pesquisa e Descoberta
                </h3>
                <h4 className="text-lg font-medium mb-4 text-foreground">
                  Diagnosticando a Raiz da Inconsistência
                </h4>
              </div>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Meu primeiro passo foi investigar. A falta de padrão na interface era um sintoma visível, 
                mas eu precisava entender a causa. Em conversas com a equipe de desenvolvimento, o diagnóstico 
                se tornou claro: não havia critérios definidos para a criação de novos componentes, o que 
                levava a recriações constantes e inconsistentes.
              </p>
              
              <div className="bg-muted p-8">
                <h4 className="text-lg font-medium mb-4 text-foreground">Insight Principal</h4>
                <p className="text-muted-foreground">
                  Sem um sistema centralizado e um acordo sobre como e quando criar elementos de interface, 
                  a dívida técnica e de design só aumentaria. Em alinhamento com o Head de Desenvolvimento, 
                  definimos como prioridade a unificação das bibliotecas de componentes.
                </p>
              </div>
            </div>

            {/* Step 2: Definition */}
            <div className="space-y-8">
              <div className="border-l-4 border-chart-3 pl-8">
                <h3 className="text-2xl font-light mb-4 text-foreground">
                  2. Definição e Arquitetura
                </h3>
                <h4 className="text-lg font-medium mb-4 text-foreground">
                  Desenhando o Novo Ecossistema de Design
                </h4>
              </div>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Com o problema diagnosticado, o passo seguinte foi desenhar, de forma colaborativa, 
                o novo modelo de trabalho. Juntamente com todos os designers, mapeamos e desenhamos 
                um novo fluxograma de trabalho, estabelecendo que este processo seria um framework 
                vivo e adaptável.
              </p>

              {/* KPIs Table */}
              <div>
                <h4 className="text-lg font-medium mb-6 text-foreground">
                  Governança com Métricas - KPIs de Design
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border border-border p-6">
                    <div className="text-2xl font-light text-chart-1 mb-2">Satisfação</div>
                    <div className="text-sm text-muted-foreground mb-4">
                      Monitorada semanalmente com pesquisas randômicas via Hotjar
                    </div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      Meta Trimestral
                    </div>
                  </div>
                  <div className="border border-border p-6">
                    <div className="text-2xl font-light text-chart-3 mb-2">Eficiência</div>
                    <div className="text-sm text-muted-foreground mb-4">
                      Medida pela redução do esforço do usuário (cliques, telas, suporte)
                    </div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      Redução de Esforço
                    </div>
                  </div>
                  <div className="border border-border p-6">
                    <div className="text-2xl font-light text-chart-2 mb-2">Eficácia</div>
                    <div className="text-sm text-muted-foreground mb-4">
                      Acompanhada pela taxa de adoção das novas features
                    </div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      Taxa de Adoção
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Collaboration */}
            <div className="space-y-8">
              <div className="border-l-4 border-chart-2 pl-8">
                <h3 className="text-2xl font-light mb-4 text-foreground">
                  3. Ideação e Colaboração
                </h3>
                <h4 className="text-lg font-medium mb-4 text-foreground">
                  O "Design Collab" em Ação
                </h4>
              </div>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                A sessão "Design Collab" se tornou o coração do nosso novo processo. Um exemplo prático 
                foi a criação de um componente crítico para a plataforma: os KPI Cards. O desafio era 
                criar um componente versátil com critérios rigorosos.
              </p>
              
              <div className="border border-border p-8">
                <h4 className="text-lg font-medium mb-6 text-foreground">
                  Exemplo Prático: Criação dos KPI Cards
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-medium mb-4 text-foreground">Processo</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Benchmarking de soluções existentes</li>
                      <li>• Desenho colaborativo com toda a equipe</li>
                      <li>• Definição de critérios rigorosos</li>
                      <li>• Validação em 30 minutos</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-4 text-foreground">Resultado</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Componente versátil e robusto</li>
                      <li>• Acordo unânime da equipe</li>
                      <li>• Alta capacidade de reuso</li>
                      <li>• Implementação imediata</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="editorial-divider"></div>

      {/* Solution */}
      <section className="pt-2 pb-8">
        <div className="max-w-4xl mx-auto px-8">
          <div className="mb-8">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Solução Implementada
            </div>
            <h2 className="text-3xl lg:text-4xl font-light mb-8 text-foreground">
              Ecossistema de Design Inteligente e Escalável
            </h2>
            <div className="editorial-divider-short"></div>
          </div>

          <div className="space-y-12">
            <p className="text-lg leading-relaxed text-foreground">
              A solução implementada transcendeu a entrega de telas. Construímos um ecossistema 
              de design maduro, focado em eficiência e colaboração. O pilar central foi um 
              Design System enxuto e estratégico, com poucos componentes, mas com alta capacidade de reuso.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <DesignSystemIllustration />
              
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-foreground">
                  Características do Design System
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-chart-1 mr-4"></div>
                    <div>
                      <div className="font-medium text-foreground">Enxuto e Estratégico</div>
                      <div className="text-sm text-muted-foreground">Poucos componentes, alto reuso</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-chart-3 mr-4"></div>
                    <div>
                      <div className="font-medium text-foreground">Governança Proativa</div>
                      <div className="text-sm text-muted-foreground">Checklist por feature para novos componentes</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-chart-2 mr-4"></div>
                    <div>
                      <div className="font-medium text-foreground">Colaborativo</div>
                      <div className="text-sm text-muted-foreground">Processo de alinhamento com desenvolvimento</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Before/After Comparison */}
            <div>
              <h3 className="text-xl font-medium mb-8 text-foreground text-center">
                Transformação Antes vs. Depois
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-6 font-medium text-foreground">Métrica</th>
                      <th className="text-left py-4 px-6 font-medium text-foreground">Antes</th>
                      <th className="text-left py-4 px-6 font-medium text-foreground">Depois</th>
                    </tr>
                  </thead>
                  <tbody>
                    {beforeAfterData.map((row, index) => (
                      <tr key={index} className="border-b border-border">
                        <td className="py-4 px-6 text-muted-foreground">{row.metric}</td>
                        <td className="py-4 px-6 text-destructive">{row.before}</td>
                        <td className="py-4 px-6 text-chart-3">{row.after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="editorial-divider"></div>

      {/* Results & Impact */}
      <section className="pt-2 pb-8">
        <div className="max-w-4xl mx-auto px-8">
          <div className="mb-8">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Resultados
            </div>
            <h2 className="text-3xl lg:text-4xl font-light mb-8 text-foreground">
              Transformando Design em Valor Mensurável
            </h2>
            <div className="editorial-divider-short"></div>
          </div>

          <div className="space-y-16">
            {/* KPI Metrics Radial Chart */}
            <div>
              <h3 className="text-xl font-medium mb-8 text-foreground text-center">
                Performance dos KPIs vs. Metas
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="80%" data={kpiMetrics}>
                      <RadialBar dataKey="current" cornerRadius={0} fill="#646cff" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#fafafa', 
                          border: '1px solid #e5e5e5',
                          borderRadius: '0'
                        }} 
                      />
                    </RadialBarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="space-y-6">
                  {kpiMetrics.map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{metric.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {metric.current}% / {metric.target}%
                        </span>
                      </div>
                      <div className="w-full bg-muted h-2">
                        <div 
                          className="h-2 transition-all duration-300"
                          style={{ 
                            width: `${(metric.current / 100) * 100}%`,
                            backgroundColor: metric.color 
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Satisfaction Evolution */}
            <div>
              <h3 className="text-xl font-medium mb-6 text-foreground">
                Evolução da Satisfação do Usuário
              </h3>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={satisfactionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                    <XAxis dataKey="month" stroke="#6b6b6b" />
                    <YAxis stroke="#6b6b6b" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#fafafa', 
                        border: '1px solid #e5e5e5',
                        borderRadius: '0'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="satisfaction" 
                      stroke="#646cff" 
                      strokeWidth={3}
                      dot={{ fill: '#646cff', strokeWidth: 2, r: 6 }}
                      name="Satisfação Atual"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="meta" 
                      stroke="#8b8b8b" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={false}
                      name="Meta (80%)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>Resultado:</strong> Superamos drasticamente nossa meta inicial de 80%. 
                As medições via Hotjar mostraram uma satisfação média de 85%, com picos de 93%.
              </p>
            </div>

            {/* Support Reduction */}
            <div>
              <h3 className="text-xl font-medium mb-6 text-foreground">
                Redução de Chamados de Suporte por Feature
              </h3>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={supportReductionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                    <XAxis dataKey="feature" stroke="#6b6b6b" />
                    <YAxis stroke="#6b6b6b" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#fafafa', 
                        border: '1px solid #e5e5e5',
                        borderRadius: '0'
                      }} 
                    />
                    <Bar dataKey="before" fill="#8b8b8b" name="Antes" />
                    <Bar dataKey="after" fill="#398007" name="Depois" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>Impacto:</strong> Conseguimos uma redução de 25% a 56% nos chamados de suporte 
                relacionados a fluxos que foram redesenhados.
              </p>
            </div>

            {/* Operational Impact */}
            <div className="bg-muted p-8">
              <h3 className="text-xl font-medium mb-8 text-foreground text-center">
                Impacto Operacional
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-light text-chart-1 mb-2">+40%</div>
                  <div className="font-medium text-foreground mb-1">Velocidade de Entrega</div>
                  <div className="text-sm text-muted-foreground">
                    Squads entregando mais features mantendo a mesma pontuação
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-light text-chart-3 mb-2">-45%</div>
                  <div className="font-medium text-foreground mb-1">Tempo de Desenvolvimento</div>
                  <div className="text-sm text-muted-foreground">
                    Redução no tempo de implementação de novas features
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-light text-chart-2 mb-2">91%</div>
                  <div className="font-medium text-foreground mb-1">Consistency Score</div>
                  <div className="text-sm text-muted-foreground">
                    Aumento significativo na consistência da interface
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="editorial-divider"></div>

      {/* Learnings */}
      <section className="pt-2 pb-8">
        <div className="max-w-4xl mx-auto px-8">
          <div className="mb-8">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Reflexões
            </div>
            <h2 className="text-3xl lg:text-4xl font-light mb-8 text-foreground">
              Aprendizados: Reflexões sobre Liderança e Estratégia
            </h2>
            <div className="editorial-divider-short"></div>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="border-l-4 border-chart-1 pl-8">
                  <h3 className="text-xl font-medium mb-4 text-foreground">
                    O Design como Influenciador Estratégico
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Meu principal aprendizado foi que a função mais poderosa do Design é influenciar 
                    as tomadas de decisão com dados, provando seu valor como um pilar estratégico 
                    para o negócio.
                  </p>
                </div>
                
                <div className="border-l-4 border-chart-3 pl-8">
                  <h3 className="text-xl font-medium mb-4 text-foreground">
                    Agilidade no Alinhamento é Chave
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Hoje, eu iniciaria o processo com um mapeamento de fluxo imediato das funções 
                    principais e aceleraria o alinhamento com os líderes de Desenvolvimento e 
                    Estratégia para otimizar ainda mais o tempo para gerar impacto.
                  </p>
                </div>
              </div>
              
              <div className="bg-muted p-8">
                <h3 className="text-xl font-medium mb-6 text-foreground">
                  Fatores Críticos de Sucesso
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-chart-1 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-foreground">Colaboração Cross-functional</div>
                      <div className="text-sm text-muted-foreground">
                        Alinhamento próximo com desenvolvimento desde o início
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-chart-3 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-foreground">Métricas Claras</div>
                      <div className="text-sm text-muted-foreground">
                        KPIs específicos para medir sucesso do design
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-chart-2 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-foreground">Processo Iterativo</div>
                      <div className="text-sm text-muted-foreground">
                        Framework vivo e adaptável às necessidades
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-chart-5 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-foreground">Governança Proativa</div>
                      <div className="text-sm text-muted-foreground">
                        Checklists e processos para manter consistência
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-chart-1 text-background p-8">
              <h3 className="text-xl font-medium mb-6 text-center">
                Legado e Impacto Duradouro
              </h3>
              <p className="text-lg text-center leading-relaxed max-w-3xl mx-auto">
                Transformamos uma área de design imatura em um parceiro estratégico essencial, 
                estabelecendo processos escaláveis que continuam gerando valor para o negócio 
                e elevando a maturidade de design da organização. O framework criado serve como 
                base para futuras expansões e melhorias contínuas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="editorial-divider"></div>
    </div>
  );
}