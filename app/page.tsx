import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex justify-center">
      <div className="max-w-xl w-full">
        <Image
          src="/k8s-logo.png"
          alt="Kubernetes"
          width={120}
          height={200}
          className="mb-10"
        />
        <h1 className="text-xl font-medium text-slate-800">
          Next.js on Kubernetes
        </h1>
        <p className="text-slate-600 mb-8 border-b border-gray-100 pb-4 text-sm">
          Local Cloud-Native Deployment Lab
        </p>

        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-gray-50">
            <span className="text-slate-500">Cluster Type</span>
            <span className="font-mono text-sm bg-slate-100 px-2 py-1 rounded">
              Kind (Multi-Node)
            </span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-gray-50">
            <span className="text-slate-500">Nodes</span>
            <span className="font-mono text-sm bg-slate-100 px-2 py-1 rounded">
              1 Control-Plane, 1 Worker
            </span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-gray-50">
            <span className="text-slate-500">Networking</span>
            <span className="font-mono text-sm bg-slate-100 px-2 py-1 rounded">
              Nginx Ingress
            </span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-gray-50">
            <span className="text-slate-500">Status</span>
            <span className="text-green-600 font-medium flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Live in Pod
            </span>
          </div>
        </div>

        <div className="mt-10 text-xs text-slate-400 uppercase tracking-widest text-center">
          Built by @Chamod Dilshan
        </div>
      </div>
    </main>
  );
}
