export default function AnalysisHeader() {
  return (
    <div className="flex flex-col justify-center border-none outline-none">
      <h1 className="text-2xl font-black tracking-tight text-white m-0 p-0">
        Map Analysis
      </h1>
      <p className="text-xs sm:text-sm text-white/50 font-medium m-0 p-0">
        Select an AOI • Compare Time-1 vs Time-2 • Detect Encroachment & NDVI
        Drop
      </p>
    </div>
  );
}
