import { ZoomIn, ZoomOut } from "lucide-react";
import CircleButton from "@/components/ui/CircleButton";
import Button from "@/components/ui/Button";
import { MIN_SCALE } from "@/constants";
import { MAX_SCALE } from "@/constants";
import Tooltip from "@/components/ui/Tooltip";

interface PdfOperationButtonsProps {
  scale: number;
  onRotateAll: () => void;
  onRemovePDF: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
}

const PdfOperationButtons: React.FC<PdfOperationButtonsProps> = ({
  scale,
  onRotateAll,
  onRemovePDF,
  onZoomIn,
  onZoomOut,
}) => {
  return (
    <div className="flex justify-end gap-4">
      <Button type="primary" onClick={onRotateAll}>
        Rotate all
      </Button>
      <Tooltip content="Remove this PDF and select a new one">
        <Button type="secondary" onClick={onRemovePDF}>
          Remove PDF
        </Button>
      </Tooltip>
      <div
        aria-disabled={scale >= MAX_SCALE}
        className={scale >= MAX_SCALE ? "opacity-50 cursor-not-allowed" : ""}
      >
        <Tooltip content="Zoom in">
          <CircleButton
            onClick={() => {
              if (scale < MAX_SCALE) onZoomIn();
            }}
          >
            <ZoomIn />
          </CircleButton>
        </Tooltip>
      </div>
      <div
        aria-disabled={scale <= MIN_SCALE}
        className={scale <= MIN_SCALE ? "opacity-50 cursor-not-allowed" : ""}
      >
        <Tooltip content="Zoom out">
          <CircleButton
            onClick={() => {
              if (scale > MIN_SCALE) onZoomOut();
            }}
          >
            <ZoomOut />
          </CircleButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default PdfOperationButtons;
