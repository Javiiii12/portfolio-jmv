const fs = require('fs');

const dataRaw = fs.readFileSync('public/data.json', 'utf8');
const data = JSON.parse(dataRaw);

data.writeupDetails = {
    "echo-response": {
        "id": "echo-response",
        "es": {
            "title": "Echo Response: The Gauntlet",
            "subtitle": "OffSec Global CTF Event",
            "overview": "Participación en el evento oficial global de OffSec 'Echo Response'. Una competición de 8 semanas diseñada para poner a prueba metodologías de enumeración, explotación web y escalada de privilegios frente a miles de profesionales del sector.",
            "stats": { "rank": "341 / 4267 (Top 8%)", "points": "320 PTS", "status": "OPERACIÓN FINALIZADA" },
            "logCompleted": "Fase 1 completada con éxito (Tutorial, Brecha de ProtoVault, La sombra del ladrón, Enigma cuántico, Sendero del eco). Máquinas comprometidas aplicando evasión de filtros, explotación de lógica de negocio y vulnerabilidades críticas.",
            "logIncomplete": "Fase 2 (Semanas 5-8) abortada. Operaciones suspendidas por falta de disponibilidad horaria (Timeboxing estricto debido a compromisos formativos y profesionales).",
            "verdict": "Lograr una posición en el Top 8% mundial de OffSec habiendo participado únicamente en la mitad del evento demuestra un ratio de eficacia ofensiva excepcional. Un entrenamiento táctico perfecto para mantener la metodología afilada bajo presión."
        },
        "en": {
            "title": "Echo Response: The Gauntlet",
            "subtitle": "OffSec Global CTF Event",
            "overview": "Participation in the official global OffSec event 'Echo Response'. An 8-week competition designed to test enumeration methodologies, web exploitation, and privilege escalation against thousands of cybersecurity professionals.",
            "stats": { "rank": "341 / 4267 (Top 8%)", "points": "320 PTS", "status": "OPERATION CONCLUDED" },
            "logCompleted": "Phase 1 successfully completed (Tutorial, ProtoVault Breach, Thief's Shadow, Quantum Enigma, Echo Path). Machines compromised by applying filter evasion, business logic exploitation, and critical vulnerabilities.",
            "logIncomplete": "Phase 2 (Weeks 5-8) aborted. Operations suspended due to time constraints (strict timeboxing due to professional and academic commitments).",
            "verdict": "Achieving a spot in the Top 8% globally in an OffSec event while only participating in half of the challenges demonstrates an exceptional offensive efficiency ratio. A perfect tactical training to keep methodologies sharp under pressure."
        }
    }
};

fs.writeFileSync('public/data.json', JSON.stringify(data, null, 4));
console.log("Writeups added.");
