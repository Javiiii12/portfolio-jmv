const fs = require('fs');

const dataRaw = fs.readFileSync('public/data.json', 'utf8');
const data = JSON.parse(dataRaw);

for (const id in data.certDetails) {
    const cert = data.certDetails[id];

    const esObj = {
        title: cert.title,
        tags: cert.tags,
        challengeText: cert.challengeText,
        preparationText: cert.preparationText,
        examText: cert.examText,
        reviewBest: cert.reviewBest,
        reviewWorst: cert.reviewWorst,
        verdict: cert.verdict
    };

    if (cert.syllabusIntro) esObj.syllabusIntro = cert.syllabusIntro;
    if (cert.syllabusItems) esObj.syllabusItems = cert.syllabusItems;
    if (cert.studyIntro) esObj.studyIntro = cert.studyIntro;
    if (cert.studyItems) esObj.studyItems = cert.studyItems;

    let enObj = JSON.parse(JSON.stringify(esObj)); // Copy structure

    if (id === 'OSWE') {
        enObj.title = 'Offensive Security Web Expert';
        enObj.challengeText = 'The OffSec Web Expert (OSWE) certification is one of the most demanding exams in the industry, focused on source code review and advanced exploitation of custom web applications.';
        enObj.preparationText = 'To master complex vulnerabilities (Insecure Deserialization, Advanced SQLi, SSTI), I dedicated a full year to laboratory subscriptions, auditing real source code and programming my own exploits in Python from scratch.';
        enObj.syllabusIntro = 'The OSWE approach is purely White-Box. It is not about launching automated tools, but auditing complete architectures. Mastering vectors and technologies include:';
        enObj.syllabusItems = [
            { title: 'Source Code Review', description: 'Deep manual auditing in languages like C# (.NET), Java, Node.js, PHP and Python.' },
            { title: 'Critical Vulnerabilities', description: 'Identification and exploitation of Insecure Deserialization, SSTI, Type Juggling, XXE and SSRF.' },
            { title: 'Complex Injections', description: 'Advanced Blind and Time-based SQL Injections, bypassing custom filters and sanitizations (Logical WAF Bypass).' },
            { title: 'Exploit Chaining', description: 'The crown jewel of OSWE. Chaining minor vulnerabilities (e.g. XSS to steal cookie -> SSRF -> Read local file) to achieve the final goal: Remote Code Execution (RCE).' },
            { title: 'Offensive Automation', description: 'Creation of custom Python scripts that automate the entire exploitation process (from auth bypass to reverse shell) with a single click.' }
        ];
        enObj.studyIntro = 'In addition to the official 1-year OffSec lab, I complemented my training with external resources:';
        enObj.studyItems = [
            { title: 'PortSwigger Web Security Academy', description: 'Solving Practitioner and Expert level labs, fundamental for consolidating Deserialization and SSTI concepts.' },
            { title: 'HackTheBox (White-Box Machines)', description: 'Solving machines oriented towards code review and complex web exploitation.' },
            { title: 'Public CVE Analysis', description: 'Reading advisories and recreating public exploits (PoC) to understand how researchers discover flaws.' },
            { title: 'Community Repositories', description: 'Consulting OSWE prep guides and cheatsheets on GitHub, learning advanced Python scripting tricks.' }
        ];
        enObj.examText = 'The exam requires identifying logical vulnerabilities and chaining them to achieve RCE. After a first learning iteration, I passed on the second attempt, exploiting the last machine and getting RCE just two hours before the 48-hour limit.';
        enObj.reviewBest = 'Real deep dive into pure white-box code auditing.';
        enObj.reviewWorst = 'The lab and interface are outdated and unresponsive.';
        enObj.verdict = 'This experience forged a deep analytical mindset. Now I don\'t just look for surface flaws, but I audit the software architecture, understand insecure data flows, and build complex exploit chains.';
    }

    if (id === 'OSWP') {
        enObj.title = 'Offensive Security Wireless Professional';
        enObj.challengeText = 'The OSWP certifies the technical ability to audit, identify, and exploit vulnerabilities in 802.11 wireless networks. Unlike traditional audits, it requires physical interaction with the RF spectrum, capturing traffic mid-air, and compromising corporate encryption protocols.';
        enObj.preparationText = '';
        enObj.syllabusIntro = 'Preparation requires absolute mastery of the Aircrack-ng suite and complementary tools. Consolidated skills include:';
        enObj.syllabusItems = [
            { title: 'Analysis & Capture', description: 'Packet analysis and capture (Handshakes and PMKID).' },
            { title: 'Exploitation & Cracking', description: 'Exploitation and cracking of WPA, WPA2 protocols (Personal and Enterprise).' },
            { title: 'Infrastructure Attacks', description: 'Deployment of infrastructure attacks: Rogue Access Points and Evil Twins.' },
            { title: 'Evasion & Bypass', description: 'Access control evasion (MAC Spoofing) and captive portal bypass.' }
        ];
        enObj.examText = 'The practical exam is a simulated lab environment where you must demonstrate the ability to compromise different wireless networks configured with various security measures, extracting network keys and proving total access under time pressure.';
        enObj.verdict = 'Essential for physical audits and Red Teaming. It provides a solid foundation on how deficient wireless configurations can be the initial entry vector to an organization\'s entire internal network.';
    }

    if (id === 'eCCPT' || id === 'eWPT' || id === 'eJPT') {
        enObj.challengeText = 'Lorem ipsum ' + id + ' challenge';
        enObj.preparationText = 'Lorem ipsum prep ' + id;
        enObj.examText = 'Lorem ipsum exam ' + id;
        enObj.verdict = 'Pending to be written.';
    }

    data.certDetails[id] = {
        id: cert.id,
        credentialId: cert.credentialId,
        date: cert.date,
        verificationUrl: cert.verificationUrl,
        es: esObj,
        en: enObj
    };
}

fs.writeFileSync('public/data.json', JSON.stringify(data, null, 4));
console.log("Migration complete.");
