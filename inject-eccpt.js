const fs = require('fs');

const dataRaw = fs.readFileSync('public/data.json', 'utf8');
const data = JSON.parse(dataRaw);

const eccptPayload = {
    "id": "eccpt",
    "verificationUrl": "https://certs.ine.com/1e1a2f5b-0184-4402-b68d-21a0ae75c9d1#acc.NRcP2ZVq",
    "date": "2023-05-19",
    "es": {
        "title": "eLearnSecurity Certified Professional Penetration Tester",
        "challengeText": "La certificación eCPPT es una simulación de auditoría del mundo real altamente técnica. Evalúa la capacidad de comprometer una red corporativa completamente segmentada, requiriendo técnicas avanzadas de pivoting, explotación manual y desarrollo de exploits personalizados (Buffer Overflows).",
        "preparationText": "La preparación elevó mis capacidades de Red Team a nivel profesional. Dominé el enrutamiento complejo a través de múltiples subredes comprometidas (Proxychains, Chisel), evasión de antivirus (AV Bypass) básico, escalada de privilegios en entornos Windows/Linux y la explotación de vulnerabilidades de corrupción de memoria.",
        "examText": "El examen consta de 7 días de acceso a un entorno corporativo de caja negra, seguidos de 7 días para redactar un informe comercial completo. Logré comprometer todos los segmentos de la red, demostrando acceso de administrador en el Controlador de Dominio (DC) y entregando un reporte detallado con pruebas de concepto (PoC) y medidas de mitigación.",
        "reviewBest": "El requerimiento de pivoting profundo y desarrollo de exploits personalizados (Buffer Overflows).",
        "reviewWorst": "La complejidad del entorno puede resultar abrumadora sin una metodología sólida.",
        "verdict": "El puente definitivo hacia el pentesting profesional. A diferencia de exámenes tipo CTF, el eCPPT te evalúa como un auditor real, donde el informe final vale tanto como el dominio técnico. Consolidó mi metodología operativa y me preparó para la rigurosidad extrema de OffSec."
    },
    "en": {
        "title": "eLearnSecurity Certified Professional Penetration Tester",
        "challengeText": "The eCPPT certification is a highly technical, real-world audit simulation. It evaluates the ability to compromise a fully segmented corporate network, requiring advanced pivoting techniques, manual exploitation, and custom exploit development (Buffer Overflows).",
        "preparationText": "The preparation elevated my Red Team capabilities to a professional level. I mastered complex routing through multiple compromised subnets (Proxychains, Chisel), basic Antivirus evasion (AV Bypass), privilege escalation in Windows/Linux environments, and the exploitation of memory corruption vulnerabilities.",
        "examText": "The exam consists of 7 days of access to a black-box corporate environment, followed by 7 days to write a comprehensive commercial report. I successfully compromised all network segments, demonstrating administrator access on the Domain Controller (DC), and delivered a detailed report with Proofs of Concept (PoC) and mitigation steps.",
        "reviewBest": "The requirement for deep pivoting and custom exploit development (Buffer Overflows).",
        "reviewWorst": "The complexity of the environment can initially be overwhelming without a solid methodology.",
        "verdict": "The definitive bridge to professional pentesting. Unlike CTF-style exams, the eCPPT evaluates you as a real auditor, where the final report is just as important as technical mastery. It consolidated my operational methodology and prepared me for the extreme rigor of OffSec."
    }
};

data.certDetails["eccpt"] = eccptPayload;

// Ensure eccpt is in certificaciones array for the home page grid
const eccptExists = data.certificaciones.find(c => c.id.toLowerCase() === 'eccpt');
if (!eccptExists) {
    data.certificaciones.push({
        id: "eccpt",
        nombre: "eLearnSecurity Certified Professional Penetration Tester",
        emisor: "INE Security",
        detalles: "Professional Network Pentesting & Exploit Development"
    });
} else {
    eccptExists.emisor = "INE Security";
}

fs.writeFileSync('public/data.json', JSON.stringify(data, null, 4));
console.log("eCPPT data successfully injected into data.json!");
