const fs = require('fs');

const dataRaw = fs.readFileSync('public/data.json', 'utf8');
const data = JSON.parse(dataRaw);

const ejptPayload = {
    "id": "ejpt",
    "verificationUrl": "https://certs.ine.com/9d4cea3c-a0b8-474e-8089-ac8ab2d8da06#acc.sj2tDFLo",
    "date": "2022-09-01",
    "es": {
        "title": "eLearnSecurity Junior Penetration Tester",
        "challengeText": "La certificación eJPT valida las habilidades prácticas fundamentales necesarias para llevar a cabo pruebas de penetración en infraestructuras y redes corporativas. Es una evaluación 100% práctica (Hands-On) basada en metodologías de ataque reales.",
        "preparationText": "La preparación forjó una base sólida en metodologías de caja negra (Black-Box). Las habilidades adquiridas incluyen: enumeración exhaustiva de servicios, evaluación de vulnerabilidades, explotación manual, ataques de contraseñas y uso avanzado de frameworks como Metasploit. Especial enfoque en el enrutamiento y pivoting básico a través de redes comprometidas.",
        "examText": "El examen es un entorno de laboratorio simulado sin conocimiento previo. Exige auditar una red corporativa desde cero, identificar vectores de entrada, comprometer múltiples sistemas internos y recuperar banderas estratégicas para demostrar el acceso no autorizado bajo presión de tiempo.",
        "reviewBest": "El enfoque 100% práctico y la necesidad de pivotar entre redes.",
        "reviewWorst": "El material de estudio puede estar algo desactualizado en herramientas específicas.",
        "verdict": "Una base táctica excepcional. A diferencia de otras certificaciones teóricas, el eJPT te obliga a ensuciarte las manos, a pensar como un atacante real y a estructurar una metodología de pentesting sólida que sirve de cimiento para retos mayores."
    },
    "en": {
        "title": "eLearnSecurity Junior Penetration Tester",
        "challengeText": "The eJPT certification validates the fundamental practical skills required to conduct penetration tests on corporate networks and infrastructures. It is a 100% hands-on assessment based on real-world attack methodologies.",
        "preparationText": "The preparation forged a solid foundation in Black-Box methodologies. Acquired skills include: exhaustive service enumeration, vulnerability assessment, manual exploitation, password attacks, and advanced use of frameworks like Metasploit. Special focus on routing and basic pivoting through compromised networks.",
        "examText": "The exam is a simulated lab environment with no prior knowledge provided. It requires auditing a corporate network from scratch, identifying entry vectors, compromising multiple internal systems, and retrieving strategic flags to prove unauthorized access under time pressure.",
        "reviewBest": "The 100% practical approach and the necessity to pivot between networks.",
        "reviewWorst": "The study material can feel slightly outdated regarding specific tools.",
        "verdict": "An exceptional tactical foundation. Unlike theoretical certifications, the eJPT forces you to get your hands dirty, think like a real attacker, and structure a solid pentesting methodology that serves as the bedrock for bigger challenges."
    }
};

data.certDetails["ejpt"] = ejptPayload;

// Ensure ejpt is in certificaciones array for the home page grid
const ejptExists = data.certificaciones.find(c => c.id.toLowerCase() === 'ejpt');
if (!ejptExists) {
    data.certificaciones.push({
        id: "ejpt",
        nombre: "eLearnSecurity Junior Penetration Tester",
        emisor: "INE Security",
        detalles: "100% Hands-On Penetration Testing Certification"
    });
} else {
    // If it exists but is named otherwise, just ensure standard format
    ejptExists.emisor = "INE Security";
}

fs.writeFileSync('public/data.json', JSON.stringify(data, null, 4));
console.log("eJPT data successfully injected into data.json!");
