import type { CodeLine, CodeTone } from "@/lib/content";
import { codeLinesDesktop, codeLinesMobile } from "@/lib/content";

const TONE_CLASS: Record<CodeTone, string> = {
  keyword: "text-syn-keyword",
  prop: "text-syn-prop",
  string: "text-syn-string",
  number: "text-syn-number",
  accent: "text-accent",
  plain: "",
};

interface LinesProps {
  lines: CodeLine[];
  className: string;
  indentClassName: string;
}

function Lines({ lines, className, indentClassName }: LinesProps) {
  return (
    <div className={`font-mono leading-[2] text-code ${className}`}>
      {lines.map((line, lineIndex) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static, never reordered
        <div className="contents" key={lineIndex}>
          <span className="text-gutter select-none">{lineIndex + 1}</span>
          <span className={line.indent ? indentClassName : undefined}>
            {line.tokens.map((token, tokenIndex) => (
              <span
                // biome-ignore lint/suspicious/noArrayIndexKey: static, never reordered
                key={tokenIndex}
                className={token.tone ? TONE_CLASS[token.tone] : undefined}
              >
                {token.text}
              </span>
            ))}
            {line.caret ? (
              <span className="animate-caret text-accent">▍</span>
            ) : null}
          </span>
        </div>
      ))}
    </div>
  );
}

export function CodeBlock() {
  return (
    <section
      aria-label="About, as a code snippet"
      className="border-hairline border-b px-5.5 py-7 lg:px-16 lg:py-10"
    >
      <Lines
        className="grid grid-cols-[22px_1fr] gap-x-3.5 text-[12px] lg:hidden"
        indentClassName="pl-4"
        lines={codeLinesMobile}
      />
      <Lines
        className="hidden grid-cols-[34px_1fr] gap-x-5 text-[13px] lg:grid"
        indentClassName="pl-6"
        lines={codeLinesDesktop}
      />
    </section>
  );
}
