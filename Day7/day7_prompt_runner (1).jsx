import { useState } from "react";

const PROFILE_PROMPT = `You are a world-class AI Workflow Architect, Executive Productivity Consultant, and Claude Platform Expert.

Your task is to design the optimal Claude model and reasoning-effort strategy for a senior healthcare executive operating at the intersection of:

• Healthcare Leadership
• Health Informatics
• Data & Analytics
• AI Strategy
• Digital Transformation
• Healthcare Policy
• Executive Consulting
• Academic Research
• Thought Leadership

My profile:

Name: Julia Rehman, DHA, MBA, MHA, FACHE, eFACHDM

Current Role: Chief Intelligence and Transformation Officer

Board & Governance: ACHE VP MENA | ACHDM International Chair | DIGIHEALTH Lab Advisory Board | Because Organization Board | ACAIM GCC Ambassador

Current Situation:
Senior Healthcare Data, Analytics, AI, and Digital Transformation Executive with 17+ years of international experience across the United States, UAE, Saudi Arabia, and India.

Education:
• Doctorate in Health Administration (DHA)
• Master of Public Health (MPH)
• MBA
• MHA

Professional Activities:
• Executive-level healthcare strategy
• AI and analytics leadership
• Healthcare consulting
• Policy analysis
• Board and C-suite communications
• Resume and executive branding
• Research and publication writing
• Fellowship and professional society leadership (ACHE VP MENA, ACHDM International Chair, ACAIM GCC Ambassador)
• LinkedIn thought leadership
• Conference presentations
• Career planning and executive positioning

AI Usage: Heavy daily user. Outputs evaluated against executive and board-level standards.

Typical Tasks:
• Executive presentations and board reports
• Strategic planning for healthcare AI and digital transformation
• Healthcare AI implementation and governance frameworks
• Data governance and analytics strategy
• GCC and MENA health policy analysis
• Market research and competitive intelligence
• Resume optimization and executive positioning
• Interview preparation for VP/CDO/COO/CITO roles
• Academic and doctoral-level writing
• LinkedIn thought leadership content
• Advisory and consulting engagements
• Fellowship and professional society communications

Output Requirements:
• High accuracy
• Executive-level quality
• Strategic thinking
• Deep analysis
• Strong structure
• Actionable recommendations
• Minimal fluff

Think step-by-step. Analyze my profile, workload, decision-making responsibilities, AI usage patterns, and output quality requirements.

Then generate a complete Executive Claude Usage Strategy with these sections:

## Primary Claude Model
## Why It Fits My Profile
## When To Use Haiku
## When To Use Sonnet
## When To Use Opus
## Recommended Reasoning Effort Strategy
(Cover: Low, Standard, High, Max — with specific examples from my work)
## My Weekly AI Operating System
(Format as a table: Task | Model | Effort | Why — include at least 15 tasks spanning all my domains)
## Cost vs Performance Optimization
## Biggest Mistakes Someone With My Profile Should Avoid
## Executive Recommendation
(If I could only use one model and one effort setting 80% of the time, what would you recommend and why?)

Provide this as a professional consulting deliverable at the level a healthcare executive would present to a board.`;

