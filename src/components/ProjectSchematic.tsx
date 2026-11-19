import type { ProjectItem } from '../data/portfolioData';

interface ProjectSchematicProps {
  projectId: ProjectItem['id'];
  compact?: boolean;
}

export function ProjectSchematic({ projectId, compact = false }: ProjectSchematicProps) {
  if (projectId === 'codecrack') {
    return (
      <div
        className={`relative w-full overflow-hidden bg-white border border-[#E3E4E8] ${
          compact ? 'p-5' : 'p-6 sm:p-7'
        }`}
        aria-label="CodeCrack architectural schematic"
      >
        <div className="flex items-center justify-between border-b border-[#ECEEF1] pb-3 text-[11px] font-mono text-[#787D87] tabular-nums">
          <span>Architecture Plate 01</span>
          <span>codecrack.xyz</span>
        </div>

        <svg
          viewBox="0 0 460 210"
          className="mt-4 h-auto w-full"
          role="img"
          aria-label="Diagram showing TypeScript Workspace connecting to Supabase Auth, PostgreSQL Submissions, and Gemini Code Analysis"
        >
          <defs>
            <pattern id="grid-cc" width="20" height="20" patternUnits="userSpaceOnUse">
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="#F0F1F4"
                strokeWidth="0.75"
              />
            </pattern>
            <marker
              id="arrow-cobalt"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#1D4ED8" />
            </marker>
            <marker
              id="arrow-ink"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#787D87" />
            </marker>
          </defs>

          <rect width="460" height="210" fill="url(#grid-cc)" />

          {/* Node 1: Client Practice Workspace */}
          <rect
            x="16"
            y="58"
            width="124"
            height="92"
            rx="4"
            fill="#FFFFFF"
            stroke="#111214"
            strokeWidth="1.2"
          />
          <text x="28" y="80" fontSize="10" fontFamily="IBM Plex Mono, monospace" fill="#787D87">
            CLIENT
          </text>
          <text x="28" y="100" fontSize="12" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif" fill="#111214">
            Practice IDE
          </text>
          <text x="28" y="118" fontSize="10" fontFamily="Plus Jakarta Sans, sans-serif" fill="#4E525B">
            TypeScript · Problems
          </text>
          <text x="28" y="133" fontSize="10" fontFamily="Plus Jakarta Sans, sans-serif" fill="#4E525B">
            Progress Tracking
          </text>

          {/* Connector Client -> Supabase */}
          <line
            x1="140"
            y1="84"
            x2="196"
            y2="62"
            stroke="#787D87"
            strokeWidth="1.2"
            markerEnd="url(#arrow-ink)"
          />

          {/* Connector Client -> Gemini */}
          <line
            x1="140"
            y1="124"
            x2="196"
            y2="146"
            stroke="#1D4ED8"
            strokeWidth="1.35"
            markerEnd="url(#arrow-cobalt)"
          />

          {/* Node 2: Supabase & Auth */}
          <rect
            x="202"
            y="24"
            width="116"
            height="70"
            rx="4"
            fill="#FFFFFF"
            stroke="#D1D5DB"
            strokeWidth="1.2"
          />
          <text x="214" y="44" fontSize="10" fontFamily="IBM Plex Mono, monospace" fill="#787D87">
            AUTH & API
          </text>
          <text x="214" y="63" fontSize="12" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif" fill="#111214">
            Supabase
          </text>
          <text x="214" y="79" fontSize="10" fontFamily="Plus Jakarta Sans, sans-serif" fill="#4E525B">
            Sessions · Workflows
          </text>

          {/* Node 3: Gemini Analysis */}
          <rect
            x="202"
            y="114"
            width="116"
            height="72"
            rx="4"
            fill="#F8FAFF"
            stroke="#1D4ED8"
            strokeWidth="1.2"
          />
          <text x="214" y="134" fontSize="10" fontFamily="IBM Plex Mono, monospace" fill="#1D4ED8">
            EVALUATION
          </text>
          <text x="214" y="153" fontSize="12" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif" fill="#111214">
            Gemini API
          </text>
          <text x="214" y="169" fontSize="10" fontFamily="Plus Jakarta Sans, sans-serif" fill="#4E525B">
            Analysis · Feedback
          </text>

          {/* Connectors to PostgreSQL */}
          <line
            x1="318"
            y1="59"
            x2="352"
            y2="82"
            stroke="#787D87"
            strokeWidth="1.2"
            markerEnd="url(#arrow-ink)"
          />
          <line
            x1="318"
            y1="150"
            x2="352"
            y2="124"
            stroke="#1D4ED8"
            strokeWidth="1.2"
            strokeDasharray="3 3"
            markerEnd="url(#arrow-cobalt)"
          />

          {/* Node 4: PostgreSQL */}
          <rect
            x="358"
            y="60"
            width="86"
            height="88"
            rx="4"
            fill="#FFFFFF"
            stroke="#111214"
            strokeWidth="1.2"
          />
          <text x="369" y="81" fontSize="10" fontFamily="IBM Plex Mono, monospace" fill="#787D87">
            STORAGE
          </text>
          <text x="369" y="100" fontSize="11.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif" fill="#111214">
            PostgreSQL
          </text>
          <text x="369" y="117" fontSize="9.5" fontFamily="Plus Jakarta Sans, sans-serif" fill="#4E525B">
            Submissions
          </text>
          <text x="369" y="132" fontSize="9.5" fontFamily="Plus Jakarta Sans, sans-serif" fill="#4E525B">
            Progress DB
          </text>
        </svg>

        <div className="mt-3 flex items-center justify-between border-t border-[#ECEEF1] pt-3 text-[11px] font-mono text-[#787D87]">
          <span>Typed submission pipeline</span>
          <span>Relational schema</span>
        </div>
      </div>
    );
  }

  if (projectId === 'hirehub') {
    return (
      <div
        className={`relative w-full overflow-hidden bg-white border border-[#E3E4E8] ${
          compact ? 'p-5' : 'p-6 sm:p-7'
        }`}
        aria-label="HireHub architectural schematic"
      >
        <div className="flex items-center justify-between border-b border-[#ECEEF1] pb-3 text-[11px] font-mono text-[#787D87] tabular-nums">
          <span>Architecture Plate 02</span>
          <span>hire-hub1.vercel.app</span>
        </div>

        <svg
          viewBox="0 0 460 210"
          className="mt-4 h-auto w-full"
          role="img"
          aria-label="Diagram showing React client sending authenticated requests via HTTP-only cookies through Express auth middleware and controllers to MongoDB Mongoose models"
        >
          <defs>
            <pattern id="grid-hh" width="20" height="20" patternUnits="userSpaceOnUse">
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="#F0F1F4"
                strokeWidth="0.75"
              />
            </pattern>
            <marker
              id="arrow-hh-cobalt"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#1D4ED8" />
            </marker>
          </defs>

          <rect width="460" height="210" fill="url(#grid-hh)" />

          {/* React Client */}
          <rect
            x="16"
            y="60"
            width="92"
            height="88"
            rx="4"
            fill="#FFFFFF"
            stroke="#111214"
            strokeWidth="1.2"
          />
          <text x="27" y="82" fontSize="10" fontFamily="IBM Plex Mono, monospace" fill="#787D87">
            CLIENT
          </text>
          <text x="27" y="102" fontSize="12" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif" fill="#111214">
            React UI
          </text>
          <text x="27" y="120" fontSize="9.5" fontFamily="Plus Jakarta Sans, sans-serif" fill="#4E525B">
            HTTP-only
          </text>
          <text x="27" y="133" fontSize="9.5" fontFamily="Plus Jakarta Sans, sans-serif" fill="#4E525B">
            Cookie Auth
          </text>

          <line
            x1="108"
            y1="104"
            x2="136"
            y2="104"
            stroke="#1D4ED8"
            strokeWidth="1.35"
            markerEnd="url(#arrow-hh-cobalt)"
          />

          {/* Express Backend Container */}
          <rect
            x="142"
            y="24"
            width="196"
            height="162"
            rx="4"
            fill="#FAFAFB"
            stroke="#D1D5DB"
            strokeWidth="1.2"
          />
          <text x="154" y="43" fontSize="9.5" fontFamily="IBM Plex Mono, monospace" fill="#787D87">
            NODE.JS · EXPRESS LAYER
          </text>

          {/* Auth Middleware */}
          <rect
            x="154"
            y="55"
            width="172"
            height="34"
            rx="3"
            fill="#F8FAFF"
            stroke="#1D4ED8"
            strokeWidth="1.15"
          />
          <text x="165" y="76" fontSize="10.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif" fill="#111214">
            JWT &amp; Auth Middleware
          </text>

          {/* Controllers & Routes */}
          <rect
            x="154"
            y="99"
            width="172"
            height="34"
            rx="3"
            fill="#FFFFFF"
            stroke="#D1D5DB"
            strokeWidth="1.1"
          />
          <text x="165" y="120" fontSize="10.5" fontWeight="500" fontFamily="Plus Jakarta Sans, sans-serif" fill="#111214">
            Routes · Controllers · bcrypt
          </text>

          {/* Models & DB Utils */}
          <rect
            x="154"
            y="143"
            width="172"
            height="32"
            rx="3"
            fill="#FFFFFF"
            stroke="#D1D5DB"
            strokeWidth="1.1"
          />
          <text x="165" y="163" fontSize="10.5" fontWeight="500" fontFamily="Plus Jakarta Sans, sans-serif" fill="#4E525B">
            Mongoose Models &amp; Utils
          </text>

          <line
            x1="338"
            y1="104"
            x2="362"
            y2="104"
            stroke="#1D4ED8"
            strokeWidth="1.35"
            markerEnd="url(#arrow-hh-cobalt)"
          />

          {/* MongoDB */}
          <rect
            x="368"
            y="60"
            width="78"
            height="88"
            rx="4"
            fill="#FFFFFF"
            stroke="#111214"
            strokeWidth="1.2"
          />
          <text x="378" y="82" fontSize="10" fontFamily="IBM Plex Mono, monospace" fill="#787D87">
            DATA
          </text>
          <text x="378" y="102" fontSize="11.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif" fill="#111214">
            MongoDB
          </text>
          <text x="378" y="120" fontSize="9.5" fontFamily="Plus Jakarta Sans, sans-serif" fill="#4E525B">
            Users &amp;
          </text>
          <text x="378" y="133" fontSize="9.5" fontFamily="Plus Jakarta Sans, sans-serif" fill="#4E525B">
            Listings
          </text>
        </svg>

        <div className="mt-3 flex items-center justify-between border-t border-[#ECEEF1] pt-3 text-[11px] font-mono text-[#787D87]">
          <span>Protected routes · bcrypt + JWT</span>
          <span>Verified in Postman</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden bg-white border border-[#E3E4E8] ${
        compact ? 'p-5' : 'p-6 sm:p-7'
      }`}
      aria-label="Real-Time Chat architectural schematic"
    >
      <div className="flex items-center justify-between border-b border-[#ECEEF1] pb-3 text-[11px] font-mono text-[#787D87] tabular-nums">
        <span>Architecture Plate 03</span>
        <span>Harsh-dhawan17/Chat-App</span>
      </div>

      <svg
        viewBox="0 0 460 210"
        className="mt-4 h-auto w-full"
        role="img"
        aria-label="Diagram showing two React clients exchanging real-time WebSocket frames through an Express JWT broker backed by MongoDB"
      >
        <defs>
          <pattern id="grid-chat" width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="#F0F1F4"
              strokeWidth="0.75"
            />
          </pattern>
          <marker
            id="arrow-chat-cobalt"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#1D4ED8" />
          </marker>
          <marker
            id="arrow-chat-ink"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#787D87" />
          </marker>
        </defs>

        <rect width="460" height="210" fill="url(#grid-chat)" />

        {/* Client A */}
        <rect
          x="16"
          y="30"
          width="102"
          height="58"
          rx="4"
          fill="#FFFFFF"
          stroke="#111214"
          strokeWidth="1.2"
        />
        <text x="27" y="51" fontSize="10" fontFamily="IBM Plex Mono, monospace" fill="#787D87">
          CLIENT A
        </text>
        <text x="27" y="71" fontSize="11.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif" fill="#111214">
          React Session
        </text>

        {/* Client B */}
        <rect
          x="16"
          y="122"
          width="102"
          height="58"
          rx="4"
          fill="#FFFFFF"
          stroke="#111214"
          strokeWidth="1.2"
        />
        <text x="27" y="143" fontSize="10" fontFamily="IBM Plex Mono, monospace" fill="#787D87">
          CLIENT B
        </text>
        <text x="27" y="163" fontSize="11.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif" fill="#111214">
          React Session
        </text>

        {/* Duplex WebSocket Lines */}
        <line
          x1="122"
          y1="62"
          x2="178"
          y2="92"
          stroke="#1D4ED8"
          strokeWidth="1.35"
          markerStart="url(#arrow-chat-cobalt)"
          markerEnd="url(#arrow-chat-cobalt)"
        />
        <line
          x1="122"
          y1="148"
          x2="178"
          y2="118"
          stroke="#1D4ED8"
          strokeWidth="1.35"
          markerStart="url(#arrow-chat-cobalt)"
          markerEnd="url(#arrow-chat-cobalt)"
        />
        <text x="128" y="108" fontSize="9.5" fontFamily="IBM Plex Mono, monospace" fill="#1D4ED8">
          WS
        </text>

        {/* Node Express + WS Server */}
        <rect
          x="184"
          y="46"
          width="136"
          height="118"
          rx="4"
          fill="#F8FAFF"
          stroke="#1D4ED8"
          strokeWidth="1.2"
        />
        <text x="197" y="69" fontSize="10" fontFamily="IBM Plex Mono, monospace" fill="#1D4ED8">
          SERVER
        </text>
        <text x="197" y="90" fontSize="12" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif" fill="#111214">
          Node + Express
        </text>
        <text x="197" y="110" fontSize="10" fontFamily="Plus Jakarta Sans, sans-serif" fill="#4E525B">
          WebSocket Relay
        </text>
        <text x="197" y="126" fontSize="10" fontFamily="Plus Jakarta Sans, sans-serif" fill="#4E525B">
          JWT Auth · REST API
        </text>
        <text x="197" y="142" fontSize="10" fontFamily="Plus Jakarta Sans, sans-serif" fill="#4E525B">
          User Routing
        </text>

        <line
          x1="320"
          y1="105"
          x2="352"
          y2="105"
          stroke="#787D87"
          strokeWidth="1.2"
          markerStart="url(#arrow-chat-ink)"
          markerEnd="url(#arrow-chat-ink)"
        />

        {/* MongoDB */}
        <rect
          x="358"
          y="58"
          width="86"
          height="94"
          rx="4"
          fill="#FFFFFF"
          stroke="#111214"
          strokeWidth="1.2"
        />
        <text x="369" y="80" fontSize="10" fontFamily="IBM Plex Mono, monospace" fill="#787D87">
          STORE
        </text>
        <text x="369" y="100" fontSize="11.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif" fill="#111214">
          MongoDB
        </text>
        <text x="369" y="118" fontSize="9.5" fontFamily="Plus Jakarta Sans, sans-serif" fill="#4E525B">
          Messages
        </text>
        <text x="369" y="133" fontSize="9.5" fontFamily="Plus Jakarta Sans, sans-serif" fill="#4E525B">
          User Accounts
        </text>
      </svg>

      <div className="mt-3 flex items-center justify-between border-t border-[#ECEEF1] pt-3 text-[11px] font-mono text-[#787D87]">
        <span>Duplex WebSocket channel</span>
        <span>Persistent history</span>
      </div>
    </div>
  );
}
