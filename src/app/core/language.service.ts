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
        'Error de lectura o credencial no encontrada en el sistema.': 'Read error or credential not found in the system.'
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
            if (p.titulo.includes('E-commerce')) {
                p.titulo = 'Secure E-commerce with Angular';
                p.descripcion = 'E-commerce platform with secure backend architecture, SQL injection prevention, and JWT authentication.';
            } else if (p.titulo.includes('Pentesting')) {
                p.titulo = 'Machine Pentesting [Target] - HackTheBox';
                p.descripcion = 'Web vulnerability exploitation, privilege escalation, and filter bypass in a controlled environment.';
            } else if (p.titulo.includes('Script de automatización')) {
                p.titulo = 'Python Automation Script for Port Analysis';
                p.descripcion = 'Tool developed for rapid port scanning and service enumeration in corporate networks.';
            }
            return p;
        });

        return translated;
    }
}
