import { PageSize } from "@/types";
import { Page } from "react-pdf";
import { RefreshCw } from "lucide-react";
import Loading from "@/components/ui/Loading";
interface PdfThumbnailProps {
  index: number;
  size: PageSize;
  scale: number;
  rotation: number;
  onRotate: (index: number, e?: React.MouseEvent) => void;
  onPageLoad: (page: PageSize, index: number) => void;
}

const PdfThumbnail: React.FC<PdfThumbnailProps> = ({
  index,
  size,
  scale,
  rotation,
  onRotate,
  onPageLoad,
}) => {
  console.log(rotation, "rotation");
  const BASE_SHORT = 180;
  const isPortrait = size.height >= size.width;
  let width, height, pageProps;

  if (isPortrait) {
    width = BASE_SHORT * scale;
    height = (size.height / size.width) * width;
    pageProps = { width };
  } else {
    height = BASE_SHORT * scale;
    width = (size.width / size.height) * height;
    pageProps = { height };
  }

  return (
    <div
      style={{ width, height }}
      className="bg-white rounded-lg shadow flex flex-col items-center justify-center overflow-hidden relative"
      onClick={() => onRotate(index)}
    >
      <button
        className="absolute top-1 right-1 bg-[#FF6B2B] rounded-full w-6 h-6 flex items-center justify-center shadow cursor-pointer z-10"
        type="button"
        tabIndex={-1}
        onClick={(e) => onRotate(index, e)}
      >
        <RefreshCw color="white" size={16} />
      </button>

      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            transform: `rotate(${rotation}deg)`,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Page
            pageNumber={index + 1}
            {...pageProps}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            loading={<Loading />}
            onLoadSuccess={(page) => onPageLoad(page, index)}
          />
        </div>
      </div>
      <span className="mt-2 w-full text-center italic text-lg text-gray-700">
        {index + 1}
      </span>
    </div>
  );
};

export default PdfThumbnail;
