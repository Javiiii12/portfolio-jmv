const fs = require('fs');

const dataRaw = fs.readFileSync('public/data.json', 'utf8');
const data = JSON.parse(dataRaw);

const ewptPayload = {
    "id": "ewpt",
    "verificationUrl": "https://certs.ine.com/ae21ed93-89cc-4c4e-a285-b2ef1027f34b#acc.lV7QoFrv",
    "date": "2023-04-12",
    "es": {
        "title": "eLearnSecurity Web Application Penetration Tester",
        "challengeText": "La certificación eWPT es una evaluación práctica exhaustiva que demuestra habilidades avanzadas en auditoría de aplicaciones web. Va más allá del uso de escáneres automáticos, requiriendo un enfoque metodológico profundo alineado con el estándar OWASP Top 10.",
        "preparationText": "La fase de preparación implicó un análisis detallado de la seguridad web, dominando la identificación y explotación manual de vulnerabilidades críticas como Inyecciones SQL (SQLi), Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF) y bypass de mecanismos de autenticación o autorización.",
        "examText": "El examen consiste en una prueba de penetración web de caja negra (Black-Box) sobre una aplicación corporativa realista. Exige tanto la explotación técnica para comprometer los datos y el servidor subyacente, como la elaboración de un informe profesional (Pentest Report) detallando hallazgos y medidas de remediación.",
        "reviewBest": "El enfoque metodológico y la elaboración de un informe profesional.",
        "reviewWorst": "Menos centrado en el análisis de código fuente puro en comparación con el OSWE.",
        "verdict": "Un salto cualitativo vital en la auditoría web. El eWPT asienta las bases para enfrentarse a arquitecturas web complejas, enseñando a buscar fallos lógicos que los escáneres pasan por alto. Es la antesala perfecta y necesaria para retos de código fuente como el OSWE."
    },
    "en": {
        "title": "eLearnSecurity Web Application Penetration Tester",
        "challengeText": "The eWPT certification is a comprehensive practical assessment demonstrating advanced skills in web application auditing. It goes beyond the use of automated scanners, requiring a deep methodological approach aligned with the OWASP Top 10 standard.",
        "preparationText": "The preparation phase involved detailed web security analysis, mastering the manual identification and exploitation of critical vulnerabilities such as SQL Injections (SQLi), Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), and authentication/authorization mechanism bypasses.",
        "examText": "The exam consists of a Black-Box web penetration test on a realistic corporate application. It requires both technical exploitation to compromise data and the underlying server, as well as the creation of a professional Pentest Report detailing findings and remediation steps.",
        "reviewBest": "The methodological approach and the creation of a professional report.",
        "reviewWorst": "Less focused on pure source code analysis compared to the OSWE.",
        "verdict": "A vital qualitative leap in web auditing. The eWPT lays the foundation for tackling complex web architectures, teaching how to look for logical flaws that scanners miss. It is the perfect and necessary stepping stone for source code challenges like the OSWE."
    }
};

data.certDetails["ewpt"] = ewptPayload;

// Ensure ewpt is in certificaciones array for the home page grid
const ewptExists = data.certificaciones.find(c => c.id.toLowerCase() === 'ewpt');
if (!ewptExists) {
    data.certificaciones.push({
        id: "ewpt",
        nombre: "eLearnSecurity Web Application Penetration Tester",
        emisor: "INE Security",
        detalles: "OWASP Top 10 Aligned Web Application Auditing"
    });
} else {
    ewptExists.emisor = "INE Security";
}

fs.writeFileSync('public/data.json', JSON.stringify(data, null, 4));
console.log("eWPT data successfully injected into data.json!");
