export function TrialTransportLogo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: { container: 'w-8 h-8', text: 'text-lg' },
    md: { container: 'w-10 h-10', text: 'text-xl' },
    lg: { container: 'w-12 h-12', text: 'text-2xl' }
  };

  return (
    <div className="flex items-center gap-3">
      <div className={`${sizes[size].container} bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50`}>
        <svg className="w-2/3 h-2/3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      </div>
      <div>
        <span className={`${sizes[size].text} font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent`}>
          Trial Transport
        </span>
      </div>
    </div>
  );
}

export function ClinicalResearchProLogo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: { container: 'w-6 h-6', text: 'text-sm' },
    md: { container: 'w-8 h-8', text: 'text-base' },
    lg: { container: 'w-10 h-10', text: 'text-lg' }
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`${sizes[size].container} bg-gradient-to-br from-purple-600 to-blue-600 rounded flex items-center justify-center`}>
        <span className="text-white font-bold text-xs">CRP</span>
      </div>
      <div>
        <span className={`${sizes[size].text} font-semibold text-gray-300`}>
          Clinical Research Pro
        </span>
      </div>
    </div>
  );
}