export default function Day7Runner() {
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function runPrompt() {
    setLoading(true);
    setOutput("");
    setDone(false);
    setError("");

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: PROFILE_PROMPT }],
        }),
      });

      const data = await response.json();
      if (data?.content?.[0]?.text) {
        setOutput(data.content[0].text);
        setDone(true);
      } else {
        setError("Unexpected response format. Check console.");
        console.error(data);
      }
    } catch (e) {
      setError("Request failed: " + e.message);
    } finally {
      setLoading(false);
    }
  }

  function renderMarkdown(text) {
    return text.split("\n").map((line, i) => {
      if (line.startsWith("## ")) {
        return (
          <h2 key={i} style={{ fontSize: 15, fontWeight: 500, color: "var(--color-text-primary)", margin: "20px 0 6px", paddingBottom: 4, borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
            {line.replace("## ", "")}
          </h2>
        );
      }
      if (line.startsWith("### ")) {
        return (
          <h3 key={i} style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-primary)", margin: "14px 0 4px" }}>
            {line.replace("### ", "")}
          </h3>
        );
      }
      if (line.startsWith("|")) {
        const cells = line.split("|").filter(c => c.trim());
        const isHeader = cells.every(c => c.trim().match(/^-+$/));
        if (isHeader) return null;
        return (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 2fr", gap: 8, padding: "5px 0", borderBottom: "0.5px solid var(--color-border-tertiary)", fontSize: 11 }}>
            {cells.map((c, j) => (
              <span key={j} style={{ color: j === 0 ? "var(--color-text-primary)" : "var(--color-text-secondary)" }}>{c.trim()}</span>
            ))}
          </div>
        );
      }
      if (line.startsWith("• ") || line.startsWith("- ")) {
        return (
          <div key={i} style={{ display: "flex", gap: 8, margin: "3px 0", fontSize: 12, color: "var(--color-text-primary)" }}>
            <span style={{ color: "var(--color-text-tertiary)", flexShrink: 0 }}>·</span>
            <span>{line.replace(/^[•\-] /, "")}</span>
          </div>
        );
      }
      if (line.startsWith("**") && line.endsWith("**")) {
        return <p key={i} style={{ fontWeight: 500, fontSize: 13, color: "var(--color-text-primary)", margin: "8px 0 2px" }}>{line.replace(/\*\*/g, "")}</p>;
      }
      if (line.trim() === "") return <div key={i} style={{ height: 6 }} />;
      return <p key={i} style={{ fontSize: 12, color: "var(--color-text-primary)", margin: "3px 0", lineHeight: 1.6 }}>{line}</p>;
    });
  }

  return (
    <div style={{ fontFamily: "var(--font-sans)", maxWidth: 560, margin: "0 auto", padding: "24px 16px" }}>
      <h2 style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-text-tertiary)", fontWeight: 500, margin: "0 0 6px" }}>
        Day 7 · #60DayClaudeChallenge
      </h2>
      <h1 style={{ fontSize: 20, fontWeight: 500, color: "var(--color-text-primary)", margin: "0 0 4px" }}>
        Executive Claude Strategy Generator
      </h1>
      <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: "0 0 20px", lineHeight: 1.5 }}>
        Runs the full personalized strategy prompt with Julia Rehman's profile. Generate the output, then screenshot each section for GitHub documentation.
      </p>

      {!done && (
        <button
          onClick={runPrompt}
          disabled={loading}
          style={{
            background: loading ? "var(--color-background-secondary)" : "var(--color-background-primary)",
            border: "0.5px solid var(--color-border-secondary)",
            borderRadius: "var(--border-radius-md)",
            padding: "10px 20px",
            fontSize: 13,
            fontWeight: 500,
            color: "var(--color-text-primary)",
            cursor: loading ? "not-allowed" : "pointer",
            width: "100%",
            marginBottom: 16,
          }}
        >
          {loading ? "Generating your executive AI strategy..." : "Generate My Executive Claude Strategy ↗"}
        </button>
      )}

      {error && (
        <div style={{ padding: 12, background: "var(--color-background-danger)", border: "0.5px solid var(--color-border-danger)", borderRadius: "var(--border-radius-md)", fontSize: 12, color: "var(--color-text-danger)", marginBottom: 16 }}>
          {error}
        </div>
      )}

      {loading && (
        <div style={{ padding: 16, textAlign: "center" }}>
          <div style={{ fontSize: 12, color: "var(--color-text-tertiary)", marginBottom: 8 }}>Sending full profile context to Claude...</div>
          <div style={{ fontSize: 11, color: "var(--color-text-tertiary)" }}>This may take 20–30 seconds for a complete executive-level output.</div>
        </div>
      )}

      {done && output && (
        <>
          <div style={{
            background: "var(--color-background-secondary)",
            borderRadius: "var(--border-radius-md)",
            padding: "8px 12px",
            marginBottom: 16,
            fontSize: 11,
            color: "var(--color-text-secondary)",
            display: "flex",
            alignItems: "center",
            gap: 8
          }}>
            <span style={{ color: "var(--color-text-success)", fontWeight: 500 }}>Strategy generated.</span>
            Screenshot each section below for your GitHub documentation and day7.md.
          </div>

          <div style={{
            border: "0.5px solid var(--color-border-tertiary)",
            borderRadius: "var(--border-radius-lg)",
            padding: "16px 20px",
            background: "var(--color-background-primary)",
          }}>
            <div style={{ fontSize: 11, color: "var(--color-text-tertiary)", marginBottom: 12, paddingBottom: 8, borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
              Claude's generated executive strategy · Julia Rehman, DHA, MBA, MHA, FACHE, eFACHDM
            </div>
            {renderMarkdown(output)}
          </div>

          <button
            onClick={runPrompt}
            style={{
              marginTop: 16,
              background: "transparent",
              border: "0.5px solid var(--color-border-tertiary)",
              borderRadius: "var(--border-radius-md)",
              padding: "8px 16px",
              fontSize: 11,
              color: "var(--color-text-secondary)",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Regenerate
          </button>
        </>
      )}
    </div>
  );
}
