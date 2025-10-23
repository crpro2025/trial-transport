export function DemoDataBadge({ className = '' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full ${className}`}>
      <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
      <span className="text-yellow-400 text-xs font-semibold">DEMO DATA</span>
    </div>
  );
}

export function PreLaunchBadge({ className = '' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full ${className}`}>
      <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
      <span className="text-blue-400 text-xs font-semibold">PRE-LAUNCH PLATFORM</span>
    </div>
  );
}

export function MockDataBanner() {
  return (
    <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-b border-yellow-500/30 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 text-center">
          <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
          <p className="text-yellow-400 text-sm font-medium">
            <strong>DEMO PLATFORM:</strong> All data shown is mock/simulated for demonstration purposes • Platform is pre-launch with zero customers
          </p>
          <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
        </div>
      </div>
    </div>
  );
}