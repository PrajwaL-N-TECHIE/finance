import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';

const FinanceTracker = lazy(() => import('./pages/FinanceTracker'));

const PageLoader = () => (
  <div className="min-h-screen bg-[#FAF8FF] bg-brutalist-grid flex flex-col items-center justify-center text-zinc-900 p-6">
    <div className="w-14 h-14 border-[3px] border-black bg-white rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_#000] mb-4 animate-bounce">
      <div className="w-6 h-6 border-4 border-purple-600 border-t-transparent rounded-full animate-spin" />
    </div>
    <p className="text-xs font-black tracking-widest text-purple-900 uppercase bg-purple-100 px-4 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000]">
      BUILDICY FINANCE OPS
    </p>
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
          className: '!border-2 !border-black !shadow-[4px_4px_0px_0px_#000] !rounded-xl !font-bold',
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
