import { Loader2 } from "lucide-react";

function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50">
      <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
    </div>
  );
}

export default Loading;
