import { Injectable, signal } from '@angular/core';
import { IPortfolioData, ICertificacion, IFormacion, IExperiencia, IProyecto } from './portfolio.interfaces';

export type Language = 'ES' | 'EN';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    currentLang = signal<Language>('ES');

    // UI Dictionary
    private dict: Record<string, string> = {
        'Todos': 'All',
        'Desarrollo': 'Development',
        'Ciberseguridad': 'Cybersecurity',
        '[ TODOS ]': '[ ALL ]',
        '[ DESARROLLO ]': '[ DEVELOPMENT ]',
        '[ CIBERSEGURIDAD ]': '[ CYBERSECURITY ]',
        'IA & Research': 'AI & Research',
        '[ IA & RESEARCH ]': '[ AI & RESEARCH ]',
        'Bug Bounty': 'Bug Bounty',
        '[ BUG BOUNTY ]': '[ BUG BOUNTY ]',
        '¿Hablamo$?': 'Shall we talk?',
        'Listo para nuevos descubrimientos y retos arquitectónicos en Ciberseguridad y Full Stack.': 'Ready for new architectural challenges and discoveries in Cybersecurity and Full Stack.',
        'Descargar CV PDF': 'Download CV PDF',
        'Completado': 'Completed',
        'Cursando': 'In Progress',
        '[APTO]': '[PASSED]',
        'APTO': 'PASSED',
        '> Execute ./code': '> Execute ./code',
        '> View Write-up': '> View Write-up',
        '© 2026 Javier Martínez Valiente. Todos los derechos reservados.': '© 2026 Javier Martínez Valiente. All rights reserved.',
        '[ SECCIÓN: TEMARIO Y VULNERABILIDADES (AWAE) ]': '[ SECTION: SYLLABUS AND VULNERABILITIES (AWAE) ]',
        '[ SECCIÓN: MATERIAL DE ESTUDIO Y PREPARACIÓN ]': '[ SECTION: STUDY MATERIAL AND PREPARATION ]',
        '>_ VEREDICTO:': '>_ VERDICT:',
        '>_ VERDICT:': '>_ VERDICT:',
        'Status: VERIFIED': 'Status: VERIFIED',
        '[ REGRESAR A LA PÁGINA PRINCIPAL ]': '[ RETURN TO MAIN PAGE ]',
        'Examen de Certificación': 'Certification Exam',
        '> Solicitando datos de la base central...': '> Requesting data from the central base...',
        'Error de lectura o credencial no encontrada en el sistema.': 'Read error or credential not found in the system.',
        'CAMPAIGN STATUS': 'CAMPAIGN STATUS',
        'RANGO GLOBAL': 'GLOBAL RANK',
        'AGUJAS / PUNTOS': 'NEEDLES / POINTS',
        'ESTADO DE LA CAMPAÑA': 'CAMPAIGN STATUS',
        '[ REGISTRO_MISIÓN: FASE_01 ]': '[ MISSION_LOG: PHASE_01 ]',
        '[ REGISTRO_MISIÓN: FASE_02 ]': '[ MISSION_LOG: PHASE_02 ]',
        'EVIDENCIA_OPERACIONAL': 'OPERATIONAL_EVIDENCE',
        'REGISTROS_ACREDITACIÓN': 'ACCREDITATION_LOGS',
        'ID Credencial': 'Credential ID',
        'Obtenida': 'Achieved',
        'EL_RETO': 'THE_CHALLENGE',
        'FASE_PREPARACIÓN': 'PREPARATION_PHASE',
        'PUNTOS_FUERTES': 'HIGHLIGHTS',
        'PUNTOS_DÉBILES': 'LOWLIGHTS',
        '[ VERIFICAR_CREDENCIAL ]': '[ VERIFY_CREDENTIAL ]',
        '[ HABILIDADES_TÁCTICAS ]': '[ TACTICAL_SKILLS ]',
        '[ OPERACIONES_OFENSIVAS ]': '[ OFFENSIVE_OPERATIONS ]',
        '[ OPERACIONES_ACTIVAS ]': '[ ACTIVE_OPERATIONS ]',
        '[ VISITAR PROYECTO LIVE ]': '[ VISIT LIVE PROJECT ]',
        'Descripción': 'Description',
        'Arquitectura Técnica': 'Technical Architecture',
        'Estableciendo conexión cifrada con el proyecto...': 'Establishing encrypted connection with the project...',
        '[ EXP_PROFESIONAL ]': '[ PROFESSIONAL_EXP ]',
        '[ FORMACIÓN_CENTRAL ]': '[ CORE_EDUCATION ]'
    };

    toggleLanguage() {
        this.currentLang.update(lang => lang === 'ES' ? 'EN' : 'ES');
    }

    translateUI(text: string): string {
        if (!text) return text;
        if (this.currentLang() === 'ES') return text;
        return this.dict[text] || text;
    }

    translateData(data: IPortfolioData): IPortfolioData {
        if (this.currentLang() === 'ES') return data;

        // Deep copy
        const translated: IPortfolioData = JSON.parse(JSON.stringify(data));

        // Translate Profile
        translated.perfil.titular = 'Cybersecurity Specialist & Full Stack Developer';
        translated.perfil.ubicacion = 'Albacete, Spain';
        translated.perfil.bio = 'Cybersecurity professional with a solid foundation in Full Stack development. Specialized in vulnerability analysis, network auditing, and secure process automation. Proven ability to identify risks and design resilient architectures. Passionate about ethical hacking and continuous improvement in defensive and offensive environments.\n\nAt this stage, I have specialized in analyzing and mitigating web vulnerabilities, while acquiring knowledge in creating intuitive, responsive, and optimized interfaces for both users and search engines. My experience on platforms like Hack The Box and PortSwigger labs has allowed me to evolve and perfect my skills, adapting to current industry challenges.\n\nMy passion and dedication for cybersecurity, combined with my growing experience in web development, drive me to continue learning and contributing to the creation of secure, innovative, and efficient digital environments.';

        // Translate Skills
        translated.habilidades_destacadas.ciberseguridad_y_hacking = [
            "Network and systems auditing with domain in Nmap and Wireshark.",
            "Web vulnerability analysis (OWASP Top 10) using Burp Suite Pro.",
            "Exploitation and Post-Exploitation with Metasploit Framework.",
            "Development of automation scripts in Python and Bash."
        ];
        translated.habilidades_destacadas.diseno_y_desarrollo_web = [
            "Full Stack Architecture with Angular and TypeScript.",
            "Creation of responsive interfaces and advanced UI with Tailwind CSS.",
            "Integration of UX/UI principles for secure interfaces.",
            "SEO optimization and performance-oriented best practices."
        ];
        translated.habilidades_destacadas.otros_conocimientos = [
            "Systems hardening and Linux server administration.",
            "Domain and management of relational databases (MySQL/MariaDB) and SQL Injection prevention with SQLMap.",
            "Deployment of IT infrastructures.",
            "Version control (Git)."
        ];

        // Translate Certs
        translated.certificaciones = translated.certificaciones.map((cert: ICertificacion) => {
            if (cert.id === 'OSWE') cert.detalles = 'Advanced specialization in web vulnerability exploitation (White-box). Complex logic flaws manipulation, authentication bypass, and Remote Code Execution (RCE).';
            if (cert.id === 'OSWP') cert.detalles = 'Critical specialization in wireless network security audits and exploitation of WEP/WPA2 protocols.';
            if (cert.id === 'eCCPT') cert.detalles = 'Real simulation of corporate Pentesting with network pivoting, Post-Exploitation, and exploit development based on Buffer Overflow.';
            if (cert.id === 'eWPT') cert.detalles = 'Exhaustive analysis of web applications, manual discovery and exploitation of OWASP Top 10 vulnerabilities, and professional technical reporting.';
            if (cert.id === 'eJPT') cert.detalles = 'Practical certification focused on Pentesting methodologies, basic network tools usage, and iterative Black-box exploitation.';
            return cert;
        });

        // Translate Education
        translated.formacion = translated.formacion.map((form: IFormacion) => {
            if (form.titulacion.includes('Full Stack Developer')) form.titulacion = 'Full Stack Developer (Backend Specialization)';
            if (form.titulacion.includes('Técnico Superior')) form.titulacion = 'Higher Technician in Web App Development (DAW)';
            if (form.titulacion.includes('Certificado')) form.titulacion = 'Level 3 Professional Certificate in Computer Security';
            if (form.titulacion.includes('Técnico en Administración')) form.titulacion = 'Tech in Network Computer Systems Administration (ASIR)';

            form.fecha = form.fecha.replace('abr.', 'Apr.').replace('dic.', 'Dec.').replace('sept.', 'Sept.').replace('feb.', 'Feb.').replace('oct.', 'Oct.');

            form.estado = this.dict[form.estado] || form.estado;

            if (form.descripcion.includes('Máster Full Stack Developer')) form.descripcion = 'Master Full Stack Developer. Full Stack architecture, frontend development (Angular), logic and scripting (Python, JS), and database management.';
            if (form.descripcion.includes('Programación integral web')) form.descripcion = 'Comprehensive web programming. Design of relational databases and development of modern user interfaces and tools.';
            if (form.descripcion.includes('Configuración de sistemas seguros')) form.descripcion = 'Configuration of secure systems, incident management, security auditing, cryptography, and regulatory compliance.';
            if (form.descripcion.includes('Especialización en administración')) form.descripcion = 'Specialization in systems administration, networking, and deployment of secure infrastructures.';

            if (form.titulacion.includes('Certificado en Python')) {
                form.titulacion = 'Python Certificate by UNIR';
                form.institucion = 'Automation and Pentesting Tools';
                form.descripcion = 'Development of automation scripts for security tasks, creation of custom pentesting tools, and forensic data analysis.';
                form.fecha = 'Apr 24, 2025 - Dec 19, 2025';
            }

            return form;
        });

        // Translate Experience
        translated.experiencia = translated.experiencia.map((exp: IExperiencia) => {
            if (exp.puesto.includes('Auditor')) {
                exp.puesto = 'Junior Security Auditor';
                exp.fecha = exp.fecha.replace('Oct', 'Oct').replace('Dic', 'Dec');
                exp.hitos = [
                    'Technical audit of web and infrastructure vulnerabilities.',
                    'Writing executive reports for the development team.',
                    'Controlled exploitation and support in hardening validation servers.'
                ];
            } else {
                exp.puesto = 'Web Administrator & IT Security Manager';
                exp.fecha = exp.fecha.replace('abr.', 'Apr.');
                exp.hitos = [
                    'Integral administration and systematic hardening of the corporate CMS.',
                    'Identity and Access Management (IAM), configuring roles and minimum privileges.',
                    '24/7 architecture monitoring and deployment of backup policies.'
                ];
            }
            return exp;
        });

        // Translate Projects
        translated.proyectos = translated.proyectos.map((p: IProyecto) => {
            if (p.titulo.includes('Simulador OPE SESCAM')) {
                p.titulo = 'SESCAM OPE Simulator';
                p.descripcion = 'Development of an interactive web platform for SESCAM public exam preparation. Includes real-time grading, random mode, timer, mock exams, and progress tracking.';
            } else if (p.titulo.includes('Simulador de Test ASIR')) {
                p.titulo = 'ASIR Test Simulator Platform';
                p.descripcion = 'Development of an interactive web platform for exam simulation. Architecture designed from scratch using semantic HTML, modern CSS (responsive interface) and Vanilla JavaScript for simulator logic and data loading.';
            } else if (p.titulo.includes('Hack The Box')) {
                p.titulo = 'Hack The Box - Official Profile';
                p.descripcion = 'My progression on the leading ethical hacking platform. Specializing in advanced machines and cryptography/web challenges.';
            } else if (p.titulo.includes('Echo Response')) {
                p.descripcion = "Active participation in the official OffSec 'Echo Response' event. Solved tactical cybersecurity challenges under pressure, achieving the official badge and ranking in the global Top 8% (Rank 341 out of 4267 participants).";
            } else if (p.titulo.includes('Investigador en Programas de Bug Bounty')) {
                p.titulo = 'Bug Bounty Program Researcher';
                p.descripcion = 'Active participation in coordinated disclosure platforms like YesWeHack. Continuous security auditing, vulnerability identification (OWASP Top 10, logic flaws), and technical report writing (PoCs) in production environments under strict scopes.';
            } else if (p.titulo.includes('Desarrollo con IA Generativa')) {
                p.titulo = 'Generative AI Development';
                p.descripcion = 'Implementation of Artificial Intelligence solutions using state-of-the-art language model APIs. Process automation, virtual assistant development, and workflow optimization through Natural Language Processing (NLP) and web application integration.';
                p.tecnologia = 'AI / API Integration';
            } else if (p.titulo.includes('Seguridad en IA & Prompt Engineering')) {
                p.titulo = 'AI Security & Prompt Engineering';
                p.descripcion = 'Advanced design and structuring of prompts to maximize the efficiency and accuracy of LLM models. Investigation of Artificial Intelligence vulnerabilities (such as Prompt Injection or Jailbreaking) and response auditing to ensure safe and ethical AI use.';
            }
            return p;
        });

        // Translate Project Details
        if (translated.projectDetails) {
            const asir = translated.projectDetails['plataforma-simulador-de-test-asir'];
            if (asir) {
                asir.title = 'ASIR TEST SIMULATOR PLATFORM';
                asir.description = [
                    "Comprehensive development of an interactive web platform designed for exam simulation of the ASIR (Network Computer Systems Administration) vocational training cycle.",
                    "The system allows students to evaluate their technical knowledge through modular tests with real-time grading, score statistics, and detailed explanations."
                ];
                asir.architecture = [
                    "<strong>Frontend Core:</strong> Semantic HTML5 and JavaScript (Vanilla ES6+).",
                    "<strong>UI/UX:</strong> Modern CSS3 with Flexbox/Grid, smooth animations and responsive 'Glassmorphism' design.",
                    "<strong>State Management:</strong> Custom implementation without heavy frameworks, optimizing DOM loading.",
                    "<strong>Data Loading:</strong> Modular system based on JSON/JS files to facilitate question scalability."
                ];
            }

            const sescam = translated.projectDetails['simulador-ope-sescam'];
            if (sescam) {
                sescam.title = 'SESCAM OPE SIMULATOR';
                sescam.description = [
                    "Development of an advanced interactive platform designed for comprehensive preparation for the Castilla-La Mancha Health Service (SESCAM) public exams.",
                    "The simulator is optimized to provide an immersive and highly customizable study experience, allowing candidates to train under real exam conditions and track their progress through a history and detailed analytics system."
                ];
                sescam.architecture = [
                    "<strong>Customizable Random Mode:</strong> Algorithm to generate dynamic tests mixing specific or general topics from different academies, with or without time limit.",
                    "<strong>Simulation and Timer Mode:</strong> Strict exam environment simulating real conditions with live timing and penalty for failures.",
                    "<strong>History and Progress:</strong> Persistent local storage system (LocalStorage) to record results, analyze areas for improvement, and review mistakes made in previous attempts.",
                    "<strong>Lightweight and Autonomous Architecture:</strong> Designed in Vanilla JavaScript to maximize performance and speed without depending on databases or complex frameworks, structured through a JSON file system."
                ];
            }
        }

        return translated;
    }
}
