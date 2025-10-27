'use client';

import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Download, FileText, AlertCircle } from 'lucide-react';
import { documentData } from '../document-data';

export default function DocumentPage() {
  const params = useParams();
  const router = useRouter();

  const slug = params.slug as string;
  const doc = documentData[slug];
  const content = doc?.content || '';
  const loading = false;
  const error = '';

  // Enhanced markdown to HTML converter
  const formatMarkdown = (text: string) => {
    let lines = text.split('\n');
    let html = '';
    let inTable = false;
    let inList = false;
    let inCodeBlock = false;
    let tableHeaders: string[] = [];

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];

      // Code blocks
      if (line.trim().startsWith('```')) {
        if (inCodeBlock) {
          html += '</code></pre>';
          inCodeBlock = false;
        } else {
          html += '<pre class="bg-slate-900/50 border border-cyan-500/30 rounded-lg p-4 my-4 overflow-x-auto"><code class="text-cyan-300 text-sm">';
          inCodeBlock = true;
        }
        continue;
      }

      if (inCodeBlock) {
        html += line + '\n';
        continue;
      }

      // Tables
      if (line.includes('|') && line.trim().startsWith('|')) {
        if (!inTable) {
          inTable = true;
          html += '<div class="overflow-x-auto my-6"><table class="w-full border-collapse bg-slate-900/30 rounded-lg overflow-hidden">';
          
          // Parse header row
          tableHeaders = line.split('|').filter(cell => cell.trim()).map(cell => cell.trim());
          html += '<thead class="bg-gradient-to-r from-blue-600/20 to-purple-600/20"><tr>';
          tableHeaders.forEach(header => {
            html += `<th class="border border-cyan-500/30 px-4 py-3 text-left text-cyan-400 font-bold">${header}</th>`;
          });
          html += '</tr></thead><tbody>';
          
          // Skip separator line
          i++;
          continue;
        } else if (line.includes('---')) {
          continue;
        } else {
          // Data row
          const cells = line.split('|').filter(cell => cell.trim()).map(cell => cell.trim());
          html += '<tr class="hover:bg-white/5 transition-colors">';
          cells.forEach(cell => {
            // Apply bold formatting within cells
            let formattedCell = cell.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>');
            html += `<td class="border border-slate-700/50 px-4 py-3 text-gray-300">${formattedCell}</td>`;
          });
          html += '</tr>';
          continue;
        }
      } else if (inTable) {
        html += '</tbody></table></div>';
        inTable = false;
      }

      // Headers
      if (line.startsWith('# ')) {
        html += `<h1 class="text-4xl font-bold text-white mt-12 mb-6 pb-4 border-b-2 border-cyan-500/50">${line.substring(2)}</h1>`;
      } else if (line.startsWith('## ')) {
        html += `<h2 class="text-3xl font-bold text-blue-400 mt-10 mb-5">${line.substring(3)}</h2>`;
      } else if (line.startsWith('### ')) {
        html += `<h3 class="text-2xl font-bold text-cyan-400 mt-8 mb-4">${line.substring(4)}</h3>`;
      } else if (line.startsWith('#### ')) {
        html += `<h4 class="text-xl font-bold text-purple-400 mt-6 mb-3">${line.substring(5)}</h4>`;
      }
      // Horizontal rules
      else if (line.trim() === '---') {
        html += '<hr class="border-t-2 border-cyan-500/30 my-8" />';
      }
      // Lists
      else if (line.match(/^[\*\-] /)) {
        if (!inList) {
          html += '<ul class="list-none space-y-2 my-4 ml-6">';
          inList = true;
        }
        let content = line.substring(2);
        // Apply bold formatting
        content = content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>');
        html += `<li class="flex items-start gap-3 text-gray-300"><span class="text-cyan-400 mt-1">→</span><span>${content}</span></li>`;
      } else if (line.match(/^\d+\. /)) {
        if (!inList) {
          html += '<ol class="list-decimal list-inside space-y-2 my-4 ml-6">';
          inList = true;
        }
        let content = line.replace(/^\d+\. /, '');
        content = content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>');
        html += `<li class="text-gray-300">${content}</li>`;
      } else {
        if (inList) {
          html += inList ? '</ul>' : '</ol>';
          inList = false;
        }
        
        // Regular paragraphs
        if (line.trim()) {
          let formatted = line;
          
          // Bold
          formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>');
          
          // Inline code
          formatted = formatted.replace(/`(.*?)`/g, '<code class="bg-slate-800 text-cyan-300 px-2 py-1 rounded text-sm">$1</code>');
          
          // Links
          formatted = formatted.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-cyan-400 hover:text-cyan-300 underline" target="_blank" rel="noopener noreferrer">$1</a>');
          
          html += `<p class="text-gray-300 mb-4 leading-relaxed">${formatted}</p>`;
        } else {
          html += '<br />';
        }
      }
    }

    // Close any open tags
    if (inTable) html += '</tbody></table></div>';
    if (inList) html += '</ul>';
    if (inCodeBlock) html += '</code></pre>';

    return html;
  };

  if (!doc) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Document Not Found</h1>
          <button
            onClick={() => router.push('/investors')}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Back to Investor Resources
          </button>
        </div>
      </div>
    );
  }

  const downloadAsText = () => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${doc.title.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const printDocument = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="bg-slate-900/80 backdrop-blur-xl border-b border-cyan-500/30 sticky top-0 z-20 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <button
                onClick={() => router.push('/investors')}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Back to Investor Resources</span>
              </button>
              {!loading && !error && (
                <div className="flex gap-3">
                  <button
                    onClick={downloadAsText}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800/80 hover:bg-slate-700/80 text-white rounded-lg font-semibold transition-all border border-cyan-500/30 hover:border-cyan-500/50"
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Download TXT</span>
                  </button>
                  <button
                    onClick={printDocument}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                  >
                    <FileText className="w-4 h-4" />
                    <span className="hidden sm:inline">Print/Save PDF</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Document Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="bg-slate-900/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden">
            {/* Document Header */}
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-cyan-500/30 px-6 md:px-10 py-6 md:py-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <FileText className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{doc.title}</h1>
                  <p className="text-cyan-400 font-medium">Trial Transport℠ - Clinical Research Pro Corporation</p>
                  <p className="text-gray-400 text-sm mt-1">Confidential Investment Materials</p>
                </div>
              </div>
            </div>

            {/* Document Body */}
            <div className="px-6 md:px-10 py-8 md:py-10">
              {loading ? (
                <div className="text-center py-20">
                  <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-cyan-400"></div>
                  <p className="text-gray-400 mt-6 text-lg">Loading document...</p>
                </div>
              ) : error ? (
                <div className="text-center py-20">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-6">
                    <AlertCircle className="w-8 h-8 text-red-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">Unable to Load Document</h2>
                  <p className="text-gray-400 mb-6">{error}</p>
                  <p className="text-sm text-gray-500 mb-8">
                    The document file may not be available yet. Please try refreshing the page or contact support.
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Refresh Page
                  </button>
                </div>
              ) : (
                <div 
                  className="document-content prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: formatMarkdown(content) }}
                />
              )}
            </div>
          </div>

          {/* Footer Note */}
          {!loading && !error && (
            <div className="text-center mt-8 text-gray-500 text-sm">
              <p>© 2025 Clinical Research Pro Corporation. All rights reserved.</p>
              <p className="mt-1">For questions, contact: jason@clinicalresearchpro.com | (470) 476-1038</p>
            </div>
          )}
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
          }
          .bg-gradient-to-br,
          .bg-slate-900,
          .backdrop-blur-xl {
            background: white !important;
          }
          .text-gray-300,
          .text-gray-400 {
            color: #333 !important;
          }
          .text-white {
            color: #000 !important;
          }
          .text-cyan-400,
          .text-blue-400,
          .text-purple-400 {
            color: #0066cc !important;
          }
          .border-cyan-500,
          .border-slate-700 {
            border-color: #ccc !important;
          }
          button,
          .fixed,
          .sticky {
            display: none !important;
          }
          .bg-slate-900\\/40 {
            background: white !important;
            border: 1px solid #ccc !important;
          }
          table {
            border: 1px solid #ccc !important;
          }
          th, td {
            border: 1px solid #ccc !important;
            color: #000 !important;
          }
          th {
            background: #f0f0f0 !important;
          }
        }
      `}</style>
    </div>
  );
}