import { useEffect, useRef } from "react";
import * as tmImage from "@teachablemachine/image";

export default function WebcamClassifier({ onPredict, canPredict }) {
  const webcamRef = useRef(null);
  const modelRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    async function init() {
      const modelURL = "/model/model.json";
      const metadataURL = "/model/metadata.json";

      modelRef.current = await tmImage.load(modelURL, metadataURL);

      const webcam = new tmImage.Webcam(300, 300, true);
      await webcam.setup();
      await webcam.play();

      if (!isMounted) return;

      webcamRef.current = webcam;
      containerRef.current.appendChild(webcam.canvas);

      startLoop();
    }

    function startLoop() {
      const loop = async () => {
        if (!webcamRef.current || !modelRef.current) return;

        webcamRef.current.update();

        const prediction = await modelRef.current.predict(
          webcamRef.current.canvas,
        );

        const best = prediction.reduce((a, b) =>
          a.probability > b.probability ? a : b,
        );

        if (canPredict) {
          if (best.probability > 0.95) onPredict(best.className);
          else onPredict("Nada");
        }

        animationRef.current = requestAnimationFrame(loop);
      };

      animationRef.current = requestAnimationFrame(loop);
    }

    init();

    //cleanup
    return () => {
      isMounted = false;

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      if (webcamRef.current) {
        webcamRef.current.stop();
      }
    };
  }, [onPredict]);

  return (
    <div
      ref={containerRef}
      className="rounded-2xl overflow-hidden border-4 border-gray-700 shadow-lg"
    />
  );
}
