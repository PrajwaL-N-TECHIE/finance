import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';

const FinanceTracker = lazy(() => import('./pages/FinanceTracker'));

const PageLoader = () => (
  <div className="min-h-screen bg-[#F8F9FD] flex flex-col items-center justify-center text-slate-900 p-6">
    <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-fintech border border-slate-100 mb-4 relative">
      <div className="w-8 h-8 border-3 border-purple-600 border-t-transparent rounded-full animate-spin" />
    </div>
    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 text-purple-700 font-semibold text-xs border border-purple-100/80 shadow-fintech-xs">
      <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
      <span>BUILDICY FINANCE OPS</span>
    </div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Toaster 
        position="top-right" 
        theme="light" 
        richColors 
        toastOptions={{
          className: '!rounded-2xl !border !border-slate-200/80 !shadow-fintech-lg !font-medium !text-xs !bg-white/95 !backdrop-blur-md',
        }}
      />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Main Finance Dashboard Routes */}
          <Route path="/" element={<FinanceTracker />} />
          <Route path="/finance" element={<FinanceTracker />} />
          <Route path="/dashboard" element={<FinanceTracker />} />
          <Route path="/admin" element={<FinanceTracker />} />

          {/* Catch-all redirects to root */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
